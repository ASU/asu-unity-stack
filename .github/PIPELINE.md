# Unity Adversarial Coding Pipeline — GitHub Copilot (Stage A)

Self-contained, project-local **GitHub Copilot** port of the Unity adversarial
coding pipeline. Takes a component request and produces a **PR-ready** Unity
component, then writes a handoff for the Webspark stage.

**Agents stop at a branch + commits. You open the PR.**

This is the Copilot equivalent of the original Kiro setup under `.kiro/`. The two
can coexist; this directory is what VS Code Copilot loads.

## What's in here (`.github/`)

| Path | Purpose | Kiro origin |
|---|---|---|
| `agents/acp-*.agent.md` | orchestrator, architect, coder, reviewer, visual (model-diverse custom agents) | `.kiro/agents/*.json` + `prompts/*.md` |
| `skills/*/SKILL.md` | 15 pipeline + ASU skills | `.kiro/skills/` |
| `instructions/unity-pipeline.instructions.md` | always-on steering (`applyTo: "**"`) | `.kiro/steering/unity-pipeline.md` |
| `hooks/pipeline.json` | `SessionStart` → ensure `.pipeline/` exists | `agentSpawn` hook |
| `hooks/block-code-writes.sh` | `PreToolUse` write-guard for reviewer/visual | `.kiro/hooks/block-reviewer-writes.sh` |
| `hooks/log-phase.sh` | `Stop` → phase log | `.kiro/hooks/log-phase.sh` |
| `scripts/preflight.sh` | readiness probe (points at `.vscode/mcp.json`) | `.kiro/scripts/preflight.sh` |
| `scripts/validate-handoff.sh` | handoff schema validator | `.kiro/scripts/validate-handoff.sh` |
| `scripts/archive-reports.sh` | retain `.pipeline/` reports + Jira attach | `.kiro/scripts/archive-reports.sh` |
| `../.vscode/mcp.json` | MCP: Atlassian (RO), Figma, 8 Storybook servers | `.kiro/settings/mcp.json` |

## Model diversity note

Custom-agent `model:` fields use fallback arrays (e.g. reviewer prefers a
different model family than the coder to keep blind spots independent). VS Code
uses the first available model in the array and **falls back to your picker
default** if none match — adjust the `model:` line in each `agents/acp-*.agent.md`
to models available in your Copilot plan.

## One-time setup (per developer)

1. **Tools**: Node + Yarn (Volta ok), `jq`, `gh`. Optional: `agent-browser`
   (`npm i -g agent-browser && agent-browser install`) for visual-diff — falls
   back to `npx agent-browser`.
2. **Env vars** (never commit secrets): `GITHUB_AUTH_TOKEN` (or `.env.yarn`) for
   installing `@asu` packages. Jira/Confluence credentials are entered as VS Code
   MCP inputs on first Atlassian use (see `.vscode/mcp.json`).
3. **Figma** (only for Figma intake): open the Figma desktop app and enable the
   Dev Mode MCP server (`127.0.0.1:3845`).
4. **Probe**: `bash .github/scripts/preflight.sh` — resolve any FAIL before running.

## Run a job

1. (Optional) drop reference screenshots into `.intake/` (states, breakpoints, variants).
2. In VS Code Copilot Chat, select the **acp-orchestrator** agent (agent picker).
3. Give it a **component name** (required) plus any of: a Jira key, a Figma URL,
   "see .intake/", or a description. It asks clarifying questions.
4. **Approve the design doc** when prompted (the one human gate). Then it runs
   implement → review → visual-diff autonomously (≤3 review cycles), delegating to
   the acp-architect / acp-coder / acp-reviewer / acp-visual subagents.
5. On success it writes the handoff to `../handoff/<anchor>/` (peer to this repo)
   and leaves a branch + conventional commits. Open the PR yourself.

## PR-ready gate

`yarn build` clean · ESLint + Stylelint clean · `run-story-tests`
(interaction + a11y) pass · HTML-parity verified · `VISUAL_PASS`.

## Handoff

`../handoff/<anchor>/handoff.json` (+ `markup.html`). `<anchor>` is the Jira key
if present, else the component slug. Validate with
`.github/scripts/validate-handoff.sh <path>`.

## Copilot ↔ Kiro concept map

| Kiro | GitHub Copilot |
|---|---|
| Steering (`inclusion: always`) | Instructions file (`applyTo: "**"`) |
| Skill (`SKILL.md`) | Skill (`SKILL.md`, same format) |
| Agent JSON + prompt | Custom agent (`.agent.md`) |
| `use_subagent` tool | `agent` tool alias + `agents:` allowlist |
| `fs_read`/`fs_write`/`execute_bash`/`grep`/`glob` | `read`/`edit`/`execute`/`search` |
| `agentSpawn`/`preToolUse`/`stop` hooks | `SessionStart`/`PreToolUse`/`Stop` hooks |
| `.kiro/settings/mcp.json` | `.vscode/mcp.json` |
