---
name: tdd-red-green
description: Use this skill when implementing code. Enforces strict test-driven development with the RED-GREEN-REFACTOR cycle. No production code without a failing test first.
---

# TDD Red-Green-Refactor

## The Iron Law

**No production code without a failing test first.** Non-negotiable.

## The Cycle

### RED: Write a Failing Test
1. Write one minimal test capturing a single behavior from the design document.
2. Choose the narrowest appropriate test level from the design test matrix.
3. Choose the dependency strategy from the test matrix: real if fast/local/deterministic, fake if realistic behavior matters, stub for canned responses, spy/mock only if verifying an outbound interaction.
4. Add only the smallest seam required for that strategy.
5. Run the test suite. The new test MUST fail.
6. Verify the failure reason is correct (not a typo or build error).
7. If the test passes immediately, it proves nothing — delete and rethink.

### GREEN: Make It Pass
1. Write the **simplest** code that makes the failing test pass.
2. Use the seam strategy chosen in RED — do not add more abstraction than the test requires.
3. Do not add features beyond what the test requires.
4. Run the full test suite. ALL tests must pass.

### REFACTOR: Clean Up
1. Remove duplication, improve names, extract abstractions.
2. Ensure seams are minimal — no abstraction ceremony beyond what tests require.
3. Run all tests after each refactor step — they must stay green.
4. Never mix behavior changes with structural changes in the same cycle.

## Testability Rules

- Hidden IO, time, randomness, global state, and network calls are testing smells.
- Make dependencies explicit when they affect determinism, speed, isolation, or observability.
- DI is one seam technique, not the default. Valid seams include function parameters, constructor parameters, adapters, ports, higher-order functions, local fakes, temp resources, and framework test utilities.
- Do not create interfaces solely for tests.
- If using a mock/spy, document why real/fake/stub is not a better fit.
- If a fake might drift from reality, add a contract or integration test.
- If you can't test a function without hitting the network/disk/database, the design is wrong — add an explicit seam.

## Anti-Patterns to Reject

| Anti-Pattern | Why It's Wrong |
|---|---|
| Writing tests after code | Tests adapt to bugs instead of specifying behavior |
| Testing mock behavior | Tests the wiring, not the outcome |
| Adding test-only methods | Design is wrong — refactor the public API |
| Keeping pre-written code | Delete it, write the test, rewrite the code |
| Hidden dependency construction | Can't control it in tests — add an explicit seam |
| Mocking everything | Low-fidelity and brittle. Prefer real/fake/stub when feasible |
| Mocking the system under test | Tests the mock setup, not behavior |
| Asserting internal call sequences | Couples tests to implementation; breaks on harmless refactors |
| Interface per dependency by default | Adds ceremony without improving test value |
| Complex mock setup | Usually means a fake or higher-level test is better |

## Rationalizations to Block

| Rationalization | Response |
|---|---|
| "Too simple to test" | The test takes 30 seconds. Write it. |
| "I'll test after" | Tests pass immediately, proving nothing. |
| "Already manually tested" | Ad-hoc ≠ systematic. Write the test. |
| "This is just a prototype" | Prototypes become production. Test now. |

## Commit Strategy

Each cycle produces one or two commits:
1. `test: add failing test for [behavior]` (RED + GREEN)
2. `refactor: [what was cleaned up]` (only if refactoring happened)
