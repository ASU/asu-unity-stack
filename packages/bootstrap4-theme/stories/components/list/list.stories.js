import React from 'react';
import { createComponent, createStory } from '../../../helpers/wrapper.js'
export default createComponent('List');



export const UnorderedList = createStory(
<ul class="uds-list">
  <li>Lorem ipsum dolor sit amet</li>
  <li>Consectetur adipiscing lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
  <li>Ipsum dolor sit amet, consectetur adipiscing elit.</li>
  <li>Sed do eiusmod tempor incididunt ut lorem ipsum dolor sit amet</li>
</ul>
);

export const UnorderedListMaroonBullet = createStory(
<ul class="uds-list maroon">
  <li>Lorem ipsum dolor sit amet</li>
  <li>Consectetur adipiscing lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
  <li>Ipsum dolor sit amet, consectetur adipiscing elit.</li>
  <li>Sed do eiusmod tempor incididunt ut lorem ipsum dolor sit amet</li>
</ul>
);

export const UnorderedListGray2Background = createStory(
<ul class="uds-list smokemode">
  <li>Lorem ipsum dolor sit amet</li>
  <li>Consectetur adipiscing lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
  <li>Ipsum dolor sit amet, consectetur adipiscing elit.</li>
  <li>Sed do eiusmod tempor incididunt ut lorem ipsum dolor sit amet</li>
</ul>
);

export const UnorderedListGray1Background = createStory(
<ul class="uds-list light-smokemode">
  <li>Lorem ipsum dolor sit amet</li>
  <li>Consectetur adipiscing lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
  <li>Ipsum dolor sit amet, consectetur adipiscing elit.</li>
  <li>Sed do eiusmod tempor incididunt ut lorem ipsum dolor sit amet</li>
</ul>
);

export const UnorderedListGray7Background = createStory(
<ul class="uds-list darkmode">
  <li>Lorem ipsum dolor sit amet</li>
  <li>Consectetur adipiscing lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
  <li>Ipsum dolor sit amet, consectetur adipiscing elit.</li>
  <li>Sed do eiusmod tempor incididunt ut lorem ipsum dolor sit amet</li>
</ul>
);

export const UnorderedListGoldBulletGray7Background = createStory(
<ul class="uds-list darkmode gold">
  <li>Lorem ipsum dolor sit amet</li>
  <li>Consectetur adipiscing lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
  <li>Ipsum dolor sit amet, consectetur adipiscing elit.</li>
  <li>Sed do eiusmod tempor incididunt ut lorem ipsum dolor sit amet</li>
</ul>
);

