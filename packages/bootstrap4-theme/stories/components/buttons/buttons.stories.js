import { storiesOf } from '@storybook/html';

storiesOf('Components/Buttons', module)
  .addParameters({
    happo: false,
  })

  .add(
    'Button colors',
    () => `<div class="container-fluid"><div class="col col-sm-12 p-3"><button class="btn btn-gold" type="submit">Button button</button> <a class="btn btn-gold" type="button" href="#">Anchor tag button</a> <input class="btn btn-gold" type="submit" value="Input button"><hr>
<button type="button" class="btn btn-maroon">Maroon</button><hr>
<button type="button" class="btn btn-gray">Light</button><hr>
<button type="button" class="btn btn-dark">Dark</button></div></div></div>`
  )

  .add(
    'Button sizes',
    () => `
<style>
  .btn-grid {
    display: inline-grid;
    grid-auto-flow: column;
    grid-template-columns: repeat(4, auto);
    grid-template-rows: repeat(4, auto);
    row-gap: 1rem;
    column-gap: 2rem;
  }

  .btn-tag { margin-top: 0 !important; }
</style>

<div class="btn-grid">
  <div>
    <button type="button" class="btn btn-maroon">Default button</button>
  </div>
  <div>
    <button type="button" class="btn btn-gold">Default button</button>
  </div>
  <div>
    <button type="button" class="btn btn-dark">Default button</button>
  </div>
  <div>
    <button type="button" class="btn btn-gray">Default button</button>
  </div>

  <div>
    <button type="button" class="btn btn-md btn-maroon">Small button</button>
  </div>
  <div>
    <button type="button" class="btn btn-md btn-gold">Small button</button>
  </div>
  <div>
    <button type="button" class="btn btn-md btn-dark">Small button</button>
  </div>
  <div>
    <button type="button" class="btn btn-md btn-gray">Small button</button>
  </div>

  <div>
    <button type="button" class="btn btn-sm btn-maroon">X-small button</button>
  </div>
  <div>
    <button type="button" class="btn btn-sm btn-gold">X-small button</button>
  </div>
  <div>
    <button type="button" class="btn btn-sm btn-dark">X-small button</button>
  </div>
  <div>
    <button type="button" class="btn btn-sm btn-gray">X-small button</button>
  </div>

  <div>
    <button type="button" class="btn btn-tag btn-tag-alt-gray">Tag item</button>
  </div>
</div>
`
  )

  .add(
    'Button with icon',
    () => `<div class="container-fluid"><div class="col col-sm-12 p-3"><a href="#" class="btn btn-gold" role="button"><span class="fas fa-rocket"></span>&nbsp;&nbsp;Gold button</a>
<a href="#" class="btn btn-maroon" role="button" ><span class="fas fa-rocket"></span>&nbsp;&nbsp;Maroon button</a></div></div></div>`
  )

  /*.add('Active state', () => `<a href="#" class="btn btn-gold active" role="button" aria-pressed="true">Gold link</a>
<a href="#" class="btn btn-maroon active" role="button" aria-pressed="true">Link</a>`)*/

  .add(
    'Disabled state',
    () => `<div class="container-fluid"><div class="col col-sm-12 p-3"><button type="button" class="btn btn-gold" disabled>Gold button</button>
<button type="button" class="btn btn-maroon" disabled>Button</button><hr/><a href="#" class="btn btn-gold disabled" tabindex="-1" role="button" aria-disabled="true">Gold link</a>
<a href="#" class="btn btn-maroon disabled" tabindex="-1" role="button" aria-disabled="true">Link</a></div></div></div>`
  )

  .add(
    'Links',
    () => `<div class="container-fluid"><div class="row"><div class="col col-12 col-lg-4 bg-white p-3"><a href="#" class="">This is a default link</a></div>
<div class="col col-12 col-lg-4 bg-light p-3"><a href="#" class="">This is a default link</a></div>
<div class="col col-12 col-lg-4 bg-dark p-3"><a href="#" class="text-gold">This is a link on a dark background</a></div></div></div>`
  )

  .add(
    'Button tags',
    () => `<div class="container-fluid"><div class="row"><div class="col col-12 col-lg-4 bg-white p-3"><button type="button" class="btn btn-tag btn-tag-alt-white">Default tag</button></div>
<div class="col col-12 col-lg-4 bg-light p-3"><button type="button" class="btn btn-tag btn-tag-alt-gray">Tag alt gray</button></div>
<div class="col col-12 col-lg-4 bg-dark p-3"><button type="button" class="btn btn-tag btn-tag-alt-black">Tag alt black</button></div></div></div>`
  )

  .add('Icon-only buttons - Color and sizes', () => `
<div class="container-fluid">
  <div class="row">
    <div class="col col-12 col-lg-4 bg-white p-3">
      <button type="button" class="btn btn-circle btn-circle-x-large btn-circle-alt-gray">
        <i class="fas fa-times"></i>
        <span class="sr-only" >Close</span>
      </button>
      <button type="button" class="btn btn-circle btn-circle-large btn-circle-alt-gray">
        <i class="fas fa-times"></i>
        <span class="sr-only" >Close</span>
      </button>
      <button type="button" class="btn btn-circle btn-circle-alt-gray">
        <i class="fas fa-times"></i>
        <span class="sr-only" >Close</span>
      </button>
    </div>

        <div class="col col-12 col-lg-4 bg-white p-3">
      <button type="button" class="btn btn-circle btn-circle-x-large btn-circle-alt-white">
        <i class="fas fa-times"></i>
        <span class="sr-only" >Close</span>
      </button>
      <button type="button" class="btn btn-circle btn-circle-large btn-circle-alt-white">
        <i class="fas fa-times"></i>
        <span class="sr-only" >Close</span>
      </button>
      <button type="button" class="btn btn-circle btn-circle-alt-white">
        <i class="fas fa-times"></i>
        <span class="sr-only" >Close</span>
      </button>
    </div>
  </div>
</div>
`)


