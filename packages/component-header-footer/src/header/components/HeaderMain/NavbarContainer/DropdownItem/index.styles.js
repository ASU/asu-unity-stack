import styled from "styled-components";
import {
  ASU_WHITE,
  ASU_GRAY5,
  ASU_GRAY1,
  ASU_MAROON,
} from "../../../../colors";
import { CLASS_NAMES } from "../../../../core/constants/classNames";

const DropdownWrapper = styled.div`
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
    width: 100%;
    left: 0;
    margin-left: 0 !important;
  }
  &.aligned-right:not(.mega) {
    position: absolute;
    right: 0;
  }
  > .${CLASS_NAMES.DROPDOWN_CONTAINER} {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    padding: 2rem;
    ul {
      width: 16rem;
      max-width: 282px;
      display: flex;
      flex-direction: column;
      &:not(:last-child) {
        padding-right: 2rem;
        margin-right: 2rem;
        border-right: 1px solid ${ASU_GRAY5};
      }
      .${CLASS_NAMES.UL_HEADING} {
        margin-top: 0;
        font-size: 1.5rem;
        letter-spacing: -0.035em;
        font-weight: 700;
        text-align: left;
        opacity: 1;
        margin: 1rem 0;
        line-height: calc(100% + 0.12em);
      }
      .${CLASS_NAMES.NAV_LINK} {
        padding: 0;
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
          margin-top: auto;
          padding-top: 2rem;
          & + .${CLASS_NAMES.NAV_BUTTON} {
            margin-top: 1rem;
          }
        }
      }
    }
  }
  .${CLASS_NAMES.DROPDOWN_BUTTON_CONTAINER} {
    border-top: 1px solid ${ASU_GRAY5};
    border-bottom: 1px solid ${ASU_GRAY5};
    margin-top: 1rem;
    > div {
      max-width: 1200px;
      margin: 0 auto;
      display: flex;
      padding: 1rem 0;
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
      padding: 1rem 2rem;
      flex-direction: column;
      ul {
        width: 100%;
        max-width: 100%;
        padding: 0 1rem;
        margin-bottom: 1rem;
        &:not(:last-child) {
          padding-right: 1rem;
          margin: 0 0 1rem 0;
          border: none;
        }
        .${CLASS_NAMES.UL_HEADING} {
          font-size: 1.25rem;
        }
        .${CLASS_NAMES.NAV_BUTTON} {
          padding-top: 1.5rem;
        }
        .${CLASS_NAMES.NAV_LINK} {
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
