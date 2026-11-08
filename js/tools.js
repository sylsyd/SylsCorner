window.SylCornerTools.createTimer(document.getElementById('timer-tool'));
window.SylCornerTools.createStopwatch(document.getElementById('stopwatch-tool'));
window.SylCornerTools.createDice(document.getElementById('dice-tool'));
window.SylCornerTools.createNameRandomiser(document.getElementById('name-randomiser-tool'));

const focusDialog = document.querySelector('.tool-focus');
const focusSlot = focusDialog.querySelector('.focus-slot');
const focusTitle = document.getElementById('focus-title');
const closeFocusButton = focusDialog.querySelector('.focus-close');
let focusedTool = null;

async function closeToolFocus() {
  if (!focusedTool) return;
  const state = focusedTool;
  focusedTool = null;
  state.placeholder.replaceWith(state.card);
  state.button.hidden = false;
  document.body.classList.remove('tool-is-focused');
  focusDialog.close();
  state.button.focus();
  if (state.ownsFullscreen && document.fullscreenElement) {
    try { await document.exitFullscreen(); } catch {}
  }
}

async function expandTool(button) {
  if (focusedTool) return;
  const card = button.closest('.tool-card');
  const placeholder = document.createComment('Expanded tool');
  card.before(placeholder);
  const state = { card, placeholder, button, ownsFullscreen: false };
  focusedTool = state;
  button.hidden = true;
  focusSlot.append(card);
  focusTitle.textContent = card.querySelector('h2').textContent;
  document.body.classList.add('tool-is-focused');
  focusDialog.showModal();
  closeFocusButton.focus();
  if (document.fullscreenEnabled && !document.fullscreenElement) {
    try {
      await document.documentElement.requestFullscreen();
      if (focusedTool !== state) {
        if (focusedTool) {
          focusedTool.ownsFullscreen = document.fullscreenElement === document.documentElement;
        } else if (document.fullscreenElement) {
          await document.exitFullscreen();
        }
        return;
      }
      state.ownsFullscreen = true;
    } catch {
      // The expanded dialog also works when browser fullscreen is unavailable.
    }
  }
}

document.querySelectorAll('[data-expand-tool]').forEach(button => {
  button.addEventListener('click', () => expandTool(button));
});
closeFocusButton.addEventListener('click', closeToolFocus);
focusDialog.addEventListener('cancel', event => {
  event.preventDefault();
  closeToolFocus();
});
focusDialog.addEventListener('close', () => { if (!focusDialog.open) closeToolFocus(); });
document.addEventListener('fullscreenchange', () => {
  if (focusedTool?.ownsFullscreen && !document.fullscreenElement) closeToolFocus();
});
