/* eslint-disable react/prop-types */

import { css, cx } from "@emotion/css";
import { forwardRef, useEffect, useState, useRef } from "preact/compat";

import {
  focusStyle,
  hiddenStyle,
  showReset,
  BreakpointSm,
  BreakpointLg,
  BreakpointXl,
  containerSize,
  breakpointForMin,
} from "../../theme";
import { IconChevronDown } from "../Icons/styles";

/**
 * NavList styles
 * @param {} breakpoint
 */
const navListStyles = breakpoint => css`
  .navlist {
    list-style: none;
    display: flex;
    margin: 0;
    padding: 0;
    align-items: flex-end;

    a {
      text-decoration: none;
      ${focusStyle}
    }

    > li {
      position: relative;
      padding: 0;
      border: 0;
      margin-right: 0.5rem;

      &.active,
      &.dropdown-open,
      :hover {
        > a:after {
          width: 100%;
        }
      }

      > a {
        :after {
          transition: 0.5s cubic-bezier(0.19, 1, 0.19, 1);
          content: "";
          display: block;
          height: 0.5rem;
          background-image: linear-gradient(
            to right,
            transparent 0.5%,
            #ffc627 0.5%
          );
          position: relative;
          bottom: 0;
          width: 0;
          margin-left: 0;
          top: 0.5rem;
        }

        &.nav-item-selected {
          :after {
            width: 100%;
          }
        }
      }

      @media (min-width: ${breakpointForMin(breakpoint)}) {
        position: relative;

        &.dropdown-open,
        &.active {
          > a:after {
            width: calc(100% + 24px);
            margin-left: 0;
          }
        }

        > a {
          line-height: 1rem;
          box-sizing: content-box;
          :hover,
          &.nav-item-selected {
            :after {
              width: calc(100% + 24px);
              margin-left: 0;
            }
          }

          :after {
            transition: 0.5s cubic-bezier(0.19, 1, 0.19, 1);
            content: "";
            display: block;
            height: 0.5rem;
            position: relative;
            top: 0.5rem;
            bottom: 0;
            width: 0;
            left: -0.75rem;
            margin-left: 0;
          }
        }
      }

      @media (max-width: ${breakpoint}) {
        > a:after {
          transition: 0.5s cubic-bezier(0.19, 1, 0.19, 1);
          content: "";
          display: block;
          height: 0.5rem;
          background-color: #ffc627;
        }
      }

      > a {
        display: block;
        padding: 0.5rem 0.75rem;
        color: #191919;
        white-space: nowrap;
        text-transform: capitalize;

        svg.fa-chevron-down {
          transition: 0.5s cubic-bezier(0.19, 1, 0.19, 1);

          &.open {
            transform: rotate(180deg);
          }
        }
      }
    }

    .mobile-only {
      ${hiddenStyle}
    }

    @media (min-width: ${breakpointForMin(breakpoint)}) {
      svg.fa-chevron-down {
        float: none;
        display: inline-block;
        font-size: 0.75rem;
        margin-left: 0.5rem;
      }
    }

    @media (max-width: ${breakpoint}) {
      flex-direction: column;
      align-items: stretch;
      padding: 0;
      border-bottom: 1px solid #cccccc;

      > li {
        margin-right: 0;

        > a,
        .drop-controls {
          padding: 1rem 2rem 0.5rem;
          justify-content: space-between;
          display: block;
          border-top: 1px solid #cccccc;
          align-items: center;
          margin: 4px 4px;
          > svg {
            float: right;
            font-size: 1.25rem;
          }
        }

        :last-of-type {
          border-bottom: none;
        }

        &.dropdown-open {
          > a,
          .drop-controls {
            border-bottom: 1px solid #cccccc;
          }
        }
      }

      .mobile-only {
        ${showReset()}
      }
    }
  }
`;

/**
 * NavList styled component
 */
const NavList = forwardRef(({ children, ...props }, ref) => {
  return (
    <ul
      ref={ref}
      aria-label="ASU"
      {...props}
      class={cx(props.class, "navlist")}
    >
      {children}
    </ul>
  );
});

/**
 * Button form which contains call to action buttons and displayed
 * on right side of header nav
 */
const buttonFormStyles = breakpoint => css`
  form.navbar-site-buttons {
    display: flex;
    align-items: flex-end;
    padding-bottom: 3px;

    a + a {
      margin-left: 1rem;
    }

    @media (max-width: ${breakpoint}) {
      padding: 1rem 2rem;
    }

    @media (max-width: ${BreakpointSm}) {
      align-items: flex-start;
    }
  }
`;

