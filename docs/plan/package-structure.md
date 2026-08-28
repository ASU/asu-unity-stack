# Priority 6: Package Consolidation

**Goal:** Merge `unity-bootstrap-theme` + `unity-react-core` into unified `@asu/unity-core`.

## Options

- **A.** Set up new package first, write Lit components there
- **B.** Migrate in existing packages, consolidate after
- **C.** Gradual -- new goes in unity-core, legacy stays until migrated

**Recommendation:** Option C

## Target Structure

```
packages/unity-core/
├── tokens/
├── src/components/
│   ├── button/
│   │   ├── uds-button.ts
│   │   ├── uds-button.stories.ts
│   │   ├── uds-button.test.ts
│   │   └── README.mdx
│   └── ...
├── src/styles/
├── dist/
│   ├── unity-core.js
│   ├── unity-core.css
│   └── components/
├── .storybook/
└── package.json
```

## Tasks

- [ ] Decision: timing (A/B/C)
- [ ] Set up packages/unity-core/
- [ ] Define entry points and exports
- [ ] Build pipeline (individual + bundled)
- [ ] Auto-generate Drupal SDC `*.component.yml` from component metadata
- [ ] Deprecation path for legacy packages

## Dependencies

- Decision on timing
