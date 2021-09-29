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
 * @param {import("src/core/models/program-detail-types").GlobalOpportunityProps} props
 * @returns {JSX.Element}
 */
const CareerOutlook = ({ contents, image }) => (
  <WrapperContainer
    id={progDetailSectionIds.careerOutlook.targetIdName}
    data-testid="career-outlook"
  >
    <OverlapContentImage
      headingTag="H2"
      title={progDetailSectionIds.careerOutlook.text}
      contents={contents}
      image={image}
    />
  </WrapperContainer>
);

CareerOutlook.propTypes = OverlapContentImage.propTypes;

export { CareerOutlook };
