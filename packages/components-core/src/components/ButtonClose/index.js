import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import PropTypes from "prop-types";
import React from "react";

import UdsStyles from "../../../vendor/css/bootstrap-asu.min.module.css";

export const ButtonClose = ({ color, innerRef, onClick }) => {
  const btnClasses = classNames(
    UdsStyles["btn"],
    UdsStyles["btn-circle"],
    UdsStyles[`btn-circle-alt-${color}`]
  );

  return (
    <button
      type="button"
      className={btnClasses}
      ref={innerRef}
      onClick={onClick}
      aria-label="Close"
    >
      <FontAwesomeIcon icon={faTimes} />
      <span className="sr-only">Close</span>
    </button>
  );
};

ButtonClose.propTypes = {
  color: PropTypes.oneOf(["white", "gray", "black"]),

  // ref will only get you a reference to the Button component, use innerRef to get a reference to the DOM element (for things like focus management).
  innerRef: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.func,
    PropTypes.string,
  ]),

  onClick: PropTypes.func,
};

ButtonClose.defaultProps = {
  color: "gray",
  innerRef: undefined,
  onClick: undefined,
};
