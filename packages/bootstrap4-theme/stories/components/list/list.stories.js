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

.add('Multilevel unordered list, top-level icons (only)', () => `
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

// Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in in-text hyperlink dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

// Should this be implemented as a list-group?
.add('Step list', () => `
<ol>
  <li><div>This is a quintenary headline</div>sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
  <li><div>This is a quintenary headline</div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</li>
  <li><div>This is a quintenary headline</div>sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
</ol>
`)

// Should this be implemented as a list-group?
.add('Step list, gold', () => `
<ol>
  <li><div>This is a quintenary headline</div>sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
  <li><div>This is a quintenary headline</div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</li>
  <li><div>This is a quintenary headline</div>sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
</ol>
`)

// Should this be implemented as a list-group?
.add('Step list, maroon', () => `
<ol>
  <li><div>This is a quintenary headline</div>sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
  <li><div>This is a quintenary headline</div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</li>
  <li><div>This is a quintenary headline</div>sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
</ol>
`)

.add('dl dt dd', () => `
Do we need styles for these?
`)

.add('Unordered list, with sub-item custom content (HOLD)', () => `
<div class="list-group">
  <a href="#" class="list-group-item list-group-item-action active">
    <div class="d-flex w-100 justify-content-between">
      <h5 class="mb-1">List group item heading</h5>
      <small>3 days ago</small>
    </div>
    <p class="mb-1">Add nearly any HTML within, even for linked list groups like the one below, with the help of flexbox utilities.</p>
    <small>Donec id elit non mi porta.</small>
  </a>
  <a href="#" class="list-group-item list-group-item-action">
    <div class="d-flex w-100 justify-content-between">
      <h5 class="mb-1">List group item heading</h5>
      <small class="text-muted">3 days ago</small>
    </div>
    <p class="mb-1">Add nearly any HTML within, even for linked list groups like the one below, with the help of flexbox utilities.</p>
    <small class="text-muted">Donec id elit non mi porta.</small>
  </a>
  <a href="#" class="list-group-item list-group-item-action">
    <div class="d-flex w-100 justify-content-between">
      <h5 class="mb-1">List group item heading</h5>
      <small class="text-muted">3 days ago</small>
    </div>
    <p class="mb-1">Add nearly any HTML within, even for linked list groups like the one below, with the help of flexbox utilities.</p>
    <small class="text-muted">Donec id elit non mi porta.</small>
  </a>
</div>
`)

; //close
