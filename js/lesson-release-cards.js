import { formatLessonDate, lessonReleases } from './lesson-releases.js';

for (const card of document.querySelectorAll('a.lesson-card, a.legends-lesson')) {
  const release = lessonReleases.get(new URL(card.href).pathname.replace(/\/$/, ''));
  if (release && Date.now() < release) {
    card.querySelector('strong').textContent = 'Available ' + formatLessonDate(release);
  }
}
