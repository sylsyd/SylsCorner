import { lessonReleases, formatLessonDate } from '../js/lesson-releases.js';

export const previewSettingsKey = '_teacher-preview/settings.json';
const cookieName = '__Host-deck-teacher';
const encoder = new TextEncoder();
const sessionLength = 8 * 60 * 60 * 1000;

function hex(bytes) {
  return Array.from(new Uint8Array(bytes), byte => byte.toString(16).padStart(2, '0')).join('');
}

function unhex(text) {
  return Uint8Array.from(text.match(/../g) ?? [], byte => parseInt(byte, 16));
}

function escape(text) {
  return String(text).replace(/[&<>"']/g, character => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  })[character]);
}

async function signingKey(settings) {
  return crypto.subtle.importKey('raw', unhex(settings.signingKey), { name: 'HMAC', hash: 'SHA-256' }, false, ['sign', 'verify']);
}

export async function teacherSession(request, now, settings) {
  if (!settings) return false;
  const value = request.headers.get('cookie')?.split(';').map(part => part.trim())
    .find(part => part.startsWith(cookieName + '='))?.slice(cookieName.length + 1);
  const match = value?.match(/^(\d{13})\.([a-f0-9]{64})$/);
  if (!match) return false;
  const expiry = Number(match[1]);
  if (expiry <= now || expiry > now + sessionLength) return false;
  return crypto.subtle.verify('HMAC', await signingKey(settings), unhex(match[2]), encoder.encode(match[1]));
}

function cookie(value, age) {
  return cookieName + '=' + value + '; Path=/; Secure; HttpOnly; SameSite=Strict; Max-Age=' + age;
}

function redirect(path, sessionCookie) {
  const headers = { Location: path, 'Cache-Control': 'private, no-store' };
  if (sessionCookie) headers['Set-Cookie'] = sessionCookie;
  return new Response(null, { status: 303, headers });
}

function returnPath(value) {
  if (!value || !/^\/lessons\/[a-z0-9/-]+\/?$/.test(value)) return '/teacher-preview';
  return value;
}

function page(content, status = 200) {
  return new Response('<!doctype html><html lang="en"><head><meta charset="utf-8">' +
    '<meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex,nofollow">' +
    '<title>Teacher preview | The Learning Deck</title><link rel="stylesheet" href="/css/lesson-release.css">' +
    '<link rel="stylesheet" href="/css/teacher-preview.css"></head><body><main>' +
    '<a href="/classes.html">← All classes</a><h1>Teacher preview</h1>' + content + '</main></body></html>', {
    status,
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
      'Cache-Control': 'private, no-store',
      'X-Robots-Tag': 'noindex, nofollow',
      'X-Content-Type-Options': 'nosniff',
      'Content-Security-Policy': "default-src 'self'; style-src 'self' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data:; form-action 'self'; frame-ancestors 'none'; base-uri 'none'",
      'Referrer-Policy': 'same-origin'
    }
  });
}

export async function handleTeacherPreview(request, now, loadSettings) {
  const url = new URL(request.url);
  if (!['/teacher-preview', '/teacher-preview/', '/teacher-preview/logout'].includes(url.pathname)) return;
  if (!['GET', 'POST', 'HEAD'].includes(request.method)) {
    return new Response(null, { status: 405, headers: { Allow: 'GET, HEAD, POST', 'Cache-Control': 'no-store' } });
  }
  if (request.method === 'HEAD') return new Response(null, { headers: { 'Cache-Control': 'private, no-store' } });
  if (request.method === 'POST' && request.headers.get('origin') !== url.origin) {
    return page('<p>Please sign in from this website.</p>', 403);
  }
  if (url.pathname === '/teacher-preview/logout') {
    return request.method === 'POST' ? redirect('/teacher-preview', cookie('', 0))
      : redirect('/teacher-preview');
  }
  const settings = await loadSettings();
  if (!settings) return page('<p>Teacher preview is temporarily unavailable. Please try again later.</p>', 503);
  const next = returnPath(url.searchParams.get('next'));
  let error = '';
  if (request.method === 'POST') {
    const body = await request.text();
    if (body.length > 2048) return page('<p>Sign-in request too large.</p>', 413);
    const form = new URLSearchParams(body);
    const password = form.get('password') ?? '';
    const digest = await crypto.subtle.digest('SHA-256', encoder.encode(settings.salt + ':' + password));
    const expected = unhex(settings.passwordHash);
    const actual = new Uint8Array(digest);
    let difference = actual.length ^ expected.length;
    for (let i = 0; i < actual.length; i++) difference |= actual[i] ^ expected[i];
    if (password && difference === 0) {
      const expiry = String(now + sessionLength);
      const signature = hex(await crypto.subtle.sign('HMAC', await signingKey(settings), encoder.encode(expiry)));
      return redirect(next, cookie(expiry + '.' + signature, sessionLength / 1000));
    }
    error = '<p role="alert">Password not recognised. Please try again.</p>';
  } else if (await teacherSession(request, now, settings)) {
    if (next !== '/teacher-preview') return redirect(next);
    const classes = { '5si': '5SI', '6si': '6SI', '6lva': '6LVA' };
    const groups = new Map();
    for (const [route, release] of lessonReleases) {
      const match = route.match(/^\/lessons\/([^/]+)\/unit-(\d+)\/week-(\d+)\/lesson-(\d+)$/);
      if (!match) continue;
      const [, classId, unit, week, lesson] = match;
      const title = (classes[classId] || classId) + ' · Unit ' + unit + ' · Week ' + week;
      if (!groups.has(title)) groups.set(title, []);
      groups.get(title).push('<li><a href="' + route + '/">Lesson ' + lesson +
        '</a><small>' + (release > now ? 'Students can open ' : 'Released ') + escape(formatLessonDate(release)) + '</small></li>');
    }
    return page('<p>You can open scheduled lessons, reading chapters and audio for eight hours on this browser.</p>' +
      '<form action="/teacher-preview/logout" method="post"><button>Sign out of preview</button></form>' +
      Array.from(groups, ([title, links]) => '<section><h2>' + escape(title) + '</h2><ul>' + links.join('') + '</ul></section>').join(''));
  }
  return page('<p>Sign in to inspect scheduled lessons before their release dates.</p>' + error +
    '<form action="/teacher-preview?next=' + encodeURIComponent(next) + '" method="post">' +
    '<label for="password">Teacher password</label><input id="password" name="password" type="password" autocomplete="current-password" required autofocus>' +
    '<button type="submit">Open teacher preview</button></form>' +
    '<p class="preview-help">Preview access lasts eight hours on this browser. Sign out when you finish on a shared computer.</p>', error ? 401 : 200);
}
