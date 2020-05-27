import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  Util,
} from "reactstrap";
import { AsuHeroImage } from "../AsuHeroImage";
import AsuBgHeroImage from "../AsuBgHeroImage";
import bootstrap from "@asu-design-system/bootstrap4-theme/dist/css/bootstrap-asu.min.css";

// Needs to be set for CSS modules.
// See https://github.com/reactstrap/reactstrap/issues/1049
Util.setGlobalCssModule(bootstrap);

const AsuCarousel = props => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const items = props.items;

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = newIndex => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item, index) => {
    return (
      <CarouselItem
        tag="div"
        key={index}
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
      >
        {props.variant == "background" ? (
          <AsuBgHeroImage {...item} />
        ) : (
          <AsuHeroImage {...item} />
        )}
      </CarouselItem>
    );
  });

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
      cssModule={bootstrap}
      interval={props.interval}
      keyboard={props.keyboard}
      pause={props.pause}
      ride={props.ride}
      slide={props.slide}
      tag="div"
    >
      <CarouselIndicators
        items={props.items}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      />
      {slides}
      <CarouselControl
        direction="prev"
        directionText="Previous"
        onClickHandler={previous}
      />
      <CarouselControl
        direction="next"
        directionText="Next"
        onClickHandler={next}
      />
    </Carousel>
  );
};

AsuCarousel.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  interval: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.bool,
  ]),
  keyboard: PropTypes.bool,
  /* If set to "hover", pauses the cycling of the carousel on mouseenter and resumes the cycling of the carousel on
   * mouseleave. If set to false, hovering over the carousel won't pause it. (default: "hover")
   */
  pause: PropTypes.oneOf(["hover", false]),
  // Autoplays the carousel after the user manually cycles the first item. If "carousel", autoplays the carousel on load.
  // This is how bootstrap defines it... I would prefer a bool named autoplay or something...
  ride: PropTypes.oneOf(["carousel"]),
  // controls whether the slide animation on the Carousel works or not
  slide: PropTypes.bool,
  variant: PropTypes.oneOf(["default", "background"]),
};

AsuCarousel.defaultProps = {
  interval: 5000,
  keyboard: true,
  pause: "hover",
  ride: "carousel",
  slide: true,
  variant: "default",
};

export default AsuCarousel;
