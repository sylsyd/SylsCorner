import { createHash } from 'node:crypto';
import { lessonReleases } from '../../../js/lesson-releases.js';

export const SCHOOL_DOMAIN = 'ifs.edu.sg';
export const LESSON_ID = '5si-u2-w2-l6';
export const LESSON_TITLE = 'The Kingdom Road';
export const LESSON_PATH = '/lessons/5si/unit-2/week-2/lesson-6';
export const ROUNDS = {
  r1: ['Chapter quiz: the first tale', 'Knowing the story', 12],
  r2: ['True or false?', 'Knowing the story', 10],
  r3: ['Chapter quiz: Understanding and Little Talk', 'Knowing the story', 12],
  r4: ['Who said it?', 'Knowing the story', 10],
  r5: ['Best quote for the claim', 'Choosing evidence', 16],
  r6: ['Spot the mistake', 'Setting out quotes', 10],
  r7: ['Punctuate the quote', 'Setting out quotes', 8],
  r8: ['Complete the quote', 'Choosing evidence', 10],
  r9: ['Build the paragraph', 'Paragraphs (PEEL)', 6]
};
const uuid = /^[a-f0-9]{8}-[a-f0-9]{4}-4[a-f0-9]{3}-[89ab][a-f0-9]{3}-[a-f0-9]{12}$/i;
const reply = (data, status = 200) => new Response(JSON.stringify(data), {
  status, headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store', 'X-Content-Type-Options': 'nosniff' }
});
const digest = value => createHash('sha256').update(value).digest('hex');

export function schoolIdentity(payload) {
  if (!payload || payload.hd !== SCHOOL_DOMAIN || payload.email_verified !== true ||
      typeof payload.sub !== 'string' || !/^[a-zA-Z0-9_-]{1,128}$/.test(payload.sub) ||
      typeof payload.email !== 'string' || payload.email.length > 254 ||
      !new RegExp('^[^@\\s]+@' + SCHOOL_DOMAIN.replaceAll('.', '\\.') + '$', 'i').test(payload.email)) {
    throw new Error('School account required');
  }
  return { id: payload.sub, email: payload.email.toLowerCase(), name: String(payload.name || payload.email.split('@')[0]).slice(0, 120) };
}

// Reserve one stable Sheet row per attempt. Repeating a request overwrites that
// same row, including after an uncertain response from Google; it never appends twice.
export async function reserveAttempt(db, sheetId, identity, attempt, now) {
  const prefix = 'sheets/' + digest(sheetId);
  const key = prefix + '/attempts/' + digest(identity.id + ':' + attempt.attemptId);
  const existing = await db.getWithMetadata(key, { type: 'json' });
  if (existing) return matching(existing.data);
  let row;
  for (let tries = 0; tries < 30; tries++) {
    const counterKey = prefix + '/next-row';
    const counter = await db.getWithMetadata(counterKey, { type: 'json' });
    row = counter?.data?.next || 2;
    const result = await db.setJSON(counterKey, { next: row + 1 }, counter ? { onlyIfMatch: counter.etag } : { onlyIfNew: true });
    if (result.modified) break;
    row = null;
  }
  if (!row) throw new Error('Results busy');
  const record = { row, submittedAt: new Date(now).toISOString(), identity, attempt };
  const written = await db.setJSON(key, record, { onlyIfNew: true });
  if (written.modified) return record;
  const winner = await db.getWithMetadata(key, { type: 'json' });
  if (!winner) throw new Error('Results busy');
  return matching(winner.data);

  function matching(record) {
    if (JSON.stringify(record.attempt) !== JSON.stringify(attempt)) throw new Error('Attempt changed');
    return record;
  }
}

export function makeQuizHandler({ config, verify, store, write, now = Date.now }) {
  return async request => {
    const url = new URL(request.url);
    const settings = config();
    if (request.method === 'GET') {
      if (url.searchParams.get('action') !== 'config') return reply({ error: 'Results are private.' }, 403);
      return reply({ enabled: Boolean(settings.enabled), domain: SCHOOL_DOMAIN,
        ...(settings.enabled ? { clientId: settings.clientId } : {}) });
    }
    if (request.method !== 'POST') return reply({ error: 'Method not allowed.' }, 405);
    if (request.headers.get('origin') !== url.origin) return reply({ error: 'Use the quiz on this website.' }, 403);
    if (!settings.enabled) return reply({ error: 'School score saving has not been connected yet.' }, 503);
    if (!request.headers.get('content-type')?.startsWith('application/json')) return reply({ error: 'JSON required.' }, 415);
    let body;
    try {
      const raw = await request.text();
      if (Buffer.byteLength(raw) > 12000) return reply({ error: 'Request too large.' }, 413);
      body = JSON.parse(raw);
    } catch { return reply({ error: 'Invalid request.' }, 400); }
    const token = request.headers.get('authorization')?.replace(/^Bearer /, '');
    if (!token || token.length > 10000) return reply({ error: 'Sign in with your school Google account.' }, 401);
    let identity;
    try { identity = schoolIdentity(await verify(token, settings.clientId)); }
    catch { return reply({ error: 'Sign in with your @ifs.edu.sg Google account.' }, 401); }
    if (url.searchParams.get('action') === 'session') return reply({ identity });
    if (url.searchParams.has('action')) return reply({ error: 'Unknown action.' }, 400);
    if (now() < (lessonReleases.get(LESSON_PATH) || 0)) return reply({ error: 'This lesson is not available yet.' }, 403);
    const round = Object.hasOwn(ROUNDS, body?.roundId || '') ? ROUNDS[body.roundId] : null;
    if (!round || body.lessonId !== LESSON_ID || !uuid.test(body.attemptId || '') ||
        !Number.isInteger(body.correct) || body.correct < 0 || body.correct > round[2] || body.total !== round[2] ||
        !Number.isInteger(body.points) || body.points < body.correct * 100 || body.points > body.correct * 200 || body.points % 20 ||
        typeof body.startedAt !== 'string' || !Number.isFinite(Date.parse(body.startedAt)) ||
        Date.parse(body.startedAt) > now() + 60000 || now() - Date.parse(body.startedAt) > 31 * 86400000 ||
        !Number.isInteger(body.durationSeconds) || body.durationSeconds < 0 || body.durationSeconds > 86400) {
      return reply({ error: 'Invalid quiz result.' }, 400);
    }
    const attempt = { lessonId: LESSON_ID, roundId: body.roundId, attemptId: body.attemptId,
      correct: body.correct, total: round[2], points: body.points,
      startedAt: new Date(body.startedAt).toISOString(), durationSeconds: body.durationSeconds };
    try {
      const record = await reserveAttempt(store(), settings.sheetId, identity, attempt, now());
      await write(record, settings);
      return reply({ saved: true, attemptId: attempt.attemptId });
    } catch (error) {
      if (error.message === 'Attempt changed') return reply({ error: 'This attempt has already been recorded with different scores.' }, 409);
      // Do not log identity, scores, tokens or service-account credentials.
      console.error('Quiz result saving failed:', error.name);
      return reply({ error: 'Not saved online yet. Keep this page open and retry.' }, 503);
    }
  };
}
