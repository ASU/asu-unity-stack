#!/bin/bash
# Block the reviewer agent from writing files.
# Used as a preToolUse hook with matcher "fs_write".
# Exit code 2 = block tool execution, STDERR returned to LLM.
echo "Reviewers do not modify code. Report findings with file:line references and suggested fixes. The coder agent will implement the fixes." >&2
exit 2
