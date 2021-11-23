import React from 'react';
import {
  createComponent,
  createStory,
  layoutNames,
} from '../../../helpers/wrapper.js';

const extraOptions = {
  left: {
    name: 'Content Left',
    control: { type: 'boolean' },
    defaultValue: false,
  },
};

export default createComponent(
  'Content Sections/Image Overlap',
  'Molecules',
  'Templates',
  extraOptions
);

export const ImageOverlapRightOrLeft = createStory(
  (args) => {
    return (
      <div class={`uds-image-overlap ${args.left ? 'content-left' : ''}`}>
        <img
          class="img-fluid"
          src="https://source.unsplash.com/WLUHO9A_xik/800x600"
          alt="Generic image from PlaceIMG"
        />
        <div class="content-wrapper">
          <h2>
            <span class="highlight-gold">
              This is the content that goes in the box.
            </span>
          </h2>
          <p>
            Instagram tour operator travel sailing flying package. Territory New
            York City group discount active lifestyle creditcard insurance
            wellness kayak guide overnight rural lonely planet.
          </p>
          <p>
            Train luxury Cuba Paris recommendations nature France sight seeing.
            Flexibility Amsterdam maps. Pacific lonely planet private jet
            national insurance taxi tourist attractions. Budget Pacific guide
            caravan Barcelona place to stay maps gateway diary tour operator
            money
          </p>
        </div>
      </div>
    );
  },
  {
    supportedTemplates: [layoutNames.ONE_COLUMN, layoutNames.TWO_COLUMN],
  }
);
ImageOverlapRightOrLeft.args = {
  template: 1,
};
