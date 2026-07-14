#!/usr/bin/env bash
# block-code-writes.sh — PreToolUse write-guard for the reviewer/visual agents.
#
# Reviewers and the visual-diff agent report findings; they never modify code.
# They may only write inside .pipeline/. This hook inspects the PreToolUse input
# on stdin and DENIES any file-editing tool that targets a code path
# (packages/**, src/**, docroot/**). Writes to .pipeline/** are allowed.
#
# Emits a PreToolUse permission decision on stdout. Fails safe: if it can't find
# a code-path target, it stays silent and lets the tool proceed.
set -uo pipefail

INPUT="$(cat)"

# Extract candidate file paths from common edit-tool fields.
paths="$(printf '%s' "$INPUT" | python3 -c '
import sys, json, re
try:
    d = json.load(sys.stdin)
except Exception:
    sys.exit(0)
blob = json.dumps(d)
# Grab anything that looks like a workspace path in the tool input.
for m in re.findall(r"[\w./-]*(?:packages|src|docroot)/[\w./-]+", blob):
    print(m)
' 2>/dev/null || true)"

deny=0
while IFS= read -r p; do
  [ -z "$p" ] && continue
  # Allow anything under .pipeline/
  case "$p" in
    *.pipeline/*) continue ;;
  esac
  case "$p" in
    *packages/*|*src/*|*docroot/*) deny=1 ;;
  esac
done <<< "$paths"

if [ "$deny" -eq 1 ]; then
  cat <<'JSON'
{
  "hookSpecificOutput": {
    "hookEventName": "PreToolUse",
    "permissionDecision": "deny",
    "permissionDecisionReason": "Reviewer/visual agents do not modify code. Report findings with file:line references and suggested fixes; the coder agent implements the fixes. Only .pipeline/ writes are allowed."
  }
}
JSON
fi
exit 0
