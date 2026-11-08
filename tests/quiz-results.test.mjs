import test from 'node:test';
import assert from 'node:assert/strict';
import { randomUUID } from 'node:crypto';
import { makeQuizHandler, schoolIdentity, ROUNDS } from '../netlify/functions/lib/quiz-results-core.mjs';
import { createSheetsWriter, attemptValues, HEADERS, ATTEMPTS, OVERVIEW_FORMULA, SKILLS_FORMULA } from '../netlify/functions/lib/quiz-sheets.mjs';

const NOW = Date.parse('2026-11-14T01:00:00Z');
const person = { sub: 'student1', hd: 'ifs.edu.sg', email: 'example@ifs.edu.sg', email_verified: true, name: 'Example Student' };
const result = () => ({ lessonId: '5si-u2-w2-l6', roundId: 'r1', correct: 10, total: 12, points: 1400, attemptId: randomUUID(), startedAt: new Date(NOW - 600000).toISOString(), durationSeconds: 600 });
function memoryStore() {
  const values = new Map(); let version = 0;
  return { values,
    async getWithMetadata(key) { return values.has(key) ? structuredClone(values.get(key)) : null; },
    async setJSON(key, data, options = {}) {
      const old = values.get(key);
      if (options.onlyIfNew && old || options.onlyIfMatch && options.onlyIfMatch !== old?.etag) return { modified: false };
      values.set(key, { data: structuredClone(data), etag: String(++version) }); return { modified: true };
    }
  };
}
function setup(options = {}) {
  const db = memoryStore(), written = new Map(); let payload = person;
  const settings = { enabled: true, clientId: 'test-client.apps.googleusercontent.com', sheetId: 'test-sheet', ...options.config };
  const handler = makeQuizHandler({ config: () => settings, store: () => db,
    verify: async (token, audience) => { assert.equal(audience, settings.clientId); if (token !== 'valid-token') throw Error('Invalid'); return payload; },
    now: () => options.time ?? NOW,
    write: options.write || (async record => { written.set(record.row, record); }) });
  return { handler, db, written, identity(value) { payload = value; } };
}
function req(body = result(), { action = '', method = 'POST', token = 'valid-token', origin = 'https://sylscorner.netlify.app' } = {}) {
  return new Request('https://sylscorner.netlify.app/.netlify/functions/quiz-results' + (action ? '?action=' + action : ''), {
    method, headers: { Origin: origin, 'Content-Type': 'application/json', ...(token ? { Authorization: 'Bearer ' + token } : {}) },
    ...(method === 'POST' ? { body: JSON.stringify(body) } : {})
  });
}

