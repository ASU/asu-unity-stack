// @ts-check
import PropTypes from "prop-types";
import React from "react";

/**
 *
 * @param {{ carouselItems: {
 *            id: string | number
 *            item: JSX.Element
 *          } [] }} props
 * @returns { JSX.Element }
 */
const SliderItems = ({ carouselItems }) => {
  // Setup carousel items from the carouselItems prop.
  const listItems = carouselItems.map(sliderItem => (
    <li key={sliderItem.id.toString()} className="glide__slide slider">
      {sliderItem.item}
    </li>
  ));
  return <ul className="glide__slides">{listItems}</ul>;
};

SliderItems.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  carouselItems: PropTypes.arrayOf(PropTypes.object),
};

export { SliderItems };
