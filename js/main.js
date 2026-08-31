const classes = ['6ABCD', '6H', '5EFG'];

const sections = [
  ['01', '◌', 'Noticeboard', 'Announcements', 'Class news, reminders and the important bits—without the paper chase.', 'Nothing new posted yet'],
  ['02', '≋', 'Learning', 'Lessons & resources', 'Texts, slides, vocabulary and useful links from our English lessons.', 'Resources coming soon'],
  ['03', '◇', 'Keep on track', 'Homework & deadlines', 'What to complete, when it is due and what you need to bring.', 'No deadlines posted'],
  ['04', '✦', 'Practise', 'Class games', 'Quick challenges and games to sharpen your English—or settle a score.', 'Games coming soon']
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

panels.innerHTML = classes.map((className, index) => `
  <section class="panel ${index ? '' : 'active'}" id="panel-${className}" role="tabpanel" aria-labelledby="tab-${className}" ${index ? 'hidden' : ''}>
    <div class="class-heading">
      <div>
        <p class="section-kicker">Your classroom</p>
        <h2>${safe(className)}</h2>
      </div>
      <span class="stamp">English with Syl</span>
    </div>
    <div class="grid">
      ${sections.map(section => `
        <article class="card">
          <div class="topline">
            <span>${section[0]}</span>
            <span class="icon" aria-hidden="true">${section[1]}</span>
          </div>
          <p class="eyebrow">${section[2]}</p>
          <h3>${section[3]}</h3>
          <p class="copy">${section[4]}</p>
          <div class="status"><span class="dot"></span>${section[5]}</div>
        </article>
      `).join('')}
    </div>
  </section>
`).join('');

function select(tab) {
  tabs.forEach(item => {
    const isSelected = item === tab;
    const panel = document.getElementById(`panel-${item.dataset.class}`);

    item.setAttribute('aria-selected', isSelected);
    item.tabIndex = isSelected ? 0 : -1;
    panel.hidden = !isSelected;
    panel.classList.toggle('active', isSelected);
  });
}

tabs.forEach((tab, index) => {
  tab.addEventListener('click', () => select(tab));

  tab.addEventListener('keydown', event => {
    if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;

    event.preventDefault();

    const nextIndex = event.key === 'Home'
      ? 0
      : event.key === 'End'
        ? tabs.length - 1
        : event.key === 'ArrowRight'
          ? (index + 1) % tabs.length
          : (index - 1 + tabs.length) % tabs.length;

    select(tabs[nextIndex]);
    tabs[nextIndex].focus();
  });
});

document.getElementById('year').textContent = new Date().getFullYear();

