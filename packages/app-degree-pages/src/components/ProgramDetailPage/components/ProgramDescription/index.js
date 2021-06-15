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
    <section>
      <h2>Program description</h2>
      <div dangerouslySetInnerHTML={sanitizeHTML(content)} />
    </section>
  );
}

ProgramDescription.propTypes = {
  content: PropTypes.string,
};

export { ProgramDescription };
