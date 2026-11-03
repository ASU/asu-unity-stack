# `img/rankings/` — Placeholder-to-artwork mapping (WWWCMS-233)

**Designer action required before merge to `dev`.**

All PNGs in this folder are placeholder images copied from `.intake/rank-01.png`
(default/dark, 500 × 251) and `.intake/rank-06-w.png` (hover/white, 500 × 251).
The same two files are reused across all 7 cards. Replace each placeholder pair
with the final brand artwork from the Figma frame before this branch merges.

Figma source: `https://www.figma.com/design/F4lomCUW2bWkekYZ0j7O03/260526-Homepage-redesign?node-id=13467-59336&focus-id=13467-58610&view=focus&m=dev`

---

## Placeholder inventory

Each row maps a placeholder slug to the real Figma artwork it should become.
Both files in a pair **must share identical intrinsic dimensions**.

| Default PNG | Hover PNG | Ranking topic | Figma frame / node |
|---|---|---|---|
| `sustainable-practices.png` | `sustainable-practices--hover.png` | #1 sustainable practices | node `13467:58610` — card 1 |
| `innovation.png` | `innovation--hover.png` | Innovation | node TBD — card 2 |
| `global-impact.png` | `global-impact--hover.png` | Global impact | node TBD — card 3 |
| `entrepreneurship.png` | `entrepreneurship--hover.png` | Entrepreneurship | node TBD — card 4 |
| `research-output.png` | `research-output--hover.png` | Research output | node TBD — card 5 |
| `online-education.png` | `online-education--hover.png` | Online education | node TBD — card 6 |
| `community-engagement.png` | `community-engagement--hover.png` | Community engagement | node TBD — card 7 |

---

## Design checklist before replacing

- [ ] Confirm intrinsic dimensions with Figma Dev Mode (locked v3 at
      `500 × 251`, aspect ratio `2 / 1`). <!-- TODO: confirm with design -->
- [ ] Confirm `--hover` double-dash suffix matches asset-naming expectations.
      <!-- TODO: confirm with design — hover filename suffix convention. -->
- [ ] Confirm all 7 hover PNGs are colour variants of the same artwork
      (not a different composition).
- [ ] Confirm PNGs use alpha channel for dark-hero bleed-through.
- [ ] Confirm the `PLACEHOLDER` watermark is absent from the final artwork.
      The current v3 placeholders are copies of `.intake/rank-01.png` and
      `.intake/rank-06-w.png` — no text watermark overlaid on these files.
- [ ] Update `imageAlt` text in `DEFAULT_CARDS` (in `rankings-cards-helpers.jsx`)
      to match the real ranking statement for each card.
- [ ] Confirm `attributionHref` and `attributionLabel` values for each card
      in `DEFAULT_CARDS`.
- [ ] **[Figma §11.2] Confirm 288 × 144 mobile rendering** — open the Figma
      mobile frame and verify that the ranked card's media box renders correctly
      at 288 × 144 px with no unintended cropping of the ranking numeral or key
      artwork. If the mobile size differs from the locked contract, update
      `_rankings-cards.scss` and the design-doc v3 §4.5 / §7.4. See
      design-doc v3 §11.2. <!-- TODO: confirm with design -->
- [ ] **[Figma §11.2] Confirm `object-position: center 30%` framing** — open
      the Figma mobile and desktop frames and verify that the upper-third crop
      (`object-position: center 30%`) matches the designer's intended framing of
      the ranking numeral and artwork. If the correct value differs, update
      `_rankings-cards.scss` line `object-position` and the design-doc §4.5 /
      §11.2 Figma TODO. See design-doc v3 §11.2. <!-- TODO: confirm with design -->

---

## Placeholder color mapping (v3)

The v3 placeholder PNGs are direct copies of the `.intake/` source files:

| State | Source file | Description |
|---|---|---|
| Default | `.intake/rank-01.png` | Dark background (500 × 251) |
| Hover | `.intake/rank-06-w.png` | White/light background (500 × 251) |

Both files are byte-for-byte identical across all 7 cards (dataset-wide
uniform intrinsics per design-doc v3 §3.1 Q2 = C). The previous cycle-1
solid-color + watermark PNGs are fully replaced by these copies.

---

## v3 amendment note

Design-doc v3 (2026-11-03T19:25Z) locked the following for this directory:
- Aspect ratio: **2 / 1** (supersedes v2)
- Intrinsic dimensions: **500 × 251** (supersedes v2)
- Placeholder source: `.intake/rank-01.png` + `.intake/rank-06-w.png`
  (supersedes v2 which used pure-Node `pngjs`-generated solid-color files)
- No `-s22` variants permitted at any point.
