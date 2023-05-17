import { createComponent, createStory } from "../../../helpers/wrapper.js";
import exampleImage from "./example-image.jpg";

export default createComponent("Cards", "Molecules", "Examples");

import { googleAnalytics as initFunc } from "@asu/unity-bootstrap-theme/js/data-layer.js";

export const cardImages = createStory(
  <div style={{ width: "50%" }}>
    <div className="card">
      <img
        className="card-img-top"
        src={exampleImage}
        alt="Card image cap"
        width="600"
        height="337"
        loading="lazy"
        decoding="async"
        fetchpriority="high"
      />
      <div className="card-header"></div>
    </div>
    <hr />
    <div className="card card-event">
      <img
        className="card-img-top"
        src={exampleImage}
        alt="Card image cap"
        width="600"
        height="337"
        loading="lazy"
        decoding="async"
        fetchpriority="high"
      />
      <div className="card-header"></div>
    </div>
    <hr />
    <div className="card card-story">
      <img
        className="card-img-top"
        src={exampleImage}
        alt="Card image cap"
        width="600"
        height="337"
        loading="lazy"
        decoding="async"
        fetchpriority="high"
      />
      <div className="card-header"></div>
    </div>
    <hr />
    <div className="card">
      <i className="fas fa-rocket fa-2x card-icon-top"></i>
      <div className="card-header"></div>
    </div>
  </div>
);

export const cardTitles = createStory(
  <div style={{ width: "50%" }}>
    <div className="card">
      <div className="card-header">
        <h3 className="card-title">Card default title</h3>
      </div>
    </div>

    <hr />
    <div className="card card-degree">
      <div className="card-header">
        <h3 className="card-title">Card default title</h3>
      </div>
    </div>
  </div>
);

export const cardBody = createStory(
  <div className="card">
    <div className="card-header"></div>
    <div className="card-body">
      <p className="card-text">
        Body copy goes here. Limit to 5 lines max. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
        et dolore magna aliqua eiusmod tempo.
      </p>
    </div>
  </div>
);

export const cardEventInfo = createStory(
  <div>
    <div className="card">
      <div className="card-header"></div>
      <div className="card-event-details">
        <div className="card-event-icons">
          <div>
            <i className="far fa-calendar"></i>
          </div>
          <div>Wednesday, November 21st, 2021 11:30 a.m. - 12:30 p.m.</div>
        </div>
        <div className="card-event-icons">
          <div>
            <i className="fas fa-map-marker-alt"></i>
          </div>
          <div>Downtown Phoenix campus</div>
        </div>
      </div>
    </div>

    <hr />

    <div className="card">
      <div className="card-header"></div>
      <div className="card-event-details">
        <div className="card-event-icons">
          <div>
            <i className="far fa-calendar"></i>
          </div>
          <div>Wednesday, November 21st, 2021 11:30 a.m. - 12:30 p.m.</div>
        </div>
      </div>
      <div className="card-event-details">
        <div className="card-event-icons">
          <div>
            <i className="fas fa-map-marker-alt"></i>
          </div>
          <div>Downtown Phoenix campus</div>
        </div>
      </div>
    </div>

    <hr />

    <div className="card">
      <div className="card-header"></div>
      <div className="card-event-details">
        <div className="card-event-icons">
          <div>
            <i className="far fa-calendar"></i>
          </div>
          <div>Wednesday, November 21st, 2021 11:30 a.m. - 12:30 p.m.</div>
        </div>
      </div>
    </div>

    <hr />

    <div className="card">
      <div className="card-header"></div>
      <div className="card-event-details">
        <div className="card-event-icons">
          <div>
            <i className="fas fa-map-marker-alt"></i>
          </div>
          <div>Downtown Phoenix campus</div>
        </div>
      </div>
    </div>
  </div>
);

export const cardTags = createStory(
  <div style={{ width: "50%" }}>
    <div className="card">
      <div className="card-header"></div>
      <div className="card-tags">
        <a className="btn btn-tag btn-tag-alt-white" href="#">
          test tag
        </a>
        <a className="btn btn-tag btn-tag-alt-white" href="#">
          test tag 2
        </a>
        <a className="btn btn-tag btn-tag-alt-white" href="#">
          test tag 3
        </a>
      </div>
    </div>
    <hr />
    {/* No anchor tags */}
    <div className="card">
      <div className="card-header"></div>
      <div className="card-body">
        Need a card tag that does not behave like an anchor? Try the{" "}
        <code>.badge</code> class. Be sure to include the modifier text background
        class too.
      </div>
      <div className="card-tags">
        <span className="badge text-bg-gray-2">No button class</span>
        <span className="badge text-bg-gray-2">No hover effects</span>
        <span className="badge text-bg-gray-7">Dark mode</span>
      </div>
    </div>
  </div>
);

