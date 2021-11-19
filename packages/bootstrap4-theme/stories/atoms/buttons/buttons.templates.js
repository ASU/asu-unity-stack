import React from 'react';
import { createComponent, createStory } from '../../../helpers/wrapper.js';

/*
We want to allow this component to change color, size, and disabled status.
*/
const extraOptions = {
  color: {
    name: 'Color',
    options: [
      'btn-gold',
      'btn-maroon',
      'btn-gray',
      'btn-dark'],
    defaultValue: 'btn-gold',
    control: {
      type: 'radio',
      labels: {
        'btn-gold': 'Gold',
        'btn-maroon': 'Maroon',
        'btn-gray': 'Gray',
        'btn-dark': 'Dark',
      },
    },
  },
  size: {
    name: 'Size',
    options: [
      'btn-sm',
      'btn-md',
      ''],
    defaultValue: '',
    control: {
      type: 'radio',
      labels: {
        'btn-sm': 'Small',
        'btn-md': 'Medium',
        '': 'Large',
      },
    },
  },
  disabled: {
    name: 'Disabled',
    control: { type: 'boolean' },
    defaultValue: false,
  },
}
export default createComponent('Buttons', 'Atoms', 'Templates', extraOptions);

export const BasicButton = createStory(
  (args) => {
    return (
      <button class={`btn ${args.color} ${args.size}`} disabled={ args.disabled } type="submit">
        Button button
      </button>
    )
  }
);

export const ButtonAsLink = createStory(
  (args) => {
    return (
      <a href="#" class={`btn ${args.color} ${args.size} ${args.disabled ? 'disabled' : ''}`} role="button">
        Button button
      </a>
    )
  }
);

export const ButtonWithIcon = createStory(
  (args) => {
    return (
      <a href="#" class={`btn ${args.color} ${args.size} ${args.disabled ? 'disabled' : ''}`} role="button">
        <span class="fas fa-rocket"></span>&nbsp;&nbsp;Gold button
      </a>
    )
  }
);

export const ButtonTag = createStory(
  <a href="#" class="">
    This is a default link
  </a>
);
