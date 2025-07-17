// @ts-check
import { sanitizeDangerousMarkup } from "@asu/shared";
import PropTypes from "prop-types";
import React from "react";

/**
 * @param {{content: string}} props
 * @returns {JSX.Element}
 */
function CustomText({ content = "" }) {
  return (
    <div
      data-testid="custom-text"
      className="mt-3"
      dangerouslySetInnerHTML={sanitizeDangerousMarkup(content)}
    />
  );
}

CustomText.propTypes = {
  content: PropTypes.string,
};

export { CustomText };