export const cardDegree = createStory(
  <div className="card card-degree">
    <img
      className="card-img-top"
      src={exampleImage}
      alt="Card image cap"
      width="600"
      height="337"
      loading="lazy"
      decoding="async"
      fetchpriority="high"
    />
    <div className="card-header">
      <h3 className="card-title">Card default title</h3>
    </div>
    <div className="card-body">
      <p className="card-text">
        Basic card with mixed content and a fixed width. Cards have no margin
        and no fixed width by default (they’ll naturally fill the full width of
        its parent), so use 'spacing utilities'.
      </p>
    </div>
    <div className="card-buttons">
      <div className="card-button">
        <a
          href="#"
          className="btn btn-maroon"
          data-ga="Button link here"
          data-ga-name="onclick"
          data-ga-event="link"
          data-ga-action="click"
          data-ga-type="internal link"
          data-ga-region="main content"
          data-ga-section="card default title"
        >
          Button link here
        </a>
      </div>
    </div>
    <div className="card-link">
      <a
        href="#"
        className=""
        data-ga="Regular text link here"
        data-ga-name="onclick"
        data-ga-event="link"
        data-ga-action="click"
        data-ga-type="internal link"
        data-ga-region="main content"
        data-ga-section="card default title"
      >
        Regular text link here
      </a>
    </div>
    <div className="card-tags">
      <a className="btn btn-tag btn-tag-alt-white" href="#">
        test tag
      </a>
      <a className="btn btn-tag btn-tag-alt-white" href="#">
        test tag 2
      </a>
      <a className="btn btn-tag btn-tag-alt-white" href="#">
        test tag 3
      </a>
    </div>
  </div>,
  { initFunc }
);

export const cardStory = createStory(
  <div className="card card-story">
    <img
      className="card-img-top"
      src={exampleImage}
      alt="Card image cap"
      width="600"
      height="337"
      loading="lazy"
      decoding="async"
      fetchpriority="high"
    />
    <div className="card-header">
      <h3 className="card-title">Card default title</h3>
    </div>
    <div className="card-body">
      <p className="card-text">
        Basic card with mixed content and a fixed width. Cards have no margin
        and no fixed width by default (they’ll naturally fill the full width of
        its parent), so use 'spacing utilities'.
      </p>
    </div>
    <div className="card-buttons">
      <div className="card-button">
        <a
          href="#"
          className="btn btn-gold"
          data-ga="Button link here"
          data-ga-name="onclick"
          data-ga-event="link"
          data-ga-action="click"
          data-ga-type="internal link"
          data-ga-region="main content"
          data-ga-section="card default title"
        >
          Button link here
        </a>
      </div>
    </div>
    <div className="card-link">
      <a
        href="#"
        className=""
        data-ga="Regular text link here"
        data-ga-name="onclick"
        data-ga-event="link"
        data-ga-action="click"
        data-ga-type="internal link"
        data-ga-region="main content"
        data-ga-section="card default title"
      >
        Regular text link here
      </a>
    </div>
    <div className="card-tags">
      <a className="btn btn-tag btn-tag-alt-white" href="#">
        test tag
      </a>
      <a className="btn btn-tag btn-tag-alt-white" href="#">
        test tag 2
      </a>
      <a className="btn btn-tag btn-tag-alt-white" href="#">
        test tag 3
      </a>
    </div>
  </div>,
  { initFunc }
);

