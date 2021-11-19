import React from 'react';
import {
  createComponent,
  createStory,
  layoutNames,
} from '../../../helpers/wrapper.js';
export default createComponent('Heroes', 'Molecules', 'Examples');

export const HeroMedium = createStory(
  <div class="uds-hero-md has-btn-row">
    <img
      class="hero"
      src="https://source.unsplash.com/IydYk-LGOhc/1920x512"
      alt="Sample placeholder image."
    />
    <h1>
      <span class="highlight-gold">Gettysburg Address</span>
    </h1>
    <div class="content">
      <p class="text-white">
        Four score and seven years ago our fathers brought forth upon this
        continent, a new nation, conceived in Liberty, and dedicated to the
        proposition that all men are created equal.
      </p>
    </div>
    <div class="btn-row">
      <a href="#" class="btn btn-default btn-gold">
        Read more
      </a>
      <a href="#" class="btn btn-default btn-gold">
        More quotes
      </a>
    </div>
  </div>,
  {
    supportedTemplates: [layoutNames.FULL_WIDTH],
  }
);
HeroMedium.args = {
  template: 0,
};

export const HeroLarge = createStory(
  <div class="uds-hero-lg hide-content">
    <img
      class="hero"
      src="https://source.unsplash.com/xyXcGADvAwE/1920x684"
      alt="Sample placeholder image."
    />
    <div role="doc-subtitle">
      <span class="highlight-black">Mass Ascension</span>
    </div>
    <h1 class="text-white">The Albuquerque International Balloon Fiesta</h1>
    <div class="content">
      <p class="text-white">
        For nine days in October, the Albuquerque International Balloon Fiesta
        creates an enchanted world of vibrant balloon-filled skies. Brisk autumn
        mornings in the Rio Grande Valley create an otherworldly backdrop for
        our most popular event, Mass Ascension.
      </p>
    </div>
    <a href="#" class="btn btn-maroon">
      Get tickets
    </a>
  </div>,
  {
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
              Current Page
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
    supportedTemplates: [layoutNames.FULL_WIDTH],
  }
);
StoryHeroLarge.args = {
  template: 0,
};
