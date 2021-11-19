// @ts-check
import React from "react";
import styled from "styled-components";

import { OverlapContentImage } from "../../../../core/components";
import { progDetailSectionIds } from "../../../../core/models";

const WrapperContainer = styled.section`
  width: 100%;
  & a {
    word-break: break-word;
  }
`;

/**
 *
 * @param {import("src/core/types/detail-page-types").GlobalOpportunityProps} props
 * @returns {JSX.Element}
 */
const GlobalOpportunity = ({ contents, image }) => (
  <WrapperContainer
    id={progDetailSectionIds.globalOpportunity.targetIdName}
    data-testid="global-opportunity"
  >
    <OverlapContentImage
      headingTag="H2"
      title={progDetailSectionIds.globalOpportunity.text}
      contents={contents}
      image={image}
    />
  </WrapperContainer>
);

GlobalOpportunity.propTypes = OverlapContentImage.propTypes;

export { GlobalOpportunity };
