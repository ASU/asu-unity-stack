import React from "react";

import { defaultDecorator } from "../../../../../shared/components/Layout";
import { initImageParallax as initFunc } from "./image-parallax";

export default {
  title: "Molecules/Image Parallax/Templates",
  decorators: [ defaultDecorator ],
  parameters: {
    initFunc: {
      code: initFunc,
      disable: false,
    },
  }
};

export const ImageParalax = () =>
    <div>
      <h1>Scroll down to view the parallax</h1>
      <div style={{ marginTop: "25vh", marginBottom: "50vh" }}>
        <section className="parallax-container carve-your-path">
          <img
            src="https://source.unsplash.com/WLUHO9A_xik/1200x900"
            width="1200"
            height="900"
            loading="lazy"
            decoding="async"
            fetchpriority="high"
          />
          <div className="parallax-container-content">
            <h2>Carve your path</h2>
            <p>
              At Arizona State University, you'll join a community that will
              help you explore your interests and learn new skills. Through
              quality academics, enrichment opportunities, and support from
              friends and faculty, you'll graduate prepared to accomplish your
              goals throughout your life.
            </p>
            <button
              type="button"
              className="btn btn-maroon"
              data-ga-image-parallax-section="carve your path"
              data-ga-image-parallax="visit asu"
            >
              Visit ASU
            </button>
            <button
              type="button"
              className="btn btn-maroon"
              data-ga-image-parallax-section="carve your path"
              data-ga-image-parallax="request information"
            >
              Request information
            </button>
            <button
              type="button"
              className="btn btn-gold"
              data-ga-image-parallax-section="carve your path"
              data-ga-image-parallax="apply now"
            >
              Apply now
            </button>
          </div>
        </section>
      </div>
    </div>;
