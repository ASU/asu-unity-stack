/* eslint-disable react/prop-types */

import PropTypes from "prop-types";

import {
  IconMobile,
  IconChevronDown,
  IconSearch,
  IconDesktop,
  IconClipboard,
  IconMapPin,
  IconExclTriangle,
  IconBell,
  IconInfoCircle,
  IconCircleClose,
  IconBars,
  IconHome,
} from "./styles";

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
    case "home":
      return <IconHome {...props} />;
    default:
      return "";
  }
};

Icon.propTypes = {
  type: PropTypes.string.isRequired,
};

Icon.defaultProps = {};

export { Icon };
