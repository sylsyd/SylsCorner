import { formatLessonDate, lessonReleases } from './lesson-releases.js';

for (const card of document.querySelectorAll('a.lesson-card, a.legends-lesson')) {
  const release = lessonReleases.get(new URL(card.href).pathname.replace(/\/$/, ''));
  const status = card.querySelector('.lesson-availability');
  if (release && Date.now() < release) {
    const date = formatLessonDate(release);
    card.dataset.releaseState = 'locked';
    if (status) {
      status.textContent = 'Available ' + date;
      status.hidden = false;
    } else {
      card.querySelector('strong').textContent = 'Available ' + date;
    }
  }
}
