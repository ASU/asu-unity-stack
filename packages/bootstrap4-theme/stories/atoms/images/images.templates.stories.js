import React from 'react';
import { createComponent, createStory } from '../../../helpers/wrapper.js';

const extraOptions = {
  dropShadow: {
    name: 'Drop Shadow',
    control: { type: 'boolean' },
    defaultValue: false,
  },
}

export default createComponent('Images', 'Atoms', 'Templates', extraOptions);


export const LargeImageNoCaptionComponent = createStory(
  (args) => {
    return (
      <div class={`uds-img ${ args.dropShadow ? 'uds-img-drop-shadow' : '' }`}>
        <img
          src="https://source.unsplash.com/random/1200x750"
          class="img-fluid"
          alt="Random image. REPLACE with appropriate alt text for accessibility."
        ></img>
      </div>
    )
  }
);

export const LargeImageCaptionComponent = createStory(
  (args) => {
    return (
      <div class={`uds-img ${ args.dropShadow ? 'uds-img-drop-shadow' : '' }`}>
        <figure class="figure uds-figure">
          <img
            src="https://source.unsplash.com/random/800x600"
            class="uds-img figure-img img-fluid"
            alt="Random image with caption below. REPLACE with appropriate alt text for accessibility."
          ></img>
          <figcaption class="figure-caption uds-figure-caption">
            <span class="uds-caption-text">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus
              mus. Donec quam felis, ultricies nec, pellentesque eu, pretium
              &hellip;
            </span>
          </figcaption>
        </figure>
      </div>
    )
  }
);
