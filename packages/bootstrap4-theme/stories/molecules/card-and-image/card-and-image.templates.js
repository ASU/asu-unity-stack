import React from 'react';
import { createComponent, createStory } from '../../../helpers/wrapper.js';

const extraOptions = {
  left: {
    name: 'Left',
    control: { type: 'boolean' },
    defaultValue: true,
  },
};

export default createComponent(
  'Content Sections/Card And Image',
  'Molecules',
  'Templates',
  extraOptions
);

export const LeftFloatedCard = createStory((args) => {
  return (
    <div
      class={`uds-card-and-image ${
        args.left ? '' : 'uds-card-and-image-right'
      }`}
      style={{
        'background-image':
          "linear-gradient(180deg, #19191900 0%, #191919c9 100%), url('https://source.unsplash.com/WLUHO9A_xik/1920x1200')",
      }}
    >
      <div class="uds-content-align">
        <div class="uds-card-and-image-container">
          <div class="card card-centered">
            <i class="fas fa-rocket fa-2x card-icon-top"></i>
            <div class="card-header">
              <h3 class="card-title">Headline goes here</h3>
            </div>
            <div class="card-body">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla incidunt laborum reprehenderit dolorum architecto ab odit ipsa tempora dolorem aliquid quis similique inventore cumque facilis consequuntur, tempore asperiores eligendi delectus quidem totam qui alias iste. Dicta ut odio architecto quia voluptas quam reprehenderit doloremque eius voluptate iure minus explicabo nihil, cumque expedita qui, blanditiis in rerum possimus minima suscipit dolorum?
            </div>
            <div class="card-buttons">
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
  );
});
LeftFloatedCard.args = {
  template: 1,
};
