// @ts-check
/** @jsx h */
import { h } from "preact";
import PropTypes from "prop-types";

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
  carouselItems: PropTypes.arrayOf(PropTypes.object),
};

export { SliderItems };
