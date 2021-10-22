import React from 'react';
import { createComponent, createStory } from '../../../helpers/wrapper.js';

const extraOptions = {
  type: {
    name: 'Type',
    options: [
      'bg-white',
      'bg-gray-1',
      'bg-gray-2',
      'bg-gray-7'],
    defaultValue: 'bg-white',
    control: {
      type: 'radio',
      labels: {
        'bg-white': 'bg-white',
        'bg-gray-1': 'bg-gray-1',
        'bg-gray-2': 'bg-gray-2',
        'bg-gray-7': 'bg-gray-7',
      },
    },
  },
}

export default createComponent('Breadcrumbs', 'Atoms', 'Templates', extraOptions);

export const BreadcrumbsAgainstWhiteBackground = createStory(
  (args) => {
    return (
      <nav aria-label="breadcrumbs">
        <ol class={`breadcrumb ${args.type}`}>
          <li class="breadcrumb-item">
            <a href="#">Home</a>
          </li>
          <li class="breadcrumb-item">
            <a href="#">Second Nav Item</a>
          </li>
          <li class="breadcrumb-item active" aria-current="page">
            Current Page
          </li>
        </ol>
      </nav>
    )
  }
);
