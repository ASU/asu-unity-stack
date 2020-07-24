/** @jsx h */
/* eslint-disable react/prop-types */
import { h } from "preact";
import { cx, css } from "emotion";
import Tokens from "../../theme";
import { navStyles } from "../Nav/styles";
import { buttonStyles } from "../Button/styles";
import { hiddenStyle, showReset } from "../../styles/common";

const mobileBreak = Tokens.BreakpointLg;

const Header = ({
  scrollPosition,
  children,
  ...props
}) => {
  return (
    <header
      class={cx(
        scrollPosition > 0 ? "scrolled": "",
        css`
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            text-decoration: none;
            list-style: none;
            font-size: 100%;
          }

          a {
            cursor: pointer;
          }

          padding: 0;
          display: flex;
          flex-direction: column;
          position: fixed;
          width: 100%;
          z-index: 9999;
          background: #ffffff;
          border-bottom: 1px solid #e8e8e8;
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
          &.scrolled .primary-nav .asu-icon-hamburger span {
            font-size: 1rem;
          }
          &.scrolled .primary-nav .header-logo img {
            height: 64px;
          }
          @media (max-width: ${mobileBreak}) {
            &.scrolled .primary-nav .header-logo img {
              height: 28px;
            }
          }
          &.scrolled .primary-nav .header-title h1 {
            font-size: 1.25rem;
          }
          @media (max-width: ${mobileBreak}) {
            max-height: 75vh;
            overflow-y: scroll;

            &.scrolled .primary-nav .header-title h1 {
              font-size: 1rem;
            }
          }

          .universal-nav {
            padding: 0 1rem;
            background-color: #e8e8e8;
            text-align: right;
            display: flex;
            justify-content: flex-end;

            > div {
              max-width: 1200px;
              display: flex;
              flex-wrap: wrap;
              align-items: center;

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
              &.mobile-open {
                ${showReset("fixed")}
                bottom: 0;
                z-index: 1500;
                width 100%;
                display: flex;
                justify-content: center;
              }

              > div {
                max-width: 600px;

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

          .primary-nav {
            background-color: #ffffff;

            > div {
              max-width: 1200px;
              margin: 0 auto;
              padding: 1rem 1rem 0 1rem;
            }

            @media (max-width: ${mobileBreak}) {
              > div {
                position: fixed;
                display: flex;
                flex-wrap: wrap;
                flex-direction: row;
                top: 0;
                width: 100%;
                height: auto;
                background-color: #ffffff;
                padding: 1rem;
                z-index: 1600;
              }
            }
          }

          .header-logo {
            float: left;
            display: inline-block;
            margin-right: 1.5rem;
            flex-grow: 1;

            .logo-mobile {
              display: none;
            }

            img {
              height: 80px;
            }

            @media (max-width: ${mobileBreak}) {
              img {
                float: none;
                height: 32px;
              }

              .logo-full {
                display: none;
              }
              .logo-mobile {
                display: inline-block;
                float: none;
                height: 32px;
              }
            }
          }

          .header-title {
            span {
              font-weight: bold;
              font-size: 1rem;
              display: inline-block;
              margin-bottom: 0.5rem;

              @media (max-width: ${mobileBreak}) {
                display: none;
              }
            }

            h1 {
              font-weight: bold;
              font-size: 1.5rem;
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
              h1 {
                font-size: 1rem;
                display: inline;
                line-height: -1rem;
              }
              width: 100%;
            }
          }

          .asu-icon-hamburger {
            float: right;
            display: none;
            font-size: 1.4rem;
            color: black;
            text-decoration: none;

            @media (max-width: ${mobileBreak}) {
              display: inline-block;
            }
          }

          .asu-search-form {

            > form {
              display: none;
              padding: .2rem .5rem;

              > input {
                padding: .1rem 2rem;
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
              border: 1px solid #cccccc;
              padding: 1rem;

              > form {
                width: 100%;
                display: inline-flex;

                > input {
                  padding: .5rem 2rem;
                  display: inline-block;
                  width: 100%;
                }

                > button {
                  font-size: 1rem;
                  opacity: .75;
                }
              }

              > a {
                display: none;
              }

              button {
                width: 2.5rem;
                height: 2.5rem;
              }
            }

            button {
              font-size: .75rem;
              border: none;
              background: transparent;
              cursor: pointer;
              margin-right: -40px;
              z-index: 20;
              width: 1.5rem;
              height: 1.5rem;
              padding: .5rem 2rem;
            }
          }
        `,
        navStyles, // add the nav and button styles
        buttonStyles
      )}
      {...props}
    >
      {children}
    </header>
  );
};

const UniversalNav = props => {
  return (
    <div class={cx("universal-nav", props.open ? "mobile-open" : "")}>{props.children}</div>
  );
};

/** Class styles */
const PrimaryNav = props => {
  return <div class="primary-nav">{props.children}</div>;
};

const Logo = props => {
  return (
    <div class="header-logo">
      <img class="logo-full" src={props.src} alt={props.alt} />
      <img class="logo-mobile" src={props.mobileSrc} />
    </div>
  );
};

const Title = props => {
  return (
    <div class="header-title">
      <span>{props.title}</span>
      <br />
      <h1>{props.subtitle}</h1>
    </div>
  );
};

const IconHamburger = props => {
  return (
    <a {...props} class="asu-icon-hamburger">
      <span class="fa fa-bars">
        <span class="sr-only">Menu</span>
      </span>
    </a>
  );
};

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
        <button type="submit" class="searchButton">
          <IconSearch />
        </button>
        <input name="q" placeholder="Search asu.edu" type="text" />
      </form>
      {props.children}
    </div>
  );
};

const IconSearch = props => {
  return (
    <a class="asu-search-icon">
      <span class="fa fa-search" {...props}>
        <span class="sr-only">Search</span>
      </span>
    </a>
  );
};

export {
  Header,
  UniversalNav,
  PrimaryNav,
  Title,
  Logo,
  IconHamburger,
  SearchForm,
  IconSearch,
  showReset,
};
