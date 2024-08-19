import React from "react";

import { imageName } from "../../../../../shared/assets";
import { defaultDecorator } from "../../../../../shared/components/Layout";
import { initImageParallax as initFunc } from "./image-parallax";

export default {
  title: "Molecules/Image Parallax/Examples",
  decorators: [ defaultDecorator ],
  parameters: {
    initFunc: {
      code: initFunc,
      disable: false,
    },
    controls: { disable: true }
  }
};


export const twoImagesWithContentInPageOfSections = () =>
    <div>
      <div
        className="d-flex flex-column justify-content-center align-items-center"
        style={{ height: "500px" }}
      >
        Section 1
      </div>
      <div
        className="d-flex flex-column justify-content-center align-items-center"
        style={{ height: "500px" }}
      >
        Section 2
      </div>
      <div
        className="d-flex flex-column justify-content-center align-items-center"
        style={{ height: "500px" }}
      >
        Section 3
      </div>
      <div
        className="d-flex flex-column justify-content-center align-items-center"
        style={{ height: "500px" }}
      >
        Section 4
      </div>
      <section className="parallax-container carve-your-path">
        <img
          src={ imageName.hero02 }
          alt="Img alt text"
          width="1200"
          height="900"
          loading="lazy"
          decoding="async"
          fetchpriority="high"
        />
        <div className="parallax-container-content">
          <h2>Carve your path</h2>
          <p>
            At Arizona State University, you'll join a community that will help
            you explore your interests and learn new skills. Through quality
            academics, enrichment opportunities, and support from friends and
            faculty, you'll graduate prepared to accomplish your goals
            throughout your life.
          </p>
          <button
            type="button"
            className="btn btn-maroon"
            data-ga-image-parallax-section="carve your path"
            data-ga-image-parallax="visit asu"
          >
            Visit ASU
          </button>
        </div>
      </section>
      <div
        className="d-flex flex-column justify-content-center align-items-center"
        style={{ height: "500px" }}
      >
        Section 6
      </div>
      <div
        className="d-flex flex-column justify-content-center align-items-center"
        style={{ height: "500px" }}
      >
        Section 7
      </div>
      <div
        className="d-flex flex-column justify-content-center align-items-center"
        style={{ height: "500px" }}
      >
        Section 8
      </div>
    </div>;
