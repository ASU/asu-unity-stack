import React from 'react';
import {
  createComponent,
  createStory,
  layoutNames,
} from '../../../helpers/wrapper.js';
import { googleAnalytics as initFunc } from '../../../src/js/googleAnalytics.js';

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
          className="hero"
          src="https://source.unsplash.com/WeYamle9fDM/1920x256"
          alt="Sample placeholder image."
        />
        <div role="doc-subtitle">
          <span className="highlight-white">The New American University</span>
        </div>
        <h1>
          <span className="highlight-black">By whom it includes</span>
        </h1>
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
Hero.args = {
  template: 0,
};

export const HeroWithButtonRow = createStory(
  (args) => {
    return (
      <div class={`${args.size} has-btn-row`}>
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
HeroWithButtonRow.args = {
  template: 0,
};

export const StoryHero = createStory(
  <section className="uds-story-hero">
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
