// @ts-check
import styled from "styled-components";

const QuickLinksTemplate = styled.div`
  padding: 4px;
  display: flex;
  flex-direction: column;
  span {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 24px;
  }
  a:not(:last-child) {
    margin-bottom: 16px;
  }
`;

export { QuickLinksTemplate };
