import React from 'react';
import { createComponent, createStory } from '../../../helpers/wrapper.js';


const extraOptions = {
  color: {
    name: 'Color',
    options: ['btn-gold',
      'btn-maroon',
      'btn-gray',
      'btn-dark'],
    defaultValue: 'btn-gold',
    control: {
      type: 'radio',
      labels: {
        0: 'Gold',
        1: 'Maroon',
        2: 'Gray',
        3: 'Dark',
      },
    },
  },
}
export default createComponent('Buttons', 'Atoms', 'Templates', extraOptions);

export const BasicButton = createStory(
  (args) => {
    return (
      <button class={`btn ${args.color}`} type="submit">
        Button button
      </button>
    )
  }
);
/*
export const ButtonAsLink = createStory(
  <a href="#" class="btn btn-gold" role="button">
    Button button
  </a>
);

export const ButtonWithIcon = createStory(
  <a href="#" class="btn btn-gold" role="button">
    <span class="fas fa-rocket"></span>&nbsp;&nbsp;Gold button
  </a>
);

export const ButtonTag = createStory(
  <a href="#" class="">
    This is a default link
  </a>
);
*/
