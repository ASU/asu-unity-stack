// @ts-check
import {
  spreadClasses,
  sanitizeDangerousMarkup,
} from "@asu-ke/components-core";
import PropTypes from "prop-types";
import React from "react";

import { contentPropShape } from "../../../../core/models/app-prop-types";

/**
 * @typedef {import('../../../../core/types/detail-page-types').IntroContentProps} IntroContentProps
 * @typedef {import('../../../../core/types/shared-local-types').AppTitleProps} AppTitleProps
 */

/**
 * @param {IntroContentProps} props
 * @returns {JSX.Element}
 */
function MarketText({ contents = [] }) {
  return (
    <div data-testid="market-text">
      {contents.map((content, index) => (
        <div
          key={`content-${index + 1}`}
          className={`mt-3 ${spreadClasses(content.cssClass)}`}
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={sanitizeDangerousMarkup(content.text)}
        />
      ))}
    </div>
  );
}

MarketText.propTypes = {
  contents: PropTypes.arrayOf(contentPropShape),
};

export { MarketText };
