# rankings — artwork replacement TODO (WWWCMS-233 v4)

**Designer action required before this branch merges to `dev`.**

All PNGs in this folder are placeholder images copied from `.intake/rank-01-w.png`
(default/white, 500 × 251) and `.intake/rank-01.png` (hover/dark navy, 500 × 251).

Replace each placeholder pair with the final brand artwork per the schema below.

---

## 11-card `rank-NN` schema (v4 §v4.4.2a)

The dataset now uses **11 cards** named `rank-NN-w.png` (default/white) and
`rank-NN.png` (hover/dark navy), where `NN` is a zero-padded two-digit slot
number (`01`–`11`).

| Slot | Default PNG | Hover PNG | Ranking statement | Status |
|------|-------------|-----------|-------------------|--------|
| 01 | `rank-01-w.png` | `rank-01.png` | "Repeatedly ranked #1. 30+ lists in the last 3 years." | Card 1 (summary) — **confirm exact copy + seeAllTopHref with design team** |
| 02 | `rank-02-w.png` | `rank-02.png` | "#1 in the U.S. for innovation. ASU ahead of MIT and Stanford." | **Confirm attributionHref + publication label** |
| 03 | `rank-03-w.png` | `rank-03.png` | "#2 in the U.S. for employability (among public universities). ASU ahead of UCLA, University of Michigan and Purdue." | **Confirm attributionHref + publication label** |
| 04 | `rank-04-w.png` | `rank-04.png` | "A top producer in the U.S. of Fulbright students, among doctoral-granting institutions. ASU ahead of Stanford, USC and Johns Hopkins." | **Confirm attributionHref + publication label** |
| 05 | `rank-05-w.png` | `rank-05.png` | TBD-Jira-WWWCMS-233 | **Pull from Jira WWWCMS-233** |
| 06 | `rank-06-w.png` | `rank-06.png` | TBD-Jira-WWWCMS-233 | **Pull from Jira WWWCMS-233** |
| 07 | `rank-07-w.png` | `rank-07.png` | TBD-Jira-WWWCMS-233 | **Pull from Jira WWWCMS-233** |
| 08 | `rank-08-w.png` | `rank-08.png` | TBD-Jira-WWWCMS-233 | **Pull from Jira WWWCMS-233** |
| 09 | `rank-09-w.png` | `rank-09.png` | TBD-Jira-WWWCMS-233 | **Pull from Jira WWWCMS-233** |
| 10 | `rank-10-w.png` | `rank-10.png` | TBD-Jira-WWWCMS-233 | **Pull from Jira WWWCMS-233** |
| 11 | `rank-11-w.png` | `rank-11.png` | TBD-Jira-WWWCMS-233 | **Pull from Jira WWWCMS-233** |

Cards 5–11 require content from Jira WWWCMS-233 before merging to `dev`.
See also `src/components/rankings-cards/README.md` for the full pre-merge checklist.

---

## Dimensions contract (locked v4 per v4 §v4.4.2a)

- **Intrinsic size**: `500 × 251` px for all 22 PNGs.
- **Aspect ratio**: `2 / 1` at every breakpoint (CSS-enforced).
- Both PNGs in each pair (`rank-NN-w.png` + `rank-NN.png`) MUST share identical
  intrinsic `width × height`.
- All 11 pairs MUST share the same intrinsic dimensions (dataset-wide).

> **No `-s22` or slug-based filenames.** The v3 seven-card slug assets
> (`sustainable-practices.png`, `innovation.png`, etc.) have been deleted and
> are fully replaced by the `rank-NN-w.png` / `rank-NN.png` schema.
> The `-s22` size-tagged variant convention is **reserved** — do not use without
> architect sign-off (see `README.md`).

---

## Figma source

Figma node `13467:58610` — Homepage redesign frame.

`https://www.figma.com/design/F4lomCUW2bWkekYZ0j7O03/260526-Homepage-redesign?node-id=13467-59336&focus-id=13467-58610&view=focus&m=dev`

Jira: WWWCMS-233
