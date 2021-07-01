/* eslint react/jsx-props-no-spreading: "off" */
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import PropTypes from "prop-types";
import React from "react";

/**
 *
 * @param {{
 *  label?: string,
 *  ariaLabel?: string,
 *  block?: boolean,
 *  color?: string,
 *  disabled?: boolean,
 *  element?: any,
 *  href?: string,
 *  icon?: string[],
 *  innerRef?: any,
 *  onClick?: () => void,
 *  size?: string,
 *  classes?: string[],
 * }} props
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
  ...props
}) => {
  library.add(fas, far, fab);

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

  return (
    <Tag
      type={Tag === "button" && onClick ? "button" : undefined}
      {...props}
      className={classNames(classes) || btnClasses}
      href={href}
      ref={innerRef}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      {icon && <FontAwesomeIcon icon={icon} className="mr-1" />}
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
};
