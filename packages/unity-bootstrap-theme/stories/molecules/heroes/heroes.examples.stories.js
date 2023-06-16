import {
  createComponent,
  createStory,
  layoutNames,
} from "../../../helpers/wrapper.js";
import stockVideo from "../../atoms/video/stock-video-person-drawing.mp4";
import cardsImage from "../cards/cards-image.jpg";
import { initVideo as initFunc } from "./heroes-video";

export default createComponent("Heroes", "Molecules", "Examples");

export const HeroSmallOneButton = createStory(
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
      <span className="highlight-gold">
        ASU named to prestigious university association
      </span>
    </h1>
    <div className="btn-row">
      <a
        href="#"
        className="btn btn-dark"
        data-ga="Call to action"
        data-ga-name="onclick"
        data-ga-event="link"
        data-ga-action="click"
        data-ga-type="internal link"
        data-ga-region="main content"
        data-ga-secion="the new american university"
      >
        Find out more
      </a>
    </div>
  </div>,
  {
    initFunc
  }
);
HeroSmallOneButton.args = {
  template: 0,
};

export const HeroMediumTwoButtons = createStory(
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
      <span className="highlight-white">Turning the tide on our coral reefs</span>
    </h1>
    <div className="content">
      <p className="text-white">
        ASU is creating a new $25 million collaboration that will fuse state-of-the-art science programs with the leadership and cultural knowledge of Hawaii’s community partners to preserve and restore vitality to Hawaii's coral reefs and the health of its coastlines.
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
        Sign up for our newsletter
      </a>
    </div>
  </div>,
  {
    initFunc
  }
);
HeroMediumTwoButtons.args = {
  template: 0,
};

export const HeroLargeOneButton = createStory(
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
      <span className="text-white">The academic experience at ASU</span>
    </h1>
    <div className="content">
      <p className="text-white">
        As the New American University, ASU offers a world-class academic experience designed for the 21st century learner.
      </p>
    </div>
    <div className="btn-row">
      <a
        href="#"
        className="btn btn-default btn-gold"
        data-ga="Read more"
        data-ga-name="onclick"
        data-ga-event="link"
        data-ga-action="click"
        data-ga-type="internal link"
        data-ga-region="main content"
        data-ga-section="gettysburg address"
      >
        Find your degree
      </a>
    </div>
  </div>,
  {
    initFunc
  }
);
HeroLargeOneButton.args = {
  template: 0,
};

export const StoryHeroLarge = createStory(
  <div>
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
  </div>,
  {
    initFunc,
    supportedTemplates: [layoutNames.FULL_WIDTH],
  }
);
StoryHeroLarge.args = {
  template: 0,
};

export const HeroVideo = createStory(
  args => {
    return (
      <div className="uds-hero-lg uds-video-hero has-btn-row">
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
        <video id="media-video" autoPlay muted loop>
          <source src={stockVideo} />
          Your browser does not support the video tag.
        </video>
        <div className="video-hero-controls">
          <button
            id="playHeroVid"
            type="button"
            className="btn btn-circle btn-circle-alt-white btn-circle-large"
          >
            <span className="fa fa-play"></span>
            <span className="visually-hidden">Play hero video</span>
          </button>
          <button
            id="pauseHeroVid"
            type="button"
            className="btn btn-circle btn-circle-alt-white btn-circle-large uds-video-btn-play"
          >
            <span className="fa fa-pause"></span>
            <span className="visually-hidden">Pause</span>
          </button>
        </div>
        <h1>
          <span className="highlight-white">
            Be a collaborator in exploring space
          </span>
        </h1>
        <div className="content">
          <p className="text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod incididunt ut labore et dolore magna aliqua eiusmod tempo.
          </p>
        </div>
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
            Call to Action
          </a>
          <a
            href="#"
            className="btn btn-gold"
            data-ga="Call to action"
            data-ga-name="onclick"
            data-ga-event="link"
            data-ga-action="click"
            data-ga-type="internal link"
            data-ga-region="main content"
            data-ga-secion="the new american university"
          >
            Second Call to Action
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
HeroVideo.args = {
  template: 0,
};
