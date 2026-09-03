window.SylCornerTools = window.SylCornerTools || {};
window.SylCornerTools.createStopwatch = function createStopwatch(root) {
  root.innerHTML = '<div class="tool-value" aria-live="polite">00:00.0</div><div class="tool-actions"><button class="primary" type="button">Start</button><button class="secondary" type="button">Reset</button></div>';
  const display = root.querySelector('.tool-value');
  const start = root.querySelector('.primary');
  const reset = root.querySelector('.secondary');
  let startedAt = 0;
  let elapsed = 0;
  let frame;
  let running = false;
  const render = () => { const value = running ? elapsed + performance.now() - startedAt : elapsed; const totalTenths = Math.floor(value / 100); const minutes = Math.floor(totalTenths / 600); const seconds = Math.floor(totalTenths / 10) % 60; display.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}.${totalTenths % 10}`; if (running) frame = requestAnimationFrame(render); };
  start.addEventListener('click', () => { if (running) { elapsed += performance.now() - startedAt; running = false; cancelAnimationFrame(frame); start.textContent = 'Start'; render(); return; } startedAt = performance.now(); running = true; start.textContent = 'Pause'; render(); });
  reset.addEventListener('click', () => { running = false; cancelAnimationFrame(frame); elapsed = 0; start.textContent = 'Start'; render(); });
  render();
};