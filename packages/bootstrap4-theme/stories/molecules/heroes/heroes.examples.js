import React from 'react';
import {
  createComponent,
  createStory,
  layoutNames,
} from '../../../helpers/wrapper.js';
import { initVideo as initFunc } from './heroes-video';
import stockVideo from '../../atoms/video/stock-video-person-drawing.mp4';

export default createComponent('Heroes', 'Molecules', 'Examples');

export const HeroMedium = createStory(
  <div className="uds-hero-md has-btn-row">
    <img
      className="hero"
      src="https://source.unsplash.com/IydYk-LGOhc/1920x512"
      alt="Sample placeholder image."
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
        className="btn btn-default btn-gold"
        data-ga="read more"
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
        data-ga="more quotes"
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
  <div className="uds-hero-lg hide-content">
    <img
      className="hero"
      src="https://source.unsplash.com/xyXcGADvAwE/1920x684"
      alt="Sample placeholder image."
    />
    <div role="doc-subtitle">
      <span className="highlight-black">Mass Ascension</span>
    </div>
    <h1 className="text-white">The Albuquerque International Balloon Fiesta</h1>
    <div className="content">
      <p className="text-white">
        For nine days in October, the Albuquerque International Balloon Fiesta
        creates an enchanted world of vibrant balloon-filled skies. Brisk autumn
        mornings in the Rio Grande Valley create an otherworldly backdrop for
        our most popular event, Mass Ascension.
      </p>
    </div>
    <a
      href="#"
      className="btn btn-maroon"
      data-ga="get tickets"
      data-ga-name="onclick"
      data-ga-event="link"
      data-ga-action="click"
      data-ga-type="internal link"
      data-ga-region="main content"
      data-ga-section="mass ascension"
    >
      Get tickets
    </a>
  </div>,
  {
    initFunc,
    supportedTemplates: [layoutNames.FULL_WIDTH],
  }
);
HeroLarge.args = {
  template: 0,
};

export const StoryHeroLarge = createStory(
  <div>
    <section className="uds-story-hero uds-story-hero-lg entry-header">
      <img
        className="hero"
        src="https://source.unsplash.com/WLUHO9A_xik/1920x512"
        alt="Be sure to include alt text in your image tag."
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
  (args) => {
    return (
      <div className="uds-hero-lg uds-video-hero">
        <img
          className="hero"
          src="https://source.unsplash.com/WeYamle9fDM/1920x256"
          alt="Sample placeholder image."
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
            <span className="sr-only">Play hero video</span>
          </button>
          <button
            id="pauseHeroVid"
            type="button"
            className="btn btn-circle btn-circle-alt-white btn-circle-large uds-video-btn-play"
          >
            <span className="fa fa-pause"></span>
            <span className="sr-only">Pause</span>
          </button>
        </div>
        <div role="doc-subtitle">
          <span className="highlight-black">Space Missions</span>
        </div>
        <h1>
          <span className="highlight-white">
            Be a collaborator in exploring space
          </span>
        </h1>
        <div className="content">
          <p className="text-white">
            Humankind is on a path to becoming an interplanetary species, and
            ASU is playing a leading role in making it happen. As a student, you
            can be a collaborator with top scientists on one of ASU’s 25+ active
            space missions.
          </p>
        </div>
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
