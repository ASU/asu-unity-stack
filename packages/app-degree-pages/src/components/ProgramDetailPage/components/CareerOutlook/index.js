// @ts-check

import { imagePropType } from "@asu-design-system/components-core/src/core/models/shared-prop-types";
import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

import { sanitizeHTML } from "../../../../core/utils";

const ContentWrapper = styled.div`
  .uds-image-overlap.content-left .content-wrapper {
    grid-column: 1 / span 4;
    grid-row: 3/4;
  }
`;

/**
 *
 * @param {import("src/core/models/program-detail-types").CareerOutlookProps} props
 * @returns
 */
function CareerOutlook({ contents, image }) {
  return (
    <section>
      <div className="uds-image-overlap content-left">
        <img className="img-fluid" src={image.url} alt={image.altText} />
        <ContentWrapper className="content-wrapper">
          <h2>
            <span className="highlight-gold">Career Outlook</span>
          </h2>
          {contents.map(content => (
            <div dangerouslySetInnerHTML={sanitizeHTML(content.text)} />
          ))}
        </ContentWrapper>
      </div>
    </section>
  );
}

CareerOutlook.propTypes = {
  contents: PropTypes.arrayOf(
    PropTypes.shape({
      Text: PropTypes.string,
    })
  ),
  image: imagePropType,
};

export { CareerOutlook };
