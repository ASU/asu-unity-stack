# ASU Unity Design System -- Lit Modernization Plan

**Status:** Draft -- aligned with Lit Modernization Charter
**Charter:** See `charter.md` for authoritative goals, scope, RACI, and measures.

## Priorities

| # | Workstream | Detail Doc | Blocked By |
|---|---|---|---|
| P1 | Design Tokens + Brand Governance | [design-tokens.md](./design-tokens.md) | Brand team alignment |
| P2 | Lit Component Framework | [lit-components.md](./lit-components.md) | P1 |
| P3 | CSS Foundation (Bootstrap reduction + Tailwind) | [css-foundation.md](./css-foundation.md) | P1 |
| P4 | Storybook Rewrite | [storybook.md](./storybook.md) | P2 |
| P5 | Webspark/Drupal Integration (SDC) | [drupal-integration.md](./drupal-integration.md) | P2 |
| P6 | Package Consolidation | [package-structure.md](./package-structure.md) | Decision needed |
| P7 | Agentic Foundations | [agentic.md](./agentic.md) | Nothing |

## Sequencing

```
     Month 1              Month 2-3            Month 4+
┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐
│ P1: Tokens      │  │ P2: Lit comps   │  │ P2: Organisms   │
│ P3: CSS/Tailwind│  │     (atoms +    │  │ P5: SDC (rest)  │
│ P2: Lit infra   │  │     molecules)  │  │ P6: Package     │
│     + POC       │  │ P4: Storybook   │  │     consolidation│
│ P7: Agentic     │  │ P5: SDC (wave 1)│  │                 │
└─────────────────┘  └─────────────────┘  └─────────────────┘
```

## Success Criteria (from Charter)

| Measure | Done When |
|---|---|
| Universal interop | Components work in React, Drupal/Twig, static HTML, SSR |
| Tokens published | JSON compatible with Style Dictionary, Figma Tokens Studio, AI agents |
| Single Storybook | One render mode; legacy stories decommissioned |
| CSS aligned | Tailwind + Lit styles; Bootstrap bloat removed |
| Drupal simplified | Twig = thin `<uds-*>` wrappers; validated SDC |
| Stories migrated | `unity-bootstrap-theme/stories/` decommissioned |
| Agent-ready | Plan in repo; tokens accessible; steering updated |

## Key Decisions Log

See [decisions.md](./decisions.md) for running log of architectural decisions.

## Risks

| Risk | Mitigation |
|---|---|
| Big bang transition | Incremental; legacy stays; per-component validation |
| Brand alignment delays | Start with eng-defined tokens; iterate with Brand |
| Drupal compatibility | Early POC; SDC testing per component |
| Lit learning curve | Start simple; document patterns |
| Shadow DOM limitations | Light DOM where needed; evaluate per component |

## Open Questions

1. Tailwind + Shadow DOM interaction
2. Form participation (ElementInternals)
3. SSR requirements for Webspark
4. React app migration path (@lit/react vs direct)
5. Package consolidation timing
6. Bootstrap removal timeline
7. Legacy support window
