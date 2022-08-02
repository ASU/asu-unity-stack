// @ts-check
import styled from "styled-components";

const WebDirLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 500px;
  grid-template-areas:
    ". sort"
    "results results";
  grid-column-gap: 100px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
    grid-template-areas:
      "sort sort"
      "results results";
  }

  .sort {
    grid-area: sort;
    /* display: flex; */
    /* justify-content: space-between; */
  }
  .plain-button {
    background-color: #fff;
    border: none;
    outline: none;
    color: #822141;
  }
  .plain-button:hover {
    cursor: pointer;
  }
  .results {
    grid-area: results;
  }
`;

export { WebDirLayout };
