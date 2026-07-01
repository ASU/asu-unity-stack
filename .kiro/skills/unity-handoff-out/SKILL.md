---
name: unity-handoff-out
description: "Use at the END of the Unity stage to enforce the PR-ready gate and write the cross-stage handoff. Defines the gate (build+lint, Storybook story + interaction/a11y tests, HTML-parity) and writes handoff.json (+ markup.html) to the shared peer handoff/ directory, keyed by Jira key or component slug, for the Webspark stage to consume. Validate with .kiro/scripts/validate-handoff.sh."
---

# Unity Handoff Out

Closes the Unity stage. Two responsibilities: enforce the **PR-ready gate**, then
write the **handoff** the Webspark stage consumes. Agents stop here at a branch +
conventional commits — humans open the PR.

## PR-ready gate (all must pass)

| Check | Command / method | Pass condition |
|---|---|---|
| Build | `yarn build` (from repo root; builds `unity-react-core` first) | clean, no errors |
| Lint | `yarn eslint` + `yarn stylelint` for the package | clean |
| Stories + a11y | `run-story-tests` (Storybook MCP) for the component story | all pass |
| HTML-parity | compare Storybook HTML-addon static markup to the React render | identical |

If any check fails, do NOT write the handoff — return to the coder. (The
`acp-visual` step's `VISUAL_PASS` is also required before handoff; record it in
the evidence.)

## Handoff location & anchor

Write to the **peer** directory (sibling of both repos):
`../handoff/<anchor>/` where `<anchor>` is the Jira key if present, else the
component slug (kebab-case). Create it: `mkdir -p ../handoff/<anchor>`.

Files:
- `../handoff/<anchor>/handoff.json` — the manifest (schema below).
- `../handoff/<anchor>/markup.html` — the Storybook HTML-addon static markup
  (the Twig-parity source of truth for Webspark).

## handoff.json schema (v1.0)

```json
{
  "schema_version": "1.1",
  "anchor": "WS2-1234",
  "created_at": "2026-06-25T20:00:00Z",
  "created_by": "acp unity stage",
  "component": {
    "name": "Hero Banner",
    "slug": "hero-banner",
    "intent": "update",
    "target_package": "unity-react-core",
    "existing_component_path": "packages/unity-react-core/src/components/HeroBanner"
  },
  "sources": {
    "jira_key": "WS2-1234",
    "figma_url": "https://figma.com/design/...",
    "figma_node": "1:2",
    "screenshots": [".intake/hero-default.png", ".intake/hero-320.png"]
  },
  "unity": {
    "base_branch": "dev",
    "branch": "pipeline-trial",
    "commits": ["<sha>"],
    "package": "@asu/unity-react-core",
    "build_command": "yarn build",
    "dist_paths": ["packages/unity-react-core/dist/unity-react-core.umd.js"],
    "storybook_story_id": "components-herobanner--default"
  },
  "html_parity_markup_file": "markup.html",
  "tokens_used": ["$uds-color-brand-maroon", "$uds-size-spacing-4"],
  "interactivity": {
    "summary": "APG Tabs pattern; manual activation. Static markup is fully present on load; states are class-toggled.",
    "state_machine": [
      { "state": "IDLE", "desc": "no preview; committed pane shown" },
      { "state": "PREVIEWING(i)", "desc": "desktop hover previews pane i without committing" },
      { "state": "COMMITTED(j)", "desc": "pane j active; fires analytics" }
    ],
    "activation": { "desktop": "hover = preview, click/Enter/Space = commit", "touch": "tap commits (no preview)", "initial": "first pane committed" },
    "keyboard": {
      "pattern": "WAI-ARIA APG Tabs",
      "keys": { "Enter/Space": "commit focused tab", "ArrowLeft/Right": "move focus only (roving tabindex, no commit)", "Home/End": "focus first/last" },
      "focus": "roving tabindex: focused tab tabindex=0, others -1"
    },
    "aria": { "roles": "tablist / tab / tabpanel", "orientation": "horizontal", "dynamic": "aria-selected tracks committed tab; inactive tabpanels get aria-hidden + are not tabbable" },
    "class_toggles": [
      { "trigger": "committed pane", "element": ".uds-expandable-heroes__pane", "class": "is-active", "effect": "CSS expands the pane; siblings collapse" }
    ],
    "motion": "transitions gated behind @media (prefers-reduced-motion: no-preference)",
    "forced_colors": "uses system colors; borders substitute for box-shadow under forced-colors",
    "breakpoints": { "lg": "strip/collapse layout active >= lg; below lg all panes stack vertically, no collapse" },
    "analytics": { "when": "on commit only", "mechanism": "dataLayer push", "payload_keys": ["event","region","section","..."], "guards": "no double-fire on Enter" },
    "design_doc_refs": ["§0 locked decisions", "§5 state machine", "a11y/keyboard section"]
  },
  "pr_ready_evidence": {
    "build": "yarn build — OK",
    "lint": "eslint + stylelint — clean",
    "stories_a11y": "run-story-tests — 12 passed",
    "html_parity": "verified — markup matches render",
    "visual": "VISUAL_PASS"
  },
  "open_questions": []
}
```

Notes:
- `dist_paths` point at the locally built UMD/dist artifact(s) — Webspark
  local-build+links these (see the Webspark `unity-consume` skill).
- Keep `markup.html` authoritative for Twig parity; Webspark verifies against it.

## Interactivity contract (mandatory for interactive components)

`markup.html` captures *structure*, not *behavior*. When the Webspark stage
reproduces the component as a Twig template + `Drupal.behaviors`, it must not
reinvent the interaction model — so the handoff MUST carry an `interactivity`
block for any component with state, keyboard handling, or dynamic ARIA.

Populate it from the locked design document (state machine, activation model,
keyboard/APG pattern, focus management, dynamic ARIA, class-toggle contract,
motion/forced-colors behavior, breakpoint behavior, and analytics timing) —
these are decisions the Unity stage already made and must not be re-derived
downstream. Reference the exact design-doc sections in `design_doc_refs`. If the
component is purely static (no JS behavior), set `"interactivity": {"summary":
"static; no interactive behavior"}`.

## Validate before finishing

```bash
.kiro/scripts/validate-handoff.sh ../handoff/<anchor>/handoff.json
```

The validator checks required fields, that `dist_paths` is non-empty, that the
referenced `markup.html` exists, and that `pr_ready_evidence` is present. Only a
valid handoff completes the Unity stage.
