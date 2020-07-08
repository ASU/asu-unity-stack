/** @jsx h */
/* eslint-disable react/prop-types */
import { h } from "preact";
import { css, injectGlobal } from "emotion";
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
      form {
        display: inline-flex;
      }

      background-color: #e8e8e8;
      text-align: right;

      > div {
        max-width: 1200px;
        margin: 0 auto;

        > a {
          display: inline-block;
          font-size: 0.75rem;
          padding: 0.25rem 0.5rem;
          color: #484848;
        }
      }

      @media (max-width: ${mobileBreak}) {
        display: none;
      }
    }
  `;

  return <div class="asu-universal-nav">{props.children}</div>;
};

/** Class styles */
const PrimaryNav = props => {
  injectGlobal`
    .asu-primary-nav {
      padding-top: 1rem;
      background-color: #ffffff;

      > div {
        max-width: 1200px;
        margin: 0 auto;

        @media (max-width: ${mobileBreak}) {

        }
      }
    }
    `;


  return (
    <div class="asu-primary-nav">
      <div>{props.children}</div>
    </div>
  );
};

const Logo = props => {
  injectGlobal`
    .header-logo {
      float: left;
      display: inline-block;
      margin-right: 1.5rem;

      .logo-mobile {
        display: none;
      }

      img {
        height: 80px;
      }

      @media (max-width: ${mobileBreak}) {
        float: none;
        margin: 0px 32px;

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

        @media (max-width: ${mobileBreak}) {
          font-size: 1rem;
          display: inline;
          line-height: -1rem;
        }
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
        margin-right: 32px;
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

export { Header, UniversalNav, PrimaryNav, Title, Logo, IconHamburger };
