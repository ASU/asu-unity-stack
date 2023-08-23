import {
  createComponent,
  createStory,
  layoutNames,
} from "../../../helpers/wrapper.js";
import stockVideo from "../../atoms/video/stock-video-person-drawing.mp4";
import cardsImage from "../cards/cards-image.jpg";
import { initVideo as initFunc } from "./heroes-video";

export default {
  ...createComponent("Heroes", "Molecules", "Examples"),
  parameters: {
    uds:{
      template: {
        include: [0]
      }
    }
  }
};

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
        ASU named prestigious university
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
  }
);
