// @ts-check
import React from "react";
import styled from "styled-components";

import {
  feedComponentShape,
  feedCtaButtonShape,
  feedHeaderShape,
} from "./feed-prop-types";

const ButtonColumn = styled.div`
  @media screen and (min-width: 768px) {
    & {
      display: inline-flex;
      justify-content: flex-end;
    }
  }
`;

/**
 *
 * @param {{
 *  defaultProps: import("./feed-types").FeedType
 *  header: import("./feed-types").FeedHeader
 *  ctaButton: import("./feed-types").FeedCtaButton
 * }} props
 * @returns
 */
const FeedHeader = ({
  defaultProps,
  header: pHeeder,
  ctaButton: pCtaButton,
}) => {
  const header = { ...defaultProps.header, ...pHeeder };
  const ctaButton = { ...defaultProps.ctaButton, ...pCtaButton };

  return (
    <div className="row justify-content-between align-items-center pb-6">
      <div className="col-sm-12 col-md-9">
        <h2 className={`text-${header.color}`}>{header.text}</h2>
      </div>
      <ButtonColumn className="col-sm-12 col-md-3">
        <a className={`btn btn-${ctaButton.color}`} href={ctaButton.url}>
          {ctaButton.text}
        </a>
      </ButtonColumn>
    </div>
  );
};

FeedHeader.propTypes = {
  defaultProps: feedComponentShape,
  header: feedHeaderShape,
  ctaButton: feedCtaButtonShape,
};

export { FeedHeader };
