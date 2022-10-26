import React from 'react';
import { createComponent, createStory } from '../../../helpers/wrapper.js';

const extraOptions = {
  type: {
    name: 'Color',
    options: [
      '',
      'bg-gray-2',
      'bg-gray-7'
    ],
    defaultValue: '',
    control: {
      type: 'radio',
      labels: {
        '': 'On White',
        'bg-gray-2': 'On Gray',
        'bg-gray-7': 'On Black',
      },
    },
  },
  reversed: {
    name: 'Reversed',
    control: { type: 'boolean' },
    defaultValue: false,
  },
}

export default createComponent('Blockquotes and Testimonials', 'Atoms', 'Templates', extraOptions);

export const BasicBlockquote = createStory(
  (args) => {
    return (
      <div class={ args.type }>
        <div class={`uds-blockquote ${ args.type === 'bg-gray-7' ?  'accent-gold text-white' : 'accent-maroon'} uds-content-align`}>
          <svg
            title="Open quote"
            role="presentation"
            viewBox="0 0 302.87 245.82"
          >
            <path d="M113.61,245.82H0V164.56q0-49.34,8.69-77.83T40.84,35.58Q64.29,12.95,100.67,0l22.24,46.9q-34,11.33-48.72,31.54T58.63,132.21h55Zm180,0H180V164.56q0-49.74,8.7-78T221,35.58Q244.65,12.95,280.63,0l22.24,46.9q-34,11.33-48.72,31.54t-15.57,53.77h55Z" />
          </svg>
          <blockquote>
            <p>
              We hold these truths to be self-evident, that all men are
              created equal, that they are endowed by their Creator with
              certain unalienable Rights, that among these are Life, Liberty
              and the pursuit of Happiness.
            </p>
            <div class="citation">
              <div class="citation-content">
                <cite class="name">Thomas Jefferson</cite>
                <cite class="description">The Declaration of Independence</cite>
              </div>
            </div>
          </blockquote>
        </div>
      </div>
    )
  }
);

export const BlockquoteWithImage = createStory(
  (args) => {
    return (
      <div class={args.type}>
        <div class={`uds-blockquote ${ args.type === 'bg-gray-7' ?  'accent-gold text-white' : 'accent-maroon'} with-image ${ args.reversed ? 'reversed' : ''} uds-content-align`}>
          <img
            src="https://placeimg.com/600/400/any"
            alt="Pretend this is Michael M. Crow, President of ASU"
          />
          <blockquote>
            <p>
              ASU is a comprehensive public research university, measured not
              by whom we exclude, but rather by whom we include and how they
              succeed; advancing research and discovery of public value; and
              assuming fundamental responsibility for the economic, social,
              cultural and overall health of the communities it serves.
            </p>
              <div class="citation">
                <div class="citation-content">
                  <cite class="name">Michael M. Crow</cite>
                  <cite class="description">ASU Charter</cite>
                </div>
              </div>
          </blockquote>
        </div>
      </div>
    );
  }
);
