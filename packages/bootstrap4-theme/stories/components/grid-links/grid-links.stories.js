import React from 'react';
import { createComponent, createStory } from '../../../helpers/wrapper.js'
export default createComponent('Grid Links');


const BackgroundWhiteComponent = (
  <div class="uds-grid-links two-columns">
    <a href="#"><span class="fa fa-fw fa-university"></span>First-year student</a>
    <a href="#"><span class="fa fa-fw fa-desktop"></span>Online student</a>
    <a href="#"><span class="fa fa-fw fa-lightbulb"></span>Transfer student</a>
    <a href="#"><span class="fa fa-fw fa-user-graduate"></span>Veteran student</a>
    <a href="#"><span class="fa fa-fw fa-graduation-cap"></span>Graduate student</a>
    <a href="#"><span class="fa fa-fw fa-rocket"></span>Universal Learner</a>
    <a href="#"><span class="fa fa-fw fa-globe-americas"></span>International student</a>
    <a href="#"><span class="fa fa-fw fa-users"></span>Non-degree student</a>
  </div>
);

const BackgroundGray1Component = (
  <div class="uds-grid-links three-columns">
    <a href="#"><span class="fa fa-fw fa-university"></span>First-year student</a>
    <a href="#"><span class="fa fa-fw fa-desktop"></span>Online student</a>
    <a href="#"><span class="fa fa-fw fa-lightbulb"></span>Transfer student</a>
    <a href="#"><span class="fa fa-fw fa-user-graduate"></span>Veteran student</a>
    <a href="#"><span class="fa fa-fw fa-graduation-cap"></span>Graduate student</a>
    <a href="#"><span class="fa fa-fw fa-rocket"></span>Universal Learner</a>
    <a href="#"><span class="fa fa-fw fa-globe-americas"></span>International student</a>
    <a href="#"><span class="fa fa-fw fa-users"></span>Non-degree student</a>
  </div>
);

const GoldTextComponent = (
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
);

const WhiteTextComponent = (
  <div class="uds-grid-links four-columns text-white">
    <a href="#"><span class="fa fa-fw fa-university"></span>First-year student</a>
    <a href="#"><span class="fa fa-fw fa-desktop"></span>Online student</a>
    <a href="#"><span class="fa fa-fw fa-lightbulb"></span>Transfer student</a>
    <a href="#"><span class="fa fa-fw fa-user-graduate"></span>Veteran student</a>
    <a href="#"><span class="fa fa-fw fa-graduation-cap"></span>Graduate student</a>
    <a href="#"><span class="fa fa-fw fa-rocket"></span>Universal Learner</a>
    <a href="#"><span class="fa fa-fw fa-globe-americas"></span>International student</a>
    <a href="#"><span class="fa fa-fw fa-users"></span>Non-degree student</a>
  </div>
);

const BackgroundWhiteStory = (
  <div class="container-xl">
    <div class="row">
      <div class="col-md-12 mb-4">
        <h3><span class="highlight-gold">Two columns.</span></h3>
      </div>
      <div class="col-md-12 pl-0 pr-0">
        { BackgroundWhiteComponent }
      </div>
    </div>
  </div>
);

const BackgroundGray1Story = (
  <section class="bg-gray-1">
    <div class="container-xl">
      <div class="row">
        <div class="col-md-12 mb-4">
          <h3><span class="highlight-gold">Three columns.</span></h3>
        </div>
        <div class="col-md-12 pl-0 pr-0">
          { BackgroundGray1Component }
        </div>
      </div>
    </div>
  </section>
);

const GoldTextStory = (
  <section class="bg-gray-7">
    <div class="container-xl">
      <div class="row">
        <div class="col-md-12 mb-4">
          <h3 class="text-white">Three columns.</h3>
        </div>
        <div class="col-md-12 pl-0 pr-0">
          { GoldTextComponent }
        </div>
      </div>
    </div>
  </section>
);

const WhiteTextStory = (
  <section class="bg-gray-7">
    <div class="container-xl">
      <div class="row">
        <div class="col-md-12 mb-4">
          <h3 class="text-white">Four columns.</h3>
        </div>
        <div class="col-md-12 pl-0 pr-0">
          { WhiteTextComponent }
        </div>
      </div>
    </div>
  </section>
);


export const BackgroundWhite = createStory(BackgroundWhiteStory);
export const BackgroundGray1 = createStory(BackgroundGray1Story);
export const GoldText = createStory(GoldTextStory);
export const WhiteText = createStory(WhiteTextStory);
