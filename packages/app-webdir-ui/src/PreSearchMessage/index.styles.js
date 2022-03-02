// @ts-check
import styled from "styled-components";

const PreSearchMessageTemplate = styled.div`
  display: grid;
  grid-template-columns: 700px 1fr;
  grid-template-rows: 100%;
  grid-column-gap: 126px;

  .message-content {
    max-width: 700px;
    h2 {
      margin-bottom: 32px;
    }
  }
  .assisstance-area {
    margin-top: 16px;
    .intro-highlight {
      font-weight: bold;
    }
  }
  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: repeat(2, auto);
    grid-row-gap: 48px;
  }
`;

export { PreSearchMessageTemplate };
