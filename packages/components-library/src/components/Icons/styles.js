
/* eslint-disable react/prop-types */

import { cx } from "@emotion/css";
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
  faHome,
} from "@fortawesome/free-solid-svg-icons";

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

const IconHome = props => {
  return <FontAwesomeIcon icon={faHome} {...props} />;
};

export {
  IconBars,
  IconSearch,
  IconChevronDown,
  IconMobile,
  IconCircleClose,
  IconHome,
  IconClipboard,
  IconDesktop,
  IconMapPin,
  IconInfoCircle,
  IconBell,
  IconExclTriangle,
};
