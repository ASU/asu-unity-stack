import { googleAnalytics as initFunc } from "@asu/unity-bootstrap-theme/js/data-layer.js";

import {
  createComponent,
  createStory,
  layoutNames,
} from "../../../helpers/wrapper.js";
import cardsImage from "../cards/cards-image.jpg";

const extraOptions = {
  size: {
    name: "Size",
    options: ["uds-hero-sm", "uds-hero-md", "uds-hero-lg"],
    defaultValue: "uds-hero-sm",
    control: {
      type: "radio",
      labels: {
        "uds-hero-sm": "Small",
        "uds-hero-md": "Medium",
        "uds-hero-lg": "Large",
      },
    },
  },
};

export default {
  title: "Molecules/Heroes/Templates",
  argTypes: extraOptions,
};

export const HeroSmall = createStory(
  <div className="uds-hero-sm has-btn-row">
    <div className="hero-overlay"></div>
    <img
      className="hero"
      src={cardsImage}
      alt="Sample placeholder image."
      width="2560"
      height="512"
      loading="lazy"
      decoding="async"
      fetchpriority="high"
    />
    <h1>
      <span className="highlight-white">
        Lorem ipsum dolor sit amet, consectetur adip
      </span>
    </h1>
    <div className="btn-row">
      <a
        href="#"
        className="btn btn-default btn-gold"
        data-ga="more quotes"
        data-ga-name="onclick"
        data-ga-event="link"
        data-ga-action="click"
        data-ga-type="internal link"
        data-ga-region="main content"
        data-ga-section="gettysburg address"
      >
        Call to action button
      </a>
      <a
        href="#"
        className="btn btn-default btn-maroon"
        data-ga="more quotes"
        data-ga-name="onclick"
        data-ga-event="link"
        data-ga-action="click"
        data-ga-type="internal link"
        data-ga-region="main content"
        data-ga-section="gettysburg address"
      >
        Second Call to action button
      </a>
    </div>
  </div>,
  {
    initFunc,
    supportedTemplates: [layoutNames.FULL_WIDTH],
  }
);
HeroSmall.args = {
  template: 0,
};

export const HeroMedium = createStory(
  <div className="uds-hero-md has-btn-row">
    <div className="hero-overlay"></div>
    <img
      className="hero"
      src={cardsImage}
      alt="Sample placeholder image."
      width="2560"
      height="512"
      loading="lazy"
      decoding="async"
      fetchpriority="high"
    />
    <h1>
      <span className="highlight-white">
        Lorem ipsum dolor sit amet, consectetur adip
      </span>
    </h1>
    <div className="content">
      <p className="text-white">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        incididuntåç ut labore et dolore magna aliqua eiusmod tempo.
      </p>
    </div>
    <div className="btn-row">
      <a
        href="#"
        className="btn btn-default btn-gold"
        data-ga="more quotes"
        data-ga-name="onclick"
        data-ga-event="link"
        data-ga-action="click"
        data-ga-type="internal link"
        data-ga-region="main content"
        data-ga-section="gettysburg address"
      >
        Call to action button
      </a>
      <a
        href="#"
        className="btn btn-default btn-maroon"
        data-ga="more quotes"
        data-ga-name="onclick"
        data-ga-event="link"
        data-ga-action="click"
        data-ga-type="internal link"
        data-ga-region="main content"
        data-ga-section="gettysburg address"
      >
        Second Call to action button
      </a>
    </div>
  </div>,
  {
    initFunc,
    supportedTemplates: [layoutNames.FULL_WIDTH],
  }
);
HeroMedium.args = {
  template: 0,
};

