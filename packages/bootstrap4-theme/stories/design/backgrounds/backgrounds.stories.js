import React from 'react';
import { createComponent, createStory } from '../../../helpers/wrapper.js';
export default createComponent('Backgrounds', 'Design');

export const approvedBackgroundColors = createStory(
  <div className="container-fluid mt-2">
    <div className="row">
      <div className="col-12 pb-3">
        <h3>
          <span className="highlight-black">Approved Background Colors</span>
        </h3>
      </div>

      <div className="col-sm-6">
        <div className="background-panel gray-7-bg m-3"></div>
      </div>
      <div className="col-sm-6">
        <div className="background-panel gray-2-bg m-3"></div>
      </div>

      <div className="col-sm-6">
        <div className="background-panel gray-1-bg m-3"></div>
      </div>
      <div className="col-sm-6">
        <div className="background-panel white-bg m-3"></div>
      </div>
    </div>
  </div>
);

export const approvedBackgroundPatterns = createStory(
  <div className="container-fluid mt-2">
    <div className="row">
      <div className="col-12 pb-3">
        <h3>
          <span className="highlight-black">Approved Background Patterns</span>
        </h3>
      </div>

      <div className="col-12 pb-3">
        <h3>Learn to thrive morse code</h3>
      </div>
      <div className="col-sm-6">
        <div className="background-panel bg morse-code-white m-3"></div>
      </div>
      <div className="col-sm-6">
        <div className="background-panel bg morse-code-black m-3"></div>
      </div>

      <div className="col-12 pb-3">
        <h3>Network</h3>
      </div>
      <div className="col-sm-6">
        <div className="background-panel bg network-white m-3"></div>
      </div>
      <div className="col-sm-6">
        <div className="background-panel bg network-black m-3"></div>
      </div>

      <div className="col-12 pb-3">
        <h3>A Mountain topographical map</h3>
      </div>
      <div className="col-sm-6">
        <div className="background-panel bg topo-white m-3"></div>
      </div>
      <div className="col-sm-6">
        <div className="background-panel bg topo-black m-3"></div>
      </div>
    </div>
  </div>
);

export const imageBackgrounds = createStory(
  <div className="container-fluid mt-2">
    <div className="row">
      <div className="col-12 pb-3">
        <h3>
          <span className="highlight-black">Image Backgrounds</span>
        </h3>
      </div>

      <div className="col-sm-6">
        <div className="background-panel image-bg m-3"></div>
      </div>
    </div>
  </div>
);

export const backgroundsScaling = createStory(
  <div className="jumbotron-fluid max-size-container scaling-container">
    <span className="content-description">1920px max width</span>
    <div className="section-line"></div>
    <div className="content-description-container scaling-container">
      <div className="container scaling-container">
        <span className="content-description">1200px margin width</span>
        <div className="section-line"></div>
        <div className="container content-container">Section Content</div>
      </div>
    </div>
  </div>
);

export const PatternDividersAndBackgroundPatterns = createStory(
  <div>
    <div className="container p-5">
      <h2>
        <span className="highlight-gold">
          Pattern dividers and background patterns
        </span>
      </h2>
    </div>
    <div
      style={{ height: '250px' }}
      className="container-fluid bg morse-code-white"
    ></div>
    <div
      style={{ height: '250px' }}
      className="container-fluid bg morse-code-black"
    ></div>
    <div
      style={{ height: '250px' }}
      className="container-fluid bg topo-white"
    ></div>
    <div
      style={{ height: '250px' }}
      className="container-fluid bg topo-black"
    ></div>
    <div
      style={{ height: '250px' }}
      className="container-fluid bg network-white"
    ></div>
    <div
      style={{ height: '250px' }}
      className="container-fluid bg network-black"
    ></div>
  </div>
);
