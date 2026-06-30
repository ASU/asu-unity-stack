// @ts-check
import PropTypes from "prop-types";
import React from "react";

/**
 *
 * @param {{
 *  onClick?: () => void
 *  buttonTheme?: string
 * }} props
 * @returns { JSX.Element }
 */
const PrevButton = ({ onClick = () => null, buttonTheme = "" }) => (
  <button
    type="button"
    className={`glide__arrow glide__arrow--prev ${buttonTheme}`}
    data-glide-dir="<"
    aria-label="Previous slide"
    onClick={onClick}
  >
    <span className="fas fa-chevron-left arrow-icon" />
  </button>
);

PrevButton.propTypes = {
  onClick: PropTypes.func,
  buttonTheme: PropTypes.string,
};

export { PrevButton };
