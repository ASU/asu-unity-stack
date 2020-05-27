import { document, console } from 'global';
import { storiesOf } from '@storybook/html';

storiesOf('Components/Buttons', module)
  .addParameters({
    happo: false,
  })

.add('Standard button tags', () => `<button class="btn btn-gold" type="submit">Gold CTA</button>
<input class="btn btn-gold" type="button" value="Input">
<input class="btn btn-gold" type="submit" value="Submit">
<input class="btn btn-gold" type="submit" value="Send">
<input class="btn btn-gold" type="reset" value="Contribute"><hr>
<input class="btn btn-maroon" type="button" value="Maroon CTA"><hr>
<input class="btn btn-light" type="button" value="Undergraduate programs">
<input class="btn btn-light" type="button" value="Graduate programs"><hr/>
<input class="btn btn-dark" type="button" value="Explore programs">
<input class="btn btn-dark" type="button" value="Explore accelerated degrees">
<input class="btn btn-dark" type="button" value="Explore minors and cerfificates">`)

.add('Button color examples', () => `<button type="button" class="btn btn-gold">Gold</button>
<button type="button" class="btn btn-maroon">Maroon</button>
<button type="button" class="btn btn-link">Link</button>
<button type="button" class="btn btn-light">Light</button>
<button type="button" class="btn btn-dark">Dark</button><hr>
<button type="button" class="btn btn-success">Alert: Success</button>
<button type="button" class="btn btn-danger">Alert: Danger</button>
<button type="button" class="btn btn-warning">Alert: Warning</button>
<button type="button" class="btn btn-info">Alert: Info</button>`)

.add('Button tags', () => `<div class="container-fluid"><div class="row"><div class="col col-sm-4 bg-white p-3"><button type="button" class="btn btn-tag btn-tag-alt-white">Default tag</button></div>
<div class="col col-sm-4 bg-light p-3"><button type="button" class="btn btn-tag btn-tag-alt-gray">Tag alt gray</button></div>
<div class="col col-sm-4 bg-dark p-3"><button type="button" class="btn btn-tag btn-tag-alt-black">Tag alt black</button></div></div></div>`)

.add('Links', () => `<div class="container-fluid"><div class="row"><div class="col col-sm-4 bg-white p-3"><a href="#" class="">This is a default link</a></div>
<div class="col col-sm-4 bg-light p-3"><a href="#" class="">This is a default link</a></div>
<div class="col col-sm-4 bg-dark p-3"><a href="#" class="text-gold">This is a default link</a></div></div></div>`)

.add('Button sizes', () => `<button type="button" class="btn btn-gold btn-lg">Large button</button><button type="button" class="btn btn-maroon btn-lg">Large button</button><hr/>
<button type="button" class="btn btn-gold">Default button</button><button type="button" class="btn btn-maroon">Default button</button><hr/>
<button type="button" class="btn btn-gold btn-md">Medium button</button><button type="button" class="btn btn-maroon btn-md">Medium button</button><hr/><button type="button" class="btn btn-gold btn-sm">Small button</button><button type="button" class="btn btn-maroon btn-sm">Small button</button><hr/>
<button type="button" class="btn btn-gold btn-lg btn-block">Block level button</button><button type="button" class="btn btn-maroon btn-lg btn-block">Block level button</button>`)

.add('Active state', () => `<a href="#" class="btn btn-gold active" role="button" aria-pressed="true">Gold link</a>
<a href="#" class="btn btn-maroon active" role="button" aria-pressed="true">Link</a>`)

.add('Disabled state', () => `<button type="button" class="btn btn-gold" disabled>Gold button</button>
<button type="button" class="btn btn-maroon" disabled>Button</button><hr/><a href="#" class="btn btn-gold disabled" tabindex="-1" role="button" aria-disabled="true">Gold link</a>
<a href="#" class="btn btn-maroon disabled" tabindex="-1" role="button" aria-disabled="true">Link</a>`)

.add('Button toggle state', () => `<button type="button" class="btn btn-gold" data-toggle="button" aria-pressed="false" autocomplete="off">
  Single toggle
</button>`)

.add('Checkbox and radio buttons', () => `<div class="btn-group-toggle" data-toggle="buttons">
<label class="btn btn-maroon active">
    <input type="checkbox" checked autocomplete="off"> Checked
  </label>
</div><hr/><div class="btn-group btn-group-toggle" data-toggle="buttons">
  <label class="btn btn-maroon active">
    <input type="radio" name="options" id="option1" autocomplete="off" checked> Active
  </label>
  <label class="btn btn-maroon">
    <input type="radio" name="options" id="option2" autocomplete="off"> Radio
  </label>
  <label class="btn btn-maroon">
    <input type="radio" name="options" id="option3" autocomplete="off"> Radio
  </label>
</div>`);
