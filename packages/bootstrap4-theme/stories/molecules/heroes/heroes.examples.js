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
  <div class="uds-hero-md has-btn-row">
    <img
      class="hero"
      src="https://source.unsplash.com/WeYamle9fDM/1920x512&q=50"
      alt="Sample placeholder image."
    />
    <h1>
      <span class="highlight-white">
        Lorem ipsum dolor sit amet, consectetur adip
      </span>
    </h1>
    <div class="content">
      <p class="text-white">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        incididuntåç ut labore et dolore magna aliqua eiusmod tempo.
      </p>
    </div>
    <div class="btn-row">
      <a
        href="#"
        class="btn btn-default btn-gold btn-responsive"
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
        class="btn btn-default btn-maroon btn-responsive"
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
  <div class="uds-hero-lg has-btn-row">
    <img
      class="hero"
      src="https://source.unsplash.com/WeYamle9fDM/1920x512&q=50"
      alt="Sample placeholder image."
    />
    <h1>
      <span class="highlight-gold">
        Lorem ipsum dolor sit amet, consectetur adip
      </span>
    </h1>
    <div class="content">
      <p class="text-white">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        incididunt ut labore et dolore magna aliqua eiusmod tempo.
      </p>
    </div>
    <div class="btn-row">
      <a
        href="#"
        class="btn btn-default btn-gold btn-responsive"
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

export const StoryHeroLarge = createStory(
  <div>
    <section class="uds-story-hero uds-story-hero-lg entry-header">
      <img
        class="hero"
        src="https://source.unsplash.com/WLUHO9A_xik/1920x512"
        alt="Be sure to include alt text in your image tag."
      />
      <div class="content">
        <nav aria-label="breadcrumbs">
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <a href="#">Home</a>
            </li>
            <li class="breadcrumb-item">
              <a href="#">Second Nav Item</a>
            </li>
            <li class="breadcrumb-item active" aria-current="page">
              <a href="#">Current Page</a>
            </li>
          </ol>
        </nav>
        <h1 class="article">
          The answer to the ultimate question of life, the universe, and
          everything
        </h1>
      </div>
    </section>
    <div class="container-xl">
      <div class="row">
        <div class="col-lg-10 offset-lg-1">
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
      <div class="uds-hero-lg uds-video-hero has-btn-row">
        <img
          class="hero"
          src="https://source.unsplash.com/WeYamle9fDM/1920x256"
          alt="Sample placeholder image."
        />
        <video id="media-video" autoPlay muted loop>
          <source src={stockVideo} />
          Your browser does not support the video tag.
        </video>
        <div class="video-hero-controls">
          <button
            id="playHeroVid"
            type="button"
            class="btn btn-circle btn-circle-alt-white btn-circle-large"
          >
            <span class="fa fa-play"></span>
            <span class="sr-only">Play hero video</span>
          </button>
          <button
            id="pauseHeroVid"
            type="button"
            class="btn btn-circle btn-circle-alt-white btn-circle-large uds-video-btn-play"
          >
            <span class="fa fa-pause"></span>
            <span class="sr-only">Pause</span>
          </button>
        </div>
        <h1>
          <span class="highlight-white">
            Be a collaborator in exploring space
          </span>
        </h1>
        <div class="content">
          <p class="text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod incididunt ut labore et dolore magna aliqua eiusmod tempo.
          </p>
        </div>
        <div className="btn-row">
          <a
            href="#"
            class="btn btn-maroon btn-responsive"
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
            class="btn btn-maroon btn-responsive"
            data-ga="Call to action"
            data-ga-name="onclick"
            data-ga-event="link"
            data-ga-action="click"
            data-ga-type="internal link"
            data-ga-region="main content"
            data-ga-secion="the new american university"
          >
            Call to Action asdfasd asdasd asdasd
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
