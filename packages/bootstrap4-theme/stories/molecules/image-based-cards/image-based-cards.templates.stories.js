import React from 'react';
import { createComponent, createStory } from '../../../helpers/wrapper.js';
import { googleAnalytics as initFunc } from '../../../src/js/googleAnalytics';
import portraitImage from './portrait-image.jpg';

export default createComponent('Image Based Cards', 'Molecules', 'Templates');

export const PortraitSM = createStory(
  <div class="uds-image-based-card portrait-sm">
    <img
      src={portraitImage}
      alt="Card image cap"
      loading="lazy"
      decoding="async"
    />
    <div class="card-img-overlay">
      <h2 class="card-title text-white">Heading text</h2>
      <a
        href="#"
        class="btn btn-md btn-gold"
        data-ga="populate with deafult button text"
        data-ga-name="onclick"
        data-ga-event="link"
        data-ga-action="click"
        data-ga-type="internal link (external if referring to non asu.edu site)"
        data-ga-region="main content"
        data-ga-section="populate with heading text"
      >
        Call to action button
      </a>
    </div>
  </div>,
  { initFunc }
);

export const PortraitMD = createStory(
  <div class="uds-image-based-card portrait-md">
    <img
      src={portraitImage}
      alt="Card image cap"
      loading="lazy"
      decoding="async"
    />
    <div class="card-img-overlay">
      <h2 class="card-title text-white">Heading text</h2>
      <a
        href="#"
        class="btn btn-md btn-gold"
        data-ga="populate with deafult button text"
        data-ga-name="onclick"
        data-ga-event="link"
        data-ga-action="click"
        data-ga-type="internal link (external if referring to non asu.edu site)"
        data-ga-region="main content"
        data-ga-section="populate with heading text"
      >
        Call to action button
      </a>
    </div>
  </div>,
  { initFunc }
);

export const LandscapeSM = createStory(
  <div class="uds-image-based-card landscape-sm">
    <img
      src={portraitImage}
      alt="Card image cap"
      loading="lazy"
      decoding="async"
    />
    <div class="card-img-overlay">
      <h2 class="card-title text-white">Heading text</h2>
      <a
        href="#"
        class="btn btn-sm btn-gold"
        data-ga="populate with deafult button text"
        data-ga-name="onclick"
        data-ga-event="link"
        data-ga-action="click"
        data-ga-type="internal link (external if referring to non asu.edu site)"
        data-ga-region="main content"
        data-ga-section="populate with heading text"
      >
        Call to action button
      </a>
    </div>
  </div>,
  { initFunc }
);

export const LandscapeMD = createStory(
  <div class="uds-image-based-card landscape-md">
    <img
      src={portraitImage}
      alt="Card image cap"
      loading="lazy"
      decoding="async"
    />
    <div class="card-img-overlay">
      <h2 class="card-title text-white">Heading text</h2>
      <a
        href="#"
        class="btn btn-sm btn-gold"
        data-ga="populate with deafult button text"
        data-ga-name="onclick"
        data-ga-event="link"
        data-ga-action="click"
        data-ga-type="internal link (external if referring to non asu.edu site)"
        data-ga-region="main content"
        data-ga-section="populate with heading text"
      >
        Call to action button
      </a>
    </div>
  </div>,
  { initFunc }
);

export const LandscapeLG = createStory(
  <div class="uds-image-based-card landscape-lg">
    <img
      src={portraitImage}
      alt="Card image cap"
      loading="lazy"
      decoding="async"
    />
    <div class="card-img-overlay">
      <h2 class="card-title text-white">Heading text</h2>
      <a
        href="#"
        class="btn btn-md btn-gold"
        data-ga="populate with deafult button text"
        data-ga-name="onclick"
        data-ga-event="link"
        data-ga-action="click"
        data-ga-type="internal link (external if referring to non asu.edu site)"
        data-ga-region="main content"
        data-ga-section="populate with heading text"
      >
        Call to action button
      </a>
    </div>
  </div>,
  { initFunc }
);

export const SquareSM = createStory(
  <div class="uds-image-based-card square-sm">
    <img
      src={portraitImage}
      alt="Card image cap"
      loading="lazy"
      decoding="async"
    />
    <div class="card-img-overlay">
      <h2 class="card-title text-white">Heading text</h2>
      <a
        href="#"
        class="btn btn-sm btn-gold"
        data-ga="populate with deafult button text"
        data-ga-name="onclick"
        data-ga-event="link"
        data-ga-action="click"
        data-ga-type="internal link (external if referring to non asu.edu site)"
        data-ga-region="main content"
        data-ga-section="populate with heading text"
      >
        Call to action button
      </a>
    </div>
  </div>,
  { initFunc }
);

export const SquareMD = createStory(
  <div class="uds-image-based-card square-md">
    <img
      src={portraitImage}
      alt="Card image cap"
      loading="lazy"
      decoding="async"
    />
    <div class="card-img-overlay">
      <h2 class="card-title text-white">Heading text</h2>
      <a
        href="#"
        class="btn btn-md btn-gold"
        data-ga="populate with deafult button text"
        data-ga-name="onclick"
        data-ga-event="link"
        data-ga-action="click"
        data-ga-type="internal link (external if referring to non asu.edu site)"
        data-ga-region="main content"
        data-ga-section="populate with heading text"
      >
        Call to action button
      </a>
    </div>
  </div>,
  { initFunc }
);

export const SquareLG = createStory(
  <div class="uds-image-based-card square-lg">
    <img
      src={portraitImage}
      alt="Card image cap"
      loading="lazy"
      decoding="async"
    />
    <div class="card-img-overlay">
      <h2 class="card-title text-white">Heading text</h2>
      <a
        href="#"
        class="btn btn-md btn-gold"
        data-ga="populate with deafult button text"
        data-ga-name="onclick"
        data-ga-event="link"
        data-ga-action="click"
        data-ga-type="internal link (external if referring to non asu.edu site)"
        data-ga-region="main content"
        data-ga-section="populate with heading text"
      >
        Call to action button
      </a>
    </div>
  </div>,
  { initFunc }
);
