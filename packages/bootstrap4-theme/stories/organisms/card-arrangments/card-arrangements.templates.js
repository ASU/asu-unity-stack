import React from 'react';
import { createComponent, createStory } from '../../../helpers/wrapper.js';

const extraOptions = {
  numCards: {
    name: 'Number Of Cards',
    options: [2, 3, 4, 5, 6],
    defaultValue: 2,
    control: {
      type: 'radio',
    },
  },
  vertical: {
    name: 'Vertical',
    control: { type: 'boolean' },
    defaultValue: false,
  },
  autoArrangement: {
    name: 'Auto Arrangement',
    control: { type: 'boolean' },
    defaultValue: false,
  },
};

export default createComponent(
  'Content Sections/Card Arrangements',
  'Organisms',
  'Templates',
  extraOptions
);
import { cardNoTemplates as Card } from '../../molecules/cards/cards.templates';

export const CardArrangement = createStory((args) => {
  const cards = Array.from(Array(args.numCards)).map(() => {
    return Card({
      cardHeader: 'image',
      event: false,
      link: true,
      tags: true,
      numButtons: 1,
    });
  });
  return (
    <div
      class={`uds-card-arrangement ${
        args.vertical ? 'uds-card-arrangement-vertical' : ''
      }`}
    >
      <div class="uds-card-arrangement-content-container">
        <h2>Lorem ipsum dolor sit amet</h2>
        {args.vertical && (
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
        )}
        <button class="btn btn-dark">Default button</button>
      </div>
      <div
        class={`uds-card-arrangement-card-container  ${
          args.autoArrangement ? 'auto-arrangement' : ''
        }`}
      >
        {cards}
      </div>
    </div>
  );
});
