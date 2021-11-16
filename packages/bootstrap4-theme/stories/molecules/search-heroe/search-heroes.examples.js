import React from 'react';
import { createComponent, createStory } from '../../../helpers/wrapper.js';
export default createComponent('Search Hero', 'Molecules', 'Examples');

export const InlineSearchHero = createStory(
  <div
    class="uds-search-hero uds-search-hero-white uds-search-hero-inline"
    style={{
      backgroundImage:
        'linear-gradient(180deg, #19191900 0%, #191919c9 100%),' +
        // Change this url to change image
        'url(https://source.unsplash.com/xyXcGADvAwE/1920x1020)',
    }}
  >
    <div class="uds-search-hero-content">
      <h1>
        <span class="highlight-white">ASU Library headline here</span>
      </h1>
      <div class="form-container">
        <form action="/" class="uds-form">
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
  </div>,
  {
    omitTemplate: true,
  }
);

export const StackSearchHero = createStory(
  <div
    class="uds-search-hero uds-search-hero-white uds-search-hero-stacked"
    style={{
      backgroundImage:
        'linear-gradient(180deg, #19191900 0%, #191919c9 100%),' +
        // Change this url to change image
        'url(https://source.unsplash.com/xyXcGADvAwE/1920x1020)',
    }}
  >
    <div class="uds-search-hero-content">
      <h1>
        <span class="highlight-white">ASU Library headline here</span>
      </h1>
      <div class="form-container">
        <form action="/" class="uds-form">
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
  </div>,
  {
    omitTemplate: true,
  }
);

export const InlineSearchHeroBlack = createStory(
  <div
    class="uds-search-hero uds-search-hero-black uds-search-hero-inline"
    style={{
      backgroundImage:
        'linear-gradient(180deg, #19191900 0%, #191919c9 100%),' +
        // Change this url to change image
        'url(https://source.unsplash.com/xyXcGADvAwE/1920x1020)',
    }}
  >
    <div class="uds-search-hero-content">
      <h1>
        <span class="highlight-black">ASU Library headline here</span>
      </h1>
      <div class="form-container">
        <form action="/" class="uds-form uds-form-gray7">
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
            <button class="btn btn-gold" type="submit">
              Search now
            </button>
            <a href="#" class="text-gold">
              Advanced search
            </a>
          </div>
        </form>
      </div>
    </div>
  </div>,
  {
    omitTemplate: true,
  }
);

export const StackSearchHeroBlack = createStory(
  <div
    class="uds-search-hero uds-search-hero-black uds-search-hero-stacked"
    style={{
      backgroundImage:
        'linear-gradient(180deg, #19191900 0%, #191919c9 100%),' +
        // Change this url to change image
        'url(https://source.unsplash.com/xyXcGADvAwE/1920x1020)',
    }}
  >
    <div class="uds-search-hero-content">
      <h1>
        <span class="highlight-black">ASU Library headline here</span>
      </h1>
      <div class="form-container">
        <form action="/" class="uds-form uds-form-gray7">
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
            <button class="btn btn-gold" type="submit">
              Search now
            </button>
            <a href="#" class="text-gold">
              Advanced search
            </a>
          </div>
        </form>
      </div>
    </div>
  </div>,
  {
    omitTemplate: true,
  }
);
