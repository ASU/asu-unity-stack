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

## Field limits (Stage B)

The desktop stage is a fixed 865px and clips overflow, and the heading is one 88px line, so editor text has hard limits (amendment A2.1). They are `MAKE_IT_YOURS_LIMITS` in `make-it-yours-markup.js`; the helper does not enforce them, Stage B validates the fields.

| Field | Max characters |
|---|---|
| Section heading | 13 ("Make it yours" is 13) |
| Intro | 280 |
| Tab title | 40 |
| Tab description | 250 |
| CTA label | 40 |

Measured in Chromium against this build, with every field at the limit at the same time (filler made from the real copy), at 769, 1280 and 3934 px (the content column is 548px at all three): the open tab ends 26px above the stage bottom (24px required), every title and CTA stays on one line, nothing is clipped. Longer text can overflow the stage and hide the last CTA. The `MaxLengthContent` story re-checks this at 769, 1280, 1920 and 3934. The stacked layout grows with its content and needs no extra limit.

## Images

25 files in `src/img/make-it-yours/`: per tab, one original width, three desktop tiers (`-1280`, `-1920`, `-2560`) and one 900x650 mobile crop.

No desktop file is shorter than the 865px stage, because the photo covers the stage and a shorter file would be upscaled (soft). Each tier is the tier width or the narrowest width that is 865px tall, whichever is larger. For the current photos that makes the `-1280` tier 1330 wide for tabs 1 and 2 and 1873 wide for tab 4 (a very wide photo); every other tier is its nominal width. The `width` in `desktop.sources` (the `w` descriptor) is the file's real width, so if a photo changes, update it from the script's output. Stage B image styles need the same rule (scale to the tier width, but never below 865px tall).

Regenerate them from the approved photos:

```sh
brew install webp   # once: provides cwebp and webpinfo
yarn workspace @asu/components-homepage images:make-it-yours
```

The sources are not in git. `.intake/` at the repo root is git-ignored and local (user-supplied intake assets): the approved originals (`<slug>.webp`) and mobile crops (`<slug>-mobile.webp`) supplied for WWWCMS-237 are placed there by hand. The committed `<slug>.webp` and `<slug>-mobile.webp` in `src/img/make-it-yours/` are byte-for-byte copies of them, so they are the source of record on a fresh clone: copy them to a folder outside `src/img` and pass it (`bash scripts/make-it-yours-images.sh /path/to/folder`). Do not point the script at `src/img/make-it-yours` itself; it would copy files over themselves.

The slug is the source file name (`design-your-degree.webp`, `design-your-degree-mobile.webp`, and so on). The script does no renaming or swapping, so if a photo changes, replace the file under the same name and re-run it. `yarn build` copies `src/img` to `dist/img`.

## Focal point

`desktop.focus` in the content file is a CSS `object-position` (`"50% 7%"`). It chooses which part of the wide photo stays in frame when the stage crops it to 865px. Pick the point on the subject's face or the main subject. Do not use it to fix text contrast; the scrim does that.

## Scrim

One shared scrim darkens the right part of every desktop photo so white text keeps 4.5:1. It fades in over 96px to the left of the content column and then runs at full strength to the right edge of the browser (amendment A3). It uses the same strength on all five photos: `$asu-gray-1` at alpha 0.58 (`$hp-myours-scrim-alpha` in the SCSS). The cap is 0.60 (approved amendment A1.1). At 0.55 only 17 of 20 cases passed, and the alpha was raised in 0.01 steps to the lowest value that gives 20 of 20 (then 4 widths). With 769 and 1024 added (review F4) it gives 30 of 30 unchanged. There is deliberately no per-photo strength and no data field for it.

To re-check after changing a photo, a focal point or the alpha:

```sh
MYOURS_CONTRAST_LOG=1 yarn workspace @asu/components-homepage test:accessibility tests/make-it-yours-contrast.spec.mjs
```

It measures white text over each photo at 769, 1024, 1280, 1920, 2500 and 3934 px for every tab (30 cases) and prints each ratio. Below 1280 the crop and the scrim position change, so 769 and 1024 are covered too. If 0.60 does not give 30 of 30, stop and ask; do not add per-photo tweaks.

## Notes for Stage B (Drupal)

- Closed panels are `inert`. Do not remove it; it takes closed content out of the tab order and the accessibility tree.
- The `alt` on `<img>` is the mobile alt. `initMakeItYours` swaps in `data-alt-desktop` at 769px and up, and back at 768px and below. The caption has two spans, switched by CSS, so it needs no script.
- Reserve: on stacked layouts the script sets `--hp-myours-tabs-min` and `--hp-myours-caption-min`. Do not set them in the CMS.
- Links: the markup helper only outputs http(s), root-relative (`/x`, not `//` or `/\`) and `#fragment` URLs, and drops any URL containing an ASCII control character (tab, LF, CR, NUL, DEL), because browsers strip those and `/<tab>/host` becomes a protocol-relative link. Stage B must validate the Drupal link field the same way (reject, do not strip).
- GA: each trigger and CTA carries `data-ga-*` attributes (`data-ga-component="homepage make it yours"`, `data-ga-section="make it yours"`). The event names and values are provisional until the data team confirms them (TODO in the markup module).
- Clicking the already open trigger is swallowed in the capture phase (`preventDefault` and `stopPropagation`), so a document-level GA listener never sees it. An open-header click is not an event.
- The script defers the state change by one task, so a document click reader still sees the old state during the click.
- Teardown: `initMakeItYours` returns a function that removes its window listeners (click, resize fallback), the resize observer and any pending frame. Keep the returned function per section (for example in a `WeakMap` keyed by the element) and call it in `Drupal.behaviors.<name>.detach` when the section is removed (AJAX, Layout Builder previews). Otherwise the window listener keeps the detached section in memory.

## Known limits

- R2: with JS off on a desktop screen, tabs 1, 3 and 5 show the mobile alt, which describes a different crop. A `<picture>` has one `alt`. Captions are not affected.
- D1: the desktop heading swash is calibrated for a one-word lead-in ("it") before the underlined word ("yours"). A longer phrase gives a swash that is too short on desktop.
- Without JS on desktop all five panels are open, so the section can be taller than 865px.
- LTR only: the layout uses physical directions (`left`, `right`, `padding-left`, `text-align: left`). A right-to-left page would need logical properties.
