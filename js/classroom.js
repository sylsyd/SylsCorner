const validClasses = new Set(['6LVA', '6SI', '5SI']);
const destinations = {
  noticeboard: { label: 'Noticeboard', symbol: '◌', description: 'Class news, reminders and useful information.', emptyTitle: 'Clear waters.', emptyCopy: 'There are no new announcements here yet.' },
  learning: { label: 'Learning', symbol: '≋', description: 'Lesson resources, texts and useful English tools.', emptyTitle: 'The resource shelf is waiting.', emptyCopy: 'No resources have been posted for this class yet.' },
  homework: { label: 'Homework & deadlines', symbol: '◇', description: 'A clear place for tasks, dates and what to bring.', emptyTitle: 'Nothing due right now.', emptyCopy: 'When homework is set, it will appear here.' }
};
const params = new URLSearchParams(window.location.search);
const className = validClasses.has(params.get('class')) ? params.get('class') : '6LVA';
const section = destinations[params.get('section')] ? params.get('section') : 'noticeboard';
const page = destinations[section];
document.title = `${page.label} | ${className} | Syl's Corner`;
document.getElementById('eyebrow').textContent = `${className} classroom`;
document.getElementById('title').textContent = page.label;
document.getElementById('description').textContent = page.description;
document.getElementById('symbol').textContent = page.symbol;
document.getElementById('label').textContent = `${className} · ${page.label}`;
document.getElementById('empty-title').textContent = page.emptyTitle;
document.getElementById('empty-copy').textContent = page.emptyCopy;