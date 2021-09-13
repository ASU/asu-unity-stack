// @ts-check
import { sanitizeDangerousMarkup } from "@asu-design-system/components-core";
import PropTypes from "prop-types";
import React from "react";

/**
 * @param {{content: string}} props
 * @returns {JSX.Element}
 */
function CustomText({ content = "" }) {
  return (
    <div
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
