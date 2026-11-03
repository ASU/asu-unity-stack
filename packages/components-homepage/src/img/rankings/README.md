# `src/img/rankings/` — Rankings-cards artwork

Jira: WWWCMS-233 · Figma node: `13467:58610`

> **PLACEHOLDER NOTICE** — All PNGs in this folder are placeholder artwork
> copied from `.intake/rank-01-w.png` (default/white) and `.intake/rank-01.png`
> (hover/dark navy). The same two 500 × 251 source files are reused across all
> 7 cards until the designer provides per-card brand artwork. Real brand
> artwork MUST replace them before merging to `dev`. See `TODO.md` for the full
> mapping.
>
> **Provenance**: `.intake/rank-01-w.png` and `.intake/rank-01.png` — version-
> controlled in the `.intake/` folder at repository root (design-doc v3 §9.2,
> amended v3.1 2026-11-03T21:10Z).

---

## File-naming convention (locked)

| State | Pattern | Example |
|---|---|---|
| Default | `<slug>.png` | `sustainable-practices.png` |
| Hover | `<slug>--hover.png` | `sustainable-practices--hover.png` |

- `<slug>` is **lowercase, hyphen-separated kebab-case** derived from the
  ranking topic (e.g. `sustainable-practices`, `innovation`, `global-impact`).
- The `--hover` suffix uses double-dash to match the BEM modifier pattern used
  elsewhere in this design system and to avoid collisions with slug separators.
  <!-- TODO: confirm with design — hover filename suffix convention (locked placeholder: double-dash BEM `--hover`). -->
- All default-and-hover PNGs ship with `loading="lazy"` + `decoding="async"`
  because the hero sits above the rankings band on the homepage, so the
  component is never above the fold.
  <!-- TODO: confirm with design — all-lazy loading decision (design-doc §11.2); revisit if the homepage places rankings above the fold on any viewport. -->

---

## Dimensions contract (locked v3 per Q1 = A + Q2 = C — design-doc v3 §3.1)

- **Intrinsic size**: **`500 × 251`** px (approximately 2:1 aspect ratio)
  — locked in design-doc v3 amendment (2026-11-03T19:25Z). The 1 px overshoot
  vs integer-perfect 2:1 (`500 × 250`) matches the Figma export; the CSS
  `aspect-ratio: 2 / 1` rule on `.hp-rankings__media` drives layout, and
  `object-fit: cover` resolves the 1 px overshoot.
  <!-- TODO: confirm with design — pull exact intrinsic dimensions from Figma
       Dev Mode on node 13467:58610 before replacing placeholder PNGs (§11.2). -->
- **CSS aspect-ratio**: `2 / 1` at every breakpoint (Q1 = A). Mobile media
  box renders at 288 × 144 by design (288 px card width × 2:1 ratio).
- Both PNGs in a pair (`<slug>.png` + `<slug>--hover.png`) MUST share
  **identical intrinsic `width` × `height`**.
- All cards MUST share the same aspect-ratio. Different ratios across cards
  would break the single `aspect-ratio: 2 / 1` CSS rule on
  `.hp-rankings__media`.
- The dataset-wide intrinsic dimensions are configurable via the top-level
  `rankingsCardsHtml({ imageWidth, imageHeight })` parameters (defaults:
  `500` / `251`). This is a dataset-wide override — NOT a per-card field
  (design-doc v3 §3.1, Q2 = C).

---

## Transparency

PNGs SHOULD use an alpha channel so the dark hero background bleeds through
on the default state. Opaque PNGs are allowed but will show their own
background colour and bypass the component's transparent-section contract.

---

## Consumer contract (WCAG contrast)

The `rankings-cards` component ships with `background: transparent` and white
text/borders. WCAG contrast is only met when the parent surface is dark enough.
Every Storybook story renders the section on a dark backdrop (`#002b5c`) to
satisfy this contract during interaction and a11y tests. **Any consumer that
places `rankings-cards` on a light surface must wrap it in a dark surface or
request a light-surface variant in a follow-up ticket.**

---

## Security note

`attributionHref` values come from the host page / CMS (trusted content). The
`rankingsCardsHtml` template returns a static string; no `dangerouslySetInnerHTML`
on user input at runtime. CMS-side consumers are responsible for HTML-escaping
inputs before pasting into the template.

No `target="_blank"` is specified. If added later, `rel="noopener"` is
required.
