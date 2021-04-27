import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import PropTypes from "prop-types";
import React from "react";

import UdsStyles from "../../../vendor/css/bootstrap-asu.min.module.css";

export const ButtonNextPrev = ({
  color,
  direction,
  disabled,
  innerRef,
  onClick,
}) => {
  const btnClasses = classNames(
    UdsStyles["btn"],
    UdsStyles["btn-circle"],
    UdsStyles["btn-circle-large"],
    UdsStyles[`btn-circle-alt-${color}`]
  );

  if (direction === "next") {
    return (
      <button
        type="button"
        className={btnClasses}
        disabled={disabled}
        ref={innerRef}
        onClick={onClick}
      >
        <FontAwesomeIcon icon={faChevronRight} />
        <span className="sr-only">Next</span>
      </button>
    );
  }

  return (
    <button
      type="button"
      className={btnClasses}
      ref={innerRef}
      onClick={onClick}
    >
      <FontAwesomeIcon icon={faChevronLeft} />
      <span className="sr-only">Previous</span>
    </button>
  );
};

ButtonNextPrev.propTypes = {
  /**
    Color the button based on the background color
  */
  color: PropTypes.oneOf(["white", "gray", "black"]),
  /**
    Which direction the button should point
  */
  direction: PropTypes.oneOf(["next", "prev"]).isRequired,
  /**
    Disable the button?
  */
  disabled: PropTypes.bool,

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

ButtonNextPrev.defaultProps = {
  color: "white",
  disabled: false,
  innerRef: undefined,
  onClick: undefined,
};
