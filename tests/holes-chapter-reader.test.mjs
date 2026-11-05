import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import test from 'node:test';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('../', import.meta.url));
const unit = path.join(root, 'lessons/6si/unit-2');

test('Holes imports stop at chapter 18 for both text and audio', () => {
  for (const [folder, extension] of [['reading', 'js'], ['audiobook', 'mp3']]) {
    assert.deepEqual(fs.readdirSync(path.join(unit, folder)).sort(), Array.from({ length: 18 }, (_, i) => `chapter-${i + 1}.${extension}`).sort());
  }
  assert.ok(!fs.readdirSync(unit).some(file => file.endsWith('.epub')));
  for (let chapter = 1; chapter <= 18; chapter++) {
    const context = {};
    vm.runInNewContext(fs.readFileSync(path.join(unit, `reading/chapter-${chapter}.js`), 'utf8'), context);
    assert.deepEqual(Object.keys(context.LearningDeckHolesChapters), [String(chapter)]);
    const data = context.LearningDeckHolesChapters[chapter];
    assert.equal(data.book, 'Holes');
    assert.equal(data.author, 'Louis Sachar');
    assert.equal(data.number, chapter);
    assert.equal(data.paragraphs.length, [18, 7, 43, 48, 58, 41, 189, 8, 64, 42, 30, 53, 46, 51, 29, 56, 22, 27][chapter - 1]);
    for (const p of data.paragraphs) {
      assert.equal(typeof p.indent, 'boolean');
      for (const run of p.runs) {
        assert.equal(typeof run.text, 'string');
        assert.equal(typeof run.italic, 'boolean');
        assert.equal(typeof run.bold, 'boolean');
      }
    }
  }
});

test('existing Holes Week 1 audio mappings are retained', () => {
  const expected = { 1: [1, 2, 3], 2: [4, 5], 3: [6, 7], 5: [7, 7, 7] };
  for (const [lesson, chapters] of Object.entries(expected)) {
    const html = fs.readFileSync(path.join(unit, `week-1/lesson-${lesson}/index.html`), 'utf8');
    assert.ok(html.includes('data-reader-book="holes"'));
    assert.ok(html.includes('holes-chapter-reader.css'));
    assert.ok(html.includes('amc-chapter-reader.js'));
    const numbers = [...html.matchAll(/<audio\b[^>]*data-chapter="(\d+)"/g)].map(match => Number(match[1]));
    assert.deepEqual(numbers, chapters);
    const audioSources = [...html.matchAll(/<audio\b[^>]*src="([^"]+)"/g)].map(match => match[1]);
    assert.deepEqual(audioSources, chapters.map(chapter => `../../audiobook/chapter-${chapter}.mp3?v=loudness-20261102`));
    const ids = [...html.matchAll(/<audio\b[^>]*id="([^"]+)"/g)].map(match => match[1]);
    assert.equal(new Set(ids).size, ids.length);
    for (const [, script] of html.matchAll(/<script\b[^>]*>([\s\S]*?)<\/script>/gi)) new vm.Script(script);
  }
  for (const lesson of [4, 6]) {
    const html = fs.readFileSync(path.join(unit, `week-1/lesson-${lesson}/index.html`), 'utf8');
    assert.ok(!html.includes('data-reader-book'));
  }
});

test('new Holes audio and text are attached to matching reading slides', () => {
  for (const [week, lesson, chapters] of [[1, 7, [8, 9, 10]], [2, 8, [11, 12, 13]], [2, 9, [14, 15]], [2, 11, [16, 17, 18]]]) {
    const html = fs.readFileSync(path.join(unit, `week-${week}/lesson-${lesson}/index.html`), 'utf8');
    assert.ok(html.includes('data-reader-book="holes"') && html.includes('amc-chapter-reader.js'));
    const readingSlides = [...html.matchAll(/<section\b[^>]*data-title="Read ch (\d+)"[^>]*>([\s\S]*?)<\/section>/g)];
    assert.deepEqual(readingSlides.map(match => Number(match[1])), chapters);
    for (const [, chapter, body] of readingSlides) {
      assert.ok(body.includes(`data-chapter="${chapter}"`) && body.includes(`src="../../audiobook/chapter-${chapter}.mp3"`));
    }
  }
});
