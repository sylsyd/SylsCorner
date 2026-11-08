const classes = ['6LVA', '6SI', '5SI'];
const classUnits = {
  '6LVA': {
    theme: 'legends', title: 'Irish Legends', subtitle: 'Ireland, its stories, and the making of a hero.',
    image: '/lessons/6lva/unit-2/assets/week-2.webp', previous: 'English foundations'
  },
  '6SI': {
    theme: 'holes', title: 'Holes', subtitle: 'Secrets, unlikely friendships, and the story beneath the surface.',
    image: '/lessons/6si/unit-2/assets/camp-green-lake.webp', previous: 'In Search of Adventure'
  },
  '5SI': {
    theme: 'amc', title: 'A Monster Calls', subtitle: 'Three stories, one truth, and a monster at the window.',
    image: '/lessons/5si/unit-2/assets/resources/0a6912665f9149b7.webp', previous: 'Short Stories'
  }
};
const panels = document.getElementById('panels');
const tabs = [...document.querySelectorAll('.tab')];

panels.innerHTML = classes.map((className, index) => {
  const unit = classUnits[className];
  const base = '/lessons/' + className.toLowerCase() + '/';
  return `
  <section class="panel" id="panel-${className}" role="tabpanel" aria-labelledby="tab-${className}" ${index ? 'hidden' : ''}>
    <div class="class-heading"><h1>${className} classroom</h1></div>
    <div class="hub-destinations">
      <a class="unit-cover" href="${base}unit-2/">
        <img src="${unit.image}" alt="" fetchpriority="high">
        <div class="unit-cover-copy"><p class="hub-eyebrow">Current unit · Unit 2</p><h2>${unit.title}</h2>
          <p>${unit.subtitle}</p><span class="hub-action">Explore the unit <span aria-hidden="true">→</span></span>
        </div>
      </a>
      <div class="hub-secondary">
        <a class="hub-destination" href="${base}unit-1/">
          <p class="hub-eyebrow">Unit 1</p><h2>${unit.previous}</h2><p>Earlier lessons and student materials.</p>
          <span class="hub-action">Browse lessons <span aria-hidden="true">→</span></span>
        </a>
        <a class="hub-destination" href="/classroom.html?class=${className}&amp;section=resources">
          <p class="hub-eyebrow">Resources</p><h2>Games &amp; practice</h2><p>Revisit ideas and try a new challenge.</p>
          <span class="hub-action">Open resources <span aria-hidden="true">→</span></span>
        </a>
      </div>
    </div>
  </section>`;
}).join('');

function select(tab, persist = true) {
  tabs.forEach(item => {
    const selected = item === tab;
    const panel = document.getElementById('panel-' + item.dataset.class);
    item.setAttribute('aria-selected', selected);
    item.tabIndex = selected ? 0 : -1;
    panel.hidden = !selected;
  });
  document.body.dataset.deckTheme = classUnits[tab.dataset.class].theme;
  if (persist) {
    try {
      localStorage.setItem('syls-corner-class', tab.dataset.class);
      const url = new URL(location.href);
      url.searchParams.set('class', tab.dataset.class);
      history.replaceState(null, '', url);
    } catch {}
  }
}

tabs.forEach((tab, index) => {
  tab.addEventListener('click', () => select(tab));
  tab.addEventListener('keydown', event => {
    if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;
    event.preventDefault();
    const next = event.key === 'Home' ? 0 : event.key === 'End' ? tabs.length - 1
      : (index + (event.key === 'ArrowRight' ? 1 : -1) + tabs.length) % tabs.length;
    select(tabs[next]);
    tabs[next].focus();
  });
});

const requested = new URLSearchParams(location.search).get('class');
let saved;
try { saved = localStorage.getItem('syls-corner-class'); } catch {}
const migrations = { '6ABCD': '6LVA', '6H': '6SI', '5EFG': '5SI' };
const initial = requested || migrations[saved] || saved;
select(tabs.find(tab => tab.dataset.class === initial) || tabs[0], false);
document.getElementById('year').textContent = new Date().getFullYear();
