import { googleAnalytics as initFunc } from '@asu/unity-bootstrap-theme/js/data-layer.js';
import React from 'react';

import { createComponent, createStory } from '../../../helpers/wrapper.js';
import cardsImage from '../cards/cards-image.jpg';

export default createComponent('Image Based Cards', 'Molecules', 'Templates');

export const PortraitSM = createStory(
  <div className="uds-image-based-card portrait-sm">
    <img
      src={cardsImage}
      alt="Card image cap"
      loading="lazy"
      decoding="async"
    />
    <div className="card-img-overlay">
      <h2 className="card-title text-white">Heading text</h2>
      <a
        href="#"
        className="btn btn-md btn-gold"
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
  <div className="uds-image-based-card portrait-md">
    <img
      src={cardsImage}
      alt="Card image cap"
      loading="lazy"
      decoding="async"
    />
    <div className="card-img-overlay">
      <h2 className="card-title text-white">Heading text</h2>
      <a
        href="#"
        className="btn btn-md btn-gold"
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
  <div className="uds-image-based-card landscape-sm">
    <img
      src={cardsImage}
      alt="Card image cap"
      loading="lazy"
      decoding="async"
    />
    <div className="card-img-overlay">
      <h2 className="card-title text-white">Heading text</h2>
      <a
        href="#"
        className="btn btn-sm btn-gold"
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
  <div className="uds-image-based-card landscape-md">
    <img
      src={cardsImage}
      alt="Card image cap"
      loading="lazy"
      decoding="async"
    />
    <div className="card-img-overlay">
      <h2 className="card-title text-white">Heading text</h2>
      <a
        href="#"
        className="btn btn-sm btn-gold"
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
  <div className="uds-image-based-card landscape-lg">
    <img
      src={cardsImage}
      alt="Card image cap"
      loading="lazy"
      decoding="async"
    />
    <div className="card-img-overlay">
      <h2 className="card-title text-white">Heading text</h2>
      <a
        href="#"
        className="btn btn-md btn-gold"
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
  <div className="uds-image-based-card square-sm">
    <img
      src={cardsImage}
      alt="Card image cap"
      loading="lazy"
      decoding="async"
    />
    <div className="card-img-overlay">
      <h2 className="card-title text-white">Heading text</h2>
      <a
        href="#"
        className="btn btn-sm btn-gold"
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
  <div className="uds-image-based-card square-md">
    <img
      src={cardsImage}
      alt="Card image cap"
      loading="lazy"
      decoding="async"
    />
    <div className="card-img-overlay">
      <h2 className="card-title text-white">Heading text</h2>
      <a
        href="#"
        className="btn btn-md btn-gold"
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
  <div className="uds-image-based-card square-lg">
    <img
      src={cardsImage}
      alt="Card image cap"
      loading="lazy"
      decoding="async"
    />
    <div className="card-img-overlay">
      <h2 className="card-title text-white">Heading text</h2>
      <a
        href="#"
        className="btn btn-md btn-gold"
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
