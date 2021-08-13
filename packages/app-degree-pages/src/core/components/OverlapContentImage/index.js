// @ts-check

import PropTypes from "prop-types";
import React from "react";
import styled, { createGlobalStyle } from "styled-components";

import { imagePropShape } from "../../models";
import { ParagrapList } from "../ParagrapList";

const GlobalStyle = createGlobalStyle`
  .uds-image-overlap {
    padding-top: 0 ;
    width: auto;
    @media (max-width: 768px) {
      padding-top: 1.5rem !important;
    }
  }
`;

const ContentWrapper = styled.div`
  @media (max-width: 768px) {
    & {
      font-size: 0.9rem;
    }
  }

  @media (min-width: 992px) {
    .uds-image-overlap.content-left &.content-wrapper {
      padding-left: 0;
    }

    .uds-image-overlap.content-right &.content-wrapper {
      padding: 2.5rem;

      h2 {
        margin-top: 0;
      }
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
  return (
    <div className={`uds-image-overlap content-${contentDirection}`}>
      <GlobalStyle />
      <OverlapImage
        className="img-fluid"
        src={image?.url}
        alt={image?.altText}
        onError={e => {
          e.currentTarget.style.display = "none";
        }}
      />
      <ContentWrapper className="content-wrapper">
        <h3>
          <span className="highlight-gold">{title}</span>
        </h3>
        <ParagrapList contents={contents} />
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
  image: imagePropShape,
  contentChildren: PropTypes.element,
};

export { OverlapContentImage };
