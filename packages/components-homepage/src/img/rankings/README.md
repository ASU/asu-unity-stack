# img/rankings — design-system image assets (WWWCMS-233 v4)

> **PLACEHOLDER NOTICE** — All PNGs in this folder are placeholder artwork
> copied from `.intake/rank-01-w.png` (default/white) and `.intake/rank-01.png`
> (hover/dark navy). The same two 500 × 251 source files are reused across all
> 11 cards until the designer provides per-card brand artwork. Real brand
> artwork MUST replace them before merging to `dev`. See `TODO.md` for the
> per-slot mapping.
>
> **Provenance**: `.intake/rank-01-w.png` and `.intake/rank-01.png` —
> version-controlled in the `.intake/` folder at repository root
> (design-doc v4 §v4.4.2a, v4 §v4.10).

---

## File-naming convention (locked v4)

The `rank-NN` schema replaces the previous v3 slug-based convention.

| State | Pattern | Example |
|-------|---------|---------|
| Default (white, visible against dark hero) | `rank-NN-w.png` | `rank-01-w.png` |
| Hover (dark, visible against solid-white hover card) | `rank-NN.png`   | `rank-01.png` |

- `NN` is a **zero-padded two-digit slot number**: `01`, `02`, … `11`.
- The `-w` suffix on default images denotes the white/light variant for the
  translucent-glass default state.
- No `--hover` double-dash suffix in this schema (that was the v3 slug convention).
- No `-s22` or other size-tagged variants are used by default. The `-s22`
  convention is **reserved** — do not add without architect sign-off.

> **v3 slug assets deleted.** The previous seven slug-based files
> (`sustainable-practices.png`, `innovation.png`, `global-impact.png`, etc.)
> and their `--hover` counterparts have been removed. They no longer exist in
> this directory and MUST NOT be re-added.

---

## 11-card inventory

| Slot | Default PNG | Hover PNG | Notes |
|------|-------------|-----------|-------|
| 01 | `rank-01-w.png` | `rank-01.png` | Summary card (isSummary: true) |
| 02 | `rank-02-w.png` | `rank-02.png` | Innovation |
| 03 | `rank-03-w.png` | `rank-03.png` | Employability |
| 04 | `rank-04-w.png` | `rank-04.png` | Fulbright students |
| 05 | `rank-05-w.png` | `rank-05.png` | TBD — pull from Jira WWWCMS-233 |
| 06 | `rank-06-w.png` | `rank-06.png` | TBD — pull from Jira WWWCMS-233 |
| 07 | `rank-07-w.png` | `rank-07.png` | TBD — pull from Jira WWWCMS-233 |
| 08 | `rank-08-w.png` | `rank-08.png` | TBD — pull from Jira WWWCMS-233 |
| 09 | `rank-09-w.png` | `rank-09.png` | TBD — pull from Jira WWWCMS-233 |
| 10 | `rank-10-w.png` | `rank-10.png` | TBD — pull from Jira WWWCMS-233 |
| 11 | `rank-11-w.png` | `rank-11.png` | TBD — pull from Jira WWWCMS-233 |

All 22 PNGs must be present before merging to `dev`. Cards 5–11 currently hold
placeholder artwork (byte-identical copies of `.intake/rank-01-w.png` and
`.intake/rank-01.png`).

---

## Dimensions contract (locked v4 per design-doc §v4.4.2a)

- **Intrinsic size**: `500 × 251` px for every PNG in both states.
- **Aspect ratio**: the CSS forces `2 / 1` at every breakpoint; `object-fit: cover`
  resolves the 1 px overshoot vs integer-perfect 2:1.
- Both PNGs in each pair (`rank-NN-w.png` + `rank-NN.png`) MUST share identical
  intrinsic `width × height`.
- All 11 pairs MUST share the same intrinsic dimensions (dataset-wide).
- The `rankingsCardsHtml({ imageWidth, imageHeight })` top-level parameters
  default to `500` / `251`. Pass different values if the designer provides
  artwork at a different intrinsic size (SCSS does not change).

---

## Color / transparency guidance

| State | Artwork variant | Background requirement |
|-------|----------------|------------------------|
| Default | `-w` (white content, glass-over-dark) | Transparent or alpha-channel PNG — dark hero bleeds through the glass card |
| Hover | (dark content, over solid-white card) | Opaque or alpha-channel OK — hover card background is solid white |

---

## Placeholder color mapping (v4)

Current placeholders are direct copies of the `.intake/` source files:

| State | Source file | Description |
|-------|-------------|-------------|
| Default | `.intake/rank-01-w.png` | White background (500 × 251) |
| Hover | `.intake/rank-01.png` | Dark navy background (500 × 251) |

---

## Consumer contract (WCAG contrast)

`rankings-cards` ships with `background: transparent` and white text/borders.
WCAG contrast is only met when the parent surface is dark enough. Every
Storybook story renders the section on a dark backdrop (`#002b5c`) to satisfy
this contract during interaction and a11y tests.

---

## Security note

`attributionHref` values come from the host page / CMS (trusted content). The
`rankingsCardsHtml` template returns a static string; no `dangerouslySetInnerHTML`
on user input at runtime. CMS-side consumers are responsible for HTML-escaping
inputs before pasting into the template.

---

Jira: WWWCMS-233 · Design-doc: `.pipeline/design-doc.md` v4
