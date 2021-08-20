// @ts-check

import { tagHeadingList } from "../models";

/**
 *
 * @param {import("../models/shared-types").AppTitleProps} title
 * @returns
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
