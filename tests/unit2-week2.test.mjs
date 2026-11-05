import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import test from 'node:test';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('../', import.meta.url));
const lessons = [
  ['5si', 1, 11], ['5si', 2, 10], ['5si', 3, 9], ['6si', 8, 11], ['6si', 9, 10], ['6si', 10, 9], ['6si', 11, 11], ['6lva', 5, 9], ['6lva', 6, 8], ['6lva', 7, 8]
];

test('Week 2 lessons retain student activities and exclude private teaching material', () => {
  for (const [classId, lesson, count] of lessons) {
    const html = fs.readFileSync(path.join(root, `lessons/${classId}/unit-2/week-2/lesson-${lesson}/index.html`), 'utf8');
    assert.ok(html.includes(`href="/lessons/${classId}/unit-2/week-2/"`));
    assert.ok(html.includes('student-activity') && html.includes('unit-activity-nav.css'));
    assert.ok(!/Teacher notes|Teacher pack|Flow and answers|Tiers today|Names and notes|Sounds guide/.test(html));
    if (classId === '6lva') {
      const stages = html.match(/var STAGES=([\s\S]*?);/)[1];
      assert.equal(vm.runInNewContext(stages).length, count);
      assert.ok(!/\btn\('|function tpFlow|function tpTiers/.test(html));
      assert.ok(html.includes('data-a="exshow"') || html.includes('Write #2'));
    } else {
      assert.equal([...html.matchAll(/<section\b[^>]*class="[^"]*\bslide\b/g)].length, count);
      const notes = [...html.matchAll(/<div class="notes"([^>]*)>([\s\S]*?)<\/div>/g)];
      assert.equal(notes.length, count);
      for (const [, attributes, content] of notes) {
        assert.ok(attributes.includes('hidden'));
        assert.equal(content, '');
      }
    }
    for (const [, script] of html.matchAll(/<script\b[^>]*>([\s\S]*?)<\/script>/gi)) new vm.Script(script);
  }
});

test('each Week 2 menu links all published lessons', () => {
  for (const classId of ['5si', '6si', '6lva']) {
    const html = fs.readFileSync(path.join(root, `lessons/${classId}/unit-2/week-2/index.html`), 'utf8');
    const hrefs = [...html.matchAll(/href="([^"]*\/week-2\/lesson-\d+\/)"/g)].map(match => match[1]);
    assert.deepEqual(hrefs, lessons.filter(([id]) => id === classId).map(([, number]) => `/lessons/${classId}/unit-2/week-2/lesson-${number}/`));
  }
  assert.ok(fs.readFileSync(path.join(root, 'lessons/6lva/unit-2/unit.html'), 'utf8').includes('href="/lessons/6lva/unit-2/week-2/"'));
});

test('A Monster Calls planner links teaching days, not the Week 2 holiday', () => {
  const html = fs.readFileSync(path.join(root, 'lessons/5si/unit-2/scope-and-sequence.html'), 'utf8');
  const functionCode = html.slice(html.indexOf('function classroomActivityLink'), html.indexOf('function openLesson'));
  const context = { esc: value => value };
  vm.runInNewContext(functionCode + 'globalThis.link=classroomActivityLink;', context);
  assert.ok(context.link('w2-1').includes('/week-2/lesson-1/'));
  assert.ok(context.link('w2-2').includes('/week-2/lesson-2/'));
  assert.ok(context.link('w1-0').includes('/week-1/lesson-1/'));
  assert.equal(context.link('w2-0'), '');
  assert.ok(context.link('w1-4').includes('/week-1/lesson-5/'));
  assert.ok(context.link('w2-3').includes('/week-2/lesson-3/'));
  assert.equal(context.link('w2-4'), '');
});

test('Holes planner exposes only published Week 2 activities', () => {
  const script = fs.readFileSync(path.join(root, 'js/holes-planner.js'), 'utf8');
  for (const [number, expected] of [[8, true], [9, true], [10, true], [11, true], [12, false]]) {
    const links = [];
    const template = { id: `lesson-${number - 1}`, dataset: { week: 'w2' }, content: { cloneNode() { return {}; } } };
    const nodes = {
      'lesson-dialog': { open: false, showModal() { this.open = true; } },
      'lesson-body': { replaceChildren() {}, querySelector() { return null; }, append(link) { links.push(link); } },
      'previous-lesson': {}, 'next-lesson': {}, 'close-lesson': { focus() {} }
    };
    const document = { querySelectorAll: selector => selector === 'template[data-week]' ? [template] : [], getElementById: id => nodes[id], createElement: () => ({}) };
    vm.runInNewContext(script.slice(0, script.indexOf('function moveLesson')) + `openLesson('${template.id}');`, { document });
    assert.equal(links.length, Number(expected));
    if (expected) assert.equal(links[0].href, `/lessons/6si/unit-2/week-2/lesson-${number}/`);
  }
});
