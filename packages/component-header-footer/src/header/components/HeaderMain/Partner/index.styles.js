import styled from "styled-components";
import { ASU_GRAY5 } from "../../../colors";
import { CLASS_NAMES } from "../../../core/constants/classNames";

const PartnerLogosWrapper = styled.div`
  margin: 0.5rem 0;
  a {
    display: inline-block;
    &:not(:last-child) {
      border-right: 1px solid ${ASU_GRAY5};
      margin-right: 1.5rem;
      padding-right: 1.5rem;
    }
    img {
      height: 52px;
      width: auto;
      &.${CLASS_NAMES.LOGO_VERT} {
        display: initial;
      }
      &.${CLASS_NAMES.LOGO_HORIZ} {
        display: none;
      }
    }
  }
  @media (max-width: ${({ breakpoint }) => breakpoint}) {
    margin: 0.5rem 0 1rem 1rem;
    a {
      &:not(:last-child) {
        margin-right: 1rem;
        padding-right: 1rem;
      }
      img {
        height: 32px;
        width: auto;
        &.${CLASS_NAMES.LOGO_VERT} {
          display: none;
        }
        &.${CLASS_NAMES.LOGO_HORIZ} {
          height: 24px;
          width: auto;
          display: initial;
        }
      }
    }
  }
  @media (max-width: 370px) {
    margin: 0.5rem 0 1rem 0.5rem;
    a {
      &:not(:last-child) {
        margin-right: 0.5rem;
        padding-right: 0.5rem;
      }
      img {
        height: 29px;
        &.${CLASS_NAMES.LOGO_HORIZ} {
          height: 21px;
        }
      }
    }
  }
`;

export { PartnerLogosWrapper };
