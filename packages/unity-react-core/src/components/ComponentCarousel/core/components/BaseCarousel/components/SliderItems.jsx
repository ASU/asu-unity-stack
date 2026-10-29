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
  const listItems = carouselItems.map((sliderItem, index) => (
    <li
      key={sliderItem.id.toString()}
      className="glide__slide slider"
      tabIndex={0}
    >
      <div aria-live="polite" className="sr-only">
        <span>{`Slide ${index + 1}`}</span>
        {/* <span>{`Slide ${index + 1} of ${carouselItems.length}`}</span> length already announced */}
      </div>
      {sliderItem.item}
    </li>
  ));
  return <ul className="glide__slides">{listItems}</ul>;
};

SliderItems.propTypes = {
  carouselItems: PropTypes.arrayOf(PropTypes.object),
};

export { SliderItems };
