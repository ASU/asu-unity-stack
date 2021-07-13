// @ts-check

/**
 * @typedef {{
 *  focus: () => void
 * } & Element } FocusableElement
 * @param {string} targetSelector
 * @returns {FocusableElement}
 */
function queryFirstFocusable(targetSelector) {
  const target = targetSelector
    ? document.querySelector(targetSelector)
    : document;

  /** @type {FocusableElement} */
  const focusable = target.querySelector(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );

  return focusable;
}

export { queryFirstFocusable };
