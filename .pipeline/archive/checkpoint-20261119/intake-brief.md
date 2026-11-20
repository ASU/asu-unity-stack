# Intake brief — Charter Carousel / Bubbles (WWWCMS-238)

> Fresh Phase 0 intake produced only from the current `.intake/` files, the
> current Jira issue, current repository code, and the currently available
> design connections. No previous pipeline artifact was used.

## Component

- **Name:** Charter Carousel / Bubbles
- **Slug:** `charter-bubbles`
- **Handoff anchor:** `WWWCMS-238`
- **Relationship:** Component 2 of 2 for the Charter ticket. The preceding
  Charter Main section owns the image and Charter statement. This component
  owns the five interactive “ASU by the numbers” bubbles and their responsive
  carousel presentation.

## Sources

| Source | Reference | Intake result |
|---|---|---|
| Direction brief | `.intake/initial prompt.md` | Read. Governing source for scope, React decomposition, breakpoint, semantics, accessibility, and reuse direction. |
| Content | `.intake/copy.md` | Read. Contains five headlines, detail sentences, and placeholder links. |
| Jira | `WWWCMS-238` | Fetched by key. Task; status Open; labels `brand`, `urgent`; depends on `WWWCMS-230` and blocks/feeds `WWWCMS-231`. Jira agrees on a carousel at 768px and below and contains the standalone placement/reserved-space requirement. |
| Figma | File `F4lomCUW2bWkekYZ0j7O03`; nodes `14641:7824`, `14639:6499`, `13906:14413`, `13467:58735`, `13472:61899` | Dev Mode MCP read completed: design context, metadata, variables, screenshots, and React Code Connect maps retrieved for every node. No Code Connect mappings exist for these nodes. |
| Jira Figma parent | Node `13467:58610` | Parent “Homepage mockup - Desktop (1280)” retrieved. Its full context is sparse because the page is large; component child `13467:58735` was queried directly at full fidelity. |
| Local screenshots | None | No image files are present in `.intake/`. |

### Figma frame evidence

| Node | Exact frame | Observed state/layout |
|---|---:|---|
| `14641:7824` | 1920 × 462.19 | Closed desktop 3+2 cluster, flush to the right edge; background crop variant. |
| `14639:6499` | 1920 × 462.19 | Closed desktop 3+2 cluster, flush to the right edge; background crop/content variant. |
| `13906:14413` | 1920 × 462.19 | Closed desktop 3+2 cluster with a 48px right gutter. |
| `13467:58735` | 1279 × 462.19 | Closed desktop 3+2 cluster with 48px top/right placement in the 1280 homepage frame. |
| `13472:61899` | 393 × 444.78 | Mobile horizontal carousel with the first visible bubble expanded and previous/next controls below. |

The three 1920px frames have the same cluster geometry but different right-edge
placement/background crops. PLAN must identify their intended large-screen
placement rule rather than treating them as distinct breakpoint sizes.

### Measured visual details

- Desktop cluster: 635.78px wide × 366.19px high; three bubbles on the first row
  and two centered below; 26px horizontal gap; rows overlap by 23px.
- Closed bubble: 180px gold circle inside a 194.59px interaction/layout wrapper.
- Desktop placement: 48px top inset; 48px right gutter in the 1279 and one 1920
  frame, but right-flush in two 1920 variants.
- Front typography: Arial Bold, 20px/22px, `-0.6px` letter spacing; content width
  136px; 8px content gap; dark text; downward chevron.
- Mobile frame: 32px horizontal and 24px top inset; 8px track gap; 328.47px
  expanded bubble; 194.59px closed bubbles; 52.30px circular previous/next
  controls separated by 13.08px.
- Mobile expanded state includes heading, body, underlined maroon link, and a
  bottom-centered close control.
- The mobile mockup conflicts with the intake content: it duplicates “Elite
  research opportunities for undergrads,” omits “#2 employability,” and uses
  body/link copy (“More than $1 billion…” / “Research and innovation”) that
  differs from `.intake/copy.md`. Treat this as a content/state mockup issue to
  resolve, not as authorization to duplicate or omit data.

## Intent

- **New component.** No Charter Bubbles implementation exists in
  `packages/components-homepage/src/components/`.
- Build a reusable React component family:
  - `CharterBubble`: one semantic flip/open stat item.
  - `CharterBubbleCluster`: desktop wrapper that coordinates expanded size and
    neighbor rearrangement.
  - `CharterBubbleCarousel`: responsive carousel wrapper using established
    repository patterns where appropriate.
  - `CharterBubbles`: shared-data coordinator that selects the cluster above
    768px and carousel at 768px and below.
