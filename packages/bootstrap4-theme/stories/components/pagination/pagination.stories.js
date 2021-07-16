import React from 'react';
import { createComponent, createStory } from '../../../helpers/wrapper.js'
export default createComponent('Dividers');


const ExampleComponent = (
  <nav aria-label="Page navigation example">
    <ul class="pagination">
      <li class="page-item"><a class="page-link" href="#">Prev</a></li>
      <li class="page-item"><a class="page-link" href="#">1</a></li>
      <li class="page-item"><a class="page-link" href="#">2</a></li>
      <li class="page-item"><a class="page-link" href="#">3</a></li>
      <li class="page-item"><a class="page-link" href="#">Next</a></li>
    </ul>
  </nav>
)


const ExampleWithIconsComponent = (
  <nav aria-label="Page navigation example">
    <ul class="pagination">
      <li class="page-item"><a class="page-link page-link-icon" href="#">Prev</a></li>
      <li class="page-item"><a class="page-link" href="#">1</a></li>
      <li class="page-item"><a class="page-link" href="#">2</a></li>
      <li class="page-item"><a class="page-link" href="#">3</a></li>
      <li class="page-item"><a class="page-link page-link-icon" href="#">Next</a></li>
    </ul>
  </nav>
)




const DisabledAndActiveStatesComponent = (
  <nav aria-label="...">
    <ul class="pagination">
      <li class="page-item disabled">
        <a class="page-link page-link-icon" href="#" tabindex="-1" aria-disabled="true">Prev</a>
      </li>
      <li class="page-item active" aria-current="page">
        <a class="page-link" href="#">1
        <span class="sr-only">(current)</span></a>
      </li>
      <li class="page-item"><a class="page-link" href="#">2</a></li>
      <li class="page-item"><a class="page-link" href="#">3</a></li>
      <li class="page-item">
        <a class="page-link page-link-icon" href="#">Next</a>
      </li>
    </ul>
  </nav>
)



const LargeNumbersComponent = (
  <nav aria-label="...">
    <ul class="pagination">
      <li class="page-item">
        <a class="page-link" href="#">First</a>
      </li>
      <li class="page-item">
        <a class="page-link" href="#">Prev</a>
      </li>
      <li class="page-item"><span class="page-link">...</span></li>
      <li class="page-item"><a class="page-link" href="#">40</a></li>
      <li class="page-item active" aria-current="page">
        <a class="page-link" href="#">41
        <span class="sr-only">(current)</span></a>
      </li>
      <li class="page-item"><a class="page-link" href="#">42</a></li>
      <li class="page-item"><span class="page-link">...</span></li>
      <li class="page-item">
        <a class="page-link" href="#">Next</a>
      </li>
      <li class="page-item">
        <a class="page-link" href="#">Last</a>
      </li>
    </ul>
  </nav>
)



const BordersComponent = (
  <nav aria-label="...">
    <ul class="pagination justify-content-center border p-2">
      <li class="page-item">
        <a class="page-link" href="#">First</a>
      </li>
      <li class="page-item">
        <a class="page-link" href="#">Prev</a>
      </li>
      <li class="page-item"><span class="page-link">...</span></li>
      <li class="page-item"><a class="page-link" href="#">40</a></li>
      <li class="page-item active" aria-current="page">
        <a class="page-link" href="#">41
        <span class="sr-only">(current)</span></a>
      </li>
      <li class="page-item"><a class="page-link" href="#">42</a></li>
      <li class="page-item"><span class="page-link">...</span></li>
      <li class="page-item">
        <a class="page-link" href="#">Next</a>
      </li>
      <li class="page-item">
        <a class="page-link" href="#">Last</a>
      </li>
    </ul>
  </nav>
)



const Gray2BackgroundComponent = (
  <nav aria-label="...">
    <ul class="pagination justify-content-center uds-bg-gray pt-2 pb-2">
      <li class="page-item">
        <a class="page-link" href="#">First</a>
      </li>
      <li class="page-item">
        <a class="page-link" href="#">Prev</a>
      </li>
      <li class="page-item"><span class="page-link">...</span></li>
      <li class="page-item"><a class="page-link" href="#">40</a></li>
      <li class="page-item active" aria-current="page">
        <a class="page-link" href="#">41
        <span class="sr-only">(current)</span></a>
      </li>
      <li class="page-item"><a class="page-link" href="#">42</a></li>
      <li class="page-item"><span class="page-link">...</span></li>
      <li class="page-item">
        <a class="page-link" href="#">Next</a>
      </li>
      <li class="page-item">
        <a class="page-link" href="#">Last</a>
      </li>
    </ul>
  </nav>
)



const Gray7BackgroundComponent = (
  <nav aria-label="...">
    <ul class="pagination justify-content-center uds-bg-dark pt-2 pb-2">
      <li class="page-item">
        <a class="page-link" href="#">First</a>
      </li>
      <li class="page-item">
        <a class="page-link" href="#">Prev</a>
      </li>
      <li class="page-item"><span class="page-link">...</span></li>
      <li class="page-item"><a class="page-link" href="#">40</a></li>
      <li class="page-item active" aria-current="page">
        <a class="page-link" href="#">41
        <span class="sr-only">(current)</span></a>
      </li>
      <li class="page-item"><a class="page-link" href="#">42</a></li>
      <li class="page-item"><span class="page-link">...</span></li>
      <li class="page-item">
        <a class="page-link" href="#">Next</a>
      </li>
      <li class="page-item">
        <a class="page-link" href="#">Last</a>
      </li>
    </ul>
  </nav>
)

const AlignmentComponent = (
  <div>
    <nav aria-label="Page navigation example">
      <ul class="pagination justify-content-center">
        <li class="page-item">
          <a class="page-link" href="#">Prev</a>
        </li>
        <li class="page-item"><a class="page-link" href="#">1</a></li>
        <li class="page-item"><a class="page-link" href="#">2</a></li>
        <li class="page-item"><a class="page-link" href="#">3</a></li>
        <li class="page-item">
          <a class="page-link" href="#">Next</a>
        </li>
      </ul>
    </nav>
    <hr />
    <nav aria-label="Page navigation example">
      <ul class="pagination justify-content-end">
        <li class="page-item">
          <a class="page-link" href="#">Prev</a>
        </li>
        <li class="page-item"><a class="page-link" href="#">1</a></li>
        <li class="page-item"><a class="page-link" href="#">2</a></li>
        <li class="page-item"><a class="page-link" href="#">3</a></li>
        <li class="page-item">
          <a class="page-link" href="#">Next</a>
        </li>
      </ul>
    </nav>
  </div>
)


export const Example = createStory(ExampleComponent)
export const ExampleWithIcons = createStory(ExampleWithIconsComponent)
export const DisabledAndActiveStates = createStory(DisabledAndActiveStatesComponent)
export const LargeNumbers = createStory(LargeNumbersComponent)
export const Borders = createStory(BordersComponent)
export const Gray2Background = createStory(Gray2BackgroundComponent)
export const Gray7Background = createStory(Gray7BackgroundComponent)
export const Alignment = createStory(AlignmentComponent)
