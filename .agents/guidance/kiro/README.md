# Unity Adversarial Coding Pipeline (Stage A)

Self-contained, project-local agent pipeline that takes a component request and
produces a **PR-ready** Unity component, then writes a handoff for the Webspark
stage. Seeded once from `ddt-agent-skills-library-foundry` and owned here.

**Agents stop at a branch + commits. You open the PR.**

## Shared resources and Kiro adapters

| Canonical path | Purpose |
|---|---|
| `.agents/adapters/kiro/agents/acp-*.json` | Kiro registrations for the five pipeline roles |
| `.agents/roles/*.md` | shared role prompts |
| `.agents/skills/` | shared foundry and ASU skills |
| `.agents/config/mcp-servers.json` | canonical Atlassian, Figma, and Storybook MCP inventory |
| `.agents/guidance/kiro/unity-pipeline.md` | how the agents run this stage |
| `.agents/hooks/` | reviewer write-block and phase log commands |
| `.agents/scripts/preflight.sh` | readiness probe |
| `.agents/scripts/validate-handoff.sh` | handoff schema validator |

The `.kiro/` directory contains lightweight links to these resources so Kiro
IDE, Kiro CLI, and Kiro Crew continue to use their native project paths.

## One-time setup (per developer)

1. **Tools**: Node + Yarn (Volta ok), `jq`, `gh`. Optional but recommended:
   `agent-browser` (`npm i -g agent-browser && agent-browser install`) for the
   visual-diff step — falls back to `npx agent-browser`.
   - **Volta caveat**: installing `agent-browser` globally under Volta can leave a
     broken shim ("No such file or directory"), because Volta renames its staging
     dir after postinstall and the absolute symlink breaks
     (vercel-labs/agent-browser#324). Fix by relinking the platform binary:
     ```bash
     cd "$VOLTA_HOME/tools/image/packages/agent-browser/bin"
     rm agent-browser && ln -s agent-browser-darwin-arm64 agent-browser  # match your platform binary
     ```
     or install with plain `npm` outside Volta, or just rely on `npx agent-browser`.
2. **Env vars** (never commit secrets):
   ```bash
   export JIRA_API_TOKEN=...        # Jira/Confluence API token
   export CONFLUENCE_API_TOKEN=...  # (same token is fine)
   export JIRA_USERNAME="you@asu.edu"        # Atlassian account; also used by the Jira v3 REST fallback
   export CONFLUENCE_USERNAME="you@asu.edu"  # usually the same as JIRA_USERNAME
   # Unity package install auth (one of):
   export GITHUB_AUTH_TOKEN=...     # GitHub Package Registry token for @asu packages
   #   …or create .env.yarn with GITHUB_AUTH_TOKEN=... (see .env.yarn.example)
   ```
3. **Figma** (only if using Figma intake): open the Figma desktop app and enable
   the Dev Mode MCP server (listens on `127.0.0.1:3845`).
4. **Probe**: `bash .agents/scripts/preflight.sh` — resolve any FAIL before running.

## Run a job

1. (Optional) drop reference screenshots into `.intake/` (multiple allowed:
   states, breakpoints, variants).
2. Start the orchestrator:
   ```bash
   kiro-cli --agent acp-orchestrator
   ```
3. Give it a **component name** (required) plus any of: a Jira key, a Figma URL,
   "see .intake/", or a description. It will ask clarifying questions.
4. **Approve the design doc** when prompted (the one human gate). Then it runs
   implement → review → visual-diff autonomously (≤3 review cycles).
5. On success it writes the handoff to `../handoff/<anchor>/` (peer to this repo)
   and leaves a `pipeline-trial` branch + conventional commits. Open the PR
   yourself.

Tip: `/context show` in the session lists the loaded steering + skills.

## PR-ready gate

`yarn build` clean · ESLint + Stylelint clean · `run-story-tests`
(interaction + a11y) pass · HTML-parity verified · `VISUAL_PASS`.

## Handoff

`../handoff/<anchor>/handoff.json` (+ `markup.html`). `<anchor>` is the Jira key
if present, else the component slug. The Webspark repo's Stage B consumes it.
Validate manually with `.agents/scripts/validate-handoff.sh <path>`.

## Notes

- Models are foundry defaults (Opus architect/orchestrator, Sonnet coder, GPT
  reviewer, Sonnet vision). The reviewer uses a non-Anthropic family on purpose
  for adversarial model diversity. If a model id isn't available in your Kiro, it falls
  back to the default — adjust `model` in
  `.agents/adapters/kiro/agents/acp-*.json` as needed.
- `asu-brand` / `asu-design-a11y` are shared with Webspark (this copy is
  canonical). `asu-brand` is a candidate to upstream to the foundry later.
