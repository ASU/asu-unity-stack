---
name: asu-brand
description: "Brand skill for Arizona State University UI. Use when designing, building, or reviewing any ASU component or page. Defines the approved color palette, typography, spacing scale, and tone, expressed as Unity theme tokens (_custom-asu-variables.scss). Enforces token usage over raw values. Candidate for upstreaming to the foundry as a reusable institutional brand skill."
---

# ASU Brand

Institutional identity rules for ASU UI. In the Unity stack these are encoded as
SCSS tokens in `packages/unity-bootstrap-theme/src/scss/_custom-asu-variables.scss`
— **always use the token, never the raw value.** (In Webspark, use the synced
copy of this skill and the Unity-provided CSS variables.)

## Core palette

| Brand color | Hex | Token |
|---|---|---|
| ASU Maroon | `#8c1d40` | `$uds-color-brand-maroon` / `$uds-color-base-maroon` |
| ASU Gold | `#ffc627` | `$uds-color-brand-gold` / `$uds-color-base-gold` |
| White | `#ffffff` | `$uds-color-base-white` |
| ASU Green | `#78be20` | `$uds-color-base-green` |
| ASU Orange | `#ff7f32` | `$uds-color-base-orange` |
| ASU Blue | `#00a3e0` | `$uds-color-base-blue` |
| Focus Blue (a11y) | `#00baff` | `$uds-color-base-bluefocus` |

Maroon and gold are the primary brand colors. Darkgold `#7f6227` and darkmaroon
`#440e22` are visited states.

## Neutrals (ASU gray ramp)

`$asu-gray-1 #191919` (base text/black) · `-2 #484848` · `-3 #747474` ·
`-4 #bfbfbf` · `-5 #d0d0d0` · `-6 #e8e8e8` · `-7 #fafafa`. Use `$asu-gray-*`; the
old `$uds-color-base-gray-*` names are deprecated.

## Semantic tokens (prefer these in components)

- Alerts: `$uds-color-alerts-error` `#cc2f2f`, `-warning` (orange), `-info`
  (blue), `-success` (green).
- Backgrounds: `$uds-color-background-{white,gray,dark,success,error,warning,info}`.
- Font colors: `$uds-color-font-dark-base` (text on light),
  `$uds-color-font-light-base` (text on dark), `$uds-color-font-light-link`
  (gold link on dark), etc.

## Typography

- Family: `$uds-font-family-base` = `Arial, Helvetica, 'Nimbus Sans L',
  'Liberation Sans', FreeSans, sans-serif`.
- Weights: `$uds-font-weight-{lighter 100, light 300, normal 400, bold 700,
  bolder 900}`.
- Sizes: `$uds-size-font-{tiny .75rem, small .875rem, medium 1rem, large
  1.25rem, xl 1.5rem, xxl 2rem, xxxl 3rem}`.

## Spacing & layout

- Spacing scale: `$uds-size-spacing-*` (0, half 0.25rem, 1 0.5rem … 64 32rem).
- Breakpoints: `$uds-breakpoint-{xs 0, sm 576, md 768, lg 992, xl 1260, xxxl
  1920}`. Grid max-width xl = 1224px; 12 columns; 24px gutter.

## Tone & voice

- Inclusive, people-first, respectful language (ASU Inclusion guidelines).
- Clear, direct, confident; avoid jargon. No stereotypes.

## Rules

- Use tokens for every color, font, spacing, and breakpoint value. Never hardcode
  hex/rgb/named colors or pixel values that a token already defines.
- If a needed value has no token, flag it for design rather than inventing one:
  `// TODO: No brand token for this value — confirm with design.`
- Do not fabricate logo files or usage rules; defer to brandguide.asu.edu and
  existing Unity header/footer components for logo lockups.

## Note

This skill is the strongest candidate for upstreaming to
`ddt-agent-skills-library-foundry` as a reusable institutional brand skill. Until
then it is maintained here (Unity copy is canonical) and synced to Webspark.
