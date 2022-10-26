import React from 'react';
import { createComponent, createStory } from '../../../helpers/wrapper.js';
import { initImageParallax as initFunc } from './image-parallax';

export default createComponent('Image Parallax', 'Molecules', 'Templates');

export const ImageParalax = createStory(
  () => (
    <section class="parallax-container carve-your-path">
      <img src="https://source.unsplash.com/WLUHO9A_xik/1200x900" />
      <div class="parallax-container-content">
        <h2>Carve your path</h2>
        <p>
          At Arizona State University, you'll join a community that will help
          you explore your interests and learn new skills. Through quality
          academics, enrichment opportunities, and support from friends and
          faculty, you'll graduate prepared to accomplish your goals throughout
          your life.
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
  ),
  { initFunc }
);
ImageParalax.args = {
  template: 1,
};
