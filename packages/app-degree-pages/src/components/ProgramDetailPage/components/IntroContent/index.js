// @ts-check

import PropTypes from "prop-types";
import React from "react";

import { contentPropType } from "../../../../core/models/app-prop-types";
import { spreadClasses } from "../../../../core/utils/css-utils";

/**
 * @typedef {import('../../../../core/models/program-detail-types').IntroContentProps} IntroContentProps
 * @typedef {import('../../../../core/models/shared-types').AppTitleProps} AppTitleProps
 */

/**
 * @param {IntroContentProps} props
 * @returns {JSX.Element}
 */
function IntroContent({ contents = [] }) {
  return (
    <>
      {contents.map((content, index) => (
        <p
          key={`content-${index + 1}`}
          className={`${spreadClasses(content.cssClass)}`}
        >
          {content.text}
        </p>
      ))}
    </>
  );
}

IntroContent.propTypes = {
  contents: PropTypes.arrayOf(contentPropType),
};

export default IntroContent;
