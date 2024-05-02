import React from "react";

import { defaultDecorator } from "../../../../../shared/components/Layout";
import cardsImage from '../cards/cards-image.jpg';

export default {
  title: "Molecules/Image Based Cards/Templates",
  decorators: [ defaultDecorator ],
  parameters: { controls: { disable: true } },
};

export const PortraitSM = () => (
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
  </div>
);

export const PortraitMD = () => (
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
  </div>
);

export const LandscapeSM = () => (
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
  </div>
);

export const LandscapeMD = () => (
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
  </div>
);

export const LandscapeLG = () => (
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
  </div>
);

export const SquareSM = () => (
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
  </div>
);

export const SquareMD = () => (
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
  </div>
);

export const SquareLG = () => (
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
  </div>
);
