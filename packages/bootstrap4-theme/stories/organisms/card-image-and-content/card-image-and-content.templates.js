import React from 'react';
import {
  createComponent,
  createStory,
  layoutNames,
} from '../../../helpers/wrapper.js';
import { cardNoTemplates as Card } from '../../molecules/cards/cards.templates';
export default createComponent(
  'Content Sections/Card Image And Content',
  'Organisms',
  'Templates'
);

export const CardAndImageContent = createStory(
  <div class="uds-card-image-and-content">
    <div
      class="uds-card-image-and-content-image-container"
      style={{
        'background-image':
          "linear-gradient(180deg, #19191900 0%, #191919c9 100%), url('https://source.unsplash.com/random/1920x1200')",
      }}
    ></div>
    <div class="uds-card-image-and-content-content-container uds-content-align">
      <div class="uds-card-image-and-content-content-container-headline uds-content-align">
        Section headline goes here
      </div>
      <div class="content">
        Here is some introductory text about the topic featured in this section.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum.
      </div>
      {Card({
        cardHeader: 'image',
        event: false,
        link: true,
        tags: true,
        numButtons: 1,
      })}
    </div>
  </div>,
  {
    supportedTemplates: [layoutNames.FULL_WIDTH],
  }
);
CardAndImageContent.args = {
  template: 0,
};