export const cardEvent = createStory(
  <div className="card card-event">
    <img
      className="card-img-top"
      src={exampleImage}
      alt="Card image cap"
      width="600"
      height="337"
      loading="lazy"
      decoding="async"
      fetchpriority="high"
    />
    <div className="card-header">
      <h3 className="card-title">Card default title</h3>
    </div>
    <div className="card-body">
      <p className="card-text">
        Basic card with mixed content and a fixed width. Cards have no margin
        and no fixed width by default (they’ll naturally fill the full width of
        its parent), so use 'spacing utilities'.
      </p>
    </div>
    <div className="card-event-details">
      <div className="card-event-icons">
        <div>
          <i className="far fa-calendar"></i>
        </div>
        <div>Wednesday, November 21st, 2021 12:30 p.m.</div>
      </div>
      <div className="card-event-icons">
        <div>
          <i className="fas fa-map-marker-alt"></i>
        </div>
        <div>Downtown Phoenix campus</div>
      </div>
    </div>
    <div className="card-buttons">
      <div className="card-button">
        <a
          href="#"
          className="btn btn-dark"
          data-ga="Button link here"
          data-ga-name="onclick"
          data-ga-event="link"
          data-ga-action="click"
          data-ga-type="internal link"
          data-ga-region="main content"
          data-ga-section="card default title"
        >
          Button link here
        </a>
      </div>
    </div>
    <div className="card-link">
      <a
        href="#"
        className=""
        data-ga="Regular text link here"
        data-ga-name="onclick"
        data-ga-event="link"
        data-ga-action="click"
        data-ga-type="internal link"
        data-ga-region="main content"
        data-ga-section="card default title"
      >
        Regular text link here
      </a>
    </div>
    <div className="card-tags">
      <a className="btn btn-tag btn-tag-alt-white" href="#">
        test tag
      </a>
      <a className="btn btn-tag btn-tag-alt-white" href="#">
        test tag 2
      </a>
      <a className="btn btn-tag btn-tag-alt-white" href="#">
        test tag 3
      </a>
    </div>
  </div>,
  { initFunc }
);

