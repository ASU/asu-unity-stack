// @ts-check
/** @jsx h */
/* eslint-disable react/prop-types */
import { h } from "preact";
import { setupCaroarousel } from "./glide.setup";
import { useEffect } from "preact/compat";

// Include required and custom styles for @glidejs/glide
import "./styles.scss";

// Requirement: We import bs4-theme css from QA site in preview-head.html.

// Initially based on this approach:
// https://stackoverflow.com/questions/61596516/glide-js-with-react

/**
 *
 * @param {{
 *            perView?: number | string
 *            width?: string
 *            maxWidth?: string
 *            carouselItems: {id: string | number, item: h.JSX.Element}[],
 *          }} props
 * @returns
 */
const BaseCarousel = ({
  perView = "1",
  width = "inherit",
  maxWidth = "inherit",
  carouselItems,
}) => {
  // Only prop for the slider configs we expose is perView. Everything else is
  // considered locked down for Web Standards 2.
  // We implement "slider" approach per Web Standards 2:
  // - Dead-end advance when end is reached. No wrap around.
  // - First card is focused.
  // - No advance allowed to create whitespace at the end of slide. Stops with
  //   all visible.
  // - Shadow (at either left or right) should disappear when there is no next
  //   or previous.
  // - Instead of tying the bullets to the number of cards, we do a calculation
  //   tying the bullets to the number of "views" or "panels" so the last bullet
  //   displays the max number of cards with no overhanging card or extra
  //   whitespace. TODO Negative impact on a11y from this?

  // Get glide instance class name.
  // Defaults to glide. If implementing multiple instnaces, you MUST provide
  // an unique instance name for all but one instance.
  let instanceName = `glide-${Math.ceil(Math.random() * 10000)}`;

  // Calculate number of buttons to show so we don't advance past perView.
  // TODO Limtation: this does not recalc if the screen is resized and the
  // perView adapts. In that case Prev/next buttons or swipe may need to be
  // used to see all slides. Leverage GlideJS resize event?
  // See docs: https://glidejs.com/docs/events/
  // The resize event is implemented further down and commented out until a
  // solid strategy for updating the buttons is in place.
  let itemCount = carouselItems.length;
  let buttonCount;

  // Get Original viewport width so we can set buttonCount.
  // Note: buttonCount is not adaptive at this time, per comment above.
  let vw = Math.max(
    document.documentElement.clientWidth || 0,
    window.innerWidth || 0
  );
  //console.log("VW", vw);
  buttonCount = itemCount;
  if (vw < 768) {
    // Value for sm breakpoint
    //console.log("VW sm", vw);
    // No adjusting buttonCount. Always max, one at a time for sm.
  } else if (vw < 992) {
    // Value for md breakpoint
    //console.log("VW md", vw);
    if (perView >= 2) {
      buttonCount = itemCount - 1;
    }
  } else {
    // Value for lg breakpoint
    //console.log("VW lg", vw);
    if (perView >= 2) {
      buttonCount = itemCount - 1;
    }
    if (perView >= 3) {
      buttonCount = itemCount - 2;
    }
  }

  // Build out bullets markup based on buttonCount.
  let buttonElements = [];
  for (let i = 0; i < buttonCount; i++) {
    buttonElements.push(
      <button
        className="glide__bullet"
        data-glide-dir={"=" + i}
        aria-label={"Slide view " + (i + 1)}
      ></button>
    );
  }

  // TODO: investigate if useEffect() causes any side effect which would justify to use DOMContentLoaded approach
  // Following wasn't triggered with useEffect approach... so we just ensure
  // the DOM is loaded.

  // Works on first load with current code but doesn't refresh successfully in
  // Storybook when code is updated - have to reload page.
  // Better approach using window ? Learn about that.
  // Or https://www.npmjs.com/package/preact-hot-loader ?
  // document.addEventListener("DOMContentLoaded", function () {
  //   setupCaroarousel(instanceName, perView, +buttonCount);
  // });
  useEffect(() => {
    setupCaroarousel(instanceName, perView, +buttonCount);
  }, []);

  // Setup carousel items from the carouselItems prop.
  const listItems = carouselItems.map(sliderItem => (
    <li key={sliderItem.id.toString()} className="glide__slide slider">
      {sliderItem.item}
    </li>
  ));

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
      ></path>
    </svg>
  );

  const NextIcon = () => (
    <svg
      aria-hidden="true"
      focusable="false"
      data-prefix="fas"
      data-icon="chevron-right"
      className="svg-inline--fa fa-chevron-right fa-w-10"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 320 512"
    >
      <path
        fill="currentColor"
        d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"
      ></path>
    </svg>
  );

  // For prev and next button icons we use the Creative Commons licensed
  // FontAweseome chevron-left and chevron-right SVG without alterations.
  // This serves as the required link to the license as per attribution
  // guidelines provided at time of use: https://fontawesome.com/license

  return (
    <div className="glide" id={instanceName} style={{ width, maxWidth }}>
      <div className="glide__track" data-glide-el="track">
        <ul className="glide__slides">{listItems}</ul>
      </div>
      <div className="glide__bullets" data-glide-el="controls[nav]">
        {buttonElements}
      </div>
      <div className="glide__arrows" data-glide-el="controls">
        <button
          className="glide__arrow glide__arrow--prev"
          data-glide-dir="<"
          aria-label="Previous slide"
        >
          <PrevIcon />
        </button>
        <button
          className="glide__arrow glide__arrow--next"
          data-glide-dir=">"
          aria-label="Next slide"
        >
          <NextIcon />
        </button>
      </div>
    </div>
  );
};

export { BaseCarousel };
