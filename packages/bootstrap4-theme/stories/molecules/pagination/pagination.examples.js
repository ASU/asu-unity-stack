import React from 'react';
import { createComponent, createStory } from '../../../helpers/wrapper.js';
export default createComponent('Pagination', 'Molecules', 'Examples');

export const DisabledAndActiveStatesComponent = createStory(
  <nav aria-label="...">
    <ul class="pagination">
      <li class="page-item disabled">
        <a
          class="page-link"
          href="#"
          tabindex="-1"
          aria-disabled="true"
          aria-label="Previous page"
        >
          <i class="fa fa-chevron-left arrows"></i>
        </a>
      </li>
      <li class="page-item active" aria-current="page">
        <a class="page-link" href="#">
          1<span class="sr-only">(current)</span>
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

export const LargeNumbersComponent = createStory(
  <>
    <nav aria-label="...">
      <ul class="pagination">
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
          <span class="page-link">...</span>
        </li>
        <li class="page-item">
          <a class="page-link" href="#">
            4
          </a>
        </li>
        <li class="page-item active" aria-current="page">
          <a class="page-link" href="#">
            5<span class="sr-only">(current)</span>
          </a>
        </li>
        <li class="page-item">
          <a class="page-link" href="#">
            6
          </a>
        </li>
        <li class="page-item">
          <span class="page-link">...</span>
        </li>
        <li class="page-item">
          <a class="page-link" href="#">
            10
          </a>
        </li>
        <li class="page-item">
          <a class="page-link" href="#" aria-label="Next page">
            <i class="fa fa-chevron-right arrows"></i>
          </a>
        </li>
      </ul>
    </nav>
    <nav aria-label="...">
      <ul class="pagination">
        <li class="page-item disabled">
          <a class="page-link" href="#" aria-label="Previous page">
            <i class="fa fa-chevron-left arrows"></i>
          </a>
        </li>
        <li class="page-item active" aria-current="page">
          <a class="page-link" href="#">
            1<span class="sr-only">(current)</span>
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
            4
          </a>
        </li>
        <li class="page-item">
          <span class="page-link">...</span>
        </li>
        <li class="page-item">
          <a class="page-link" href="#">
            10
          </a>
        </li>
        <li class="page-item">
          <a class="page-link" href="#" aria-label="Next page">
            <i class="fa fa-chevron-right arrows"></i>
          </a>
        </li>
      </ul>
    </nav>
    <nav aria-label="...">
      <ul class="pagination">
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
          <span class="page-link">...</span>
        </li>
        <li class="page-item">
          <a class="page-link" href="#">
            7
          </a>
        </li>
        <li class="page-item">
          <a class="page-link" href="#">
            8
          </a>
        </li>
        <li class="page-item">
          <a class="page-link" href="#">
            9
          </a>
        </li>
        <li class="page-item active" aria-current="page">
          <a class="page-link" href="#">
            10<span class="sr-only">(current)</span>
          </a>
        </li>
        <li class="page-item disabled">
          <a class="page-link" href="#" aria-label="Next page">
            <i class="fa fa-chevron-right arrows"></i>
          </a>
        </li>
      </ul>
    </nav>
  </>
);