- Render all meaningful content and interactive faces in the initial HTML.
  React manages state and class/attribute changes; it must not mount-gate the
  content needed by the static HTML/Webspark handoff.
- No accordion exists at any width.

## Existing implementations to evaluate during PLAN

- `packages/components-homepage/src/components/rankings-cards/` provides the
  closest homepage behavior pattern: CSS scroll snap, previous/next controls,
  derived end-state handling, Storybook coverage, and careful teardown.
- `packages/unity-react-core/src/components/ComponentCarousel/` provides the
  existing React carousel family used by card, image, image-gallery, and
  testimonial carousels and consumed by `component-news`.
- Storybook MCP discovery remains required before implementation:
  `list-all-documentation`, `get-documentation`, then story instructions and
  `run-story-tests` after implementation.
- PLAN must choose reuse/composition based on accessibility, HTML parity,
  package boundary, and bundle implications—not merely visual similarity.

## Target package

- **Package:** `@asu/components-homepage`
  (`packages/components-homepage/`)
- **Confidence:** High. The direction brief and Jira both name this package.
- **Expected location:**
  `packages/components-homepage/src/components/charter-bubbles/`
- **Architecture constraint:** The package describes itself as vanilla
  HTML/SCSS/JS, while the current direction explicitly requests production
  React components. PLAN must lock the exports, dependency/build strategy,
  first-render HTML parity, and progressive/static handoff contract before code.
- **Stage B target:** Drupal Single Directory Component(s) in the one homepage
  module `asu_edu_homepage`, under
  `modules/custom/asu_edu_homepage/components/<slug>/`; never the `asu_edu`
  theme or shared `asu_edu_components` module.

## Requirements

### Content model

Exactly five items. Each item has a stable ID, front headline, back headline,
detail sentence, link label, and link URL.

Current content set from `.intake/copy.md`:

1. **#2 public university in the U.S. for employability** — “Career outcomes”
2. **30 degree programs rank top 10 in the U.S.** — “Browse programs”
3. **Fortune 500 companies rely on ASU** — “Partners and industry”
4. **Elite research opportunities for undergrads** — “Research at ASU”
5. **Top-tier faculty like no other** — “Explore our faculty”

The detail sentences are in `.intake/copy.md`. All current URLs are `#`
placeholders. Desktop Figma confirms the direction-brief order: `#2
employability`, Fortune 500, faculty, degree programs, research. The mobile
expanded-state frame has a duplicate/missing-item inconsistency described
above. PLAN must use one canonical five-item data set and confirm whether
`.intake/copy.md` or current Figma owns the research body/link copy.

### Shared semantics

- Render the five items once as a semantic list named “ASU by the numbers.”
- Each bubble is a list item in cluster and carousel modes.
- Front face: real button with `aria-expanded` and `aria-controls`.
- Back face: always present in the DOM, `aria-hidden` and `inert` while closed.
- Back face contains the title, sentence, link, and a labelled cluster-only
  close button. Carousel mode removes every close button from view, focus, and
  the accessibility tree.
- IDs are deterministic and safe across multiple component instances.
- Only the visible face participates in the tab order.

### Placement and reserved expansion space

- The five bubbles form a standalone component placed at the bottom of the
  preceding Charter image-and-statement section.
- At desktop widths, bubbles float over and overlap the Charter image.
- The desktop component reserves beneath the overlap the same vertical space
  used by the mobile carousel. That clear area is intentional expansion space,
  allowing a bubble to flip/grow without obscuring the following section.
- Charter Main and Charter Bubbles must not duplicate responsibility for the
  image, statement, overlap offset, reserved space, or following-section flow.

### Desktop cluster (>768px)

- Five yellow circular bubbles follow current Figma positions.
- Jira comment `2634628` supersedes the original size text: 180px closed is the
  confirmed Figma-aligned size and 200px hover is the approved prototype-derived
  behavior because current Figma exposes no hover measurement.
- Hover/focus growth must not reflow the label.
- Opening flips to the back face, expands within the viewport, and rearranges
  neighbors so bubbles keep at least the designed clearance without overlap.
- Close through the labelled close button, repeat activation when unambiguous,
  Escape, or click outside. Closing restores neighbors and focus.
- If an open bubble becomes fully out of view, close it and restore the cluster.

### Carousel (768px and below)

- Switch the same five items to a carousel at 768px and retain it through phone
  widths. Never switch to an accordion.
- PLAN must resolve scroll snap versus existing React carousel composition,
  visible item count/peek, gap, control placement, one-item versus page advance,
  and clamp versus loop from current Figma evidence.
- Previous/next controls are native buttons with accessible names and visible
  focus.
- Exactly one bubble is always active/open. Carousel navigation and direct
  selection replace that item and never produce a user-dismissible empty state.
