---
name: office-hours
description: Use this skill when starting a new coding task or feature request. Frames the problem using six forcing questions before any design or implementation begins.
---



## Questioning Protocol

Ask forcing questions ONE AT A TIME. Do not present all 6 at once.
Wait for each answer before asking the next. Adapt follow-up questions based on previous answers.
Prefer multiple choice options when possible — they are faster to answer and converge on decisions quicker.


# Office Hours — Problem Framing

Before designing or building anything, work through these six forcing questions. Do not skip any. Write your answers as a structured problem statement.

## The Six Forcing Questions

### 1. What problem are we actually solving?
Strip away assumptions and restate in one sentence. Not "build feature X" but "users need to Y because Z."

### 2. Who is affected and how?
Map the stakeholders: who uses this directly, who is affected indirectly, what are their constraints, what do they currently do instead?

### 3. What does success look like?
Define measurable outcomes, not activities. Bad: "Implement caching layer." Good: "Response time drops from 2s to 200ms for repeated queries."

### 4. What are the failure modes?
What if the input is malformed? What if the dependency is unavailable? What's the blast radius? What's the recovery path?

### 5. What's the simplest version that delivers value?
Find the 80/20 — the 20% of work that delivers 80% of value. What can be deferred?

### 6. What are we explicitly NOT doing?
Define boundaries: features out of scope, systems not touched, edge cases not handled in v1.

## Output Format

```markdown
## Problem Statement
[One sentence]

## Stakeholders
[Who and how affected]

## Success Criteria
[Measurable outcomes]

## Failure Modes
[What can go wrong, ordered by blast radius]

## MVP Scope
[Simplest version that delivers value]

## Out of Scope
[What we're explicitly not doing]
```

This feeds into the architecture-lock skill for design document production.
