/** @jsx h */
/* eslint-disable react/prop-types */
import { h } from "preact";
import { css, cx } from "emotion";
import Tokens from "../../theme";
import { hiddenStyle, showReset } from "../../styles/common";
import {IconChevronDown} from "../Icons/styles";

const mobileBreak = Tokens.BreakpointLg;

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

    .mobile-only {
      ${hiddenStyle}
    }

    @media (max-width: ${mobileBreak}) {
      ${hiddenStyle}
      border: none;
      display: flex;

      &.open-nav,
      &:target {
        ${showReset()}
        margin-top: 120px;
        flex-direction: column;
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
  .dropdown {
    ${hiddenStyle}
    z-index: 1000;
    justify-content: space-between;
    background: #ffffff;
    border: 1px solid #d0d0d0;
    border-top: none;
    padding: 1rem;
    flex-wrap: nowrap;
    transition: 0.5s cubic-bezier(0.19, 1, 0.19, 1);

    h3 {
      font-size: 1.5rem;
      letter-spacing: -0.035em;
      font-weight: 700;
      text-align: left;
      opacity: 1;
      margin: 1rem 0;
      line-height: calc(100% + .12em);
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
      ${showReset("absolute")}
      display: flex;
    }

    @media (max-width: ${mobileBreak}) {
      border: none;

      &.nav-dropdown-open {
        flex-direction: column;
        position: relative;
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

const Nav = ({open, children, ...props }) => {
  return (
    <nav
      id="asu-header-nav"
      class={cx("header-nav", open ? "open-nav" : "")}
      {...props}
    >
      {children}
    </nav>
  );
};

const DdMenu = props => {
  return (
    <div class={cx("dropdown", props.open ? "nav-dropdown-open" : "")}>
      {props.children}
    </div>
  );
};



export { Nav, DdMenu, IconChevronDown, navStyles };
