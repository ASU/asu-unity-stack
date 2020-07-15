/** @jsx h */
/* eslint-disable react/prop-types */
import { h } from "preact";
import { css, cx, injectGlobal } from "emotion";
import Tokens from "../../theme";

const mobileBreak = Tokens.BreakpointLg;

const hiddenStyle = css`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0,0,0,0);
  border: 0;
`;

const showReset = css`
  width: auto;
  height: auto;
  margin: 0;
  overflow: visible;
  border: none;
  clip: auto;
`;

/**
 * Styles for Nav. These are meant to be imported and injected inside of the header
 * component
 */
const navStyles = css`
  nav.header-nav {
    > ul {
      display: flex;
      flex-direction: row;
      align-items: center;

      li {
        position: relative;
        margin-right: 16px;

        a {
          color: #191919;
          display: block;
          padding: 8px;
          position: relative;

          .fa {
            font-size: 0.8rem;
            transform: translateY(-0.1rem);
          }
        }
      }
    }

    @media (max-width: ${mobileBreak}) {
      ${hiddenStyle}
      border: none;

      display: flex;

      &.open-nav,&:target {
        ${showReset}
        position: relative;
        margin-top: 120px;
        flex-direction: column;
      }

      > ul {
        flex-direction: column;
        align-items: stretch;
        div.nav-dropdown-open {
          flex-direction: column;
          position: relative;
          top: 100%;
          left: 0;
        }

        > li {
          margin-right: 0;

          > a {
            padding: 1rem;
            justify-content: space-between;
            display: flex;
            border-bottom: 1px solid #cccccc;
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

  /** DdMenu CSS **/
  .asu-dropdown-menu {
    ${hiddenStyle}
    z-index: 1000;
    justify-content: space-between;
    background: #ffffff;
    border: 1px solid #d0d0d0;
    border-top: none;
    padding: 2rem;
    flex-wrap: nowrap;
    transition: 0.5s cubic-bezier(0.19, 1, 0.19, 1);

    h4 {
      font-size: 1.25rem;
      letter-spacing: -0.025em;
    }

    > ul {
      flex-direction: column;
      width: 16rem;
      padding-right: 1.5rem;
      margin-right: 1.5rem;
      flex: 1;
      max-width: 282px;
      border-right: 1px solid #d0d0d0;

      :last-of-type {
        margin-right: 0;
        padding-right: 0;
        border-right: 0;
      }

      > li {
        padding: 0.5rem 0;
      }
    }

    &.nav-dropdown-open {
      ${showReset}
      display: flex;
      margin-top: 8px;
    }

    @media (max-width: ${mobileBreak}) {
      border: none;
      padding-top: 0;

      &.nav-dropdown-open {
        flex-direction: column;
        position: relative;
      }

      h4 {
        padding-bottom: .5rem;
      }

      > ul {
        border-right: none;
        width: 100%;
        padding-left: 2rem;
        > li {
          border-bottom: 1px solid #cccccc;

          :last-of-type {
            border: none;
          }
        }
      }
    }
  }
`;

  const Nav = props => {

    return (
      <nav
        id="asu-header-nav"
        class={cx(
          "header-nav",
          props.class ? props.class : ""
        )}
      >
        {props.children}
      </nav>
    );
  };

  /** Dropdown menu global styles */
  injectGlobal`

`;

const DdMenu = props => {

  return (
    <div
      class={cx("asu-dropdown-menu",
        props.open ? "nav-dropdown-open" : ""
      )}
    >
      {props.children}
    </div>
  );
};

const IconChevronDown = props => {
  return (
    <span class="fa fa-chevron-down">
      <span class="sr-only">{props.sr}</span>
    </span>
  );
};

export { Nav, DdMenu, IconChevronDown, navStyles };
