// @ts-check
import PropTypes from "prop-types";
import React from "react";

/**
 *
 * @param {{
 *  onClick?: () => void
 * }} props
 * @returns
 */
const NextButton = ({ onClick = () => null }) => (
  <button
    type="button"
    className="glide__arrow glide__arrow--next"
    data-glide-dir=">"
    aria-label="Next slide"
    onClick={onClick}
  >
    <i className="fas fa-chevron-right arrow-icon" />
  </button>
);

NextButton.propTypes = {
  onClick: PropTypes.func,
};

export { NextButton };
