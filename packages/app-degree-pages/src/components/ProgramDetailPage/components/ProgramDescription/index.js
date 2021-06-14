import PropTypes from "prop-types";
import React from "react";

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
      <div
        dangerouslySetInnerHTML={{
          __html: content,
        }}
      />
    </section>
  );
}

ProgramDescription.propTypes = {
  content: PropTypes.string,
};

export { ProgramDescription };
