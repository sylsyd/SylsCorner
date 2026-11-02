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

Chapters 1 to 7 also have an optional **Read chapter** view below the audio.
It has page controls and adjustable text size, and is closed by default. The
fullscreen button expands the reading area, with two columns on wide screens.
Text can be reduced to 14px, and audio continues during fullscreen reading. The
source EPUB is not uploaded. Only the requested chapters are converted to text
data under `lessons/5si/unit-2/reading/`. These files are public, just like the
audio; the reading toggle is not access control.

To reimport these seven chapters from the supplied edition, run:

```powershell
./scripts/import-amc-chapters.ps1 -Epub 'path/to/A Monster Calls.epub'
npm run test:reader
```

The importer verifies the EPUB reading order and chapter headings and preserves
paragraphs, emphasis, and section breaks without importing scripts or styles.

## Holes Week 1 audio and reading

Week 1 reading slides in lessons 1, 2, 3 and 5 have chapter 1 to 7 audio and
optional text readers. Lessons 4 and 6 and all later weeks are unchanged.
Chapter 7 uses the same full recording at each reading section; playback
position is remembered within the browser tab, including between lessons.
Readers use the same paging, font controls and fullscreen layout as A Monster
Calls, with separate chapter data and font preferences for each book.

Only chapters 1 to 7 are published under `lessons/6si/unit-2/audiobook/` and
`reading/`. The original EPUB and the later audiobook chapters are not uploaded.
The text files are public, like the audio; the reading toggle is not protection.

```powershell
./scripts/import-holes-chapters.ps1 -Epub 'path/to/Holes.epub'
```

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
