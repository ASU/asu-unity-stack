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

  .uds-image-overlap.content-right &.content-wrapper {
    padding: 2.5rem;

    h2 {
      margin-top: 0;
    }
  }
`;

const OverlapImage = styled.img`
  .uds-image-overlap & {
    width: 100%;
    height: 100%;
    grid-column: 2 / span 4;
    grid-row: 2/5;
    object-fit: cover;
  }
`;

/**
 *
 * @param {import("src/core/models/shared-types").OverlapContentImage} props
 * @returns
 */
function OverlapContentImage({
  title,
  image,
  contentDirection = "left",
  contents = [],
  contentChildren = null,
}) {
  const genId = idGenerator("overlap-");
  return (
    <div className={`uds-image-overlap content-${contentDirection}`}>
      <OverlapImage className="img-fluid" src={image.url} alt={image.altText} />
      <ContentWrapper className="content-wrapper">
        <h2>
          <span className="highlight-gold">{title}</span>
        </h2>
        {contents.map(content => (
          <div
            key={genId.next().value}
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={sanitizeHTML(content.text)}
          />
        ))}
        {contentChildren}
      </ContentWrapper>
    </div>
  );
}

OverlapContentImage.propTypes = {
  title: PropTypes.string,
  contentDirection: PropTypes.oneOf(["left", "right"]),
  contents: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
    })
  ),
  image: imagePropType,
  contentChildren: PropTypes.element,
};

export { OverlapContentImage };