export const UnorderedListMultiLevel = createStory(
  <ul class="uds-list">
    <li>Lorem ipsum dolor sit amet
      <ul class="uds-list">
        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          <ul class="uds-list">
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              <ul class="uds-list">
                <li>Lorem ipsum dolor sit amet
                  <ul class="uds-list">
                    <li>Lorem ipsum dolor sit amet
                      <ul class="uds-list">
                        <li>Lorem ipsum dolor sit amet
                          <ul class="uds-list">
                            <li>Lorem ipsum dolor sit amet
                              <ul class="uds-list">
                                <li>Lorem ipsum dolor sit amet
                                  <ul class="uds-list">
                                    <li>Lorem ipsum dolor sit amet
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

export const OrderedList = createStory(
<ol class="uds-list">
  <li>Lorem ipsum dolor sit amet</li>
  <li>Consectetur adipiscing lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
  <li>Ipsum dolor sit amet, consectetur adipiscing elit.</li>
  <li>Sed do eiusmod tempor incididunt ut lorem ipsum dolor sit amet</li>
  <li>Lorem ipsum dolor sit amet</li>
  <li>Eiusmod tempor lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
  <li>Lorem ipsum dolor sit amet</li>
  <li>Adipiscing elit lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
  <li>Ipsum dolor sit amet</li>
  <li>Lorem ipsum dolor sit amet</li>
  <li>Adipiscing lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
  <li>Dolor sit amet, consectetur adipiscing elit.</li>
  <li>Lorem ipsum dolor sit amet</li>
  <li>Lorem ipsum dolor sit amet</li>
  <li>Consectetur adipiscing lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
  <li>Ipsum dolor sit amet, consectetur adipiscing elit.</li>
  <li>Sed do eiusmod tempor incididunt ut lorem ipsum dolor sit amet</li>
  <li>Lorem ipsum dolor sit amet</li>
  <li>Eiusmod tempor lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
  <li>Lorem ipsum dolor sit amet</li>
  <li>Adipiscing elit lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
  <li>Ipsum dolor sit amet</li>
  <li>Lorem ipsum dolor sit amet</li>
  <li>Adipiscing lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
  <li>Dolor sit amet, consectetur adipiscing elit.</li>
  <li>Consectetur adipiscing lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
  <li>Ipsum dolor sit amet, consectetur adipiscing elit.</li>
  <li>Sed do eiusmod tempor incididunt ut lorem ipsum dolor sit amet</li>
  <li>Lorem ipsum dolor sit amet</li>
  <li>Eiusmod tempor lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
  <li>Lorem ipsum dolor sit amet</li>
  <li>Adipiscing elit lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
  <li>Ipsum dolor sit amet</li>
  <li>Lorem ipsum dolor sit amet</li>
  <li>Adipiscing lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
  <li>Lorem ipsum dolor sit amet</li>
  <li>Consectetur adipiscing lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
  <li>Ipsum dolor sit amet, consectetur adipiscing elit.</li>
  <li>Sed do eiusmod tempor incididunt ut lorem ipsum dolor sit amet</li>
  <li>Lorem ipsum dolor sit amet</li>
  <li>Eiusmod tempor lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
  <li>Lorem ipsum dolor sit amet</li>
  <li>Adipiscing elit lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
  <li>Ipsum dolor sit amet</li>
  <li>Lorem ipsum dolor sit amet</li>
  <li>Adipiscing lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
  <li>Dolor sit amet, consectetur adipiscing elit.</li>
  <li>Lorem ipsum dolor sit amet</li>
  <li>Consectetur adipiscing lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
  <li>Ipsum dolor sit amet, consectetur adipiscing elit.</li>
  <li>Sed do eiusmod tempor incididunt ut lorem ipsum dolor sit amet</li>
  <li>Lorem ipsum dolor sit amet</li>
  <li>Eiusmod tempor lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
  <li>Lorem ipsum dolor sit amet</li>
  <li>Adipiscing elit lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
  <li>Ipsum dolor sit amet</li>
  <li>Lorem ipsum dolor sit amet</li>
  <li>Adipiscing lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
  <li>Dolor sit amet, consectetur adipiscing elit.</li>
  <li>Lorem ipsum dolor sit amet</li>
  <li>Consectetur adipiscing lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
  <li>Ipsum dolor sit amet, consectetur adipiscing elit.</li>
  <li>Sed do eiusmod tempor incididunt ut lorem ipsum dolor sit amet</li>
  <li>Lorem ipsum dolor sit amet</li>
  <li>Eiusmod tempor lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
  <li>Lorem ipsum dolor sit amet</li>
  <li>Adipiscing elit lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
  <li>Ipsum dolor sit amet</li>
  <li>Lorem ipsum dolor sit amet</li>
  <li>Adipiscing lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
  <li>Dolor sit amet, consectetur adipiscing elit.</li>
  <li>Dolor sit amet, consectetur adipiscing elit.</li>
  <li>Lorem ipsum dolor sit amet</li>
  <li>Consectetur adipiscing lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
  <li>Ipsum dolor sit amet, consectetur adipiscing elit.</li>
  <li>Sed do eiusmod tempor incididunt ut lorem ipsum dolor sit amet</li>
  <li>Lorem ipsum dolor sit amet</li>
  <li>Eiusmod tempor lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
  <li>Lorem ipsum dolor sit amet</li>
  <li>Adipiscing elit lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
  <li>Ipsum dolor sit amet</li>
  <li>Lorem ipsum dolor sit amet</li>
  <li>Adipiscing lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
  <li>Dolor sit amet, consectetur adipiscing elit.</li>
  <li>Lorem ipsum dolor sit amet</li>
  <li>Consectetur adipiscing lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
  <li>Ipsum dolor sit amet, consectetur adipiscing elit.</li>
  <li>Sed do eiusmod tempor incididunt ut lorem ipsum dolor sit amet</li>
  <li>Lorem ipsum dolor sit amet</li>
  <li>Eiusmod tempor lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
  <li>Lorem ipsum dolor sit amet</li>
  <li>Adipiscing elit lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
  <li>Ipsum dolor sit amet</li>
  <li>Lorem ipsum dolor sit amet</li>
  <li>Adipiscing lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
  <li>Dolor sit amet, consectetur adipiscing elit.</li>
  <li>Lorem ipsum dolor sit amet</li>
  <li>Consectetur adipiscing lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
  <li>Ipsum dolor sit amet, consectetur adipiscing elit.</li>
  <li>Sed do eiusmod tempor incididunt ut lorem ipsum dolor sit amet</li>
  <li>Lorem ipsum dolor sit amet</li>
  <li>Eiusmod tempor lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
  <li>Lorem ipsum dolor sit amet</li>
  <li>Adipiscing elit lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
  <li>Ipsum dolor sit amet</li>
  <li>Lorem ipsum dolor sit amet</li>
  <li>Adipiscing lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
  <li>Dolor sit amet, consectetur adipiscing elit.</li>
  <li>Lorem ipsum dolor sit amet</li>
  <li>Consectetur adipiscing lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
  <li>Ipsum dolor sit amet, consectetur adipiscing elit.</li>
  <li>Sed do eiusmod tempor incididunt ut lorem ipsum dolor sit amet</li>
  <li>Lorem ipsum dolor sit amet</li>
  <li>Eiusmod tempor lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
  <li>Lorem ipsum dolor sit amet</li>
  <li>Adipiscing elit lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
  <li>Ipsum dolor sit amet</li>
  <li>Lorem ipsum dolor sit amet</li>
  <li>Adipiscing lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
  <li>Dolor sit amet, consectetur adipiscing elit.</li>
  <li>Lorem ipsum dolor sit amet</li>
  <li>Consectetur adipiscing lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
  <li>Ipsum dolor sit amet, consectetur adipiscing elit.</li>
  <li>Sed do eiusmod tempor incididunt ut lorem ipsum dolor sit amet</li>
  <li>Lorem ipsum dolor sit amet</li>
  <li>Eiusmod tempor lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
  <li>Lorem ipsum dolor sit amet</li>
  <li>Adipiscing elit lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
  <li>Ipsum dolor sit amet</li>
  <li>Lorem ipsum dolor sit amet</li>
  <li>Adipiscing lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
  <li>Dolor sit amet, consectetur adipiscing elit.</li>
  <li>Lorem ipsum dolor sit amet</li>
  <li>Consectetur adipiscing lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
  <li>Ipsum dolor sit amet, consectetur adipiscing elit.</li>
  <li>Sed do eiusmod tempor incididunt ut lorem ipsum dolor sit amet</li>
  <li>Lorem ipsum dolor sit amet</li>
  <li>Eiusmod tempor lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
  <li>Lorem ipsum dolor sit amet</li>
  <li>Adipiscing elit lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
  <li>Ipsum dolor sit amet</li>
  <li>Lorem ipsum dolor sit amet</li>
  <li>Adipiscing lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
  <li>Dolor sit amet, consectetur adipiscing elit.</li>
  <li>Lorem ipsum dolor sit amet</li>
  <li>Consectetur adipiscing lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
  <li>Ipsum dolor sit amet, consectetur adipiscing elit.</li>
  <li>Sed do eiusmod tempor incididunt ut lorem ipsum dolor sit amet</li>
  <li>Lorem ipsum dolor sit amet</li>
  <li>Eiusmod tempor lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
  <li>Lorem ipsum dolor sit amet</li>
  <li>Adipiscing elit lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
  <li>Ipsum dolor sit amet</li>
  <li>Lorem ipsum dolor sit amet</li>
  <li>Adipiscing lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
  <li>Dolor sit amet, consectetur adipiscing elit.</li>
  <li>Lorem ipsum dolor sit amet</li>
  <li>Consectetur adipiscing lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
  <li>Ipsum dolor sit amet, consectetur adipiscing elit.</li>
  <li>Sed do eiusmod tempor incididunt ut lorem ipsum dolor sit amet</li>
  <li>Lorem ipsum dolor sit amet</li>
  <li>Eiusmod tempor lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
  <li>Lorem ipsum dolor sit amet</li>
  <li>Adipiscing elit lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
  <li>Ipsum dolor sit amet</li>
  <li>Lorem ipsum dolor sit amet</li>
  <li>Adipiscing lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
  <li>Dolor sit amet, consectetur adipiscing elit.</li>
  <li>Lorem ipsum dolor sit amet</li>
  <li>Consectetur adipiscing lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
  <li>Ipsum dolor sit amet, consectetur adipiscing elit.</li>
  <li>Sed do eiusmod tempor incididunt ut lorem ipsum dolor sit amet</li>
  <li>Lorem ipsum dolor sit amet</li>
  <li>Eiusmod tempor lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
  <li>Lorem ipsum dolor sit amet</li>
  <li>Adipiscing elit lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
  <li>Ipsum dolor sit amet</li>
  <li>Lorem ipsum dolor sit amet</li>
  <li>Adipiscing lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
  <li>Dolor sit amet, consectetur adipiscing elit.</li>
  <li>Lorem ipsum dolor sit amet</li>
  <li>Consectetur adipiscing lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
  <li>Ipsum dolor sit amet, consectetur adipiscing elit.</li>
  <li>Sed do eiusmod tempor incididunt ut lorem ipsum dolor sit amet</li>
  <li>Lorem ipsum dolor sit amet</li>
  <li>Eiusmod tempor lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
  <li>Lorem ipsum dolor sit amet</li>
  <li>Adipiscing elit lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
  <li>Ipsum dolor sit amet</li>
  <li>Lorem ipsum dolor sit amet</li>
  <li>Adipiscing lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
  <li>Dolor sit amet, consectetur adipiscing elit.</li>
  <li>Lorem ipsum dolor sit amet</li>
  <li>Consectetur adipiscing lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
  <li>Ipsum dolor sit amet, consectetur adipiscing elit.</li>
  <li>Sed do eiusmod tempor incididunt ut lorem ipsum dolor sit amet</li>
  <li>Lorem ipsum dolor sit amet</li>
  <li>Eiusmod tempor lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
  <li>Lorem ipsum dolor sit amet</li>
  <li>Adipiscing elit lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
  <li>Ipsum dolor sit amet</li>
  <li>Lorem ipsum dolor sit amet</li>
  <li>Adipiscing lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
  <li>Dolor sit amet, consectetur adipiscing elit.</li>
</ol>
);

export const OrderedListMaroonCounter = createStory(
<ol class="uds-list maroon">
  <li>Lorem ipsum dolor sit amet</li>
  <li>Consectetur adipiscing lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
  <li>Ipsum dolor sit amet, consectetur adipiscing elit.</li>
  <li>Sed do eiusmod tempor incididunt ut lorem ipsum dolor sit amet</li>
</ol>
);

export const OrderedListGray2Background = createStory(
<ol class="uds-list smokemode">
  <li>Lorem ipsum dolor sit amet</li>
  <li>Consectetur adipiscing lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
  <li>Ipsum dolor sit amet, consectetur adipiscing elit.</li>
  <li>Sed do eiusmod tempor incididunt ut lorem ipsum dolor sit amet</li>
</ol>
);

export const OrderedListGray1Background = createStory(
<ol class="uds-list light-smokemode">
  <li>Lorem ipsum dolor sit amet</li>
  <li>Consectetur adipiscing lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
  <li>Ipsum dolor sit amet, consectetur adipiscing elit.</li>
  <li>Sed do eiusmod tempor incididunt ut lorem ipsum dolor sit amet</li>
</ol>
);

export const OrderedListGray7Background = createStory(
<ol class="uds-list darkmode">
  <li>Lorem ipsum dolor sit amet</li>
  <li>Consectetur adipiscing lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
  <li>Ipsum dolor sit amet, consectetur adipiscing elit.</li>
  <li>Sed do eiusmod tempor incididunt ut lorem ipsum dolor sit amet</li>
</ol>
);

export const OrderedListMultiLevel = createStory(
<ol class="uds-list">
  <li>Lorem ipsum dolor sit amet
      <ol class="uds-list">
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              <ol class="uds-list">
                  <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      <ol class="uds-list">
                          <li>Lorem ipsum dolor sit amet
                              <ol class="uds-list">
                                  <li>Lorem ipsum dolor sit amet
                                    <ol class="uds-list">
                                        <li>Lorem ipsum dolor sit amet
                                          <ol class="uds-list">
                                              <li>Lorem ipsum dolor sit amet
                                                  <ol class="uds-list">
                                                      <li>Lorem ipsum dolor sit amet
                                                          <ol class="uds-list">
                                                              <li>Lorem ipsum dolor sit amet
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

export const IconList = createStory(
<ul class="uds-list fa-ul">
  <li><span class="fa-li fas fa-rocket"></span>Lorem ipsum dolor sit amet</li>
  <li><span class="fa-li fas fa-bus"></span>Consectetur adipiscing lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
  <li><span class="fa-li fas fa-car"></span>Ipsum dolor sit amet, consectetur adipiscing elit.</li>
  <li><span class="fa-li fas fa-bicycle"></span>We hide icons from assistive technology in these examples, but whether to hide using aria-hidden="true" or not should be determined by the developer based on whether the icons are intended as decoration only or are intended to convey meaning. See <a href="https://fontawesome.com/v4.7.0/accessibility/">Font Awesome Accessibility</a> for guidelines.</li>
</ul>
);

export const IconListMaroonIcon = createStory(
<ul class="uds-list fa-ul maroon">
  <li><span class="fa-li fas fa-rocket"></span>Lorem ipsum dolor sit amet</li>
  <li><span class="fa-li fas fa-bus"></span>Consectetur adipiscing lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
  <li><span class="fa-li fas fa-car"></span>Ipsum dolor sit amet, consectetur adipiscing elit.</li>
  <li><span class="fa-li fas fa-bicycle"></span>Sed do eiusmod tempor incididunt ut lorem ipsum dolor sit amet</li>
</ul>
);

export const IconListGray7Background = createStory(
<ul class="uds-list fa-ul darkmode">
  <li><span class="fa-li fas fa-rocket"></span>Lorem ipsum dolor sit amet</li>
  <li><span class="fa-li fas fa-bus"></span>Consectetur adipiscing lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
  <li><span class="fa-li fas fa-car"></span>Ipsum dolor sit amet, consectetur adipiscing elit.</li>
  <li><span class="fa-li fas fa-bicycle"></span>Sed do eiusmod tempor incididunt ut lorem ipsum dolor sit amet</li>
</ul>
);

export const IconListGoldIconGray7Background = createStory(
<ul class="uds-list fa-ul darkmode gold">
  <li><span class="fa-li fas fa-rocket"></span>Lorem ipsum dolor sit amet</li>
  <li><span class="fa-li fas fa-bus"></span>Consectetur adipiscing lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
  <li><span class="fa-li fas fa-car"></span>Ipsum dolor sit amet, consectetur adipiscing elit.</li>
  <li><span class="fa-li fas fa-bicycle"></span>Sed do eiusmod tempor incididunt ut lorem ipsum dolor sit amet</li>
</ul>
);


export const StepList = createStory(
<ol class="uds-list uds-steplist">
  <li>This is a quintenary headline<br /><span>sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span></li>
  <li>This is a quintenary headline<br /><span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</span></li>
  <li>This is a quintenary headline<br /><span>sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span></li>
</ol>
);

export const StepListGoldCounter = createStory(
<ol class="uds-list uds-steplist uds-steplist-gold">
  <li>This is a quintenary headline<br /><span>sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span></li>
  <li>This is a quintenary headline<br /><span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</span></li>
  <li>This is a quintenary headline<br /><span>sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span></li>
</ol>
);

export const StepListMaroonCounter = createStory(
<ol class="uds-list uds-steplist uds-steplist-maroon">
  <li>This is a quintenary headline<br /><span>sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span></li>
  <li>This is a quintenary headline<br /><span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</span></li>
  <li>This is a quintenary headline<br /><span>sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span></li>
</ol>
);

export const StepListGray2Background = createStory(
<ol class="uds-list uds-steplist smokemode">
  <li>This is a quintenary headline<br /><span>sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span></li>
  <li>This is a quintenary headline<br /><span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</span></li>
  <li>This is a quintenary headline<br /><span>sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span></li>
</ol>
);

export const StepListGoldCounterGray2Background = createStory(
<ol class="uds-list uds-steplist smokemode uds-steplist-gold">
  <li>This is a quintenary headline<br /><span>sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span></li>
  <li>This is a quintenary headline<br /><span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</span></li>
  <li>This is a quintenary headline<br /><span>sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span></li>
</ol>
);

export const StepListMaroonCounterGray2Background = createStory(
<ol class="uds-list uds-steplist smokemode uds-steplist-maroon">
  <li>This is a quintenary headline<br /><span>sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span></li>
  <li>This is a quintenary headline<br /><span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</span></li>
  <li>This is a quintenary headline<br /><span>sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span></li>
</ol>
);

export const StepListGray1Background = createStory(
<ol class="uds-list uds-steplist light-smokemode">
  <li>This is a quintenary headline<br /><span>sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span></li>
  <li>This is a quintenary headline<br /><span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</span></li>
  <li>This is a quintenary headline<br /><span>sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span></li>
</ol>
);

export const StepListGoldCounterGray1Background = createStory(
<ol class="uds-list uds-steplist light-smokemode uds-steplist-gold">
  <li>This is a quintenary headline<br /><span>sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span></li>
  <li>This is a quintenary headline<br /><span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</span></li>
  <li>This is a quintenary headline<br /><span>sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span></li>
</ol>
);

export const StepListMaroonCounterGray1Background = createStory(
<ol class="uds-list uds-steplist light-smokemode uds-steplist-maroon">
  <li>This is a quintenary headline<br /><span>sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span></li>
  <li>This is a quintenary headline<br /><span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</span></li>
  <li>This is a quintenary headline<br /><span>sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span></li>
</ol>
);

export const StepListGray7Background = createStory(
<ol class="uds-list uds-steplist darkmode">
  <li>This is a quintenary headline<br /><span>sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span></li>
  <li>This is a quintenary headline<br /><span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</span></li>
  <li>This is a quintenary headline<br /><span>sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span></li>
</ol>
);

export const StepListGoldCounterGray7Background = createStory(
<ol class="uds-list uds-steplist darkmode uds-steplist-gold">
  <li>This is a quintenary headline<br /><span>sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span></li>
  <li>This is a quintenary headline<br /><span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</span></li>
  <li>This is a quintenary headline<br /><span>sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span></li>
</ol>
);
