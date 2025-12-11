// @ts-check
import DOMPurify from "dompurify";

// Lazy initialization of DOMPurify to support server-side rendering
let DOMPurifyInstanceServerCompatible = null;

function getDOMPurifyInstance() {
  if (!DOMPurifyInstanceServerCompatible) {
    // Initialize DOMPurify with the current window (browser or JSDOM)
    if (typeof window !== "undefined") {
      DOMPurifyInstanceServerCompatible = DOMPurify(window);
    } else {
      // Fallback for environments without window
      DOMPurifyInstanceServerCompatible = DOMPurify;
    }
  }
  return DOMPurifyInstanceServerCompatible;
}

/**
 * @typedef {{
 *  focus: () => void
 * } & Element } FocusableElement
 * @param {string} targetSelector
 * @returns {FocusableElement | null}
 */
function queryFirstFocusable(targetSelector) {
  const target = targetSelector
    ? document.querySelector(targetSelector)
    : document;

  if (!target) return null;

  /** @type {FocusableElement | null} */
  const focusable = target.querySelector(
    'button, [href], input, select, textarea, [tabIndex]:not([tabIndex="-1"])'
  );

  return focusable;
}
/**
 * @param {string} content
 * @returns {Object}
 */
export const sanitizeDangerousMarkup = content => {
  const purify = getDOMPurifyInstance();
  return { __html: purify.sanitize(content) };
};

export { queryFirstFocusable };
