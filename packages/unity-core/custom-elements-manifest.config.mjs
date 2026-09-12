/**
 * Custom Elements Manifest analyzer config for @asu/unity-core.
 *
 * Generates `custom-elements.json` — the machine-readable source of truth for
 * every uds-* component's public API (properties, attributes, events, slots,
 * CSS custom properties, CSS parts). Consumed by Storybook
 * (setCustomElementsManifest), auto-generated framework-usage docs, and Drupal
 * SDC scaffolding.
 *
 * Run: `yarn analyze`
 */
export default {
  /** Scan every component entry. */
  globs: ['src/components/**/uds-*.ts'],

  /** Keep stories/tests and non-component modules out of the manifest. */
  exclude: ['**/*.stories.ts', '**/*.spec.ts', '**/*.test.ts'],

  /** Emit the manifest at the package root. */
  outdir: '.',

  /**
   * Understand Lit's decorators / reactive properties (attribute name, reflect,
   * type) without extra JSDoc. Equivalent to the `--litelement` CLI flag.
   */
  litelement: true,
};
