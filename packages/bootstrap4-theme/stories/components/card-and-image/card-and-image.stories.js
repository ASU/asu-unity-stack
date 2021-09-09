import React from 'react';
import { createComponent, createStory } from '../../../helpers/wrapper.js';
export default createComponent('Content Sections/Card And Image');

export const LeftFloatedCard = createStory(
  <div
    class="uds-card-and-image"
    style={{
      'background-image':
        "linear-gradient(180deg, #19191900 0%, #191919c9 100%), url('https://source.unsplash.com/random/1920x1200')",
    }}
  >
    <div class="uds-card-and-image-container uds-content-align">
      <div class="card card-centered">
        <i class="fas fa-rocket fa-2x card-icon-top"></i>
        <div class="card-header">
          <h3 class="card-title">Headline goes here</h3>
        </div>
        <div class="card-body">
          Body copy goes here. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et
          dolore magna aliqua.
        </div>
        <div class="card-button">
          <a href="#" class="btn btn-dark">
            Button link here
          </a>
        </div>
      </div>
    </div>
  </div>
);

export const RightFloatedCard = createStory(
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        {/* Component start */}
        <div
          class="uds-card-and-image uds-card-and-image-right"
          style={{
            'background-image':
              "linear-gradient(180deg, #19191900 0%, #191919c9 100%), url('https://source.unsplash.com/random/1920x1200')",
          }}
        >
          <div class="uds-card-and-image-container">
            <div class="card card-centered">
              <i class="fas fa-rocket fa-2x card-icon-top"></i>
              <div class="card-header">
                <h3 class="card-title">Headline goes here</h3>
              </div>
              <div class="card-body">
                Body copy goes here. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
              </div>
              <div class="card-button">
                <a href="#" class="btn btn-dark">
                  Button link here
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Component end */}
      </div>
    </div>
  </div>
);

export const FullWidth = createStory(
  <section
    class="uds-card-and-image uds-card-and-image-right"
    style={{
      'background-image':
        "linear-gradient(180deg, #19191900 0%, #191919c9 100%), url('https://source.unsplash.com/random/1920x1200')",
    }}
  >
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="uds-card-and-image-container">
            <div class="card card-centered">
              <i class="fas fa-rocket fa-2x card-icon-top"></i>
              <div class="card-header">
                <h3 class="card-title">Headline goes here</h3>
              </div>
              <div class="card-body">
                Body copy goes here. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
              </div>
              <div class="card-button">
                <a href="#" class="btn btn-dark">
                  Button link here
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
