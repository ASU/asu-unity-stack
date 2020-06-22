/** @jsx h */
/* eslint-disable react/prop-types */
import { h } from "preact";
import { css, cx } from "emotion";

const Nav = props => {
  return <nav className={"header-nav"}>{props.children}</nav>;
};

const DdMenu = props => {
  return (
    <div
      className={cx(
        css`
          background-color: white;

          > ul {
            flex-direction: column;
          }
        `,
        props.open ? "header-nav-open" : ""
      )}
    >
      {props.children}
    </div>
  );
};

const IconChevronDown = props => {
  return (
    <span class="fa fa-chevron-down"><span class="sr-only">{props.sr}</span></span>
  );
}

export { Nav, DdMenu, IconChevronDown };
