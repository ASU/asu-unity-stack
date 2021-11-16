import React from 'react';
import { createComponent, createStory } from '../../../helpers/wrapper.js';

const extraOptions = {
  bulletColor: {
    name: 'Bullet Color',
    options: ['', 'maroon', 'gold'],
    defaultValue: '',
    control: {
      type: 'radio',
      labels: {
        '': 'Default',
        maroon: 'Maroon',
        gold: 'Gold',
      },
    },
  },
  backgroundColor: {
    name: 'Size',
    options: ['', 'smokemode', 'light-smokemode', 'darkmode'],
    defaultValue: '',
    control: {
      type: 'radio',
      labels: {
        '': 'Default',
        smokemode: 'Smoke mode',
        'light-smokemode': 'Light Smoke mode',
        darkmode: 'Dark mode',
      },
    },
  },
};

export default createComponent('List', 'Atoms', 'Examples', extraOptions);

export const UnorderedListMultiLevel = createStory((args) => {
  return (
    <ul class={`uds-list ${args.bulletColor} ${args.backgroundColor}`}>
      <li>
        Lorem ipsum dolor sit amet
        <ul class="uds-list">
          <li>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            <ul class="uds-list">
              <li>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                <ul class="uds-list">
                  <li>
                    Lorem ipsum dolor sit amet
                    <ul class="uds-list">
                      <li>
                        Lorem ipsum dolor sit amet
                        <ul class="uds-list">
                          <li>
                            Lorem ipsum dolor sit amet
                            <ul class="uds-list">
                              <li>
                                Lorem ipsum dolor sit amet
                                <ul class="uds-list">
                                  <li>
                                    Lorem ipsum dolor sit amet
                                    <ul class="uds-list">
                                      <li>
                                        Lorem ipsum dolor sit amet
                                        <ul class="uds-list">
                                          <li>Lorem ipsum dolor sit amet</li>
                                          <li>Lorem ipsum dolor sit amet</li>
                                        </ul>
                                      </li>
                                      <li>Lorem ipsum dolor sit amet</li>
                                    </ul>
                                  </li>
                                  <li>Lorem ipsum dolor sit amet</li>
                                </ul>
                              </li>
                              <li>Lorem ipsum dolor sit amet</li>
                            </ul>
                          </li>
                          <li>Lorem ipsum dolor sit amet</li>
                        </ul>
                      </li>
                      <li>Lorem ipsum dolor sit amet</li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>Lorem ipsum dolor sit amet</li>
            </ul>
          </li>
        </ul>
      </li>
      <li>Lorem ipsum dolor sit amet</li>
    </ul>
  );
});
UnorderedListMultiLevel.args = {
  template: 1,
};

export const OrderedListMultiLevel = createStory((args) => {
  return (
    <ol class={`uds-list ${args.bulletColor} ${args.backgroundColor}`}>
      <li>
        Lorem ipsum dolor sit amet
        <ol class="uds-list">
          <li>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            <ol class="uds-list">
              <li>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                <ol class="uds-list">
                  <li>
                    Lorem ipsum dolor sit amet
                    <ol class="uds-list">
                      <li>
                        Lorem ipsum dolor sit amet
                        <ol class="uds-list">
                          <li>
                            Lorem ipsum dolor sit amet
                            <ol class="uds-list">
                              <li>
                                Lorem ipsum dolor sit amet
                                <ol class="uds-list">
                                  <li>
                                    Lorem ipsum dolor sit amet
                                    <ol class="uds-list">
                                      <li>
                                        Lorem ipsum dolor sit amet
                                        <ol class="uds-list">
                                          <li>Lorem ipsum dolor sit amet</li>
                                          <li>Lorem ipsum dolor sit amet</li>
                                        </ol>
                                      </li>
                                      <li>Lorem ipsum dolor sit amet</li>
                                    </ol>
                                  </li>
                                  <li>Lorem ipsum dolor sit amet</li>
                                </ol>
                              </li>
                              <li>Lorem ipsum dolor sit amet</li>
                            </ol>
                          </li>
                          <li>Lorem ipsum dolor sit amet</li>
                        </ol>
                      </li>
                      <li>Lorem ipsum dolor sit amet</li>
                    </ol>
                  </li>
                </ol>
              </li>
              <li>Lorem ipsum dolor sit amet</li>
            </ol>
          </li>
        </ol>
      </li>
      <li>Lorem ipsum dolor sit amet</li>
    </ol>
  );
});
OrderedListMultiLevel.args = {
  template: 1,
};
