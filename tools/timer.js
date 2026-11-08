window.SylCornerTools = window.SylCornerTools || {};
window.SylCornerTools.createTimer = function createTimer(root) {
  root.innerHTML = `
    <div class="timer-reading"><div class="tool-value" role="timer" aria-live="off">05:00</div><p class="timer-status" role="status">Ready</p></div>
    <progress class="timer-progress" max="300" value="300" aria-label="Time remaining"></progress>
    <div class="timer-presets" role="group" aria-label="Timer presets">
      ${[1, 3, 5, 10].map(minutes => '<button type="button" class="timer-preset" data-minutes="' + minutes + '" aria-pressed="' + (minutes === 5) + '">' + minutes + ' min</button>').join('')}
    </div>
    <label class="tool-input">Minutes <input type="number" min="1" max="120" step="1" value="5" inputmode="numeric"></label>
    <div class="tool-actions"><button class="primary" type="button">Start</button><button class="secondary" type="button">Reset</button></div>`;
  const display = root.querySelector('.tool-value');
  const input = root.querySelector('input');
  const start = root.querySelector('.primary');
  const reset = root.querySelector('.secondary');
  const progress = root.querySelector('progress');
  const status = root.querySelector('.timer-status');
  const presets = [...root.querySelectorAll('.timer-preset')];
  let remaining = 300000;
  let duration = remaining;
  let deadline = 0;
  let interval;
  let running = false;

  function render() {
    const seconds = Math.ceil(remaining / 1000);
    display.textContent = String(Math.floor(seconds / 60)).padStart(2, '0') + ':' + String(seconds % 60).padStart(2, '0');
    progress.max = duration;
    progress.value = remaining;
  }

  function stop() {
    clearInterval(interval);
    running = false;
    start.textContent = 'Start';
  }

  function setDuration() {
    stop();
    const minutes = Math.max(1, Math.min(120, Math.trunc(Number(input.value || 5))));
    input.value = minutes;
    duration = minutes * 60000;
    remaining = duration;
    status.textContent = 'Ready';
    root.closest('.tool-card').dataset.timerState = 'ready';
    presets.forEach(button => button.setAttribute('aria-pressed', Number(button.dataset.minutes) === minutes));
    render();
  }

  function tick() {
    remaining = Math.max(0, deadline - Date.now());
    render();
    if (remaining === 0) {
      stop();
      status.textContent = 'Time is up.';
      root.closest('.tool-card').dataset.timerState = 'finished';
    }
  }

  start.addEventListener('click', () => {
    if (running) {
      remaining = Math.max(0, deadline - Date.now());
      stop();
      render();
      status.textContent = remaining ? 'Paused' : 'Time is up.';
      root.closest('.tool-card').dataset.timerState = remaining ? 'paused' : 'finished';
      return;
    }
    if (!remaining) setDuration();
    running = true;
    deadline = Date.now() + remaining;
    start.textContent = 'Pause';
    status.textContent = 'Running';
    root.closest('.tool-card').dataset.timerState = 'running';
    interval = setInterval(tick, 200);
  });
  reset.addEventListener('click', setDuration);
  input.addEventListener('change', () => { if (!running) setDuration(); });
  presets.forEach(button => button.addEventListener('click', () => {
    input.value = button.dataset.minutes;
    setDuration();
  }));
  render();
};
