// @ts-check
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
export const ButtonIconOnly = ({ color, icon, innerRef, onClick, size }) => {
  library.add(fab, fas, far);

  return (
    <button
      type="button"
      className={`btn btn-circle btn-circle-alt-${color} ${
        size === "large" && "btn-circle-large"
      }`}
      ref={innerRef}
      onClick={onClick}
      aria-label="Close"
    >
      {/* @ts-ignore */}
      <FontAwesomeIcon icon={icon} />
    </button>
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