test('verified school identity is required; an email suffix alone is insufficient', () => {
  assert.equal(schoolIdentity(person).email, person.email);
  for (const change of [{ hd: undefined }, { hd: 'gmail.com' }, { email_verified: false }, { email: 'fake@ifs.edu.sg.evil.test' }, { email: 'fake@gmail.com' }, { sub: '' }]) assert.throws(() => schoolIdentity({ ...person, ...change }));
});
test('public config contains no credentials or Sheet identifier and results cannot be read', async () => {
  const { handler } = setup();
  const config = await (await handler(req(null, { method: 'GET', action: 'config' }))).json();
  assert.deepEqual(Object.keys(config).sort(), ['clientId', 'domain', 'enabled']);
  assert.equal((await handler(req(null, { method: 'GET' }))).status, 403);
  assert.equal((await setup({ config: { enabled: false } }).handler(req())).status, 503);
});
test('login validates identity but does not store a result or bypass the release gate', async () => {
  const s = setup({ time: Date.parse('2026-11-08T00:00:00Z') });
  assert.equal((await s.handler(req({}, { action: 'session' }))).status, 200);
  assert.equal((await s.handler(req())).status, 403);
  assert.equal(s.db.values.size, 0);
});
test('unauthenticated, wrong-domain and cross-origin requests are rejected', async () => {
  const s = setup();
  assert.equal((await s.handler(req(result(), { token: '' }))).status, 401);
  assert.equal((await s.handler(req(result(), { token: 'invalid' }))).status, 401);
  assert.equal((await s.handler(req(result(), { origin: 'https://evil.test' }))).status, 403);
  s.identity({ ...person, hd: 'gmail.com' });
  assert.equal((await s.handler(req())).status, 401);
  assert.equal(s.db.values.size, 0);
});
test('save an attempt, retry idempotently, then retain a worse replay separately', async () => {
  const s = setup(), body = result();
  assert.equal((await s.handler(req(body))).status, 200);
  assert.equal((await s.handler(req(body))).status, 200);
  assert.equal(s.written.size, 1);
  assert.equal((await s.handler(req({ ...body, attemptId: randomUUID(), correct: 2, points: 200 }))).status, 200);
  assert.equal(s.written.size, 2);
  assert.deepEqual([...s.written.values()].map(record => record.attempt.correct), [10, 2]);
  assert.equal((await s.handler(req({ ...body, correct: 9 }))).status, 409);
});
test('concurrent submissions and duplicate requests use distinct stable Sheet rows', async () => {
  const s = setup(), bodies = Array.from({ length: 8 }, result);
  const responses = await Promise.all([...bodies, bodies[0], bodies[1]].map(body => s.handler(req(body))));
  assert.ok(responses.every(response => response.status === 200));
  assert.equal(s.written.size, 8);
  assert.equal(new Set([...s.written.values()].map(record => record.attempt.attemptId)).size, 8);
});
test('a failed Google write is retried at the same row, with the original submission time', async () => {
  let fail = true; const rows = [];
  const s = setup({ write: async record => { rows.push(record); if (fail) throw Error('Google unavailable'); } });
  const body = result();
  assert.equal((await s.handler(req(body))).status, 503);
  fail = false;
  assert.equal((await s.handler(req(body))).status, 200);
  assert.equal(rows[0].row, rows[1].row);
  assert.equal(rows[0].submittedAt, rows[1].submittedAt);
});
test('impossible, malformed and unknown-lesson results do not write anything', async () => {
  const s = setup();
  for (const change of [{ correct: 13 }, { total: 1 }, { points: 99999 }, { points: 100 }, { points: 1401 }, { roundId: 'constructor' }, { lessonId: 'unknown' }, { attemptId: 'fake' }, { startedAt: 'tomorrow' }, { durationSeconds: -1 }]) assert.equal((await s.handler(req({ ...result(), ...change }))).status, 400, JSON.stringify(change));
  assert.equal(s.db.values.size, 0);
});
test('all nine round score denominators are accepted with server-defined names and skills', async () => {
  const s = setup();
  for (const [roundId, [, , total]] of Object.entries(ROUNDS)) assert.equal((await s.handler(req({ ...result(), roundId, total, correct: total, points: total * 100, name: 'SPOOFED', email: 'someone-else@ifs.edu.sg' }))).status, 200);
  for (const record of s.written.values()) {
    const cells = attemptValues(record);
    assert.equal(cells[9], person.name); assert.equal(cells[10], person.email);
    assert.equal(cells[13], 1); assert.equal(cells[7], ROUNDS[record.attempt.roundId][1]);
  }
});
test('Sheets writer keeps arbitrary names as RAW text; only trusted reporting formulas are evaluated', async () => {
  const calls = [];
  const sheets = [ATTEMPTS, 'Learning Deck Overview', 'Learning Deck Skills'].map((title, sheetId) => ({ properties: { title, sheetId, gridProperties: { rowCount: 1000 } } }));
  const writer = createSheetsWriter(async options => { calls.push(options); return { data: options.url.includes('?fields=') ? { sheets } : { values: [HEADERS] } }; });
  const record = { row: 2, submittedAt: new Date(NOW).toISOString(), identity: { id: person.sub, email: person.email, name: '=IMPORTXML("unsafe")' }, attempt: result() };
  await writer(record, { sheetId: 'test-sheet' });
  const raw = calls.find(call => call.method === 'PUT' && call.url.includes('valueInputOption=RAW'));
  assert.equal(raw.data.values[0][9], record.identity.name);
  const formula = calls.find(call => call.method === 'PUT' && call.url.includes('valueInputOption=USER_ENTERED'));
  assert.match(formula.data.values[0][0], /COUNTIFS/);
  assert.match(OVERVIEW_FORMULA, /max\(S\).*max\(N\)/);
  assert.match(SKILLS_FORMULA, /avg\(H\).*avg\(I\)/);
});
