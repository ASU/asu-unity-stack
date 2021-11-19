import React from 'react';
import {
  createComponent,
  createStory,
  layoutNames,
} from '../../../helpers/wrapper.js';

const extraOptions = {
  size: {
    name: 'Size',
    options: ['uds-hero-sm', 'uds-hero-md', 'uds-hero-lg'],
    defaultValue: 'uds-hero-sm',
    control: {
      type: 'radio',
      labels: {
        'uds-hero-sm': 'Small',
        'uds-hero-md': 'Medium',
        'uds-hero-lg': 'Large',
      },
    },
  },
};

export default createComponent(
  'Heroes',
  'Molecules',
  'Templates',
  extraOptions
);

export const Hero = createStory(
  (args) => {
    return (
      <div class={`${args.size}`}>
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
          Call to Action
        </a>
      </div>
    );
  },
  {
    supportedTemplates: [layoutNames.FULL_WIDTH],
  }
);
Hero.args = {
  template: 0,
};

export const HeroWithButtonRow = createStory(
  (args) => {
    return (
      <div class={`${args.size} has-btn-row`}>
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
      </div>
    );
  },
  {
    supportedTemplates: [layoutNames.FULL_WIDTH],
  }
);
HeroWithButtonRow.args = {
  template: 0,
};

export const StoryHero = createStory(
  <section class="uds-story-hero">
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
        ASU is measured not by whom we exclude, but rather by whom we include
        and how they succeed.
      </h1>
    </div>
  </section>,
  {
    supportedTemplates: [layoutNames.FULL_WIDTH],
  }
);
StoryHero.args = {
  template: 0,
};
