/** @jsx h */
/* eslint-disable react/prop-types */
import { h } from "preact";
import { css, cx } from "emotion";
import {
  hiddenStyle,
  showReset,
  srOnly,
  BreakpointLg,
  BreakpointXl,
} from "../../theme";
import { IconChevronDown } from "../Icons/styles";

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
    max-height: 0;
    display: flex;
    z-index: 999;
    justify-content: space-between;
    background: #ffffff;
    flex-wrap: nowrap;
    transition: all 0.5s cubic-bezier(0.19, 1, 0.19, 1);
    margin: 0;
    padding: 0 1rem;
    border: 0;
    clip: rect(0, 0, 0, 0);
    overflow: hidden;

    &.open {
      max-height: 1200px;
      clip: auto;
    }

    h3 {
      font-size: 1.5rem;
      letter-spacing: -0.035em;
      font-weight: 700;
      text-align: left;
      opacity: 1;
      margin: 1rem 0;
      line-height: calc(100% + 0.12em);
    }

    @media (max-width: ${breakpoint}) {
      padding-left: 3rem;
      flex-direction: column;

      &.open {
        position: relative;
      }
    }

    @media (min-width: ${breakpoint}) {
      margin: -1px 0 0 0;
      padding: 2rem;
      position: absolute;
      border: 1px solid #d0d0d0;

      h3 {
        margin-top: 0;
      }
    }
  }
`;



const DropdownContainer = props => {
  return (
    <div class={cx("dropdown", props.open ? "open" : "")}>{props.children}</div>
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
    margin-bottom: 3rem;

    :last-child {
      margin-bottom: 0;
      border-right: none;
    }

    @media (min-width: ${breakpoint}) {
      width: 16rem;
      padding: 0 1.5rem 0 0;
      border-right: 1px solid #bfbfbf;
      margin-right: 1.5rem;

      :last-of-type {
        margin-right: 0;
        padding-right: 0;
        border-right: 0;
      }
    }

    > li {
      padding: 0.5rem 0;
    }

    @media (max-width: ${breakpoint}) {

      border-right: none;
      width: 100%;
      padding: 0;
      > li {
        border-bottom: 1px solid #cccccc;

        :last-of-type {
          border: none;
        }
      }
    }

    @media (min-width: ${breakpoint}) {
      width: 16rem;
      padding: 0 1.5rem 0 0;
      border-right: 1px solid #bfbfbf;
      margin-right: 1.5rem;

      > li {
        padding: 0;
        margin: 0;

        > .nav-item {
          padding: 0;
          padding: 0.5rem 0;
          white-space: normal;

          :visited {
            color: #191919;
          }

          :hover {
            color: #8c1d40;
            text-decoration: underline;
          }
        }
      }
    }
  }
`;

const MenuColumn = props => {
  return (
    <ul class={cx("menu-column", props.open ? "open" : "")}>{props.children}</ul>
  );
};

const navItemStyles = css`
  .nav-icon {
    color: #191919;
  }
`;

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

  > ul {
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: row;
    align-items: center;

    > li {
      > a {
        display: block;

        svg.fa-chevron-down{
          transition: 0.5s cubic-bezier(0.19, 1, 0.19, 1);

          &.open {
            transform: rotate(180deg);
          }
        }

        :after {
          content: "";
          position: relative;
          display: block;
          height: 0.5rem;
          background-color: #ffc627;
          bottom: 0;
          width: 0;
          transition: 0.5s cubic-bezier(0.19, 1, 0.19, 1);
          bottom: -8px;
          left: -8px;
        }

        &.dropdown-open:after {
          width: 100%;
          width: calc(100% + 16px);
        }

        @media (min-width: ${breakpoint}) {


          :hover:after {
            width: 100%;
            width: calc(100% + 16px);
          }
        }
      }
    }

    li {
      position: relative;
      margin-right: 16px;

      a {

        padding: 8px;
        position: relative;

        &.nav-item {
          color: #191919;
          display: block;
        }
      }
    }
  }

  .mobile-only {
    ${hiddenStyle}
  }

  @media (min-width: ${breakpoint}) {
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

    .mobile-only {
      ${showReset()}
    }

    .icon-nav-item {
      ${hiddenStyle}
    }

    > ul {
      flex-direction: column;
      align-items: stretch;

      > li {
        margin-right: 0;

        > a {
          padding: 1rem 2rem .3rem 2rem;
          justify-content: space-between;
          display: block;
          border-bottom: 1px solid #cccccc;
          align-items: center;

          > svg {
            float: right;
            font-size: 1.25rem;
          }
        }

        :first-of-type {
          border-top: 1px solid #cccccc;
        }

        :last-of-type {
          border-bottom: none;
        }
      }
    }
  }
  }

  ${dropdownContainerStyles(breakpoint)}
  ${menuColumnStyles(breakpoint)}
  ${buttonFormStyles(breakpoint)}
  ${navItemStyles}

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
};