.add('Icon-only buttons - Color Combinations', () => `
<div class="container-fluid">
  <div class="row">
    <div class="col col-12 col-lg-4 bg-white p-3">
      <button type="button" class="btn btn-circle btn-circle-x-large btn-circle-alt-white">
        <i class="fas fa-times"></i>
        <span class="sr-only" >Close</span>
      </button>
      <button type="button" class="btn btn-circle btn-circle-large btn-circle-alt-white">
        <i class="fas fa-times"></i>
        <span class="sr-only" >Close</span>
      </button>
      <button type="button" class="btn btn-circle btn-circle-alt-white">
        <i class="fas fa-times"></i>
        <span class="sr-only" >Close</span>
      </button>
    </div>
    <div class="col col-12 col-lg-4 bg-light-gray p-3">
      <button type="button" class="btn btn-circle btn-circle-x-large btn-circle-alt-white">
        <i class="fas fa-times"></i>
        <span class="sr-only" >Close</span>
      </button>
      <button type="button" class="btn btn-circle btn-circle-large btn-circle-alt-white">
        <i class="fas fa-times"></i>
        <span class="sr-only" >Close</span>
      </button>
      <button type="button" class="btn btn-circle btn-circle-alt-white">
        <i class="fas fa-times"></i>
        <span class="sr-only" >Close</span>
      </button>
    </div>
    <div class="col col-12 col-lg-4 bg-light p-3">
      <button type="button" class="btn btn-circle btn-circle-x-large btn-circle-alt-gray">
        <i class="fas fa-times"></i>
        <span class="sr-only" >Close</span>
      </button>
      <button type="button" class="btn btn-circle btn-circle-large btn-circle-alt-gray">
        <i class="fas fa-times"></i>
        <span class="sr-only" >Close</span>
      </button>
      <button type="button" class="btn btn-circle btn-circle-alt-gray">
        <i class="fas fa-times"></i>
        <span class="sr-only" >Close</span>
      </button>
    </div>
    <div class="col col-12 col-lg-4 bg-dark p-3">
      <button type="button" class="btn btn-circle btn-circle-x-large btn-circle-alt-gray">
        <i class="fas fa-times"></i>
        <span class="sr-only" >Close</span>
      </button>
      <button type="button" class="btn btn-circle btn-circle-large btn-circle-alt-gray">
        <i class="fas fa-times"></i>
        <span class="sr-only" >Close</span>
      </button>
      <button type="button" class="btn btn-circle btn-circle-alt-gray">
        <i class="fas fa-times"></i>
        <span class="sr-only" >Close</span>
      </button>
    </div>
  </div>
</div>
`)

