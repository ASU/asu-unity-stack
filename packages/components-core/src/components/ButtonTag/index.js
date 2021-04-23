/* eslint react/jsx-props-no-spreading: "off" */
import classNames from "classnames";
import PropTypes from "prop-types";
import React from "react";

import UdsStyles from "../../../vendor/css/bootstrap-asu.min.module.css";

export const ButtonTag = ({
  ariaLabel,
  children,
  color,
  disabled,
  element,
  innerRef,
  href,
  onClick,
  ...attributes
}) => {
  const btnClasses = classNames(UdsStyles["btn"], UdsStyles[`btn-tag`], {
    [UdsStyles[`btn-tag-alt-white`]]: color === "white",
    [UdsStyles[`btn-tag-alt-gray`]]: color === "gray",
    [UdsStyles[`btn-tag-alt-dark`]]: color === "dark",
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
      {children}
    </Tag>
  );
};

ButtonTag.propTypes = {
  ariaLabel: PropTypes.string,
  children: PropTypes.node,
  color: PropTypes.oneOf(["white", "gray", "dark"]),
  disabled: PropTypes.bool,
  element: PropTypes.oneOf(["button", "a"]),
  href: PropTypes.string,

  // ref will only get you a reference to the Button component, use innerRef to get a reference to the DOM element (for things like focus management).
  innerRef: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.func,
    PropTypes.string,
  ]),

  onClick: PropTypes.func,
};

ButtonTag.defaultProps = {
  ariaLabel: undefined,
  children: undefined,
  color: "gray",
  disabled: false,
  element: "button",
  href: undefined,
  innerRef: undefined,
  onClick: undefined,
};
