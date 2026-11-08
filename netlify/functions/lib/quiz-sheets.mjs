import { LESSON_TITLE, ROUNDS } from './quiz-results-core.mjs';

export const ATTEMPTS = 'Learning Deck Attempts';
export const OVERVIEW = 'Learning Deck Overview';
export const SKILLS = 'Learning Deck Skills';
export const HEADERS = ['Submitted UTC', 'Submitted Singapore', 'Class', 'Lesson ID', 'Lesson', 'Round ID', 'Round', 'Skill', 'Student ID', 'Name', 'School email', 'Correct', 'Total', 'Accuracy', 'Points', 'Attempt ID', 'Started UTC', 'Duration seconds', 'First score'];
const sheetsRoot = 'https://sheets.googleapis.com/v4/spreadsheets/';
const range = (title, cells) => "'" + title + "'!" + cells;

export function attemptValues(record) {
  const { identity, attempt, submittedAt } = record;
  const round = ROUNDS[attempt.roundId];
  const singapore = new Intl.DateTimeFormat('en-GB', { timeZone: 'Asia/Singapore', dateStyle: 'medium', timeStyle: 'medium', hour12: false }).format(new Date(submittedAt));
  return [submittedAt, singapore, '5SI', attempt.lessonId, LESSON_TITLE, attempt.roundId, round[0], round[1],
    identity.id, identity.name, identity.email, attempt.correct, attempt.total,
    attempt.correct / attempt.total, attempt.points, attempt.attemptId, attempt.startedAt, attempt.durationSeconds];
}

export const OVERVIEW_FORMULA = `=QUERY('${ATTEMPTS}'!A:S,"select C,E,K,J,G,H,count(P),max(S),max(N),max(A) where P is not null group by C,E,K,J,G,H label C 'Class',E 'Lesson',K 'School email',J 'Student',G 'Round',H 'Skill',count(P) 'Attempts',max(S) 'First score',max(N) 'Best score',max(A) 'Last submitted UTC'",1)`;
export const SKILLS_FORMULA = `=QUERY('${OVERVIEW}'!A:J,"select A,B,C,D,F,count(E),avg(H),avg(I) where C is not null group by A,B,C,D,F label A 'Class',B 'Lesson',C 'School email',D 'Student',F 'Skill',count(E) 'Rounds completed',avg(H) 'First score average',avg(I) 'Best score average'",1)`;

// request is an authenticated Google Auth client request function, injectable in tests.
export function createSheetsWriter(request) {
  const ready = new Map();
  const call = (sheetId, suffix, options = {}) => request({ url: sheetsRoot + sheetId + suffix, timeout: 15000, ...options });
  async function initialise(sheetId) {
    const { data } = await call(sheetId, '?fields=sheets.properties');
    const sheets = data.sheets || [];
    const missing = [ATTEMPTS, OVERVIEW, SKILLS].filter(title => !sheets.some(sheet => sheet.properties.title === title));
    if (missing.length) {
      try {
        await call(sheetId, ':batchUpdate', { method: 'POST', data: { requests: missing.map(title => ({ addSheet: { properties: { title, gridProperties: { rowCount: 1000, columnCount: 20, frozenRowCount: 1 } } } })) } });
      } catch (error) {
        // Another function instance may have created them at the same time.
        const fresh = await call(sheetId, '?fields=sheets.properties');
        if (![ATTEMPTS, OVERVIEW, SKILLS].every(title => fresh.data.sheets?.some(sheet => sheet.properties.title === title))) throw error;
      }
    }
    const header = await call(sheetId, '/values/' + encodeURIComponent(range(ATTEMPTS, 'A1:S1')));
    if (header.data.values?.[0]?.length && JSON.stringify(header.data.values[0]) !== JSON.stringify(HEADERS)) {
      throw new Error('The existing quiz worksheet has a different layout');
    }
    await call(sheetId, '/values:batchUpdate', { method: 'POST', data: { valueInputOption: 'RAW', data: [{ range: range(ATTEMPTS, 'A1:S1'), values: [HEADERS] }] } });
    await call(sheetId, '/values:batchUpdate', { method: 'POST', data: { valueInputOption: 'USER_ENTERED', data: [
      { range: range(OVERVIEW, 'A1'), values: [[OVERVIEW_FORMULA]] },
      { range: range(SKILLS, 'A1'), values: [[SKILLS_FORMULA]] }
    ] } });
    const fresh = await call(sheetId, '?fields=sheets.properties');
    const requests = fresh.data.sheets.filter(sheet => [ATTEMPTS, OVERVIEW, SKILLS].includes(sheet.properties.title)).flatMap(({ properties }) => {
      const id = properties.sheetId;
      const percentColumns = properties.title === ATTEMPTS ? [[13, 14], [18, 19]] : properties.title === OVERVIEW ? [[7, 9]] : [[6, 8]];
      return [
        { repeatCell: { range: { sheetId: id, startRowIndex: 0, endRowIndex: 1 }, cell: { userEnteredFormat: { backgroundColor: { red: .09, green: .21, blue: .27 }, textFormat: { bold: true, foregroundColor: { red: 1, green: 1, blue: 1 } } } }, fields: 'userEnteredFormat' } },
        ...percentColumns.map(([startColumnIndex, endColumnIndex]) => ({ repeatCell: { range: { sheetId: id, startRowIndex: 1, startColumnIndex, endColumnIndex }, cell: { userEnteredFormat: { numberFormat: { type: 'PERCENT', pattern: '0%' } } }, fields: 'userEnteredFormat.numberFormat' } }))
      ];
    });
    await call(sheetId, ':batchUpdate', { method: 'POST', data: { requests } });
  }
  return async (record, settings) => {
    const id = settings.sheetId;
    if (!ready.has(id)) ready.set(id, initialise(id).catch(error => { ready.delete(id); throw error; }));
    await ready.get(id);
    // Google Sheets updates do not expand beyond the worksheet's grid.
    // Ensure enough rows using a bounded expansion, including after many retries.
    const { data } = await call(id, '?fields=sheets.properties');
    const sheet = data.sheets.find(item => item.properties.title === ATTEMPTS).properties;
    if (record.row > sheet.gridProperties.rowCount) {
      await call(id, ':batchUpdate', { method: 'POST', data: { requests: [{ appendDimension: { sheetId: sheet.sheetId, dimension: 'ROWS', length: Math.max(1000, record.row - sheet.gridProperties.rowCount) } }] } });
    }
    await call(id, '/values/' + encodeURIComponent(range(ATTEMPTS, `A${record.row}:R${record.row}`)) + '?valueInputOption=RAW', {
      method: 'PUT', data: { values: [attemptValues(record)] }
    });
    // Only this trusted formula uses USER_ENTERED; names and emails use RAW.
    const r = record.row;
    const first = `=IF(COUNTIFS($I$2:I${r},I${r},$D$2:D${r},D${r},$F$2:F${r},F${r})=1,N${r},"")`;
    await call(id, '/values/' + encodeURIComponent(range(ATTEMPTS, `S${r}`)) + '?valueInputOption=USER_ENTERED', { method: 'PUT', data: { values: [[first]] } });
  };
}
