(function () {
  'use strict';
  const endpoint = '/.netlify/functions/quiz-results';
  const queueKey = 'learning-deck-quiz-pending-v1';
  let config, identity, credential, expiresAt = 0, loading = true, busy = false, panel, status, buttonBox, retry, signOut, message;
  let queue = [];
  try { queue = JSON.parse(localStorage.getItem(queueKey) || '[]'); if (!Array.isArray(queue)) queue = []; } catch { queue = []; }
  function say(text) {
    message = text; if (status) status.textContent = text;
    document.querySelectorAll('.deck-quiz-save-status').forEach(element => { element.textContent = text; });
  }
  function persist() {
    try { localStorage.setItem(queueKey, JSON.stringify(queue)); return true; }
    catch { say('This browser cannot keep pending scores after closing. Keep this page open until they are saved.'); return false; }
  }
  function signedIn() { return Boolean(identity && credential && Date.now() < expiresAt - 5000); }
  function dispatchIdentity(value) { window.dispatchEvent(new CustomEvent('deck-quiz-identity', { detail: value })); }
  async function request(action, body, token) {
    const response = await fetch(endpoint + (action ? '?action=' + action : ''), {
      method: 'POST', headers: { 'Content-Type': 'application/json', Authorization: 'Bearer ' + token },
      body: JSON.stringify(body), signal: AbortSignal.timeout(20000)
    });
    const data = await response.json();
    if (!response.ok) { const error = new Error(data.error || 'Score saving unavailable.'); error.status = response.status; throw error; }
    return data;
  }
  async function flush() {
    if (busy || !config?.enabled || !identity) return;
    const pending = queue.filter(item => item.studentId === identity.id);
    if (!pending.length) return;
    if (!signedIn()) { say('Sign in again to save your pending scores.'); return; }
    busy = true;
    const startingStudent = identity.id;
    try {
      for (const item of pending) {
        // Freeze the verified identity and token for this request. A later account
        // switch must never submit somebody else's queued scores.
        const owner = identity?.id, token = credential;
        if (owner !== item.studentId) break;
        say('Saving quiz score…');
        const result = await request('', item.result, token);
        if (!result.saved || result.attemptId !== item.result.attemptId) throw new Error('Score not confirmed.');
        queue = queue.filter(entry => entry.result.attemptId !== item.result.attemptId || entry.studentId !== owner);
        persist();
      }
      if (queue.some(item => item.studentId === identity?.id)) say('You have scores waiting to save.');
      else say('Saved for your teacher.');
    } catch (error) {
      if (error.status === 401) { credential = null; say('Sign in again to save your pending scores.'); }
      else say('Not saved online yet. Your score is waiting on this device; reconnect and retry.');
    } finally {
      busy = false;
      if (identity?.id !== startingStudent && signedIn()) flush();
    }
  }
  async function acceptCredential(response) {
    say('Checking your school account…');
    try {
      const data = await request('session', {}, response.credential);
      // Payload decoding is only for refresh timing; the server verifies identity.
      const encoded = response.credential.split('.')[1].replace(/-/g, '+').replace(/_/g, '/');
      const payload = JSON.parse(atob(encoded.padEnd(Math.ceil(encoded.length / 4) * 4, '=')));
      const changed = identity?.id !== data.identity.id;
      credential = response.credential; expiresAt = payload.exp * 1000; identity = data.identity;
      signOut.hidden = false;
      panel.dataset.connected = 'true';
      if (changed) dispatchIdentity(identity);
      say('Signed in as ' + identity.email + '. Quiz scores save automatically.');
      await flush();
    } catch (error) {
      say(error.status === 401 ? 'Use your @ifs.edu.sg school Google account.' : 'School sign-in unavailable. Please retry.');
    }
  }
  function googleScript() {
    return new Promise((resolve, reject) => {
      if (window.google?.accounts?.id) return resolve();
      const script = document.createElement('script'); script.src = 'https://accounts.google.com/gsi/client'; script.async = true;
      const timeout = setTimeout(() => { script.remove(); reject(new Error('Sign-in timed out')); }, 15000);
      script.onload = () => { clearTimeout(timeout); resolve(); };
      script.onerror = () => { clearTimeout(timeout); script.remove(); reject(new Error('Sign-in unavailable')); };
      document.head.append(script);
    });
  }
  async function configure() {
    loading = true;
    say('Checking school score saving…');
    try {
      const response = await fetch(endpoint + '?action=config', { cache: 'no-store', signal: AbortSignal.timeout(10000) });
      if (!response.ok) throw new Error('Configuration unavailable');
      config = await response.json();
      if (!config.enabled) {
        say('Practice on this device. School score saving has not been connected yet.');
        retry.hidden = true; return;
      }
      const input = document.getElementById('studentName');
      if (input) { input.readOnly = true; input.placeholder = 'Use school Google sign-in'; }
      say('Sign in with your @ifs.edu.sg Google account to start the quiz and save your results.');
      await googleScript();
      google.accounts.id.initialize({ client_id: config.clientId, callback: acceptCredential, hd: config.domain, auto_select: false });
      buttonBox.replaceChildren();
      google.accounts.id.renderButton(buttonBox, { type: 'standard', theme: 'outline', size: 'large', text: 'signin_with', width: 250 });
      retry.hidden = false;
    } catch {
      if (config?.enabled) say('School sign-in could not load. Check your connection and retry.');
      else say('School saving could not be checked. Practice is local only; reconnect before starting if you need to submit results.');
      retry.hidden = false;
    } finally { loading = false; }
  }
  function mount() {
    const namebar = document.querySelector('.namebar');
    if (!namebar) return;
    panel = document.createElement('section'); panel.className = 'deck-quiz-account'; panel.setAttribute('aria-label', 'School quiz results');
    const heading = document.createElement('strong'); heading.textContent = 'Your quiz results';
    status = document.createElement('p'); status.setAttribute('role', 'status'); status.textContent = message || '';
    const controls = document.createElement('div'); controls.className = 'deck-quiz-controls';
    buttonBox = document.createElement('div');
    retry = document.createElement('button'); retry.type = 'button'; retry.className = 'btn ghost'; retry.textContent = 'Retry connection'; retry.hidden = true;
    retry.onclick = () => { if (config?.enabled && window.google?.accounts?.id) { if (signedIn()) flush(); else { say('Use the Google sign-in button to reconnect.'); buttonBox.scrollIntoView({ block: 'nearest' }); } } else configure(); };
    signOut = document.createElement('button'); signOut.type = 'button'; signOut.className = 'btn ghost'; signOut.textContent = 'Switch account'; signOut.hidden = true;
    signOut.onclick = () => {
      credential = null; identity = null; expiresAt = 0; panel.dataset.connected = 'false'; signOut.hidden = true;
      google.accounts.id.disableAutoSelect(); dispatchIdentity(null);
      say('Sign in with the next student’s school Google account. Pending scores stay with their original account.');
    };
    controls.append(buttonBox, retry, signOut); panel.append(heading, status, controls); namebar.after(panel);
    configure();
  }
  window.DeckQuizTracking = {
    canStart() {
      if (loading) { say('Please wait while school saving is checked.'); return false; }
      if (config?.enabled && !signedIn()) { say('Sign in with your school Google account before starting a round.'); panel?.scrollIntoView({ block: 'center', behavior: 'smooth' }); return false; }
      return true;
    },
    begin() { return config?.enabled && signedIn() ? { attemptId: crypto.randomUUID(), startedAt: new Date().toISOString(), studentId: identity.id } : null; },
    renderResult() {
      const card = document.getElementById('resCard');
      if (!config?.enabled || !card) return;
      const note = document.createElement('p'); note.className = 'deck-quiz-save-status'; note.setAttribute('role', 'status'); note.textContent = message || '';
      const again = document.createElement('button'); again.type = 'button'; again.className = 'btn ghost'; again.textContent = 'Retry saving'; again.onclick = () => { if (signedIn()) flush(); else { say('Return to the road and sign in again to save your scores.'); } };
      card.append(note, again);
    },
    complete(attempt, result) {
      if (!attempt) return;
      const entry = { studentId: attempt.studentId, result: { ...result, attemptId: attempt.attemptId, startedAt: attempt.startedAt,
        durationSeconds: Math.max(0, Math.min(86400, Math.round((Date.now() - Date.parse(attempt.startedAt)) / 1000))) } };
      if (!queue.some(item => item.studentId === entry.studentId && item.result.attemptId === entry.result.attemptId)) queue.push(entry);
      persist(); flush();
    }
  };
  window.addEventListener('online', flush);
  window.addEventListener('beforeunload', event => { if (queue.length) { event.preventDefault(); event.returnValue = ''; } });
  document.addEventListener('visibilitychange', () => { if (!document.hidden) flush(); });
  document.addEventListener('DOMContentLoaded', mount, { once: true });
}());
