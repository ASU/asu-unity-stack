// @ts-check
import styled from "styled-components";

const WebDirLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 250px;
  grid-template-areas:
    "header        sort"
    "title        title"
    "results    results";
  grid-column-gap: 100px;

  .header {
    grid-area: header;
    font-size: 24px;
    font-weight: bold;
  }
  .title {
    grid-area: title;
    padding: 16px 0;
    .sort-form {
      max-width: 500px;
    }
  }
  .sort {
    grid-area: sort;
    display: flex;
    justify-content: space-between;
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
