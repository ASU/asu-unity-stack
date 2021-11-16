import React from 'react';
import { createComponent, createStory } from '../../../helpers/wrapper.js';

const extraOptions = {
  background: {
    name: 'Background',
    options: ['white-bg', 'gray-1-bg', 'gray-2-bg', 'gray-7-bg'],
    defaultValue: 'white-bg',
    control: {
      type: 'radio',
      labels: {
        'white-bg': 'White',
        'gray-1-bg': 'Gray 1',
        'gray-2-bg': 'Gray 2',
        'gray-7-bg': 'Gray 3',
      },
    },
  },
};

export default createComponent(
  'Content Sections/Inset Box',
  'Molecules',
  'Templates',
  extraOptions
);

export const Default = createStory(({ background }) => (
  <div class={`uds-inset-box-container ${background}`}>
    <div class="uds-inset-box-content">
      <h3>Lorem ipsum dolor sit amet</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua eiusmod tempo.
      </p>
      <div class="uds-inset-box-buttons">
        <a href="#" class="btn btn-dark">
          Button link here
        </a>
        <a href="#" class="btn btn-dark">
          Button link here
        </a>
      </div>
      <a href="#" class="">
        Regular text link here
      </a>
    </div>
  </div>
));
Default.args = {
  template: 1,
  background: 'white-bg',
};
