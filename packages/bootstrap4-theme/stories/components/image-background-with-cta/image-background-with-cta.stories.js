import React from 'react';
import { createComponent, createStory } from '../../../helpers/wrapper.js'
export default createComponent('Content Sections/Image Background With Call To Action');


export const Default = createStory(
  <div class="container">
    <div class="row">
      { /* Component start */ }
        <div class="uds-image-background-with-cta" style={{backgroundImage: "linear-gradient(180deg, #19191900 0%, #191919c9 100%), url('https://source.unsplash.com/random/1920x1200')"}}>
          <div class="uds-image-background-with-cta-container">
            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
            <button class="btn btn-gold">Default button</button>
          </div>
        </div>
      { /* Component end */ }
    </div>
  </div>
);
