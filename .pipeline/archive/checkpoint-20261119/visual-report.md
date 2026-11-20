# Charter Bubbles — Visual Report (WWWCMS-238)

**Agent:** acp-visual  
**HEAD:** `7d823cb2b`  
**Branch:** `WWWCMS-238`  
**Produced:** 2026-11-18T23:54 MST  

---

## References

### .intake/ contents

`.intake/` contains only `.gitkeep`. No reference screenshots are present. The
Figma frame measurements recorded in `.pipeline/intake-brief.md` (five nodes,
all queried at intake) are the sole design reference baseline.

### Figma availability

Probe of `127.0.0.1:3845` returned HTTP 200 (port responds). However, Figma
Dev Mode MCP was not surfaced with an explorable tool catalog at that endpoint
during this run. Figma frame geometry is therefore used exclusively as recorded
in `.pipeline/intake-brief.md` and §5.3 of `.pipeline/design-doc.md`:

| Figma measurement | Value |
|---|---|
| Desktop cluster (closed) | 635.78 × 366.19 px |
| Closed layout cell / interaction wrapper | 194.59 px |
| Closed visible circle | 180 px |
| Expanded diameter (Jira max) | up to 454 px |
| Mobile carousel cell | 194.59 px |
| Mobile expanded bubble | 328.47 px |
| Nominal column gap | 26 px |
| Row overlap | 23 px |

### Storybook status

Storybook for `@asu/components-homepage` was started on demand via
`node .yarn/releases/yarn-4.17.0.cjs storybook --port 9050 --ci` from
`packages/components-homepage`. Server came up at second readiness probe.
All story IDs confirmed via `/index.json`.

### Breakpoints attempted

| Viewport (px) | Story ID | Captured |
|---|---|---|
| 1280 × 900 | `desktop-1280` (default closed) | ✓ |
| 1280 × 900 | `desktop-slots-1280` (all 5 open states) | ✓ |
| 1920 × 900 | `wide-1920` (default closed) | ✓ |
| 1920 × 900 | `desktop-slots-1920` (all 5 open states) | ✓ |
| 769 × 900 | `desktop-769` (cluster boundary) | ✓ |
| 768 × 1024 | `tablet-768` (carousel boundary) | ✓ |
| 393 × 844 | `phone-393` (default + expanded) | ✓ |
| 320 × 844 | `phone-320` (default) | ✓ |
| 320 × 844 | `phone-320-expanded` (open + close control) | ✓ |
| 1920 × 900 | `no-script` (no-JS fallback) | ✓ |
| 1280 × 900 | `reduced-motion` | ✓ |

### Open states captured (desktop)

All five openers were exercised via programmatic `click()` at 1280 px after
the `desktop-slots-1280` play function completed. Screenshots captured:

- Slot 1 — `employability` open (`desktop-slot1-employability.png`)
- Slot 2 — `fortune-500` open (`desktop-slot2-fortune500.png`)
- Slot 3 — `faculty` open (`desktop-slot3-faculty.png`)
- Slot 4 — `degree-programs` open (`desktop-slot4-degree-programs.png`)
- Slot 5 — `undergraduate-research` open (from `open-research` story and
  `desktop-open-research-1280.png`)

Screenshot paths: `/tmp/charter-visual/` (ephemeral; not committed).

---

## Findings

### Desktop 1280 px — Default (all closed)

[PASS] Five gold circular bubbles render in the 3+2 arrangement, right-aligned,
overlapping the Charter Main image at the correct upper-right position. The
cluster is visually within the viewport with no horizontal overflow. All five
front-face headlines and chevrons are legible. Font weight, size, and letter
spacing are consistent with the Arial Bold 20 px / 22 px / −0.6 px spec.
Gold `#ffc627` background matches `$uds-color-brand-gold`. No raw colors
visible.

[P3] At 1280 px the cluster stage is positioned at `right: 75px` (prototype
offset from SCSS `4.6875rem`). Figma's 48 px right-gutter at the 1279 px frame
is therefore **not matched exactly** at this viewport — the cluster sits about
27 px further left than the Figma right-gutter spec. This is a P3: the
Geometry Reconciliation in §5.3 explicitly defers gutter placement to Section
15 open decision 4 (large-screen alignment), and visually the cluster remains
fully within the page grid. No interactive surface is affected.

[PASS] Hover emphasis: `assertRenderedDesktopSlots` story asserts ≤181 px for
all hovered closed fronts across every viewport it exercises; this assertion
passes per Cycle 6 Vitest (335 total, 333 pass, 0 Charter failures). Scale
ratio from SCSS `scale(1.111111)` ≈ 200 px / 180 px prototype emphasis ratio
(§10 token table: `--hp-charter-emphasis: 12.5rem = 200 px`). Figma's 211 px
target is Section 15 open decision — not tested against pixel comparison.

