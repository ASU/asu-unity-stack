// @ts-check
import classNames from "classnames";
import PropTypes from "prop-types";
import React from "react";

import { gaDataType } from "../../core/models/shared-prop-types";
import { GaEventWrapper } from "../GaEventWrapper/GaEventWrapper";

const gaDefaultObject = {
  name: "onclick",
  event: "link",
  action: "click",
  type: "internal link",
  region: "main content",
};

/**
 * @typedef {Object} UDSButtonProps
 * @property {string} [label] - Button label text
 * @property {import('../GaEventWrapper/GaEventWrapper').GaEventType} [gaData] - Google Analytics event data
 * @property {"gold"|"maroon"|"gray"|"dark"} [color] - Button color variant
 * @property {boolean} [disabled] - Disable the button
 * @property {React.ElementType|string} [element] - Component to override default button element
 * @property {string} [href] - Link target url; will cause button to be rendered as `<a>` link
 * @property {string[]} [icon] - React Font Awesome icon prefix and name string
 * @property {React.Ref<any>} [innerRef] - Reference to the DOM element
 * @property {Function} [onClick] - Event handler function
 * @property {"large"|"medium"|"small"} [size] - Button size
 * @property {"borderless"|"outline"|"filled"} [variant] - Button style variant
 * @property {string[]} [classes] - Classes to add to button
 * @property {"_blank"|"_self"|"_top"|"_parent"} [target] - Link target type
 */

/**
 * UDS Button component with multiple variants (borderless, outline, filled)
 *
 * Unified button component supporting three visual styles:
 * - Borderless: Text-only button that fills with color on hover
 * - Outline: Button with border and transparent background that fills on hover
 * - Filled: Solid background button
 *
 * @param {UDSButtonProps} props - Component props
 * @returns {JSX.Element}
 */
export const UDSButton = ({
  label = "",
  gaData,
  color = "gold",
  disabled,
  element = "button",
  href,
  icon,
  innerRef,
  onClick,
  size = "large",
  variant = "filled",
  classes,
  target = "_self",
  ...props
}) => {
  const variantClasses = {
    borderless: "borderless",
    outline: "outline",
    filled: "filled",
  };

  const btnClasses = classNames("btn", variantClasses[variant], {
    [`btn-${variantClasses[variant]}-${color}`]: true,
    [`btn-md`]: size === "medium",
    [`btn-sm`]: size === "small",
    [`disabled`]: disabled,
  });

  let Tag = element;
  if (href && element === "button") {
    Tag = "a";
  }

  return (
    <GaEventWrapper
      gaData={{
        ...gaDefaultObject,
        ...gaData,
        text: label,
      }}
    >
      <Tag
        type={Tag === "button" && onClick ? "button" : undefined}
        {...props}
        className={classNames(classes) || btnClasses}
        href={href}
        ref={innerRef}
        onClick={onClick}
        target={Tag === "a" ? target : null}
        disabled={disabled}
      >
        {icon && <i className={`${icon?.[0]} fa-${icon?.[1]} me-1`} />}
        {label}
      </Tag>
    </GaEventWrapper>
  );
};

UDSButton.propTypes = {
  label: PropTypes.string,
  gaData: gaDataType,
  color: PropTypes.oneOf(["gold", "maroon", "gray", "dark"]),
  disabled: PropTypes.bool,
  element: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.string,
    PropTypes.shape({ $$typeof: PropTypes.symbol, render: PropTypes.func }),
  ]),
  href: PropTypes.string,
  icon: PropTypes.arrayOf(PropTypes.string),
  innerRef: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.func,
    PropTypes.string,
  ]),
  onClick: PropTypes.func,
  size: PropTypes.oneOf(["large", "medium", "small"]),
  variant: PropTypes.oneOf(["borderless", "outline", "filled"]),
  classes: PropTypes.arrayOf(PropTypes.string),
  target: PropTypes.oneOf(["_blank", "_self", "_top", "_parent"]),
};