export const HeroLarge = createStory(
  <div className="uds-hero-lg has-btn-row">
    <div className="hero-overlay"></div>
    <img
      className="hero"
      src={cardsImage}
      alt="Sample placeholder image."
      width="2560"
      height="512"
      loading="lazy"
      decoding="async"
      fetchpriority="high"
    />
    <h1>
      <span className="highlight-white">
        Lorem ipsum dolor sit amet, consectetur adip
      </span>
    </h1>
    <div className="content">
      <p className="text-white">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        incididuntåç ut labore et dolore magna aliqua eiusmod tempo.
      </p>
    </div>
    <div className="btn-row">
      <a
        href="#"
        className="btn btn-default btn-gold"
        data-ga="more quotes"
        data-ga-name="onclick"
        data-ga-event="link"
        data-ga-action="click"
        data-ga-type="internal link"
        data-ga-region="main content"
        data-ga-section="gettysburg address"
      >
        Call to action button
      </a>
      <a
        href="#"
        className="btn btn-default btn-maroon"
        data-ga="more quotes"
        data-ga-name="onclick"
        data-ga-event="link"
        data-ga-action="click"
        data-ga-type="internal link"
        data-ga-region="main content"
        data-ga-section="gettysburg address"
      >
        Second Call to action button
      </a>
    </div>
  </div>,
  {
    initFunc,
    supportedTemplates: [layoutNames.FULL_WIDTH],
  }
);
HeroLarge.args = {
  template: 0,
};

export const StoryHeroMedium = createStory(
  <section className="uds-story-hero">
    <img
      className="hero"
      src={cardsImage}
      alt="Sample placeholder image."
      width="2560"
      height="512"
      loading="lazy"
      decoding="async"
      fetchpriority="high"
    />
    <div className="content">
      <nav aria-label="breadcrumbs">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="#">Home</a>
          </li>
          <li className="breadcrumb-item">
            <a href="#">Second Nav Item</a>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            <a href="#">Current Page</a>
          </li>
        </ol>
      </nav>
      <h1 className="article">
        ASU is measured not by whom we exclude, but rather by whom we include
        and how they succeed.
      </h1>
    </div>
  </section>,
  {
    initFunc,
    supportedTemplates: [layoutNames.FULL_WIDTH],
  }
);
StoryHeroMedium.args = {
  template: 0,
};

export const StoryHeroLarge = createStory(
  <>
    <section className="uds-story-hero uds-story-hero-lg entry-header">
      <img
        className="hero"
        src={cardsImage}
        alt="Sample placeholder image."
        width="2560"
        height="512"
        loading="lazy"
        decoding="async"
        fetchpriority="high"
      />
      <div className="content">
        <nav aria-label="breadcrumbs">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="#">Home</a>
            </li>
            <li className="breadcrumb-item">
              <a href="#">Second Nav Item</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              <a href="#">Current Page</a>
            </li>
          </ol>
        </nav>
        <h1 className="article">
          The answer to the ultimate question of life, the universe, and
          everything
        </h1>
      </div>
    </section>
    <div className="container-xl">
      <div className="row">
        <div className="col-lg-10 offset-lg-1">
          <article>
            <p>
              Cuba Poland worldwide hotel South-America flexibility Amsterdam
              currency. Expedia Moscow St. Petersburg Tripit. Lonely planet
              train airBnB on a shoestring Amsterdam South-America. Hotspots
              flight active lifestyle France activities relaxation car rental
              New York City discount. Maps Australia Tripit translator St.
              Petersburg Russia bus Hungary. Package horse riding itinerary
              foreign flight last minute travel housing euro.
            </p>
            <p>
              Lodge tent rural. Transit relaxation Poland Asia airmiles hotel
              deal things to do Cuba airBnB diary animals package. Rome bunkbeds
              itinerary Pacific. Hitchhiking ticket Pacific France national
              bunkbeds St. Petersburg Hungary. Translator recommendations
              booking discover expedia city trip diary motel chartering guest
              travel. Unique experiences lonely planet guest nighttrain
              couchsurfing horse riding flight China Germany last minute
              overnight.
            </p>
            <p>
              Stay Pacific uncharted relaxation transit tourist attractions
              insurance tent lifestyle booking train hotel. Itinerary exchange
              rate Budapest last minute hotel translation. Earth Cuba booking
              spa place to stay adventure group discount unique experiences
              caravan Moscow gateway package currency kayak. Lonely planet
              housing Barcelona. Australia private jet city trip taxi translator
              cab active lifestyle airBnB explore South-America caravan tour
              operator.
            </p>
          </article>
        </div>
      </div>
    </div>
  </>,
  {
    initFunc,
    supportedTemplates: [layoutNames.FULL_WIDTH],
  }
);
StoryHeroLarge.args = {
  template: 0,
};
