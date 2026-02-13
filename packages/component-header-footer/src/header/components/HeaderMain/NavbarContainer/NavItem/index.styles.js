import styled from "styled-components";
import { ASU_GRAY1, ASU_GOLD, ASU_GRAY4 } from "../../../../colors";
import { CLASS_NAMES } from "../../../../core/constants/classNames";

const NavItemWrapper = styled.li`
  position: relative;
  padding: 0;
  margin: 0 0.5rem 0 0;
  &:has(.${CLASS_NAMES.OPEN_LINK}) > a:after,
  &:hover > a:after {
    width: calc(100% + 24px);
  }
  > a {
    display: inline-block;
    padding: 0.5rem 0.75rem;
    line-height: 1rem;
    color: ${ASU_GRAY1};
    &:after {
      transition: 0.5s cubic-bezier(0.19, 1, 0.19, 1);
      content: "";
      display: block;
      height: 0.5rem;
      position: relative;
      top: 0.6rem;
      right: 12px;
      width: 0;
      background-image: linear-gradient(
        to right,
        transparent 0.5%,
        ${ASU_GOLD} 0.5%
      );
    }
    &.${CLASS_NAMES.NAV_ITEM_SELECTED}:after {
      width: calc(100% + 24px);
    }
    &.nav-item {
      display: block;
    }
    > span {
      position: relative;
      .${CLASS_NAMES.CHEVRON_ICON} {
        transition: 0.5s cubic-bezier(0.19, 1, 0.19, 1);
        margin-left: 0.5rem;
        font-size: 0.75rem;

        &.${CLASS_NAMES.OPEN} {
          transform: rotate(180deg);
        }
      }
    }
    .${CLASS_NAMES.MOBILE_ONLY} {
      display: none;
    }
  }
  @media (max-width: ${({ breakpoint }) => breakpoint}) {
    border-bottom: 1px solid ${ASU_GRAY4};
    margin: 0;
    &:first-child {
      border-top: 1px solid ${ASU_GRAY4};
    }
    &:hover > a:after {
      width: 100%;
    }
    .${CLASS_NAMES.ICON_NAV_ITEM} {
      display: none;
    }
    > a {
      padding: 1rem 2rem 0.75rem;
      width: 100%;
      &.${CLASS_NAMES.OPEN_LINK} {
        border-bottom: 1px solid ${ASU_GRAY4};
      }
      &:after {
        right: 0;
        top: 0.8rem;
      }
      &.${CLASS_NAMES.NAV_ITEM_SELECTED}:after {
        width: 100%;
      }
      > span {
        display: flex;
        justify-content: space-between;
        .${CLASS_NAMES.CHEVRON_ICON} {
          font-size: 1.25rem;
        }
      }
      .${CLASS_NAMES.MOBILE_ONLY} {
        display: initial;
      }
    }
  }
`;

export { NavItemWrapper };
