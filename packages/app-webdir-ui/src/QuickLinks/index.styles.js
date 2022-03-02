// @ts-check
import styled from "styled-components";

const QuickLinksTemplate = styled.div`
  display: flex;
  flex-direction: column;
  span {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 24px;
  }
  a {
    margin-bottom: 16px;
  }
  .plain-button {
    display: flex;
    justify-content: flex-start;
    background-color: #fff;
    border: none;
    outline: none;
    color: #822141;
    text-decoration: underline;
    margin-left: -6px;
    margin-bottom: 16px;
  }
  .plain-button:hover {
    cursor: pointer;
    text-decoration: none;
  }
`;

export { QuickLinksTemplate };
