// @ts-check

import { tagHeadingList } from "../models";

/**
 *
 * @param {import("../types/shared-types").ContentItem} title
 */
function parseHeading(title, defaultHeading = "h2") {
  return (
    /** @type {keyof JSX.IntrinsicElements} */
    (
      tagHeadingList.includes(title.component)
        ? title.component
        : defaultHeading
    )
  );
}

export { parseHeading };