export const cardVariations = createStory(
  <div>
    <div className="container">
      <div className="row row-spaced pt-2 pb-2">
        <div className="col col-12 col-lg-4">
          <div className="card">
            <img
              className="card-img-top"
              src={exampleImage}
              alt="Card image cap"
              width="600"
              height="337"
              loading="lazy"
              decoding="async"
              fetchpriority="high"
            />
            <div className="card-header">
              <h3 className="card-title">Card default title</h3>
            </div>
            <div className="card-body">
              <p className="card-text">
                Body copy goes here. Limit to 5 lines max. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua eiusmod tempo.
              </p>
            </div>
            <div className="card-event-details">
              <div className="card-event-icons">
                <div>
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div>Downtown Phoenix campus</div>
              </div>
            </div>
            <div className="card-buttons">
              <div className="card-button">
                <a
                  href="#"
                  className="btn btn-dark"
                  data-ga="Button link here"
                  data-ga-name="onclick"
                  data-ga-event="link"
                  data-ga-action="click"
                  data-ga-type="internal link"
                  data-ga-region="main content"
                  data-ga-section="card default title"
                >
                  Button link here
                </a>
              </div>
              <div className="card-button">
                <a
                  href="#"
                  className="btn btn-md btn-dark"
                  data-ga="Button link here"
                  data-ga-name="onclick"
                  data-ga-event="link"
                  data-ga-action="click"
                  data-ga-type="internal link"
                  data-ga-region="main content"
                  data-ga-section="card default title"
                >
                  Button link here
                </a>
              </div>
            </div>
            <div className="card-link">
              <a
                href="#"
                className=""
                data-ga="Regular text link here"
                data-ga-name="onclick"
                data-ga-event="link"
                data-ga-action="click"
                data-ga-type="internal link"
                data-ga-region="main content"
                data-ga-section="card default title"
              >
                Regular text link here
              </a>
            </div>
            <div className="card-tags">
              <a className="btn btn-tag btn-tag-alt-white" href="#">
                test tag
              </a>
              <a className="btn btn-tag btn-tag-alt-white" href="#">
                test tag 2
              </a>
              <a className="btn btn-tag btn-tag-alt-white" href="#">
                test tag 3
              </a>
            </div>
          </div>
        </div>
        <div className="col col-12 col-lg-4">
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </h3>
            </div>
            <div className="card-body">
              <p className="card-text">
                Body copy goes here. Limit to 5 lines max. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua eiusmod tempo.
              </p>
            </div>
            <div className="card-event-details">
              <div className="card-event-icons">
                <div>
                  <i className="far fa-calendar"></i>
                </div>
                <div>Wednesday, November 21st, 2021 12:30 p.m.</div>
              </div>
              <div className="card-event-icons">
                <div>
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div>Downtown Phoenix campus</div>
              </div>
            </div>
            <div className="card-link">
              <a href="#" className="">
                Regular text link here
              </a>
            </div>
            <div className="card-tags">
              <a className="btn btn-tag btn-tag-alt-white" href="#">
                test tag
              </a>
              <a className="btn btn-tag btn-tag-alt-white" href="#">
                test tag 2
              </a>
              <a className="btn btn-tag btn-tag-alt-white" href="#">
                test tag 3
              </a>
            </div>
          </div>
        </div>
        <div className="col col-12 col-lg-4">
          <div className="card borderless">
            <img
              className="card-img-top"
              src={exampleImage}
              alt="Card image cap"
              width="600"
              height="337"
              loading="lazy"
              decoding="async"
              fetchpriority="high"
            />
            <div className="card-header">
              <h3 className="card-title">Card event without borders</h3>
            </div>
            <div className="card-event-details">
              <div className="card-event-icons">
                <div>
                  <i className="far fa-calendar"></i>
                </div>
                <div>Wednesday, November 21st, 2021 12:30 p.m.</div>
              </div>
            </div>
            <div className="card-event-details">
              <div className="card-event-icons">
                <div>
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div>Downtown Phoenix campus</div>
              </div>
            </div>
            <div className="card-buttons">
              <div className="card-button">
                <a
                  href="#"
                  className="btn btn-dark"
                  data-ga="Button link here"
                  data-ga-name="onclick"
                  data-ga-event="link"
                  data-ga-action="click"
                  data-ga-type="internal link"
                  data-ga-region="main content"
                  data-ga-section="card default title"
                >
                  Button link here
                </a>
              </div>
            </div>
            <div className="card-tags">
              <a className="btn btn-tag btn-tag-alt-white" href="#">
                test tag
              </a>
              <a className="btn btn-tag btn-tag-alt-white" href="#">
                test tag 2
              </a>
              <a className="btn btn-tag btn-tag-alt-white" href="#">
                test tag 3
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="row row-spaced pt-2 pb-2">
        <div className="col col-12 col-lg-4">
          <div className="card borderless">
            <img
              className="card-img-top"
              src={exampleImage}
              alt="Card image cap"
              width="600"
              height="337"
              loading="lazy"
              decoding="async"
              fetchpriority="high"
            />
            <div className="card-header">
              <h3 className="card-title">Card with image and no borders</h3>
            </div>
            <div className="card-body">
              <p className="card-text">
                Body copy goes here. Limit to 5 lines max. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua eiusmod tempo.
              </p>
            </div>
            <div className="card-buttons">
              <div className="card-button">
                <a
                  href="#"
                  className="btn btn-dark"
                  data-ga="Button link here"
                  data-ga-name="onclick"
                  data-ga-event="link"
                  data-ga-action="click"
                  data-ga-type="internal link"
                  data-ga-region="main content"
                  data-ga-section="card default title"
                >
                  Button link here
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col col-12 col-lg-4">
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">Card default title</h3>
            </div>
            <div className="card-body">
              <p className="card-text">
                Body copy goes here. Limit to 5 lines max. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua eiusmod tempo.
              </p>
            </div>
            <div className="card-event-details">
              <div className="card-event-icons">
                <div>
                  <i className="far fa-calendar"></i>
                </div>
                <div>Wednesday, November 21st, 2021 12:30 p.m.</div>
              </div>
            </div>
            <div className="card-buttons">
              <div className="card-button">
                <a
                  href="#"
                  className="btn btn-dark"
                  data-ga="Button link here"
                  data-ga-name="onclick"
                  data-ga-event="link"
                  data-ga-action="click"
                  data-ga-type="internal link"
                  data-ga-region="main content"
                  data-ga-section="card default title"
                >
                  Button link here
                </a>
              </div>
            </div>
            <div className="card-link">
              <a
                href="#"
                className=""
                data-ga="Regular text link here"
                data-ga-name="onclick"
                data-ga-event="link"
                data-ga-action="click"
                data-ga-type="internal link"
                data-ga-region="main content"
                data-ga-section="card default title"
              >
                Regular text link here
              </a>
            </div>
          </div>
        </div>
        <div className="col col-12 col-lg-4">
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">Card default title</h3>
            </div>
            <div className="card-body">
              <p className="card-text">
                Body copy goes here. Limit to 5 lines max. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua eiusmod tempo.
              </p>
            </div>
            <div className="card-event-details">
              <div className="card-event-icons">
                <div>
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div>Downtown Phoenix campus</div>
              </div>
            </div>
            <div className="card-link">
              <a
                href="#"
                className=""
                data-ga="Regular text link here"
                data-ga-name="onclick"
                data-ga-event="link"
                data-ga-action="click"
                data-ga-type="internal link"
                data-ga-region="main content"
                data-ga-section="card default title"
              >
                Regular text link here
              </a>
            </div>
            <div className="card-tags">
              <a className="btn btn-tag btn-tag-alt-white" href="#">
                test tag
              </a>
              <a className="btn btn-tag btn-tag-alt-white" href="#">
                test tag 2
              </a>
              <a className="btn btn-tag btn-tag-alt-white" href="#">
                test tag 3
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="row row-spaced pt-2 pb-2">
        <div className="col col-12 col-lg-4">
          <div className="card">
            <img
              className="card-img-top"
              src={exampleImage}
              alt="Card image cap"
              width="600"
              height="337"
              loading="lazy"
              decoding="async"
              fetchpriority="high"
            />
            <div className="card-header">
              <h3 className="card-title">Card default title</h3>
            </div>
            <div className="card-body">
              <p className="card-text">
                Body copy goes here. Limit to 5 lines max. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua eiusmod tempo.
              </p>
            </div>
            <div className="card-event-details">
              <div className="card-event-icons">
                <div>
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div>Downtown Phoenix campus</div>
              </div>
            </div>
            <div className="card-link">
              <a
                href="#"
                className=""
                data-ga="Regular link here"
                data-ga-name="onclick"
                data-ga-event="link"
                data-ga-action="click"
                data-ga-type="internal link"
                data-ga-region="main content"
                data-ga-section="card default title"
              >
                Regular text link here
              </a>
            </div>
          </div>
        </div>
        <div className="col col-12 col-lg-4">
          <div className="card">
            <i className="fas fa-rocket fa-2x card-icon-top"></i>
            <div className="card-header">
              <h3 className="card-title">Card default title</h3>
            </div>
            <div className="card-body">
              <p className="card-text">
                Body copy goes here. Limit to 5 lines max. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua eiusmod tempo.
              </p>
            </div>
            <div className="card-buttons">
              <div className="card-button">
                <a
                  href="#"
                  className="btn btn-dark"
                  data-ga="Button link here"
                  data-ga-name="onclick"
                  data-ga-event="link"
                  data-ga-action="click"
                  data-ga-type="internal link"
                  data-ga-region="main content"
                  data-ga-section="card default title"
                >
                  Button link here
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col col-12 col-lg-4">
          <div className="card card-centered">
            <i className="fas fa-rocket fa-2x card-icon-top"></i>
            <div className="card-header">
              <h3 className="card-title">Card default title</h3>
            </div>
            <div className="card-buttons">
              <div className="card-button">
                <a
                  href="#"
                  className="btn btn-dark"
                  data-ga="Button link here"
                  data-ga-name="onclick"
                  data-ga-event="link"
                  data-ga-action="click"
                  data-ga-type="internal link"
                  data-ga-region="main content"
                  data-ga-section="card default title"
                >
                  Button link here
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="container">
      <div className="row row-spaced pt-2 pb-2">
        <div className="col col-12 col-lg-4">
          <div className="card">
            <img
              className="card-img-top"
              src={exampleImage}
              alt="Card image cap"
              width="600"
              height="337"
              loading="lazy"
              decoding="async"
              fetchpriority="high"
            />
            <div className="card-body">
              <p className="card-text">
                Body copy goes here. Limit to 5 lines max. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua eiusmod tempo.
              </p>
            </div>
            <div className="card-event-details">
              <div className="card-event-icons">
                <div>
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div>Downtown Phoenix campus</div>
              </div>
            </div>
            <div className="card-link">
              <a
                href="#"
                className=""
                data-ga="Regular text link here"
                data-ga-name="onclick"
                data-ga-event="link"
                data-ga-action="click"
                data-ga-type="internal link"
                data-ga-region="main content"
                data-ga-section="card default title"
              >
                Regular text link here
              </a>
            </div>
          </div>
        </div>
        <div className="col col-12 col-lg-4">
          <div className="card">
            <div className="card-body">
              <p className="card-text">
                Body copy goes here. Limit to 5 lines max. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua eiusmod tempo.
              </p>
            </div>
            <div className="card-buttons">
              <div className="card-button">
                <a
                  href="#"
                  className="btn btn-dark"
                  data-ga="Button link here"
                  data-ga-name="onclick"
                  data-ga-event="link"
                  data-ga-action="click"
                  data-ga-type="internal link"
                  data-ga-region="main content"
                  data-ga-section="card default title"
                >
                  Button link here
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col col-12 col-lg-4">
          <div className="card card-centered">
            <i className="fas fa-rocket fa-2x card-icon-top"></i>
            <div className="card-buttons">
              <div className="card-button">
                <a
                  href="#"
                  className="btn btn-dark"
                  data-ga="Button link here"
                  data-ga-name="onclick"
                  data-ga-event="link"
                  data-ga-action="click"
                  data-ga-type="internal link"
                  data-ga-region="main content"
                  data-ga-section="card default title"
                >
                  Button link here
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>,
  {
    initFunc,
    omitTemplate: true,
  }
);

