import PropTypes from "prop-types";
import React from "react";
import { sanitizeDangerousMarkup } from "../../../../../../components-core/src/core/utils/html-utils";

/** @typedef {import('../../../../core/types/detail-page-types').ProgramDescriptionProps} ProgramDescriptionProps */

/**
 *
 * @param {ProgramDescriptionProps}  props
 * @returns
 */
function ProgramDescription({ content }) {
  return (
    <div data-testid="program-description">
      <h2>Program description</h2>
      <div
        data-testid="program-description-body"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={sanitizeDangerousMarkup(content)}
      />
    </div>
  );
}

ProgramDescription.propTypes = {
  content: PropTypes.string,
};

export { ProgramDescription };
