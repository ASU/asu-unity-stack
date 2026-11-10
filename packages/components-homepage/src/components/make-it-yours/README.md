# make-it-yours (WWWCMS-237)

The homepage "Make it yours" section: a heading, an intro, and five photo tabs (degree, format, community, experience, cost). Only one tab is open at a time (WAI-ARIA Accordion). Up to 768px the layout is stacked (white head, inset photo, dark band with the tab list). From 769px the photo fills an 865px stage and the tab column sits on the right.

## Files

| File | What it is |
|---|---|
| `make-it-yours-markup.js` | Content data (`MAKE_IT_YOURS`) and `makeItYoursHtml({ id, data })`. Plain JS, no DOM, runs in Node. This is the markup contract. |
| `make-it-yours.js` | `initMakeItYours(root)`: the behaviour. |
| `_make-it-yours.scss` | Styles. |
| `make-it-yours.stories.jsx` | Storybook stories and interaction tests. |

## Use

```js
import { makeItYoursHtml } from "./make-it-yours-markup.js";
import { initMakeItYours } from "./make-it-yours.js";

container.innerHTML = makeItYoursHtml(); // or server-rendered
const teardown = initMakeItYours(container); // wires every unwired .hp-myours inside
// teardown() puts the static markup back
```

`makeItYoursHtml` needs exactly five tabs and throws otherwise. Several copies can share a page: pass a different `id` prefix (default `hp-myours`). `initMakeItYours` is safe to call more than once; sections already wired are skipped.

Without the script every panel is open and only the first photo shows. That is the baseline and it must stay readable.

## Class and attribute contract

JS adds these. None of them are in the static markup.

| Element | Hook | Meaning |
|---|---|---|
| `.hp-myours` | `is-enhanced` | script ran; CSS switches from all-open to accordion |
| `.hp-myours` | `is-booting` | first render, transitions off (removed after 2 frames) |
| `.hp-myours__item` | `is-open` | this tab is open |
| `.hp-myours__photo` | `is-active` | this photo is shown (tab 1 in static markup) |
| `.hp-myours__trigger` | `aria-expanded`, `aria-disabled="true"` | state; the open trigger is disabled (click, Enter, Space do nothing) |
| `.hp-myours__panel` | `inert` | on closed panels |
| `.hp-myours__img` | `alt`, `data-alt-desktop`, `data-alt-mobile`, `loading` | per-crop alt; `lazy` becomes `eager` when a trigger is hovered or focused |
| `.hp-myours__tabs` | `--hp-myours-tabs-min` | stacked only: reserves the tallest open tab list so nothing jumps |
| `.hp-myours` | `--hp-myours-caption-min` | stacked only: reserves the tallest caption so the whole section keeps one height for every tab; removed on desktop and on teardown |
| `.hp-myours__photo` | `--hp-myours-focus` | static, from the content file; desktop `object-position` |

Keyboard: Tab visits every trigger and the open CTA. Arrow Up/Down, Home and End move focus between triggers and never open one. Enter or Space opens.

## Images

25 files in `src/img/make-it-yours/`: per tab, one original width, 1280, 1920, 2560 and one 900x650 mobile crop.

Regenerate them from the approved photos in `.intake/`:

```sh
brew install webp   # once: provides cwebp
yarn workspace @asu/components-homepage images:make-it-yours
```

The slug is the source file name (`design-your-degree.webp`, `design-your-degree-mobile.webp`, and so on). The script does no renaming or swapping, so if a photo changes, replace the file in `.intake/` under the same name and re-run it. `yarn build` copies `src/img` to `dist/img`.

## Focal point

`desktop.focus` in the content file is a CSS `object-position` (`"50% 7%"`). It chooses which part of the wide photo stays in frame when the stage crops it to 865px. Pick the point on the subject's face or the main subject. Do not use it to fix text contrast; the scrim does that.

## Scrim

One shared scrim darkens the right part of every desktop photo so white text keeps 4.5:1. It uses the same strength on all five photos: `$asu-gray-1` at alpha 0.58 (`$hp-myours-scrim-alpha` in the SCSS). The cap is 0.60 (approved amendment A1.1). At 0.55 only 17 of 20 cases passed, and the alpha was raised in 0.01 steps to the lowest value that gives 20 of 20. There is deliberately no per-photo strength and no data field for it.

To re-check after changing a photo, a focal point or the alpha:

```sh
MYOURS_CONTRAST_LOG=1 yarn workspace @asu/components-homepage test:accessibility tests/make-it-yours-contrast.spec.mjs
```

It measures white text over each photo at 1280, 1920, 2500 and 3934 px for every tab (20 cases) and prints each ratio. If 0.60 does not give 20 of 20, stop and ask; do not add per-photo tweaks.

## Notes for Stage B (Drupal)

- Closed panels are `inert`. Do not remove it; it takes closed content out of the tab order and the accessibility tree.
- The `alt` on `<img>` is the mobile alt. `initMakeItYours` swaps in `data-alt-desktop` at 769px and up, and back at 768px and below. The caption has two spans, switched by CSS, so it needs no script.
- Reserve: on stacked layouts the script sets `--hp-myours-tabs-min` and `--hp-myours-caption-min`. Do not set them in the CMS.
- GA: each trigger and CTA carries `data-ga-*` attributes (`data-ga-component="homepage make it yours"`, `data-ga-section="make it yours"`). The event names and values are provisional until the data team confirms them (TODO in the markup module).
- Clicking the already open trigger is swallowed in the capture phase (`preventDefault` and `stopPropagation`), so a document-level GA listener never sees it. An open-header click is not an event.
- The script defers the state change by one task, so a document click reader still sees the old state during the click.

## Known limits

- R2: with JS off on a desktop screen, tabs 1, 3 and 5 show the mobile alt, which describes a different crop. A `<picture>` has one `alt`. Captions are not affected.
- D1: the desktop heading swash is calibrated for a one-word lead-in ("it") before the underlined word ("yours"). A longer phrase gives a swash that is too short on desktop.
- Without JS on desktop all five panels are open, so the section can be taller than 865px.
