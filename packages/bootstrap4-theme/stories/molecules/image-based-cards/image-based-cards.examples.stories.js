import React from 'react';
import { createComponent, createStory } from '../../../helpers/wrapper.js';
import portraitImage from './portrait-image.jpg';
import exampleImage from '../cards/example-image.jpg';

export default createComponent('Image based cards', 'Molecules', 'Examples');

export const ImageBasedCardsWithCTA = createStory(
  <>
    <br />
    <div class="content-section text-white">
      <div class="image-holder">
        <img
          src={portraitImage}
          alt="alt text"
          loading="lazy"
          decoding="async"
        />
      </div>
      <div class="content-holder">
        <div className="content-bg">
          <h3>Serving all learners at every stage of life</h3>
          <div class="hidden-details">
            <p class="long-text">
              As a comprehensive public research university, ASU is committed to
              providing excellence in education through the Academic Enterprise,
              and enables the success of each unique student and increases
              access to higher education for all.
            </p>
            <a href="#" class="btn btn-gold btn-sm">
              Call to Action
            </a>
          </div>
        </div>
      </div>
    </div>
    <br />
    <div class="content-section text-white">
      <div class="image-holder">
        <img
          src={exampleImage}
          alt="alt text"
          loading="lazy"
          decoding="async"
        />
      </div>
      <div class="content-holder">
        <div className="content-bg">
          <h3>Experience world-class</h3>
          <div class="hidden-details">
            <p class="long-text">
              As a comprehensive public research university, ASU is committed to
              providing excellence in education through the Academic Enterprise,
              and enables the success of each unique student and increases
              access to higher education for all.
            </p>
            <a href="#" class="btn btn-gold btn-sm">
              Learn more
            </a>
          </div>
        </div>
      </div>
    </div>
    <br />
  </>
);
