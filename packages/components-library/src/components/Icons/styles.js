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
  faInfoCircle,
  faCircle,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import Tokens from "../../theme";

const IconBars = props => {
  return <FontAwesomeIcon icon={faBars} {...props} />;
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

const IconCircleClose = props => {
  return (
    <span class={cx("fa-layers fa-fw", props.class)}>
      <FontAwesomeIcon icon={faCircle} size="2x" />
      <FontAwesomeIcon icon={faTimes} size="1x" />
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
    case "circle-close":
      return <IconCircleClose {...props} />;
    case "bars":
      return <IconBars {...props} />;
    default:
      return "";
  }
};

export {
  Icon,
  IconBars,
  IconSearch,
  IconChevronDown,
  IconMobile,
  IconCircleClose,
};
