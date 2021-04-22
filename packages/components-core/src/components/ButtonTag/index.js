import classNames from "classnames";
import PropTypes from "prop-types";
import React from "react";

import UdsStyles from "../../../vendor/css/bootstrap-asu.min.module.css";

export const ButtonTag = ({
  ariaLabel,
  children,
  color,
  disabled,
  element: Tag,
  innerRef,
  href,
  onClick,
  ...attributes
}) => {
  const btnClasses = classNames(UdsStyles["btn"], UdsStyles[`btn-tag`], {
    [UdsStyles[`btn-tag-alt-white`]]: "white" === color,
    [UdsStyles[`btn-tag-alt-gray`]]: "gray" === color,
    [UdsStyles[`btn-tag-alt-dark`]]: "dark" === color,
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
      {children}
    </Tag>
  );
};

ButtonTag.propTypes = {
  ariaLabel: PropTypes.string,
  block: PropTypes.bool,
  children: PropTypes.node,
  color: PropTypes.oneOf(["white", "gray", "dark"]),
  disabled: PropTypes.bool,
  element: PropTypes.oneOf(["button", "a"]),

  // ref will only get you a reference to the Button component, use innerRef to get a reference to the DOM element (for things like focus management).
  innerRef: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.func,
    PropTypes.string,
  ]),

  href: PropTypes.string,
  onClick: PropTypes.func,
};

ButtonTag.defaultProps = {
  color: "gray",
  element: "button",
};
