/** @jsx h */
/* eslint-disable react/prop-types */
import { h } from "preact";
import { cx, css } from "emotion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faDesktop, faMobile, faSearch, faBars } from '@fortawesome/free-solid-svg-icons';
import Tokens from "../../theme";

const IconHamburger = props => {
  return (
    <a {...props} class="asu-icon-hamburger">
      <FontAwesomeIcon icon={faBars} {...props} />
    </a>
  );
};

const IconSearch = props => {
  return (
    <FontAwesomeIcon icon={faSearch} {...props} />
  );
};

const IconChevronDown = props => {
  return (
    <FontAwesomeIcon icon={faChevronDown} {...props} />
  );
};

const IconMobile = props => {
  return (
    <FontAwesomeIcon icon={faMobile} {...props} />
  );
};

const IconDesktop = props => {
  return (
    <FontAwesomeIcon icon={faDesktop} {...props} />
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
