import styled from "styled-components";
import {
  ASU_WHITE,
  ASU_GRAY5,
  ASU_GRAY1,
  ASU_MAROON,
} from "../../../../colors";
import { CLASS_NAMES } from "../../../../core/constants/classNames";

const DropdownWrapper = styled.div`
  --container-width: 1200px;
  --gap: 2rem;
  position: fixed;
  background-color: ${ASU_WHITE};
  border: 1px solid ${ASU_GRAY5};
  margin: 0;
  z-index: 1031;
  visibility: hidden;
  white-space: normal;
  &.${CLASS_NAMES.OPENED} {
    visibility: visible;
  }
  &.mega {
    width: min(var(--container-width), 100%);
    left: calc((100% - var(--container-width)) / 2);
  }
  &.aligned-right:not(.mega) {
    position: absolute;
    right: 0;
  }
  > .${CLASS_NAMES.DROPDOWN_CONTAINER} {
    --dropdown-width: calc(
      var(--container-width) *
        min(1, max(calc(var(--cols, 1) / 4), calc((var(--cols, 1) - 1) / 2)))
    );
    max-width: var(--dropdown-width);
    margin: 0 auto;
    /*
      max-height is calculated from
      100% view Height
      minus offset
      minus 2rem padding
    */
    max-height: calc(100vh - ${({ heightOffset }) => heightOffset}px - 2rem);
    overflow-y: auto;
    overflow-x: hidden;
    display: flex;
    justify-content: stretch;

    .${CLASS_NAMES.DROPDOWN_CONTAINER_COLUMN} {
      --span: 1; /* component overrides using inline style */
      --col: 1; /* component overrides using inline style */
      width: calc(var(--dropdown-width) / var(--cols) * var(--span));
      padding: var(--gap);
      padding-bottom: 0;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      row-gap: var(--gap);

      & > *:last-child {
        padding-bottom: var(--gap);
      }

      &:not(:last-child) {
        border-right: 1px solid ${ASU_GRAY5};
      }
    }

    .${CLASS_NAMES.UL_HEADING} {
      margin-top: 0;
      font-size: 1.5rem;
      letter-spacing: -0.035em;
      font-weight: 700;
      text-align: left;
      opacity: 1;
      margin: 0;
      margin-bottom: -1.5rem;
      line-height: calc(100% + 0.12em);
    }
    ul {
      --ul-gap: 1rem;
      &:is(:last-child) {
        flex-grow: 0;
      }
      margin: 0;
      width: calc(
        var(--container-width) / var(--cols, 1) * var(--span, 1) - var(--gap) *
          2
      );
      display: flex;
      flex-direction: row;
      column-gap: var(--ul-gap);
      flex-wrap: wrap;
      .${CLASS_NAMES.NAV_LINK} {
        padding: 0;
        flex-basis: calc(
          (100% / var(--span)) - var(--ul-gap) * (var(--span) - 1) / var(--span)
        );
        a {
          width: 100%;
          display: inline-block;
          margin: 0.75rem 0;
          position: relative;
          line-height: 1rem;
          color: ${ASU_GRAY1};
          &:hover {
            color: ${ASU_MAROON};
            text-decoration: underline;
          }
        }
        & + .${CLASS_NAMES.NAV_BUTTON} {
          width: 100%;
          margin-top: auto;
          padding-top: var(--gap);
          & + .${CLASS_NAMES.NAV_BUTTON} {
            margin-top: 1rem;
          }
        }
      }
    }
  }

  .${CLASS_NAMES.NAV_BUTTON} {
    flex: 1 1;
    display: inline-flex;
    flex-direction: column;
    justify-content: flex-end;
    flex-wrap: nowrap;
    width: fit-content;
  }
  .${CLASS_NAMES.DROPDOWN_BUTTON_CONTAINER} {
    border-top: 1px solid ${ASU_GRAY5};
    border-bottom: 1px solid ${ASU_GRAY5};
    > div {
      max-width: var(--container-width);
      margin: 0 auto;
      display: flex;
      padding: 1rem 2rem;
    }
  }
  @media (max-width: ${({ breakpoint }) => breakpoint}) {
    position: initial;
    border: none;
    max-height: unset;
    visibility: visible;
    display: none;
    &.${CLASS_NAMES.OPENED} {
      display: block;
    }
    > .${CLASS_NAMES.DROPDOWN_CONTAINER} {
      max-width: 100%;
      max-height: unset;
      overflow-y: unset;
      overflow-x: unset;
      flex-direction: column;

      .${CLASS_NAMES.DROPDOWN_CONTAINER_COLUMN} {
        width: 100%;
        border-right: unset;
        &:not(:first-child) {
          padding-top: 0;
        }
      }
      ul {
        width: 100%;
        max-width: 100%;
        padding: 0;
        &:not(:last-child) {
          border: none;
        }
        .${CLASS_NAMES.UL_HEADING} {
          font-size: 1.25rem;
        }
        .${CLASS_NAMES.NAV_BUTTON} {
          // padding-top: 1.5rem;
        }
        .${CLASS_NAMES.NAV_LINK} {
          flex-basis: 100%;
          padding: 0 1rem;
          &:not(:last-child) {
            border-bottom: 1px solid ${ASU_GRAY5};
          }
          a {
            padding: 1rem 0;
            margin: 0;
          }
        }
      }
    }
    .${CLASS_NAMES.DROPDOWN_BUTTON_CONTAINER} {
      margin-top: 0;
      > div {
        max-width: 100%;
        padding: 1rem 3rem;
      }
    }
  }
`;

export { DropdownWrapper };
