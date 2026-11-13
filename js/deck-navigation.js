for (const select of document.querySelectorAll('[data-deck-switch]')) {
  if (!select.querySelector('option[value="ESL"]')) select.add(new Option('ESL Support', 'ESL'));
  select.addEventListener('change', () => {
    location.href = '/classes.html?class=' + encodeURIComponent(select.value);
  });
}

const path = location.pathname.match(/\/lessons\/(5si|6si|6lva|esl-support)\/unit-(\d+)(?:\/week-(\d+))?\/lesson-\d+/);
const back = document.querySelector('body.student-activity .unit-return');
if (path && back && (path[3] || path[1] === 'esl-support')) {
  const [, classId, unit, week] = path;
  const units = {
    '5si': { title: 'A Monster Calls', theme: 'amc' },
    '6si': { title: 'Holes', theme: 'holes' },
    '6lva': { title: 'Irish Legends', theme: 'legends' },
    'esl-support': { title: 'Speaking support', theme: 'esl', label: 'ESL Support' }
  };
  const active = units[classId];
  const classKey = classId === 'esl-support' ? 'ESL' : classId.toUpperCase();
  document.body.dataset.deckTheme = active.theme;
  document.body.classList.add('deck-navigation-ready');
  const nav = document.createElement('nav');
  nav.className = 'deck-activity-bar';
  nav.setAttribute('aria-label', 'Class and lesson navigation');
  const label = document.createElement('span');
  label.className = 'deck-activity-context';
  label.textContent = (active.label || classId.toUpperCase()) + ' · ' + (unit === '2' ? active.title : 'Unit ' + unit);
  back.textContent = week ? '← Week ' + week : '← Unit ' + unit;
  const select = document.createElement('select');
  select.className = 'deck-class-select';
  select.setAttribute('aria-label', 'Switch class');
  for (const className of ['6LVA', '6SI', '5SI', 'ESL']) {
    const option = new Option(className === 'ESL' ? 'ESL Support' : className, className);
    option.selected = className === classKey;
    select.append(option);
  }
  select.addEventListener('change', () => {
    location.href = '/classes.html?class=' + encodeURIComponent(select.value);
  });
  const all = document.createElement('a');
  all.className = 'deck-all-classes';
  all.href = '/classes.html?class=' + classKey;
  all.textContent = 'All classes';
  nav.append(back, label, select, all);
  document.body.prepend(nav);
  const hasSlides = document.querySelector('.slide') || (classId === '6lva' && document.querySelector('main#stage'));
  if (hasSlides && typeof window.HTMLDialogElement?.prototype.showModal === 'function') {
    const pick = document.createElement('button');
    pick.type = 'button';
    pick.className = 'deck-pick-name';
    pick.textContent = 'Pick a name';
    pick.setAttribute('aria-haspopup', 'dialog');
    select.before(pick);
    pick.addEventListener('keydown', event => event.stopPropagation());
    let dialog, rollName, currentRequest;
    async function openPicker(request = {}) {
      if (!dialog) {
        dialog = document.createElement('dialog');
        dialog.className = 'deck-name-dialog';
        dialog.setAttribute('aria-labelledby', 'deck-name-title');
        dialog.innerHTML = '<div class="deck-name-heading"><h2 id="deck-name-title"></h2><button type="button" autofocus>Close</button></div><div class="deck-name-context"></div><div class="deck-name-controls"></div><div class="deck-name-actions"></div>';
        dialog.querySelector('h2').textContent = 'Pick a name · ' + classId.toUpperCase();
        dialog.querySelector('button').addEventListener('click', () => dialog.close());
        dialog.addEventListener('keydown', event => event.stopPropagation());
        document.body.append(dialog);
      }
      if (dialog.open && !request.content) return;
      currentRequest = request;
      dialog.querySelector('.deck-name-context').replaceChildren(...(request.content ? [request.content] : []));
      dialog.querySelector('.deck-name-actions').replaceChildren(...(request.actions ? [request.actions] : []));
      dialog.classList.toggle('deck-name-reading', Boolean(request.content));
      if (!dialog.open) dialog.showModal();
      if (!rollName) {
        const controls = dialog.querySelector('.deck-name-controls');
        controls.textContent = 'Loading name randomiser…';
        try {
          await import('/tools/name-randomiser.js');
          rollName ||= window.SylCornerTools.createNameRandomiser(controls, {
            className: classId.toUpperCase(),
            onSelect: name => { if (dialog.open) currentRequest?.onSelect?.(name); }
          });
        } catch (_) {
          controls.textContent = 'The name randomiser could not load. Close and try again.';
          return;
        }
      }
      if (dialog.open) rollName();
    }
    pick.addEventListener('click', () => openPicker());
    window.DeckNamePicker = {
      open: openPicker,
      close(content) {
        if (dialog?.open && (!content || currentRequest?.content === content)) dialog.close();
      }
    };
  }
  if (!document.getElementById('stage') && !document.getElementById('app')) {
    document.body.classList.add('deck-game-activity');
  }
}
