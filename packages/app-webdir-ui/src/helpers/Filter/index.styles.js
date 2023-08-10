import styled from "styled-components";

export const FilterContainer = styled.fieldset`
  width: 100%;
  padding: 10px 0;

  legend {
    font-size: 1rem;
    font-weight: bold;
  }
  .choices-container {
    display: flex;
    overflow-x: auto;
    padding: 8px 0;
    position: relative;
    a {
      &:is(:first-child) {
        padding-left: 0px;
      }
      white-space: nowrap;
      margin: 0 5px;
      padding: 6px 12px;
      &.selected {
        color: white;
        z-index: 3;
        background-color: #8c1d40;
        border-radius: 300px;
      }
    }
    background:
    /* Shadow Cover LEFT */ linear-gradient(
          to right,
          rgba(255, 255, 255, 0.9) 30%,
          rgba(255, 255, 255, 0)
        )
        top left,
      /* Shadow Cover RIGHT */
        linear-gradient(
          to left,
          rgba(255, 255, 255, 0.9) 30%,
          rgba(255, 255, 255, 0)
        )
        top right,
      /* Shadow LEFT */
        radial-gradient(
          farthest-side at 0 50%,
          rgba(0, 0, 0, 0.4),
          rgba(0, 0, 0, 0)
        )
        top left,
      /* Shadow RIGHT */
        radial-gradient(
          farthest-side at 100% 50%,
          rgba(0, 0, 0, 0.4),
          rgba(0, 0, 0, 0)
        )
        top right;

    background-repeat: no-repeat;
    background-size: 40px 100%, 40px 100%, 14px 100%, 14px 100%;
    background-attachment: local, local, scroll, scroll;
  }
`;
