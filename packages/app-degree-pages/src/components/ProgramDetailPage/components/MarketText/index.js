// @ts-check

import PropTypes from "prop-types";
import React from "react";

import { contentPropShape } from "../../../../core/models/app-prop-types";
import { sanitizeHTML, spreadClasses } from "../../../../core/utils";

/**
 * @typedef {import('../../../../core/models/program-detail-types').IntroContentProps} IntroContentProps
 * @typedef {import('../../../../core/models/shared-types').AppTitleProps} AppTitleProps
 */

/**
 * @param {IntroContentProps} props
 * @returns {JSX.Element}
 */
function MarketText({ contents = [] }) {
  return (
    <div>
      {contents.map((content, index) => (
        <div
          key={`content-${index + 1}`}
          className={`mt-3 ${spreadClasses(content.cssClass)}`}
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={sanitizeHTML(content.text)}
        />
      ))}
    </div>
  );
}

MarketText.propTypes = {
  contents: PropTypes.arrayOf(contentPropShape),
};

export { MarketText };
