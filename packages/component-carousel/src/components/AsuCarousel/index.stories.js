/** @jsx h */

import { h } from "preact";

import { AsuCarousel } from ".";

const myCarouselItems = [
  {
    id: 1,
    item: (
      <div className="card">
        <img
          className="card-img-top"
          src="https://source.unsplash.com/random/384x200"
          alt="Card image cap"
        ></img>
        <div className="card-header">
          <h3 className="card-title">Card One default title</h3>
        </div>
        <div className="card-body">
          <p className="card-text">
            Body copy goes here. Limit to 5 lines max. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua eiusmod tempo.{" "}
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
    ),
  },
  {
    id: 2,
    item: (
      <div className="card">
        <img
          className="card-img-top"
          src="https://source.unsplash.com/random/384x200"
          alt="Card image cap"
        ></img>
        <div className="card-header">
          <h3 className="card-title">Card Two default title</h3>
        </div>
        <div className="card-body">
          <p className="card-text">
            Body copy goes here. Limit to 5 lines max. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua eiusmod tempo.{" "}
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
    ),
  },
  {
    id: 3,
    item: (
      <div className="card">
        <img
          className="card-img-top"
          src="https://source.unsplash.com/random/384x200"
          alt="Card image cap"
        ></img>
        <div className="card-header">
          <h3 className="card-title">Card Three default title</h3>
        </div>
        <div className="card-body">
          <p className="card-text">
            Body copy goes here. Limit to 5 lines max. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua eiusmod tempo.{" "}
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
    ),
  },
  {
    id: 4,
    item: (
      <div className="card">
        <img
          className="card-img-top"
          src="https://source.unsplash.com/random/384x200"
          alt="Card image cap"
        ></img>
        <div className="card-header">
          <h3 className="card-title">Card Four default title</h3>
        </div>
        <div className="card-body">
          <p className="card-text">
            Body copy goes here. Limit to 5 lines max. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua eiusmod tempo.{" "}
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
    ),
  },
];

export default {
  component: AsuCarousel,
  title: "Carousel",
};

export const ThreeItemCarousel = () => (
  <AsuCarousel perView="3" carouselItems={myCarouselItems}></AsuCarousel>
);
export const TwoItemCarousel = () => (
  <AsuCarousel perView="2" carouselItems={myCarouselItems}></AsuCarousel>
);
export const OneItemCarousel = () => (
  <AsuCarousel perView="1" carouselItems={myCarouselItems}></AsuCarousel>
);
export const BaseCarousel = () => (
  <AsuCarousel carouselItems={myCarouselItems}></AsuCarousel>
);
