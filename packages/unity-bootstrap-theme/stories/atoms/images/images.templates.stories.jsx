import React from "react";

import { defaultDecorator } from "../../../../../shared/components/Layout";

export default {
  title: "Atoms/Images/Templates",
  decorators: [ defaultDecorator ],
  args: {dropShadow: false},
  argTypes: {
    dropShadow: {
      name: "Drop Shadow",
      control: { type: "boolean" },
    },
  },
};

export const LargeImageNoCaptionComponent = ({dropShadow}) => {
  return (
    <div className={`uds-img ${dropShadow ? "uds-img-drop-shadow" : ""}`}>
      <img
        src="https://source.unsplash.com/random/1200x750"
        className="img-fluid"
        alt="Random image. REPLACE with appropriate alt text for accessibility."
        width="1200"
        height="750"
        loading="lazy"
        decoding="async"
        fetchpriority="high"
      />
    </div>
  );
};

export const LargeImageCaptionComponent = ({dropShadow}) => {
  return (
    <div className={`uds-img ${dropShadow ? "uds-img-drop-shadow" : ""}`}>
      <figure className="figure uds-figure">
        <img
          src="https://source.unsplash.com/random/800x600"
          className="uds-img figure-img img-fluid"
          alt="Random image with caption below. REPLACE with appropriate alt text for accessibility."
          width="800"
          height="600"
          loading="lazy"
          decoding="async"
          fetchpriority="high"
        />
        <figcaption className="figure-caption uds-figure-caption">
          <span className="uds-caption-text">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu, pretium &hellip;
          </span>
        </figcaption>
      </figure>
    </div>
  );
};