.add('Prev/next buttons', () => `
<div class="container-fluid">
  <div class="row">
    <div class="col col-12 col-lg-4 bg-white p-3">
      <button type="button" class="btn btn-circle btn-circle-alt-white btn-circle-large">
        <i class="fas fa-chevron-left"></i>
        <span class="sr-only" >Previous</span>
      </button>
      <button type="button" class="btn btn-circle btn-circle-alt-white btn-circle-large">
        <i class="fas fa-chevron-right"></i>
        <span class="sr-only" >Next</span>
      </button>
      </div>
    <div class="col col-12 col-lg-4 bg-light p-3">
      <button type="button" class="btn btn-circle btn-circle-alt-gray btn-circle-large">
        <i class="fas fa-chevron-left"></i>
        <span class="sr-only" >Previous</span>
      </button>
      <button type="button"
        class="btn btn-circle btn-circle-alt-gray btn-circle-large">
        <i class="fas fa-chevron-right"></i>
        <span class="sr-only" >Next</span>
      </button>
    </div>
    <div class="col col-12 col-lg-4 bg-dark p-3">
      <button type="button" class="btn btn-circle btn-circle-alt-black btn-circle-large">
        <i class="fas fa-chevron-left"></i>
        <span class="sr-only" >Previous</span>
      </button>
      <button type="button"
        class="btn btn-circle btn-circle-alt-black btn-circle-large">
        <i class="fas fa-chevron-right"></i>
        <span class="sr-only" >Next</span>
      </button>
    </div>
  </div>
</div>
`
  )

  .add('Focus Buttons And Links', () => {
    const testButtons = ()=> `
  <div>
    <button type="button" class="btn btn-gold">Gold</button>
  </div>
  <div>
    <button type="button" class="btn btn-maroon">Maroon</button>
  </div>
  <div>
    <button type="button" class="btn btn-link">Link</button>
  </div>
  <div>
    <button type="button" class="btn btn-light">Light</button>
  </div>
  <div>
    <button type="button" class="btn btn-dark">Dark</button>
  </div>
  <div>
    <button type="button" class="btn btn-success">Alert: Success</button>
  </div>
  <div>
    <button type="button" class="btn btn-danger">Alert: Danger</button>
  </div>
  <div>
    <button type="button" class="btn btn-warning">Alert: Warning</button>
  </div>
  <div>
    <button type="button" class="btn btn-info">Alert: Info</button>
  </div>`;

    const style = ()=>`
  <style>
    .button-list {
      display: flex;
      justify-content: space-evenly;
    }

    .x-col {
      display: flex;
      align-items: center;
      flex-direction: column;
      border: 1px solid;
      padding: 10px;
    }

    .x-col div {
      padding-top: 10px;
    }

    .x-col.col-left {
      background-color: #191919;
    }

    .x-col.col-center {
      background: linear-gradient(rgba(25, 25, 25, 0), rgba(25, 25, 25, 0.75));
    }

    .x-col.col-right {
      background-color: #fffff;
    }
  </style>`;

    return `
    ${style()}
    <div class="button-list">
        <div class="x-col col-left">${testButtons()}</div>
        <div class="x-col col-center">${testButtons()}</div>
        <div class="x-col col-right">${testButtons()}</div>
      </div>
 `;
});

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