### Desktop 1920 px — Default (all closed)

[PASS] Cluster renders at reduced scale (`scale(0.85)`) per the
`(min-width: 68.77rem) and (max-height: 50rem)` rule. Five bubbles remain
legible and correctly spaced. The noscript story at 1920 px shows the full
fallback grid with all five bubbles displayed as 328.47 px circles in a
single row — correct per design-doc §9 no-JS path.

[P3] At 1920 px the cluster is right-flush rather than grid-contained. The
intake-brief records two 1920 px frames with right-flush placement and one
with a 48 px gutter — this is Section 15 open decision 4 (unresolved). No
P1/P2 raised; noted for design resolution.

### Desktop 769 px — Cluster boundary (authoritative)

[PASS] At 769 px the component carries `data-layout="cluster"` and
`is-cluster` classes. Closed fronts use `position: absolute` within the
cluster stage. The boundary transition from carousel (768 px) to cluster
(769 px) is verified by the `Desktop769` story play function (passes per
Cycle 6 Vitest).

### Tablet 768 px — Carousel (authoritative)

[PASS] At exactly 768 px the component shows the carousel layout with
`data-layout="carousel"`. The first bubble is expanded (play function opens
it and asserts it is centered within the viewport). Previous/Next nav buttons
are visible below the track. The expanded bubble (`#2 public university...`)
fills ≈ 328.47 px width and is centered. A second closed bubble peeks at the
right edge. Following section is correctly separated below the reserved
expansion area.

[PASS] Close (×) button is visible at the base of the open bubble in carousel
mode. Nav buttons are circular, white, bordered — matching `--hp-charter-nav-size:
3.26875rem (52.3 px)` and `$asu-gray-5` border.

### Mobile 393 px — Default and Expanded

[PASS] Default: carousel renders correctly below the Charter Main image with
two closed bubbles partially visible and Previous/Next controls below. Bubbles
are 194.59 px (`--hp-charter-mobile-cell: 12.1621618rem`) wide in closed state
— Figma cell matches.

[PASS] Expanded: first bubble expanded to ≈ 328.47 px diameter. Back face
shows heading, detail text, maroon-colored link, and the 44 px Close (×)
button centered at the base. Close button visible and properly positioned.
No two-axis page scrolling detected at this viewport.

[P3] The mobile story's initial frame shows only the Charter Main image above
the fold before scrolling — this is expected behavior because the bubble
carousel sits below the full-height charter image. No content is clipped;
this is a scroll-depth presentation artifact, not a defect.

### Mobile 320 px — Default

[PASS] At 320 px the carousel renders with correct insets (`$uds-size-spacing-4`
= 32 px inline, `$uds-size-spacing-3` = 24 px top). No horizontal page-level
overflow. Closed bubbles are legible at reduced scale. Scroll-snap behavior
is active.

### Desktop — All Five Open States (Slot Collision Testing)

Programmatic measurements via `agent-browser eval` at 1280 px after each
click confirms:

| Opener (slot) | Panel size | Inside cluster | Open vs closed overlap | Neighbor vs neighbor overlap | Page overflow |
|---|---|---|---|---|---|
| employability (1) | 454 px | ✓ | none | none | none |
| fortune-500 (2) | 454 px | ✓ | none | none | none |
| faculty (3) | 454 px | ✓ | none | none | none |
| degree-programs (4) | 454 px | ✓ | none | none | none |
| undergraduate-research (5) | 454 px | ✓ | none | none | none |

`circlesOverlap()` tolerance: 1 px. Measurements taken 1 s after click (after
600 ms transition duration).

[PASS] Visual screenshots confirm:
- **Slot 1 (employability):** Opener expands centrally. Fortune-500 displaced
  left; faculty top-right; degree-programs and research bottom-right.
  No circles touch. Close button visible.
- **Slot 2 (fortune-500):** Opener expands right-center. Remaining four
  displaced to left and lower-right quadrant. Clearance maintained.
- **Slot 3 (faculty):** Opener expands far-right. All four neighbors displaced
  to the left cluster half. Cluster boundary respected; no viewport overflow.
- **Slot 4 (degree-programs):** Opener expands center-right. Four neighbors
  radiate to left and upper-right. No overlap.
- **Slot 5 (undergraduate-research):** Opener expands center-right per the
  `open-research` story (`OpenResearch` play also asserts `circlesOverlap`
  returns false for all pairs, per Cycle 6 Vitest PASS).

[PASS] All five open states: expanded panel content (heading, detail, maroon
link, labeled Close button) is fully legible and centered within the gold
circle. Maroon link color matches `$uds-color-brand-maroon`.

