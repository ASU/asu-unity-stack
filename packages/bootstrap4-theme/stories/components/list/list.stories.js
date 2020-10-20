import { document, console } from 'global';
import { storiesOf } from '@storybook/html';

storiesOf('Components/List', module)
  .addParameters({
    happo: false,
  })

.add('Unordered List', () => `
<ul class="uds-list">
  <li>Lorem ipsum dolor sit amet</li>
  <li>Consectetur adipiscing lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
  <li>Ipsum dolor sit amet, consectetur adipiscing elit.</li>
  <li>Sed do eiusmod tempor incididunt ut lorem ipsum dolor sit amet</li>
</ul>
`)

.add('Unordered List, Maroon Bullet', () => `
<ul class="uds-list maroon">
  <li>Lorem ipsum dolor sit amet</li>
  <li>Consectetur adipiscing lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
  <li>Ipsum dolor sit amet, consectetur adipiscing elit.</li>
  <li>Sed do eiusmod tempor incididunt ut lorem ipsum dolor sit amet</li>
</ul>
`)

.add('Unordered List, Smokemode', () => `
<ul class="uds-list smokemode">
  <li>Lorem ipsum dolor sit amet</li>
  <li>Consectetur adipiscing lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
  <li>Ipsum dolor sit amet, consectetur adipiscing elit.</li>
  <li>Sed do eiusmod tempor incididunt ut lorem ipsum dolor sit amet</li>
</ul>
`)

.add('Unordered List, Light Smokemode', () => `
<ul class="uds-list light-smokemode">
  <li>Lorem ipsum dolor sit amet</li>
  <li>Consectetur adipiscing lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
  <li>Ipsum dolor sit amet, consectetur adipiscing elit.</li>
  <li>Sed do eiusmod tempor incididunt ut lorem ipsum dolor sit amet</li>
</ul>
`)

.add('Unordered List, Darkmode', () => `
<ul class="uds-list darkmode">
  <li>Lorem ipsum dolor sit amet</li>
  <li>Consectetur adipiscing lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
  <li>Ipsum dolor sit amet, consectetur adipiscing elit.</li>
  <li>Sed do eiusmod tempor incididunt ut lorem ipsum dolor sit amet</li>
</ul>
`)

.add('Unordered List, Gold Bullet, Darkmode', () => `
<ul class="uds-list darkmode gold">
  <li>Lorem ipsum dolor sit amet</li>
  <li>Consectetur adipiscing lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
  <li>Ipsum dolor sit amet, consectetur adipiscing elit.</li>
  <li>Sed do eiusmod tempor incididunt ut lorem ipsum dolor sit amet</li>
</ul>
`)

.add('Unordered List, Multi-level', () => `
<ul class="uds-list">
  <li>Lorem ipsum dolor sit amet
    <ul class="uds-list">
      <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        <ul class="uds-list">
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            <ul class="uds-list">
              <li>Lorem ipsum dolor sit amet
              <ul class="uds-list">
                <li>Lorem ipsum dolor sit amet</li>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </ul>
            </li>
          </ul>
        </li>
      <li>Lorem ipsum dolor sit amet</li>
    </ul>
  </li>
  <li>Lorem ipsum dolor sit amet</li>
</ul>
`)

.add('Ordered List', () => `
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
`)

.add('Ordered List, Maroon Counter', () => `
<ol class="uds-list maroon">
  <li>Lorem ipsum dolor sit amet</li>
  <li>Consectetur adipiscing lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
  <li>Ipsum dolor sit amet, consectetur adipiscing elit.</li>
  <li>Sed do eiusmod tempor incididunt ut lorem ipsum dolor sit amet</li>
</ol>
`)

.add('Ordered List, Smokemode', () => `
<ol class="uds-list smokemode">
  <li>Lorem ipsum dolor sit amet</li>
  <li>Consectetur adipiscing lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
  <li>Ipsum dolor sit amet, consectetur adipiscing elit.</li>
  <li>Sed do eiusmod tempor incididunt ut lorem ipsum dolor sit amet</li>
</ol>
`)

.add('Ordered List, Light Smokemode', () => `
<ol class="uds-list light-smokemode">
  <li>Lorem ipsum dolor sit amet</li>
  <li>Consectetur adipiscing lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
  <li>Ipsum dolor sit amet, consectetur adipiscing elit.</li>
  <li>Sed do eiusmod tempor incididunt ut lorem ipsum dolor sit amet</li>
</ol>
`)

.add('Ordered List, Darkmode', () => `
<ol class="uds-list darkmode">
  <li>Lorem ipsum dolor sit amet</li>
  <li>Consectetur adipiscing lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
  <li>Ipsum dolor sit amet, consectetur adipiscing elit.</li>
  <li>Sed do eiusmod tempor incididunt ut lorem ipsum dolor sit amet</li>
</ol>
`)

.add('Ordered List, Multi-Level', () => `
<ol class="uds-list">
  <li>Lorem ipsum dolor sit amet
      <ol class="uds-list">
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              <ol class="uds-list">
                  <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      <ol class="uds-list">
                          <li>Lorem ipsum dolor sit amet
                              <ol class="uds-list">
                                  <li>Lorem ipsum dolor sit amet</li>
                                  <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
`)

.add('Icon List', () => `
<ul class="uds-list fa-ul">
  <li><span class="fa-li fas fa-rocket"></span>Lorem ipsum dolor sit amet</li>
  <li><span class="fa-li fas fa-bus"></span>Consectetur adipiscing lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
  <li><span class="fa-li fas fa-car"></span>Ipsum dolor sit amet, consectetur adipiscing elit.</li>
  <li><span class="fa-li fas fa-bicycle"></span>We hide icons from assistive technology in these examples, but whether to hide using aria-hidden="true" or not should be determined by the developer based on whether the icons are intended as decoration only or are intended to convey meaning. See <a href="https://fontawesome.com/v4.7.0/accessibility/">Font Awesome Accessibility</a> for guidelines.</li>
</ul>
`)

