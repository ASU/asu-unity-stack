// @ts-check

import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

import { imagePropType } from "../../models";
import { sanitizeHTML, idGenerator } from "../../utils";

const ContentWrapper = styled.div`
  .uds-image-overlap.content-left &.content-wrapper {
    padding-left: 0;
    grid-column: 1 / span 4;
    grid-row: 3/4;
  }
`;

/**
 *
 * @param {import("src/core/models/shared-types").OverlapContentImage} props
 * @returns
 */
function OverlapContentImage({ title, image, contents = [] }) {
  const genId = idGenerator("overlap-");
  return (
    <section>
      <div className="uds-image-overlap content-left">
        <img className="img-fluid" src={image.url} alt={image.altText} />
        <ContentWrapper className="content-wrapper">
          <h2>
            <span className="highlight-gold">{title}</span>
          </h2>
          {contents.map(content => (
            <div
              key={genId.next().value}
              dangerouslySetInnerHTML={sanitizeHTML(content.text)}
            />
          ))}
        </ContentWrapper>
      </div>
    </section>
  );
}

OverlapContentImage.propTypes = {
  title: PropTypes.string,
  contents: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
    })
  ),
  image: imagePropType,
};

export { OverlapContentImage };
