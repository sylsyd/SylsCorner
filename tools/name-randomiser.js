window.SylCornerTools = window.SylCornerTools || {};
window.SylCornerTools.createNameRandomiser = function createNameRandomiser(root) {
  const initialRosters = {
    '6LVA': [],
    '6SI': ['Matteo', 'Amine', 'Leo', 'Henry', 'Eva', 'Elise', 'Julie', 'Valentine', 'Charlotte', 'Theodore', 'Elyana', 'Andreas', 'Sidonie', 'Noemie', 'Sarah', 'Elanor', 'Alex', 'Milan', 'Hugo', 'Louenn', 'Emma', 'Lea', 'Giuila', 'Xavier'],
    '5SI': ['Karl', 'Selene', 'Rayhane', 'Valentina', 'Elliott', 'Ayumi', 'Jeanne', 'Adelie', 'Louise', 'Halvyse', 'Alicia', 'Manon', 'Leina', 'Christian', 'Keo', 'Arsene', 'Deesha', 'Amelia', 'Alexis', 'Leo', 'Octave', 'Victoria', 'Jade', 'Mengxi']
  };
  const modeStorageKey = 'syls-corner-name-randomiser-mode';
  const rosters = Object.fromEntries(Object.entries(initialRosters).map(([className, names]) => [className, [...names]]));
  let selectedClass = '';
  let rolling = false;
  let mode = 'keep';

  try {
    mode = localStorage.getItem(modeStorageKey) === 'remove' ? 'remove' : 'keep';
  } catch (error) {
    // The tool still works when browser storage is unavailable.
  }

  root.innerHTML = `
    <div class="class-picker" role="group" aria-label="Choose a class">
      ${Object.keys(rosters).map(className => `<button class="class-option" type="button" data-class="${className}">${className}</button>`).join('')}
    </div>
    <div class="mode-picker" role="group" aria-label="Choose what happens after a name is selected">
      <button class="mode-option" type="button" data-mode="keep">Keep names</button>
      <button class="mode-option" type="button" data-mode="remove">Remove after draw</button>
    </div>
    <p class="mode-help"></p>
    <div class="name-roller" aria-live="polite"><span class="roller-name">Choose a class</span></div>
    <button class="primary randomise-button" type="button" disabled>Roll a name</button>
    <p class="roster-status">Choose a class to begin.</p>`;

  const roller = root.querySelector('.name-roller');
  const rollerName = root.querySelector('.roller-name');
  const spin = root.querySelector('.randomise-button');
  const status = root.querySelector('.roster-status');
  const modeHelp = root.querySelector('.mode-help');

  function namesForSelectedClass() {
    return selectedClass ? rosters[selectedClass] : [];
  }

  function updateMode() {
    root.querySelectorAll('.mode-option').forEach(button => {
      button.classList.toggle('selected', button.dataset.mode === mode);
    });
    modeHelp.textContent = mode === 'remove'
      ? 'Drawn names are removed for this session.'
      : 'Drawn names stay available for the next roll.';
  }

  function updateStatus() {
    const names = namesForSelectedClass();
    spin.disabled = !selectedClass || !names.length || rolling;
    if (!selectedClass) {
      status.textContent = 'Choose a class to begin.';
    } else if (!names.length) {
      status.textContent = `No names remain in ${selectedClass}. Refresh the page to start over.`;
    } else {
      status.textContent = `${names.length} name${names.length === 1 ? '' : 's'} available in ${selectedClass}.`;
    }
  }

  function chooseClass(className, button) {
    if (rolling) return;
    selectedClass = className;
    root.querySelectorAll('.class-option').forEach(option => option.classList.toggle('selected', option === button));
    rollerName.textContent = rosters[className].length ? `${className} is ready` : 'No names added yet';
    updateStatus();
  }

  function chooseMode(nextMode, button) {
    if (rolling) return;
    mode = nextMode;
    try {
      localStorage.setItem(modeStorageKey, mode);
    } catch (error) {
      // The selection remains active for this visit if browser storage is unavailable.
    }
    root.querySelectorAll('.mode-option').forEach(option => option.classList.toggle('selected', option === button));
    updateMode();
  }

  function rollName() {
    const names = namesForSelectedClass();
    if (!names.length || rolling) return;

    rolling = true;
    spin.textContent = 'Rolling...';
    roller.classList.add('rolling');
    updateStatus();

    const interval = window.setInterval(() => {
      rollerName.textContent = names[Math.floor(Math.random() * names.length)];
    }, 72);

    window.setTimeout(() => {
      window.clearInterval(interval);
      const chosenIndex = Math.floor(Math.random() * names.length);
      const chosenName = names[chosenIndex];
      rollerName.textContent = chosenName;
      roller.classList.remove('rolling');

      if (mode === 'remove') {
        names.splice(chosenIndex, 1);
        status.textContent = `${chosenName} selected and removed from this session.`;
      } else {
        status.textContent = `${chosenName} selected. They stay in the draw.`;
      }

      rolling = false;
      spin.textContent = 'Roll again';
      spin.disabled = !names.length;
    }, 1450);
  }

  root.querySelectorAll('.class-option').forEach(button => button.addEventListener('click', () => chooseClass(button.dataset.class, button)));
  root.querySelectorAll('.mode-option').forEach(button => button.addEventListener('click', () => chooseMode(button.dataset.mode, button)));
  spin.addEventListener('click', rollName);
  updateMode();
  updateStatus();
};