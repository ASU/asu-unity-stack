#!/usr/bin/env bash
#
# archive-reports.sh --slug <slug> [--jira <KEY>] [--stage <name>]
#
# Retains the ephemeral .pipeline reports at the end of a pipeline run:
#   1. Copies them to .pipeline/archive/<slug>-<UTC>/ (timestamped, never
#      overwritten, git-ignored — persists locally across runs).
#   2. If --jira <KEY> is given AND $JIRA_USERNAME + $JIRA_API_TOKEN are set,
#      attaches the archived reports to the Jira issue and posts a summary
#      comment via the Jira v3 REST API.
#
# Non-destructive. Jira failures are warnings, not fatal. Run from the repo root.
set -uo pipefail

SLUG=""; JIRA=""; STAGE="${STAGE:-pipeline}"
while [ $# -gt 0 ]; do
  case "$1" in
    --slug)  SLUG="$2"; shift 2 ;;
    --jira)  JIRA="$2"; shift 2 ;;
    --stage) STAGE="$2"; shift 2 ;;
    *) echo "unknown arg: $1" >&2; exit 2 ;;
  esac
done
[ -n "$SLUG" ] || { echo "FAIL: --slug is required"; exit 2; }
[ -d .pipeline ] || { echo "FAIL: no .pipeline/ directory here"; exit 2; }

TS="$(date -u +%Y%m%dT%H%M%SZ)"
DEST=".pipeline/archive/${SLUG}-${TS}"
mkdir -p "$DEST"

REPORTS=(design-doc.md impl-report.md review-report.md visual-report.md phase-log.jsonl)
copied=()
for f in "${REPORTS[@]}"; do
  if [ -f ".pipeline/$f" ]; then cp ".pipeline/$f" "$DEST/$f"; copied+=("$f"); fi
done
if [ "${#copied[@]}" -eq 0 ]; then echo "WARN: no reports found in .pipeline/ to archive"; else
  echo "==> archived ${#copied[@]} report(s) to $DEST: ${copied[*]}"
fi

# --- Optional Jira retention -------------------------------------------------
if [ -z "$JIRA" ]; then
  echo "==> no --jira key; skipping Jira retention (local archive only)"
  exit 0
fi
if [ -z "${JIRA_USERNAME:-}" ] || [ -z "${JIRA_API_TOKEN:-}" ]; then
  echo "WARN: --jira given but JIRA_USERNAME/JIRA_API_TOKEN unset; skipping Jira post"
  exit 0
fi

BASE="${JIRA_URL:-https://asudev.jira.com}"
AUTH="$JIRA_USERNAME:$JIRA_API_TOKEN"

# Attach each archived report (X-Atlassian-Token: no-check required)
att_ok=0
for f in "${copied[@]}"; do
  if curl -sf -u "$AUTH" -H "X-Atlassian-Token: no-check" \
       -F "file=@$DEST/$f" \
       "$BASE/rest/api/3/issue/$JIRA/attachments" >/dev/null 2>&1; then
    att_ok=$((att_ok+1))
  else
    echo "WARN: failed to attach $f to $JIRA"
  fi
done
echo "==> attached $att_ok/${#copied[@]} report(s) to $JIRA"

# Post a short summary comment (ADF)
SUMMARY="Adversarial coding pipeline (${STAGE}) completed for '${SLUG}'. Archived reports: ${copied[*]} (attached to this issue; local copy at ${DEST})."
COMMENT_JSON=$(jq -n --arg t "$SUMMARY" \
  '{body:{type:"doc",version:1,content:[{type:"paragraph",content:[{type:"text",text:$t}]}]}}')
if curl -sf -u "$AUTH" -H "Content-Type: application/json" -X POST \
     --data "$COMMENT_JSON" \
     "$BASE/rest/api/3/issue/$JIRA/comment" >/dev/null 2>&1; then
  echo "==> posted summary comment to $JIRA"
else
  echo "WARN: failed to post comment to $JIRA (token may lack write scope)"
fi