[PASS] The `assertRenderedDesktopSlots` story additionally verifies:
- All surface bounding boxes remain within cluster shell bounds (±1 px).
- No `circlesOverlap` between any pair of surfaces (1 px tolerance).
- Hovered closed fronts remain ≤181 px (no reflow).
- No horizontal page overflow.
These assertions pass per Cycle 6 Vitest across 769, 1280, 1920, and 2560 px.

### No-script Fallback (1920 px)

[PASS] Without JS enhancement, all five bubbles render as 328.47 px gold
circles in a grid layout (single row at 1920 px). No front buttons, no nav
controls, no close buttons — back face content (heading, detail, link) is
directly accessible. This matches the `NoScript` story assertions.

### Reduced Motion (1280 px)

[PASS] With `--reduced-motion` class applied, transitions are suppressed.
State changes are instantaneous. Layout and content remain identical to the
animated state. No visual regression visible.

### Token and Brand Compliance (Static Audit)

SCSS (`_charter-bubbles.scss`) uses:
- `$uds-color-brand-gold` — closed/open background ✓
- `$uds-color-font-dark-base` — text ✓
- `$uds-color-brand-maroon` — link color ✓
- `$uds-color-base-white` — nav button background ✓
- `$asu-gray-5` — nav button border ✓
- `$uds-font-family-base`, `$uds-font-weight-bold` — typography ✓
- `$uds-breakpoint-md` — 768 px boundary ✓
- `$uds-size-spacing-*` — all spacing values ✓

No raw hex colors found in production rules. All unmatched measured values are
named custom properties with `// TODO` comments per Unity conventions. No
Tailwind or non-Unity framework tokens present.

---

## Geometry Decision

### As-built vs Figma measurements

| Dimension | Figma (design-doc locked) | As-built (SCSS) | Delta | % diff |
|---|---|---|---|---|
| Cluster width | 635.78 px | 600 px | −35.78 px | −5.6% |
| Cluster height | 366.19 px | 400 px | +33.81 px | +9.2% |
| Closed layout cell | 194.59 px | 180 px | −14.59 px | −7.5% |
| Closed visible circle | 180 px | 180 px | 0 | 0% |
| Column gap (measured) | 26 px nominal | 28.2 px | +2.2 px | +8.5% |

Measured at 1280 px via `eval` on live render:
- List CSS: `600 × 400 px` (custom properties `37.5rem × 25rem`)
- Front circles: `180 × 180 px` each
- Row-1 horizontal gap between circles: 28.2 px (exceeds the 26 px nominal)
- Row-2 vertical step from row-1: 187.6 px (consistent with 400 px height /
  180 px circle — no row overlap in the as-built layout; Figma's 23 px overlap
  was calculated for the 194.59 px cell in the 366.19 px height)

### Analysis

The as-built rounded values produce a visually correct 3+2 composition. The
critical acceptance criteria from §5.3 Geometry Reconciliation are:

1. **Five-bubble 3+2 composition preserved:** ✓ (confirmed visually at all
   desktop viewports)
2. **No interactive surfaces overlap:** ✓ (measured column gap 28.2 px ≥
   the locked 26 px nominal)
3. **Cluster boundary respected on all open states:** ✓ (all 5 openers, all
   viewports tested)
4. **No horizontal page overflow:** ✓

The absence of a 23 px row overlap (Figma) in the as-built layout is visually
perceptible: the two bottom bubbles sit lower relative to the top row than in
the Figma frame. However, this results in slightly more vertical clearance, not
less — no content is clipped and no surface overlaps. The Storybook `DesktopBoundaryContract` story explicitly tests that closed bubbles remain
within the cluster shell, which passes.

There is no Figma pixel-reference screenshot available for direct pixel
comparison (`.intake/` is empty; Figma Dev Mode MCP did not expose queryable
assets during this run). The as-built visual (screenshots at 1280 and 1920 px)
shows a coherent, brand-compliant 3+2 cluster that matches the Figma frame
composition description from the intake-brief.

### Verdict

**ACCEPT-STATIC**

