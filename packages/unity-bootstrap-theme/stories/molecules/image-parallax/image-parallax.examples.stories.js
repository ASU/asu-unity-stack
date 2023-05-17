import { createComponent, createStory } from "../../../helpers/wrapper.js";
import { initImageParallax as initFunc } from "./image-parallax";

export default createComponent("Image Parallax", "Molecules", "Examples");

export const twoImagesInPageOfSections = createStory(
  () => (
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
          src="https://source.unsplash.com/WLUHO9A_xik/1200x900"
          alt="Img alt text"
          width="1200"
          height="900"
          loading="lazy"
          decoding="async"
          fetchpriority="high"
        />
      </section>
      <div
        className="d-flex flex-column justify-content-center align-items-center"
        style={{ height: "500px" }}
      >
        <div style={{ height: "80%", width: "80%", margin: "auto" }}>
          <button type="button" className="btn btn-gold btn-md">
            Medium button
          </button>
          <button type="button" className="btn btn-maroon btn-md">
            Medium button
          </button>
          <hr />
          <button type="button" className="btn btn-gold btn-sm">
            Small button
          </button>
          <button type="button" className="btn btn-maroon btn-sm">
            Small button
          </button>
        </div>
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
      <section className="parallax-container asu-for-you">
        <img
          src="https://source.unsplash.com/WLUHO9A_xik/1200x900"
          alt="Img alt text"
          data-parallax-factor="1"
          data-parallax-type="scroll-to"
          width="1200"
          height="900"
          loading="lazy"
          decoding="async"
          fetchpriority="high"
        />
      </section>
    </div>
  ),
  { initFunc }
);

export const twoImagesWithContentInPageOfSections = createStory(
  () => (
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
          src="https://source.unsplash.com/WLUHO9A_xik/1200x900"
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
      <section className="parallax-container asu-for-you">
        <img
          src="https://source.unsplash.com/WLUHO9A_xik/1200x900"
          alt="Img alt text"
          data-parallax-factor="1"
          width="1200"
          height="900"
          loading="lazy"
          decoding="async"
          fetchpriority="high"
        />
        <div className="parallax-container-content">
          <h2>Reimagining education for everyone</h2>
          <h3>
            <span className="highlight-gold">New programs for all ages</span>
          </h3>
          <p>
            Ambition, curiosity, creativity and passion don't fit in any one
            box. No matter who you are or how you learn, ASU is ready to serve
            learners at every stage of life. ASU for You is the first step in a
            larger movement — a movement that's breaking down education barriers
            and building up high quality, affordable and accessible learning
            opportunities for everyone, from K-12 to midcareer to postretirement
            and every individual in between.
          </p>
          <div>
            <button
              type="button"
              className="btn btn-maroon"
              data-ga-image-parallax-section="reimagining education for everyone"
              data-ga-image-parallax="learn more"
            >
              Learn more
            </button>
          </div>
        </div>
      </section>
    </div>
  ),
  { initFunc }
);
