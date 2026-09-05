const classes = ['6LVA', '6SI', '5SI'];

const sections = [
  ['01', '◌', 'noticeboard', 'Noticeboard', 'Announcements', 'Class news, reminders and the important bits - without the paper chase.', 'Clear waters: no new notices'],
  ['02', '≋', 'learning', 'Learning', 'Lessons & resources', 'Texts, slides, vocabulary and useful links from our English lessons.', 'Resource shelf is waiting'],
  ['03', '◇', 'homework', 'Keep on track', 'Homework & deadlines', 'What to complete, when it is due and what you need to bring.', 'Nothing due right now'],
  ['04', '✦', 'games', 'Practise', 'Class games', 'Quick challenges and games to sharpen your English - or settle a score.', 'Games coming soon']
];

const safe = value => value.replace(/[&<>"']/g, character => ({
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;'
}[character]));

const panels = document.getElementById('panels');
const tabs = [...document.querySelectorAll('.tab')];

function destinationFor(className, slug) {
  if (className === '6LVA' && slug === 'games') return 'games/first-week-english-games.html';
  if (className === '6SI' && slug === 'learning') return '6si-unit-1.html';
  return `classroom.html?class=${encodeURIComponent(className)}&section=${encodeURIComponent(slug)}`;
}

panels.innerHTML = classes.map((className, index) => `
  <section class="panel ${index ? '' : 'active'}" id="panel-${className}" role="tabpanel" aria-labelledby="tab-${className}" ${index ? 'hidden' : ''}>
    <div class="class-heading">
      <div>
        <p class="section-kicker">Your classroom</p>
        <h2>${safe(className)}</h2>
      </div>
      <p class="weekly-summary"><span>This week</span>${className === '6LVA' ? 'One new activity is ready.' : className === '6SI' ? 'Unit 1 resources are ready.' : 'No new notices or deadlines.'}</p>
    </div>
    <div class="grid">
      ${sections.map((section, sectionIndex) => {
        const [, icon, slug, label, title, defaultDescription, defaultStatus] = section;
        const isFirstWeekGames = className === '6LVA' && slug === 'games';
        const isUnitOne = className === '6SI' && slug === 'learning';
        const description = isFirstWeekGames
          ? 'Fifteen start-of-year activities for a mixed-ability room. Choose one, project it and begin.'
          : isUnitOne
            ? 'Unit 1: In Search of Adventure. Open the unit reader, resources and Lesson 1 activity from home.'
            : defaultDescription;
        const linkLabel = isFirstWeekGames ? 'Open First Week Games' : isUnitOne ? 'Open Unit 1' : `Open ${label}`;
        const status = isFirstWeekGames ? 'Ready to play' : isUnitOne ? 'Unit 1 ready' : defaultStatus;

        return `
          <article class="card card-${sectionIndex + 1}">
            <div class="topline">
              <span class="card-number">${section[0]}</span>
              <span class="icon" aria-hidden="true">${icon}</span>
            </div>
            <p class="eyebrow">${label}</p>
            <h3>${title}</h3>
            <p class="copy">${description}</p>
            <p class="status"><span class="dot"></span>${status}</p>
            <a class="card-link" href="${destinationFor(className, slug)}">${linkLabel}<span aria-hidden="true">→</span></a>
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