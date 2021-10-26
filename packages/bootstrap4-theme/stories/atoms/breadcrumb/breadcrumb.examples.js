import React from 'react';
import { createComponent, createStory } from '../../../helpers/wrapper.js';
export default createComponent('Breadcrumbs', 'Atoms', 'Examples');

export const BreadcrumbsAgainstWhiteBackground = createStory(
  <nav aria-label="breadcrumbs">
    <ol class="breadcrumb bg-white">
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
);

export const BreadcrumbsAgainstGray1Background = createStory(
  <nav aria-label="breadcrumbs">
    <ol class="breadcrumb bg-gray-1">
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
);

export const BreadcrumbsAgainstGray2Background = createStory(
  <nav aria-label="breadcrumbs">
    <ol class="breadcrumb bg-gray-2">
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
);

export const FullWidthBreadcrumbsAgainstGray7Background = createStory(
  <section class="bg-gray-7">
    <nav class="uds-content-align" aria-label="breadcrumbs">
      <ol class="breadcrumb">
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
  </section>
);
