import { document, console } from 'global';
import { storiesOf } from '@storybook/react';
storiesOf('Components/Banners', module)
  .addParameters({
    happo: false,
  })

  // TODO FLEXBOX THIS SUCKER.
  // TODO Re-namespace the top level class and copy over rules.

.add('Banners - Green', () => `
<div class="banner-green">
  <div class="banner container" role="banner">
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
      <a href="https://provost.asu.edu/sync/students" role="button" class="btn btn-sm btn-dark">Info. on teaching and learning remotely</a>
      <a href="https://students.asu.edu/faq" role="button" class="btn btn-sm btn-dark">FAQ Page</a>
    </div>
    <div class="banner-close">
      <button type="button" class="btn btn-circle btn-circle-alt-black close" aria-label="Close" onclick="event.target.parentNode.parentNode.style.display='none';"><i class="fas fa-times"></i></button>
    </div>
  </div>
</div>
  `)

  .add('Banners - Orange', () => `
<div class="banner-orange">
  <div class="banner container" role="banner">
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
      <a href="https://provost.asu.edu/sync/students" role="button" class="btn btn-sm btn-dark">Info. on teaching and learning remotely</a>
      <a href="https://students.asu.edu/faq" role="button" class="btn btn-sm btn-dark">FAQ Page</a>
    </div>
    <div class="banner-close">
      <button type="button" class="btn btn-circle btn-circle-alt-black close" aria-label="Close" onclick="event.target.parentNode.parentNode.style.display='none';"><i class="fas fa-times"></i></button>
    </div>
  </div>
 </div>
  `)

  .add('Banners - Blue', () => `
<div class="banner-blue">
  <div class="banner container" role="banner">
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
      <a href="https://provost.asu.edu/sync/students" role="button" class="btn btn-sm btn-dark">Info. on teaching and learning remotely</a>
      <a href="https://students.asu.edu/faq" role="button" class="btn btn-sm btn-dark">FAQ Page</a>
    </div>
    <div class="banner-close">
      <button type="button" class="btn btn-circle btn-circle-alt-black close" aria-label="Close" onclick="event.target.parentNode.parentNode.style.display='none';"><i class="fas fa-times"></i></button>
    </div>
  </div>
</div>
  `)

  .add('Banners - Gray 2 Background', () => `
<div class="banner-gray">
  <div class="banner container" role="banner">
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
      <a href="https://provost.asu.edu/sync/students" role="button" class="btn btn-sm btn-dark">Info. on teaching and learning remotely</a>
      <a href="https://students.asu.edu/faq" role="button" class="btn btn-sm btn-dark">FAQ Page</a>
    </div>
    <div class="banner-close">
      <button type="button" class="btn btn-circle btn-circle-alt-black close" aria-label="Close" onclick="event.target.parentNode.parentNode.style.display='none';"><i class="fas fa-times"></i></button>
    </div>
  </div>
  </div>
  `)

  .add('Banners - Gray 7 Background', () => `
<div class="banner-black">
  <div class="banner container" role="banner">
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
      <a href="https://provost.asu.edu/sync/students" role="button" class="btn btn-sm btn-gold">Info. on teaching and learning remotely</a>
      <a href="https://students.asu.edu/faq" role="button" class="btn btn-sm btn-gold">FAQ Page</a>
    </div>
    <div class="banner-close">
      <button type="button" class="btn btn-circle btn-circle-alt-black close" aria-label="Close" onclick="event.target.parentNode.parentNode.style.display='none';"><i class="fas fa-times"></i></button>
    </div>
  </div>
</div>
`)

; // close
