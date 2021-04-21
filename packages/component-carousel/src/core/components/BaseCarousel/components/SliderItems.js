// @ts-check
/** @jsx h */
import { h } from "preact";

const SliderItems = ({ carouselItems }) => {
  // Setup carousel items from the carouselItems prop.
  const listItems = carouselItems.map(sliderItem => (
    <li key={sliderItem.id.toString()} className="glide__slide slider">
      {sliderItem.item}
    </li>
  ));
  return <ul className="glide__slides">{listItems}</ul>;
};

export { SliderItems };
