// @ts-check
import { sanitizeDangerousMarkup } from "@asu-design-system/components-core";
import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

import { progDetailSectionIds } from "../../../../core/models";

const WrapperContainer = styled.div`
  & p:last-of-type {
    margin-bottom: 0;
  }

  & a {
    word-break: break-word;
  }
`;

/**
 *
 * @param {Object} props
 * @returns
 */
function ChangeYourMajor({ content }) {
  return (
    <section
      id={progDetailSectionIds.changeMajorRequirements.targetIdName}
      className="change-your-major"
    >
      <h2>
        <span className="highlight-gold">
          Change your major requirements for current students
        </span>
      </h2>
      <WrapperContainer
        dangerouslySetInnerHTML={sanitizeDangerousMarkup(content)}
      />
    </section>
  );
}

ChangeYourMajor.propTypes = {
  content: PropTypes.string,
};

export { ChangeYourMajor };
