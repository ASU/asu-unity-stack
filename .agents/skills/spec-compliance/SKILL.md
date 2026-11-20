---
name: spec-compliance
description: "Phase 1 of code review: verify the implementation matches the architect's design document exactly."
---

# Spec Compliance (Phase 1)

Compare the implementation against the design document line by line.

## DO
- Read actual code, not the coder's description of it.
- Check every requirement in the design document has a corresponding implementation.
- Check no extra features were added beyond the spec (YAGNI).
- Verify test coverage matches the test matrix from the design document.
- Check file organization matches the plan.

## DO NOT
- Trust the coder's report. Verify independently.
- Accept "it works" without seeing the test that proves it.
- Let missing requirements slide because the code "looks good."

## Output

PASS or SPEC_GAPS with file:line references for each gap.

If SPEC_GAPS found → report immediately. Do not proceed to Phase 2 until Phase 1 passes. You cannot review the quality of code that solves the wrong problem.

## Test Matrix Compliance

For each test matrix row, verify:
- Required behavior has a corresponding test
- Test level matches the design or the deviation is justified
- Boundary/seam matches the design
- Test double strategy matches the design (real/fake/stub/mock)
- Verification command was run or explicitly marked unavailable

If the implementation uses mocks where the design specified real/fake/stub, report SPEC_GAP.
If the implementation adds interfaces not in the design, report SPEC_GAP unless justified by a design amendment.
