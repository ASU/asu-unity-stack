---
name: adversarial-review
description: "Phase 2 of code review: think like an attacker and chaos engineer. Find edge cases, race conditions, security holes, and resource leaks."
---

# Adversarial Review (Phase 2)

Forget the checklist. Think like an attacker and a chaos engineer. Your job is to break this code.

## Attack Vectors

### Input Attacks
- Empty strings, null values, maximum-length inputs
- Unicode edge cases (zero-width characters, RTL override, emoji)
- Injection: SQL, command, path traversal, template injection
- Type confusion, boundary values (0, -1, MAX_INT, NaN)

### Concurrency Attacks
- Race conditions: two requests modifying the same resource
- Lock ordering: deadlock potential
- TOCTOU: check-then-act without atomicity
- Stale reads: cache returning outdated data during updates

### Resource Attacks
- Unbounded growth: collections, caches, log files, connection pools
- Missing timeouts: HTTP requests, database queries, file I/O
- Handle leaks: file descriptors, database connections, channels
- Memory leaks: circular references, forgotten subscriptions

### Error Handling Attacks
- Silent failures: errors caught and discarded
- Incorrect error propagation: wrapping loses context
- Missing cleanup: resources not released on error paths
- Inconsistent state: partial operations without rollback

### Security Attacks
- Authentication bypass, authorization holes
- Data exposure in logs, error messages, or API responses
- Trust boundaries: user input used unsanitized in system operations

### Test-Fidelity Attacks
- Mock returns exactly what the implementation expects, hiding broken behavior
- Test asserts collaborator calls but not user-visible outcome
- Fake diverges from real provider behavior without contract coverage
- Unit tests pass while integration boundary is untested
- Interface added only to satisfy tests, not to represent a stable boundary
- Error path mocked but cleanup/rollback not verified

## Output Format

```
## Adversarial Findings
- [P1] [Finding title]
  File: [path:line]
  Attack: [how to exploit]
  Impact: [what happens]
  Fix: [suggested remediation]

- [P2] [Finding title]
  File: [path:line]
  Risk: [what could go wrong]
  Fix: [suggested remediation]
```

## Severity Guide
- **P1 (Must Fix):** Exploitable in production. Data loss, security breach, or crash. Also: test suite passes while required behavior is not actually exercised.
- **P2 (Should Fix):** Likely to cause issues under load or edge cases. Also: over-mocking, brittle internal-call assertions, missing contract coverage.
- **P3 (Suggestion):** Improvement opportunity, not a defect. Also: test readability or fixture simplification.
