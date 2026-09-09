const stories=new Set(['missbrill','telltale','monkeyspaw','ladytiger','zoo','school','eleven']);
const uuid=/^[a-f0-9]{8}-[a-f0-9]{4}-4[a-f0-9]{3}-[89ab][a-f0-9]{3}-[a-f0-9]{12}$/i;
const order=(a,b)=>b.score-a.score||b.chains-a.chains||a.at-b.at;
const publicRows=rows=>rows.slice(0,20).map(({name,score,chains})=>({name,score,chains}));
const reply=(data,status=200)=>new Response(JSON.stringify(data),{status,headers:{'Content-Type':'application/json','Cache-Control':'no-store','X-Content-Type-Options':'nosniff'}});
export function makeHandler({store,admin,equal,now=Date.now}){
 return async request=>{
  try{
   const url=new URL(request.url),story=url.searchParams.get('story'),method=request.method;
   if(!stories.has(story))return reply({error:'Unknown story.'},400);
   if(!['GET','POST','DELETE'].includes(method))return reply({error:'Method not allowed.'},405);
   if(method!=='GET' && request.headers.get('origin')!==url.origin)return reply({error:'Use the game on this website.'},403);
   if(method==='DELETE'){
    const secret=admin(),given=request.headers.get('authorization')?.replace(/^Bearer /,'')||'';
    if(!secret || Buffer.byteLength(secret)!==Buffer.byteLength(given) || !equal(secret,given))return reply({error:'Teacher password incorrect or not configured.'},403);
   }
   let body;
   if(method==='POST'){
    if(!request.headers.get('content-type')?.startsWith('application/json'))return reply({error:'JSON required.'},415);
    const text=await request.text();if(Buffer.byteLength(text)>2048)return reply({error:'Submission too large.'},413);
    try{body=JSON.parse(text);}catch{return reply({error:'Invalid JSON.'},400);}
    if(!body||typeof body!=='object')return reply({error:'Invalid submission.'},400);
    const {name,score,chains,seconds,completed,playerId,runId}=body;
    if(typeof name!=='string'||!/^\p{L}[\p{L}\p{N} _-]{1,19}$/u.test(name)||!uuid.test(playerId||'')||!uuid.test(runId||'')||!Number.isInteger(score)||score<0||score>27900||score%50!==0||!Number.isInteger(chains)||chains<0||chains>12||completed!==12||!Number.isInteger(seconds)||seconds<30||seconds>86400)return reply({error:'Use a 2–20 character nickname (letters, numbers, spaces, _ or -) and finish all 12 rounds. Invalid score or duration.'},400);
   }
   const db=store(),key='stories/'+story;
   for(let attempt=0;attempt<8;attempt++){
    const previous=await db.getWithMetadata(key,{type:'json'});
    const rows=previous?.data?.rows||[];
    if(method==='GET')return reply({rows:publicRows(rows)});
    let updated=[];
    if(method==='POST'){
     const old=rows.find(r=>r.playerId===body.playerId);
     if(old?.runId===body.runId)return reply({rows:publicRows(rows),message:'Already submitted. Your best score is on the board.'});
     if(old && now()-old.lastSubmit<15000)return reply({error:'Please wait 15 seconds before submitting again.'},429);
     const candidate={name:body.name,score:body.score,chains:body.chains,playerId:body.playerId,runId:body.runId,at:now(),lastSubmit:now()};
     const best=old && order(old,candidate)<=0?{...old,lastSubmit:now(),runId:body.runId}:candidate;
     updated=[...rows.filter(r=>r.playerId!==body.playerId),best].sort(order).slice(0,200);
    }
    const {modified}=await db.setJSON(key,{rows:updated},previous?{onlyIfMatch:previous.etag}:{onlyIfNew:true});
    if(modified)return reply({rows:publicRows(updated),message:method==='DELETE'?'Cleared.':'Submitted! Your best result is kept; the top 20 are displayed.'});
   }
   return reply({error:'The board is busy. Please try again.'},409);
  }catch(error){console.error('Leaderboard request failed:',error.name);return reply({error:'Leaderboard temporarily unavailable. Your game result is still here; retry shortly.'},503);}
 };
}