export const horizontal = createStory(
  <div>
    <div className="card card-horizontal">
      <img
        className="card-img-top"
        src={exampleImage}
        alt="Card image cap"
        width="600"
        height="337"
        loading="lazy"
        decoding="async"
        fetchpriority="high"
      />
      <div className="card-content-wrapper">
        <div className="card-header">
          <h3 className="card-title">Card default title</h3>
        </div>
        <div className="card-body">
          <p className="card-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua eiusmod
            tempo.
          </p>
        </div>
        <div className="card-buttons">
          <div className="card-button">
            <a
              href="#"
              className="btn btn-dark"
              data-ga="Button link here"
              data-ga-name="onclick"
              data-ga-event="link"
              data-ga-action="click"
              data-ga-type="internal link"
              data-ga-region="main content"
              data-ga-section="card default title"
            >
              Button link here
            </a>
          </div>
        </div>
      </div>
    </div>

    <hr />

    <div className="card card-degree card-horizontal">
      <img
        className="card-img-top"
        src={exampleImage}
        alt="Card image cap"
        width="600"
        height="337"
        loading="lazy"
        decoding="async"
        fetchpriority="high"
      />
      <div className="card-content-wrapper">
        <div className="card-header">
          <h3 className="card-title">Card default title</h3>
        </div>
        <div className="card-body">
          <p className="card-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua eiusmod
            tempo.
          </p>
        </div>
        <div className="card-buttons">
          <div className="card-button">
            <a
              href="#"
              className="btn btn-dark"
              data-ga="Button link here"
              data-ga-name="onclick"
              data-ga-event="link"
              data-ga-action="click"
              data-ga-type="internal link"
              data-ga-region="main content"
              data-ga-section="card default title"
            >
              Button link here
            </a>
          </div>
        </div>
      </div>
    </div>

    <hr />

    <div className="card card-event card-horizontal">
      <img
        className="card-img-top"
        src={exampleImage}
        alt="Card image cap"
        width="600"
        height="337"
        loading="lazy"
        decoding="async"
        fetchpriority="high"
      />
      <div className="card-content-wrapper">
        <div className="card-header">
          <h3 className="card-title">Card default title</h3>
        </div>
        <div className="card-event-details">
          <div className="card-event-icons">
            <div>
              <i className="far fa-calendar"></i>
            </div>
            <div>Wednesday, November 21st, 2021 12:30 p.m.</div>
          </div>
          <div className="card-event-icons">
            <div>
              <i className="fas fa-map-marker-alt"></i>
            </div>
            <div>Downtown Phoenix campus</div>
          </div>
        </div>
        <div className="card-buttons">
          <div className="card-button">
            <a
              href="#"
              className="btn btn-dark"
              data-ga="Button link here"
              data-ga-name="onclick"
              data-ga-event="link"
              data-ga-action="click"
              data-ga-type="internal link"
              data-ga-region="main content"
              data-ga-section="card default title"
            >
              Button link here
            </a>
          </div>
        </div>
      </div>
    </div>

    <hr />

    <div className="card card-story card-horizontal">
      <img
        className="card-img-top"
        src={exampleImage}
        alt="Card image cap"
        width="600"
        height="337"
        loading="lazy"
        decoding="async"
        fetchpriority="high"
      />
      <div className="card-content-wrapper">
        <div className="card-header">
          <h3 className="card-title">Card default title</h3>
        </div>
        <div className="card-body">
          <p className="card-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua eiusmod
            tempo.
          </p>
        </div>
        <div className="card-buttons">
          <div className="card-button">
            <a
              href="#"
              className="btn btn-dark"
              data-ga="Button link here"
              data-ga-name="onclick"
              data-ga-event="link"
              data-ga-action="click"
              data-ga-type="internal link"
              data-ga-region="main content"
              data-ga-section="card default title"
            >
              Button link here
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>,
  { initFunc }
);

