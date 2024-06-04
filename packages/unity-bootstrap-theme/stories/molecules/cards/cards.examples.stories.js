import React from "react";

import { defaultDecorator, htmlRootDecorator } from "../../../../../shared/components/Layout";
import cardsImage from "./cards-image.jpg";
import { horizontalCardsMap as horizontalCard } from "./cardVariations.js";
import { rankingFunc as initRankFunc } from "./ranking-cards.js";

export default {
  title: "Molecules/Cards/Examples",
  parameters: { controls: { disable: true } },
};

export const cardImages = () => (
  <div style={{ width: "50%" }}>
    <div className="card">
      <img
        className="card-img-top"
        src={cardsImage}
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
        src={cardsImage}
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
        src={cardsImage}
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
cardImages.decorators = [ defaultDecorator ];

export const cardTitles = () => (
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
cardTitles.decorators = [ defaultDecorator ];

export const cardBody = () => (
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
cardBody.decorators = [ defaultDecorator ];

export const cardEventInfo = () => (
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
cardEventInfo.decorators = [ defaultDecorator ];

export const cardTags = () => (
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
        <code>.badge</code> class. Be sure to include the modifier text
        background class too.
      </div>
      <div className="card-tags">
        <span className="badge text-bg-gray-2">No button class</span>
        <span className="badge text-bg-gray-2">No hover effects</span>
        <span className="badge text-bg-gray-7">Dark mode</span>
      </div>
    </div>
  </div>
);
cardTags.decorators = [ defaultDecorator ];

export const cardDegree = () => (
  <div className="card card-degree">
    <img
      className="card-img-top"
      src={cardsImage}
      alt="Card image cap"
      width="600"
      height="337"
      loading="lazy"
      decoding="async"
      fetchpriority="high"
    />
    <div className="card-header">
      <h3 className="card-title">
        <a href="#">Card default title</a>
      </h3>
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
  </div>
);
cardDegree.decorators = [ defaultDecorator ];

export const cardStory = () => (
  <div className="card card-story">
    <img
      className="card-img-top"
      src={cardsImage}
      alt="Card image cap"
      width="600"
      height="337"
      loading="lazy"
      decoding="async"
      fetchpriority="high"
    />
    <div className="card-header">
      <h3 className="card-title">
        <a href="#">Card default title</a>
      </h3>
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
  </div>
);
cardStory.decorators = [ defaultDecorator ];

export const cardEvent = () => (
  <div className="card card-event">
    <a href="#">
    <img
      className="card-img-top"
      src={cardsImage}
      alt="Card image cap"
      width="600"
      height="337"
      loading="lazy"
      decoding="async"
      fetchpriority="high"
    />
    </a>
    <div className="card-header">
      <h3 className="card-title">
        <a href="#">Card default title</a>
      </h3>
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
  </div>
);
cardEvent.decorators = [ defaultDecorator ];

export const cardVariations = () => (
  <div>
    <div className="container">
      <div className="row row-spaced pt-2 pb-2">
        <div className="col col-12 col-lg-4">
          <div className="card">
            <img
              className="card-img-top"
              src={cardsImage}
              alt="Card image cap"
              width="600"
              height="337"
              loading="lazy"
              decoding="async"
              fetchpriority="high"
            />
            <div className="card-header">
              <h3 className="card-title">
                <a href="#">Card default title</a>
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
                <a href="#">Card default title</a>
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
              src={cardsImage}
              alt="Card image cap"
              width="600"
              height="337"
              loading="lazy"
              decoding="async"
              fetchpriority="high"
            />
            <div className="card-header">
              <h3 className="card-title">
                <a href="#">Card event without borders</a>
              </h3>
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
              src={cardsImage}
              alt="Card image cap"
              width="600"
              height="337"
              loading="lazy"
              decoding="async"
              fetchpriority="high"
            />
            <div className="card-header">
              <h3 className="card-title">
                <a href="#"> with image and no borders</a>
              </h3>
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
              <h3 className="card-title">
                <a href="#">Card default title</a>
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
              <h3 className="card-title">
                <a href="#">Card default title</a>
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
              src={cardsImage}
              alt="Card image cap"
              width="600"
              height="337"
              loading="lazy"
              decoding="async"
              fetchpriority="high"
            />
            <div className="card-header">
              <h3 className="card-title">
                <a href="#">Card default title</a>
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
              <h3 className="card-title">
                <a href="#">Card default title</a>
              </h3>
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
              <h3 className="card-title">
                <a href="#">Card default title</a>
              </h3>
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
              src={cardsImage}
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
  </div>
);
cardVariations.decorators = [htmlRootDecorator];

export const horizontal =
  args => {
    return (
      <div>
        {horizontalCard({ ...args, type: null })}
        <hr />

        {horizontalCard({ ...args, type: "degree" })}

        <hr />

        {horizontalCard({ ...args, type: "event" })}

        <hr />

        {horizontalCard({ ...args, type: "story" })}
      </div>
    );
  }
;
horizontal.args = {
  numCards: 1,
};
horizontal.argTypes = {
  numCards: {
    name: "Columns",
    control: { type: "range", min: 1, max: 3, step: 1 },
  }
};

horizontal.decorators = [ defaultDecorator ];

export const checkboxStackedCard = () => (
  <div className="card card-checkbox-stacked">
    <div className="card-image-content">
      <div className="card-image-gradient checkbox-card">
        <img
          className="card-img-top"
          src={cardsImage}
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
      <h3 className="card-title">
        <a href="#">Card default title</a>
      </h3>
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
  </div>
);
checkboxStackedCard.decorators = [ defaultDecorator ];

export const checkboxInlineCard = () => (
  <div className="card card-checkbox-inline">
    <div className="card-image-content">
      <div className="card-image-gradient checkbox-card">
        <img
          className="card-img-top"
          src={cardsImage}
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
      <h3 className="card-title">
        <a href="#">Card default title</a>
      </h3>
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
  </div>
);
checkboxInlineCard.decorators = [ defaultDecorator ];

export const mediaTypeOverlayCard = () => (
  <div className="container">
    <div className="row row-spaced pt-2 pb-2">
      <div className="col col-12 col-md-6 col-lg-4">
        <div className="card card-checkbox-inline">
          <div className="card-image-content">
            <div className="card-image-gradient">
              <img
                className="card-img-top"
                src={cardsImage}
                alt="Card image cap"
                width="600"
                height="337"
                loading="lazy"
                decoding="async"
                fetchpriority="high"
              />
            </div>
            <div className="card-image-overlay-content media-type-overlay ms-4 mb-4">
              <span
                className="fas icon-small fa-video"
                title="Video Icon"
              ></span>
            </div>
          </div>
          <div className="card-header">
            <h3 className="card-title">
              <a href="#">Card default title</a>
            </h3>
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
                src={cardsImage}
                alt="Card image cap"
                width="600"
                height="337"
                loading="lazy"
                decoding="async"
                fetchpriority="high"
              />
            </div>
            <div className="card-image-overlay-content media-type-overlay ms-4 mb-2">
              <span
                className="fas icon-small fa-video"
                title="Video Icon"
              ></span>
            </div>
          </div>
          <div className="card-header">
            <h3 className="card-title">
              <a href="#">Card default title</a>
            </h3>
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
          <span
            className="fas icon-small fa-volume-up"
            title="Video Icon"
          ></span>
        </div>
      </span>
      <span className="col me-4">
        <h3>VR/AR/360</h3>
        <div className="media-type-overlay mt-2">
          <span
            className="fas icon-small fa-street-view"
            title="Video Icon"
          ></span>
        </div>
      </span>
      <span className="col me-4">
        <h3>Image gallery</h3>
        <div className="media-type-overlay mt-2">
          <span className="fas icon-small fa-images" title="Video Icon"></span>
        </div>
      </span>
    </div>
  </div>
);
mediaTypeOverlayCard.decorators = [htmlRootDecorator];

export const RankingCardLarge = () => (
  <div className="card-ranking large-image">
    <img
      src={cardsImage}
      alt="Card ranking large version"
      loading="lazy"
      decoding="async"
      fetchpriority="high"
    />
    <div className="info-layer">
      <div className="content">
        <div className="header">
          <h4>Ranking title goes here, under the photo</h4>
          <button
            id="dispatch"
            className="btn btn-expand"
            aria-label="Expand ranking"
            type="button"
            aria-expanded="false"
            data-toggle="collapse"
            data-target="#collapseExample"
            data-ga="collapsable element"
            data-ga-name="onclick"
            data-ga-event="collapse"
            data-ga-type="click"
            data-ga-region="main content"
            data-ga-section="H4 Ranking title goes here, under the photo"
          >
            <i className="fas fa-chevron-up" />
            <span className="sr-only">Expand</span>
          </button>
        </div>
        <p id="collapseExample">
          ASU has topped U.S. News & World Report’s “Most Innovative Schools”
          list since the inception of the category in 2016. ASU again placed
          ahead of Stanford and MIT on the list, based on a survey of peers.
          College presidents, provosts and admissions deans around the country
          nominated up to 10 colleges or universities that are making the most
          innovative improvements.
        </p>
        <a
          href="#"
          aria-label="Read more"
          data-ga-event="link"
          data-ga-action="click"
          data-ga-name="onclick"
          data-ga-type="internal link (external link if non asu.edu domain)"
          data-ga-region="main content"
          data-ga-section="H4 Ranking title goes here, under the photo"
          data-ga="read more"
        >
          Read more
          <span className="fas icon-small fa-arrow-right" aria-hidden="true" />
        </a>
      </div>
    </div>
  </div>
);
RankingCardLarge.parameters = {
  initFunc: {
    code: initRankFunc,
    disable: false,
  },
}
RankingCardLarge.decorators = [ defaultDecorator ];

export const RankingCardSmall = () => (
  <div className="card-ranking small-image">
    <div className="image-wrapper">
      <img
        src={cardsImage}
        alt="Card ranking small version"
        loading="lazy"
        decoding="async"
        fetchpriority="high"
      />
    </div>
    <div className="citation">
      <h4>H4 Ranking title goes here, under the photo</h4>
      <p>
        — Citation of the ranking should go under the headline, regular body
        style text
      </p>
    </div>
    <div className="info-layer">
      <div className="content">
        <div className="header">
          <p>
            ASU has topped U.S. News & World Report’s “Most Innovative Schools”
            list since the inception of the category in 2016. ASU again placed
            ahead of Stanford and MIT on the list, based on a survey of peers.
            College presidents, provosts and admissions deans around the country
            nominated up to 10 colleges or universities that are making the most
            innovative improvements.
          </p>
          <button
            id="dispatch"
            className="btn btn-expand"
            aria-label="Expand ranking"
            type="button"
            aria-expanded="false"
            data-toggle="collapse"
            data-target="#collapseExample"
            data-ga="collapsable element"
            data-ga-name="onclick"
            data-ga-event="collapse"
            data-ga-type="click"
            data-ga-region="main content"
            data-ga-section="H4 Ranking title goes here, under the photo"
          >
            <i className="fas fa-chevron-up" />
            <span className="sr-only">Expand</span>
          </button>
        </div>
        <a
          href="#"
          aria-label="Read more"
          data-ga-event="link"
          data-ga-action="click"
          data-ga-name="onclick"
          data-ga-type="internal link (external link if non asu.edu domain)"
          data-ga-region="main content"
          data-ga-section="H4 Ranking title goes here, under the photo"
          data-ga="read more"
        >
          Read more
          <span className="fas icon-small fa-arrow-right" aria-hidden="true" />
        </a>
      </div>
    </div>
  </div>
);
RankingCardSmall.parameters = {
  initFunc: {
    code: initRankFunc,
    disable: false,
  },
}
RankingCardSmall.decorators = [ defaultDecorator ];
