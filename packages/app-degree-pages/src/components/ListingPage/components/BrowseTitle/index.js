// @ts-check

import React from "react";
import styled from "styled-components";

const SectionWrapper = styled.section`
  margin-top: 96px;
`;

const BrowseTitle = () => (
  <SectionWrapper className="container">
    <h2>
      <span className="highlight-gold">Browse degrees</span>
    </h2>
  </SectionWrapper>
);

export { BrowseTitle };
