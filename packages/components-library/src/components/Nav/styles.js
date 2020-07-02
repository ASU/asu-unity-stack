/** @jsx h */
/* eslint-disable react/prop-types */
import { h } from "preact";
import { css, cx, injectGlobal } from "emotion";
import Tokens from "../../theme";

const mobileBreak = Tokens.BreakpointLg;

console.log(mobileBreak, 'THE mobile breakpoint');

const Nav = props => {
  /** Inject Global Styles */
  injectGlobal`
    nav.header-nav {
      border-bottom: 1px solid #cccccc;
      padding-bottom: 0;
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
            display: block;
            position: absolute;
          }
        }
      }

      @media (max-width: ${mobileBreak}) {
        display: none;

        &.open-nav {
          display: flex;
          flex-direction: column;
          > ul {
            flex-direction: column;
            div.header-nav-open {
              display: flex;
              flex-direction: column;
              position: relative;
              top: 100%;
              left: 0;
            }
          }
        }
      }
    }
`;

  return (
    <nav className={cx("header-nav", props.className ? props.className : "")}>
      {props.children}
    </nav>
  );
};

const DdMenu = props => {
  return (
    <div
      className={cx(
        css`
          background-color: white;
          z-index: 1000;
          display: none;
          font-size: 1rem;
          color: #191919;
          text-align: left;
          list-style: none;
          background-color: #ffffff;
          background-clip: padding-box;
          border: 1px solid rgba(0, 0, 0, 0.15);
          border-radius: 0.25rem;

          > ul {
            flex-direction: column;
          }
        `,
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
