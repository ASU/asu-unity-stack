/** @jsx h */
/* eslint-disable react/prop-types */
import { h } from "preact";
import { css, cx } from "emotion";
import { hiddenStyle, showReset, mobileBreak, srOnly } from "../../theme";
import { IconChevronDown } from "../Icons/styles";

/**
 * Button form which contains call to action buttons and displayed
 * on right side of header nav
 */
const buttonFormStyles = css`
  form.navbar-site-buttons {
    display: flex;
    align-items: flex-end;
    padding-bottom: 3px;


    a + a {
      margin-left: 1rem;
    }

    @media (max-width: ${mobileBreak}) {
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
const dropdownStyles = css`
  /** DdMenu CSS **/
  div.dropdown {
    display: none;
    z-index: 999;
    justify-content: space-between;
    background: #ffffff;
    flex-wrap: nowrap;
    transition: 0.5s cubic-bezier(0.19, 1, 0.19, 1);
    margin: 0;
    padding: 1rem;
    border: 0;
    border-top: 1px solid #d0d0d0;

    &.open {
      display: flex;
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

    @media (max-width: ${mobileBreak}) {
      &.open {
        flex-direction: column;
        position: relative;
        padding-left: 3rem;
      }

      > ul {
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
    }

    @media (min-width: ${mobileBreak}) {
      margin: -1px 0 0 0;
      border: 1px solid #d0d0d0;
      border-top: 1px solid #ffffff;
      padding: 2rem;
      position: absolute;

      h3 {
        margin-top: 0;
      }

      > ul {
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
  }
`;

const DdMenu = props => {
  return (
    <div class={cx("dropdown", props.open ? "open" : "")}>{props.children}</div>
  );
};

const navItemStyles = css`
  .nav-icon {
    color: #191919;
  }
`

/**
 * Styles the top-level 'nav' component
 */
const componentStyles = css`

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

  @media (min-width: ${mobileBreak}) {
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

  @media (max-width: ${mobileBreak}) {
    border: none;
    display: none;

    &.open-nav,
    &:target {
      flex-direction: column;
      width: 100%;
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
      div.open {
        flex-direction: column;
        position: relative;
      }

      > li {
        margin-right: 0;

        > a {
          padding: 1rem 2rem;
          justify-content: space-between;
          display: flex;
          border-bottom: 1px solid #cccccc;
          align-items: center;

          > svg {
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

  ${dropdownStyles}
  ${buttonFormStyles}
  ${navItemStyles};
`;

/**
 * Styles for Nav. These are meant to be imported and injected inside of the header
 * component
 */
const navStyles = css`
  nav.header-nav {
    ${componentStyles}
  }
`;

/**
 * Nav style component
 * If injectStyles set to true, injects component styles directly via Emotion css
 */
const Nav = ({ open, maxMobileHeight, injectStyles, children, ...props }) => {
  const maxHeight = maxMobileHeight == -1 ? "75vh" : `${maxMobileHeight}px`;

  return (
    <nav
      id="asu-header-nav"
      class={cx(
        "header-nav",
        open ? "open-nav" : "",
        css`
          @media (max-width: ${mobileBreak}) {
            &.open-nav,
            &:target {
              flex-direction: column;
              width: 100%;

              max-height: ${maxHeight};
              display: flex;
            }
          }
        `,
        injectStyles ? componentStyles : ""
      )}
      {...props}
    >
      {children}
    </nav>
  );
};

export { Nav, DdMenu, IconChevronDown, ButtonForm, navStyles, mobileBreak };
