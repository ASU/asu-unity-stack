import React from 'react';
import { createComponent, createStory } from '../../../helpers/wrapper.js';

const extraOptions = {
  color: {
    name: 'Color',
    options: ['white', 'base-gray', 'gray', 'dark'],
    defaultValue: 'gray',
    control: {
      type: 'radio',
      labels: {
        white: 'White',
        'base-gray': 'Base Gray',
        gray: 'Gray',
        dark: 'Dark',
      },
    },
  },
};

export default createComponent('Tooltips', 'Atoms', 'Templates', extraOptions);
import { initTooltip as initFunc } from './tooltips.js';

export const Tooltips = createStory(
  (args) => {
    return (
      <div class={`uds-tooltip-bg-${args.color}`}>
        <div class="uds-tooltip-container">
          <button
            tabindex="0"
            class={`uds-tooltip uds-tooltip-${
              args.color === 'base-gray' ? 'gray-1' : args.color
            }`}
            aria-describedby="tooltip-desc-1"
          >
            <span class="fa-stack">
              <i class="fas fa-circle fa-stack-2x"></i>
              <i class="fas fa-info fa-stack-1x"></i>
            </span>
            <span class="uds-tooltip-visually-hidden">Notifications</span>
          </button>
          <div
            role="tooltip"
            class="uds-tooltip-description"
            id="tooltip-desc-1"
          >
            <span class="uds-tooltip-heading">Lorem ipsum dolor sit amet</span>
            Other content
          </div>
        </div>
      </div>
    );
  },
  {
    initFunc,
  }
);
Tooltips.args = {
  template: 1,
};
