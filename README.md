# The Learning Deck

The website lives in this `SylCorner` folder. Original teaching files live outside
it, under `20262027/5SI`, `20262027/6SI`, and `20262027/6LVA`.

## Finding class materials

All published units are in `lessons/<class>/unit-<number>/`:

```text
lessons/
  5si/
    unit-1/                     Short Stories
    unit-2/                     A Monster Calls
  6si/
    unit-1/                     In Search of Adventure
    unit-2/                     Holes
  6lva/
    unit-1/                     Unit 1 classroom activities
    unit-2/                     Irish Legends
```

Each unit contains its entry page (`index.html`) and its week folders. In Unit 2,
`index.html` is the introduction video page. The video file is `intro.mp4`, and
separate pictures are in `assets/`. The unit planner is
`scope-and-sequence.html`; Irish Legends also has its illustrated hub in
`unit.html`.

```text
lessons/6si/unit-2/
  index.html                   Introduction video page
  intro.mp4
  scope-and-sequence.html       Unit planner
  assets/                      Unit illustrations
  week-1/
    index.html                 Week 1 lesson list
    lesson-1/
      index.html               Lesson activity
    lesson-2/
      index.html
```

In Unit 1, a lesson folder's `index.html` lists its activity and worksheets. The
original resource filenames are preserved alongside it. Some later weeks contain
materials for the whole week; their `materials/index.html` is the resource menu.
Week-wide files stay directly inside that week folder.

## Adding materials

1. Put student materials in the matching class, unit, week, and lesson folder.
   Use lowercase folder names such as `week-2` and `lesson-3`.
2. Update that lesson or week's menu. Unit 1 shared resource menus use the catalog
   in `js/new-lessons.js`; Unit 2 activities are linked from their week page and
   unit planner.
3. Keep teacher answer keys, private rosters, and marking guides out of public
   uploads.
4. Run `npm run check:lessons` before committing and pushing.

## A Monster Calls audiobook

Original recordings are supplied in `20262027/5SI/Unit 2/Audiobook` outside this
website. Published, compressed audio lives in
`lessons/5si/unit-2/audiobook/chapter-N.mp3`. Chapters 1 and 2 are playable on
their reading slides in `week-1/lesson-1/index.html`; chapters 3 to 5 are in
`week-1/lesson-3/index.html`; chapters 6 and 7 are in `week-1/lesson-4/index.html`.

When adding later recordings, convert them to web-sized MP3 files and add a
player to the matching chapter-reading slide, not the overview or questions.
Keep the source WAV files outside the repository. New source files do not
publish automatically; check this folder during future material updates.

Chapters 1 to 7 have an optional **Read chapter** view below the audio.
Week 2 lessons 2 and 3 have text-only readers for chapters 8 to 11.
It has page controls and adjustable text size, and is closed by default. The
fullscreen button expands the reading area, with two columns on wide screens.
Text can be reduced to 14px, and audio continues during fullscreen reading. The
source EPUB is not uploaded. Only the requested chapters are converted to text
data under `lessons/5si/unit-2/reading/`. These files are public, just like the
audio; the reading toggle is not access control.

To reimport the published chapters from the supplied edition, run:

```powershell
./scripts/import-amc-chapters.ps1 -Epub 'path/to/A Monster Calls.epub' -LastChapter 11
npm run test:reader
```

The importer verifies the EPUB reading order and chapter headings and preserves
paragraphs, emphasis, and section breaks without importing scripts or styles.

## Holes audio and reading

Week 1 reading slides in lessons 1, 2, 3, 5 and 7 have chapters 1 to 10.
Week 2 reading slides in lessons 8, 9, 11 and 13 have chapters 11 to 20.
Each reading slide offers the audiobook and an optional text reader.
Chapter 7 uses the same full recording at each reading section; playback
position is remembered within the browser tab, including between lessons.
Published Holes audio is loudness-normalized to -16 LUFS with a -2 dBTP
processing ceiling for classroom playback. The original source recordings
remain unchanged outside the website. Keep these levels consistent when
adding later chapters; browser volume alone cannot amplify a quiet recording.
Readers use the same paging, font controls and fullscreen layout as A Monster
Calls, with separate chapter data and font preferences for each book.

Chapters 1 to 18 are tracked in the repository. Chapters 19 and 20 are served
from private Netlify storage after the Lesson 13 release. The original EPUB
and later audiobook chapters stay in the source folders.

```powershell
./scripts/import-holes-chapters.ps1 -Epub 'path/to/Holes.epub' -LastChapter 18
# Import only missing recordings; the script does not overwrite existing MP3s.
node scripts/normalize-holes-audio.mjs 'path/to/audiobook folder' 8 18
```

## Scheduled lessons

Set dates in `js/lesson-releases.js`. Each entry lists the date, class, unit,
week, lesson numbers, and any new reading chapters. Dates begin at midnight
Singapore time. Netlify checks server time on every scheduled lesson or chapter
request, and week pages show the release date on each upcoming card.

Keep new embargoed HTML and assets out of this public repository. Upload the
student-facing files to the site's `lesson-releases` Netlify Blobs store, with
the site-relative file path (without a leading slash) as the key. For example:

```powershell
npx netlify-cli blobs:set lesson-releases lessons/5si/unit-2/week-2/lesson-4/index.html --input 'path/to/student-lesson.html'
```

List those paths in `privateLessonFiles`, add the release entry and lesson
card, then deploy. The same deploy will start serving each lesson at its
scheduled time. GitHub history and earlier public deploys can still contain
copies of lessons previously published there.

## Other folders

- `assets/`: shared site artwork and practice thumbnails.
- `css/` and `js/`: shared styles, navigation, and lesson-menu code.
- `games/` and `tools/`: classroom games and tools.
- `netlify/functions/`: leaderboard backend.
- `tests/` and `scripts/`: verification tools.

The root HTML files are shared site pages such as `index.html`, `classes.html`,
and `tools.html`. `lesson-resources.html` handles older resource-menu links.

## Existing links

`_redirects` preserves previous lesson paths, including `/holes/unit`,
`/amonstercalls/week-1`, `/irishlegends/unit`, and the old Unit 1 folder names.
They redirect to the corresponding page under `lessons/`. Keep these rules when
adding future material so existing bookmarks continue to work.
