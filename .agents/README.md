# Shared AI agent resources

This directory is the canonical, tool-neutral source for repository AI
workflows. Keep reusable instructions here and keep host-specific directories
such as `.kiro/`, `.codex/`, and `.github/` limited to registration, permissions,
frontmatter, and event wiring.

## Layout

- `skills/` — shared Agent Skills (`SKILL.md` plus any supporting resources).
- `roles/` — shared prompts plus portable capability, model-profile, skill,
  hook, delegation, write-scope, shortcut, and welcome-message metadata.
- `guidance/` — detailed repository and pipeline guidance.
- `hooks/` — reusable hook command implementations.
- `scripts/` — pipeline setup, validation, and archival commands.
- `config/` — canonical integration inventories; MCP definitions are edited here.
- `adapters/kiro/` — Kiro-specific agent and MCP registrations.

## Supported hosts

- **Kiro IDE, CLI, and Crew:** `.kiro/` links to the shared resources and Kiro
  adapter files.
- **Codex:** `.codex/` registers Codex agents and MCP servers; Codex discovers
  skills directly from `.agents/skills/`.
- **GitHub Copilot:** `.github/` supplies repository/path instructions and custom
  agents; Copilot also discovers `.agents/skills/` directly.

The root `AGENTS.md` remains the canonical always-on repository guide.

## Extension points

Claude Code, Gemini, Cursor, and Windsurf are not configured by this change.
If one is adopted, add only its thin host adapter and continue referencing this
directory rather than copying role, skill, script, or guidance content.

## Editing rule

Edit reusable content under `.agents/`. Do not replace the links under `.kiro/`
with copied directories. Host-specific schemas belong only in their adapter
directories.

After changing shared roles or MCP configuration, run:

```bash
node .agents/scripts/sync-ai-config.mjs
bash .agents/scripts/validate-ai-config.sh
```

`.agents/config/mcp-servers.json` is the single hand-edited MCP source. Kiro
links directly to it; the synchronizer renders Codex's required TOML format.
`.agents/config/agent-hosts.json` maps portable model profiles, capabilities,
and lifecycle hooks to each host's native features or prompt fallback.

Each Markdown file under `.agents/roles/` is the canonical role prompt and
capability contract. The synchronizer generates matching Kiro, Codex, and
GitHub Copilot adapters. Adding or removing a role adds or removes all three
generated adapters on the next sync. Host-specific adapters without the
generated marker are preserved. The pre-commit hook and validator fail with
the sync command when generated output is stale.

Host mappings favor native enforcement. Kiro receives its model, tool approval,
write-path settings, lifecycle hooks, delegated agents, keyboard shortcut, and
welcome message. GitHub Copilot receives native tool aliases and agent
delegation; unsupported hooks, write scopes, and model intent remain explicit
in its prompt. Codex receives its mapped model and reasoning effort plus the
same capability contract; repository and session permissions remain the final
authority. A host-specific adapter may add capabilities only when it remains
clearly marked as unmanaged.
