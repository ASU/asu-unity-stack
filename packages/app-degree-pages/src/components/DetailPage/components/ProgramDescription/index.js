import PropTypes from "prop-types";
import React from "react";

import { sanitizeDangerousMarkup } from "../../../../../../../shared";
import { STEM_OPT_HEADER_TEXT } from "../../../../core/constants";

/** @typedef {import('../../../../core/types/detail-page-types').ProgramDescriptionProps} ProgramDescriptionProps */

/**
 *
 * @param {ProgramDescriptionProps}  props
 * @returns
 */
function ProgramDescription({ content, stemOptText, programNotFound }) {
  return (
    <div data-testid="program-description">
      <h2>{programNotFound ? `Program not found` : `Program description`}</h2>
      <div
        data-testid="program-description-body"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={sanitizeDangerousMarkup(content)}
      />
      {stemOptText && (
        <>
          <p>
            <strong>{STEM_OPT_HEADER_TEXT}</strong>
          </p>
          <div
            data-testid="stem-opt-text"
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={sanitizeDangerousMarkup(stemOptText)}
          />
        </>
      )}
    </div>
  );
}

ProgramDescription.propTypes = {
  content: PropTypes.string,
  stemOptText: PropTypes.string,
  programNotFound: PropTypes.bool,
};

export { ProgramDescription };
