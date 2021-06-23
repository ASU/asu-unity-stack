// @ts-check

import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

import { sanitizeHTML } from "../../../../core/utils";

const WrapperContainer = styled.div`
  & p:last-of-type {
    margin-bottom: 0;
  }
`;

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
      <WrapperContainer dangerouslySetInnerHTML={sanitizeHTML(content)} />
    </section>
  );
}

ChangeYourMajor.propTypes = {
  content: PropTypes.string,
};

export { ChangeYourMajor };
