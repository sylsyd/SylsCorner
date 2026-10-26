const views = [...document.querySelectorAll('[data-view]')];
const links = [...document.querySelectorAll('.planner-rail nav a')];
const dialog = document.getElementById('lesson-dialog');
const templates = [...document.querySelectorAll('template[data-week]')];
let selectedLesson = null;
function showView(focus = false) {
  const id = location.hash.slice(1) || 'overview';
  const selected = views.find(view => view.id === id) || views[0];
  views.forEach(view => { view.hidden = view !== selected; });
  links.forEach(link => {
    const active = link.hash === '#' + selected.id;
    link.classList.toggle('active', active);
    if (active) link.setAttribute('aria-current', 'page');
    else link.removeAttribute('aria-current');
  });
  const activeLink = links.find(link => link.hash === '#' + selected.id);
  document.getElementById('view-label').textContent = activeLink ? activeLink.textContent.replace('↗', '').trim() : 'Unit overview';
  if (dialog.open) dialog.close();
  if (focus) {
    window.scrollTo({ top: 0, behavior: 'instant' });
    const heading = selected.querySelector('h1');
    heading.tabIndex = -1;
    heading.focus({ preventScroll: true });
  }
}
function openLesson(id) {
  selectedLesson = templates.find(template => template.id === id);
  if (!selectedLesson) return;
  document.getElementById('lesson-body').replaceChildren(selectedLesson.content.cloneNode(true));
  const classroomNumber = Number(selectedLesson.id.replace('lesson-', '')) + 1;
  if (selectedLesson.dataset.week === 'w1' && classroomNumber <= 6) {
    const href = '/holes/week-1/lesson-' + classroomNumber;
    if (!document.getElementById('lesson-body').querySelector('a[href="' + href + '"]')) {
      const activity = document.createElement('a');
      activity.className = 'week-entry';
      activity.href = href;
      activity.textContent = 'Open Lesson ' + classroomNumber + ' activity →';
      document.getElementById('lesson-body').append(activity);
    }
  }
  const peers = templates.filter(template => template.dataset.week === selectedLesson.dataset.week);
  const index = peers.indexOf(selectedLesson);
  document.getElementById('previous-lesson').disabled = index === 0;
  document.getElementById('next-lesson').disabled = index === peers.length - 1;
  if (!dialog.open) dialog.showModal();
  dialog.scrollTop = 0;
  document.getElementById('close-lesson').focus();
}
function moveLesson(direction) {
  if (!selectedLesson) return;
  const peers = templates.filter(template => template.dataset.week === selectedLesson.dataset.week);
  const next = peers[peers.indexOf(selectedLesson) + direction];
  if (next) openLesson(next.id);
}
document.addEventListener('click', event => {
  const button = event.target.closest('[data-lesson]');
  if (button) openLesson(button.dataset.lesson);
});
document.getElementById('close-lesson').addEventListener('click', () => dialog.close());
document.getElementById('previous-lesson').addEventListener('click', () => moveLesson(-1));
document.getElementById('next-lesson').addEventListener('click', () => moveLesson(1));
dialog.addEventListener('click', event => {
  if (event.target !== dialog) return;
  const rect = dialog.getBoundingClientRect();
  if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close();
});
const printLessons = document.createElement('section');
printLessons.className = 'print-lessons';
for (let n = 1; n <= 7; n++) {
  const heading = document.createElement('h1');
  heading.textContent = 'Week ' + n + ' lesson plans';
  printLessons.append(heading);
  templates.filter(template => template.dataset.week === 'w' + n).forEach(template => {
    const section = document.createElement('section');
    section.append(template.content.cloneNode(true));
    section.querySelectorAll('[id]').forEach(element => element.removeAttribute('id'));
    printLessons.append(section);
  });
}
document.body.append(printLessons);
document.getElementById('print-plan').addEventListener('click', () => window.print());
window.addEventListener('hashchange', () => showView(true));
showView();
