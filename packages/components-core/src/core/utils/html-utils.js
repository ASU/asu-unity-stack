// @ts-check
import DOMPurify from "dompurify";

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
/**
 * @param {string} content
 * @returns {Object}
 */
export const sanitizeDangerousMarkup = content => {
  return { __html: DOMPurify.sanitize(content) };
};

export { queryFirstFocusable };
