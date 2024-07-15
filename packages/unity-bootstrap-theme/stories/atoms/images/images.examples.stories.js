import React from "react";

import { imageName } from "../../../../../shared/assets";
import { defaultDecorator } from "../../../../../shared/components/Layout";

export default {
  title: "Atoms/Images/Examples",
  decorators: [ defaultDecorator ],
  parameters: { controls: { disable: true } },
};

// Images in Bootstrap are made responsive with .img-fluid. max-width: 100%; and height: auto; are applied to the image so that it scales with the parent element.

// TODO Consider employing JS to enforce 255 character max for captions.

export const LargeImageNoCaptionComponent = () => (
  <div className="uds-img">
    <img
      src={ imageName.attendOnline }
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

export const LargeImageNoCaptionComponentBorderless = () => (
  <div className="uds-img borderless">
    <img
      src={ imageName.careerOutlook }
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

export const LargeImageCaptionComponent = () => (
  <div className="uds-img">
    <figure className="figure uds-figure">
      <img
        src={ imageName.demo1 }
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
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
          felis, ultricies nec, pellentesque eu, pretium &hellip;
        </span>
      </figcaption>
    </figure>
  </div>
);

export const LargeImageCaptionComponentBorderless = () => (
  <div className="uds-img borderless">
    <figure className="figure uds-figure">
      <img
        src={ imageName.demo2 }
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
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
          felis, ultricies nec, pellentesque eu, pretium &hellip;
        </span>
      </figcaption>
    </figure>
  </div>
);

export const LargeImagesDropShadowComponent = () => (
  <div>
    {/* Component start */}
    <div className="uds-img uds-img-drop-shadow">
      <img
        src={ imageName.demo3 }
        className="uds-img XXuds-img-drop-shadow img-fluid"
        alt="Random image with dropshadow. REPLACE with appropriate alt text."
        width="800"
        height="600"
        loading="lazy"
        decoding="async"
        fetchpriority="high"
      />
    </div>
    {/* Component end */}

    <br />
    <br />

    {/* Component start */}
    <div className="uds-img uds-img-drop-shadow">
      <figure className="figure uds-figure XXuds-img-drop-shadow">
        <img
          src={ imageName.poly1 }
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
    {/* Component end */}

    <p>
      Don't forget{" "}
      <a href="https://webaccessibility.asu.edu/articles/images">
        image accessibility
      </a>
      .
    </p>
  </div>
);

export const SmallImagesComponent = () => (
  <div>
    <p>
      The .uds-img element takes up 100% of its container. For small images,
      ensure the .uds-img element is contained by an appropriately sized
      container. These can also be employed for placement. Note: inline CSS in
      the examples here is used to serve as an example, not a recommendation.
      Please use the best practices of your environment, context and layout
      strategy.
    </p>

    <div style={{ maxWidth: "300px" }}>
      {/* Component start */}
      <div className="uds-img">
        <img
          src={ imageName.demo1 }
          className="uds-img img-fluid"
          alt="Random image with dropshadow. REPLACE with appropriate alt text."
          width="800"
          height="600"
          loading="lazy"
          decoding="async"
          fetchpriority="high"
        />
      </div>
      {/* Component end */}
    </div>

    <br />
    <br />

    <div style={{ maxWidth: "300px" }}>
      {/* Component start */}
      <div className="uds-img uds-img-drop-shadow">
        <figure className="figure uds-figure">
          <img
            src={ imageName.demo2 }
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
      {/* Component end */}
    </div>
  </div>
);
