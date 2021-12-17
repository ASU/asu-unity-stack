import React from 'react';
import { createComponent, createStory } from '../../../helpers/wrapper.js';
export default createComponent('Pagination', 'Molecules', 'Examples');
import { googleAnalytics as initFunc } from '../../../src/js/googleAnalytics.js';

export const DisabledAndActiveStatesComponent = createStory(
  <nav aria-label="...">
    <ul class="pagination">
      <li class="page-item disabled">
        <a
          class="page-link page-link-icon"
          href="#"
          tabindex="-1"
          aria-disabled="true"
        >
          Prev
        </a>
      </li>
      <li class="page-item active" aria-current="page">
        <a
          class="page-link"
          href="#"
          data-ga-event="select"
          data-ga-action="click"
          data-ga-name="onclick"
          data-ga-type="pagination"
          data-ga-region="main content"
          data-ga-section="pagination title"
          data-ga="page 1"
        >
          1<span class="sr-only">(current)</span>
        </a>
      </li>
      <li class="page-item">
        <a
          class="page-link"
          href="#"
          data-ga-event="select"
          data-ga-action="click"
          data-ga-name="onclick"
          data-ga-type="pagination"
          data-ga-region="main content"
          data-ga-section="pagination title"
          data-ga="page 2"
        >
          2
        </a>
      </li>
      <li class="page-item">
        <a
          class="page-link"
          href="#"
          data-ga-event="select"
          data-ga-action="click"
          data-ga-name="onclick"
          data-ga-type="pagination"
          data-ga-region="main content"
          data-ga-section="pagination title"
          data-ga="page 3"
        >
          3
        </a>
      </li>
      <li class="page-item">
        <a class="page-link page-link-icon" href="#">
          Next
        </a>
      </li>
    </ul>
  </nav>,
  { initFunc }
);

export const LargeNumbersComponent = createStory(
  <nav aria-label="...">
    <ul class="pagination">
      <li class="page-item">
        <a class="page-link" href="#">
          First
        </a>
      </li>
      <li class="page-item">
        <a class="page-link" href="#">
          Prev
        </a>
      </li>
      <li class="page-item">
        <span class="page-link">...</span>
      </li>
      <li class="page-item">
        <a
          class="page-link"
          href="#"
          data-ga-event="select"
          data-ga-action="click"
          data-ga-name="onclick"
          data-ga-type="pagination"
          data-ga-region="main content"
          data-ga-section="pagination title"
          data-ga="page 40"
        >
          40
        </a>
      </li>
      <li class="page-item active" aria-current="page">
        <a
          class="page-link"
          href="#"
          data-ga-event="select"
          data-ga-action="click"
          data-ga-name="onclick"
          data-ga-type="pagination"
          data-ga-region="main content"
          data-ga-section="pagination title"
          data-ga="page 41"
        >
          41
          <span class="sr-only">(current)</span>
        </a>
      </li>
      <li class="page-item">
        <a
          class="page-link"
          href="#"
          data-ga-event="select"
          data-ga-action="click"
          data-ga-name="onclick"
          data-ga-type="pagination"
          data-ga-region="main content"
          data-ga-section="pagination title"
          data-ga="page 42"
        >
          42
        </a>
      </li>
      <li class="page-item">
        <span class="page-link">...</span>
      </li>
      <li class="page-item">
        <a class="page-link" href="#">
          Next
        </a>
      </li>
      <li class="page-item">
        <a class="page-link" href="#">
          Last
        </a>
      </li>
    </ul>
  </nav>,
  { initFunc }
);
