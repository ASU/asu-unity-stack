# Decisions Log

Running log of architectural decisions made for the Lit Modernization project.

## 2026-08-26: Framework Selection

**Decision:** Lit framework for web components.
**Rationale:** Charter requirement for universal interoperability. Web components are framework-agnostic.
**Alternatives considered:** Keep React with web component wrappers; vanilla custom elements without Lit.

## 2026-08-26: Tailwind Addition

**Decision:** Add Tailwind CSS alongside Bootstrap reduction.
**Rationale:** Charter goal of CSS aligned to components. Tailwind with token-based config enforces brand.
**Constraint:** Tailwind configured with ONLY UDS token values. Default palette disabled.

## 2026-08-26: Package Name

**Decision:** `@asu/unity-core`
**Rationale:** Positions as the new core of the UDS Code Kit. Replaces unity-react-core over time.

## 2026-08-26: Token Format

**Decision:** JSON as source of truth -> Style Dictionary pipeline.
**Rationale:** Figma Tokens Studio exports JSON; Style Dictionary generates CSS/JS/SCSS; agents can read JSON directly.

## 2026-08-26: Naming Convention

**Decision:** `uds-{category}-{group}-{variant}` for tokens; `uds-{component}` for element tags.
**Rationale:** Semantic over literal (survives rebranding); `on-` prefix for contrast pairs (Material pattern).

## 2026-08-26: Documentation Ownership

**Decision:** Brand team owns Zeroheight (guidelines). Unity team owns Storybook (implementation).
**Rationale:** No duplication. Brand guidelines not in our control. Storybook embeddable in Zeroheight.

## 2026-08-26: Framework Usage Examples

**Decision:** Auto-generated from component tag + properties. Not hand-written.
**Rationale:** Same `<uds-*>` tag everywhere; only variable syntax differs. Zero-maintenance.

## 2026-08-26: Migration Strategy

**Decision:** Incremental (component-by-component), not big-bang.
**Rationale:** Charter risk: "big bang transition complicates ongoing delivery."

## Pending Decisions

- [ ] Brand team kickoff timing
- [ ] Webspark SDC approach
- [ ] Package consolidation timing (A/B/C)
- [ ] Shadow DOM vs. Light DOM policy
- [ ] Tailwind scope (page layout only or also in components?)
- [ ] React app migration path (@lit/react vs direct)
- [ ] Breaking change communication plan
- [ ] Legacy bridge duration
