// @ts-check
import PropTypes from "prop-types";
import React from "react";

/**
 * @typedef {{
 *  color?: string
 *  icon: string[]
 *  innerRef?: React.RefObject
 *  onClick?: () => void
 *  size?: "large" | "small"
 * }} ButtonIconOnlyProps
 */

/**
 * @param {ButtonIconOnlyProps} props
 * @returns {JSX.Element}
 */
export const ButtonIconOnly = ({ color, icon, innerRef, onClick, size }) => (
  <button
    type="button"
    className={`btn btn-circle btn-circle-alt-${color} ${
      size === "large" && "btn-circle-large"
    }`}
    ref={innerRef}
    onClick={onClick}
    aria-label="Close"
  >
    <i className={`${icon?.[0]} fa-${icon?.[1]}`} />
  </button>
);

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
    Button size
  */
  size: PropTypes.oneOf(["large", "small"]),
};

ButtonIconOnly.defaultProps = {
  color: "gray",
  icon: undefined,
  innerRef: undefined,
  onClick: undefined,
  size: "small",
};
