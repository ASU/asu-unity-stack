# Lit Modernization Charter

> This is the authoritative reference document from management. Do not modify.
> Source: Michael Samuelson (Accountable)

## Business Case and Measurable Goals

| Goal | Measure |
|---|---|
| Universal interoperability | Design system usable by any frontend framework or no framework |
| Design Tokens | Published JSON compatible with Style Dictionary, Figma Tokens Studio, agents |
| Technical debt addressed | Dual render replaced with single web component render |
| CSS aligned | Fewer Bootstrap default/utility bloat; addition of Tailwind |
| Stories migrated | Legacy unity-bootstrap-theme stories decommissioned |
| Simplified handoff | Twig templates = simple wrapper for web component |
| Package consolidation | TBD -- consolidate theme and core package |

## Scope

**In scope:**
- Design token governance, architecture, publishing
- Core UI component rewrites (Lit)
- Storybook rewrites, upgrades, cleanup
- Bundler and packaging rewrites
- Performance analysis
- Universal interoperability efforts
- Updating automated tests
- Validating against Webspark SDC (Drupal Canvas compatibility)

**Out of scope:**
- Redesigning apps/components beyond project goals
- Adding new features unrelated to project goals

## Target Architecture

- **Framework:** Lit (https://lit.dev/)
- **Monorepo:** GitHub (https://github.com/ASU/asu-unity-stack)
- **Registry:** GitHub Packages

## Technical Principles

1. Usable by any frontend framework or no framework
2. Usable by CMS applications (backend)
3. Usable on static hosting, dynamic hosting, serverless/edge, or any combination
4. WCAG 2.1 AA accessibility maintained
5. Design tokens published for agent use

## Key Milestones

1. **Agentic foundations** -- plan added to monorepo
2. **Tokens defined** -- collaboration with Brand team
3. **Token architecture defined**
4. **Tokens implemented**
5. **Bootstrap reduction + Tailwind plan defined**
6. **Bootstrap reduction + Tailwind implemented**
7. **Lit: Theme component**
8. **Lit: Core component**
9. **Lit: Other components**
10. **Quality gates** -- pre-release testing in Webspark + static site
11. **DX review** -- workflow improvements

## RACI

| Role | People |
|---|---|
| **Responsible** | Juan Pablo, Scott Williams, David Ornelas, Michael Webber |
| **Accountable** | Michael Samuelson |
| **Consulted** | Alexander Persky, Cameo Hill, Travis Butterfield; later Joel Longie, Laura Cabre |
| **Informed** | Brand team, Webspark product, Unity DS users, #unity-design-system, Web Community, Megan Henderson, Frank Wilde, Mitchell Jenkins, Kimberly Barrington, Andrew Nelson |

## Governance

- Design Tokens: alignment with Brand on governance and practices
- Breaking changes: communication strategy (TBD with Product)

## Risks

- Big bang transition complicates ongoing delivery -- may require lean team duplicating work in legacy + new
