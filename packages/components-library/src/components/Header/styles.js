/** @jsx h */
/* eslint-disable react/prop-types */
import { h } from "preact";
import { injectGlobal, cx } from "emotion";
import Tokens from "../../theme";

const mobileBreak = Tokens.BreakpointLg;

const Header = props => {
  injectGlobal`

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      text-decoration: none;
      list-style: none;
      font-size: 100%;
    }

    .asu-header-wrapper {
      padding: 0;
      border-bottom: 1px solid #cccccc;
      display: flex;
      flex-direction: column;
      div,
      h1 {
        font-family: Arial, sans-serif;
      }
    }
  `;

  return <header class="asu-header-wrapper">{props.children}</header>;
};

const UniversalNav = props => {

  injectGlobal`
    .asu-universal-nav {
      padding: 0 1rem;
      background-color: #e8e8e8;
      text-align: right;

      > div {
        max-width: 1200px;
        margin: 0 auto;
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-end;
        align-items: center;

        > a {
          display: inline-block;
          font-size: 0.75rem;
          padding: 0.25rem 0.5rem;
          color: #484848;
        }
      }

      @media (max-width: ${mobileBreak}) {
        display: none;
        padding: 0;
        &.universal-mobile-open {
          height: auto;
          position: fixed;
          bottom: 0;
          z-index: 1500;
          width 100%;
          display: flex;
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
  `;

  return <div class={cx("asu-universal-nav", props.class)}>{props.children}</div>;
};

/** Class styles */
const PrimaryNav = props => {
  injectGlobal`
    .asu-primary-nav {
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
    `;


  return (
    <div class="asu-primary-nav">
      {props.children}
    </div>
  );
};

const Logo = props => {
  injectGlobal`
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
  `;

  return (
    <div class="header-logo">
      <img class="logo-full" src={props.src} alt={props.alt} />
      <img class="logo-mobile" src={props.mobileSrc} />
    </div>
  );
};

const Title = props => {
  injectGlobal`
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
        font-size: 1.5rem;
        font-weight: bold;


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
  `;

  return (
    <div class="header-title">
      <span>{props.title}</span>
      <br />
      <h1>{props.subtitle}</h1>
    </div>
  );
};

const IconHamburger = props => {

  injectGlobal`
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
  `;


  return (
    <a {...props} class="asu-icon-hamburger">
      <span class="fa fa-bars">
        <span class="sr-only">Menu</span>
      </span>
    </a>
  );
};

const SearchForm = props => {

  injectGlobal`
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
  `;

   // TODO: handle custom search
  return (
    <div class="asu-search-form" >
      <form
        action="https://search.asu.edu/search"
        method="get"
        role="search"
        class={props.open ? "show-search-input": ""}
      >
        <button type="submit" class="searchButton">
          <IconSearch />
        </button>
        <input name="q" placeholder="Search asu.edu" type="text"  />
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
}

export { Header, UniversalNav, PrimaryNav, Title, Logo, IconHamburger, SearchForm, IconSearch };
