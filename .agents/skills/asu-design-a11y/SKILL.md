---
name: asu-design-a11y
description: "Design + accessibility skill for ASU UI work (WCAG 2.1 AA). Use when designing, building, or reviewing any ASU component or page in Unity or Webspark. Covers semantics/landmarks, keyboard + focus, contrast, reflow at 320px, forced-colors mode, labels/forms, and a pre-delivery checklist. Prefer Unity/Bootstrap components over hand-rolled div+ARIA."
---

# ASU Design & Accessibility (WCAG 2.1 AA)

Non-negotiable baseline for all ASU UI. Conform to WCAG 2.1 Level AA; exceed it
where it meaningfully helps. Never claim output is "fully accessible" — manual
testing (e.g. Accessibility Insights) is still required.

## Use the component library first

If a component library exists (it does — Unity / Bootstrap 5), use its standard
components and patterns. Do not recreate library components with `div`/`span` +
ARIA when a native or library component exists. Match existing project usage.
Prefer native HTML over ARIA; add ARIA only when necessary.

## Structure & semantics (MUST)

- Landmarks: `header`, `nav`, `main`, `footer`. Headings introduce sections; no
  skipped levels; exactly one `h1` per page topic.
- Descriptive `<title>` ("Unique page | Site").

## Keyboard & focus (MUST)

- All interactive elements keyboard operable; predictable tab order; visible
  focus; no keyboard traps. Static content not tabbable (use `tabindex="-1"`
  only for programmatic focus).
- Skip link as first focusable element (ASU pattern: `visually-hidden-focusable`
  → `#skip-to-content`).
- Composite widgets (tabs, listbox, menus, grids): one tab stop + roving
  tabindex or `aria-activedescendant` for arrow-key navigation.

## Color & contrast (MUST)

- Text contrast ≥ 4.5:1 (large text ≥ 3:1); focus indicators / control
  boundaries ≥ 3:1. Never rely on color alone — add text and/or icons.
- Use only approved ASU colors via design tokens (see the `asu-brand` skill and
  `_custom-asu-variables.scss`); do not invent colors. Avoid alpha for text and
  key affordances. Cover all states: default/hover/active/focus/visited/disabled.

## Reflow (MUST)

- At 320 CSS px (and 200% zoom): no two-directional scrolling for normal text; no
  content/function loss. Multi-column stacks to one column; text wraps.
- Use responsive `flex`/`grid` with fluid sizing; `max-width: 100%` on media;
  `min-width: 0` on flex/grid children; `overflow-wrap: anywhere` for long
  strings. Component-level horizontal scroll allowed only for tables/maps/etc.,
  and the page as a whole must still reflow.

## Forced colors / high contrast (MUST)

- Adapt automatically; never override OS settings. Use `@media (forced-colors:
  active)` only when needed, with system color keywords (`ButtonText`, `Canvas`,
  `CanvasText`, …) — no fixed hex inside it. Don't use `forced-color-adjust:
  none` without justification. Icons use `currentColor` (`fill`/`stroke`).

## Controls, labels & forms (MUST)

- Every interactive element has a visible label; the accessible name contains the
  visible label (voice access). Disambiguate repeated labels with `aria-label`
  that keeps the visible text ("Remove item: Socks").
- Meaningful link/button text — never bare "click here"/"read more" without an
  aria-label. Form controls have programmatic labels (`<label for>`); help text
  via `aria-describedby`; required fields marked visually + `aria-required`;
  errors explain the fix, set `aria-invalid`, focus first invalid on submit.

## Graphics, tables, dynamic content

- Informative images: `alt` / `role="img"` + label. Decorative: `alt=""` /
  `aria-hidden`. Use `<table>` + `<th>` for static tabular data; grid roles only
  for truly interactive grids. Use `aria-live` only when necessary (assertive
  only for errors/timeouts/security).

## Inclusive language (MUST)

People-first, respectful language in all user-facing text; follow ASU Inclusion
guidelines. No stereotypes about ability/cognition/experience.

## Accessibility Requirements Template (for Design Doc)

The architect MUST include this section in `.pipeline/design-doc.md` for any interactive component:

```markdown
## Accessibility Requirements

### Keyboard Navigation
- Tab order: [describe which elements receive focus in what order]
- Arrow keys: [what ArrowLeft/Right/Up/Down do when focused]
- Enter/Space: [activation behavior]
- Escape: [dismiss behavior if applicable]

### Focus Management
- Pattern: [roving tabindex / aria-activedescendant / standard]
- Focus moves to: [where focus goes after interaction]

### Screen Reader
- Live region: [what is announced on state change]
- Labels: [aria-label pattern for each interactive element]

### Motion
- Reduced motion: [how component adapts to prefers-reduced-motion]
```

Failure to specify these leads to implementation guesswork and review rework.

## Pre-delivery checklist (verify explicitly)

Landmarks + one `h1`; keyboard operable + visible focus + no traps + skip link;
labels present and in accessible names; forms (labels/required/errors/focus);
contrast 4.5:1 / 3:1 and color not the only cue; forced-colors safe; reflow at
320px / 200%; informative vs decorative graphics; tables use `<th>`. Run the
package's a11y tests (`run-story-tests` in Unity; `ddev playwright` in Webspark).
