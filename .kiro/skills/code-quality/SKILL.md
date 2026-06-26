---
name: code-quality
description: Evaluate code structure, maintainability, and engineering standards alongside adversarial review.
---

# Code Quality Review

Evaluate structural quality, maintainability, and engineering standards.

## Evaluation Dimensions

### 1. Code Structure
- Single Responsibility: each function/method does one thing?
- Open/Closed: behavior extendable without modifying existing code?
- Interface Segregation: interfaces focused, no "god interfaces"?
- Dependency Inversion: modules depend on abstractions, not concretions?

### 2. Naming
- Descriptive and unambiguous? Boolean variables phrased as questions?
- Abbreviations avoided? Constants in SCREAMING_SNAKE_CASE?

### 3. Error Handling
- Errors propagated with context? Types specific (not just String)?
- Error paths tested? Recoverable vs unrecoverable distinguished?

### 4. File Organization
- Each file has clear single responsibility? Files under 500 lines?
- New files follow existing project patterns?

### 5. Documentation
- Public APIs have doc comments? Complex algorithms explained?
- "Why" comments present where non-obvious? Comments accurate (not stale)?

### 6. Testing Quality
- Tests verify behavior, not implementation?
- Test names descriptive? Edge cases covered?
- Tests independent (no shared mutable state)?

### 7. Testability and Seam Quality
- Are dependencies explicit where needed?
- Are seams minimal, or did the implementation introduce abstraction ceremony?
- Are interfaces focused and domain-meaningful, not test-only?
- Could a function parameter, adapter, fake, or temp resource be simpler than a new interface?
- Do tests verify observable behavior rather than implementation choreography?

## Output Format

```
## Code Quality Assessment
### Strengths
- [What's done well]
### Issues
- [P2] [Category]: [Description] | File: [path:line] | Fix: [suggestion]
- [P2] Testability: Excessive interface extraction for test-only reasons | File: [path:line] | Fix: [suggestion]
- [P2] Testing: Mock-heavy test hides behavior that a fake or integration test should cover | File: [path:line] | Fix: [suggestion]
- [P3] [Category]: [Description] | File: [path:line] | Fix: [suggestion]
- [P3] Design: Simpler seam available than current abstraction | File: [path:line] | Fix: [suggestion]
### Assessment: [GOOD / ACCEPTABLE / NEEDS_WORK]
```

Code quality issues are P2 or P3, never P1. P1 is reserved for correctness and security.