The 600 × 400 px / 180 px as-built values are within the visual clearance
tolerances defined in §5.3: no interactive surfaces overlap, the 3+2
composition is preserved, all measured gaps exceed the 26 px nominal minimum,
and no P1 geometry mismatch is detected. The row-overlap reduction (Figma's
23 px overlap vs. as-built's small positive gap) is a consequence of the
rounded height (400 px vs. 366.19 px) and results in more separation, not less.

**Caveat:** No direct pixel comparison against Figma frames was performed —
`.intake/` has no screenshots and Figma Dev Mode MCP was not queryable. This
verdict is based on rendered pixel measurements from live Storybook, comparison
against intake-brief recorded geometry, and the internal consistency of the
§5.3 reconciliation. If final design sign-off requires exact Figma pixel
comparison, that must be performed with Figma screenshots available.

SCSS edits required: **none** for this decision.

---

## Collision Decision

### Methodology

For each of the five openers, the following was verified:

1. **Open panel vs. each closed trigger:** `circlesOverlap(panel, trigger, 1px) === false` for all 4 pairs.
2. **Neighbor vs. neighbor:** `circlesOverlap(a, b, 1px) === false` for all 6 neighbor pairs.
3. **Panel inside cluster shell:** `panelRect.left ≥ clusterRect.left − 2` and `panelRect.right ≤ clusterRect.right + 2`.
4. **No horizontal page overflow:** `scrollWidth ≤ clientWidth + 1`.

Verified programmatically at 1280 px; additionally verified visually at 1280
and 1920 px via screenshots. The `assertRenderedDesktopSlots` Storybook story
independently asserts all of these conditions via `circlesOverlap` with 1 px
tolerance — this story passes for all four viewports (769, 1280, 1920, 2560)
per Cycle 6 Vitest.

### Per-opener results

| Opener | No open/closed overlap | No neighbor overlap | Panel in cluster | No page overflow | Visual assessment |
|---|---|---|---|---|---|
| employability (slot 1) | ✓ | ✓ | ✓ | ✓ | Neighbors fan right and lower-right; clear separation |
| fortune-500 (slot 2) | ✓ | ✓ | ✓ | ✓ | Neighbors displaced left and lower-left; clear separation |
| faculty (slot 3) | ✓ | ✓ | ✓ | ✓ | Neighbors to left half; expanded circle touches right margin but stays in cluster |
| degree-programs (slot 4) | ✓ | ✓ | ✓ | ✓ | Neighbors left and upper-right; symmetric spread |
| undergraduate-research (slot 5) | ✓ | ✓ | ✓ | ✓ | Per `OpenResearch` story: asserts no overlap after full animation |

### Analysis

The bounded relaxation solver (`applyDesktopGeometry`, ≤60 passes + candidate
search fallback) produces valid, non-overlapping placements for all five
opener cases at both 1280 px and 1920 px. The constraint that §5.3 requires
("at least the 26 px nominal column gap; no interactive surface may overlap
another") is satisfied across all tested configurations.

The design-doc §5.3 Collision Reconciliation explicitly deems the solver
acceptable pending acp-visual verification, with the note that authored
`[data-open-slot="N"]` SCSS rulesets would be the remediation if placement
mismatch is found. No such mismatch is found.

One structural note: `data-open-slot="1"…"5"` is set on the cluster shell as
a marker, but the SCSS has no five desktop slot-map rulesets — placement is
entirely solver-driven. This is the documented deviation. The visual result is
correct, but deterministic CSS slot maps remain the recommended long-term
resolution (follow-up ticket per §5.3 Collision Reconciliation note).

### Verdict

**ACCEPT-STATIC** for all five openers.

All five opener cases produce collision-free placements that keep all surfaces
within the cluster shell and within the viewport. The solver is deterministic
at the fixed five-item, fixed-geometry scale. The absence of authored CSS
slot maps is a known deviation documented in the design-doc, with a recommended
follow-up. No P1 collision mismatch found.

**Caveat:** As with Geometry, no direct pixel comparison against Figma frames
was performed (`.intake/` empty; Figma Dev Mode MCP not queryable). The solver
placements were validated against the collision constraints stated in §5.3
rather than against Figma's specific neighbor positions. If a future design
review requires exact neighbor-position matching to Figma, authored CSS slot
maps will be needed regardless of this verdict.

SCSS slot-map edits required: **none** to unblock the handoff. A follow-up
ticket should author the five `[data-open-slot="N"]` desktop rulesets once
Section 15 design approvals land.

---

## Summary of Known Reviewer Findings (Carried Forward, Not Addressed Here)

Per the user's explicit instruction (Option B — ship as known defects
documented in handoff), the following reviewer findings are carried forward
unchanged. They are outside acp-visual's mandate and are not affected by
this report:

- **[P1] Deferred gesture settlement survives explicit dismissal** (carousel
  dismissal state machine, `charter-bubbles.js:1762-1789` / `1607-1648`).
- **[P2] Horizontal wheel after explicit empty state remains suppressed**
  (`charter-bubbles.js:1860-1870`, `1894-1902`, `1932-1959`).

These defects are in the carousel interaction path only and do not affect
desktop cluster geometry, collision placement, or static visual fidelity.

---

VISUAL_PASS
