/** @jsx h */
/* eslint-disable react/prop-types */
import { h } from "preact";
import {forwardRef} from "preact/compat";
import { cx, css } from "emotion";
import { mobileBreak, containerSize, primaryNavTopPadding } from "../../theme";
import { navStyles } from "../Nav/styles";
import { buttonStyles } from "../Button/styles";
import { searchStyles } from "../Search/styles";
import { loginStyles } from "../Login/styles";
import { Icon } from "../Icons";

const Header = ({ children, ...props }) => {
  return (
    <header
      {...props}
      class={cx(
        props.class,
        css`
          *,
          *:before,
          *:after {
            box-sizing: border-box;
          }

          :focus {
            outline: 0;
            box-shadow: 0 0 8px #00baff !important;
          }

          a {
            cursor: pointer;
            text-decoration: none;
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
          left: 0;

          div,
          h1 {
            font-family: Arial, sans-serif;
          }

          &.scrolled {
            transition: 0.5s cubic-bezier(0.19, 1, 0.19, 1);
          }

          @media (max-width: ${mobileBreak}) {
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
        loginStyles,
        navbarTogglerStyles
      )}
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
    height: 24px;
    transition: 0.5s cubic-bezier(0.19, 1, 0.19, 1);

    > div {
      width: 100%;
      max-width: ${containerSize};
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: flex-end;

      > div {
        > a {
          display: inline-flex;
          font-size: 0.75rem;
          padding: 0.25rem 0.5rem;
          color: #484848;
          margin: 0;
        }
      }
    }

    @media (max-width: ${mobileBreak}) {
      display: none;
      padding: 0;
      transition: none;
      height: auto;

      &.mobile-open {
        z-index: 998;
        width 100%;
        display: flex;
        justify-content: center;
      }

      .nav-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-auto-flow: row;
        justify-items: start;
        width: 100%;

        > a, div {
          color: #191919;
          margin-right: 0;
          text-align: center;
          width: 100%;
          font-size: 0.875rem;
          padding: 1rem 1.5rem;
          border-top: 1px solid #d0d0d0;
          display:block;

          :nth-child(even) {
            border-left: 1px solid #d0d0d0;
          }
        }
      }

    }
  }

  @media (min-width: ${mobileBreak}) {
    &.scrolled .universal-nav {
      height: 0;
      overflow: hidden;
    }

    .universal-nav {
      &.search-open {
        height: 48px;
      }

      .nav-grid {
        display: flex;
      }
    }
  }
`;

const UniversalNav = props => {
  return (
    <div
      class={cx(
        "universal-nav",
        props.open ? "mobile-open" : "",
        props.searchOpen ? "search-open" : ""
      )}
      ref={props.domRef}
    >
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
      order: -1;
      display: flex;
      top: 0;
      width: 100%;
      height: auto;
      background-color: #ffffff;
      padding: 0;
      z-index: 1600;
      padding: ${primaryNavTopPadding} 0 0 0;

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
    width: 100%;
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
      transition: 0.5s cubic-bezier(0.19, 1, 0.19, 1);
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

  &.scrolled .primary-nav .navbar-brand d img {
    height: 64px;
  }

  @media (max-width: ${mobileBreak}) {
    &.scrolled .primary-nav .navbar-brand d img {
      height: 28px;
    }

    &.scrolled .navbar-brand .horiz {
      margin-bottom: 0.5rem;
    }
  }
`;

const Logo = props => {
  const brandLink = props.brandLink ? props.brandLink : "https://asu.edu";

  return (
    <a href={brandLink} class="navbar-brand" ref={props.domRef}>
      <img class="vert" src={props.src} alt={props.alt} />
      <img class="horiz" src={props.mobileSrc} />
    </a>
  );
};

/** Title */
const titleStyles = css`
  .title {
    line-height: 1;
    font-size: 1rem;
    font-weight: 700;
    padding: 0 2rem 1.5rem 2rem;
    transition: 0.5s cubic-bezier(0.19, 1, 0.19, 1);

    > a {
      display: none;
    }

    @media (min-width: ${mobileBreak}) {
      line-height: 1;
      margin: 1rem 0;
      font-weight: 700;
      padding: 0;

      > a {
        font-size: 1rem;
        margin-bottom: 0.5rem;
        display: block;
      }

      &.subdomain-name {
        font-size: 2rem;
        margin: 1.5rem 0 1rem 0;
        font-weight: 700;
      }

      .subdomain-name {
        font-size: 1.5rem;
        margin-bottom: 0;
      }
    }
  }

  &.scrolled .title {
    padding-bottom: 1rem;
  }

  @media (min-width: ${mobileBreak}) {
    &.scrolled .title.subdomain-name {
      font-size: 1.5rem;
    }

    &.scrolled .title {
      padding-bottom: 0;
    }
  }
`;

const Title = forwardRef(({ title, unit, domRef, ...props }, ref) => {
  if (unit) {
    return (
      <div class="title" ref={ref}>
        <a class="unit-name">{unit}</a>
        <span class="subdomain-name">{title}</span>
      </div>
    );
  }
  return <div class="title subdomain-name" ref={ref}>{title}</div>;
});

export {
  Header,
  UniversalNav,
  PrimaryNav,
  Title,
  Logo,
  NavbarContainer,
  Icon,
  NavbarToggler,
  mobileBreak,
  primaryNavTopPadding
};
