import React from 'react';
import { createComponent, createStory } from '../../../helpers/wrapper.js';
export default createComponent('Grid Links', 'Organisms');

export const BackgroundWhiteStory = createStory(
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
);

export const BackgroundGray1Story = createStory(
  <section class="bg-gray-1">
    <div class="uds-grid-links three-columns uds-content-align">
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
  </section>
);

export const GoldTextStory = createStory(
  <section class="bg-gray-7">
    <div class="uds-grid-links three-columns text-gold uds-content-align">
      <a href="#">First-year student</a>
      <a href="#">Online student</a>
      <a href="#">Transfer student</a>
      <a href="#">Veteran student</a>
      <a href="#">Graduate student</a>
      <a href="#">Universal Learner</a>
      <a href="#">International student</a>
      <a href="#">Non-degree student</a>
    </div>
  </section>
);

export const WhiteTextStory = createStory(
  <section class="bg-gray-7">
    <div class="uds-grid-links four-columns text-white uds-content-align">
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
  </section>
);
