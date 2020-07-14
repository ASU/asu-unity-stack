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
      margin-top: 120px;

      &.open-nav,&:target {
        position: relative;
        display: flex;
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
          border-bottom: 1px solid #cccccc;
          > a {
            padding: 1rem;
            justify-content: space-between;
            display: flex;
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

    z-index: 1000;
    position: absolute;
    display: none;
    justify-content: space-between;
    background: #ffffff;
    border: 1px solid #d0d0d0;
    border-top: none;
    opacity: 0;
    padding: 2rem;
    padding-top: 2.5rem;
    flex-wrap: nowrap;
    margin-top: 8px;
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
      opacity: 1;
      display: flex;
      padding-top: 32px;
    }

    @media (max-width: ${mobileBreak}) {
      border: none;

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
