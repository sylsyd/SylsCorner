import assert from 'node:assert/strict';
import test from 'node:test';
import { existsSync } from 'node:fs';
import { handleLessonRelease } from '../netlify/lesson-release.mjs';
import { lessonReleases, privateLessonFiles } from '../js/lesson-releases.js';

const root = 'https://example.net';
const privateLesson = '/lessons/5si/unit-2/week-2/lesson-4';
const audio = '/lessons/6si/unit-2/audiobook/chapter-19.mp3';
const example = new Blob(['123456789']);
const noLoad = () => assert.fail('Unreleased material must never be loaded');

test('all scheduled URLs are locked until midnight Singapore time', async () => {
  assert.equal(lessonReleases.get(privateLesson), Date.UTC(2026, 10, 11, 16));
  for (const [path, release] of lessonReleases) {
    const request = new Request(root + path);
    const result = await handleLessonRelease(request, release - 1, noLoad);
    assert.equal(result.status, 403, path);
    assert.equal(result.headers.get('cache-control'), 'no-store');
    assert.match(await result.text(), /midnight Singapore time/);
    const head = await handleLessonRelease(new Request(request, { method: 'HEAD' }), release - 1, noLoad);
    assert.equal(head.status, 403);
    assert.equal(await head.text(), '');
  }
});

test('alternate URLs and child paths cannot bypass the date', async () => {
  for (const path of [privateLesson + '/', privateLesson + '/index.html?preview=1',
    privateLesson.toUpperCase() + '/index.html', privateLesson.replace('lesson', '%6cesson'),
    privateLesson + '/sub/file.pdf', privateLesson.replace('/week-2/', '//week-2/')]) {
    const result = await handleLessonRelease(new Request(root + path), 0, noLoad);
    assert.equal(result.status, 403, path);
  }
});

test('private files are served on schedule while earlier lessons pass through', async () => {
  const release = lessonReleases.get(privateLesson);
  const result = await handleLessonRelease(new Request(root + privateLesson + '/'), release, key => {
    assert.equal(key, privateLesson.slice(1) + '/index.html');
    return example;
  });
  assert.equal(result.status, 200);
  assert.equal(await result.text(), '123456789');
  const redirect = await handleLessonRelease(new Request(root + privateLesson), release, noLoad);
  assert.equal(redirect.headers.get('location'), root + privateLesson + '/');
  assert.equal(await handleLessonRelease(new Request(root + '/lessons/5si/unit-2/week-1/lesson-1/'), 0, noLoad), undefined);
  const old = '/lessons/6si/unit-2/week-2/lesson-8';
  assert.equal(await handleLessonRelease(new Request(root + old + '/index.html'), lessonReleases.get(old), noLoad), undefined);
});

test('private audio supports byte ranges after release', async () => {
  const release = lessonReleases.get(audio);
  const request = new Request(root + audio, { headers: { Range: 'bytes=1-3' } });
  assert.equal((await handleLessonRelease(request, release - 1, noLoad)).status, 403);
  const result = await handleLessonRelease(request, release, () => example);
  assert.equal(result.status, 206);
  assert.equal(result.headers.get('content-range'), 'bytes 1-3/9');
  assert.equal(await result.text(), '234');
});

test('each private file has a release and is absent from the public checkout', () => {
  for (const file of privateLessonFiles) {
    assert.ok(lessonReleases.has(file.replace(/\/index\.html$/, '')), file);
    assert.equal(existsSync(new URL('..' + file, import.meta.url)), false, file);
  }
});
