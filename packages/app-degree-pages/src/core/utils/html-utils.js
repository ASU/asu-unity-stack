// @ts-check

import { sanitize } from "dompurify";

/**
 *
 * @param {string} content
 * @returns {{ __html: string }}
 */
function sanitizeHTML(content) {
  return {
    __html: sanitize(content),
  };
}

export { sanitizeHTML };
