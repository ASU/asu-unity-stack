// @ts-check
import styled from "styled-components";

const ResultCardTemplate = styled.div`
  max-width: 700px;
  &.fill {
    background-color: #fafafa;
    border: 1px solid #d0d0d0;
    padding: 32px;
  }
  .cookie-trail {
    color: #747474;
  }
  a {
    margin: 8px 0 16px 0;
    font-size: 24px;
    color: #8c1d40 !important;
    text-decoration: underline !important;
  }
  a:hover {
    cursor: pointer;
  }
`;

export { ResultCardTemplate };
