// @ts-check
/* eslint react/jsx-props-no-spreading: "off" */
import classNames from "classnames";
import PropTypes from "prop-types";
import React from "react";

/**
 * @typedef {import('../../core/models/shared-model-types').TagsProps} ButtonTagProps
 */

/**
 * @param {ButtonTagProps} props
 * @returns {JSX.Element}
 */
export const ButtonTag = ({
  label,
  ariaLabel,
  color,
  disabled,
  element,
  innerRef,
  href,
  onClick,
  ...props
}) => {
  const btnClasses = classNames("btn", `btn-tag`, {
    [`btn-tag-alt-white`]: color === "white",
    [`btn-tag-alt-gray`]: color === "gray",
    [`btn-tag-alt-dark`]: color === "dark",
    [`disabled`]: disabled,
  });

  let Tag = element;
  if (href && element === "button") {
    Tag = "a";
  }

  return (
    // @ts-ignore
    <Tag
      type={Tag === "button" && onClick ? "button" : undefined}
      {...props}
      className={btnClasses}
      href={href}
      ref={innerRef}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      {label}
    </Tag>
  );
};

ButtonTag.propTypes = {
  /**
    Button tag label
  */
  label: PropTypes.string,
  /**
    ARIA label for accessibility
  */
  ariaLabel: PropTypes.string,
  /**
    Button background color
  */
  color: PropTypes.oneOf(["white", "gray", "dark"]),
  /**
    Disable the button?
  */
  disabled: PropTypes.bool,

  /**
    Pass in a Component to override default button element.
    For example: react-router Link
  */
  element: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.string,
    PropTypes.shape({ $$typeof: PropTypes.symbol, render: PropTypes.func }),
    PropTypes.arrayOf(
      PropTypes.oneOfType([
        PropTypes.func,
        PropTypes.string,
        PropTypes.shape({ $$typeof: PropTypes.symbol, render: PropTypes.func }),
      ])
    ),
  ]),

  /**
    Link target url; will cause button to be rendered as `<a>` link
  */
  href: PropTypes.string,

  /**
   * ref will only get you a reference to the Button component, use innerRef to
   * get a reference to the DOM element (for things like focus management).
   */
  innerRef: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.func,
    PropTypes.string,
  ]),

  /**
    Event handler function for `<button>`
  */
  onClick: PropTypes.func,
};

ButtonTag.defaultProps = {
  label: "",
  ariaLabel: undefined,
  color: "gray",
  disabled: undefined,
  element: "button",
  href: undefined,
  innerRef: undefined,
  onClick: undefined,
};
