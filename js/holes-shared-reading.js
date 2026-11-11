import { chapter14Reading, chapter15Reading } from './holes-shared-reading-data.js?v=20261111b';

for (const [chapter, reading] of [[14, chapter14Reading], [15, chapter15Reading]]) {
  const audio = document.getElementById('holes-chapter-' + chapter + '-audio');
  if (audio) setupSharedReading(audio, chapter, reading);
}

function setupSharedReading(audio, chapter, reading) {
  const slide = audio.closest('.slide');
  const container = audio.closest('.chapter-audio');
  const toggle = document.createElement('button');
  toggle.type = 'button';
  toggle.className = 'shared-reading-toggle';
  toggle.textContent = 'Shared reading';
  toggle.setAttribute('aria-pressed', 'false');
  toggle.title = 'Three planned student turns, reading from your own books';
  const status = document.createElement('span');
  status.className = 'shared-reading-status';
  status.setAttribute('role', 'status');
  container.append(toggle, status);

  let enabled = false;
  let pending = null;
  let handoverContent = null;
  let internalSeek = false;
  let frame = 0;
  const completed = new Set();
  const turns = reading.turns;

  function updateStatus() {
    if (!enabled) {
      status.textContent = '';
      toggle.textContent = 'Shared reading';
    } else if (pending) {
      toggle.textContent = 'Student reading…';
      status.textContent = 'Read the passage in your own book, then resume the audiobook.';
    } else {
      toggle.textContent = 'Shared reading on';
      status.textContent = completed.size === turns.length
        ? 'All three student turns are complete. The narrator will finish the chapter.'
        : 'Three planned student turns. The audio pauses automatically.';
    }
    toggle.setAttribute('aria-pressed', String(enabled));
  }

  function closeHandover() {
    if (handoverContent) window.DeckNamePicker?.close(handoverContent);
    handoverContent = null;
  }

  function makeHandover(turn, index) {
    const content = document.createElement('section');
    content.className = 'shared-reading-handover';
    const heading = document.createElement('p');
    heading.className = 'shared-reading-turn';
    heading.textContent = 'Holes · Chapter ' + chapter + ' · Student turn ' + (index + 1) + ' of ' + turns.length;
    const instruction = document.createElement('p');
    instruction.textContent = 'Read aloud from your own copy of the book.';
    const cues = document.createElement('dl');
    for (const [label, words] of [['Begin with', turn.begin], ['Read through', turn.end]]) {
      const term = document.createElement('dt');
      term.textContent = label;
      const quote = document.createElement('dd');
      quote.textContent = '“' + words + '”';
      cues.append(term, quote);
    }
    content.append(heading, instruction, cues);
    return content;
  }

  async function resumeAudio() {
    try {
      await audio.play();
    } catch (_) {
      status.textContent = 'Playback could not start. Press the audio play button to continue.';
    }
  }

  function handOver(turn, index) {
    pending = turn;
    completed.add(index);
    cancelAnimationFrame(frame);
    audio.pause();
    internalSeek = true;
    audio.currentTime = turn.pauseAt;
    updateStatus();
    handoverContent = makeHandover(turn, index);
    const resume = document.createElement('button');
    resume.type = 'button';
    resume.className = 'shared-reading-resume';
    resume.textContent = 'Resume audiobook';
    resume.addEventListener('click', resumeAudio);
    const picker = window.DeckNamePicker;
    if (picker) {
      picker.open({ content: handoverContent, actions: resume });
    } else {
      // The ordinary player remains a usable resume control if the picker fails.
      status.textContent = 'Student turn. Begin: ' + turn.begin + ' Read through: ' + turn.end + ' Then press play.';
    }
  }

  function checkPosition() {
    if (!enabled || pending || audio.paused || audio.seeking) return;
    const index = turns.findIndex((turn, index) => !completed.has(index) &&
      audio.currentTime >= turn.pauseAt && audio.currentTime < turn.resumeAt);
    if (index >= 0) handOver(turns[index], index);
  }

  function tick() {
    checkPosition();
    if (enabled && !audio.paused) frame = requestAnimationFrame(tick);
  }

  function matchPosition() {
    completed.clear();
    turns.forEach((turn, index) => {
      if (audio.currentTime >= turn.pauseAt) completed.add(index);
    });
  }

  toggle.addEventListener('click', () => {
    enabled = !enabled;
    if (enabled) matchPosition();
    else {
      pending = null;
      closeHandover();
    }
    cancelAnimationFrame(frame);
    updateStatus();
    if (enabled && !audio.paused) tick();
  });
  // Let the reader's saved-position handler run first. Then skip the passage
  // just read by the student before the recording continues.
  audio.addEventListener('play', () => {
    if (pending && enabled) {
      const resumeAt = pending.resumeAt;
      pending = null;
      internalSeek = true;
      audio.currentTime = resumeAt;
      closeHandover();
      updateStatus();
    }
    cancelAnimationFrame(frame);
    if (enabled) tick();
  });
  audio.addEventListener('pause', () => cancelAnimationFrame(frame));
  audio.addEventListener('timeupdate', checkPosition);
  audio.addEventListener('seeked', () => {
    if (internalSeek) {
      internalSeek = false;
      return;
    }
    // Manual seeking chooses a new place in the chapter, including a replay.
    pending = null;
    closeHandover();
    matchPosition();
    updateStatus();
  });
  audio.addEventListener('loadedmetadata', () => {
    if (Math.abs(audio.duration - reading.duration) > 1) {
      enabled = false;
      toggle.disabled = true;
      updateStatus();
      status.textContent = 'This recording has changed. Shared reading needs new timings.';
      toggle.title = status.textContent;
      toggle.setAttribute('aria-pressed', 'false');
    }
  });
  new MutationObserver(() => {
    if (!slide.classList.contains('active')) closeHandover();
  }).observe(slide, { attributes: true, attributeFilter: ['class'] });
  updateStatus();
}
