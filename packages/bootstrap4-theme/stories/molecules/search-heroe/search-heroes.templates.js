import React from 'react';
import { createComponent, createStory } from '../../../helpers/wrapper.js';

const extraOptions = {
  color: {
    name: 'Color',
    options: ['uds-search-hero-white', 'uds-search-hero-black'],
    defaultValue: 'uds-search-hero-white',
    control: {
      type: 'radio',
      labels: {
        'uds-search-hero-white': 'White',
        'uds-search-hero-black': 'Black',
      },
    },
  },
  display: {
    name: 'Display',
    options: ['uds-search-hero-inline', 'uds-search-hero-stacked'],
    defaultValue: 'uds-search-hero-inline',
    control: {
      type: 'radio',
      labels: {
        'uds-search-hero-inline': 'Inline',
        'uds-search-hero-stacked': 'Stack',
      },
    },
  },
};

export default createComponent(
  'Search Hero',
  'Molecules',
  'Templates',
  extraOptions
);

export const SearchHero = createStory(
  (args) => {
    return (
      <div
        class={`uds-search-hero ${args.color} ${args.display}`}
        style={{
          backgroundImage:
            'linear-gradient(180deg, #19191900 0%, #191919c9 100%),' +
            // Change this url to change image
            'url(https://source.unsplash.com/WLUHO9A_xik/1920x1020)',
        }}
      >
        <div class="uds-search-hero-content">
          <h1>
            <span
              class={`${
                args.color === 'uds-search-hero-white'
                  ? 'highlight-white'
                  : 'highlight-black'
              }`}
            >
              ASU Library headline here
            </span>
          </h1>
          <div class="form-container">
            <form
              action="/"
              class={`uds-form ${
                args.color === 'uds-search-hero-black' ? 'uds-form-gray7' : ''
              }`}
            >
              <div class="inputs-container">
                <div class="form-group">
                  <label for="enter-keywords">What are you looking for?</label>
                  <input
                    class="form-control"
                    id="enter-keywords"
                    placeholder="Enter keywords"
                    type="text"
                  />
                </div>
                <div class="form-group">
                  <label for="search-database">Search database</label>
                  <select class="form-control" id="search-database">
                    <option>One Search</option>
                    <option>Multiple Search</option>
                  </select>
                </div>
              </div>
              <div class="action-container">
                <button class="btn btn-maroon" type="submit">
                  Search now
                </button>
                <a href="#">Advanced search</a>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  },
  {
    omitTemplate: true,
  }
);
SearchHero.args = {
  color: 'uds-search-hero-white',
  display: 'uds-search-hero-inline',
};
