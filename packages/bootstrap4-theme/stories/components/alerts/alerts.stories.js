import { document, console } from 'global';
import { storiesOf } from '@storybook/html';
storiesOf('Components/Alerts', module)
  .addParameters({
    happo: false,
  })

.add('Alerts', () => `
  <div class="alert alert-warning" role="alert">
    <span title="Alert" class="fa fa-icon fa-bell"></span>
    <button aria-label="Close" onclick="event.target.parentNode.style.display='none';" class="close">x</button>
    Alert (orange): This is a warning alert to alert, confirm or notify. It is
    built using <a href="https://getbootstrap.com/docs/4.0/components/alerts">the
    Bootstrap 4 .alert-warning class</a>.
  </div>
  <div class="alert alert-success" role="alert">
    <span title="Success" class="fa fa-icon fa-check-circle"></span>
    <button aria-label="Close" onclick="event.target.parentNode.style.display='none';" class="close">x</button>
    Success (green): This is a success alert to confirm or notify. It is built
    using <a href="https://getbootstrap.com/docs/4.0/components/alerts">the
    Bootstrap 4 .alert-success class</a>.
  </div>
  <div class="alert alert-info" role="alert">
    <span title="Information" class="fa fa-icon fa-info-circle"></span>
    <button aria-label="Close" onclick="event.target.parentNode.style.display='none';" class="close">x</button>
    Information (blue): This is a info alert to confirm or notify. It is built
    using <a href="https://getbootstrap.com/docs/4.0/components/alerts">the
    Bootstrap 4 .alert-info class</a>.
  </div>
  <div class="alert alert-danger" role="alert">
    <span title="Error" class="fa fa-icon fa-exclamation-triangle"></span>
    <button aria-label="Close" onclick="event.target.parentNode.style.display='none';" class="close">x</button>
    Error (red): This is a danger alert used specifically for errors. It is
    built using <a href="https://getbootstrap.com/docs/4.0/components/alerts">the
    Bootstrap 4 .alert-danger class</a>.
  </div>
`)

  /*
  .add('Alerts, all Bootstrap and extras', () => `
  <div class="alert alert-primary" role="alert">
    This is a primary alert—check it out!
  </div>
  <div class="alert alert-secondary" role="alert">
    This is a secondary alert—check it out!
  </div>
  <div class="alert alert-success" role="alert">
    This is a success alert—check it out!
  </div>
  <div class="alert alert-danger" role="alert">
    This is a danger alert—check it out!
  </div>
  <div class="alert alert-warning" role="alert">
    This is a warning alert—check it out!
  </div>
  <div class="alert alert-info" role="alert">
    This is a info alert—check it out!
  </div>
  <div class="alert alert-light" role="alert">
    This is a light alert—check it out!
  </div>
  <div class="alert alert-dark" role="alert">
    This is a dark alert—check it out!
  </div>
  <div class="alert alert-rfi" role="alert">
    This is a RFI related alert—check it out!
  </div>
  <div class="alert alert-program" role="alert">
    This is a program related alert—check it out!
  </div>`)

  .add('Alerts with links', () => `
  <div class="alert alert-primary" role="alert">
    This is a primary alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you like.
  </div>
  <div class="alert alert-secondary" role="alert">
    This is a secondary alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you like.
  </div>
  <div class="alert alert-rfi" role="alert">
    This is a rfi related alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you like.
  </div>
  <div class="alert alert-program" role="alert">
    This is a program related alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you like.
  </div>
  <div class="alert alert-success" role="alert">
    This is a success alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you like.
  </div>
  <div class="alert alert-danger" role="alert">
    This is a danger alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you like.
  </div>
  <div class="alert alert-warning" role="alert">
    This is a warning alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you like.
  </div>
  <div class="alert alert-info" role="alert">
    This is a info alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you like.
  </div>
  <div class="alert alert-light" role="alert">
    This is a light alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you like.
  </div>
  <div class="alert alert-dark" role="alert">
    This is a dark alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you like.
  </div>`)

  .add('Alert with additional content', () => `
  <div class="alert alert-success" role="alert">
    <h4 class="alert-heading">Well done!</h4>
    <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
    <hr>
    <p class="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
  </div>`)
*/

; // close
