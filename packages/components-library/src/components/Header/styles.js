/** @jsx h */
/* eslint-disable react/prop-types */
import { h } from "preact";
import { cx, css } from "emotion";
import Tokens from "../../theme";
import { navStyles } from "../Nav/styles";
import { buttonStyles } from "../Button/styles";
import { hiddenStyle, showReset, mobileBreak, containerSize } from "../../styles/common";
import { Icon } from "../Icons/styles";




const Header = ({ scrollPosition, children, ...props }) => {
  return (
    <header
      class={cx(
        scrollPosition > 0 ? "scrolled" : "",
        css`
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            text-decoration: none;
            list-style: none;
          }

          a {
            cursor: pointer;
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

          div,
          h1 {
            font-family: Arial, sans-serif;
          }

          &.scrolled {
            transition: 0.5s cubic-bezier(0.19, 1, 0.19, 1);
          }
          &.scrolled .universal-nav {
            ${hiddenStyle}
            transition: translateY(-24px);
          }

          &.scrolled .primary-nav .navbar-brand d img {
            height: 64px;
          }
          @media (max-width: ${mobileBreak}) {
            &.scrolled .primary-nav .navbar-brand d img {
              height: 28px;
            }
          }
          &.scrolled .primary-nav .header-title h1 {
            font-size: 1.25rem;
          }

          @media (max-width: ${mobileBreak}) {
            max-height: 75vh;

            &.scrolled .primary-nav .header-title h1 {
              font-size: 1rem;
            }
          }
        `,
        primaryStyles,
        navStyles, // add the nav and button styles
        buttonStyles,
        NavbarContainerStyles,
        logoStyles,
        universalStyles,
        searchStyles,
        titleStyles,
        navbarTogglerStyles
      )}
      {...props}
    >
      {children}
    </header>
  );
};

const navbarTogglerStyles = css`
  .navbar-toggler {
    padding: 0.25rem 0.75rem;
    font-size: 1.25rem;
    line-height: 1;
    background-color: transparent;
    border-radius: 400rem;
    outline: 0;
    color: #191919;
    border: 0;
    margin-right: 2rem;
    cursor: pointer;

    @media (min-width: ${mobileBreak}) {
      display: none;
    }
  }
`;

const NavbarToggler = ({ mobileOpen, ...props }) => {
  return (
    <button
      {...props}
      class={cx(
        css`
          .fa-circle {
            color: #e8e8e8;
            font-size: 1rem;
            margin-left: -12px;
            height: 2em;
            width: 2.5em;
          }

          svg.svg-inline--fa.fa-times {
            height: 1em;
            width: 1.25em;
            margin-left: 7px;
          }
        `,
        "navbar-toggler"
      )}
    >
      {mobileOpen ? (
        <Icon type="circle-close" />
      ) : (
        <Icon
          type="bars"
          // If javascript is disabled, this should target and open the
          href="#asu-header-nav"
        />
      )}
    </button>
  );
};

const universalStyles = css`
  .universal-nav {
    padding: 0 2rem;
    display: flex;
    justify-content: center;
    background-color: #e8e8e8;
    height: 32px;
    transition: 0.5s cubic-bezier(0.19, 1, 0.19, 1);

    > div {
      width: 100%;
      max-width: 1200px;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: flex-end;

      > a {
        display: inline-block;
        font-size: 0.75rem;
        padding: 0.25rem 0.5rem;
        color: #484848;
      }
    }

    @media (max-width: ${mobileBreak}) {
      ${hiddenStyle}
      padding: 0;
      transition: none;
      &.mobile-open {
        ${showReset("fixed")}
        bottom: 0;
        z-index: 998;
        width 100%;
        display: flex;
        justify-content: center;
      }

      > div {
        > a {
          width: 50%;
          line-height: 2rem;
          text-align: center;
          border: 1px solid #cccccc;
          font-size: .9rem;
        }
      }
    }
  }
`;

const UniversalNav = props => {
  return (
    <div class={cx("universal-nav", props.open ? "mobile-open" : "")}>
      {props.children}
    </div>
  );
};

/** Primary Nav */
const primaryStyles = css`
  .primary-nav {
    background-color: #ffffff;
    display: flex;
    width: 100%;
    padding-right: 12px;
    padding-left: 12px;
    margin-right: auto;
    margin-left: auto;
    max-width: ${containerSize};

    > div {
      display: flex;
      flex-direction: row;
      width: 100%;
      align-items: flex-start;
      transition: 0.5s cubic-bezier(0.19, 1, 0.19, 1);
      position: relative;
      align-items: center;
    }

    @media (max-width: ${mobileBreak}) {
      position: fixed;
      display: flex;
      top: 0;
      width: 100%;
      height: auto;
      background-color: #ffffff;
      padding: 0;
      z-index: 1600;
      padding: 1.5rem 0 0 0;

      > div {
        padding: 0;
        flex-wrap: wrap;
        justify-content: space-between;
      }
    }
  }
`;
const PrimaryNav = props => {
  return <div class="primary-nav">{props.children}</div>;
};

