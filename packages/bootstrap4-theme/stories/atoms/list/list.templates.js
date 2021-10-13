import React from 'react';
import { createComponent, createStory } from '../../../helpers/wrapper.js';

const extraOptions = {
  bulletColor: {
    name: 'Bullet Color',
    options: [
      '',
      'maroon',
      'gold'],
    defaultValue: '',
    control: {
      type: 'radio',
      labels: {
        '': 'Default',
        'maroon': 'Maroon',
        'gold': 'Gold'
      },
    },
  },
  backgroundColor: {
    name: 'Size',
    options: [
      '',
      'smokemode',
      'light-smokemode',
      'darkmode'],
    defaultValue: '',
    control: {
      type: 'radio',
      labels: {
        '': 'Default',
        'smokemode': "Smoke mode",
        'light-smokemode': "Light Smoke mode",
        'darkmode': "Dark mode"
      },
    },
  },
}

export default createComponent('List', 'Atoms', 'Templates', extraOptions);

export const UnorderedList = createStory(
  (args) => {
    return (
      <ul class={`uds-list ${args.bulletColor} ${args.backgroundColor}`}>
        <li>Lorem ipsum dolor sit amet</li>
        <li>
          Consectetur adipiscing lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et
          dolore magna aliqua.
        </li>
        <li>Ipsum dolor sit amet, consectetur adipiscing elit.</li>
        <li>
          Sed do eiusmod tempor incididunt ut lorem ipsum dolor sit amet
        </li>
      </ul>
    )
  }
);


export const OrderedList = createStory(
  (args) => {
    return (
    <ol class={`uds-list ${args.bulletColor} ${args.backgroundColor}`}>
      <li>Lorem ipsum dolor sit amet</li>
      <li>
        Consectetur adipiscing lorem ipsum dolor sit amet, consectetur adipiscing
        elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </li>
      <li>Ipsum dolor sit amet, consectetur adipiscing elit.</li>
      <li>Sed do eiusmod tempor incididunt ut lorem ipsum dolor sit amet</li>
      <li>Lorem ipsum dolor sit amet</li>
      <li>
        Eiusmod tempor lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </li>
      <li>Lorem ipsum dolor sit amet</li>
      <li>
        Adipiscing elit lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </li>
      <li>Ipsum dolor sit amet</li>
      <li>Lorem ipsum dolor sit amet</li>
      <li>
        Adipiscing lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </li>
      <li>Dolor sit amet, consectetur adipiscing elit.</li>
      <li>Lorem ipsum dolor sit amet</li>
      <li>Lorem ipsum dolor sit amet</li>
      <li>
        Consectetur adipiscing lorem ipsum dolor sit amet, consectetur adipiscing
        elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </li>
      <li>Ipsum dolor sit amet, consectetur adipiscing elit.</li>
      <li>Sed do eiusmod tempor incididunt ut lorem ipsum dolor sit amet</li>
      <li>Lorem ipsum dolor sit amet</li>
      <li>
        Eiusmod tempor lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </li>
      <li>Lorem ipsum dolor sit amet</li>
      <li>
        Adipiscing elit lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </li>
      <li>Ipsum dolor sit amet</li>
      <li>Lorem ipsum dolor sit amet</li>
      <li>
        Adipiscing lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </li>
      <li>Dolor sit amet, consectetur adipiscing elit.</li>
    </ol>
    )
  }
);


export const IconList = createStory(
  (args) => {
    return (
      <ul class={`uds-list fa-ul ${args.bulletColor} ${args.backgroundColor}`}>
        <li>
          <span class="fa-li fas fa-rocket"></span>Lorem ipsum dolor sit amet
        </li>
        <li>
          <span class="fa-li fas fa-bus"></span>Consectetur adipiscing lorem ipsum
          dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua.
        </li>
        <li>
          <span class="fa-li fas fa-car"></span>Ipsum dolor sit amet, consectetur
          adipiscing elit.
        </li>
        <li>
          <span class="fa-li fas fa-bicycle"></span>We hide icons from assistive
          technology in these examples, but whether to hide using aria-hidden="true"
          or not should be determined by the developer based on whether the icons
          are intended as decoration only or are intended to convey meaning. See{' '}
          <a href="https://fontawesome.com/v4.7.0/accessibility/">
            Font Awesome Accessibility
          </a>{' '}
          for guidelines.
        </li>
      </ul>
    )
  }
);

export const StepList = createStory(
  (args) => {
    return (
      <ol class={`uds-list uds-steplist ${ args.bulletColor !== '' ? 'uds-steplist-'+args.bulletColor : ''} ${args.backgroundColor}`}>
        <li>
          This is a quintenary headline
          <br />
          <span>
            sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua.
          </span>
        </li>
        <li>
          This is a quintenary headline
          <br />
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor incididunt.Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt.
          </span>
        </li>
        <li>
          This is a quintenary headline
          <br />
          <span>
            sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua.
          </span>
        </li>
      </ol>
    )
  }
);
