import styled from "styled-components";

export const FilterContainer = styled.fieldset`
  width: 85%;
  margin: 0 0 2rem 0;

  .choices-wrapper {
    position: relative;
  }

  legend {
    font-size: 1rem;
    font-weight: bold;
  }
  .choices-container {
    display: flex;
    overflow-x: auto;
    padding: 8px 0;
    &:focus {
      outline: none !important;
      box-shadow: 0px 0px 0px 2px #ffffff, 0px 0px 0px 4px #191919 !important;
    }

    &::-webkit-scrollbar {
      display: none;
    }
    .choice {
      &:hover {
        text-decoration: none;
      }
      font-weight: bold;
      text-decoration: underline;
      border: none;
      background-color: transparent;
      color: #8c1d40;
      &:is(:first-child) {
        padding-left: 0px;
      }
      white-space: nowrap;
      margin: 0 8px;
      padding: 6px 12px;
      &.selected {
        color: white;
        z-index: 3;
        background-color: #8c1d40;
        border-radius: 300px;
      }
    }
  }
`;
