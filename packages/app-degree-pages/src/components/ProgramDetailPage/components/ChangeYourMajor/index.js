// @ts-check

import PropTypes from "prop-types";
import React from "react";

import { sanitizeHTML } from "../../../../core/utils";

/**
 *
 * @param {Object} props
 * @returns
 */
function ChangeYourMajor({ content }) {
  return (
    <section className="change-your-major">
      <h2>
        <span className="highlight-gold">
          Change Your Major requirements for current students
        </span>
      </h2>
      <div dangerouslySetInnerHTML={sanitizeHTML(content)} />
    </section>
  );
}

ChangeYourMajor.propTypes = {
  content: PropTypes.string,
};

export { ChangeYourMajor };
