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
; //close
