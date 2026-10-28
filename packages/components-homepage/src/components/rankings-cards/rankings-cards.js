// rankings-cards.js — progressive-enhancement nav for .hp-rankings sections.
// Package: @asu/components-homepage  ·  Jira: WWWCMS-233
// Design doc: .pipeline/design-doc.md §5
//
// STUB — initRankingsCards body is implemented in Task 3.
// This file exists so Task 1 and Task 2 stories can import without a module-not-found error.

const _ignore = () => {};

/**
 * Wires each `.hp-rankings` under `root` for progressive-enhancement nav.
 * Safe to call repeatedly (idempotent via a module-level WeakSet of sections).
 * @param {Document|Element} [root=document]
 * @returns {function(): void} teardown — removes listeners, observers, and
 *   JS-added classes/attributes from every section this call bound.
 */

export function initRankingsCards(_root = document) {
  // STUB: full implementation in Task 3.
  // Returns a no-op teardown so stories that call teardown() don't throw.
  return _ignore;
}
