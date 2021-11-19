import React from 'react';
import { createComponent, createStory } from '../../../helpers/wrapper.js';

const extraOptions = {
  bgColor: {
    name: 'Background (With Border Only)',
    options: ['', 'uds-bg-gray', 'uds-bg-dark'],
    defaultValue: '',
    control: {
      type: 'radio',
      labels: {
        '': 'None',
        'uds-bg-gray': 'uds-bg-gray',
        'uds-bg-dark': 'uds-bg-dark',
      },
    },
  },
  border: {
    name: 'Border',
    control: { type: 'boolean' },
    defaultValue: false,
  },
};

export default createComponent(
  'Pagination',
  'Molecules',
  'Templates',
  extraOptions
);

export const Basic = createStory((args) => {
  return (
    <nav aria-label="Page navigation example">
      <ul
        class={`pagination ${
          args.border ? 'justify-content-center border p-2' : ''
        } ${args.bgColor}`}
      >
        <li class="page-item">
          <a class="page-link" href="#" aria-label="Previous page">
            <i class="fa fa-chevron-left arrows"></i>
          </a>
        </li>
        <li class="page-item">
          <a class="page-link" href="#">
            1
          </a>
        </li>
        <li class="page-item">
          <a class="page-link" href="#">
            2
          </a>
        </li>
        <li class="page-item">
          <a class="page-link" href="#">
            3
          </a>
        </li>
        <li class="page-item">
          <a class="page-link" href="#" aria-label="Next page">
            <i class="fa fa-chevron-right arrows"></i>
          </a>
        </li>
      </ul>
    </nav>
  );
});
Basic.args = {
  template: 1,
};
