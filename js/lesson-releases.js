const schedule = [
  ['2026-11-10', '5si', 2, 2, [1], []],
  ['2026-11-11', '5si', 2, 2, [2], [8, 9]],
  ['2026-11-12', '5si', 2, 2, [3, 4], [10, 11]],
  ['2026-11-13', '5si', 2, 2, [5, 6], []],
  ['2026-11-10', '6si', 2, 2, [8], [11, 12, 13]],
  ['2026-11-11', '6si', 2, 2, [9, 10], [14, 15]],
  ['2026-11-12', '6si', 2, 2, [11, 12], [16, 17, 18]],
  ['2026-11-13', '6si', 2, 2, [13], [19, 20]],
  ['2026-11-10', '6lva', 2, 2, [5], []],
  ['2026-11-12', '6lva', 2, 2, [6], []],
  ['2026-11-13', '6lva', 2, 2, [7], []],
  ['2026-11-16', '5si', 2, 3, [1], [12, 13, 14]],
  ['2026-11-17', '5si', 2, 3, [2], []],
  ['2026-11-18', '5si', 2, 3, [3], [15, 16, 17]],
  ['2026-11-19', '5si', 2, 3, [4], [18, 19, 20]],
  ['2026-11-19', '5si', 2, 3, [5], []],
  ['2026-11-20', '5si', 2, 3, [6], []],
  ['2026-11-20', '5si', 2, 3, [7], []],
  ['2026-11-16', '6si', 2, 3, [14], [21, 22]],
  ['2026-11-17', '6si', 2, 3, [15], [23, 24]],
  ['2026-11-18', '6si', 2, 3, [16], [25]],
  ['2026-11-18', '6si', 2, 3, [17], []],
  ['2026-11-19', '6si', 2, 3, [18], [26]],
  ['2026-11-19', '6si', 2, 3, [19], []],
  ['2026-11-20', '6si', 2, 3, [20], [27, 28]],
  ['2026-11-16', '6lva', 2, 3, [8], []],
  ['2026-11-17', '6lva', 2, 3, [9], []],
  ['2026-11-19', '6lva', 2, 3, [10], []],
  ['2026-11-20', '6lva', 2, 3, [11], []],
  ['2026-11-23', '5si', 2, 4, [1], [21, 22, 23, 24]],
  ['2026-11-24', '5si', 2, 4, [2], []],
  ['2026-11-25', '5si', 2, 4, [3], [25, 26, 27]],
  ['2026-11-26', '5si', 2, 4, [4], [28, 29, 30]],
  ['2026-11-26', '5si', 2, 4, [5], []],
  ['2026-11-27', '5si', 2, 4, [6], []],
  ['2026-11-27', '5si', 2, 4, [7], []],
  ['2026-11-23', '6si', 2, 4, [21], [29]],
  ['2026-11-24', '6si', 2, 4, [22], [30]],
  ['2026-11-25', '6si', 2, 4, [23], [31, 32]],
  ['2026-11-25', '6si', 2, 4, [24], []],
  ['2026-11-26', '6si', 2, 4, [25], [33, 34, 35]],
  ['2026-11-26', '6si', 2, 4, [26], []],
  ['2026-11-27', '6si', 2, 4, [27], [36, 37]],
  ['2026-11-23', '6lva', 2, 4, [12], []],
  ['2026-11-24', '6lva', 2, 4, [13], []],
  ['2026-11-26', '6lva', 2, 4, [14], []],
  ['2026-11-27', '6lva', 2, 4, [15], []]
];

export const lessonReleases = new Map();
for (const [date, classId, unitNumber, weekNumber, lessons, chapters] of schedule) {
  const unit = '/lessons/' + classId + '/unit-' + unitNumber + '/';
  const release = Date.parse(date + 'T00:00:00+08:00');
  for (const number of lessons) lessonReleases.set(unit + 'week-' + weekNumber + '/lesson-' + number, release);
  for (const number of chapters) {
    lessonReleases.set(unit + 'reading/chapter-' + number + '.js', release);
    if (classId === '6si' || classId === '5si') lessonReleases.set(unit + 'audiobook/chapter-' + number + '.mp3', release);
  }
}

export const privateLessonFiles = new Set([
  '/lessons/5si/unit-2/audiobook/chapter-8.mp3',
  '/lessons/5si/unit-2/audiobook/chapter-9.mp3',
  '/lessons/5si/unit-2/audiobook/chapter-10.mp3',
  '/lessons/5si/unit-2/audiobook/chapter-11.mp3',
  '/lessons/5si/unit-2/week-2/lesson-4/index.html',
  '/lessons/5si/unit-2/week-2/lesson-5/index.html',
  '/lessons/5si/unit-2/week-2/lesson-6/index.html',
  '/lessons/6si/unit-2/week-2/lesson-12/index.html',
  '/lessons/6si/unit-2/week-2/lesson-13/index.html',
  '/lessons/6si/unit-2/reading/chapter-19.js',
  '/lessons/6si/unit-2/reading/chapter-20.js',
  '/lessons/6si/unit-2/audiobook/chapter-19.mp3',
  '/lessons/6si/unit-2/audiobook/chapter-20.mp3'
]);

// Week 3 and 4 material lives in the private release store until its teaching day.
for (const [route] of lessonReleases) {
  if (/\/week-[34]\/lesson-/.test(route)) privateLessonFiles.add(route + '/index.html');
  if (/^\/lessons\/5si\/unit-2\/(?:reading|audiobook)\/chapter-(?:1[2-9]|2[0-9]|30)\./.test(route) ||
      /^\/lessons\/6si\/unit-2\/(?:reading|audiobook)\/chapter-(?:2[1-9]|3[0-7])\./.test(route)) {
    privateLessonFiles.add(route);
  }
}

export function formatLessonDate(release) {
  return new Intl.DateTimeFormat('en-SG', {
    weekday: 'long', day: 'numeric', month: 'long', timeZone: 'Asia/Singapore'
  }).format(release);
}
