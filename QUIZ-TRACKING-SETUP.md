# School quiz results

Prepared for 5SI / A Monster Calls / Week 2 / Lesson 6, **The Kingdom Road**.
The quiz keeps its existing questions, scoring and game. Online tracking is
disabled until the Google connection is configured. Its scheduled release is
unchanged: 13 November 2026, midnight Asia/Singapore.

## One-time Google setup

Use a school-owned Google Cloud project, with help from the Workspace admin
if your school restricts project creation, service-account keys or student apps.

1. Enable the **Google Sheets API**.
2. Configure Google Auth Platform branding and an **Internal** audience for the
   school organisation. Create an OAuth client of type **Web application**.
   Add `https://sylscorner.netlify.app` as an authorised JavaScript origin.
   No OAuth client secret is used by this website.
3. Create a service account for writing quiz results. Give it no project-wide
   IAM roles. Create a JSON key for this account, if school policy allows keys.
   No domain-wide delegation or access to students' Drive is needed.
4. Create a new private Google Sheet in the school's Drive. Share **only that
   Sheet** with the service account's `client_email`, as Editor. Keep general
   access Restricted. Teachers can be shared into it normally; students do not
   need access to the Sheet.
5. If required by school policy, the Workspace admin allows this OAuth client
   for the students' organisational unit. Sign-in requests only basic Google
   identity; students do not grant access to Drive or Sheets.

Reference: [Google sign-in setup](https://developers.google.com/identity/gsi/web/guides/get-google-api-clientid),
[school student app access](https://support.google.com/edu/classroom/answer/15163043),
[Sheets API](https://developers.google.com/workspace/sheets/api/guides/values).

## Netlify configuration

Set these in the existing site's production environment, **Functions** scope.
Do not commit credentials or paste the service-account key into chat.

| Variable | Value |
| --- | --- |
| `QUIZ_GOOGLE_CLIENT_ID` | The Web OAuth client ID ending in `.apps.googleusercontent.com` |
| `QUIZ_GOOGLE_SHEET_ID` | The ID between `/d/` and `/edit` in the private Sheet URL |
| `QUIZ_GOOGLE_SERVICE_ACCOUNT` | The complete JSON key, stored as a secret environment variable |
| `QUIZ_TRACKING_ENABLED` | `true` after the preceding configuration is ready |

Redeploy after changing the environment. Leave tracking disabled on preview
deployments unless they have their own authorised origin and separate test Sheet.

## What teachers receive

The first successful result submission creates three dedicated tabs, without
altering other tabs in the Sheet:

- **Learning Deck Attempts**: each completed round, verified student identity,
  raw correct/total, accuracy, points, server submission time in UTC and Singapore,
  started time and elapsed seconds. Elapsed time includes idle time.
- **Learning Deck Overview**: one row per student/round showing the number of
  attempts, first submitted score, best score and last submission time.
- **Learning Deck Skills**: first/best averages across completed rounds, grouped
  into story knowledge, evidence, quotation punctuation and paragraphs. These
  averages do not count unattempted rounds as zero. There are four story rounds,
  two evidence rounds, two quotation rounds and one paragraph round.

Only students who submit appear; an empty row is not automatically created for
every student in a roster. Old browser-only attempts cannot be reconstructed.
Scores are calculated by the existing browser quiz; this is classroom progress
tracking, not a tamper-proof examination system.

The function verifies Google's token signature, intended client ID, expiry,
verified email and exact Workspace hosted domain `ifs.edu.sg`. Students cannot
read results through the function. Pending submissions stay associated with the
same Google account, and each retry writes the same reserved row to avoid double
counting. A separate private Netlify Blobs store keeps the retry record.

Do not delete/reorder rows in the Attempts tab or reset the private Blobs row
counter independently of the Sheet. Use Overview for sorting and filtering.
Use a new Sheet and update its ID if starting a fresh markbook.

## Acceptance check after connection

1. Before the scheduled release, the lesson and score submission remain locked.
2. When available, sign in with an `@ifs.edu.sg` school test account and complete
   a round. Confirm it appears in Attempts and the two reports.
3. Replay the same round with a lower score: attempts increases while first and
   best scores remain distinct.
4. Temporarily disconnect during submission, reconnect, and click Retry
   connection. Confirm exactly one row for that attempt.
5. Switch to another school account on the same device: progress is separate.
6. A personal Gmail account is rejected.

The unauthenticated configuration endpoint reveals only whether tracking is
enabled, the public OAuth client ID and permitted school domain:
`/.netlify/functions/quiz-results?action=config`.

Local checks: `npm run test:quiz` and `npm run check:lessons`.
