import test from 'node:test';
import assert from 'node:assert/strict';
import { createHash, randomBytes } from 'node:crypto';
import { handleTeacherPreview, teacherSession } from '../netlify/teacher-preview.mjs';
import { handleLessonRelease } from '../netlify/lesson-release.mjs';

const origin = 'https://example.net';
const now = Date.UTC(2026, 10, 1);
const password = randomBytes(24).toString('base64url');
const settings = {
  salt: randomBytes(24).toString('hex'),
  signingKey: randomBytes(32).toString('hex')
};
settings.passwordHash = createHash('sha256').update(settings.salt + ':' + password).digest('hex');
const load = () => settings;
const request = (path, secret = password, headers = {}) => new Request(origin + path, {
  method: 'POST', headers: { origin, ...headers }, body: new URLSearchParams({ password: secret })
});

test('password login creates a signed HttpOnly session cookie and limits return locations', async () => {
  const result = await handleTeacherPreview(request('/teacher-preview?next=/lessons/5si/unit-2/week-4/lesson-1/'), now, load);
  assert.equal(result.status, 303);
  assert.equal(result.headers.get('location'), '/lessons/5si/unit-2/week-4/lesson-1/');
  const cookie = result.headers.get('set-cookie');
  assert.match(cookie, /Secure; HttpOnly; SameSite=Strict/);
  assert.doesNotMatch(cookie, /Max-Age|Expires/);
  const authenticated = new Request(origin, { headers: { Cookie: cookie.split(';')[0] } });
  assert.equal(await teacherSession(authenticated, now, settings), true);
  assert.equal(await teacherSession(authenticated, now + 365 * 86400000, settings), true);
  const tampered = new Request(origin, { headers: { Cookie: cookie.split(';')[0].replace(/\.[a-f0-9]/, '.z') } });
  assert.equal(await teacherSession(tampered, now, settings), false);
  const external = await handleTeacherPreview(request('/teacher-preview?next=//evil.example'), now, load);
  assert.equal(external.headers.get('location'), '/teacher-preview');
  const dashboard = await handleTeacherPreview(new Request(origin + '/teacher-preview', { headers: authenticated.headers }), now, load);
  assert.equal(dashboard.status, 200);
  assert.match(await dashboard.text(), /Week 4/);
});

test('incorrect passwords, cross-site posts and unauthenticated requests cannot unlock files', async () => {
  const wrong = await handleTeacherPreview(request('/teacher-preview', 'wrong'), now, load);
  assert.equal(wrong.status, 401);
  assert.equal(wrong.headers.get('set-cookie'), null);
  const crossSite = await handleTeacherPreview(request('/teacher-preview', password, { origin: 'https://evil.example' }), now, load);
  assert.equal(crossSite.status, 403);
  const student = await handleLessonRelease(new Request(origin + '/lessons/5si/unit-2/week-4/lesson-1/'), now, () => assert.fail('Private file loaded'));
  assert.equal(student.status, 403);
  assert.match(await student.text(), /Teacher preview/);
});

test('authenticated preview supports lesson HTML, chapter text, audio byte ranges and logout', async () => {
  const login = await handleTeacherPreview(request('/teacher-preview'), now, load);
  const cookie = login.headers.get('set-cookie').split(';')[0];
  const headers = { Cookie: cookie };
  for (const route of ['/lessons/5si/unit-2/week-4/lesson-1/', '/lessons/5si/unit-2/reading/chapter-21.js', '/lessons/5si/unit-2/audiobook/chapter-21.mp3']) {
    const request = new Request(origin + route, { headers: { ...headers, Range: 'bytes=1-3' } });
    const preview = await teacherSession(request, now, settings);
    assert.ok(preview);
    const response = await handleLessonRelease(request, now, () => new Blob(['123456789']), preview);
    assert.equal(response.status, route.endsWith('.mp3') ? 206 : 200);
    assert.equal(response.headers.get('cache-control'), 'private, no-store');
    assert.equal(response.headers.get('x-robots-tag'), 'noindex, nofollow');
  }
  const logout = await handleTeacherPreview(request('/teacher-preview/logout'), now, load);
  assert.match(logout.headers.get('set-cookie'), /Max-Age=0/);
  const rotated = { ...settings, signingKey: randomBytes(32).toString('hex') };
  assert.equal(await teacherSession(new Request(origin, { headers }), now, rotated), false);
});

