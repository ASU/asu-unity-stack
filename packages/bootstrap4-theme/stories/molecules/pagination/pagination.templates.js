import React from 'react';
import { createComponent, createStory } from '../../../helpers/wrapper.js';

const extraOptions = {
  bgColor: {
    name: 'Background (With Border Only)',
    options: [
      '',
      'uds-bg-gray',
      'uds-bg-dark',],
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
  icons: {
    name: 'Icons',
    control: { type: 'boolean' },
    defaultValue: false,
  },
  border: {
    name: 'Border',
    control: { type: 'boolean' },
    defaultValue: false,
  },
}

export default createComponent('Pagination', 'Molecules', 'Templates', extraOptions);

export const Basic = createStory(
  (args) => {
    return (
      <nav aria-label="Page navigation example">
        <ul class={`pagination ${args.border ? 'justify-content-center border p-2' : ''} ${args.bgColor}`}>
          { args.icons &&
            <li class="page-item">
              <a class="page-link page-link-icon" href="#">
                Prev
              </a>
            </li>
          }
          <li class="page-item">
            <a class="page-link" href="#">
              Prev
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
            <a class="page-link" href="#">
              Next
            </a>
          </li>
          { args.icons &&
            <li class="page-item">
              <a class="page-link page-link-icon" href="#">
                Next
              </a>
            </li>
          }
        </ul>
      </nav>
    )
  }

);