- Close, Escape, outside-click, and second-click dismissal are cluster-only.
- Disabled/end state derives from real scroll position and maximum scroll and
  stays correct after resize, font load, and content-width changes.
- Touch/pointer scrolling and content remain usable without control scripting.
- Teardown restores only state owned by this component and does not remove
  pre-existing server-rendered attributes.

### State and focus behavior

- Cluster open: set the trigger to `aria-expanded="true"`, expose the back face,
  remove `inert`, exclude the front face, and focus the close button.
- Carousel selection: keep Previous/Next focus stable and do not steal focus for
  pointer/scroll input. Keyboard activation may focus the visible panel/heading
  using a temporary `tabindex="-1"` that is removed immediately; normal Tab
  order reaches the active link and enabled carousel controls.
- Close: restore ARIA/inert/tab state and return focus to the originating front
  button when focus was inside the closing bubble.
- Escape affects only the active bubble in the current component instance.
- `prefers-reduced-motion: reduce` removes flip, growth, neighbor movement, and
  smooth scrolling while preserving immediate state changes.

### Accessibility

- WCAG 2.1 AA: correct names/roles/states, predictable keyboard order, visible
  focus, no traps, 44px targets, contrast, reflow, and reduced motion.
- Preserve native list semantics in both layouts.
- Validate at 320 CSS px, 200% and 400% zoom, and forced-colors mode.
- Hidden/inert faces must not be focusable or announced while closed.
- Avoid noisy live-region announcements during touch scrolling.
- Verify focus indicators against yellow, photographic, and expanded surfaces.

### Analytics

- Preserve existing server-rendered analytics attributes.
- Follow the homepage `trackGAEvent` / data-layer convention only when a defined
  event contract exists.
- Do not invent event names or metadata for bubble links or carousel controls.

## Design tokens to reconcile

Figma variable extraction is complete for all supplied nodes. The component
nodes expose the variables below; the parent frame confirms the broader ASU
type, spacing, border, white, and neutral variables.

| Property | Unity candidate | Status |
|---|---|---|
| `Brand colors/ASU Gold` = `#ffc627` | `$uds-color-brand-gold` | Exact token match. |
| `Text colors/Primary text` / Gray 1 = `#191919` | `$uds-color-font-dark-base` / `$asu-gray-1` | Exact palette match; prefer the semantic text token where applicable. |
| `Brand colors/ASU Maroon` = `#8c1d40` | `$uds-color-brand-maroon` | Exact token match for the expanded link. |
| `Primary Colors/ASU White` = `#ffffff` | `$uds-color-base-white` | Exact token match for carousel controls. |
| `Grayscale/Gray 5` = `#d0d0d0` | `$asu-gray-5` | Exact token match for control borders. |
| Arial Bold 20px/22px, tracking `-0.6px` | `$uds-font-family-base`, `$uds-font-weight-bold`; size/line/tracking mapping pending | Map through Unity typography rather than copying generated raw styles. |
| Figma padding variables 8/16/24/32/48 and UDS grid 24 | `$uds-size-spacing-*` | Exact scale candidates; validate each use. |
| Breakpoint | `$uds-breakpoint-md` (`768px`) | Matches current requirement. |
| Focus | Existing UDS/package two-tone focus treatment | Verify on all surfaces. |
| Bubble/wrapper dimensions, 26px gap, 23px row overlap, 52.30px controls | No exact variable returned | Treat as measured values; PLAN must decide token/calc/custom-property treatment and flag unmatched values. |

Never hardcode a color, spacing, font, or breakpoint value when a Unity token
exists. Flag unmatched Figma values instead of approximating them silently.

## Open questions for PLAN

1. Confirm the intended placement rule represented by the three 1920px variants
   (48px gutter versus right-flush) and whether it changes above 1920px.
2. Resolve the mobile Figma duplicate/missing item and research-copy conflict;
   keep one canonical five-item data source.
3. Lock the React integration strategy inside the currently vanilla-oriented
   homepage package, including exports, runtime dependency, bundle, static HTML
   parity, and Drupal handoff.
4. Lock the ownership boundary between Charter Main and Charter Bubbles for the
   shared edge, overlap, reserved expansion space, and responsive composition.
5. Select or compose the carousel implementation and define its exact mechanics.
6. Replace all placeholder URLs and confirm the research link label/copy.
7. Confirm desktop collision rules, motion durations/easing, and the
   reduced-motion equivalent against current Figma.
8. Confirm the analytics event contract, if any.
9. Confirm whether Stage B combines both Stage A components into Jira’s proposed
   `homepage-charter` SDC or uses separate SDCs inside `asu_edu_homepage`.

---

**Ready to send this to the Architect?**
