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
