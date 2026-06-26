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
  "schema_version": "1.0",
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

## Validate before finishing

```bash
.kiro/scripts/validate-handoff.sh ../handoff/<anchor>/handoff.json
```

The validator checks required fields, that `dist_paths` is non-empty, that the
referenced `markup.html` exists, and that `pr_ready_evidence` is present. Only a
valid handoff completes the Unity stage.
