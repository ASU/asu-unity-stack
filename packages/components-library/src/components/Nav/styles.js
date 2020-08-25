/** @jsx h */
/* eslint-disable react/prop-types */
import { h } from "preact";
import { css, cx } from "emotion";
import { hiddenStyle, showReset, mobileBreak } from "../../styles/common";
import { IconChevronDown } from "../Icons/styles";

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

      > li {
        > a {
          @media (min-width: ${mobileBreak}) {
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
        flex-direction: column;
        width: 100%;
        overflow-y: scroll;
        height: 60vh;
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
        div.nav-dropdown-open {
          flex-direction: column;
          position: relative;
        }

        > li {
          margin-right: 0;

          > a {
            padding: 1rem;
            justify-content: space-between;
            display: flex;
            border-bottom: 1px solid #cccccc;
            align-items: center;

            > svg {
              margin-right: 2rem;
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

  /** DdMenu CSS **/
  .dropdown {
    ${hiddenStyle}
    z-index: 999;
    justify-content: space-between;
    background: #ffffff;
    flex-wrap: nowrap;
    transition: 0.5s cubic-bezier(0.19, 1, 0.19, 1);
    margin: 0;
    padding: 1rem;
    border: 0;
    border-top: 1px solid #d0d0d0;

    @media (min-width: ${mobileBreak}) {
      display: flex;
      margin: -1px 0 0 0;
      border: 1px solid #d0d0d0;
      border-top: 1px solid #ffffff;
      padding: 2rem;
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

    > ul {
      display: flex;
      flex-direction: column;
      border-right: 1px solid #d0d0d0;
      padding: 0 2rem;
      margin-bottom: 3rem;

      :last-child {
        margin-bottom: 0;
        border-right: none;
      }

      @media (min-width: ${mobileBreak}) {
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

const Nav = ({ open, children, ...props }) => {
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

export { Nav, DdMenu, IconChevronDown, navStyles, mobileBreak };
