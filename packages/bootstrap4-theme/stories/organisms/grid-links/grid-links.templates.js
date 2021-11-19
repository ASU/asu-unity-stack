import React from 'react';
import { createComponent, createStory } from '../../../helpers/wrapper.js';

const extraOptions = {
  numColumns: {
    name: 'Number of columns',
    options: ['two-columns', 'three-columns', 'four-columns'],
    defaultValue: 'two-columns',
    control: {
      type: 'radio',
      labels: {
        'two-columns': 'two-columns',
        'three-columns': 'three-columns',
        'four-columns': 'four-columns',
      },
    },
  },
  bgColor: {
    name: 'BackGround Color',
    options: ['', 'bg-gray-1', 'bg-gray-7'],
    defaultValue: '',
    control: {
      type: 'radio',
      labels: {
        '': 'None',
        'bg-gray-1': 'bg-gray-1',
        'bg-gray-7': 'bg-gray-7',
      },
    },
  },
  textColor: {
    name: 'Text color',
    options: ['', 'text-gold', 'text-white'],
    defaultValue: '',
    control: {
      type: 'radio',
      labels: {
        '': 'None',
        'text-gold': 'text-gold',
        'text-white': 'text-white',
      },
    },
  },
};

export default createComponent(
  'Grid Links',
  'Organisms',
  'Templates',
  extraOptions
);

export const BackgroundWhiteStory = createStory((args) => {
  return (
    <section class={args.bgColor}>
      <div class={`uds-grid-links ${args.numColumns} ${args.textColor}`}>
        <a href="#">
          <span class="fa fa-fw fa-university"></span>First-year student
        </a>
        <a href="#">
          <span class="fa fa-fw fa-desktop"></span>Online student
        </a>
        <a href="#">
          <span class="fa fa-fw fa-lightbulb"></span>Transfer student
        </a>
        <a href="#">
          <span class="fa fa-fw fa-user-graduate"></span>Veteran student
        </a>
        <a href="#">
          <span class="fa fa-fw fa-graduation-cap"></span>Graduate student
        </a>
        <a href="#">
          <span class="fa fa-fw fa-rocket"></span>Universal Learner
        </a>
        <a href="#">
          <span class="fa fa-fw fa-globe-americas"></span>International student
        </a>
        <a href="#">
          <span class="fa fa-fw fa-users"></span>Non-degree student
        </a>
      </div>
    </section>
  );
});
BackgroundWhiteStory.args = {
  template: 1,
  numColumns: 'two-columns',
};
