/* eslint-disable react/prop-types */
import { forwardRef } from "preact/compat";
import { cx, css } from "@emotion/css";
import {
  containerSize,
  primaryNavTopPadding,
  BreakpointXl,
  BreakpointLg,
  srOnly,
} from "../../theme";
import { navStyles } from "../Nav/styles";
import { buttonStyles } from "../Button/styles";
import { searchStyles } from "../Search/styles";
import { loginStyles } from "../Login/styles";
import { logoStyles } from "../Logo/styles";
import { titleStyles } from "../Title/styles";
import { navItemStyles } from "../NavItem/styles";
import {
  navbarStyles,
  navbarContainerStyles,
  navbarTogglerStyles,
} from "../Navbar/styles";

const Header = ({ children, breakpoint, ...props }) => {
  return (
    <>
      <div id="asu-report-accessiblity">
        <a
          href="https://www.asu.edu/accessibility/"
          class={css`
            ${srOnly}
          `}
        >
          Report an accessibility problem
        </a>
      </div>
      <header
        {...props}
        class={cx(
          props.class,
          css`
            *,
            *:before,
            *:after {
              box-sizing: border-box;
            }

            :focus {
              outline: 0;
              box-shadow: 0 0 8px #00baff !important;
            }

            a {
              cursor: pointer;
              text-decoration: none;
            }

            padding: 0;
            display: flex;
            flex-direction: column;
            position: fixed;
            width: 100%;
            z-index: 999;
            background: #ffffff;
            border-bottom: 1px solid #d0d0d0;
            transition: 0.5s cubic-bezier(0.19, 1, 0.19, 1);
            top: 0;
            left: 0;

            div,
            h1 {
              font-family: Arial, sans-serif;
            }

            &.scrolled {
              transition: 0.5s cubic-bezier(0.19, 1, 0.19, 1);
            }
          `,
          navbarStyles(breakpoint),
          navStyles(breakpoint), // add the nav and button styles
          buttonStyles,
          navbarContainerStyles(breakpoint),
          logoStyles(breakpoint),
          universalStyles(breakpoint),
          searchStyles(breakpoint),
          titleStyles(breakpoint),
          loginStyles(breakpoint),
          navbarTogglerStyles(breakpoint),
          navItemStyles(breakpoint)
        )}
      >
        {children}
      </header>
    </>
  );
};

/**
 * Universal Nav styles and component
 */
const universalStyles = breakpoint => css`
  .universal-nav {
    padding: 0 2rem;
    display: flex;
    justify-content: center;
    background-color: #e8e8e8;
    height: 24px;
    transition: 0.5s cubic-bezier(0.19, 1, 0.19, 1);

    > div {
      width: 100%;
      max-width: ${containerSize};
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: flex-end;
    }

    @media (max-width: ${breakpoint}) {
      display: none;
      padding: 0;
      transition: none;
      height: auto;


      &.mobile-open {
        z-index: 998;
        width 100%;
        display: flex;
        justify-content: center;
      }

      .nav-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-auto-flow: row;
        justify-items: start;
        width: 100%;

        > a, div {
          color: #191919;
          margin-right: 0;
          text-align: center;
          width: 100%;
          font-size: 0.875rem;
          padding: 1rem 1.5rem;
          border-top: 1px solid #d0d0d0;
          display:block;

          :nth-child(even) {
            border-left: 1px solid #d0d0d0;
          }
        }
      }

    }
  }

  @media (min-width: ${breakpoint}) {
    &.scrolled .universal-nav {
      height: 0;
      overflow: hidden;
    }

    .universal-nav {
      &.search-open {
        height: 48px;
      }

      .nav-grid {
        display: flex;
      }
    }
  }
`;

const UniversalNav = forwardRef((props, ref) => {
  return (
    <div
      class={cx(
        "universal-nav",
        props.open ? "mobile-open" : "",
        props.searchOpen ? "search-open" : ""
      )}
      ref={ref}
    >
      <div>{props.children}</div>
    </div>
  );
});

const UniversalNavLinks = ({ children, ...props }) => {
  return (
    <div
      class={cx(
        "nav-grid",
        props.class,
        css`
          > a {
            display: inline-flex;
            font-size: 0.75rem;
            padding: 0.25rem 0.5rem;
            color: #484848;
            margin: 0;
          }
        `
      )}
    >
      {children}
    </div>
  );
};

export {
  Header,
  UniversalNav,
  UniversalNavLinks,
  primaryNavTopPadding,
  BreakpointLg,
  BreakpointXl,
};
