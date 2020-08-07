/** @jsx h */
/* eslint-disable react/prop-types */
import { h } from "preact";
import { cx, css } from "emotion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faDesktop,
  faMobile,
  faSearch,
  faBars,
  faClipboard,
  faMapPin,
  faExclamationTriangle,
  faBell,
  faInfoCircle
} from "@fortawesome/free-solid-svg-icons";
import Tokens from "../../theme";

const IconHamburger = props => {
  return (
    <a {...props} class="asu-icon-hamburger">
      <FontAwesomeIcon icon={faBars} {...props} />
    </a>
  );
};

const IconSearch = props => {
  return <FontAwesomeIcon icon={faSearch} {...props} />;
};

const IconChevronDown = props => {
  return <FontAwesomeIcon icon={faChevronDown} {...props} />;
};

const IconMobile = props => {
  return <FontAwesomeIcon icon={faMobile} {...props} />;
};

const IconDesktop = props => {
  return <FontAwesomeIcon icon={faDesktop} {...props} />;
};

const IconClipboard = props => {
  return <FontAwesomeIcon icon={faClipboard} {...props} />;
};

const IconMapPin = props => {
  return <FontAwesomeIcon icon={faMapPin} {...props} />;
};

const IconExclTriangle = props => {
  return <FontAwesomeIcon icon={faExclamationTriangle} {...props} />;
};

const IconBell = props => {
  return <FontAwesomeIcon icon={faBell} {...props} />;
};

const IconInfoCircle = props => {
  return <FontAwesomeIcon icon={faInfoCircle} {...props} />;
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
    case "clipboard":
      return <IconClipboard {...props} />;
    case "map-pin":
      return <IconMapPin {...props} />;
    case "exclamation-triangle":
      return <IconExclTriangle {...props} />;
    case "bell":
      return <IconBell {...props} />;
    case "info-circle":
      return <IconInfoCircle {...props} />;
    default:
      return "";
  }
};

export { Icon, IconHamburger, IconSearch, IconChevronDown, IconMobile };
