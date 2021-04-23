/* eslint react/jsx-props-no-spreading: "off" */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import PropTypes from "prop-types";
import React from "react";

import UdsStyles from "../../../vendor/css/bootstrap-asu.min.module.css";

export const Button = ({
  ariaLabel,
  block,
  children,
  color,
  disabled,
  element,
  icon,
  innerRef,
  href,
  onClick,
  size,
  ...attributes
}) => {
  const btnClasses = classNames(UdsStyles["btn"], {
    [UdsStyles[`btn-${color}`]]: true,
    [UdsStyles[`btn-md`]]: size === "small",
    [UdsStyles[`btn-sm`]]: size === "xsmall",
    [UdsStyles[`btn-block`]]: block,
    [UdsStyles[`disabled`]]: disabled,
  });

  let Tag = element;
  if (href && element === "button") {
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
  children: PropTypes.node.isRequired,
  color: PropTypes.oneOf(["gold", "maroon", "gray", "dark"]),
  disabled: PropTypes.bool,
  element: PropTypes.oneOf(["button", "a"]),
  href: PropTypes.string,
  icon: PropTypes.elementType,

  // ref will only get you a reference to the Button component, use innerRef to get a reference to the DOM element (for things like focus management).
  innerRef: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.func,
    PropTypes.string,
  ]),

  onClick: PropTypes.func,
  size: PropTypes.oneOf(["default", "small", "xsmall"]),
};

Button.defaultProps = {
  ariaLabel: undefined,
  block: undefined,
  color: "gray",
  disabled: undefined,
  element: "button",
  href: undefined,
  icon: undefined,
  innerRef: undefined,
  onClick: undefined,
  size: "default",
};
