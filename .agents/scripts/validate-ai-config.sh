#!/usr/bin/env bash
set -euo pipefail

REPO_ROOT="$(git rev-parse --show-toplevel)"
cd "$REPO_ROOT"

fail() {
  printf 'FAIL: %s\n' "$1" >&2
  exit 1
}

expect_link() {
  local path="$1"
  local target="$2"

  [[ -L "$path" ]] || fail "$path must be a symbolic link"
  [[ "$(readlink "$path")" == "$target" ]] ||
    fail "$path must point to $target"
  [[ -e "$path" ]] || fail "$path points to a missing target"
}

expect_link .kiro/agents ../.agents/adapters/kiro/agents
expect_link .kiro/hooks ../.agents/hooks
expect_link .kiro/scripts ../.agents/scripts
expect_link .kiro/settings ../.agents/adapters/kiro/settings
expect_link .kiro/skills ../.agents/skills
expect_link .kiro/steering ../.agents/guidance/kiro

jq -e . .agents/config/mcp-servers.json >/dev/null
jq -e . .agents/config/agent-hosts.json >/dev/null

for agent in .agents/adapters/kiro/agents/acp-*.json; do
  jq -e . "$agent" >/dev/null
done

if command -v kiro-cli >/dev/null 2>&1; then
  for agent in .kiro/agents/acp-*.json; do
    kiro-cli agent validate --path "$agent"
  done
fi

node .agents/scripts/sync-ai-config.mjs --check

if command -v codex >/dev/null 2>&1; then
  codex mcp list >/dev/null
fi

for role_file in .agents/roles/*.md; do
  role="$(basename "$role_file" .md)"
  [[ -f ".codex/agents/$role.toml" ]] || fail "missing Codex $role adapter"
  grep -q '^name = ' ".codex/agents/$role.toml" ||
    fail ".codex/agents/$role.toml is missing a name"
  grep -q '^developer_instructions = ' ".codex/agents/$role.toml" ||
    fail ".codex/agents/$role.toml is missing developer instructions"
  [[ -f ".github/agents/$role.agent.md" ]] ||
    fail "missing Copilot $role adapter"
done

for skill in .agents/skills/*/SKILL.md; do
  grep -q '^name:' "$skill" || fail "$skill is missing a name"
  grep -q '^description:' "$skill" || fail "$skill is missing a description"
done

printf 'AI configuration adapters are valid.\n'
