/* Same-origin API; no private keys in browser code. */
window.OnlineBoard = (() => {
  const endpoint='/.netlify/functions/annotator-leaderboard';
  let fallbackId=crypto.randomUUID();
  function identity(){try{let id=localStorage.getItem('annotator-player-v1');if(!id){id=fallbackId;localStorage.setItem('annotator-player-v1',id);}return id;}catch{return fallbackId;}}
  async function api(story,method='GET',body,secret){
    const response=await fetch(endpoint+'?story='+encodeURIComponent(story),{method,headers:{...(body?{'Content-Type':'application/json'}:{}),...(secret?{'Authorization':'Bearer '+secret}:{})},body:body?JSON.stringify(body):undefined,signal:AbortSignal.timeout(12000)});
    let data;try{data=await response.json();}catch{throw Error('Leaderboard not available yet. The game still works; check deployment.');}
    if(!response.ok)throw Error(data.error||'Could not connect. Please retry.');return data;
  }
  function mount(parent,story,result){
    const box=document.createElement('section');box.className='online-board';box.style.cssText='margin:24px 0;border:2px solid var(--ink);padding:16px;background:var(--paper);';
    box.innerHTML='<h3 class="h3a">CLASS LEADERBOARD</h3><p class="tagline">This story · shared online · top 20. Score, then full chains. Equal results share a rank.</p><p class="tagline">Use a nickname, not your real name. Nicknames and scores are public. Your best result is remembered per browser—not a verified student account.</p><div data-table style="overflow:auto"></div><p data-status role="status" aria-live="polite"></p><button type="button" data-refresh class="big-btn ghost">REFRESH SCORES</button>';
    if(result && parent.querySelector('.scoreblock'))parent.querySelector('.scoreblock').after(box);else parent.appendChild(box);
    const status=box.querySelector('[data-status]'),table=box.querySelector('[data-table]');
    function render(rows){
      table.replaceChildren();if(!rows.length){table.textContent='No scores yet. Set the first one!';return;}
      const t=document.createElement('table');t.style.cssText='width:100%;text-align:left;border-collapse:collapse;';
      let last='',rank=0;
      [['Rank','Nickname','Score','Chains'],...rows.map((r,i)=>{let key=r.score+':'+r.chains;if(key!==last)rank=i+1;last=key;return [rank,r.name,r.score.toLocaleString(),r.chains+'/12'];})].forEach((cells,i)=>{const tr=t.insertRow();cells.forEach(value=>{let td=document.createElement(i?'td':'th');td.textContent=value;td.style.cssText='padding:8px 5px;border-bottom:1px solid var(--ink-soft);';tr.appendChild(td);});});table.appendChild(t);
    }
    async function refresh(){status.textContent='Loading shared scores…';try{const data=await api(story);render(data.rows);status.textContent='Updated. Scores are shared across devices.';}catch(e){status.textContent=e.message;}}
    box.querySelector('[data-refresh]').onclick=refresh;
    if(result){
      const form=document.createElement('form');form.innerHTML='<label>Nickname <input required maxlength="20" autocomplete="off" aria-label="Public nickname" style="display:block;box-sizing:border-box;width:100%;min-height:48px;font-size:18px;padding:8px;margin:8px 0"></label><button class="big-btn" type="submit">SUBMIT MY SCORE</button>';
      const input=form.querySelector('input'),button=form.querySelector('button');try{input.value=localStorage.getItem('annotator-nickname-v1')||'';}catch{}
      form.onsubmit=async e=>{e.preventDefault();button.disabled=true;status.textContent='Saving…';try{const data=await api(story,'POST',{...result,name:input.value.trim(),playerId:identity()});render(data.rows);try{localStorage.setItem('annotator-nickname-v1',input.value.trim());}catch{}status.textContent=data.message;button.textContent='SUBMITTED';input.disabled=true;}catch(e){status.textContent=e.message;button.disabled=false;}};
      box.insertBefore(form,table);
    }
    const teacher=document.createElement('details');teacher.innerHTML='<summary style="padding:16px 0;cursor:pointer">Teacher controls</summary><p>Requires the teacher password configured in Netlify. Clears only this story.</p><button class="big-btn ghost" type="button">CLEAR THIS STORY’S BOARD</button>';
    teacher.querySelector('button').onclick=async()=>{const secret=prompt('Teacher password (not saved):');if(!secret||!confirm('Permanently clear all scores for this story?'))return;try{await api(story,'DELETE',undefined,secret);await refresh();}catch(e){status.textContent=e.message;}};
    box.appendChild(teacher);refresh();
  }
  return {mount};
})();
