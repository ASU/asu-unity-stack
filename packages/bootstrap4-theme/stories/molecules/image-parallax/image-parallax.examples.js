import React from 'react';
import { createComponent, createStory } from '../../../helpers/wrapper.js';
import { initImageParallax as initFunc } from './image-parallax';

export default createComponent('Image Parallax', 'Molecules', 'Examples');

// export const parallaxSectionOnly = createStory(
//   () => (
//     <section class="parallax-container carve-your-path">
//       <img src="https://ux-annual-report.ws.asu.edu/sites/all/libraries/Prototype/images/Innovation-Collaboration-ISTB4.jpg" />
//     </section>
//   ),
//   { initFunc }
// );

export const twoImagesInPageOfSections = createStory(
  () => (
    <div>
      <div
        class="d-flex flex-column justify-content-center align-items-center"
        style={{ height: '500px' }}
      >
        Section 1
      </div>
      <div
        class="d-flex flex-column justify-content-center align-items-center"
        style={{ height: '500px' }}
      >
        Section 2
      </div>
      <div
        class="d-flex flex-column justify-content-center align-items-center"
        style={{ height: '500px' }}
      >
        Section 3
      </div>
      <div
        class="d-flex flex-column justify-content-center align-items-center"
        style={{ height: '500px' }}
      >
        Section 4
      </div>
      <section class="parallax-container carve-your-path">
        <img src="https://ux-annual-report.ws.asu.edu/sites/all/libraries/Prototype/images/Innovation-Collaboration-ISTB4.jpg" />
      </section>
      <div
        class="d-flex flex-column justify-content-center align-items-center"
        style={{ height: '500px' }}
      >
        <div style={{ height: '80%', width: '80%', margin: 'auto' }}>
          <button type="button" class="btn btn-gold btn-md">
            Medium button
          </button>
          <button type="button" class="btn btn-maroon btn-md">
            Medium button
          </button>
          <hr />
          <button type="button" class="btn btn-gold btn-sm">
            Small button
          </button>
          <button type="button" class="btn btn-maroon btn-sm">
            Small button
          </button>
        </div>
      </div>
      <div
        class="d-flex flex-column justify-content-center align-items-center"
        style={{ height: '500px' }}
      >
        Section 7
      </div>
      <div
        class="d-flex flex-column justify-content-center align-items-center"
        style={{ height: '500px' }}
      >
        Section 8
      </div>
      <section class="parallax-container asu-for-you">
        <img
          src="https://ux-annual-report.ws.asu.edu/sites/all/libraries/Prototype/images/asuForYouTexture.png"
          data-parallax-factor="1"
          data-parallax-type="scroll-to"
        />
      </section>
    </div>
  ),
  { initFunc }
);

export const twoImagesWithContentInPageOfSections = createStory(
  () => (
    <div>
      <div
        class="d-flex flex-column justify-content-center align-items-center"
        style={{ height: '500px' }}
      >
        Section 1
      </div>
      <div
        class="d-flex flex-column justify-content-center align-items-center"
        style={{ height: '500px' }}
      >
        Section 2
      </div>
      <div
        class="d-flex flex-column justify-content-center align-items-center"
        style={{ height: '500px' }}
      >
        Section 3
      </div>
      <div
        class="d-flex flex-column justify-content-center align-items-center"
        style={{ height: '500px' }}
      >
        Section 4
      </div>
      <section class="parallax-container carve-your-path">
        <img src="https://ux-annual-report.ws.asu.edu/sites/all/libraries/Prototype/images/Innovation-Collaboration-ISTB4.jpg" />
        <div class="parallax-container-content">
          <h2>Carve your path</h2>
          <p>
            At Arizona State University, you'll join a community that will help
            you explore your interests and learn new skills. Through quality
            academics, enrichment opportunities, and support from friends and
            faculty, you'll graduate prepared to accomplish your goals
            throughout your life.
          </p>
          <button
            type="button"
            class="btn btn-maroon"
            data-ga-image-parallax-section="carve your path"
            data-ga-image-parallax="visit asu"
          >
            Visit ASU
          </button>
          <button
            type="button"
            class="btn btn-maroon"
            data-ga-image-parallax-section="carve your path"
            data-ga-image-parallax="request information"
          >
            Request information
          </button>
          <button
            type="button"
            class="btn btn-gold"
            data-ga-image-parallax-section="carve your path"
            data-ga-image-parallax="apply now"
          >
            Apply now
          </button>
        </div>
      </section>
      <div
        class="d-flex flex-column justify-content-center align-items-center"
        style={{ height: '500px' }}
      >
        Section 6
      </div>
      <div
        class="d-flex flex-column justify-content-center align-items-center"
        style={{ height: '500px' }}
      >
        Section 7
      </div>
      <div
        class="d-flex flex-column justify-content-center align-items-center"
        style={{ height: '500px' }}
      >
        Section 8
      </div>
      <section class="parallax-container asu-for-you">
        <img
          src="https://ux-annual-report.ws.asu.edu/sites/all/libraries/Prototype/images/asuForYouTexture.png"
          data-parallax-factor="1"
        />
        <div class="parallax-container-content">
          <h2>Reimagining education for everyone</h2>
          <h3>
            <span class="highlight-gold">New programs for all ages</span>
          </h3>
          <p>
            Ambition, curiosity, creativity and passion don't fit in any one
            box. No matter who you are or how you learn, ASU is ready to serve
            learners at every stage of life. ASU for You is the first step in a
            larger movement — a movement that's breaking down education barriers
            and building up high quality, affordable and accessible learning
            opportunities for everyone, from K-12 to midcareer to postretirement
            and every individual in between.
          </p>
          <div>
            <button
              type="button"
              class="btn btn-maroon"
              data-ga-image-parallax-section="reimagining education for everyone"
              data-ga-image-parallax="learn more"
            >
              Learn more
            </button>
          </div>
        </div>
      </section>
    </div>
  ),
  { initFunc }
);
