window.SylCornerTools = window.SylCornerTools || {};
window.SylCornerTools.createTimer = function createTimer(root) {
  root.innerHTML = '<div class="tool-value" aria-live="polite">05:00</div><label class="tool-input">Minutes <input type="number" min="1" max="120" value="5" inputmode="numeric"></label><div class="tool-actions"><button class="primary" type="button">Start</button><button class="secondary" type="button">Reset</button></div>';
  const display = root.querySelector('.tool-value');
  const input = root.querySelector('input');
  const start = root.querySelector('.primary');
  const reset = root.querySelector('.secondary');
  let seconds = 300;
  let running = false;
  let interval;
  const render = () => { display.textContent = `${String(Math.floor(seconds / 60)).padStart(2, '0')}:${String(seconds % 60).padStart(2, '0')}`; };
  const stop = () => { clearInterval(interval); running = false; start.textContent = 'Start'; };
  start.addEventListener('click', () => { if (running) return stop(); running = true; start.textContent = 'Pause'; interval = setInterval(() => { if (seconds > 0) { seconds--; render(); } else { stop(); } }, 1000); });
  reset.addEventListener('click', () => { stop(); seconds = Math.max(1, Math.min(120, Number(input.value) || 5)) * 60; render(); });
  input.addEventListener('change', () => { if (!running) { seconds = Math.max(1, Math.min(120, Number(input.value) || 5)) * 60; render(); } });
  render();
};