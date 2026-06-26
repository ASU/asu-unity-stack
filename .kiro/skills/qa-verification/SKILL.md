---
name: qa-verification
description: "Phase 3 of code review: run tests, verify behavior, check edge cases, confirm no regressions."
---

# QA Verification (Phase 3)

Verify the implementation actually works, not just that the code looks correct.

## Verification Ladder

Work from narrow to broad:

1. Run targeted tests for changed behavior.
2. Check edge/error-path tests from the design document are covered.
3. Run package/module test suite.
4. Run typecheck/lint/build if present.
5. Run full test suite before APPROVED.

If a full suite is too slow or unavailable, report: command not run, reason, risk, and narrower evidence collected.

## Quality Checks

1. Do tests verify behavior or just exercise code paths?
2. Did any previously passing tests break (regressions)?
3. Do error conditions produce correct results?

## Output

PASS or FAIL with specific test results and evidence.

```
## QA Results
- Test suite: [X passed, Y failed, Z skipped]
- Edge case coverage: [list from design doc, each PASS/FAIL]
- Regressions: [none / list]
- Error path verification: [PASS/FAIL with evidence]
```
