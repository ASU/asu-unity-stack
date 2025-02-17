// @ts-check
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
 * @typedef {import('../../core/types/shared-types').ButtonIconOnlyProps} ButtonIconOnlyProps
 */

/**
 * @param {ButtonIconOnlyProps} props
 * @returns {JSX.Element}
 */
export const ButtonIconOnly = ({
  color,
  icon,
  innerRef,
  onClick,
  size,
  cardTitle,
  className,
  gaData,
  ...rest
}) => {
  const handleClick = () => {
    onClick?.();
  };

  return (
    <GaEventWrapper
      gaData={{
        ...gaDefaultObject,
        section: cardTitle, // @deprecated - remove at some point
        ...gaData,
        text: `${icon?.[1]} icon`,
      }}
    >
      <button
        type="button"
        className={`btn btn-circle btn-circle-alt-${color} ${
          size === "large" && "btn-circle-large"
        } ${className}`}
        ref={innerRef}
        aria-label="Close"
        onClick={handleClick}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...rest}
      >
        <i className={`${icon?.[0]} fa-${icon?.[1]}`} />
      </button>
    </GaEventWrapper>
  );
};

ButtonIconOnly.propTypes = {
  /**
    Color the button based on the background color
  */
  color: PropTypes.oneOf(["white", "gray", "black"]),
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
   * @deprecated
   * Card title, use `gaData.section` instead
   */
  cardTitle: PropTypes.string,
  /**
   * Google Analytics event data
   */
  gaData: gaDataType,
  /**
    Button size
  */
  size: PropTypes.oneOf(["large", "small"]),
  className: PropTypes.string,
};

ButtonIconOnly.defaultProps = {
  color: "gray",
  icon: undefined,
  innerRef: undefined,
  onClick: undefined,
  size: "small",
  cardTitle: "",
};
