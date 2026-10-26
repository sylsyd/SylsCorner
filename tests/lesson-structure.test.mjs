import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';
import test from 'node:test';
import { resolveLocal } from '../scripts/check-lesson-links.mjs';

const root = fileURLToPath(new URL('../', import.meta.url));
const code = fs.readFileSync(path.join(root, 'js/new-lessons.js'), 'utf8');
const context = {};
vm.runInNewContext(code.slice(0, code.indexOf('  const params =')) + 'globalThis.catalog=lessons;})();', context);
const catalog = context.catalog;

function render(data, search = '') {
  const nodes = {};
  let redirected;
  const document = { body: { dataset: data }, getElementById(id) { return nodes[id] ??= { firstElementChild: {} }; } };
  vm.runInNewContext(code, { document, URLSearchParams, location: { search, replace(href) { redirected = href; } } });
  return { nodes, redirected };
}

test('all six units have a single entry page inside the class hierarchy', () => {
  for (const classId of ['5si', '6si', '6lva']) {
    for (const unit of [1, 2]) assert.ok(fs.existsSync(path.join(root, `lessons/${classId}/unit-${unit}/index.html`)));
  }
  assert.equal(fs.existsSync(path.join(root, '5si')), false);
  assert.equal(fs.existsSync(path.join(root, '6si')), false);
  assert.equal(fs.readdirSync(root).some(file => /^(?:5si|6si|6lva)-unit-|^(?:holes|amonstercalls|irishlegends).*\.html$/.test(file)), false);
});

test('every Unit 1 resource menu renders from its own lesson folder', () => {
  for (const key of Object.keys(catalog)) {
    const [classId, week, lesson] = key.split('-');
    const menu = `/lessons/${classId}/unit-1/week-${week}/${lesson === 'materials' ? 'materials' : `lesson-${lesson}`}/`;
    const result = resolveLocal(menu);
    assert.ok(result.exists, key + ' is missing its menu');
    const html = fs.readFileSync(result.file, 'utf8');
    assert.ok(html.includes(`data-class="${classId}"`) && html.includes(`data-week="${week}"`) && html.includes(`data-lesson="${lesson}"`));
    const { nodes, redirected } = render({ class: classId, week, lesson });
    assert.equal(redirected, undefined, key + ' unexpectedly redirected');
    assert.equal(nodes['back-link'].href, `/lessons/${classId}/unit-1/week-${week}/`);
    const links = [...nodes['resource-grid'].innerHTML.matchAll(/href="([^"]+)"/g)].map(match => match[1]);
    assert.equal(links.length, catalog[key].items.length);
    for (const href of links) {
      assert.ok(href.startsWith('/lessons/'), key + ' contains a relative resource URL');
      assert.ok(resolveLocal(href, menu).exists, key + ' has a missing resource: ' + href);
    }
  }
});

test('week menus generate working links from their new folder', () => {
  for (const classId of ['5si', '6si', '6lva']) {
    const unit = path.join(root, `lessons/${classId}/unit-1`);
    for (const week of fs.readdirSync(unit).filter(name => /^week-\d+$/.test(name))) {
      const html = fs.readFileSync(path.join(unit, week, 'index.html'), 'utf8');
      let rendered = '';
      const node = { set innerHTML(value) { rendered = value; } };
      for (const script of html.matchAll(/<script\b[^>]*>([\s\S]*?)<\/script>/gi)) {
        if (script[1].trim()) vm.runInNewContext(script[1], { document: { getElementById() { return node; } } });
      }
      for (const match of rendered.matchAll(/href="([^"]+)"/g)) {
        assert.ok(match[1].startsWith('/lessons/'), 'Week menu has a relative lesson URL');
        assert.ok(resolveLocal(match[1]).exists, match[1] + ' is missing');
      }
    }
  }
});

test('older query-string lesson links redirect to their matching lesson menu', () => {
  for (const key of Object.keys(catalog)) {
    const [classId, week, lesson] = key.split('-');
    const { redirected } = render({}, `?class=${classId}&week=${week}&lesson=${lesson}`);
    assert.equal(redirected, `/lessons/${classId}/unit-1/week-${week}/${lesson === 'materials' ? 'materials' : `lesson-${lesson}`}/`);
    assert.ok(resolveLocal(redirected).exists);
  }
});

test('bookmarked unit and lesson URLs resolve to the moved pages', () => {
  const aliases = {
    '/holes/unit': '/lessons/6si/unit-2/scope-and-sequence.html',
    '/holes/week-1/lesson-6': '/lessons/6si/unit-2/week-1/lesson-6/',
    '/amonstercalls/week-1': '/lessons/5si/unit-2/week-1/',
    '/irishlegends/unit': '/lessons/6lva/unit-2/unit.html',
    '/5si/week-1-lesson-1.html': '/lessons/5si/unit-1/week-1/lesson-1/'
  };
  for (const [legacy, canonical] of Object.entries(aliases)) {
    assert.equal(resolveLocal(legacy).file, resolveLocal(canonical).file);
    assert.ok(resolveLocal(legacy).exists);
  }
});
