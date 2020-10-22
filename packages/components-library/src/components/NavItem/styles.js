/** @jsx h */
/** @jsxFrag Fragment */
/* eslint-disable react/prop-types */
import { h } from "preact";
import { forwardRef } from "preact/compat";
import { Icon } from "../Icons";
import { css, cx } from "emotion";
import { Button } from "../";
import {
  hiddenStyle,
  showReset,
  srOnly,
  BreakpointLg,
  BreakpointXl,
} from "../../theme";

const navItemStyles = breakpoint => css`
  .navlink,
  .navicon {
    padding: 0.5rem 0;

    > a {
      padding: 8px;
      position: relative;
      color: #191919;

      &.nav-item {
        display: block;
      }
    }

    @media (max-width: ${breakpoint}) {
      border-bottom: 1px solid #cccccc;

      .icon-nav-item {
        ${hiddenStyle}
      }
    }
  }

  .navlink {
    @media (min-width: ${breakpoint}) {
      > a {
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

  .navbutton {
    margin-top: 1rem;

    @media (min-width: ${breakpoint}) {
      position: absolute;
      bottom: 0;
      margin: 0;
    }
  }
`;

const NavLink = forwardRef(({ onFocus, text, ...props }, ref) => {
  return (
    <li class="navlink">
      <a
        {...props}
        class={cx("nav-item", props.class)}
        {...(onFocus ? { onFocus } : "")}
        ref={ref}
      >
        {text}
      </a>
    </li>
  );
});

const NavIcon = forwardRef(({ children, onFocus, type, ...props }, ref) => {
  return (
    <li class="navicon">
      <a
        {...props}
        class={props.class ? props.class : ""}
        {...(onFocus ? { onFocus } : "")}
        ref={ref}
      >
        {/* Use className here instead of class because FontAwesome React component expects it*/}
        <Icon type={type} className="icon-nav-item" />
        <span class="mobile-only">{children}</span>
      </a>
    </li>
  );
});

const NavButton = forwardRef(({ children, ...props }, ref) => {
  return (
    <li class={cx("navbutton", props.class)}>
      <Button {...props} ref={ref} medium dark>
        {children}
      </Button>
    </li>
  );
});

export { NavLink, NavIcon, NavButton, navItemStyles };
