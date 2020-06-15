import { document, console } from 'global';
import { storiesOf } from '@storybook/html';

storiesOf('Components/List', module)
  .addParameters({
    happo: false,
  })

.add('Unordered list', () => `
<ul>
  <li>Lorem ipsum dolor sit amet</li>
  <li>Consectetur adipiscing lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
  <li>Ipsum dolor sit amet, consectetur adipiscing elit.</li>
  <li>Sed do eiusmod tempor incididunt ut lorem ipsum dolor sit amet</li>
</ul>
`)

.add('Unordered list, Maroon', () => `
<ul class="maroon">
  <li>Lorem ipsum dolor sit amet</li>
  <li>Consectetur adipiscing lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
  <li>Ipsum dolor sit amet, consectetur adipiscing elit.</li>
  <li>Sed do eiusmod tempor incididunt ut lorem ipsum dolor sit amet</li>
</ul>
`)

.add('Unordered list, Smoke', () => `
<ul class="smokemode">
  <li>Lorem ipsum dolor sit amet</li>
  <li>Consectetur adipiscing lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
  <li>Ipsum dolor sit amet, consectetur adipiscing elit.</li>
  <li>Sed do eiusmod tempor incididunt ut lorem ipsum dolor sit amet</li>
</ul>
`)

.add('Unordered list, Darkmode', () => `
<ul class="darkmode">
  <li>Lorem ipsum dolor sit amet</li>
  <li>Consectetur adipiscing lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
  <li>Ipsum dolor sit amet, consectetur adipiscing elit.</li>
  <li>Sed do eiusmod tempor incididunt ut lorem ipsum dolor sit amet</li>
</ul>
`)

