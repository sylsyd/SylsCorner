import { getStore } from '@netlify/blobs';
import { timingSafeEqual } from 'node:crypto';
import { makeHandler } from './lib/leaderboard-core.mjs';

export default makeHandler({
  store:()=>getStore({name:'annotator-leaderboard-v1',consistency:'strong'}),
  admin:()=>process.env.LEADERBOARD_ADMIN_SECRET,
  equal:(a,b)=>a.length===b.length && timingSafeEqual(Buffer.from(a),Buffer.from(b))
});
