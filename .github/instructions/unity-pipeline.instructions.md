---
name: Unity Adversarial Pipeline Steering
description: "Always-on steering for the Unity Stage A adversarial coding pipeline. Governs how the orchestrator/architect/coder/reviewer/visual agents run: intake, plan approval gate, TDD implement, 3-phase review, PR-ready gate, handoff, and hard stop conditions. Use for any Unity component build/update in asu-unity-stack."
applyTo: "**"
---

# Unity Stage — Adversarial Pipeline Steering

This repo runs **Stage A** of the two-stage Unity → Webspark pipeline. The goal
is a **PR-ready** Unity component; a human opens the PR. Pattern:
orchestrator → architect → coder → reviewer, model-diverse, one approval gate.

The pipeline is available as custom agents in `.github/agents/` (invoke
`acp-orchestrator` to run the full flow) and skills in `.github/skills/`.

## Flow (orchestrator)

1. **INTAKE** — use the `jira-figma-intake` skill. A **component name is always
   required**; a Jira key, a Figma URL, and/or screenshots in `.intake/` are
   optional. Produce `.pipeline/intake-brief.md` and confirm with the user.
2. **PLAN [approval gate]** — architect uses `office-hours` + `architecture-lock`
   and MUST consult the ASU skills: `unity-components` (framework),
   `asu-design-a11y` (design), `asu-brand` (brand). Name them and their
   validators in `.pipeline/design-doc.md`. **Wait for human approval.**
3. **IMPLEMENT** — coder uses `tdd-red-green`; follows `unity-components`
   (TS-first in `unity-react-core`, tokens from `_custom-asu-variables.scss`,
   HTML-parity, GA preservation). Writes `.pipeline/impl-report.md`.
4. **REVIEW** — reviewer runs the 3-phase review; then invoke **acp-visual** for
   visual fidelity vs `.intake/` images and the Figma frame
   (`.pipeline/visual-report.md`). Loop coder↔reviewer up to 3 cycles.
5. **GATE + HANDOFF** — use `unity-handoff-out`: enforce build+lint,
   `run-story-tests` (interaction+a11y), HTML-parity, and `VISUAL_PASS`; then
   write `../handoff/<anchor>/{handoff.json,markup.html}` and validate it with
   `.github/scripts/validate-handoff.sh`.
6. **RETAIN** — the ephemeral `.pipeline/` reports are not committed. Preserve
   them: run
   `.github/scripts/archive-reports.sh --slug <slug> [--jira <KEY>] --stage unity`.
   It copies the reports to `.pipeline/archive/<slug>-<UTC>/` (persists locally,
   git-ignored, never overwritten) and — when a Jira key exists — attaches them
   and posts a summary comment to the ticket via the Jira v3 REST API.

## Environment

Agents bring up what they need. Start the component's Storybook on demand
(`cd packages/<pkg> && yarn storybook`) before `run-story-tests` or visual
capture. MCP is configured in `.vscode/mcp.json`: Atlassian (read-only),
Figma Dev Mode (`127.0.0.1:3845`), and the 8 Storybook servers.

## Stop conditions (hard rules)

- **Agents stop at a branch + conventional commits. Never open a PR, never push
  to `dev`/`master`.** Conventional Commits required (`feat:`, `fix:`, `chore:`…).
- Do not modify `component-header-footer` token assumptions (it is standalone).
- Never hardcode colors/spacing/fonts that a Unity token already defines.
- The reviewer and acp-visual never modify code — they report; the coder fixes.
