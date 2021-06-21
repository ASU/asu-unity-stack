// @ts-check

import { sanitize } from "dompurify";
import { tagHeadingList } from "../models";

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

/**
 *
 * @param {import("../models/shared-types").AppTitleProps} title
 * @returns
 */
function parseHeading(title, defaultHeading = "h2") {
  return (
    /** @type {keyof JSX.IntrinsicElements} */
    (tagHeadingList.includes(title.component)
      ? title.component
      : defaultHeading)
  );
}

export { sanitizeHTML, parseHeading };
