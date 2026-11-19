---
name: architecture-lock
description: Use this skill after problem framing to produce a locked architecture document. Creates data flow diagrams, state machines, error paths, test matrices, and bite-sized task breakdowns.
---

# Architecture Lock

After problem framing is complete, produce a design document that locks the architecture. Once approved by the human, no architectural changes without explicit re-approval.

## Design Document Structure

### 1. Data Flow Diagram (ASCII)
Show how data moves through the system. Include entry points, processing steps, storage, output channels, and error paths.

### 2. State Machine (if stateful)
Define all states and transitions. For each transition: trigger condition, side effects, reversibility. Terminal states explicitly marked.

### 3. Error Paths
For each component: what errors can occur, how detected, recovery strategy, user-visible impact.

### 4. Test Matrix

| Behavior | Test Level | Boundary / Seam | Test Double Strategy | Verification Command | Failure Mode Covered |
|----------|-----------|----------------|---------------------|---------------------|---------------------|
| [observable behavior] | unit / component / contract / integration / e2e / characterization / regression | none / function parameter / adapter / port / DI / local service / temp resource | real / fake / stub / spy / mock | [exact command] | [edge or error path] |

Define a seam only when the behavior needs one for determinism, speed, safety, or observability. Use the simplest valid strategy:
1. Real dependency when fast, local, deterministic, and safe.
2. Fake when realistic behavior matters.
3. Stub when canned responses are enough.
4. Spy/mock only when verifying an outbound interaction is the behavior under test.
5. Contract or integration test when fake/stub assumptions can drift.

Do not require an interface/trait/protocol solely because a dependency exists.

### 5. Task Breakdown
Break into subtasks (2-5 minutes each):

```
Task 1: [Title]
  Files: [exact paths]
  Code: [exact code to write]
  Test: [exact test command]
  Depends on: [none or task N]
```

Rules: no placeholders, every task has a verification command, dependencies explicit, each task independently committable.

### 6. Security Considerations
Auth/authz requirements, input validation boundaries, data exposure risks, trust boundaries.

### 7. Performance Considerations
Expected load, bottleneck analysis, caching strategy, resource limits.

### 8. Behavioral Matrix (Interactive Components)

For components with user interaction (carousels, tabs, accordions, card stacks, etc.), define:

| User Action | Current State | Next State | Visual Change | Animation |
|-------------|---------------|------------|---------------|-----------||
| Click card N | Card M active | Card N active | Card N moves to front | translateX transitions |
| ArrowLeft | Card N active | Card N-1 active (clamped) | Previous card moves to front | 0.3s ease-out |
| ArrowRight | Card N active | Card N+1 active (clamped) | Next card moves to front | 0.3s ease-out |

**Positioning Formula** (for fanned/stacked layouts):
- `offset = index - activeIndex`
- `translateX = offset * spacing` (e.g., 60px)
- `rotation = offset * angle` (e.g., 8deg)
- `zIndex = totalCards - Math.abs(offset)`

This prevents ambiguity in implementation — the coder should not have to guess behavioral intent.

## Lock Protocol

1. Present design document to human for approval
2. If approved → architecture is LOCKED
3. Coder implements against this locked spec
4. Reviewer validates against this locked spec
5. Changes require explicit human re-approval

## Scope Decision

Before locking, state your scope decision:
- **Expansion:** Request is too small. Here's what it should include.
- **Selective Expansion:** Adding [X] and [Y] that weren't requested but are necessary.
- **Hold Scope:** Request is well-scoped. Proceeding as-is.
- **Reduction:** Request is too ambitious. Proposing phases.

## Output

Write the complete design document to `.pipeline/design-doc.md`.
