// @ts-check
import PropTypes from "prop-types";
import React from "react";

const PrevIcon = () => (
  <svg
    aria-hidden="true"
    focusable="false"
    data-prefix="fas"
    data-icon="chevron-left"
    className="svg-inline--fa fa-chevron-left fa-w-10"
    role="img"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 320 512"
  >
    <path
      fill="currentColor"
      d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"
    />
  </svg>
);

/**
 *
 * @param {{
 *  onClick?: () => void
 * }} props
 * @returns { JSX.Element }
 */
const PrevButton = ({ onClick = () => null }) => (
  <button
    type="button"
    className="glide__arrow glide__arrow--prev"
    data-glide-dir="<"
    aria-label="Previous slide"
    onClick={onClick}
  >
    <PrevIcon />
  </button>
);

PrevButton.propTypes = {
  onClick: PropTypes.func,
};

export { PrevButton, PrevIcon };
