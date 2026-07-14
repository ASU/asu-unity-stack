#!/usr/bin/env bash
#
# preflight.sh — readiness probe for the adversarial coding pipeline.
#
# Non-destructive. Verifies required tools, project-local MCP config validity,
# and required environment variables before a pipeline run. Stage is
# auto-detected from repo markers (lerna.json => unity, .ddev => webspark) or
# can be forced with: preflight.sh unity | webspark
#
# Exit status: 0 if all REQUIRED checks pass; 1 otherwise. WARN never fails.
set -uo pipefail

REPO_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/../.." && pwd)"
MCP_JSON="$REPO_ROOT/.vscode/mcp.json"

# ---- stage detection -------------------------------------------------------
STAGE="${1:-auto}"
if [ "$STAGE" = "auto" ]; then
  if [ -f "$REPO_ROOT/lerna.json" ]; then STAGE="unity"
  elif [ -f "$REPO_ROOT/.ddev/config.yaml" ]; then STAGE="webspark"
  else STAGE="unknown"; fi
fi

FAIL=0
pass() { printf '  \033[32mPASS\033[0m  %s\n' "$1"; }
warn() { printf '  \033[33mWARN\033[0m  %s\n' "$1"; }
fail() { printf '  \033[31mFAIL\033[0m  %s\n' "$1"; FAIL=1; }

have() { command -v "$1" >/dev/null 2>&1; }

check_tool_required() { if have "$1"; then pass "tool: $1 ($(command -v "$1"))"; else fail "tool: $1 not found — $2"; fi; }
check_tool_optional() { if have "$1"; then pass "tool: $1 ($(command -v "$1"))"; else warn "tool: $1 not found — $2"; fi; }
check_env_required()  { if [ -n "${!1:-}" ]; then pass "env: $1 is set"; else fail "env: $1 unset — $2"; fi; }

echo "==> Pipeline preflight  (repo: $REPO_ROOT, stage: $STAGE)"

# ---- core tools (all stages) ----------------------------------------------
echo "-- core tools"
check_tool_required git  "install via xcode-select or brew"
check_tool_required node "install Node via Volta/nvm/brew"
check_tool_required npx  "ships with Node"
check_tool_required jq   "brew install jq"
check_tool_optional agent-browser "needed for visual-diff; falls back to 'npx agent-browser'"

# ---- stage-specific tools --------------------------------------------------
echo "-- stage tools"
case "$STAGE" in
  unity)
    check_tool_required yarn "corepack enable / brew install yarn"
    check_tool_optional gh   "GitHub PRs are opened manually, but gh helps"
    ;;
  webspark)
    check_tool_required ddev "brew install ddev/ddev/ddev"
    ;;
  *)
    warn "unknown stage — skipping stage-specific tool checks"
    ;;
esac

# ---- project-local MCP config ---------------------------------------------
echo "-- project-local MCP"
if [ -f "$MCP_JSON" ]; then
  if jq empty "$MCP_JSON" >/dev/null 2>&1; then
    pass "mcp.json present and valid JSON ($MCP_JSON)"
    servers="$(jq -r '.servers | keys[]' "$MCP_JSON" 2>/dev/null | tr '\n' ' ')"
    [ -n "$servers" ] && pass "mcp servers: $servers"
    # Every $VAR referenced in mcp.json must be exported in the environment.
    for var in $(grep -oE '\$[A-Z_][A-Z0-9_]+' "$MCP_JSON" | tr -d '$' | sort -u); do
      check_env_required "$var" "referenced by $MCP_JSON"
    done
  else
    fail "mcp.json present but INVALID JSON ($MCP_JSON)"
  fi
else
  fail "mcp.json missing — expected $MCP_JSON (project-local MCP, not global)"
fi

# ---- required env vars (stage-specific) -----------------------------------
echo "-- required env"
# In the Copilot flow, Jira/Confluence credentials are supplied as VS Code MCP
# inputs (see .vscode/mcp.json), not env vars — so this is a WARN, not a FAIL.
# The env vars are only needed for the optional Jira-post step in archive-reports.sh.
if [ -n "${JIRA_API_TOKEN:-}" ]; then
  pass "env: JIRA_API_TOKEN is set (enables archive-reports.sh Jira attach)"
else
  warn "env: JIRA_API_TOKEN unset — Jira intake uses VS Code MCP inputs; only archive-reports.sh Jira attach needs this env var"
fi
if [ "$STAGE" = "unity" ]; then
  if [ -n "${GITHUB_AUTH_TOKEN:-}" ] || [ -f "$REPO_ROOT/.env.yarn" ]; then
    pass "Unity package auth: GITHUB_AUTH_TOKEN set or .env.yarn present"
  else
    fail "Unity package auth: set GITHUB_AUTH_TOKEN or create .env.yarn (needed to install @asu packages)"
  fi
fi

# ---- optional liveness pings (never fail) ---------------------------------
echo "-- optional liveness (agents start these as needed)"
ping_http() { curl -sf -o /dev/null --max-time 2 "$1" 2>/dev/null; }
if [ "$STAGE" = "unity" ]; then
  for port in 9200 9000; do
    if ping_http "http://localhost:$port"; then pass "Storybook reachable on :$port"; else warn "Storybook not up on :$port (start with yarn storybook when needed)"; fi
  done
fi
if ping_http "http://127.0.0.1:3845/mcp"; then pass "Figma Dev Mode MCP reachable (:3845)"; else warn "Figma Dev Mode MCP not reachable (:3845) — open Figma desktop + Dev Mode MCP when using Figma intake"; fi

echo
if [ "$FAIL" -eq 0 ]; then
  echo "==> preflight: ALL REQUIRED CHECKS PASSED"
else
  echo "==> preflight: REQUIRED CHECKS FAILED — resolve the FAIL items above"
fi
exit "$FAIL"
