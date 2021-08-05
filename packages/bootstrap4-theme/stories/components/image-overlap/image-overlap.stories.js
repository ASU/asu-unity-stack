import React from 'react';
import { createComponent, createStory } from '../../../helpers/wrapper.js'
export default createComponent('Content Sections/Image Overlap');


export const imageOverlapRight = createStory(
  <div class="container">
    <div class="row">
      { /* Component Start */ }
      <div class="uds-image-overlap">
        <img class="img-fluid" src="https://placeimg.com/800/600/nature" alt="Generic image from PlaceIMG" />
        <div class="content-wrapper">
          <h3>This is the content that goes in the box.</h3>
          <p>Instagram tour operator travel sailing flying package. Territory New York City group discount active lifestyle creditcard insurance wellness kayak guide overnight rural lonely planet.</p>
        </div>
      </div>
      { /* Component End */ }
    </div>
  </div>
);

export const imageOverlapLeft = createStory(
  <div class="container">
    <div class="row">
      { /* Component Start */ }
      <div class="uds-image-overlap content-left">
        <img class="img-fluid" src="https://placeimg.com/800/600/nature" alt="Generic image from PlaceIMG" />
        <div class="content-wrapper">
          <h3>This is the content that goes in the box.</h3>
          <p>Instagram tour operator travel sailing flying package. Territory New York City group discount active lifestyle creditcard insurance wellness kayak guide overnight rural lonely planet.</p>
          <p>Train luxury Cuba Paris recommendations nature France sight seeing. Flexibility Amsterdam maps. Pacific lonely planet private jet national insurance taxi tourist attractions. Budget Pacific guide caravan Barcelona place to stay maps gateway diary tour operator money</p>
        </div>
      </div>
      { /* Component End */ }
    </div>
  </div>
);
