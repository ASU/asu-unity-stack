/* eslint-disable react/prop-types */
import { css, cx } from "@emotion/css";
import { forwardRef } from "preact/compat";

import { Button } from "../";
import { focusStyle, hiddenStyle, breakpointForMin } from "../../theme";
import { Icon } from "../Icons";

const navItemStyles = breakpoint => css`
  a {
    ${focusStyle}
  }

  .navlink,
  .navicon,
  .navbutton {
    padding: 0;
    margin: 0;

    > a {
      padding: 0.5rem;
      position: relative;

      &.nav-item-selected {
        color: #8c1d40;
        text-decoration: underline;
      }

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
    > a {
      color: #191919;
      padding: 1rem 0.5rem;
    }

    @media (min-width: ${breakpointForMin(breakpoint)}) {
      > a {
        padding: 0.5rem 0;

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
    margin-top: auto;
    padding-top: 1rem;

    @media (min-width: ${breakpointForMin(breakpoint)}) {
      order: 1;
    }

    @media (max-width: ${breakpoint}) {
      margin-top: 1rem;
    }
  }
`;

const NavLink = forwardRef(({ onFocus, children, selected, ...props }, ref) => {
  return (
    <li class="navlink">
      <a
        {...props}
        class={cx("nav-item", props.class, selected ? "nav-item-selected" : "")}
        {...(onFocus ? { onFocus } : "")}
        ref={ref}
      >
        {children}
      </a>
    </li>
  );
});

const NavIcon = forwardRef(
  ({ children, onFocus, type, alt, selected, ...props }, ref) => {
    return (
      <li class="navicon">
        <a
          {...props}
          class={cx(
            props.class ? props.class : "",
            selected ? "nav-item-selected" : ""
          )}
          {...(onFocus ? { onFocus } : "")}
          ref={ref}
        >
          {/* Use className here instead of class because FontAwesome React component expects it*/}
          <Icon type={type} className="icon-nav-item" alt={alt} />
          <span class="mobile-only">{children}</span>
        </a>
      </li>
    );
  }
);

const NavButton = forwardRef(({ children, selected, ...props }, ref) => {
  return (
    <li class={cx("navbutton", props.class)}>
      <Button {...props} ref={ref} medium dark>
        {children}
      </Button>
    </li>
  );
});

export { NavLink, NavIcon, NavButton, navItemStyles };
