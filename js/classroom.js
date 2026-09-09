const validClasses = new Set(['6LVA', '6SI', '5SI']);
const destinations = {
  lessons: { label: 'Lessons', symbol: '≋', description: 'Lesson activities and learning materials will appear here.', emptyTitle: 'Lessons are on their way.', emptyCopy: 'This class does not have lesson materials posted yet.' },
  resources: { label: 'Resources', symbol: '◇', description: 'Extra materials, useful links and class activities.', emptyTitle: 'Resources are on their way.', emptyCopy: 'This class does not have extra resources posted yet.' }
};
const games = {
  '6LVA': [{ title: 'First Week English Games', copy: 'Fifteen ready-to-run English activities for the classroom.', href: 'games/first-week-english-games.html', theme: 'first-week' }],
  '6SI': [
    { title: 'Twelve Trials', copy: 'A classroom adventure game built around the twelve stages of a hero\'s journey.', href: 'games/twelve-trials.html', theme: 'twelve-trials' },
    { title: 'Conjunction Aura Farm', copy: 'Build stronger sentences by choosing the right conjunction.', href: 'games/conjunction-aura-farm.html', theme: 'aura-farm' }
  ],
  '5SI': [
    { title: 'Venus Walk', copy: 'A ready-to-play classroom game for practising English.', href: 'games/venus-walk.html', theme: 'venus-walk' },
    { title: 'Between the Lines', copy: 'Practise spotting clues, making inferences and reading between the lines.', href: 'games/between-the-lines.html', theme: 'between-lines' },
    { title: 'Annotator', copy: 'Read closely, annotate key details and build stronger interpretations.', href: 'games/annotator.html', theme: 'annotator' }
  ]
};
const params = new URLSearchParams(window.location.search);
const className = validClasses.has(params.get('class')) ? params.get('class') : '6LVA';
const section = destinations[params.get('section')] ? params.get('section') : 'lessons';
const page = destinations[section];
const gameList = section === 'resources' ? games[className] : null;

document.title = `${page.label} | ${className} | The Learning Deck`;
document.getElementById('eyebrow').textContent = `${className} classroom`;
document.getElementById('title').textContent = page.label;
document.getElementById('description').textContent = page.description;
document.getElementById('symbol').textContent = page.symbol;
document.getElementById('label').textContent = `${className} · ${page.label}`;
document.getElementById('empty-title').textContent = page.emptyTitle;
document.getElementById('empty-copy').textContent = page.emptyCopy;

if (gameList) {
  document.getElementById('resource-tabs').hidden = false;
  document.getElementById('empty-state').hidden = true;
  document.getElementById('games-panel').hidden = false;
  document.getElementById('games-label').textContent = `${className} · Resources · Games`;
  document.getElementById('games-title').textContent = gameList.length === 1 ? gameList[0].title : `${className} games`;
  document.getElementById('games-copy').textContent = gameList.length === 1 ? gameList[0].copy : 'Choose a game to open in a new tab.';
  document.getElementById('games-list').innerHTML = gameList.map(game => `
    <a class="game-card-link" href="${game.href}" target="_blank" rel="noopener">
      <span class="game-preview game-preview--${game.theme}" aria-hidden="true">✦</span>
      <span class="game-link-copy"><span class="game-link-label">Open game</span><span>${game.title}</span></span>
      <span class="game-arrow" aria-hidden="true">→</span>
    </a>
  `).join('');
}