export const checkboxStackedCard = createStory(
  <div className="card card-checkbox-stacked">
    <div className="card-image-content">
      <div className="card-image-gradient checkbox-card">
        <img
          className="card-img-top"
          src={exampleImage}
          alt="Card image cap"
          width="600"
          height="337"
          loading="lazy"
          decoding="async"
          fetchpriority="high"
        />
      </div>
      <form className="uds-form card-image-overlay-content ms-4">
        <fieldset className="card-image-fieldset">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="checkbox2"
              value="option2"
            />
            <label className="form-check-label" for="checkbox2">
              Option 2
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="checkbox1"
              value="option1"
              checked
            />
            <label className="form-check-label" for="checkbox1">
              Option 1
            </label>
          </div>
        </fieldset>
      </form>
    </div>
    <div className="card-header">
      <h3 className="card-title">Card default title</h3>
    </div>
    <div className="card-body">
      <p className="card-text">
        Basic card with mixed content and a fixed width. Cards have no margin
        and no fixed width by default (they’ll naturally fill the full width of
        its parent), so use 'spacing utilities'.
      </p>
    </div>
    <div className="card-buttons">
      <div className="card-button">
        <a
          href="#"
          className="btn btn-maroon"
          data-ga="Default button"
          data-ga-name="onclick"
          data-ga-event="link"
          data-ga-action="click"
          data-ga-type="internal link"
          data-ga-region="main content"
          data-ga-section="card default title"
        >
          Default button
        </a>
      </div>
    </div>
    <div className="card-link">
      <a
        href="#"
        className=""
        data-ga="Regular text link here"
        data-ga-name="onclick"
        data-ga-event="link"
        data-ga-action="click"
        data-ga-type="internal link"
        data-ga-region="main content"
        data-ga-section="card default title"
      >
        Regular text link here
      </a>
    </div>
    <div className="card-tags">
      <a className="btn btn-tag btn-tag-alt-white" href="#">
        test tag
      </a>
      <a className="btn btn-tag btn-tag-alt-white" href="#">
        test tag 2
      </a>
      <a className="btn btn-tag btn-tag-alt-white" href="#">
        test tag 3
      </a>
    </div>
  </div>,
  { initFunc }
);

