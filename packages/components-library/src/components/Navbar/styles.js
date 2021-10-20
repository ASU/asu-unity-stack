import { css, cx } from "@emotion/css";

import {
  focusStyle,
  containerSize,
  primaryNavTopPadding,
  breakpointForMin,
} from "../../theme";
import { Icon } from "../Icons";

/**
 * Mobile hamburger menu styles and component
 */
const navbarTogglerStyles = breakpoint => css`
  .navbar-toggler {
    position: relative;
    padding: 0;
    font-size: 1.25rem;
    line-height: 1;
    background-color: transparent;
    outline: 0;
    color: #191919;
    border: 0;
    margin-right: 2rem;
    cursor: pointer;
    align-self: flex-start;
    ${focusStyle}

    .fa-layers {
      position: unset;
    }

    @media (min-width: ${breakpointForMin(breakpoint)}) {
      display: none;
    }
  }
`;

const NavbarToggler = ({ mobileOpen, ...props }) => {
  return (
    <button
      {...props}
      aria-label="main menu"
      class={cx(
        css`
          .fa-circle {
            color: #e8e8e8;
            font-size: 1rem;
            margin-left: -12px;
            height: 2em;
            width: 2em;
          }

          svg.svg-inline--fa.fa-times {
            height: 1em;
            width: 1.25em;
            margin-left: auto;
          }

          /** override hamburger circle icon  to fix bug in bundled react-fontawesome code **/
          .svg-inline--fa.fa-w-16.fa-circle {
            width: 2em;
          }
        `,
        "navbar-toggler"
      )}
    >
      {mobileOpen ? (
        <Icon type="circle-close" />
      ) : (
        <Icon
          type="bars"
          // If javascript is disabled, this should target and open the
          href="#asu-header-nav"
        />
      )}
    </button>
  );
};

/** Primary Nav styles and component */
const navbarStyles = breakpoint => css`
  .navbar-component {
    background-color: #ffffff;
    display: flex;
    width: 100%;
    padding-right: 12px;
    padding-left: 12px;
    margin-right: auto;
    margin-left: auto;
    max-width: ${containerSize};

    > div {
      display: flex;
      flex-direction: row;
      width: 100%;
      align-items: flex-start;
      transition: 0.5s cubic-bezier(0.19, 1, 0.19, 1);
      position: relative;
      align-items: flex-end;
    }

    @media (max-width: ${breakpoint}) {
      order: -1;
      display: flex;
      top: 0;
      width: 100%;
      height: auto;
      background-color: #ffffff;
      padding: 0;
      z-index: 1600;
      padding: ${primaryNavTopPadding} 0 0 0;

      > div {
        padding: 0;
        flex-wrap: wrap;
        justify-content: space-between;
      }
    }
  }
`;

const Navbar = ({ children, ...props }) => {
  return (
    <div class={cx("navbar-component", props.class)}>
      <div>{children}</div>
    </div>
  );
};

/**
 * Navbar Container
 **/
const navbarContainerStyles = breakpoint => css`
  .navbar-container {
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: flex-start;

    @media (min-width: ${breakpoint}) {
      &.no-navigation {
        display: flex;
        flex-direction: row;
        align-items: center;
        height: 100%;
        .title.subunit-name,
        .header-nav {
          width: 50%;
        }
      }
    }
    @media (max-width: ${breakpoint}) {
      width: 100%;
    }
  }
`;

const NavbarContainer = props => {
  return (
    <div
      class={cx(
        "navbar-container",
        props.hasNavigation && props.hasNavigation.length
          ? ""
          : "no-navigation",
        props.class
      )}
    >
      {props.children}
    </div>
  );
};

export {
  NavbarToggler,
  navbarTogglerStyles,
  Navbar,
  navbarStyles,
  navbarContainerStyles,
  NavbarContainer,
};
