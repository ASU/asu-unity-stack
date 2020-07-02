import { document, console } from 'global';
import { storiesOf } from '@storybook/html';
storiesOf('Components/Banners', module)
  .addParameters({
    happo: false,
  })

  // TODO FLEXBOX THIS SUCKER.
  // TODO Re-namespace the top level class and copy over rules.

.add('Banners, green', () => `
  <div class="banner banner-green" role="banner">
    <div class="banner-icon">
      <span title="Banner" class="fa fa-icon fa-bell"></span>
    </div>
    <div class="banner-content">
      <h3>Stay up-to-date on what's new at ASU</h3>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
      quis nostrud <a href="https://asunow.asu.edu/">read the latest updates
      here</a>.
    </div>
    <div class="banner-buttons">
      <a href="https://provost.asu.edu/sync/students" type="button" class="btn btn-sm btn-dark">Info. on teaching and learning remotely</a>
      <a href="https://students.asu.edu/faq" type="button" class="btn btn-sm btn-dark">FAQ Page</a>
    </div>
    <div class="banner-close">
      <button type="button" class="btn btn-circle btn-circle-alt-white close" aria-label="Close" onclick="event.target.parentNode.parentNode.style.display='none';">x</button>
    </div>
  </div>
  `)

  .add('Banners, orange', () => `
  <div class="banner banner-orange" role="banner">
    <div class="banner-icon">
      <span title="Banner" class="fa fa-icon fa-bell"></span>
    </div>
    <div class="banner-content">
      <h3>Stay up-to-date on what's new at ASU</h3>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
      quis nostrud <a href="https://asunow.asu.edu/">read the latest updates
      here</a>.
    </div>
    <div class="banner-buttons">
      <a href="https://provost.asu.edu/sync/students" type="button" class="btn btn-sm btn-dark">Info. on teaching and learning remotely</a>
      <a href="https://students.asu.edu/faq" type="button" class="btn btn-sm btn-dark">FAQ Page</a>
    </div>
    <div class="banner-close">
      <button type="button" class="btn btn-circle btn-circle-alt-white close" aria-label="Close" onclick="event.target.parentNode.parentNode.style.display='none';">x</button>
    </div>
  </div>
  `)

  .add('Banners, blue', () => `
  <div class="banner banner-blue" role="banner">
    <div class="banner-icon">
      <span title="Banner" class="fa fa-icon fa-bell"></span>
    </div>
    <div class="banner-content">
      <h3>Stay up-to-date on what's new at ASU</h3>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
      quis nostrud <a href="https://asunow.asu.edu/">read the latest updates
      here</a>.
    </div>
    <div class="banner-buttons">
      <a href="https://provost.asu.edu/sync/students" type="button" class="btn btn-sm btn-dark">Info. on teaching and learning remotely</a>
      <a href="https://students.asu.edu/faq" type="button" class="btn btn-sm btn-dark">FAQ Page</a>
    </div>
    <div class="banner-close">
      <button type="button" class="btn btn-circle btn-circle-alt-white close" aria-label="Close" onclick="event.target.parentNode.parentNode.style.display='none';">x</button>
    </div>
  </div>
  `)

  .add('Banners, gray', () => `
  <div class="banner banner-gray" role="banner">
    <div class="banner-icon">
      <span title="Banner" class="fa fa-icon fa-bell"></span>
    </div>
    <div class="banner-content">
      <h3>Stay up-to-date on what's new at ASU</h3>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
      quis nostrud <a href="https://asunow.asu.edu/">read the latest updates
      here</a>.
    </div>
    <div class="banner-buttons">
      <a href="https://provost.asu.edu/sync/students" type="button" class="btn btn-sm btn-dark">Info. on teaching and learning remotely</a>
      <a href="https://students.asu.edu/faq" type="button" class="btn btn-sm btn-dark">FAQ Page</a>
    </div>
    <div class="banner-close">
      <button type="button" class="btn btn-circle btn-circle-alt-white close" aria-label="Close" onclick="event.target.parentNode.parentNode.style.display='none';">x</button>
    </div>
  </div>
  `)

  .add('Banners, black', () => `
  <div class="banner banner-black" role="banner">
    <div class="banner-icon">
      <span title="Banner" class="fa fa-icon fa-bell"></span>
    </div>
    <div class="banner-content">
      <h3>Stay up-to-date on what's new at ASU</h3>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
      quis nostrud <a href="https://asunow.asu.edu/">read the latest updates
      here</a>.
    </div>
    <div class="banner-buttons">
      <a href="https://provost.asu.edu/sync/students" type="button" class="btn btn-sm btn-gold">Info. on teaching and learning remotely</a>
      <a href="https://students.asu.edu/faq" type="button" class="btn btn-sm btn-gold">FAQ Page</a>
    </div>
    <div class="banner-close">
      <button type="button" class="btn btn-circle btn-circle-alt-white close" aria-label="Close" onclick="event.target.parentNode.parentNode.style.display='none';">x</button>
    </div>
  </div>
`)

; // close
