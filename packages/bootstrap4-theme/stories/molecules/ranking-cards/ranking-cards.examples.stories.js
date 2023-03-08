import React from 'react';

import { createComponent, createStory } from '../../../helpers/wrapper.js';
import { rankingFunc } from './ranking-cards.js';
import exampleImage from './example-image.webp';

export default createComponent('Ranking Cards', 'Molecules', 'Examples');

export const RankingCardLarge = createStory(
  <>
    <br />
    <div class="card-ranking large-image">
      <img
        src={exampleImage}
        alt="Card ranking large version"
        loading="lazy"
        decoding="async"
        fetchPriority="high"
      />
      <div class="info-layer" id="dispatch">
        <div class="content">
          <div className="header">
            <h4>Ranking title goes here, under the photo</h4>
            <button
              class="btn btn-expand"
              aria-label="Expand ranking"
              type="button"
            >
              <span class="fas fa-chevron-up"></span>
              <span class="sr-only">Expand</span>
            </button>
          </div>
          <p>
            ASU has topped U.S. News & World Report’s “Most Innovative Schools”
            list since the inception of the category in 2016. ASU again placed
            ahead of Stanford and MIT on the list, based on a survey of peers.
            College presidents, provosts and admissions deans around the country
            nominated up to 10 colleges or universities that are making the most
            innovative improvements.
          </p>
          <a href="#" aria-label="Read more">
            Read more
            <span class="fas icon-small fa-arrow-right" aria-hidden="true" />
          </a>
        </div>
        <div className="icons">
          <a
            href="mailto:customerservice@asu.edu"
            aria-label="Email to ASU Customer Service"
          >
            <span class="fa fa-envelope" title="Email" />
            <span class="sr-only">Email to ASU Customer Service</span>
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://twitter.com/asu"
            aria-label="Go to ASU twitter"
          >
            <span class="fab fa-twitter-square" title="Twitter" />
            <span class="sr-only">Go to ASU twitter (external link)</span>
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.facebook.com/arizonastateuniversity"
            aria-label="Go to ASU facebook"
          >
            <span class="fab fa-facebook-square" title="Facebook" />
            <span class="sr-only">Go to ASU facebook (external link)</span>
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/company/arizona-state-university"
            aria-label="Go to ASU linkedin"
          >
            <span class="fab fa-linkedin" title="Linkedin" />
            <span class="sr-only">Go to ASU linkedin (external link)</span>
          </a>
        </div>
      </div>
    </div>
    <br />
  </>,
  { initFunc: rankingFunc }
);

export const RankingCardSmall = createStory(
  <>
    <br />
    <div class="card-ranking small-image">
      <div className="image-wrapper">
        <img
          src={exampleImage}
          alt="Card ranking small version"
          loading="lazy"
          decoding="async"
          fetchPriority="high"
        />
      </div>
      <div className="citation">
        <h4>H4 Ranking title goes here, under the photo</h4>
        <p>
          — Citation of the ranking should go under the headline, regular body
          style text
        </p>
      </div>
      <div class="info-layer" id="dispatch">
        <div class="content">
          <div className="header">
            <p>
              ASU has topped U.S. News & World Report’s “Most Innovative
              Schools” list since the inception of the category in 2016. ASU
              again placed ahead of Stanford and MIT on the list, based on a
              survey of peers. College presidents, provosts and admissions deans
              around the country nominated up to 10 colleges or universities
              that are making the most innovative improvements.
            </p>
            <button
              class="btn btn-expand"
              aria-label="Expand ranking"
              type="button"
            >
              <span class="fas fa-chevron-up"></span>
              <span class="sr-only">Expand</span>
            </button>
          </div>
          <a href="#" aria-label="Read more">
            Read more
            <span class="fas icon-small fa-arrow-right" aria-hidden="true" />
          </a>
        </div>
        <div className="icons">
          <a
            href="mailto:customerservice@asu.edu"
            aria-label="Email to ASU Customer Service"
          >
            <span class="fa fa-envelope" title="Email" />
            <span class="sr-only">Email to ASU Customer Service</span>
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://twitter.com/asu"
            aria-label="Go to ASU twitter"
          >
            <span class="fab fa-twitter-square" title="Twitter" />
            <span class="sr-only">Go to ASU twitter (external link)</span>
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.facebook.com/arizonastateuniversity"
            aria-label="Go to ASU facebook"
          >
            <span class="fab fa-facebook-square" title="Facebook" />
            <span class="sr-only">Go to ASU facebook (external link)</span>
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/company/arizona-state-university"
            aria-label="Go to ASU linkedin"
          >
            <span class="fab fa-linkedin" title="Linkedin" />
            <span class="sr-only">Go to ASU linkedin (external link)</span>
          </a>
        </div>
      </div>
    </div>
    <br />
  </>,
  { initFunc: rankingFunc }
);
