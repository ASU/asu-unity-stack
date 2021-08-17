import React from 'react';
import { createComponent, createStory } from '../../../helpers/wrapper.js';
export default createComponent('Grid Links');

export const BackgroundWhiteStory = createStory(
  <div class="m-4">
    <h3>
      <span class="highlight-gold">Two columns.</span>
    </h3>
    {/* Component start */}
    <div class="uds-grid-links two-columns">
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
    {/* Component end */}
  </div>
);

export const BackgroundGray1Story = createStory(
  <div class="bg-gray-1 m-4">
    <h3>
      <span class="highlight-gold">Three columns.</span>
    </h3>
    {/* Component start */}
    <div class="uds-grid-links three-columns">
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
    {/* Component end */}
  </div>
);

export const GoldTextStory = createStory(
  <div class="bg-gray-7 m-4">
    <h3 class="text-white">Three columns.</h3>
    {/* Component start */}
    <div class="uds-grid-links three-columns text-gold">
      <a href="#">First-year student</a>
      <a href="#">Online student</a>
      <a href="#">Transfer student</a>
      <a href="#">Veteran student</a>
      <a href="#">Graduate student</a>
      <a href="#">Universal Learner</a>
      <a href="#">International student</a>
      <a href="#">Non-degree student</a>
    </div>
    {/* Component end */}
  </div>
);

export const WhiteTextStory = createStory(
  <div class="bg-gray-7 m-4">
    <h3 class="text-white">Four columns.</h3>
    {/* Component start */}
    <div class="uds-grid-links four-columns text-white">
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
    {/* Component end */}
  </div>
);

export const AlignedGridLinks = createStory(
  <div class="container">
    <div class="row">
      <div class="col">
        <div class="asu-header-align">
          <h3>
            <span class="highlight-gold">Two columns.</span>
          </h3>
          {/* Component start */}
          <div class="uds-grid-links two-columns">
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
              <span class="fa fa-fw fa-globe-americas"></span>International
              student
            </a>
            <a href="#">
              <span class="fa fa-fw fa-users"></span>Non-degree student
            </a>
          </div>
          {/* Component end */}
        </div>
      </div>
    </div>
  </div>
);
