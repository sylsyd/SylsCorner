import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';
import test from 'node:test';
import { lessonReleases, privateLessonFiles } from '../js/lesson-releases.js';

const root = fileURLToPath(new URL('../', import.meta.url));
const unit = path.join(root, 'lessons/5si/unit-2');
const titles = ['A Monster Calls', 'Breakfast', 'School', 'Life Writing', 'Three Stories', 'Grandma', 'The Wildness of Stories', 'The First Tale', 'The Rest of the First Tale', 'Understanding', 'Little Talk'];
const paragraphCounts = [60, 58, 44, 46, 79, 55, 54, 50, 48, 67, 54];

test('only chapters 1 to 11 are available, with Week 2 audio kept in private storage', () => {
  assert.deepEqual(fs.readdirSync(path.join(unit, 'reading')).sort(), titles.map((_, i) => `chapter-${i + 1}.js`).sort());
  assert.deepEqual(fs.readdirSync(path.join(unit, 'audiobook')).sort(), Array.from({ length: 7 }, (_, i) => `chapter-${i + 1}.mp3`));
  const prefix = '/lessons/5si/unit-2/audiobook/';
  assert.deepEqual([...privateLessonFiles].filter(file => file.startsWith(prefix)).sort(),
    [8, 9, 10, 11].map(n => prefix + `chapter-${n}.mp3`).sort());
  assert.ok(!fs.readdirSync(unit).some(file => file.endsWith('.epub')));
});

test('chapter data preserves complete paragraphs and safe inline emphasis', () => {
  for (let number = 1; number <= titles.length; number++) {
    const context = {};
    vm.runInNewContext(fs.readFileSync(path.join(unit, `reading/chapter-${number}.js`), 'utf8'), context);
    assert.deepEqual(Object.keys(context.LearningDeckChapters), [String(number)]);
    const chapter = context.LearningDeckChapters[number];
    assert.equal(chapter.number, number);
    assert.equal(chapter.title, titles[number - 1]);
    assert.equal(chapter.author, 'Patrick Ness');
    assert.equal(chapter.paragraphs.length, paragraphCounts[number - 1]);
    let italic = 0;
    for (const paragraph of chapter.paragraphs) {
      assert.equal(typeof paragraph.indent, 'boolean');
      assert.equal(typeof paragraph.center, 'boolean');
      assert.ok([0, 1, 2].includes(paragraph.gap));
      assert.ok(paragraph.runs.length > 0);
      for (const run of paragraph.runs) {
        assert.equal(typeof run.text, 'string');
        assert.equal(typeof run.italic, 'boolean');
        assert.equal(typeof run.bold, 'boolean');
        assert.ok(!/<\/?(?:script|style|iframe)\b/i.test(run.text));
        if (run.italic) italic++;
      }
    }
    if (number <= 7) assert.ok(italic > 0, 'The source emphasis must be retained.');
  }
});

test('Week 2 reading slides use the matching recordings on their lesson release dates', () => {
  for (const [lesson, chapters] of [[2, [8, 9]], [3, [10, 11]]]) {
    const html = fs.readFileSync(path.join(unit, `week-2/lesson-${lesson}/index.html`), 'utf8');
    assert.ok(html.includes('amc-chapter-reader.js'));
    const sources = [...html.matchAll(/<audio id="chapter-(\d+)-audio"[^>]*controls preload="none" src="([^"]+)"/g)];
    assert.deepEqual(sources.map(([, number, src]) => [Number(number), src]), chapters.map(n => [n, `../../audiobook/chapter-${n}.mp3`]));
    for (const number of chapters) {
      const base = '/lessons/5si/unit-2';
      const date = lessonReleases.get(`${base}/week-2/lesson-${lesson}`);
      assert.ok(date);
      assert.equal(lessonReleases.get(`${base}/audiobook/chapter-${number}.mp3`), date);
    }
  }
});

test('all seven audio players have the reader enhancement without changing chapter mappings', () => {
  const mappings = { 1: [1, 2], 3: [3, 4, 5], 4: [6, 7] };
  for (const [lesson, chapters] of Object.entries(mappings)) {
    const html = fs.readFileSync(path.join(unit, `week-1/lesson-${lesson}/index.html`), 'utf8');
    assert.ok(html.includes('src="../../../../../js/amc-chapter-reader.js" defer'));
    assert.ok(html.includes('href="../../../../../css/amc-chapter-reader.css"'));
    assert.equal((html.match(/id="chapter-\d-audio"/g) || []).length, chapters.length);
    for (const chapter of chapters) assert.ok(html.includes(`id="chapter-${chapter}-audio"`));
    for (const [, code] of html.matchAll(/<script\b[^>]*>([\s\S]*?)<\/script>/gi)) new vm.Script(code);
  }
  new vm.Script(fs.readFileSync(path.join(root, 'js/amc-chapter-reader.js'), 'utf8'));
});
