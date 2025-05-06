// @ts-check
/* eslint react/jsx-props-no-spreading: "off" */
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
 * @typedef {React.ComponentProps<"button" | "a"> & import('../../core/types/shared-types').TagsProps} ButtonTagProps
 */

/**
 * @param {ButtonTagProps} props
 * @returns {JSX.Element}
 */
export const ButtonTag = ({
  label = "",
  cardTitle = "",
  gaData,
  ariaLabel,
  color = "gray",
  disabled,
  element = "button",
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
    <GaEventWrapper
      gaData={{
        ...gaDefaultObject,
        section: cardTitle, // @deprecated - remove at some point
        ...gaData,
        text: label,
      }}
    >
      {/* @ts-ignore */}
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
    </GaEventWrapper>
  );
};

ButtonTag.propTypes = {
  /**
    Button tag label
  */
  label: PropTypes.string,
  /**
   * @deprecated
   * Card title, use `gaData.section` instead
   */
  cardTitle: PropTypes.string,
  /**
   * Google Analytics event data
   */
  gaData: gaDataType,
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
