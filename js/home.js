(() => {
  'use strict';
  const showcase = document.querySelector('.showcase');
  if (!showcase) return;
  const tabs = [...showcase.querySelectorAll('[role="tab"]')];
  const panels = [...showcase.querySelectorAll('[role="tabpanel"]')];

  function activate(tab, focus = false) {
    tabs.forEach(item => {
      const selected = item === tab;
      item.setAttribute('aria-selected', String(selected));
      item.tabIndex = selected ? 0 : -1;
    });
    panels.forEach(panel => { panel.hidden = panel.id !== tab.getAttribute('aria-controls'); });
    if (focus) tab.focus();
  }
  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => activate(tab));
    tab.addEventListener('keydown', event => {
      let next;
      if (event.key === 'ArrowRight') next = (index + 1) % tabs.length;
      if (event.key === 'ArrowLeft') next = (index + tabs.length - 1) % tabs.length;
      if (event.key === 'Home') next = 0;
      if (event.key === 'End') next = tabs.length - 1;
      if (next === undefined) return;
      event.preventDefault();
      activate(tabs[next], true);
    });
  });

  // Short, playable excerpts from Between the Lines and The Last Ferry.
  // Keep feedback local: preview answers never enter classroom results.
  function wireQuestion(panel, selector, key, correct, retry) {
    const buttons = [...panel.querySelectorAll(selector)];
    const feedback = panel.querySelector('.demo-feedback');
    buttons.forEach(button => button.addEventListener('click', () => {
      buttons.forEach(item => {
        delete item.dataset.state;
        item.setAttribute('aria-pressed', String(item === button));
      });
      const success = button.dataset[key] === 'correct';
      button.dataset.state = success ? 'correct' : 'retry';
      feedback.textContent = success ? correct : retry;
      feedback.dataset.state = success ? 'correct' : 'retry';
    }));
    buttons.forEach(button => button.setAttribute('aria-pressed', 'false'));
  }
  wireQuestion(document.getElementById('demo-discover'), '[data-answer]', 'answer',
    'Exactly. Her cold arms, glance and comment suggest a request to close the window. You made an inference.',
    'A coat might help, but there is no hint of a shopping trip. Look at the window. Try again.');
  wireQuestion(document.getElementById('demo-practise'), '[data-phrase]', 'phrase',
    'Yes. The simile compares the emptying terminal to a lung breathing out, making the building feel alive.',
    'That detail tells us Mei is alone. Find the phrase that compares the terminal to a living body.');
  window.SylCornerTools?.createDice(document.getElementById('showcase-dice'));

  const points = [...document.querySelectorAll('[data-point]')];
  function lightCourse(course) {
    points.forEach(point => point.classList.toggle('is-active', point.dataset.point === course));
  }
  document.querySelectorAll('[data-course]').forEach(control => {
    control.addEventListener('pointerenter', () => lightCourse(control.dataset.course));
    control.addEventListener('pointerleave', () => lightCourse(document.activeElement?.dataset.course));
    control.addEventListener('focus', () => lightCourse(control.dataset.course));
    control.addEventListener('blur', () => lightCourse(null));
  });
  const work = document.getElementById('selected-work');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
      if (!entries.some(entry => entry.isIntersecting)) return;
      work.classList.add('route-visible');
      observer.disconnect();
    }, { threshold: .15 });
    observer.observe(work);
  }
})();
