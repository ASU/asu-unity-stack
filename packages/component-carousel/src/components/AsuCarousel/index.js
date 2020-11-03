/** @jsx h */
/* eslint-disable react/prop-types */
import { h, Fragment, render, Component } from "preact";
import { useEffect, useState } from "preact/compat";

import Glide from "@glidejs/glide";

// Include styles for @glidejs/glide
import "./styles.scss";

// TODO import bs4-theme css from QA site like a CDN?

// Initially based on this approach:
// https://stackoverflow.com/questions/61596516/glide-js-with-react

// TODO Bring over Bs4-theme components (package.json dependency + import statment ?), and then add...
// OR peerDependencies in package.json?
//   Props for array of Card items...

const AsuCarousel = props => {
  console.log("props", props);

  // TODO Only prop for the slider configs we expose is perView.

  const sliderConfig = {
    type: "carousel",
    focusAt: "center",
    gap: 24, // Space between slides... may be impacted by viewport size.
    keyboard: true, // Left/Right arrow key support for slides - true is default. Accessible?
    startAt: 0,
    swipeThreshold: 80, // Distance required for swipe to change slide.
    dragThreshold: 120, // Distance for mouse drag to change slide.
    perTouch: 1, // Number of slides that can be moved per each swipe/drag.
    //perView: props.perView, // See breakpoints
    //peek: { before: 124, after: 124 }, // See breakpoints
    breakpoints: {
      576: {
        // BS4 sm
        perView: 1,
        peek: { after: 62 },
      },
      768: {
        // BS4 md
        perView: props.perView > 1 ? 2 : 1,
        peek: { before: 124, after: 124 },
      },
      992: {
        // BS4 xl
        perView: props.perView > 1 ? props.perView : 1,
        peek: { before: 124, after: 124 },
      },
      1260: {
        // BS4 xl
        perView: props.perView > 1 ? props.perView : 1,
        peek: { before: 124, after: 124 },
      },
      1400: {
        perView: props.perView > 1 ? props.perView : 1,
        peek: { before: 124, after: 124 },
      },
      1920: {
        perView: props.perView > 1 ? props.perView : 1,
        peek: { before: 124, after: 124 },
      },
    },
  };

  //const sliderConfig = props.configs ? props.configs : sliderConfiguration; // If not provided, fallback.

  // TODO Isn't triggered with useEffect...

  // Works on first load with current code but doesn't refresh successfully.
  //   Better approach using window ? Learn about that.
  //   Or https://www.npmjs.com/package/preact-hot-loader ?
  document.addEventListener("DOMContentLoaded", function () {
    console.log("sliiiiiider");
    const slider = new Glide(".glide", sliderConfig);
    //const slider = new Glide(".glide", sliderConfiguration);
    slider.mount();
    console.log(slider);
  });

  // Imported from preact/hooks
  /*
  useEffect(() => {
    console.log("hit AsuCarousel useEffect");
    return () => {
      console.log("sliiiiiider");
      const slider = new Glide(".glide", sliderConfiguration);
      slider.mount();
      console.log(slider);
    };
  }, []);
  //}, [slider]);
  */

  const listItems = props.carouselItems.map(sliderItem => (
    <li key={sliderItem.id.toString()} className="glide__slide slider">
      {sliderItem.item}
    </li>
  ));

  // TODO should be able to use empty tags instead of fragments
  return (
    <div className="glide">
      <div className="glide__track" data-glide-el="track">
        <ul className="glide__slides">{listItems}</ul>
      </div>
      <div className="glide__bullets" data-glide-el="controls[nav]">
        <button className="glide__bullet" data-glide-dir="=0"></button>
        <button className="glide__bullet" data-glide-dir="=1"></button>
        <button className="glide__bullet" data-glide-dir="=2"></button>
        <button className="glide__bullet" data-glide-dir="=3"></button>
      </div>
      <div className="glide__arrows" data-glide-el="controls">
        <button className="glide__arrow glide__arrow--prev" data-glide-dir="<">
          &lt;
        </button>
        <button className="glide__arrow glide__arrow--next" data-glide-dir=">">
          &gt;
        </button>
      </div>
    </div>
  );
};

//export default AsuCarousel;
export { AsuCarousel };
