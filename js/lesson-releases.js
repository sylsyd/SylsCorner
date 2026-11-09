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
  ['2026-11-13', '6lva', 2, 2, [7], []]
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

export function formatLessonDate(release) {
  return new Intl.DateTimeFormat('en-SG', {
    weekday: 'long', day: 'numeric', month: 'long', timeZone: 'Asia/Singapore'
  }).format(release);
}
