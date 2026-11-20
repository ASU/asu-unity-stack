---
name: visual-diff
description: "Use during REVIEW to compare a rendered UI component against its design references (screenshots in .intake/ and/or the Figma frame). Drives a running Storybook (Unity) or local Webspark page with agent-browser to screenshot the build at multiple viewports, then reports P1/P2/P3 visual-fidelity findings to .pipeline/visual-report.md. Used by the acp-visual agent."
---

# Visual Diff

Compare what was built against what was designed. Pixel-and-token fidelity, not
spec/QA (that is the structural reviewer's job).

## Inputs

- `.intake/*` — design screenshots (states / breakpoints / variants).
- Figma frame — `get_screenshot` on the node id from `.pipeline/intake-brief.md`
  (Figma Dev Mode MCP, if available).
- Intended tokens — `.pipeline/design-doc.md` + the `asu-brand` skill.

## Pre-Implementation Visual Analysis (Optional)

Before code is written, the visual agent can analyze `.intake/` references to extract positioning constraints for the architect:

1. **Identify layout pattern**: grid, flex, absolute positioning, stacking
2. **Measure spacing**: card gaps, offsets, rotations from reference
3. **Document states**: which visual states are shown (active, hover, stacked)
4. **Extract formulas**: "cards appear to fan with ~60px horizontal offset and ~8° rotation per index"

Output to `.pipeline/visual-analysis.md` for architect to incorporate into the Behavioral Matrix.

This reduces "it doesn't look like the design" rework after implementation.

## Capture the build (agent-browser)

`agent-browser` drives Chrome via CDP. Install: `npm i -g agent-browser` then
`agent-browser install`; or use `npx agent-browser`. Workflow:

```bash
# Unity: ensure the component's Storybook is up (bring it up if not), then:
agent-browser open "http://localhost:9200/?path=/story/<story-id>" \
  && agent-browser wait --load networkidle \
  && agent-browser screenshot .pipeline/shot-desktop.png
# Narrow viewport for reflow check:
agent-browser set-viewport --width 320 --height 800 \
  && agent-browser screenshot .pipeline/shot-320.png
```

Capture at minimum one narrow (~320px) and one desktop width, plus one shot per
interactive state shown in the references (hover/focus/active/open).

> Stage B (Webspark): screenshot the rendered page on the local DDEV URL instead
> of Storybook; everything else is identical.

## Compare

For each reference vs. build, assess: overall layout & alignment, spacing
rhythm, color (map to ASU tokens — flag hardcoded/incorrect values), typography
(family/size/weight), iconography, and each interactive state. Confirm the 320px
capture reflows (no clipping / horizontal scroll of text).

## Output — `.pipeline/visual-report.md`

- **Compared**: which references, which viewports, screenshot paths.
- **Findings** (severity + location + suggested fix):
  - **P1** wrong color/token, broken or clipped layout, missing state, 320px failure.
  - **P2** noticeable spacing/alignment/type deviation.
  - **P3** minor polish.
- **Assessment: VISUAL_PASS / VISUAL_CHANGES_REQUIRED.**

If there is no visual reference (name-only intake), state that and assess against
the design doc's intent + the `asu-brand` / `asu-design-a11y` skills rather than
pixel comparison.
