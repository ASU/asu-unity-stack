// @ts-check
import React from "react";
import styled from "styled-components";

import { OverlapContentImage } from "../../../../core/components";
import { progDetailSectionIds } from "../../../../core/models";

const WrapperContainer = styled.section`
  & a {
    word-break: break-word;
  }
`;

/**
 *
 * @param {import("src/core/models/program-detail-types").GlobalOpportunityProps} props
 * @returns {JSX.Element}
 */
const GlobalOpportunity = ({ contents, image }) => (
  <WrapperContainer id={progDetailSectionIds.globalOpportunity.targetIdName}>
    <OverlapContentImage
      title="Global opportunities"
      contents={contents}
      image={image}
    />
  </WrapperContainer>
);

GlobalOpportunity.propTypes = OverlapContentImage.propTypes;

export { GlobalOpportunity };
