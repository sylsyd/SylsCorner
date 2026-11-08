import { getStore } from '@netlify/blobs';
import { OAuth2Client, JWT } from 'google-auth-library';
import { makeQuizHandler } from './lib/quiz-results-core.mjs';
import { createSheetsWriter } from './lib/quiz-sheets.mjs';

const google = new OAuth2Client();
let sheets;
let accountCache;
const write = createSheetsWriter(options => {
  const raw = process.env.QUIZ_GOOGLE_SERVICE_ACCOUNT;
  if (raw !== accountCache) {
    const account = JSON.parse(raw);
    if (account.type !== 'service_account' || !account.client_email || !account.private_key) throw new Error('Invalid Sheets service account');
    sheets = new JWT({ email: account.client_email, key: account.private_key, scopes: ['https://www.googleapis.com/auth/spreadsheets'] });
    accountCache = raw;
  }
  return sheets.request(options);
});

export default makeQuizHandler({
  config: () => ({
    enabled: process.env.QUIZ_TRACKING_ENABLED === 'true' && Boolean(process.env.QUIZ_GOOGLE_CLIENT_ID && process.env.QUIZ_GOOGLE_SHEET_ID && process.env.QUIZ_GOOGLE_SERVICE_ACCOUNT),
    clientId: process.env.QUIZ_GOOGLE_CLIENT_ID,
    sheetId: process.env.QUIZ_GOOGLE_SHEET_ID
  }),
  verify: async (token, audience) => (await google.verifyIdToken({ idToken: token, audience })).getPayload(),
  store: () => getStore({ name: 'private-quiz-results-v1', consistency: 'strong' }),
  write
});
