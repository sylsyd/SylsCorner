import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('../', import.meta.url));
const rules = new Map(fs.readFileSync(path.join(root, '_redirects'), 'utf8').split(/\r?\n/)
  .filter(line => line.trim() && !line.startsWith('#'))
  .map(line => { const [from, to] = line.trim().split(/\s+/); return [decodeURIComponent(from), to]; }));

export function resolveLocal(href, from = 'index.html') {
  const url = new URL(href.replace(/&amp;/g, '&'), 'https://site.local/' + from.split('/').map(encodeURIComponent).join('/'));
  let pathname = decodeURIComponent(url.pathname);
  const visited = new Set();
  while (rules.has(pathname)) {
    if (visited.has(pathname)) throw new Error('Redirect loop: ' + pathname);
    visited.add(pathname);
    pathname = decodeURIComponent(new URL(rules.get(pathname), url).pathname);
  }
  let file = path.join(root, pathname);
  if (fs.existsSync(file) && fs.statSync(file).isDirectory()) file = path.join(file, 'index.html');
  if (!fs.existsSync(file) && !path.extname(file) && fs.existsSync(file + '.html')) file += '.html';
  return { exists: fs.existsSync(file) && fs.statSync(file).isFile(), file, pathname };
}

export function auditLessonLinks() {
  const errors = [];
  let checked = 0;
  function scan(directory) {
    for (const entry of fs.readdirSync(path.join(root, directory), { withFileTypes: true })) {
      if (entry.name.startsWith('.') || entry.name === 'node_modules') continue;
      const relative = path.posix.join(directory, entry.name);
      if (entry.isDirectory()) { scan(relative); continue; }
      if (!entry.name.endsWith('.html')) continue;
      const html = fs.readFileSync(path.join(root, relative), 'utf8');
      const tags = [...html.matchAll(/<(?:a|img|source|video|script|link|iframe|audio|image|use)\b(?:[^"'<>]|"[^"]*"|'[^']*')*>/gi)].map(match => match[0]).join('\n');
      for (const match of tags.matchAll(/\b(?:href|src|poster)=(?:"([^"]*)"|'([^']*)')/gi)) {
        const href = match[1] ?? match[2];
        if (!href || /^(?:#|[a-z][a-z0-9+.-]*:)/i.test(href) || href.includes('${') || /['"]\s*\+|\+\s*['"]/.test(href)) continue;
        checked++;
        const result = resolveLocal(href, relative);
        if (!result.exists) errors.push({ page: relative, href, target: result.pathname });
      }
    }
  }
  scan('');
  for (const [from, to] of rules) {
    const result = resolveLocal(to);
    if (!result.exists) errors.push({ page: '_redirects', href: from, target: result.pathname });
  }
  return { checked, redirects: rules.size, errors };
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const result = auditLessonLinks();
  console.log(`Checked ${result.checked} local links and ${result.redirects} redirects.`);
  for (const error of result.errors.slice(0, 35)) console.error(`${error.page}: ${error.href} -> missing ${error.target}`);
  if (result.errors.length) { console.error(`${result.errors.length} broken links.`); process.exitCode = 1; }
}
