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

export default createComponent(
  "Heroes",
  "Molecules",
  "Templates",
  extraOptions
);

export const HeroSmallOneButton = createStory(
  args => {
    return (
      <div className={`${args.size} has-btn-row`}>
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
            className="btn btn-maroon"
            data-ga="Call to action"
            data-ga-name="onclick"
            data-ga-event="link"
            data-ga-action="click"
            data-ga-type="internal link"
            data-ga-region="main content"
            data-ga-secion="the new american university"
          >
            First Call to Action
          </a>
        </div>
      </div>
    );
  },
  {
    initFunc,
    supportedTemplates: [layoutNames.FULL_WIDTH],
  }
);
HeroSmallOneButton.args = {
  template: 0,
};

export const HeroSmallTwoButtons = createStory(
  args => {
    return (
      <div className={`${args.size} has-btn-row`}>
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
          <span className="highlight-gold">Gettysburg Address</span>
        </h1>
        <div className="content">
          <p className="text-white">
            Four score and seven years ago our fathers brought forth upon this
            continent, a new nation, conceived in Liberty, and dedicated to the
            proposition that all men are created equal.
          </p>
        </div>
        <div className="btn-row">
          <a
            href="#"
            className="btn btn-default btn-maroon"
            data-ga="Read more"
            data-ga-name="onclick"
            data-ga-event="link"
            data-ga-action="click"
            data-ga-type="internal link"
            data-ga-region="main content"
            data-ga-section="gettysburg address"
          >
            Read more
          </a>
          <a
            href="#"
            className="btn btn-default btn-gold"
            data-ga="More quotes"
            data-ga-name="onclick"
            data-ga-event="link"
            data-ga-action="click"
            data-ga-type="internal link"
            data-ga-region="main content"
            data-ga-section="gettysburg address"
          >
            More quotes
          </a>
        </div>
      </div>
    );
  },
  {
    initFunc,
    supportedTemplates: [layoutNames.FULL_WIDTH],
  }
);
HeroSmallTwoButtons.args = {
  template: 0,
};

export const StoryHero = createStory(
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
StoryHero.args = {
  template: 0,
};
