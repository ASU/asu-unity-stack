// @ts-check
import styled from "styled-components";

const WebDirLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas:
    "view ."
    "sort ."
    "filter filter"
    "results results";
  grid-column-gap: 100px;

  .uds-grid > .row {
    gap: 1rem;
    & > div {
    flex: 0 0 282px;
    }
  }

  .sort {
    grid-area: sort;
  }
  .view-toggle {
    grid-area: view;
  }
  .filter-container {
    grid-area: filter;
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

const FacultyRankLayout = styled.div`
  display: flex;
  flex-wrap: wrap;
  .uds-grid > .row {
    gap: 1rem;
    & > div {
    flex: 0 0 282px;
    }
  }
  .view-toggle {
    width: 100%;
    justify-content: flex-start;
    padding-left: 1rem;
  }

  div:has(.uds-tabbed-panels) {
    width: 100%;
  }
`;

export { WebDirLayout, FacultyRankLayout };
