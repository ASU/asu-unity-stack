// @ts-check
/* eslint react/jsx-props-no-spreading: "off" */
import classNames from "classnames";
import PropTypes from "prop-types";
import React from "react";

import { trackGAEvent } from "../../core/services/googleAnalytics";

const gaDefaultObject = {
  name: "onclick",
  event: "link",
  action: "click",
  type: "internal link",
  region: "main content",
};

/**
 * @typedef {import('../../core/types/shared-types').ButtonProps} ButtonProps
 */

/**
 * @param {ButtonProps} props
 * @returns {JSX.Element}
 */
export const Button = ({
  label,
  ariaLabel,
  block,
  color,
  disabled,
  element,
  href,
  icon,
  innerRef,
  onClick,
  size,
  classes,
  target,
  ...props
}) => {
  const btnClasses = classNames("btn", {
    [`btn-${color}`]: true,
    [`btn-md`]: size === "small",
    [`btn-sm`]: size === "xsmall",
    [`btn-block`]: block,
    [`disabled`]: disabled,
  });

  let Tag = element;
  if (href && element === "button") {
    Tag = "a";
  }

  const handleClick = text => {
    trackGAEvent({ ...gaDefaultObject, text });
    onClick?.();
  };

  return (
    <Tag
      type={Tag === "button" && onClick ? "button" : undefined}
      {...props}
      className={classNames(classes) || btnClasses}
      href={href}
      ref={innerRef}
      onClick={() => handleClick(label)}
      aria-label={ariaLabel}
      target={Tag === "a" ? target : null}
    >
      {icon && <i className={`${icon?.[0]} fa-${icon?.[1]} mr-1`} />}
      {label}
    </Tag>
  );
};

Button.propTypes = {
  /**
   * Button label
   */
  label: PropTypes.string,
  /**
    ARIA label for accessibility
  */
  ariaLabel: PropTypes.string,
  /**
    Render button as a block-button?
  */
  block: PropTypes.bool,
  /**
    Button background color
  */
  color: PropTypes.oneOf(["gold", "maroon", "gray", "dark"]),
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
    React Font Awesome icon prefix and name string to be rendered in button label. Ex: ['fab', 'drupal']
  */
  icon: PropTypes.arrayOf(PropTypes.string),

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
  /**
    Button size
  */
  size: PropTypes.oneOf(["default", "small", "xsmall"]),
  /**
    Classes to add to button
  */
  classes: PropTypes.arrayOf(PropTypes.string),
  /**
   Link target type
   */
  target: PropTypes.oneOf(["_blank", "_self", "_top", "_parent"]),
};

Button.defaultProps = {
  label: "",
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
  classes: undefined,
  target: "_self",
};
