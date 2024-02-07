// @ts-check
import PropTypes from "prop-types";
import React from "react";

import { sanitizeDangerousMarkup } from "../../../../../../../shared";

/**
 * @param {{content: string}} props
 * @returns {JSX.Element}
 */
function CustomText({ content = "" }) {
  return (
    <div
      data-testid="custom-text"
      className="mt-3"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={sanitizeDangerousMarkup(content)}
    />
  );
}

CustomText.propTypes = {
  content: PropTypes.string,
};

export { CustomText };
