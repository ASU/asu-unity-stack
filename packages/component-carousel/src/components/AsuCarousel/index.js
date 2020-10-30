/** @jsx h */
/* eslint-disable react/prop-types */
import { h, Fragment, render, Component } from "preact";
import { useEffect, useState } from "preact/compat";

import Glide from "@glidejs/glide";
import { clearDecorators } from "@storybook/html/dist/client/preview";

// Include styles for @glidejs/glide
import "./styles.scss";

// Initially based on this approach:
// https://stackoverflow.com/questions/61596516/glide-js-with-react

// SCSS files for @glidejs/glide are included via .storybook/preview.js
// TODO Confirm ^ is best approach (and fully functional).

const sliderConfiguration = {
  gap: 20,
  perView: 3,
  startAt: 0,
  type: "slider",
};

// TODO Bring over Bs4-theme components (package.json dependency + import statment ?), and then add...
// OR peerDependencies in package.json?
//   Props for array of Card items...

const AsuCarousel = () => {
  console.log("hit AsuCarousel");

  // TODO doesn't seem to be triggered with useEffect...
  // Works on first load with current code but doesn't refresh successfully.
  //   Better approach using window ? Learn about that.
  //   Or https://www.npmjs.com/package/preact-hot-loader ?
  document.addEventListener("DOMContentLoaded", function () {
    console.log("sliiiiiider");
    const slider = new Glide(".glide", sliderConfiguration);
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

  // TODO should be able to use empty tags instead of fragments
  return (
    <div className="glide">
      <div className="glide__track" data-glide-el="track">
        <ul className="glide__slides">
          <li className="glide__slide slider">
            <div className="card">
              <img
                className="card-img-top"
                src="https://source.unsplash.com/random/400x400"
                alt="Card image cap"
              ></img>
              <div className="card-header">
                <h3 className="card-title">Card One default title</h3>
              </div>
              <div className="card-body">
                <p className="card-text">
                  Body copy goes here. Limit to 5 lines max. Lorem ipsum dolor
                  sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua eiusmod tempo.{" "}
                </p>
              </div>
              <div className="card-event-details">
                <div className="card-event-icons">
                  <div>
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <div>Downtown Phoenix campus</div>
                </div>
              </div>
              <div className="card-button">
                <a href="#" className="btn btn-dark">
                  Button link here
                </a>
              </div>
              <div className="card-button">
                <a href="#" className="btn btn-sm btn-dark">
                  Button link here
                </a>
              </div>
              <div className="card-link">
                <a href="#" className="">
                  Regular text link here
                </a>
              </div>
              <div className="card-tags">
                <a className="btn btn-tag btn-tag-alt-white" href="#">
                  test tag
                </a>{" "}
                <a className="btn btn-tag btn-tag-alt-white" href="#">
                  test tag 2
                </a>{" "}
                <a className="btn btn-tag btn-tag-alt-white" href="#">
                  test tag 3
                </a>
              </div>
            </div>
          </li>
          <li className="glide__slide slider">
            <div className="card">
              <img
                className="card-img-top"
                src="https://source.unsplash.com/random/400x400"
                alt="Card image cap"
              ></img>
              <div className="card-header">
                <h3 className="card-title">Card Two default title</h3>
              </div>
              <div className="card-body">
                <p className="card-text">
                  Body copy goes here. Limit to 5 lines max. Lorem ipsum dolor
                  sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua eiusmod tempo.
                </p>
              </div>
              <div className="card-event-details">
                <div className="card-event-icons">
                  <div>
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <div>Downtown Phoenix campus</div>
                </div>
              </div>
              <div className="card-button">
                <a href="#" className="btn btn-dark">
                  Button link here
                </a>
              </div>
              <div className="card-button">
                <a href="#" className="btn btn-sm btn-dark">
                  Button link here
                </a>
              </div>
              <div className="card-link">
                <a href="#" className="">
                  Regular text link here
                </a>
              </div>
              <div className="card-tags">
                <a className="btn btn-tag btn-tag-alt-white" href="#">
                  test tag
                </a>{" "}
                <a className="btn btn-tag btn-tag-alt-white" href="#">
                  test tag 2
                </a>{" "}
                <a className="btn btn-tag btn-tag-alt-white" href="#">
                  test tag 3
                </a>
              </div>
            </div>
          </li>
          <li className="glide__slide slider">
            <div className="card">
              <img
                className="card-img-top"
                src="https://source.unsplash.com/random/400x400"
                alt="Card image cap"
              ></img>
              <div className="card-header">
                <h3 className="card-title">Card Three default title</h3>
              </div>
              <div className="card-body">
                <p className="card-text">
                  Body copy goes here. Limit to 5 lines max. Lorem ipsum dolor
                  sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua eiusmod tempo.
                </p>
              </div>
              <div className="card-event-details">
                <div className="card-event-icons">
                  <div>
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <div>Downtown Phoenix campus</div>
                </div>
              </div>
              <div className="card-button">
                <a href="#" className="btn btn-dark">
                  Button link here
                </a>
              </div>
              <div className="card-button">
                <a href="#" className="btn btn-sm btn-dark">
                  Button link here
                </a>
              </div>
              <div className="card-link">
                <a href="#" className="">
                  Regular text link here
                </a>
              </div>
              <div className="card-tags">
                <a className="btn btn-tag btn-tag-alt-white" href="#">
                  test tag
                </a>{" "}
                <a className="btn btn-tag btn-tag-alt-white" href="#">
                  test tag 2
                </a>{" "}
                <a className="btn btn-tag btn-tag-alt-white" href="#">
                  test tag 3
                </a>
              </div>
            </div>
          </li>
          <li className="glide__slide slider">
            <div className="card">
              <img
                className="card-img-top"
                src="https://source.unsplash.com/random/400x400"
                alt="Card image cap"
              ></img>
              <div className="card-header">
                <h3 className="card-title">Card Four default title</h3>
              </div>
              <div className="card-body">
                <p className="card-text">
                  Body copy goes here. Limit to 5 lines max. Lorem ipsum dolor
                  sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua eiusmod tempo.
                </p>
              </div>
              <div className="card-event-details">
                <div className="card-event-icons">
                  <div>
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <div>Downtown Phoenix campus</div>
                </div>
              </div>
              <div className="card-button">
                <a href="#" className="btn btn-dark">
                  Button link here
                </a>
              </div>
              <div className="card-button">
                <a href="#" className="btn btn-sm btn-dark">
                  Button link here
                </a>
              </div>
              <div className="card-link">
                <a href="#" className="">
                  Regular text link here
                </a>
              </div>
              <div className="card-tags">
                <a className="btn btn-tag btn-tag-alt-white" href="#">
                  test tag
                </a>{" "}
                <a className="btn btn-tag btn-tag-alt-white" href="#">
                  test tag 2
                </a>{" "}
                <a className="btn btn-tag btn-tag-alt-white" href="#">
                  test tag 3
                </a>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div className="glide__bullets" data-glide-el="controls[nav]">
        <button className="glide__bullet" data-glide-dir="=0"></button>
        <button className="glide__bullet" data-glide-dir="=1"></button>
        <button className="glide__bullet" data-glide-dir="=2"></button>
        <button className="glide__bullet" data-glide-dir="=3"></button>
      </div>
      <div className="glide__arrows" data-glide-el="controls">
        <button className="glide__arrow glide__arrow--prev" data-glide-dir="<">
          prev
        </button>
        <button className="glide__arrow glide__arrow--next" data-glide-dir=">">
          next
        </button>
      </div>
    </div>
  );
};

//export default AsuCarousel;
export { AsuCarousel };