.add('Unordered list, Multi-level', () => `
<ul>
  <li>Lorem ipsum dolor sit amet
    <ul>
      <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        <ul>
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            <ul>
              <li>Lorem ipsum dolor sit amet
              <ul>
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

.add('Ordered list', () => `
<ol>
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

.add('Ordered list, Maroon', () => `
<ol class="maroon">
  <li>Lorem ipsum dolor sit amet</li>
  <li>Consectetur adipiscing lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
  <li>Ipsum dolor sit amet, consectetur adipiscing elit.</li>
  <li>Sed do eiusmod tempor incididunt ut lorem ipsum dolor sit amet</li>
</ol>
`)

.add('Ordered list, Smoke', () => `
<ol class="smokemode">
  <li>Lorem ipsum dolor sit amet</li>
  <li>Consectetur adipiscing lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
  <li>Ipsum dolor sit amet, consectetur adipiscing elit.</li>
  <li>Sed do eiusmod tempor incididunt ut lorem ipsum dolor sit amet</li>
</ol>
`)

.add('Ordered list, Darkmode', () => `
<ol class="darkmode">
  <li>Lorem ipsum dolor sit amet</li>
  <li>Consectetur adipiscing lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
  <li>Ipsum dolor sit amet, consectetur adipiscing elit.</li>
  <li>Sed do eiusmod tempor incididunt ut lorem ipsum dolor sit amet</li>
</ol>
`)

.add('Ordered List, Multi-Level', () => `
<ol>
  <li>Lorem ipsum dolor sit amet
      <ol>
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              <ol>
                  <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      <ol>
                          <li>Lorem ipsum dolor sit amet
                              <ol>
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

.add('Icon list', () => `
<ul class="fa-ul">
  <li><i class="fa-li fas fa-rocket" aria-hidden="true"></i>Lorem ipsum dolor sit amet</li>
  <li><i class="fa-li fas fa-bus" aria-hidden="true"></i>Consectetur adipiscing lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
  <li><i class="fa-li fas fa-car" aria-hidden="true"></i>Ipsum dolor sit amet, consectetur adipiscing elit.</li>
  <li><i class="fa-li fas fa-bicycle" aria-hidden="true"></i>We hide icons from assistive technology in these examples, but whether to hide using aria-hidden="true" or not should be determined by the developer based on whether the icons are intended as decoration only or are intended to convey meaning. See <a href="https://fontawesome.com/v4.7.0/accessibility/">Font Awesome Accessibility</a> for guidelines.</li>
</ul>
`)

.add('Icon list, maroon', () => `
<ul class="fa-ul maroon">
  <li><i class="fa-li fas fa-rocket" aria-hidden="true"></i>Lorem ipsum dolor sit amet</li>
  <li><i class="fa-li fas fa-bus" aria-hidden="true"></i>Consectetur adipiscing lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
  <li><i class="fa-li fas fa-car" aria-hidden="true"></i>Ipsum dolor sit amet, consectetur adipiscing elit.</li>
  <li><i class="fa-li fas fa-bicycle" aria-hidden="true"></i>Sed do eiusmod tempor incididunt ut lorem ipsum dolor sit amet</li>
</ul>
`)

.add('Icon list, darkmode', () => `
<ul class="fa-ul darkmode">
  <li><i class="fa-li fas fa-rocket" aria-hidden="true"></i>Lorem ipsum dolor sit amet</li>
  <li><i class="fa-li fas fa-bus" aria-hidden="true"></i>Consectetur adipiscing lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
  <li><i class="fa-li fas fa-car" aria-hidden="true"></i>Ipsum dolor sit amet, consectetur adipiscing elit.</li>
  <li><i class="fa-li fas fa-bicycle" aria-hidden="true"></i>Sed do eiusmod tempor incididunt ut lorem ipsum dolor sit amet</li>
</ul>
`)

.add('Icon list, gold darkmode', () => `
<ul class="fa-ul darkmode gold">
  <li><i class="fa-li fas fa-rocket" aria-hidden="true"></i>Lorem ipsum dolor sit amet</li>
  <li><i class="fa-li fas fa-bus" aria-hidden="true"></i>Consectetur adipiscing lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
  <li><i class="fa-li fas fa-car" aria-hidden="true"></i>Ipsum dolor sit amet, consectetur adipiscing elit.</li>
  <li><i class="fa-li fas fa-bicycle" aria-hidden="true"></i>Sed do eiusmod tempor incididunt ut lorem ipsum dolor sit amet</li>
</ul>
`)



// Should this be implemented as a list-group?
.add('Step list', () => `
<ol class="uds-steplist">
  <li>This is a quintenary headline<br><span>sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span></li>
  <li>This is a quintenary headline<br><span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</span></li>
  <li>This is a quintenary headline<br><span>sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span></li>
</ol>
`)

.add('Step list, gold', () => `
<ol class="uds-steplist uds-steplist-gold">
  <li>This is a quintenary headline<br><span>sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span></li>
  <li>This is a quintenary headline<br><span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</span></li>
  <li>This is a quintenary headline<br><span>sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span></li>
</ol>
`)

.add('Step list, maroon', () => `
<ol class="uds-steplist uds-steplist-maroon">
  <li>This is a quintenary headline<br><span>sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span></li>
  <li>This is a quintenary headline<br><span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</span></li>
  <li>This is a quintenary headline<br><span>sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span></li>
</ol>
`)

.add('Step list, smokemode', () => `
<ol class="uds-steplist smokemode">
  <li>This is a quintenary headline<br><span>sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span></li>
  <li>This is a quintenary headline<br><span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</span></li>
  <li>This is a quintenary headline<br><span>sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span></li>
</ol>
`)

.add('Step list, gold smokemode', () => `
<ol class="uds-steplist smokemode uds-steplist-gold">
  <li>This is a quintenary headline<br><span>sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span></li>
  <li>This is a quintenary headline<br><span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</span></li>
  <li>This is a quintenary headline<br><span>sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span></li>
</ol>
`)

.add('Step list, maroon smokemode', () => `
<ol class="uds-steplist smokemode uds-steplist-maroon">
  <li>This is a quintenary headline<br><span>sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span></li>
  <li>This is a quintenary headline<br><span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</span></li>
  <li>This is a quintenary headline<br><span>sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span></li>
</ol>
`)

.add('Step list, darkmode', () => `
<ol class="uds-steplist darkmode">
  <li>This is a quintenary headline<br><span>sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span></li>
  <li>This is a quintenary headline<br><span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</span></li>
  <li>This is a quintenary headline<br><span>sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span></li>
</ol>
`)

.add('Step list, gold darkmode', () => `
<ol class="uds-steplist darkmode uds-steplist-gold">
  <li>This is a quintenary headline<br><span>sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span></li>
  <li>This is a quintenary headline<br><span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</span></li>
  <li>This is a quintenary headline<br><span>sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span></li>
</ol>
`)
; //close
