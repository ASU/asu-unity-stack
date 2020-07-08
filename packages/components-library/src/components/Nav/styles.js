/** @jsx h */
/* eslint-disable react/prop-types */
import { h } from "preact";
import { css, cx, injectGlobal } from "emotion";
import Tokens from "../../theme";

const mobileBreak = Tokens.BreakpointLg;

const Nav = props => {
  /** Inject Global Styles */
  injectGlobal`
    nav.header-nav {

      > ul {
        display: flex;
        flex-direction: row;


        li {
          position: relative;
          margin-right: 16px;

          a {
            color: #191919;
            display: block;
            padding: 8px;
            padding-bottom: 16px;
            position: relative;

            .fa {
              font-size: 0.8rem;
              transform: translateY(-0.1rem);
            }
          }

          div {
            display: none;
          }

          div.header-nav-open {
            display: flex;
            flex-direction: row;
            position: absolute;
          }
        }
      }

      @media (max-width: ${mobileBreak}) {
        display: none;

        &.open-nav,&:target {
          display: flex;
          flex-direction: column;
          > ul {
            flex-direction: column;
            div.header-nav-open {
              flex-direction: column;
              position: relative;
              top: 100%;
              left: 0;
            }

            > li {
              border-bottom: 1px solid #cccccc;
            }
          }
        }
      }
    }

    * {
      list-style: none;
    }
  `;

  return (
    <nav
      id="asu-header-nav"
      class={cx(
        "header-nav",
        props.class ? props.class : "",
        css`
          list-style: none;
          a {
            cursor: pointer;
          }
        `
      )}
    >
      {props.children}
    </nav>
  );
};

const DdMenu = props => {
  /** Inject Global Styles */
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
      margin: -1px 0 0 0;
      border-top: 1px solid #ffffff;
      padding: 2rem;

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
    }
  `;
  return (
    <div
      class={cx("asu-dropdown-menu",
        props.open ? "header-nav-open" : ""
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
