(function () {
  'use strict';
  const audioElements = [...document.querySelectorAll('.chapter-audio audio')];
  const bookId = document.body.dataset.readerBook === 'holes' ? 'holes' : 'amc';
  const registry = bookId === 'holes' ? 'LearningDeckHolesChapters' : 'LearningDeckChapters';
  const loads = new Map();
  const fontKey = 'learning-deck:' + bookId + '-reader-font-size';
  let active = null;
  let fontSize = innerWidth <= 600 || innerHeight <= 500 ? 20 : 26;
  try {
    const saved = Number(localStorage.getItem(fontKey));
    if (saved >= 14 && saved <= 36) fontSize = saved;
  } catch (_) {}

  function button(label, symbol, className = '') {
    const element = document.createElement('button');
    element.type = 'button';
    element.className = 'amc-reader-icon ' + className;
    element.setAttribute('aria-label', label);
    element.title = label;
    element.textContent = symbol;
    return element;
  }

  function loadChapter(state) {
    const number = state.number;
    if (globalThis[registry]?.[number]) return Promise.resolve(globalThis[registry][number]);
    if (loads.has(number)) return loads.get(number);
    const promise = new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = new URL('../reading/chapter-' + number + '.js', state.audio.src).href;
      script.onload = function () {
        const data = globalThis[registry]?.[number];
        if (data?.number === number && Array.isArray(data.paragraphs) && data.paragraphs.length) resolve(data);
        else { loads.delete(number); reject(new Error('Chapter data unavailable')); }
        script.remove();
      };
      script.onerror = function () { loads.delete(number); script.remove(); reject(new Error('Chapter could not load')); };
      document.head.append(script);
    });
    loads.set(number, promise);
    return promise;
  }

  function renderChapter(state, data) {
    const fragment = document.createDocumentFragment();
    for (const paragraph of data.paragraphs) {
      const p = document.createElement('p');
      if (paragraph.indent) p.classList.add('indent');
      if (paragraph.gap === 1 || paragraph.gap === 2) p.classList.add('gap-' + paragraph.gap);
      if (paragraph.center) p.classList.add('center');
      for (const run of paragraph.runs) {
        let node = document.createTextNode(run.text);
        if (run.italic) { const em = document.createElement('em'); em.append(node); node = em; }
        if (run.bold) { const strong = document.createElement('strong'); strong.append(node); node = strong; }
        p.append(node);
      }
      fragment.append(p);
    }
    state.content.replaceChildren(fragment);
    state.heading.textContent = 'Chapter ' + data.number + (data.title ? ': ' + data.title : '');
    state.credit.textContent = data.book + ' / ' + data.author;
    state.loaded = true;
  }

  function captureAnchor(state) {
    const bounds = state.viewport.getBoundingClientRect();
    const x = bounds.left + 4, y = bounds.top + 10;
    const caret = document.caretPositionFromPoint?.(x, y);
    const range = caret ? null : document.caretRangeFromPoint?.(x, y);
    const node = caret?.offsetNode || range?.startContainer;
    const offset = caret?.offset ?? range?.startOffset;
    if (node?.nodeType === Node.TEXT_NODE && node.length && state.content.contains(node)) {
      state.anchor = { node, offset: Math.min(offset, node.length - 1) };
    }
  }

  function updatePage(state, keepAnchor = false) {
    state.page = Math.max(0, Math.min(state.pages - 1, state.page));
    state.viewport.scrollLeft = state.page * state.stride;
    state.counter.textContent = 'Page ' + (state.page + 1) + ' of ' + state.pages;
    state.previous.disabled = state.page === 0;
    state.next.disabled = state.page === state.pages - 1;
    if (!keepAnchor || !state.anchor) captureAnchor(state);
  }

  function paginate(state) {
    if (active !== state || !state.loaded || !state.viewport.clientWidth) return;
    const progress = state.pages > 1 ? state.page / (state.pages - 1) : 0;
    const width = state.viewport.clientWidth;
    const gap = state.fullscreen ? 32 : 48;
    const columns = state.fullscreen && width >= 1080 ? 2 : 1;
    state.stride = width + gap;
    state.content.style.setProperty('--amc-page-width', ((width - gap * (columns - 1)) / columns) + 'px');
    state.content.style.setProperty('--amc-column-count', columns);
    state.content.style.setProperty('--amc-column-gap', gap + 'px');
    state.content.style.setProperty('--amc-font-size', fontSize + 'px');
    state.viewport.scrollLeft = 0;
    state.pages = Math.max(1, Math.ceil((state.content.scrollWidth + gap - 1) / state.stride));
    // Complete the final spread so an odd last column does not overlap the previous page.
    state.scrollEnd.style.left = (state.pages * state.stride - gap - 1) + 'px';
    if (state.anchor && state.content.contains(state.anchor.node)) {
      const range = document.createRange();
      range.setStart(state.anchor.node, state.anchor.offset);
      range.setEnd(state.anchor.node, state.anchor.offset + 1);
      state.page = Math.floor((range.getBoundingClientRect().left - state.viewport.getBoundingClientRect().left + 1) / state.stride);
    } else state.page = Math.round(progress * (state.pages - 1));
    state.smaller.disabled = fontSize <= 14;
    state.larger.disabled = fontSize >= 36;
    updatePage(state, true);
  }

  function turnPage(state, change) {
    if (!state.loaded) return;
    state.page += change;
    updatePage(state);
  }

  function setFullscreenView(state, enabled) {
    state.fullscreen = enabled;
    document.body.classList.toggle('chapter-reader-fullscreen', enabled);
    const available = document.fullscreenEnabled && document.documentElement.requestFullscreen;
    const label = enabled ? (document.fullscreenElement ? 'Exit fullscreen' : 'Exit expanded view') : (available ? 'Enter fullscreen' : 'Expand reading area');
    state.fullscreenButton.setAttribute('aria-label', label);
    state.fullscreenButton.title = label;
    state.fullscreenButton.setAttribute('aria-pressed', String(enabled));
    paginate(state);
  }

  async function toggleFullscreen(state) {
    if (state.fullscreenButton.disabled) return;
    state.fullscreenButton.disabled = true;
    try {
      if (state.fullscreen) {
        setFullscreenView(state, false);
        state.ownsFullscreen = false;
        if (document.fullscreenElement) await document.exitFullscreen();
      } else {
        setFullscreenView(state, true);
        if (!document.fullscreenElement && document.fullscreenEnabled && document.documentElement.requestFullscreen) {
          await document.documentElement.requestFullscreen();
          if (active !== state) { await document.exitFullscreen(); return; }
          state.ownsFullscreen = true;
        }
        setFullscreenView(state, true);
      }
    } catch (_) {
      // Keep the expanded layout usable when the browser does not permit native fullscreen.
      if (active === state) setFullscreenView(state, state.fullscreen);
    } finally { state.fullscreenButton.disabled = false; }
  }

  function closeReader(restoreFocus = true) {
    if (!active) return;
    const state = active;
    active = null;
    const exitFullscreen = state.ownsFullscreen && document.fullscreenElement;
    state.ownsFullscreen = false;
    state.fullscreen = false;
    state.fullscreenButton.setAttribute('aria-pressed', 'false');
    state.panel.hidden = true;
    state.trigger.setAttribute('aria-expanded', 'false');
    state.slide.classList.remove('chapter-reading-slide');
    state.audio.closest('.chapter-audio').classList.remove('chapter-reading-audio');
    state.root.classList.remove('chapter-reading-root');
    document.body.classList.remove('chapter-reading');
    document.body.classList.remove('chapter-reader-fullscreen');
    if (exitFullscreen) document.exitFullscreen().catch(function () {});
    if (restoreFocus && state.slide.classList.contains('active')) state.trigger.focus({ preventScroll: true });
  }

  async function openReader(state) {
    if (active && active !== state) closeReader(false);
    active = state;
    state.panel.hidden = false;
    state.trigger.setAttribute('aria-expanded', 'true');
    state.slide.classList.add('chapter-reading-slide');
    state.audio.closest('.chapter-audio').classList.add('chapter-reading-audio');
    state.root.classList.add('chapter-reading-root');
    document.body.classList.add('chapter-reading');
    setFullscreenView(state, Boolean(document.fullscreenElement));
    state.close.focus({ preventScroll: true });
    if (!state.loaded) {
      state.content.hidden = true;
      state.message.hidden = false;
      state.message.textContent = 'Loading chapter...';
      state.retry.hidden = true;
      state.counter.textContent = '';
      state.previous.disabled = state.next.disabled = true;
      state.panel.setAttribute('aria-busy', 'true');
      try {
        const data = await loadChapter(state);
        renderChapter(state, data);
        state.content.hidden = false;
        state.message.hidden = true;
      } catch (_) {
        state.message.textContent = 'The chapter could not be loaded.';
        state.retry.hidden = false;
      } finally { state.panel.setAttribute('aria-busy', 'false'); }
    }
    if (active !== state) return;
    paginate(state);
    if (state.loaded && document.activeElement === state.close) state.viewport.focus({ preventScroll: true });
    document.fonts?.ready.then(function () { paginate(state); });
  }

  for (const audio of audioElements) {
    const match = audio.id.match(/^chapter-([1-7])-audio$/);
    const number = Number(audio.dataset.chapter || match?.[1]);
    if (!Number.isInteger(number) || number < 1 || number > 7) continue;
    const root = document.createElement('div');
    root.className = 'amc-reader';
    root.innerHTML = '<button type="button" class="amc-reader-toggle" aria-expanded="false">Read chapter ' + number + '</button>' +
      '<section class="amc-reader-panel" hidden role="region"><div class="amc-reader-toolbar">' +
      '<div class="amc-reader-heading"><h2></h2><p></p></div><div class="amc-reader-tools"></div></div>' +
      '<div class="amc-reader-viewport" tabindex="0"><div class="amc-reader-content"></div>' +
      '<p class="amc-reader-message" role="status" hidden></p><button type="button" class="amc-reader-retry" hidden>Retry</button><span class="amc-reader-scroll-end" aria-hidden="true"></span></div>' +
      '<div class="amc-reader-pagination"><span class="amc-reader-page" role="status" aria-live="polite"></span></div></section>';
    const get = selector => root.querySelector(selector);
    const state = {
      number, audio, root, slide: audio.closest('.slide'), loaded: false, page: 0, pages: 1, stride: 0, fullscreen: false, ownsFullscreen: false,
      trigger: get('.amc-reader-toggle'), panel: get('.amc-reader-panel'), heading: get('h2'), credit: get('.amc-reader-heading p'),
      viewport: get('.amc-reader-viewport'), content: get('.amc-reader-content'), counter: get('.amc-reader-page'),
      message: get('.amc-reader-message'), retry: get('.amc-reader-retry'), scrollEnd: get('.amc-reader-scroll-end'),
      previous: button('Previous page', '\u2190'), next: button('Next page', '\u2192'),
      smaller: button('Smaller text', 'A\u2212'), larger: button('Larger text', 'A+'), fullscreenButton: button('Enter fullscreen', '\u26f6'), close: button('Close chapter', '\u00d7', 'amc-reader-close')
    };
    const instanceId = bookId === 'holes' ? audio.id : String(number);
    state.heading.id = 'amc-reader-title-' + instanceId;
    state.heading.textContent = 'Chapter ' + number;
    state.panel.id = 'amc-reader-panel-' + instanceId;
    state.panel.setAttribute('aria-labelledby', state.heading.id);
    state.trigger.setAttribute('aria-controls', state.panel.id);
    state.trigger.setAttribute('aria-label', 'Read chapter ' + number);
    state.viewport.setAttribute('aria-label', 'Chapter ' + number + ' text');
    state.fullscreenButton.setAttribute('aria-pressed', 'false');
    get('.amc-reader-tools').append(state.smaller, state.larger, state.fullscreenButton, state.close);
    get('.amc-reader-pagination').prepend(state.previous);
    get('.amc-reader-pagination').append(state.next);
    state.trigger.onclick = () => openReader(state);
    state.retry.onclick = () => openReader(state);
    state.close.onclick = () => closeReader();
    state.fullscreenButton.onclick = () => toggleFullscreen(state);
    state.previous.onclick = () => turnPage(state, -1);
    state.next.onclick = () => turnPage(state, 1);
    function changeFont(change) {
      fontSize = Math.max(14, Math.min(36, fontSize + change));
      try { localStorage.setItem(fontKey, String(fontSize)); } catch (_) {}
      paginate(state);
    }
    state.smaller.onclick = () => changeFont(-2);
    state.larger.onclick = () => changeFont(2);
    let touch;
    state.viewport.addEventListener('touchstart', event => {
      if (event.touches.length !== 1) { touch = null; return; }
      touch = { x: event.touches[0].clientX, y: event.touches[0].clientY };
    }, { passive: true });
    state.viewport.addEventListener('touchend', event => {
      if (!touch || !event.changedTouches.length || String(getSelection())) return;
      const dx = event.changedTouches[0].clientX - touch.x;
      const dy = event.changedTouches[0].clientY - touch.y;
      if (Math.abs(dx) > 60 && Math.abs(dy) < 45) turnPage(state, dx < 0 ? 1 : -1);
      touch = null;
    }, { passive: true });
    audio.closest('.chapter-audio').after(root);
    if (bookId === 'holes') {
      const resumeKey = 'learning-deck:holes:audio-' + number;
      let lastSave = 0;
      function savePosition() {
        if (!Number.isFinite(audio.duration)) return;
        try { sessionStorage.setItem(resumeKey, String(audio.currentTime >= audio.duration - 1 ? 0 : audio.currentTime)); } catch (_) {}
      }
      function restorePosition() {
        try {
          const saved = Number(sessionStorage.getItem(resumeKey));
          if (saved > 0 && saved < audio.duration - 1) audio.currentTime = saved;
        } catch (_) {}
      }
      audio.addEventListener('loadedmetadata', restorePosition);
      audio.addEventListener('play', function () {
        audioElements.forEach(other => { if (other !== audio) other.pause(); });
        restorePosition();
      });
      audio.addEventListener('pause', savePosition);
      audio.addEventListener('seeked', savePosition);
      audio.addEventListener('timeupdate', function () {
        if (performance.now() - lastSave > 1500) { savePosition(); lastSave = performance.now(); }
      });
      audio.addEventListener('ended', savePosition);
    }
    new ResizeObserver(() => paginate(state)).observe(state.viewport);
  }

  document.addEventListener('keydown', function (event) {
    if (!active) {
      if (event.target.closest('.chapter-audio,.amc-reader') && ['ArrowLeft', 'ArrowRight', 'PageUp', 'PageDown', 'Home', 'End', ' ', 'Enter'].includes(event.key)) event.stopPropagation();
      return;
    }
    if (event.key === 'Escape') {
      event.preventDefault(); event.stopPropagation();
      if (active.fullscreen) toggleFullscreen(active); else closeReader();
      return;
    }
    if (!['ArrowLeft', 'ArrowRight', 'PageUp', 'PageDown', 'Home', 'End', ' ', 'n', 'N', 'r', 'R', 'h', 'H', 't', 'T', 'f', 'F'].includes(event.key)) return;
    event.stopPropagation();
    if (event.ctrlKey || event.altKey || event.metaKey || event.target.closest('audio,button,input,select,textarea')) return;
    event.preventDefault();
    if (event.key === 'ArrowLeft' || event.key === 'PageUp') turnPage(active, -1);
    else if (event.key === 'ArrowRight' || event.key === 'PageDown' || event.key === ' ') turnPage(active, 1);
    else if (event.key === 'Home') { active.page = 0; updatePage(active); }
    else if (event.key === 'End') { active.page = active.pages - 1; updatePage(active); }
    else if (event.key === 'f' || event.key === 'F') toggleFullscreen(active);
  }, true);
  document.addEventListener('fullscreenchange', function () {
    if (!active) return;
    if (!document.fullscreenElement) active.ownsFullscreen = false;
    setFullscreenView(active, Boolean(document.fullscreenElement));
  });
  new MutationObserver(function () {
    if (bookId === 'holes') audioElements.forEach(audio => { if (!audio.closest('.slide').classList.contains('active')) audio.pause(); });
    if (active && !active.slide.classList.contains('active')) closeReader(false);
  }).observe(document.getElementById('stage'), { attributes: true, attributeFilter: ['class'], subtree: true });
  if (bookId === 'holes') window.addEventListener('pagehide', function () { audioElements.forEach(audio => audio.pause()); });
})();
