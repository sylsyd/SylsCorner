window.SylCornerTools = window.SylCornerTools || {};
window.SylCornerTools.createDice = function createDice(root) {
  root.innerHTML = '<div class="dice-face" aria-live="polite">?</div><p class="dice-message">Ready for a roll.</p><button class="primary" type="button">Roll dice</button>';
  const face = root.querySelector('.dice-face');
  const message = root.querySelector('.dice-message');
  const roll = root.querySelector('button');
  roll.addEventListener('click', () => { roll.disabled = true; face.classList.add('rolling'); message.textContent = 'Rolling...'; window.setTimeout(() => { const result = Math.floor(Math.random() * 6) + 1; face.textContent = result; face.classList.remove('rolling'); message.textContent = `You rolled a ${result}.`; roll.disabled = false; }, 380); });
};