import classNames from "classnames";
import PropTypes from "prop-types";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

import UdsStyles from "../../../vendor/css/bootstrap-asu.min.module.css";

export const ButtonNextPrev = ({
  color,
  direction,
  disabled,
  element: Tag,
  innerRef,
  onClick,
  ...attributes
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
        type={"button"}
        {...attributes}
        className={btnClasses}
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
      type={"button"}
      {...attributes}
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
  color: PropTypes.oneOf(["white", "gray", "black"]),
  direction: PropTypes.oneOf(["next", "prev"]),
  disabled: PropTypes.bool,
  element: PropTypes.oneOf(["button", "a"]),

  // ref will only get you a reference to the Button component, use innerRef to get a reference to the DOM element (for things like focus management).
  innerRef: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.func,
    PropTypes.string,
  ]),

  href: PropTypes.string,
  onClick: PropTypes.func,
};

ButtonNextPrev.defaultProps = {
  color: "white",
  element: "button",
};
