const validClasses = new Set(['6LVA', '6SI', '5SI']);
const destinations = {
  lessons: { label: 'Lessons', symbol: '≋', description: 'Lesson activities and learning materials will appear here.', emptyTitle: 'Lessons are on their way.', emptyCopy: 'This class does not have lesson materials posted yet.' },
  resources: { label: 'Resources', symbol: '◇', description: 'Extra materials, useful links and class activities.', emptyTitle: 'Resources are on their way.', emptyCopy: 'This class does not have extra resources posted yet.' }
};
const games = {
  '6LVA': { title: 'First Week English Games', copy: 'Fifteen ready-to-run English activities for the classroom.', href: 'games/first-week-english-games.html', theme: 'first-week' },
  '5SI': { title: 'Venus Walk', copy: 'A ready-to-play classroom game for practising English.', href: 'games/venus-walk.html', theme: 'venus-walk' }
};
const params = new URLSearchParams(window.location.search);
const className = validClasses.has(params.get('class')) ? params.get('class') : '6LVA';
const section = destinations[params.get('section')] ? params.get('section') : 'lessons';
const page = destinations[section];
const game = section === 'resources' ? games[className] : null;

document.title = `${page.label} | ${className} | Syl's Corner`;
document.getElementById('eyebrow').textContent = `${className} classroom`;
document.getElementById('title').textContent = page.label;
document.getElementById('description').textContent = page.description;
document.getElementById('symbol').textContent = page.symbol;
document.getElementById('label').textContent = `${className} · ${page.label}`;
document.getElementById('empty-title').textContent = page.emptyTitle;
document.getElementById('empty-copy').textContent = page.emptyCopy;

if (game) {
  document.getElementById('resource-tabs').hidden = false;
  document.getElementById('empty-state').hidden = true;
  document.getElementById('games-panel').hidden = false;
  document.getElementById('games-label').textContent = `${className} · Resources · Games`;
  document.getElementById('games-title').textContent = game.title;
  document.getElementById('games-copy').textContent = game.copy;
  document.getElementById('games-link').href = game.href;
  document.getElementById('games-link').target = '_blank';
  document.getElementById('games-link').rel = 'noopener';
  document.getElementById('games-link-title').textContent = game.title;
  document.getElementById('game-preview').classList.add(`game-preview--${game.theme}`);
}