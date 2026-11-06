# rankings-cards — real-content TODO (WWWCMS-233)

This component ships placeholder content for 11 cards. Before merging to
`dev`, confirm each row against Jira WWWCMS-233 or the design team:

- [ ] Card 1 ("Repeatedly ranked #1") — confirm visible text, alt text,
      and the secondary "See all of ASU's #1 rankings" href.
- [ ] Card 2 (innovation) — confirm attributionHref + attributionLabel +
      full ranking statement for imageAlt.
- [ ] Card 3 (employability) — same.
- [ ] Card 4 (Fulbright students) — same.
- [ ] Cards 5–11 — pull topic, ranking statement, source label, source
      URL from Jira ticket WWWCMS-233 (11 rows total).

## Artwork pairs

All 22 PNGs in `src/img/rankings/` use the `rank-NN-w.png` / `rank-NN.png`
naming convention:

- `rank-NN-w.png` — default state (white-background, visible on dark hero
  through glass card).
- `rank-NN.png` — hover state (dark-background, visible on solid-white
  hover card).

`rank-NN-w-s22.png` variants are **reserved — do not use without architect
sign-off** (v4 §v4.4.2a).

## Pre-merge gate

The branch **MUST NOT** merge to `dev` with placeholder content in cards 5–11.
A human confirms the 11 ranking statements before PR approval (v4 §v4.4.2a).

## Consumer contract

`background: transparent` — WCAG contrast is only met when the parent surface
is dark enough. Wrap in a dark surface (e.g. the homepage hero band) before
using in production. Any consumer that places `rankings-cards` on a light
surface must either wrap it in a dark backdrop or request a light-surface
variant in a follow-up ticket.

## Sticky overflow consumer note

The `.hp-rankings__sticky-wrapper` uses `position: sticky` on the inner
`.hp-rankings` section (at ≥901 px). If a consumer ancestor has
`overflow: hidden` or `overflow: clip`, sticky positioning degrades to
`static`. This is a known CSS limitation; consumers must ensure no ancestor
clips the sticky context.
