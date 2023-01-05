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
      <div className="uds-content-align">
        <div className="uds-card-and-image-container">
          <div className="card card-centered">
            <i className="fas fa-rocket fa-2x card-icon-top"></i>
            <div className="card-header">
              <h3 className="card-title">Headline goes here</h3>
            </div>
            <div className="card-body">
              Body copy goes here. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </div>
            <div className="card-buttons">
              <div className="card-button">
                <a href="#" className="btn btn-dark">
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
