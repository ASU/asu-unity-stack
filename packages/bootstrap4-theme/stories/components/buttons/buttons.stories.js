import { document, console } from 'global';
import { storiesOf } from '@storybook/html';

storiesOf('Components/Buttons', module)
  .addParameters({
    happo: false,
  })

.add('Button colors', () => `<div class="container-fluid"><div class="col col-sm-12 p-3"><button class="btn btn-gold" type="submit">Button button</button> <a class="btn btn-gold" type="button" href="#">Anchor tag button</a> <input class="btn btn-gold" type="submit" value="Input button"><hr>
<button type="button" class="btn btn-maroon">Maroon</button><hr>
<button type="button" class="btn btn-gray">Light</button><hr>
<button type="button" class="btn btn-dark">Dark</button></div></div></div>`)

.add('Button sizes', () => `
<div class="container-fluid">
  <div class="col col-sm-12 p-3"><button type="button" class="btn btn-gold">Default button</button> <button type="button" class="btn btn-maroon">Default button</button>
    <hr />
    <button type="button" class="btn btn-gold btn-md">Medium button</button> <button type="button" class="btn btn-maroon btn-md">Medium button</button>
    <hr />
    <button type="button" class="btn btn-gold btn-sm">Small button</button> <button type="button" class="btn btn-maroon btn-sm">Small button</button>
</div>
`)

.add('Button with icon', () => `<div class="container-fluid"><div class="col col-sm-12 p-3"><a href="#" class="btn btn-gold" role="button"><span class="fas fa-rocket"></span>&nbsp;&nbsp;Gold button</a>
<a href="#" class="btn btn-maroon" role="button" ><span class="fas fa-rocket"></span>&nbsp;&nbsp;Maroon button</a></div></div></div>`)

/*.add('Active state', () => `<a href="#" class="btn btn-gold active" role="button" aria-pressed="true">Gold link</a>
<a href="#" class="btn btn-maroon active" role="button" aria-pressed="true">Link</a>`)*/

.add('Disabled state', () => `<div class="container-fluid"><div class="col col-sm-12 p-3"><button type="button" class="btn btn-gold" disabled>Gold button</button>
<button type="button" class="btn btn-maroon" disabled>Button</button><hr/><a href="#" class="btn btn-gold disabled" tabindex="-1" role="button" aria-disabled="true">Gold link</a>
<a href="#" class="btn btn-maroon disabled" tabindex="-1" role="button" aria-disabled="true">Link</a></div></div></div>`)

.add('Links', () => `<div class="container-fluid"><div class="row"><div class="col col-12 col-lg-4 bg-white p-3"><a href="#" class="">This is a default link</a></div>
<div class="col col-12 col-lg-4 bg-light p-3"><a href="#" class="">This is a default link</a></div>
<div class="col col-12 col-lg-4 bg-dark p-3"><a href="#" class="text-gold">This is a link on a dark background</a></div></div></div>`)

.add('Button tags', () => `<div class="container-fluid"><div class="row"><div class="col col-12 col-lg-4 bg-white p-3"><button type="button" class="btn btn-tag btn-tag-alt-white">Default tag</button></div>
<div class="col col-12 col-lg-4 bg-light p-3"><button type="button" class="btn btn-tag btn-tag-alt-gray">Tag alt gray</button></div>
<div class="col col-12 col-lg-4 bg-dark p-3"><button type="button" class="btn btn-tag btn-tag-alt-black">Tag alt black</button></div></div></div>`)

.add('Close button', () => `<div class="container-fluid"><div class="row"><div class="col col-12 col-lg-4 bg-white p-3"><button type="button" class="btn btn-circle btn-circle-alt-white"><i class="fas fa-times"></i></button></div>
<div class="col col-12 col-lg-4 bg-light p-3"><button type="button" class="btn btn-circle btn-circle-alt-gray"><i class="fas fa-times"></i></button></div>
<div class="col col-12 col-lg-4 bg-dark p-3"><button type="button" class="btn btn-circle btn-circle-alt-black"><i class="fas fa-times"></i></button></div></div></div>`)

.add('Prev/next buttons', () => `<div class="container-fluid"><div class="row"><div class="col col-12 col-lg-4 bg-white p-3"><button type="button" class="btn btn-circle btn-circle-alt-white btn-circle-large"><i class="fas fa-chevron-left"></i></button> <button type="button" class="btn btn-circle btn-circle-alt-white btn-circle-large"><i class="fas fa-chevron-right"></i></button></div>
<div class="col col-12 col-lg-4 bg-light p-3"><button type="button" class="btn btn-circle btn-circle-alt-gray btn-circle-large"><i class="fas fa-chevron-left"></i></button> <button type="button" class="btn btn-circle btn-circle-alt-gray btn-circle-large"><i class="fas fa-chevron-right"></i></button></div>
<div class="col col-12 col-lg-4 bg-dark p-3"><button type="button" class="btn btn-circle btn-circle-alt-black btn-circle-large"><i class="fas fa-chevron-left"></i></button> <button type="button" class="btn btn-circle btn-circle-alt-black btn-circle-large"><i class="fas fa-chevron-right"></i></button></div></div></div>`);

/* .add('Button color examples', () => `<div class="container-fluid"><div class="row"><div class="col col-sm-12 p-3">
<button type="button" class="btn btn-gold">Gold</button>
<button type="button" class="btn btn-maroon">Maroon</button>
<button type="button" class="btn btn-link">Link</button>
<button type="button" class="btn btn-light">Light</button>
<button type="button" class="btn btn-dark">Dark</button><hr>
<button type="button" class="btn btn-success">Alert: Success</button>
<button type="button" class="btn btn-danger">Alert: Danger</button>
<button type="button" class="btn btn-warning">Alert: Warning</button>
<button type="button" class="btn btn-info">Alert: Info</button></div></div></div>`) */