export const checkboxInlineCard = createStory(
  <div className="card card-checkbox-inline">
    <div className="card-image-content">
      <div className="card-image-gradient checkbox-card">
        <img
          className="card-img-top"
          src={exampleImage}
          alt="Card image cap"
          width="600"
          height="337"
          loading="lazy"
          decoding="async"
          fetchpriority="high"
        />
      </div>
      <form className="uds-form card-image-overlay-content ms-4">
        <fieldset className="card-image-fieldset inline">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="checkbox2"
              value="option2"
            />
            <label className="form-check-label" for="checkbox2">
              Option 2
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="checkbox1"
              value="option1"
              checked
            />
            <label className="form-check-label" for="checkbox1">
              Option 1
            </label>
          </div>
        </fieldset>
      </form>
    </div>
    <div className="card-header">
      <h3 className="card-title">Card default title</h3>
    </div>
    <div className="card-body">
      <p className="card-text">
        Basic card with mixed content and a fixed width. Cards have no margin
        and no fixed width by default (they’ll naturally fill the full width of
        its parent), so use 'spacing utilities'.
      </p>
    </div>
    <div className="card-buttons">
      <div className="card-button">
        <a
          href="#"
          className="btn btn-maroon"
          data-ga="Default button"
          data-ga-name="onclick"
          data-ga-event="link"
          data-ga-action="click"
          data-ga-type="internal link"
          data-ga-region="main content"
          data-ga-section="card default title"
        >
          Default button
        </a>
      </div>
    </div>
    <div className="card-link">
      <a
        href="#"
        className=""
        data-ga="Regular text link here"
        data-ga-name="onclick"
        data-ga-event="link"
        data-ga-action="click"
        data-ga-type="internal link"
        data-ga-region="main content"
        data-ga-section="card default title"
      >
        Regular text link here
      </a>
    </div>
    <div className="card-tags">
      <a className="btn btn-tag btn-tag-alt-white" href="#">
        test tag
      </a>
      <a className="btn btn-tag btn-tag-alt-white" href="#">
        test tag 2
      </a>
      <a className="btn btn-tag btn-tag-alt-white" href="#">
        test tag 3
      </a>
    </div>
  </div>,
  { initFunc }
);

