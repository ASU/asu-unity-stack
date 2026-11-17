#!/bin/bash
# Log phase transitions to .pipeline/phase-log.jsonl
# Used as a stop hook on the orchestrator agent.
# Receives JSON on STDIN with assistant_response field.
INPUT=$(cat)
TIMESTAMP=$(date -u +"%Y-%m-%dT%H:%M:%SZ")
RESPONSE=$(echo "$INPUT" | python3 -c "import sys,json; d=json.load(sys.stdin); print(d.get('assistant_response','')[:200])" 2>/dev/null || echo "")
mkdir -p .pipeline
echo "{\"timestamp\":\"$TIMESTAMP\",\"summary\":$(python3 -c "import json,sys; print(json.dumps(sys.argv[1]))" "$RESPONSE" 2>/dev/null || echo '""')}" >> .pipeline/phase-log.jsonl
