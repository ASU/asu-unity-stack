import { document, console } from 'global';
import { storiesOf } from '@storybook/html';

// List type: ordered, unordered, steps
// icons fa
// darkmode, lightmode
// maroon bullets/#s/icons/steps
// gold bullets/#s/icons/steps
// black bullets/#s/icons/steps
// white bullets/#s/icons/steps

storiesOf('Components/List', module)
  .addParameters({
    happo: false,
  })

.add('Unodered list', () => `
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
<ul>
  <li>Lorem ipsum dolor sit amet</li>
  <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
  <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
  <li>Lorem ipsum dolor sit amet</li>
</ul>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
`)

.add('Unodered list, darkmode', () => `
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
<ul class="darkmode">
  <li>Lorem ipsum dolor sit amet</li>
  <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
  <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
  <li>Lorem ipsum dolor sit amet</li>
</ul>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
`)

.add('Ordered list', () => `
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
<ol>
  <li>Lorem ipsum dolor sit amet</li>
  <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
  <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
  <li>Lorem ipsum dolor sit amet</li>
  <li>Lorem ipsum dolor sit amet</li>
  <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
  <li>Lorem ipsum dolor sit amet</li>
  <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
  <li>Lorem ipsum dolor sit amet</li>
  <li>Lorem ipsum dolor sit amet</li>
  <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
  <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
</ol>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
`)

.add('Ordered list, smokemode', () => `
<ol class="smokemode">
  <li>Lorem ipsum dolor sit amet</li>
  <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
  <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
  <li>Lorem ipsum dolor sit amet</li>
  <li>Lorem ipsum dolor sit amet</li>
  <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
  <li>Lorem ipsum dolor sit amet</li>
  <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
  <li>Lorem ipsum dolor sit amet</li>
  <li>Lorem ipsum dolor sit amet</li>
  <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
  <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
</ol>
`)

.add('Icon list', () => `
<ul class="fa-ul">
  <li><i class="fa-li fas fa-rocket"></i>Lorem ipsum dolor sit amet</li>
  <li><i class="fa-li fas fa-bus"></i>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
  <li><i class="fa-li fas fa-car"></i>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
  <li><i class="fa-li fas fa-bicycle"></i>Lorem ipsum dolor sit amet</li>
</ul>
`)

.add('Unodered list, maroon', () => `
<ul class="maroon">
  <li>Lorem ipsum dolor sit amet</li>
  <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
  <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
  <li>Lorem ipsum dolor sit amet</li>
</ul>
`)

.add('Ordered list, maroon', () => `
<ol class="maroon">
  <li>Lorem ipsum dolor sit amet</li>
  <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
  <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
  <li>Lorem ipsum dolor sit amet</li>
</ol>
`)

.add('Icon list, maroon', () => `
<ul class="fa-ul maroon">
  <li><i class="fa-li fas fa-rocket"></i>Lorem ipsum dolor sit amet</li>
  <li><i class="fa-li fas fa-bus"></i>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
  <li><i class="fa-li fas fa-car"></i>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
  <li><i class="fa-li fas fa-bicycle"></i>Lorem ipsum dolor sit amet</li>
</ul>
`)

.add('Icon list, dark', () => `
<ul class="fa-ul darkmode">
  <li><i class="fa-li fas fa-rocket"></i>Lorem ipsum dolor sit amet</li>
  <li><i class="fa-li fas fa-bus"></i>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
  <li><i class="fa-li fas fa-car"></i>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
  <li><i class="fa-li fas fa-bicycle"></i>Lorem ipsum dolor sit amet</li>
</ul>
`)

.add('Icon list, gold dark', () => `
<ul class="fa-ul darkmode gold">
  <li><i class="fa-li fas fa-rocket"></i>Lorem ipsum dolor sit amet</li>
  <li><i class="fa-li fas fa-bus"></i>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
  <li><i class="fa-li fas fa-car"></i>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
  <li><i class="fa-li fas fa-bicycle"></i>Lorem ipsum dolor sit amet</li>
</ul>
`)

.add('Multilevel unordered list', () => `
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
                              </ul>
                          </li>
                      </ul>
                  </li>
              </ul>
          </li>
      </ul>
  </li>
</ul>
`)

.add('Multilevel ordered list', () => `
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
  <li>This is a quintenary headline<br><span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</span></li>
  <li>This is a quintenary headline<br><span>sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span></li>
</ol>
`)

.add('Step list, gold smokemode', () => `
<ol class="uds-steplist smokemode uds-steplist-gold">
  <li>This is a quintenary headline<br><span>sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span></li>
  <li>This is a quintenary headline<br><span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</span></li>
  <li>This is a quintenary headline<br><span>sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span></li>
</ol>
`)

.add('Step list, maroon smokemode', () => `
<ol class="uds-steplist smokemode uds-steplist-maroon">
  <li>This is a quintenary headline<br><span>sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span></li>
  <li>This is a quintenary headline<br><span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</span></li>
  <li>This is a quintenary headline<br><span>sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span></li>
</ol>
`)

.add('Step list, dark', () => `
<ol class="uds-steplist darkmode">
  <li>This is a quintenary headline<br><span>sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span></li>
  <li>This is a quintenary headline<br><span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</span></li>
  <li>This is a quintenary headline<br><span>sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span></li>
</ol>
`)

.add('Step list, gold dark', () => `
<ol class="uds-steplist darkmode uds-steplist-gold">
  <li>This is a quintenary headline<br><span>sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span></li>
  <li>This is a quintenary headline<br><span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</span></li>
  <li>This is a quintenary headline<br><span>sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span></li>
</ol>
`)
; //close
