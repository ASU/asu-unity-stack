import React from 'react';
import { createComponent, createStory } from '../../../helpers/wrapper.js';
export default createComponent('Images', 'Atoms');

// Images in Bootstrap are made responsive with .img-fluid. max-width: 100%; and height: auto; are applied to the image so that it scales with the parent element.

// Random photos sourced from Unsplash: https://source.unsplash.com

// TODO Consider employing JS to enforce 255 character max for captions.

export const LargeImageNoCaptionComponent = createStory(
  <div class="uds-img">
    <img
      src="https://source.unsplash.com/random/1200x750"
      class="img-fluid"
      alt="Random image. REPLACE with appropriate alt text for accessibility."
    ></img>
  </div>
);
export const LargeImageCaptionComponent = createStory(
  <div class="uds-img">
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
);

export const LargeImagesDropShadowComponent = createStory(
  <div>
    {/* Component start */}
    <div class="uds-img uds-img-drop-shadow">
      <img
        src="https://source.unsplash.com/random/800x600"
        class="uds-img XXuds-img-drop-shadow img-fluid"
        alt="Random image with dropshadow. REPLACE with appropriate alt text."
      ></img>
    </div>
    {/* Component end */}

    <br />
    <br />

    {/* Component start */}
    <div class="uds-img uds-img-drop-shadow">
      <figure class="figure uds-figure XXuds-img-drop-shadow">
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
    {/* Component end */}

    <p>
      Don't forget{' '}
      <a href="https://webaccessibility.asu.edu/articles/images">
        image accessibility
      </a>
      .
    </p>
  </div>
);

export const SmallImagesComponent = createStory(
  <div>
    <p>
      The .uds-img element takes up 100% of its container. For small images,
      ensure the .uds-img element is contained by an appropriately sized
      container. These can also be employed for placement. Note: inline CSS
      in the examples here is used to serve as an example, not a
      recommendation. Please use the best practices of your environment,
      context and layout strategy.
    </p>

    <div style={{ width: '25%' }}>
      {/* Component start */}
      <div class="uds-img">
        <img
          src="https://source.unsplash.com/random/800x600"
          class="uds-img img-fluid"
          alt="Random image with dropshadow. REPLACE with appropriate alt text."
        ></img>
      </div>
      {/* Component end */}
    </div>

    <br />
    <br />

    <div style={{ width: '25%' }}>
      {/* Component start */}
      <div class="uds-img uds-img-drop-shadow">
        <figure class="figure uds-figure">
          <img
            src="https://source.unsplash.com/random/800x600"
            class="uds-img figure-img img-fluid"
            alt="Random image with caption below. REPLACE with appropriate alt text for accessibility."
          ></img>
          <figcaption class="figure-caption uds-figure-caption">
            <span class="uds-caption-text">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
              Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
              natoque penatibus et magnis dis parturient montes, nascetur
              ridiculus mus. Donec quam felis, ultricies nec, pellentesque
              eu, pretium &hellip;
            </span>
          </figcaption>
        </figure>
      </div>
      {/* Component end */}
    </div>
  </div>
);