.add('Icon List, Maroon Icon', () => `
<ul class="uds-list fa-ul maroon">
  <li><span class="fa-li fas fa-rocket"></span>Lorem ipsum dolor sit amet</li>
  <li><span class="fa-li fas fa-bus"></span>Consectetur adipiscing lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
  <li><span class="fa-li fas fa-car"></span>Ipsum dolor sit amet, consectetur adipiscing elit.</li>
  <li><span class="fa-li fas fa-bicycle"></span>Sed do eiusmod tempor incididunt ut lorem ipsum dolor sit amet</li>
</ul>
`)

.add('Icon List, Darkmode', () => `
<ul class="uds-list fa-ul darkmode">
  <li><span class="fa-li fas fa-rocket"></span>Lorem ipsum dolor sit amet</li>
  <li><span class="fa-li fas fa-bus"></span>Consectetur adipiscing lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
  <li><span class="fa-li fas fa-car"></span>Ipsum dolor sit amet, consectetur adipiscing elit.</li>
  <li><span class="fa-li fas fa-bicycle"></span>Sed do eiusmod tempor incididunt ut lorem ipsum dolor sit amet</li>
</ul>
`)

.add('Icon List, Gold Icon, Darkmode', () => `
<ul class="uds-list fa-ul darkmode gold">
  <li><span class="fa-li fas fa-rocket"></span>Lorem ipsum dolor sit amet</li>
  <li><span class="fa-li fas fa-bus"></span>Consectetur adipiscing lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
  <li><span class="fa-li fas fa-car"></span>Ipsum dolor sit amet, consectetur adipiscing elit.</li>
  <li><span class="fa-li fas fa-bicycle"></span>Sed do eiusmod tempor incididunt ut lorem ipsum dolor sit amet</li>
</ul>
`)

// Should this be implemented as a list-group?
.add('Step List', () => `
<ol class="uds-list uds-steplist">
  <li>This is a quintenary headline<br><span>sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span></li>
  <li>This is a quintenary headline<br><span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</span></li>
  <li>This is a quintenary headline<br><span>sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span></li>
</ol>
`)

.add('Step List, Gold Counter', () => `
<ol class="uds-list uds-steplist uds-steplist-gold">
  <li>This is a quintenary headline<br><span>sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span></li>
  <li>This is a quintenary headline<br><span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</span></li>
  <li>This is a quintenary headline<br><span>sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span></li>
</ol>
`)

.add('Step List, Maroon Counter', () => `
<ol class="uds-list uds-steplist uds-steplist-maroon">
  <li>This is a quintenary headline<br><span>sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span></li>
  <li>This is a quintenary headline<br><span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</span></li>
  <li>This is a quintenary headline<br><span>sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span></li>
</ol>
`)

.add('Step List, Smokemode', () => `
<ol class="uds-list uds-steplist smokemode">
  <li>This is a quintenary headline<br><span>sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span></li>
  <li>This is a quintenary headline<br><span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</span></li>
  <li>This is a quintenary headline<br><span>sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span></li>
</ol>
`)

.add('Step List, Gold Counter, Smokemode', () => `
<ol class="uds-list uds-steplist smokemode uds-steplist-gold">
  <li>This is a quintenary headline<br><span>sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span></li>
  <li>This is a quintenary headline<br><span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</span></li>
  <li>This is a quintenary headline<br><span>sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span></li>
</ol>
`)

.add('Step List, Maroon Counter, Smokemode', () => `
<ol class="uds-list uds-steplist smokemode uds-steplist-maroon">
  <li>This is a quintenary headline<br><span>sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span></li>
  <li>This is a quintenary headline<br><span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</span></li>
  <li>This is a quintenary headline<br><span>sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span></li>
</ol>
`)

.add('Step List, Light Smokemode', () => `
<ol class="uds-list uds-steplist light-smokemode">
  <li>This is a quintenary headline<br><span>sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span></li>
  <li>This is a quintenary headline<br><span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</span></li>
  <li>This is a quintenary headline<br><span>sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span></li>
</ol>
`)

.add('Step List, Gold Counter, Light Smokemode', () => `
<ol class="uds-list uds-steplist light-smokemode uds-steplist-gold">
  <li>This is a quintenary headline<br><span>sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span></li>
  <li>This is a quintenary headline<br><span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</span></li>
  <li>This is a quintenary headline<br><span>sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span></li>
</ol>
`)

.add('Step List, Maroon Counter, Light Smokemode', () => `
<ol class="uds-list uds-steplist light-smokemode uds-steplist-maroon">
  <li>This is a quintenary headline<br><span>sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span></li>
  <li>This is a quintenary headline<br><span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</span></li>
  <li>This is a quintenary headline<br><span>sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span></li>
</ol>
`)

.add('Step List, Darkmode', () => `
<ol class="uds-list uds-steplist darkmode">
  <li>This is a quintenary headline<br><span>sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span></li>
  <li>This is a quintenary headline<br><span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</span></li>
  <li>This is a quintenary headline<br><span>sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span></li>
</ol>
`)

.add('Step List, Gold Counter, Darkmode', () => `
<ol class="uds-list uds-steplist darkmode uds-steplist-gold">
  <li>This is a quintenary headline<br><span>sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span></li>
  <li>This is a quintenary headline<br><span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</span></li>
  <li>This is a quintenary headline<br><span>sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span></li>
</ol>
`)
; //close
