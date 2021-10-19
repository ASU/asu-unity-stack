import React from 'react';
import { createComponent, createStory, layoutNames } from '../../../helpers/wrapper.js';

const extraOptions = {
  size: {
    name: 'Size',
    options: [
      'uds-hero-sm',
      'uds-hero-md',
      'uds-hero-lg'],
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
  hasBtnRow: {
    name: 'Has Button Row?',
    control: { type: 'boolean' },
    defaultValue: false,
  },
  story: {
    name: 'Story',
    control: { type: 'boolean' },
    defaultValue: false,
  },
}

export default createComponent('Heroes', 'Molecules', 'Templates', extraOptions);

export const Hero = createStory(
  (args) => {
    return (
      <div class={`${args.size} ${args.hasBtnRow ? '' : 'has-btn-row'}`}>
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
        { args.hasBtnRow &&
          <div class="btn-row">
            <a href="#" class="btn btn-default btn-gold">
              Read the 13th Amendment
            </a>
            <a href="#" class="btn btn-default btn-gold">
              More quotes from Abraham Lincoln
            </a>
          </div>
        }
        { !args.hasBtnRow &&
          <a href="#" class="btn btn-maroon">
            Maroon Call to Action
          </a>
        }
      </div>
    )
  },
  {
    supportedTemplates: [layoutNames.FULL_WIDTH]
  }
);
Hero.args = {
  template: 0,
}
