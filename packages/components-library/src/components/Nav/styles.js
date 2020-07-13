/** @jsx h */
/* eslint-disable react/prop-types */
import { h } from "preact";
import { css, cx, injectGlobal } from "emotion";
import Tokens from "../../theme";

const mobileBreak = Tokens.BreakpointLg;

/** Global Styles for Nav */
injectGlobal`
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
      display: none;
      border: none;

      &.open-nav,&:target {
        display: flex;
        flex-direction: column;
        margin-top: 140px;
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
          border-bottom: 1px solid #cccccc;
          > a {
            padding: 1rem;
            justify-content: space-between;
            display: flex;
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
  .asu-dropdown-menu {
    background-color: white;
    z-index: 1000;
    display: none;
    font-size: 1rem;
    color: #191919;
    text-align: left;
    list-style: none;
    background-color: #ffffff;
    background-clip: padding-box;
    min-width: 10rem;
    color: #191919;
    border: 1px solid #e8e8e8;
    border-radius: 0;
    border-top: 1px solid #ffffff;
    padding: 2rem;
    display: none;

    h4 {
      font-size: 1.25rem;
      letter-spacing: -0.025em;
    }

    > ul {
      flex-direction: column;
      width: 16rem;
      padding-right: 1.5rem;
      border-right: 1px solid #bfbfbf;
      margin-right: 1.5rem;

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
      display: flex;
      flex-direction: row;
      position: absolute;
    }

    @media (max-width: ${mobileBreak}) {
      display: none;
      border: none;

      &.nav-dropdown-open {
        flex-direction: column;
        position: relative;
        top: 100%;
        left: 0;
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

export { Nav, DdMenu, IconChevronDown };
