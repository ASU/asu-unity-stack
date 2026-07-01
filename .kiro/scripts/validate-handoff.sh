#!/usr/bin/env bash
#
# validate-handoff.sh <path-to-handoff.json>
# Validates a cross-stage handoff manifest (schema v1.0). Non-destructive.
# Exit 0 if valid, 1 otherwise.
set -uo pipefail

HANDOFF="${1:-}"
if [ -z "$HANDOFF" ] || [ ! -f "$HANDOFF" ]; then
  echo "FAIL: handoff file not found: '${HANDOFF:-<none>}'"
  echo "usage: validate-handoff.sh <path-to-handoff.json>"
  exit 1
fi
if ! command -v jq >/dev/null 2>&1; then echo "FAIL: jq not installed"; exit 1; fi
if ! jq empty "$HANDOFF" >/dev/null 2>&1; then echo "FAIL: $HANDOFF is not valid JSON"; exit 1; fi

DIR="$(cd "$(dirname "$HANDOFF")" && pwd)"
ERR=0
req() { # req <jq-filter> <label>
  local v; v="$(jq -r "$1 // empty" "$HANDOFF" 2>/dev/null)"
  if [ -z "$v" ]; then echo "  FAIL: missing $2"; ERR=1; else echo "  ok: $2"; fi
}

echo "==> validating handoff: $HANDOFF"
req '.schema_version'          'schema_version'
req '.anchor'                  'anchor'
req '.component.name'          'component.name'
req '.component.slug'          'component.slug'
req '.component.intent'        'component.intent (new|update)'
req '.unity.branch'            'unity.branch'
req '.pr_ready_evidence'       'pr_ready_evidence'
req '.html_parity_markup_file' 'html_parity_markup_file'

# dist_paths must be a non-empty array
n_dist="$(jq -r '(.unity.dist_paths // []) | length' "$HANDOFF" 2>/dev/null)"
if [ "${n_dist:-0}" -ge 1 ]; then echo "  ok: unity.dist_paths ($n_dist)"; else echo "  FAIL: unity.dist_paths empty"; ERR=1; fi

# referenced markup file must exist next to the manifest
markup="$(jq -r '.html_parity_markup_file // empty' "$HANDOFF" 2>/dev/null)"
if [ -n "$markup" ]; then
  if [ -f "$DIR/$markup" ]; then echo "  ok: markup file present ($markup)"; else echo "  FAIL: markup file missing ($markup)"; ERR=1; fi
fi

# interactivity block (schema >= 1.1): warn if absent so behavior isn't reinvented downstream
if [ -n "$(jq -r '.interactivity // empty' "$HANDOFF" 2>/dev/null)" ]; then
  echo "  ok: interactivity block present"
else
  echo "  WARN: no .interactivity block — Webspark may reinvent behavior (add it for interactive components; schema 1.1)"
fi

echo
if [ "$ERR" -eq 0 ]; then echo "==> handoff VALID"; else echo "==> handoff INVALID"; fi
exit "$ERR"
