/** @jsx h */
/* eslint-disable react/prop-types */
import { h } from "preact";
import { cx, css } from "emotion";
import Tokens from "../../theme";

const IconHamburger = props => {
  return (
    <a {...props} class="asu-icon-hamburger">
      <span class="fa fa-bars">
        <span class="sr-only">Menu</span>
      </span>
    </a>
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

const IconChevronDown = props => {
  return (
    <span class="fa fa-chevron-down">
      <span class="sr-only">{props.sr}</span>
    </span>
  );
};

const IconMobile = props => {
  return (
    <span class="fas fa-mobile">
      <span class="sr-only">{props.sr}</span>
    </span>
  );
};

const IconDesktop = props => {
  return (
    <span class="fas fa-desktop">
      <span class="sr-only">{props.sr}</span>
    </span>
  );
};

const Icon = ({ type, ...props }) => {
  switch (type) {
    case "mobile":
      return <IconMobile />;
    case "chevron-down":
      return <IconChevronDown {...props} />;
    case "search":
      return <IconSearch {...props} />;
    case "desktop":
      return <IconDesktop {...props} />;
    default:
      return "";
  }
};

export { Icon, IconHamburger, IconSearch, IconChevronDown, IconMobile };
