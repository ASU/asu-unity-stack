import React from 'react';
import { createComponent, createStory } from '../../../helpers/wrapper.js'
export default createComponent('Breadcrumbs');


const BreadcrumbsAgainstWhiteBackgroundComponent = (
  <nav aria-label="breadcrumbs">
    <ol class="breadcrumb bg-white">
      <li class="breadcrumb-item"><a href="#">Home</a></li>
      <li class="breadcrumb-item"><a href="#">Second Nav Item</a></li>
      <li class="breadcrumb-item active" aria-current="page">Current Page</li>
    </ol>
  </nav>
);


const BreadcrumbsAgainstGray1BackgroundComponent = (
  <nav aria-label="breadcrumbs">
    <ol class="breadcrumb bg-gray-1">
      <li class="breadcrumb-item"><a href="#">Home</a></li>
      <li class="breadcrumb-item"><a href="#">Second Nav Item</a></li>
      <li class="breadcrumb-item active" aria-current="page">Current Page</li>
    </ol>
  </nav>
);


const BreadcrumbsAgainstGray2BackgroundComponent = (
  <nav aria-label="breadcrumbs">
    <ol class="breadcrumb bg-gray-2">
      <li class="breadcrumb-item"><a href="#">Home</a></li>
      <li class="breadcrumb-item"><a href="#">Second Nav Item</a></li>
      <li class="breadcrumb-item active" aria-current="page">Current Page</li>
    </ol>
  </nav>
);


const BreadcrumbsAgainstGray7BackgroundComponent = (
  <nav aria-label="breadcrumbs">
    <ol class="breadcrumb bg-gray-7">
      <li class="breadcrumb-item"><a href="#">Home</a></li>
      <li class="breadcrumb-item"><a href="#">Second Nav Item</a></li>
      <li class="breadcrumb-item active" aria-current="page">Current Page</li>
    </ol>
  </nav>
);

export const BreadcrumbsAgainstWhiteBackground = createStory(BreadcrumbsAgainstWhiteBackgroundComponent);
export const BreadcrumbsAgainstGray1Background = createStory(BreadcrumbsAgainstGray1BackgroundComponent);
export const BreadcrumbsAgainstGray2Background = createStory(BreadcrumbsAgainstGray2BackgroundComponent);
export const BreadcrumbsAgainstGray7Background = createStory(BreadcrumbsAgainstGray7BackgroundComponent);
