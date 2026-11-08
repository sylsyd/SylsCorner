for (const select of document.querySelectorAll('[data-deck-switch]')) {
  select.addEventListener('change', () => {
    location.href = '/classes.html?class=' + encodeURIComponent(select.value);
  });
}

const path = location.pathname.match(/\/lessons\/(5si|6si|6lva)\/unit-(\d+)\/week-(\d+)\/lesson-\d+/);
const back = document.querySelector('body.student-activity .unit-return');
if (path && back) {
  const [, classId, unit, week] = path;
  const units = {
    '5si': { title: 'A Monster Calls', theme: 'amc' },
    '6si': { title: 'Holes', theme: 'holes' },
    '6lva': { title: 'Irish Legends', theme: 'legends' }
  };
  const active = units[classId];
  document.body.dataset.deckTheme = active.theme;
  document.body.classList.add('deck-navigation-ready');
  const nav = document.createElement('nav');
  nav.className = 'deck-activity-bar';
  nav.setAttribute('aria-label', 'Class and lesson navigation');
  const label = document.createElement('span');
  label.className = 'deck-activity-context';
  label.textContent = classId.toUpperCase() + ' · ' + (unit === '2' ? active.title : 'Unit ' + unit);
  back.textContent = '← Week ' + week;
  const select = document.createElement('select');
  select.className = 'deck-class-select';
  select.setAttribute('aria-label', 'Switch class');
  for (const className of ['6LVA', '6SI', '5SI']) {
    const option = new Option(className, className);
    option.selected = className.toLowerCase() === classId;
    select.append(option);
  }
  select.addEventListener('change', () => {
    location.href = '/classes.html?class=' + encodeURIComponent(select.value);
  });
  const all = document.createElement('a');
  all.className = 'deck-all-classes';
  all.href = '/classes.html?class=' + classId.toUpperCase();
  all.textContent = 'All classes';
  nav.append(back, label, select, all);
  document.body.prepend(nav);
  if (!document.getElementById('stage') && !document.getElementById('app')) {
    document.body.classList.add('deck-game-activity');
  }
}
