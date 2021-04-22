import classNames from "classnames";
import PropTypes from "prop-types";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import UdsStyles from "../../../vendor/css/bootstrap-asu.min.module.css";

export const Button = ({
  ariaLabel,
  block,
  children,
  color,
  disabled,
  element: Tag,
  icon,
  innerRef,
  href,
  onClick,
  size,
  ...attributes
}) => {
  const btnClasses = classNames(UdsStyles["btn"], {
    [UdsStyles[`btn-${color}`]]: true,
    [UdsStyles[`btn-md`]]: "small" === size,
    [UdsStyles[`btn-sm`]]: "xsmall" === size,
    [UdsStyles[`btn-block`]]: block,
    [UdsStyles[`disabled`]]: disabled,
  });

  if (href && Tag === "button") {
    Tag = "a";
  }

  return (
    <Tag
      type={Tag === "button" && onClick ? "button" : undefined}
      {...attributes}
      className={btnClasses}
      href={href}
      ref={innerRef}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      {icon && <FontAwesomeIcon icon={icon} />}
      {icon && `  `}
      {children}
    </Tag>
  );
};

Button.propTypes = {
  ariaLabel: PropTypes.string,
  block: PropTypes.bool,
  children: PropTypes.node,
  color: PropTypes.oneOf(["gold", "maroon", "gray", "dark"]),
  disabled: PropTypes.bool,
  element: PropTypes.oneOf(["button", "a"]),
  icon: PropTypes.elementType,

  // ref will only get you a reference to the Button component, use innerRef to get a reference to the DOM element (for things like focus management).
  innerRef: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.func,
    PropTypes.string,
  ]),

  href: PropTypes.string,
  onClick: PropTypes.func,
  size: PropTypes.oneOf(["default", "small", "xsmall"]),
};

Button.defaultProps = {
  color: "gray",
  element: "button",
  size: "default",
};
