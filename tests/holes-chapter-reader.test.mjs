import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import test from 'node:test';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('../', import.meta.url));
const unit = path.join(root, 'lessons/6si/unit-2');

test('Holes imports stop at chapter 7 for both text and audio', () => {
  for (const [folder, extension] of [['reading', 'js'], ['audiobook', 'mp3']]) {
    assert.deepEqual(fs.readdirSync(path.join(unit, folder)).sort(), Array.from({ length: 7 }, (_, i) => `chapter-${i + 1}.${extension}`));
  }
  assert.ok(!fs.readdirSync(unit).some(file => file.endsWith('.epub')));
  for (let chapter = 1; chapter <= 7; chapter++) {
    const context = {};
    vm.runInNewContext(fs.readFileSync(path.join(unit, `reading/chapter-${chapter}.js`), 'utf8'), context);
    assert.deepEqual(Object.keys(context.LearningDeckHolesChapters), [String(chapter)]);
    const data = context.LearningDeckHolesChapters[chapter];
    assert.equal(data.book, 'Holes');
    assert.equal(data.author, 'Louis Sachar');
    assert.equal(data.number, chapter);
    assert.equal(data.paragraphs.length, [18, 7, 43, 48, 58, 41, 189][chapter - 1]);
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

test('Holes reading players are attached only to Week 1 reading lessons', () => {
  const expected = { 1: [1, 2, 3], 2: [4, 5], 3: [6, 7], 5: [7, 7, 7] };
  for (const [lesson, chapters] of Object.entries(expected)) {
    const html = fs.readFileSync(path.join(unit, `week-1/lesson-${lesson}/index.html`), 'utf8');
    assert.ok(html.includes('data-reader-book="holes"'));
    assert.ok(html.includes('holes-chapter-reader.css'));
    assert.ok(html.includes('amc-chapter-reader.js'));
    const numbers = [...html.matchAll(/<audio\b[^>]*data-chapter="(\d+)"/g)].map(match => Number(match[1]));
    assert.deepEqual(numbers, chapters);
    const ids = [...html.matchAll(/<audio\b[^>]*id="([^"]+)"/g)].map(match => match[1]);
    assert.equal(new Set(ids).size, ids.length);
    for (const [, script] of html.matchAll(/<script\b[^>]*>([\s\S]*?)<\/script>/gi)) new vm.Script(script);
  }
  for (const lesson of [4, 6]) {
    const html = fs.readFileSync(path.join(unit, `week-1/lesson-${lesson}/index.html`), 'utf8');
    assert.ok(!html.includes('data-reader-book'));
  }
});
