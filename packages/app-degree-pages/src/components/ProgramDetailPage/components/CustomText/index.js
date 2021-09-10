// @ts-check
import { sanitizeDangerousMarkup } from "@asu-design-system/components-core";
import PropTypes from "prop-types";
import React from "react";

/**
 * @param {{content: string}} props
 * @returns {JSX.Element}
 */
function CustomText({ content = "" }) {
  debugger
  return (
    <div>
      PIPOOOOO
      <div
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={sanitizeDangerousMarkup(content)}
      />
    </div>
  );
}

CustomText.propTypes = {
  content: PropTypes.string,
};

export { CustomText };
