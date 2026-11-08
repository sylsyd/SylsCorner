import { readFile, writeFile } from 'node:fs/promises';
import { pathToFileURL } from 'node:url';

export function addQuizTracking(html) {
  if (html.includes('data-deck-quiz-tracking')) return html;
  const replace = (before, after) => {
    if (!html.includes(before)) throw new Error('The quiz changed; expected hook not found: ' + before.slice(0, 60));
    html = html.replace(before, after);
  };
  replace('</head>', '<link rel="stylesheet" href="/css/quiz-tracking.css">\n<script src="/js/quiz-tracking.js" data-deck-quiz-tracking></script>\n</head>');
  replace("const STORE = 'amc-w2-kingdom-road';", "let STORE = 'amc-w2-kingdom-road';");
  replace('function startRound(i){', 'function startRound(i){\n  if(window.DeckQuizTracking && !window.DeckQuizTracking.canStart()) return;');
  replace('R={i,def,items,k:0,', 'R={i,def,items,tracking:window.DeckQuizTracking?.begin(),k:0,');
  replace('function finishRound(){', `function finishRound(){
  window.DeckQuizTracking?.complete(R.tracking,{lessonId:'5si-u2-w2-l6',roundId:R.def.id,correct:R.score,total:R.max,points:R.pts});`);
  replace('  const i=R.i; $("again").onclick=', '  window.DeckQuizTracking?.renderResult();\n  const i=R.i; $("again").onclick=');
  replace('window.__KR = { S, ROUNDS,', 'window.__KR = { get S(){return S;}, ROUNDS,');
  replace('renderHome(); show("home");', `window.addEventListener('deck-quiz-identity',event=>{
  save();
  STORE='amc-w2-kingdom-road'+(event.detail?':'+event.detail.id:':signed-out');
  S={name:'',rounds:{},gameBest:0};
  try{const raw=localStorage.getItem(STORE);if(raw)S=Object.assign(S,JSON.parse(raw));}catch(e){}
  S.name=event.detail?.name||'';
  R=null;save();renderHome();show('home');
});
renderHome(); show("home");`);
  return html;
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  const files = process.argv.slice(2);
  if (!files.length) throw new Error('Pass the student lesson HTML path to update.');
  for (const file of files) {
    const source = await readFile(file, 'utf8');
    const updated = addQuizTracking(source);
    if (updated !== source) await writeFile(file, updated, 'utf8');
    console.log(updated === source ? 'Already connected: ' + file : 'Added quiz tracking: ' + file);
  }
}