export const mediaTypeOverlayCard = createStory(
  <div className="container">
    <div className="row row-spaced pt-2 pb-2">
      <div className="col col-12 col-md-6 col-lg-4">
        <div className="card card-checkbox-inline">
          <div className="card-image-content">
            <div className="card-image-gradient">
              <img
                className="card-img-top"
                src={exampleImage}
                alt="Card image cap"
                width="600"
                height="337"
                loading="lazy"
                decoding="async"
                fetchpriority="high"
              />
            </div>
            <div className="card-image-overlay-content media-type-overlay ms-4 mb-4">
              <span className="fas icon-small fa-video" title="Video Icon"></span>
            </div>
          </div>
          <div className="card-header">
            <h3 className="card-title">Card default title</h3>
          </div>
          <div className="card-body">
            <p className="card-text">
              Basic card with mixed content and a fixed width. Cards have no
              margin and no fixed width by default (they’ll naturally fill the
              full width of its parent), so use 'spacing utilities'.
            </p>
          </div>
          <div className="card-buttons">
            <div className="card-button">
              <a
                href="#"
                className="btn btn-maroon"
                data-ga="Default button"
                data-ga-name="onclick"
                data-ga-event="link"
                data-ga-action="click"
                data-ga-type="internal link"
                data-ga-region="main content"
                data-ga-section="card default title"
              >
                Default button
              </a>
            </div>
          </div>
          <div className="card-link">
            <a
              href="#"
              className=""
              data-ga="Regular text link here"
              data-ga-name="onclick"
              data-ga-event="link"
              data-ga-action="click"
              data-ga-type="internal link"
              data-ga-region="main content"
              data-ga-section="card default title"
            >
              Regular text link here
            </a>
          </div>
          <div className="card-tags">
            <a className="btn btn-tag btn-tag-alt-white" href="#">
              test tag
            </a>
            <a className="btn btn-tag btn-tag-alt-white" href="#">
              test tag 2
            </a>
            <a className="btn btn-tag btn-tag-alt-white" href="#">
              test tag 3
            </a>
          </div>
        </div>
      </div>
      <div className="col col-12 col-md-6 col-lg-4">
        <div className="card card-story card-checkbox-inline">
          <div className="card-image-content">
            <div className="card-image-gradient">
              <img
                className="card-img-top"
                src={exampleImage}
                alt="Card image cap"
                width="600"
                height="337"
                loading="lazy"
                decoding="async"
                fetchpriority="high"
              />
            </div>
            <div className="card-image-overlay-content media-type-overlay ms-4 mb-2">
              <span className="fas icon-small fa-video" title="Video Icon"></span>
            </div>
          </div>
          <div className="card-header">
            <h3 className="card-title">Card default title</h3>
          </div>
          <div className="card-body">
            <p className="card-text">
              Basic card with mixed content and a fixed width. Cards have no
              margin and no fixed width by default (they’ll naturally fill the
              full width of its parent), so use 'spacing utilities'.
            </p>
          </div>
          <div className="card-buttons">
            <div className="card-button">
              <a
                href="#"
                className="btn btn-maroon"
                data-ga="Default button"
                data-ga-name="onclick"
                data-ga-event="link"
                data-ga-action="click"
                data-ga-type="internal link"
                data-ga-region="main content"
                data-ga-section="card default title"
              >
                Default button
              </a>
            </div>
          </div>
          <div className="card-link">
            <a
              href="#"
              className=""
              data-ga="Regular text link here"
              data-ga-name="onclick"
              data-ga-event="link"
              data-ga-action="click"
              data-ga-type="internal link"
              data-ga-region="main content"
              data-ga-section="card default title"
            >
              Regular text link here
            </a>
          </div>
          <div className="card-tags">
            <a className="btn btn-tag btn-tag-alt-white" href="#">
              test tag
            </a>
            <a className="btn btn-tag btn-tag-alt-white" href="#">
              test tag 2
            </a>
            <a className="btn btn-tag btn-tag-alt-white" href="#">
              test tag 3
            </a>
          </div>
        </div>
      </div>
    </div>

    <div className="row">
      <div className="col col-12">
        <div className="pt-4">
          <h2>Approved overlay icons</h2>
        </div>
      </div>
    </div>
    <div className="row">
      <span className="col me-4">
        <h3>Video</h3>
        <div className="media-type-overlay mt-2">
          <span className="fas icon-small fa-video" title="Video Icon"></span>
        </div>
      </span>
      <span className="col me-4">
        <h3>Audio</h3>
        <div className="media-type-overlay mt-2">
          <span className="fas icon-small fa-volume-up" title="Video Icon"></span>
        </div>
      </span>
      <span className="col me-4">
        <h3>VR/AR/360</h3>
        <div className="media-type-overlay mt-2">
          <span className="fas icon-small fa-street-view" title="Video Icon"></span>
        </div>
      </span>
      <span className="col me-4">
        <h3>Image gallery</h3>
        <div className="media-type-overlay mt-2">
          <span className="fas icon-small fa-images" title="Video Icon"></span>
        </div>
      </span>
    </div>
  </div>,
  {
    initFunc,
    omitTemplate: true,
  }
);
