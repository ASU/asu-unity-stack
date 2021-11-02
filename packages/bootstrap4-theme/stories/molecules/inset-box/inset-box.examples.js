import React from 'react';
import { createComponent, createStory } from '../../../helpers/wrapper.js';
export default createComponent(
  'Content Sections/Inset Box',
  'Molecules',
  'Examples'
);

const DefaultExample = (buttonText = '') =>
  createStory(
    <div class="uds-inset-box-container gray-1-bg">
      <div class="uds-inset-box-content">
        <h3>Lorem ipsum dolor sit amet</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua eiusmod
          tempo.
        </p>
        <div class="uds-inset-box-buttons">
          <a href="#" class="btn btn-dark">
            {buttonText || 'Button link here'}
          </a>
          <a href="#" class="btn btn-dark">
            {buttonText || 'Button link here'}
          </a>
        </div>
        <a href="#" class="">
          Regular text link here
        </a>
      </div>
    </div>
  );

export const BasicExample = DefaultExample();
export const BasicExampleWithStackButton = DefaultExample(
  'Button link here with very long text'
);

export const ExampleWithBlockquote = createStory(
  <div class="uds-inset-box-container gray-2-bg">
    <div class="uds-inset-box-content">
      <div class="uds-blockquote uds-testimonial accent-gold">
        <svg title="Open quote" role="presentation" viewBox="0 0 302.87 245.82">
          <path d="M113.61,245.82H0V164.56q0-49.34,8.69-77.83T40.84,35.58Q64.29,12.95,100.67,0l22.24,46.9q-34,11.33-48.72,31.54T58.63,132.21h55Zm180,0H180V164.56q0-49.74,8.7-78T221,35.58Q244.65,12.95,280.63,0l22.24,46.9q-34,11.33-48.72,31.54t-15.57,53.77h55Z" />
        </svg>
        <blockquote>
          <p>
            Computers make excellent and efficient servants, but I have no wish
            to serve under them.
          </p>
          <div class="citation">
            <cite class="name">Spock</cite>
            <cite class="description">First officer, USS Enterprise</cite>
          </div>
        </blockquote>
      </div>
    </div>
  </div>
);

export const ExampleWithImageBackground = createStory(
  <div
    class="uds-inset-box-container image-background"
    style={{
      backgroundImage:
        "linear-gradient(180deg, #19191900 0%, #191919c9 100%), url('https://source.unsplash.com/WLUHO9A_xik')",
    }}
  >
    <div class="uds-inset-box-content">
      <div class="uds-blockquote uds-testimonial accent-gold">
        <svg title="Open quote" role="presentation" viewBox="0 0 302.87 245.82">
          <path d="M113.61,245.82H0V164.56q0-49.34,8.69-77.83T40.84,35.58Q64.29,12.95,100.67,0l22.24,46.9q-34,11.33-48.72,31.54T58.63,132.21h55Zm180,0H180V164.56q0-49.74,8.7-78T221,35.58Q244.65,12.95,280.63,0l22.24,46.9q-34,11.33-48.72,31.54t-15.57,53.77h55Z" />
        </svg>
        <blockquote>
          <p>
            Computers make excellent and efficient servants, but I have no wish
            to serve under them.
          </p>
          <div class="citation">
            <cite class="name">Spock</cite>
            <cite class="description">First officer, USS Enterprise</cite>
          </div>
        </blockquote>
      </div>
    </div>
  </div>
);
