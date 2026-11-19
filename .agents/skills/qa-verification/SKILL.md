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

## Browser Interaction Testing (Interactive Components)

For components with user interaction, QA verification includes browser-based testing via Chrome DevTools MCP or agent-browser:

### Required Verifications

1. **Click Navigation**
   - Click each interactive element
   - Screenshot each resulting state
   - Verify state matches Behavioral Matrix from design doc

2. **Keyboard Navigation**
   - Tab into component, verify focus lands correctly
   - ArrowLeft/Right through all items
   - Verify focus ring visible on active element
   - Tab out, verify exit to correct element

3. **Mobile/Touch**
   - Resize to 375×667 (iPhone SE)
   - Verify layout adapts (scroll vs stack)
   - Test swipe gestures if applicable

4. **Accessibility Audit**
   - Run `mcp_chrome_devtoo_lighthouse_audit` with mode="snapshot"
   - Verify Accessibility score ≥ 95 (ideally 100)
   - Document any issues

### Evidence Required
```
## Browser Interaction Results
- Click navigation: [PASS/FAIL with screenshot paths]
- Keyboard navigation: [PASS/FAIL with test sequence]
- Mobile layout: [PASS/FAIL at 375px]
- Lighthouse a11y: [score]
```

## Output

PASS or FAIL with specific test results and evidence.

```
## QA Results
- Test suite: [X passed, Y failed, Z skipped]
- Edge case coverage: [list from design doc, each PASS/FAIL]
- Regressions: [none / list]
- Error path verification: [PASS/FAIL with evidence]
```
