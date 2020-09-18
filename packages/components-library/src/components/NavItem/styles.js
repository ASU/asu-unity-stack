/** @jsx h */
/* eslint-disable react/prop-types */
import { h } from "preact";
import { forwardRef } from "preact/compat";
import { Icon } from "../Icons";
import { css, cx } from "emotion";
import {
  hiddenStyle,
  showReset,
  srOnly,
  BreakpointLg,
  BreakpointXl,
} from "../../theme";

const NavLink = forwardRef(({ onFocus, text, ...props }, ref) => {
  return (
    <a
      {...props}
      class={cx("nav-item", props.class)}
      {...(onFocus ? { onFocus } : "")}
      ref={ref}
    >
      {text}
    </a>
  );
});

const NavIcon = forwardRef(({ children, onFocus, type, ...props }, ref) => {
  return (
    <a {...props} class={cx("nav-icon", props.class)} {...(onFocus ? { onFocus } : "")} ref={ref}>
      <Icon type={type} className="icon-nav-item" />
      <span class="mobile-only">{children}</span>
    </a>
  );
});

export { NavLink, NavIcon };
