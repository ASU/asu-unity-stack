/** @jsx h */
/* eslint-disable react/prop-types */
import { h } from "preact";
import { css, injectGlobal } from "emotion";
import Tokens from "../../theme";

const mobileBreak = Tokens.BreakpointLg;

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
    font-size: 1.5rem;
    font-weight: bold;

    @media (max-width: ${mobileBreak}) {
      font-size: 1rem;
      display: inline;
      line-height: -1rem;
    }
  }
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
  list-style: none;
  font-size: 100%;
} `;

const Header = props => {
  return (
    <header
      className={css`
        padding: 0;

        div,
        h1 {
          font-family: Arial, sans-serif;
        }
      `}
    >
      {props.children}
    </header>
  );
};

const UniversalNav = props => {
  return (
    <div
      className={css`
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
      `}
    >
      {props.children}
    </div>
  );
};

/** Class styles */
const PrimaryNav = props => {
  return (
    <div
      className={css`
        padding-top: 1rem;
        background-color: #ffffff;

        > div {
          max-width: 1200px;
          margin: 0 auto;

          @media (max-width: ${mobileBreak}) {
            margin: 0px 32px;
          }
        }
      `}
    >
      <div>{props.children}</div>
    </div>
  );
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
    <div
      {...props}
      className={css`
        float: right;
        display: none;
        font-size: 1.4rem;

        @media (max-width: ${mobileBreak}) {
          display: inline-block;
        }
      `}
    >
      <span class="fa fa-bars">
        <span class="sr-only">Menu</span>
      </span>
    </div>
  );
};

export { Header, UniversalNav, PrimaryNav, Title, Logo, IconHamburger };
