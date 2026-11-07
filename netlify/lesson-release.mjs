import { formatLessonDate, lessonReleases, privateLessonFiles } from '../js/lesson-releases.js';

const typeByExtension = {
  html: 'text/html; charset=utf-8',
  js: 'text/javascript; charset=utf-8',
  mp3: 'audio/mpeg'
};

function canonicalPath(pathname) {
  try {
    const decoded = decodeURIComponent(pathname).replaceAll('\\', '/').replace(/\/{2,}/g, '/');
    return new URL('https://lessons.invalid' + decoded).pathname.toLowerCase().replace(/\/$/, '');
  } catch {
    return pathname.toLowerCase();
  }
}

function sendFile(request, file, blob) {
  const head = request.method === 'HEAD';
  const headers = new Headers({
    'Content-Type': typeByExtension[file.split('.').at(-1)],
    'Content-Length': String(blob.size),
    'X-Content-Type-Options': 'nosniff'
  });
  if (!file.endsWith('.mp3')) return new Response(head ? null : blob, { headers });

  headers.set('Accept-Ranges', 'bytes');
  const range = request.headers.get('range');
  if (!range || head) return new Response(head ? null : blob, { headers });

  const match = /^bytes=(\d*)-(\d*)$/.exec(range);
  if (match && (match[1] || match[2])) {
    const start = match[1] ? Number(match[1]) : Math.max(0, blob.size - Number(match[2]));
    const end = match[1] && match[2] ? Math.min(Number(match[2]), blob.size - 1) : blob.size - 1;
    if (start <= end && start < blob.size) {
      headers.set('Content-Range', 'bytes ' + start + '-' + end + '/' + blob.size);
      headers.set('Content-Length', String(end - start + 1));
      return new Response(blob.slice(start, end + 1), { status: 206, headers });
    }
  }
  return new Response(null, { status: 416, headers: { 'Content-Range': 'bytes */' + blob.size } });
}

export async function handleLessonRelease(request, now, loadFile) {
  const url = new URL(request.url);
  const path = canonicalPath(url.pathname);
  const lesson = path.match(/^\/lessons\/[^/]+\/unit-\d+\/week-\d+\/lesson-\d+(?=\/|$)/)?.[0];
  const release = lessonReleases.get(lesson ?? path);
  if (!release) return;

  const head = request.method === 'HEAD';
  if (now < release) {
    const date = formatLessonDate(release);
    const back = lesson ? lesson.slice(0, lesson.lastIndexOf('/') + 1) : '/classes.html';
    const body = '<!doctype html><html lang="en"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">' +
      '<title>Lesson opens ' + date + '</title><link rel="stylesheet" href="/css/lesson-release.css">' +
      '<main><h1>Available ' + date + '</h1><p>This material opens at midnight Singapore time.</p>' +
      '<a href="' + back + '">← Back to lessons</a></main></html>';
    return new Response(head ? null : body, {
      status: 403,
      headers: { 'Content-Type': 'text/html; charset=utf-8', 'Cache-Control': 'no-store' }
    });
  }

  const file = lesson === path ? lesson + '/index.html' : path;
  if (!privateLessonFiles.has(file)) return;
  if (request.method !== 'GET' && !head) {
    return new Response(null, { status: 405, headers: { Allow: 'GET, HEAD' } });
  }
  if (lesson && lesson === path && !url.pathname.endsWith('/')) {
    url.pathname = lesson + '/';
    return Response.redirect(url, 302);
  }
  const blob = await loadFile(file.slice(1));
  return blob ? sendFile(request, file, blob)
    : new Response(head ? null : 'Lesson temporarily unavailable.', { status: 503 });
}
