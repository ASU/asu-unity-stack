import { createComponent, createStory } from "../../../helpers/wrapper.js";
export default createComponent("Images", "Atoms", "Examples");

// Images in Bootstrap are made responsive with .img-fluid. max-width: 100%; and height: auto; are applied to the image so that it scales with the parent element.

// Random photos sourced from Unsplash: https://source.unsplash.com

// TODO Consider employing JS to enforce 255 character max for captions.

export const LargeImageNoCaptionComponent = createStory(
  <div className="uds-img">
    <img
      src="https://source.unsplash.com/WLUHO9A_xik/1200x750"
      className="img-fluid"
      alt="Random image. REPLACE with appropriate alt text for accessibility."
      width="1200"
      height="750"
      loading="lazy"
      decoding="async"
      fetchPriority="high"
    />
  </div>
);
LargeImageNoCaptionComponent.args = {
  template: 1,
};

export const LargeImageNoCaptionComponentBorderless = createStory(
  <div className="uds-img borderless">
    <img
      src="https://source.unsplash.com/WLUHO9A_xik/1200x750"
      className="img-fluid"
      alt="Random image. REPLACE with appropriate alt text for accessibility."
      width="1200"
      height="750"
      loading="lazy"
      decoding="async"
      fetchPriority="high"
    />
  </div>
);
LargeImageNoCaptionComponentBorderless.args = {
  template: 1,
};

export const LargeImageCaptionComponent = createStory(
  <div className="uds-img">
    <figure className="figure uds-figure">
      <img
        src="https://source.unsplash.com/WLUHO9A_xik/800x600"
        className="uds-img figure-img img-fluid"
        alt="Random image with caption below. REPLACE with appropriate alt text for accessibility."
        width="800"
        height="600"
        loading="lazy"
        decoding="async"
        fetchPriority="high"
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
LargeImageCaptionComponent.args = {
  template: 1,
};

export const LargeImageCaptionComponentBorderless = createStory(
  <div className="uds-img borderless">
    <figure className="figure uds-figure">
      <img
        src="https://source.unsplash.com/WLUHO9A_xik/800x600"
        className="uds-img figure-img img-fluid"
        alt="Random image with caption below. REPLACE with appropriate alt text for accessibility."
        width="800"
        height="600"
        loading="lazy"
        decoding="async"
        fetchPriority="high"
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
LargeImageCaptionComponentBorderless.args = {
  template: 1,
};

export const LargeImagesDropShadowComponent = createStory(
  <div>
    {/* Component start */}
    <div className="uds-img uds-img-drop-shadow">
      <img
        src="https://source.unsplash.com/WLUHO9A_xik/800x600"
        className="uds-img XXuds-img-drop-shadow img-fluid"
        alt="Random image with dropshadow. REPLACE with appropriate alt text."
        width="800"
        height="600"
        loading="lazy"
        decoding="async"
        fetchPriority="high"
      />
    </div>
    {/* Component end */}

    <br />
    <br />

    {/* Component start */}
    <div className="uds-img uds-img-drop-shadow">
      <figure className="figure uds-figure XXuds-img-drop-shadow">
        <img
          src="https://source.unsplash.com/WLUHO9A_xik/800x600"
          className="uds-img figure-img img-fluid"
          alt="Random image with caption below. REPLACE with appropriate alt text for accessibility."
          width="800"
          height="600"
          loading="lazy"
          decoding="async"
          fetchPriority="high"
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

export const SmallImagesComponent = createStory(
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
          src="https://source.unsplash.com/WLUHO9A_xik/800x600"
          className="uds-img img-fluid"
          alt="Random image with dropshadow. REPLACE with appropriate alt text."
          width="800"
          height="600"
          loading="lazy"
          decoding="async"
          fetchPriority="high"
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
            src="https://source.unsplash.com/WLUHO9A_xik/800x600"
            className="uds-img figure-img img-fluid"
            alt="Random image with caption below. REPLACE with appropriate alt text for accessibility."
            width="800"
            height="600"
            loading="lazy"
            decoding="async"
            fetchPriority="high"
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
