/**
 * quick-links-tokens.js — Storybook-only constants for JS contexts.
 *
 * These two values must be usable as DOM style property strings in stories.
 * The canonical source for each value is documented below. If the token
 * value changes, update it here and in the linked SCSS variable only.
 *
 * WWWCMS-235
 */

/**
 * Outer focus-ring color used in box-shadow assertions.
 * Source: --hp-focus-outer in packages/components-homepage/src/scss/_variables.scss,
 *         which resolves to #00baff (rgb(0, 186, 255)).
 * Used for story assertions only; the CSS references var(--hp-focus-outer) directly.
 */
export const FOCUS_RING_OUTER = "rgb(0, 186, 255)";

/**
 * Dark backdrop color for the "plain" story decorator.
 * Source: $asu-gray-1 in unity-bootstrap-theme/src/scss/_custom-asu-variables.scss
 *         (resolves to #191919). The CSS class .hp-quick-links-backdrop--plain uses
 *         this value via $asu-gray-1 directly.
 * Kept here for the AccessibilityPlain inline style which must match the class value
 * so Alfa's contrast arithmetic is consistent.
 */
export const BACKDROP_PLAIN = "#191919";
