import PropTypes from "prop-types";
import React from "react";

import { sanitizeHTML } from "../../../../core/utils";

/** @typedef {import('../../../../core/models/program-detail-types').ProgramDescriptionProps} ProgramDescriptionProps */

/**
 *
 * @param {ProgramDescriptionProps}  props
 * @returns
 */
function ProgramDescription({ content }) {
  return (
    <div>
      <h2>Program description</h2>
      {/* eslint-disable-next-line react/no-danger */}
      <div dangerouslySetInnerHTML={sanitizeHTML(content)} />
    </div>
  );
}

ProgramDescription.propTypes = {
  content: PropTypes.string,
};

export { ProgramDescription };