const NavbarContainerStyles = css`
  .navbar-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    @media (max-width: ${mobileBreak}) {
      width: 100%;
    }
  }
`;

const NavbarContainer = props => {
  return (
    <div class={cx("navbar-container", props.class)}>{props.children}</div>
  );
};

const logoStyles = css`
  .navbar-brand {
    display: inline-block;
    padding-top: 0.3125rem;
    padding-bottom: 0.3125rem;
    margin-right: 1rem;
    font-size: 1.25rem;
    line-height: inherit;
    white-space: nowrap;
    padding: 0;
    margin: 0;

    .horiz {
      display: none;
    }

    .vert {
      @media (min-width: 992px) {
        display: block;
        height: 72px;
        width: auto;
        margin: 1.5rem 1rem 1.5rem 0;
      }
    }

    img {
      height: 80px;
    }

    @media (max-width: ${mobileBreak}) {
      img {
        float: none;
        height: 32px;
      }

      .vert {
        display: none;
      }
      .horiz {
        display: block;
        height: 32px;
        width: auto;
        margin-bottom: 1rem;
        margin-left: 2rem;
      }
    }
  }
`;

const Logo = props => {
  const brandLink = props.brandLink ? props.brandLink : "https://asu.edu";

  return (
    <a href={brandLink} class="navbar-brand">
      <img class="vert" src={props.src} alt={props.alt} />
      <img class="horiz" src={props.mobileSrc} />
    </a>
  );
};

const titleStyles = css`
  .header-title {
    line-height: 1;
    display: flex;
    flex-direction: column;

    margin: 1.5rem 0 1rem 0;
    font-weight: 700;
    line-height: 1;
    padding: 0;

    span {
      font-weight: bold;
      display: inline-block;

      @media (max-width: ${mobileBreak}) {
        display: none;
      }
    }

    h1 {
      font-weight: bold;
      font-size: 1rem;
      letter-spacing: -1px;
      background-image: linear-gradient(to right, transparent 50%, #ffc627 50%);
      background-position: 0%;
      background-size: 200%;
      display: inline-block;
      padding-right: 4px;
      transition: 0.5s cubic-bezier(0.19, 1, 0.19, 1);
      transition-duration: 1s;
    }

    @media (max-width: ${mobileBreak}) {
      padding: 0 2rem 1.5rem 2rem;
      margin: 0;

      h1 {
        font-size: 1rem;
        display: inline;
        line-height: -1rem;
      }
      width: 100%;
    }

    @media (min-width: 1260px) {
      line-height: 1;
      margin: 1rem 0;
      font-weight: 700;
      padding: 0;

      h1 {
        font-size: 1.5rem;
        margin-bottom: 0;
      }
    }
  }
`;

const Title = props => {
  return (
    <div class="header-title">
      <span>{props.title}</span>
      <br />
      <h1>{props.subtitle}</h1>
    </div>
  );
};

const searchStyles = css`
  .asu-search-form {
    > form {
      display: none;

      > input {
        padding: 0.1rem 2rem;
      }

      &.show-search-input {
        display: inline-flex;
      }
    }

    > a {
      display: inline-block;
      font-size: 0.75rem;
      color: #484848;
    }

    @media (max-width: ${mobileBreak}) {
      width: 100%;
      display: inline-block;
      order: -1;

      > form {
        width: 100%;
        display: inline-flex;
        align-items: center;
        padding: 1rem 2rem;

        > input {
          padding: 0.5rem 2rem;
          display: inline-block;
          width: 100%;
          border: 0;
        }

        > button {
          font-size: 1rem;
          opacity: 0.75;
        }
      }

      > a {
        display: none;
      }

      button {
        width: 2.5rem;
        height: 2.5rem;
      }

      > svg {
        ${hiddenStyle}
      }
    }

    button {
      font-size: 0.75rem;
      border: none;
      background: transparent;
      cursor: pointer;
      margin-right: -30px;
      z-index: 20;
      width: 1.5rem;
      height: 1.5rem;
      padding: 0;
    }
  }
`;

const SearchForm = props => {
  // TODO: handle custom search
  return (
    <div class="asu-search-form">
      <form
        action="https://search.asu.edu/search"
        method="get"
        role="search"
        class={props.open ? "show-search-input" : ""}
      >
        <input name="q" type="text" />
      </form>
      {props.children}
    </div>
  );
};

export {
  Header,
  UniversalNav,
  PrimaryNav,
  Title,
  Logo,
  SearchForm,
  showReset,
  NavbarContainer,
  Icon,
  NavbarToggler,
};
