---
name: review-fix-loop
description: Use this skill when addressing review findings from the reviewer-agent. Maps every finding to a specific code change and verification evidence.
---

# Review Fix Loop

Close review rounds systematically by mapping every finding to a code change and proof.

## Execution Loop

1. **Parse** — categorize findings by severity (P1/P2/P3) and type (AUTO-FIX/ASK/INVESTIGATE)
2. **Build closure table** — one row per finding, planned change identified BEFORE editing
3. **Implement** — fix the smallest coherent batch
4. **Verify narrowly** — run targeted tests for each fix
5. **Update closure table** — record verification command and result
6. **Verify broadly** — run full test suite and lint

## Closure Table

Build this before making any changes:

| # | Finding | Severity | Type | File(s) | Planned Fix | Evidence Type | Verify Command | Result |
|---|---------|----------|------|---------|-------------|--------------|----------------|--------|
| 1 | [desc] | P1 | AUTO | [path] | [what] | [type] | [cmd] | |

Evidence types: `red-test`, `green-test`, `lint`, `typecheck`, `integration`, `contract`, `manual-inspection`, `not-run-with-risk`

Fill the Result column AFTER each fix is verified. A finding is not closed by prose — it is closed by code change plus evidence. For test-fidelity findings, closure must include either improved behavior test, reduced mock coupling, fake/contract/integration coverage, or documented justification for current test double.

## Verification Ladder

Work from narrow to broad:
1. **Narrow** — unit test for the specific function touched
2. **Medium** — compile, lint, type-check for touched files
3. **Broad** — full test suite, project-level checks

## Handling ASK Items

Do NOT guess — batch them and report to the orchestrator with your analysis and recommendation.

## Handoff

```
## Review Fix Report
**Findings addressed:** N of M
**Closure table:** [completed table]
**Verification evidence:** [commands and results]
**Open items:** [ASK/INVESTIGATE items pending]
**Residual risk:** [anything needing follow-up]
```
