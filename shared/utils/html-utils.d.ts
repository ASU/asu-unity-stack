export function sanitizeDangerousMarkup(content: string): any;
export type FocusableElement = {
    focus: () => void;
} & Element;
/**
 * @typedef {{
 *  focus: () => void
 * } & Element } FocusableElement
 * @param {string} targetSelector
 * @returns {FocusableElement}
 */
export function queryFirstFocusable(targetSelector: string): FocusableElement;