const ButtonForm = props => {
  return <form class="navbar-site-buttons">{props.children}</form>;
};

/**
 * Styles the dropdown menu container
 */
const dropdownContainerStyles = breakpoint => css`
  /** DdMenu CSS **/
  div.dropdown {
    position: absolute;
    display: flex;
    justify-content: space-between;
    background: #ffffff;
    border: 1px solid #d0d0d0;
    opacity: 0;
    visibility: hidden;
    z-index: 999;
    flex-wrap: nowrap;
    transition: 0.5s cubic-bezier(0.19, 1, 0.19, 1);
    overflow: hidden;
    margin: 0.3px 0 0 0;
    flex-direction: column;

    > div {
      width: 100%;
    }

    &.aligned-right:not(.mega) {
      position: absolute;
      clip: auto;
      right: 0;
      left: auto;
    }

    &.mega {
      width: 100%;
      left: 0;
      border-right: none;
      border-left: none;

      div:not(.button-row) {
        max-width: ${containerSize};
      }
    }

    &.open {
      visibility: visible;
      opacity: 1;
    }

    h3 {
      font-size: 1.5rem;
      letter-spacing: -0.035em;
      text-transform: capitalize;
      font-weight: 700;
      text-align: left;
      opacity: 1;
      margin: 1rem 0;
      line-height: calc(100% + 0.12em);
    }

    .button-row {
      border-top: 1px solid #cccccc;

      > div {
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 1rem 2rem;
        display: flex;
        margin: 0 auto;
        justify-content: flex-start;
        margin: 0 auto;

        a + a {
          margin-left: 1rem;
        }
      }
    }

    @media (max-width: ${breakpoint}) {
      padding: 1rem 2rem;
      flex-direction: column;
      max-height: 0;
      border: none;

      &.open {
        position: relative;
        display: flex;
        max-height: 10000px;
      }

      h3 {
        padding-left: 0.3rem;
      }
    }

    @media (min-width: ${breakpointForMin(breakpoint)}) {
      position: fixed;

      &:not(.mega) .menu-column {
        min-width: 16rem;
      }

      > div:not(.button-row) {
        padding: 2rem;
        display: flex;
        margin: 0 auto;
        justify-content: center;
      }

      &.open {
        border-bottom: 1px solid #d0d0d0;
      }

      h3 {
        margin-top: 0;
      }
    }
  }
`;

