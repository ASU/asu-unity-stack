import React from 'react';
import { createComponent, createStory } from '../../../helpers/wrapper.js';
export default createComponent('Heroes', 'Molecules');

export const HeroSmall = createStory(
  <div class="uds-hero-sm">
    <img
      class="hero"
      src="https://source.unsplash.com/WeYamle9fDM/1920x256"
      alt="Sample placeholder image."
    />
    <div role="doc-subtitle">
      <span class="highlight-white">The New American University</span>
    </div>
    <h1>
      <span class="highlight-black">By whom it includes</span>
    </h1>
    <a href="#" class="btn btn-maroon">
      Maroon Call to Action
    </a>
  </div>
);

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
        Read the 13th Amendment
      </a>
      <a href="#" class="btn btn-default btn-gold">
        More quotes from Abraham Lincoln
      </a>
    </div>
  </div>
);

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
      Get your tickets
    </a>
  </div>
);

export const StoryHero = createStory(
  <section class="uds-story-hero">
    <img
      class="hero"
      src="https://source.unsplash.com/random/1920x512"
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
        ASU is measured not by whom we exclude, but rather by whom we include
        and how they succeed.
      </h1>
    </div>
  </section>
);

export const StoryHeroLarge = createStory(
  <section class="uds-story-hero uds-story-hero-lg entry-header">
    <img
      class="hero"
      src="https://source.unsplash.com/random/1920x512"
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
);
