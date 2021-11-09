import React from 'react';
import { createComponent, createStory } from '../../../helpers/wrapper.js';
import exampleImage from './example-image.jpg';

const extraOptions = {
  cardHeader: {
    name: 'Header ',
    options: ['none', 'image', 'icon'],
    defaultValue: 'none',
    control: {
      type: 'radio',
      labels: {
        none: 'None',
        image: 'Image',
        icon: 'Icon',
      },
    },
  },
  event: {
    name: 'Event Details',
    control: { type: 'boolean' },
    defaultValue: false,
  },
  link: {
    name: 'Link',
    control: { type: 'boolean' },
    defaultValue: false,
  },
  tags: {
    name: 'Tags',
    control: { type: 'boolean' },
    defaultValue: false,
  },
  numButtons: {
    name: 'Number Of Buttons',
    options: [0, 1, 2],
    defaultValue: 0,
    control: {
      type: 'radio',
    },
  },
};

export default createComponent('Cards', 'Molecules', 'Templates', extraOptions);

export const cardNoTemplates = (args) => {
  return (
    <div class="card">
      {args.cardHeader === 'icon' && (
        <span
          class="far fa-calendar fa-2x card-icon-top"
          title="Calendar Icon"
        />
      )}
      {args.cardHeader === 'image' && (
        <img class="card-img-top" src={exampleImage} alt="Card image cap" />
      )}
      <div class="card-header pt-2">
        <h3>Heading</h3>
      </div>
      <div class="card-body">
        <p class="card-text">
          Body copy goes here. Limit to 5 lines max. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua eiusmod tempo.
        </p>
      </div>
      {args.event && (
        <div class="card-event-details">
          <div class="card-event-icons">
            <div>
              <i class="fas fa-map-marker-alt"></i>
            </div>
            <div>Downtown Phoenix campus</div>
          </div>
        </div>
      )}
      {args.numButtons > 0 && (
        <div class="card-buttons">
          <div class="card-button">
            <a href="#" class="btn btn-dark">
              Button link here
            </a>
          </div>
          {args.numButtons === 2 && (
            <div class="card-button">
              <a href="#" class="btn btn-md btn-dark">
                Button link here
              </a>
            </div>
          )}
        </div>
      )}
      {args.link && (
        <div class="card-link">
          <a href="#" class="">
            Regular text link here
          </a>
        </div>
      )}
      {args.tags && (
        <div class="card-tags">
          <a class="btn btn-tag btn-tag-alt-white" href="#">
            test tag
          </a>
          <a class="btn btn-tag btn-tag-alt-white" href="#">
            test tag 2
          </a>
          <a class="btn btn-tag btn-tag-alt-white" href="#">
            test tag 3
          </a>
        </div>
      )}
    </div>
  );
};
