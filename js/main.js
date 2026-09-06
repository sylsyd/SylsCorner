const classes = ['6LVA', '6SI', '5SI'];

const sections = [
  ['01', '≋', 'lessons', 'Lessons', 'Lessons', 'Lesson activities, unit materials and classroom learning in one place.', 'Unit 1 ready'],
  ['02', '◇', 'resources', 'Resources', 'Resources', 'Extra materials, useful links and class activities.', 'Resources available']
];

const safe = value => value.replace(/[&<>"']/g, character => ({
  '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
}[character]));

const panels = document.getElementById('panels');
const tabs = [...document.querySelectorAll('.tab')];

function destinationFor(className, slug) {
  if (slug === 'lessons' && className === '6SI') return '6si-unit-1.html';
  if (slug === 'lessons' && className === '5SI') return '5si-unit-1.html';
  return `classroom.html?class=${encodeURIComponent(className)}&section=${encodeURIComponent(slug)}`;
}

function actionLabel(slug, isUnit) {
  if (isUnit) return 'Open Unit 1';
  return slug === 'lessons' ? 'Open lessons' : 'Open resources';
}

panels.innerHTML = classes.map((className, index) => `
  <section class="panel ${index ? '' : 'active'}" id="panel-${className}" role="tabpanel" aria-labelledby="tab-${className}" ${index ? 'hidden' : ''}>
    <div class="class-heading">
      <h2>${safe(className)} <span>— this week</span></h2>
      <p class="weekly-summary">Two places to go</p>
    </div>
    <div class="grid">
      ${sections.map((section, sectionIndex) => {
        const [number, icon, slug, label, title, defaultDescription, defaultStatus] = section;
        const isUnit = slug === 'lessons' && (className === '6SI' || className === '5SI');
        const description = isUnit
          ? className === '6SI'
            ? 'Unit 1: In Search of Adventure. Lessons 1–6, activities and student materials are ready to open.'
            : 'Unit 1: Short Stories. Lessons 1–6, activities and student materials are ready to open.'
          : className === '6LVA' && slug === 'resources'
            ? 'Find the First Week English Games collection under the Games tab.'
            : defaultDescription;
        const status = className === '6LVA' && slug === 'resources' ? 'Games ready' : isUnit ? 'Unit 1 ready' : defaultStatus;
        return `
          <article class="card card-${sectionIndex + 1}">
            <div class="topline"><span class="card-number">${number}</span><span class="icon" aria-hidden="true">${icon}</span></div>
            <div class="card-title"><p class="eyebrow">${label}</p><h3>${title}</h3></div>
            <p class="copy">${description}</p>
            <div class="card-action"><p class="status"><span class="dot"></span>${status}</p><a class="card-link" href="${destinationFor(className, slug)}">${actionLabel(slug, isUnit)} <span aria-hidden="true">→</span></a></div>
          </article>
        `;
      }).join('')}
    </div>
  </section>
`).join('');

function select(tab, persist = true) {
  tabs.forEach(item => {
    const isSelected = item === tab;
    const panel = document.getElementById(`panel-${item.dataset.class}`);
    item.setAttribute('aria-selected', isSelected);
    item.tabIndex = isSelected ? 0 : -1;
    panel.hidden = !isSelected;
    panel.classList.toggle('active', isSelected);
  });
  if (persist) {
    try { localStorage.setItem('syls-corner-class', tab.dataset.class); } catch { /* Browser storage is optional. */ }
  }
}

tabs.forEach((tab, index) => {
  tab.addEventListener('click', () => select(tab));
  tab.addEventListener('keydown', event => {
    if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;
    event.preventDefault();
    const nextIndex = event.key === 'Home' ? 0 : event.key === 'End' ? tabs.length - 1 : event.key === 'ArrowRight' ? (index + 1) % tabs.length : (index - 1 + tabs.length) % tabs.length;
    select(tabs[nextIndex]);
    tabs[nextIndex].focus();
  });
});

try {
  const savedClass = localStorage.getItem('syls-corner-class');
  const migrations = { '6ABCD': '6LVA', '6H': '6SI', '5EFG': '5SI' };
  const savedTab = tabs.find(tab => tab.dataset.class === (migrations[savedClass] || savedClass));
  if (savedTab) select(savedTab, false);
} catch { /* The default tab remains selected. */ }

document.getElementById('year').textContent = new Date().getFullYear();