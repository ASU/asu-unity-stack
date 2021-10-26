import React from 'react';
import { createComponent, createStory } from '../../../helpers/wrapper.js';
export default createComponent('Content Sections/Inset Box', 'Molecules', 'Templates');

export const Default = createStory(
    <div class="uds-inset-box-container gray-1-bg">
      <div class="uds-inset-box-content">
        <h3>Lorem ipsum dolor sit amet</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua eiusmod
          tempo.
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
  );