const DropdownContainer = props => {
  const dropdownRef = useRef(null);
  const [alignedRight, setAlignedRight] = useState(false);

  useEffect(() => {
    if (window && dropdownRef.current) {
      const elPosition = dropdownRef.current.getBoundingClientRect().left;
      const breakpointPosition = window.innerWidth * 0.55;
      setAlignedRight(elPosition > breakpointPosition);
    }
  }, []);

  return (
    <div
      ref={dropdownRef}
      class={cx(
        "dropdown",
        props.open ? "open" : "",
        props.class,
        alignedRight ? "aligned-right" : ""
      )}
      data-onclick-identifier={"leave-open"}
      onMouseDown={e => {}}
      onClick={e => {}}
    >
      <div>{props.children}</div>
      {props.buttons ? (
        <div class="button-row">
          <div>{props.buttons}</div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

/**
 * Styles the dropdown menu container
 */
const dropControlsStyles = breakpoint => css`
  /** Dropcontrols CSS **/
  div.drop-controls {
    display: block;
    align-items: center;
    padding: 0.5rem 0.75rem;
    color: #191919;

    :after {
      transition: 0.5s cubic-bezier(0.19, 1, 0.19, 1);
      content: "";
      display: block;
      height: 0.5rem;
      background-image: linear-gradient(
        to right,
        transparent 0.5%,
        #ffc627 0.5%
      );
      position: relative;
      bottom: 0;
      width: 0;
      margin-left: 0;
      top: 0.5rem;
    }

    > a {
      color: #191919;
    }

    :hover,
    &.nav-item-selected {
      :after {
        width: 100%;
      }
    }

    > svg {
      transition: 0.5s cubic-bezier(0.19, 1, 0.19, 1);

      &.open {
        transform: rotate(180deg);
      }
    }

    @media (min-width: ${breakpointForMin(breakpoint)}) {
      line-height: 1rem;
      box-sizing: content-box;
      :hover,
      &.nav-item-selected {
        :after {
          width: calc(100% + 24px);
          margin-left: 0;
        }
      }

      :after {
        transition: 0.5s cubic-bezier(0.19, 1, 0.19, 1);
        content: "";
        display: block;
        height: 0.5rem;
        position: relative;
        top: 0.5rem;
        bottom: 0;
        width: 0;
        left: -0.75rem;
        margin-left: 0;
      }
    }

    @media (max-width: ${breakpoint}) {
      display: flex;
      color: black;
      padding: 1rem 1rem 0.5rem 1rem;
      border-bottom: 1px solid #cccccc;
      align-items: center;
      > a {
        flex-grow: 1;
      }

      > svg {
        cursor: pointer;
        font-size: 1.25rem;
        min-width: 3rem;
      }
    }
  }
`;

const DropControls = ({ selected, ...props }) => {
  return (
    <div class={cx("drop-controls", selected ? "nav-item-selected" : "")}>
      {props.children}
    </div>
  );
};

/**
 * Styles the dropdown menu column
 */
const menuColumnStyles = breakpoint => css`
  /** Dropdown Menu Column CSS **/
  ul.menu-column {
    display: flex;
    flex-direction: column;
    border-right: 1px solid #d0d0d0;
    padding: 0 2rem;
    position: relative;

    :last-child {
      border-right: none;
    }

    @media (min-width: ${breakpointForMin(breakpoint)}) {
      width: 16rem;
      padding: 0 1.5rem 0 0;
      border-right: 1px solid #bfbfbf;
      margin-right: 1.5rem;
      max-width: 282px;

      :last-of-type {
        margin-right: 0;
        padding-right: 0;
        border-right: 0;
      }
    }

    @media (max-width: ${breakpoint}) {
      border-right: none;
      width: 100%;
      padding: 0;
      > li {
        :last-of-type {
          border: none;
        }
      }
    }

    @media (min-width: ${breakpointForMin(breakpoint)}) {
      padding: 0 1.5rem 0 0;
      border-right: 1px solid #bfbfbf;
      margin-right: 1.5rem;

      flex: 1;
      max-width: 282px;
    }
  }
`;

const MenuColumn = props => {
  return (
    <ul class={cx("menu-column", props.open ? "open" : "")}>
      {props.children}
    </ul>
  );
};

/**
 * Styles the top-level 'nav' component
 */
const componentStyles = breakpoint => css`
  ul {
    list-style: none;
    a {
      text-decoration: none;
    }
  }

  .mobile-only {
    ${hiddenStyle}
  }

  @media (min-width: ${breakpointForMin(breakpoint)}) {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0;
    margin: 0;

    svg.fa-chevron-down {
      float: none;
      display: inline-block;
      font-size: 0.75rem;
      margin-left: 0.5rem;
    }
  }

  @media (max-width: ${breakpoint}) {
    border: none;
    display: none;
    flex-direction: column;
    width: 100%;

    &.open-nav,
    &:target {
      overflow-y: scroll;
      display: flex;
    }
  }

  ${dropdownContainerStyles(breakpoint)}
  ${menuColumnStyles(breakpoint)}
  ${buttonFormStyles(breakpoint)}
  ${navListStyles(breakpoint)}
  ${dropControlsStyles(breakpoint)}
`;

/**
 * Styles for Nav. These are meant to be imported and injected inside of the header
 * component
 */
const navStyles = breakpoint => css`
  nav.header-nav {
    ${componentStyles(breakpoint)}
  }
`;

/**
 * Nav style component
 * If injectStyles set to true, injects component styles directly via Emotion css
 */
const Nav = ({
  open,
  maxMobileHeight,
  injectStyles,
  breakpoint,
  handleKeyDown,
  children,
  ...props
}) => {
  const maxHeight = maxMobileHeight == -1 ? "75vh" : `${maxMobileHeight}px`;
  const bpoint = breakpoint === "Xl" ? BreakpointXl : BreakpointLg;

  return (
    <nav
      id="asu-header-nav"
      class={cx(
        "header-nav",
        open ? "open-nav" : "",
        css`
          @media (max-width: ${bpoint}) {
            &.open-nav,
            &:target {
              flex-direction: column;
              width: 100%;

              max-height: ${maxHeight};
              display: flex;
            }
          }
        `,
        injectStyles ? componentStyles(bpoint) : ""
      )}
      {...props}
    >
      {children}
    </nav>
  );
};

export {
  Nav,
  DropdownContainer,
  IconChevronDown,
  ButtonForm,
  navStyles,
  MenuColumn,
  BreakpointXl,
  BreakpointLg,
  NavList,
  DropControls,
};
