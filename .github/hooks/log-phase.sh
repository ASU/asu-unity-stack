#!/usr/bin/env bash
# log-phase.sh — Stop hook for the orchestrator agent.
# Logs a phase-transition line to .pipeline/phase-log.jsonl.
# Receives JSON on STDIN; records a truncated summary of the assistant response.
INPUT=$(cat)
TIMESTAMP=$(date -u +"%Y-%m-%dT%H:%M:%SZ")
RESPONSE=$(printf '%s' "$INPUT" | python3 -c "import sys,json; d=json.load(sys.stdin); print((d.get('assistant_response') or d.get('response') or '')[:200])" 2>/dev/null || echo "")
mkdir -p .pipeline
printf '{"timestamp":"%s","summary":%s}\n' "$TIMESTAMP" "$(python3 -c 'import json,sys; print(json.dumps(sys.argv[1]))' "$RESPONSE" 2>/dev/null || echo '""')" >> .pipeline/phase-log.jsonl
