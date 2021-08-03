import React from 'react';
import { createComponent, createStory } from '../../../helpers/wrapper.js'
export default createComponent('Backgrounds', 'Design');

export const approvedBackgroundColors = createStory(
  <div class="container-fluid mt-2">
    <div class="row">
      <div class="col-12 pb-3">
        <h3><span class="highlight-black">Approved Background Colors</span></h3>
      </div>

      <div class="col-sm-6">
        <div class="background-panel gray-7-bg m-3"></div>
      </div>
      <div class="col-sm-6">
        <div class="background-panel gray-2-bg m-3"></div>
      </div>

      <div class="col-sm-6">
        <div class="background-panel gray-1-bg m-3"></div>
      </div>
      <div class="col-sm-6">
        <div class="background-panel white-bg m-3"></div>
      </div>
    </div>
  </div>
);

export const approvedBackgroundPatterns = createStory(
  <div class="container-fluid mt-2">
    <div class="row">
      <div class="col-12 pb-3">
        <h3><span class="highlight-black">Approved Background Patterns</span></h3>
      </div>

      <div class="col-12 pb-3">
        <h3>Learn to thrive morse code</h3>
      </div>
      <div class="col-sm-6">
        <div class="background-panel bg morse-code-white m-3"></div>
      </div>
      <div class="col-sm-6">
        <div class="background-panel bg morse-code-black m-3"></div>
      </div>

      <div class="col-12 pb-3">
        <h3>Network</h3>
      </div>
      <div class="col-sm-6">
        <div class="background-panel bg network-white m-3"></div>
      </div>
      <div class="col-sm-6">
        <div class="background-panel bg network-black m-3"></div>
      </div>

      <div class="col-12 pb-3">
        <h3>A Mountain topographical map</h3>
      </div>
      <div class="col-sm-6">
        <div class="background-panel bg topo-white m-3"></div>
      </div>
      <div class="col-sm-6">
        <div class="background-panel bg topo-black m-3"></div>
      </div>
    </div>
  </div>
);

export const imageBackgrounds = createStory(
  <div class="container-fluid mt-2">
    <div class="row">
      <div class="col-12 pb-3">
        <h3><span class="highlight-black">Image Backgrounds</span></h3>
      </div>

      <div class="col-sm-6">
        <div class="background-panel image-bg m-3"></div>
      </div>
    </div>
  </div>
);

export const backgroundsScaling = createStory(
  <div class="jumbotron-fluid max-size-container scaling-container">
    <span class="content-description">1920px max width</span>
    <div class="section-line"></div>
    <div class="content-description-container scaling-container">
      <div class="container scaling-container">
        <span class="content-description">1200px margin width</span>
        <div class="section-line"></div>
        <div class="container content-container">
          Section Content
        </div>
      </div>
    </div>
  </div>
);

export const PatternDividersAndBackgroundPatterns = createStory(
  <div>
    <div class="container p-5">
      <h2>
        <span class="highlight-gold">Pattern dividers and background patterns</span>
      </h2>
    </div>
    <div style={{height: '250px'}} class="container-fluid bg morse-code-white"></div>
    <div style={{height: '250px'}} class="container-fluid bg morse-code-black"></div>
    <div style={{height: '250px'}} class="container-fluid bg topo-white"></div>
    <div style={{height: '250px'}} class="container-fluid bg topo-black"></div>
    <div style={{height: '250px'}} class="container-fluid bg network-white"></div>
    <div style={{height: '250px'}} class="container-fluid bg network-black"></div>
  </div>
);

