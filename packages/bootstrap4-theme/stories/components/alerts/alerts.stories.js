import { document, console } from 'global';
import { storiesOf } from '@storybook/html';
storiesOf('Components/Alerts', module)
  .addParameters({
    happo: false,
  })

.add('Alerts', () => `
orange - alert
<hr>
green - success
<hr>
blue - information
<hr>
red - error

  <div class="alert alert-block alert-warning">
    <a href="#" class="close">x</a>
    <h2 class="element-invisible">Warning message</h2>
    <em>Notice</em>: Trying to get property 'nid' of non-object in <em>asu_rfi_form_data()</em> (line <em>70</em> of <em>/home/bryan/github.com/bjdevil21/webspark-drops-drupal7/profiles/openasu/modules/custom/asu_rfi/includes/asu_rfi.pages.inc</em>).
  </div>
  <div class="alert alert-block alert-success">
    <a href="#" class="close">x</a>
    <h2 class="element-invisible">Success message</h2>
    <em>Notice</em>: Trying to get property 'nid' of non-object in <em>asu_rfi_form_data()</em> (line <em>70</em> of <em>/home/bryan/github.com/bjdevil21/webspark-drops-drupal7/profiles/openasu/modules/custom/asu_rfi/includes/asu_rfi.pages.inc</em>).
  </div>
  <div class="alert alert-block alert-info">
    <a href="#" class="close">x</a>
    <h2 class="element-invisible">Info message</h2>
    <em>Notice</em>: Trying to get property 'nid' of non-object in <em>asu_rfi_form_data()</em> (line <em>70</em> of <em>/home/bryan/github.com/bjdevil21/webspark-drops-drupal7/profiles/openasu/modules/custom/asu_rfi/includes/asu_rfi.pages.inc</em>).
  </div>
  <div class="alert alert-block alert-danger">
    <a href="#" class="close">x</a>
    <h2 class="element-invisible">Error message</h2>
    <em>Notice</em>: Trying to get property 'nid' of non-object in <em>asu_rfi_form_data()</em> (line <em>70</em> of <em>/home/bryan/github.com/bjdevil21/webspark-drops-drupal7/profiles/openasu/modules/custom/asu_rfi/includes/asu_rfi.pages.inc</em>).
  </div>

  <p class="alert alert-block alert-warning">P tag alert.</p>
`)

  .add('Alerts example', () => `<div class="alert alert-primary" role="alert">
  This is a primary alert—check it out!
</div>
<div class="alert alert-secondary" role="alert">
  This is a secondary alert—check it out!
</div>
<div class="alert alert-rfi" role="alert">
  This is a RFI related alert—check it out!
</div>
<div class="alert alert-program" role="alert">
  This is a program related alert—check it out!
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
</div>`)

  .add('Banners (TODO move to its own story)', () => `
  TODO move to its own story
  `)

/*
  .add('Alerts with links', () => `<div class="alert alert-primary" role="alert">
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

  .add('Alert with additional content', () => `<div class="alert alert-success" role="alert">
  <h4 class="alert-heading">Well done!</h4>
  <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
  <hr>
  <p class="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
</div>`)
*/

; // close
