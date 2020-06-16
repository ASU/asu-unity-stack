import { document, console } from 'global';
import { storiesOf } from '@storybook/html';
import exampleImage from '../cards-basic/example-image.jpg';

storiesOf('Components/Cards - story', module)
  .addParameters({
    happo: false,
  })

  .add('Story card', () => `
  <div class="container-fluid">
    <div class="row">
      <div class="col col-sm-4 p-3">
        <div class="card card-story">
          <img class="card-img-top" src="${exampleImage}" alt="Card image cap">
          <div class="card-header">
            <h3 class="card-title">Card default title</h3>
          </div>
          <div class="card-body">
            <p class="card-text">Basic card with mixed content and a fixed width.  Cards have no margin and no fixed width by default (they’ll naturally fill the full width of its parent), so use 'spacing utilities'.
          </p>
            <a href="#" class="btn btn-dark">Button link here</a>
          </div>
        </div> <!-- .card -->
      </div> <!-- .col -->
    </div>
  `)
  .add('Hover', () => `
  <div class="container-fluid">
    <div class="row">
      <div class="col col-sm-4 p-3">
        <div class="card card-story card-hover">
          <img class="card-img-top" src="${exampleImage}" alt="Card image cap">
          <div class="card-header">
            <h3 class="card-title">Card default title</h3>
          </div>
          <div class="card-body">
            <p class="card-text">Basic card with mixed content and a fixed width.  Cards have no margin and no fixed width by default (they’ll naturally fill the full width of its parent), so use 'spacing utilities'.
          </p>
          </div>
        </div> <!-- .card -->
      </div> <!-- .col -->
    </div>
  `)
  .add('Variations', () => `
  <div class="container-fluid">
    <div class="row">
      <div class="col col-sm-4 p-3">
        <div class="card card-story">
          <img class="card-img-top" src="${exampleImage}" alt="Card image cap">
          <div class="card-header">
            <h3 class="card-title">Card default title</h3>
          </div>
          <div class="card-body">
            <p class="card-text">Basic card with mixed content and a fixed width.  Cards have no margin and no fixed width by default (they’ll naturally fill the full width of its parent), so use 'spacing utilities'.
          </p>
            <a href="#" class="btn btn-dark">Button link here</a>
          </div>
        </div> <!-- .card -->
      </div> <!-- .col -->
      <div class="col col-sm-4 p-3">
        <div class="card card-story">
          <img class="card-img-top" src="${exampleImage}" alt="Card image cap">
          <div class="card-header">
            <h3 class="card-title">Card default title</h3>
          </div>
          <div class="card-body">
            <p class="card-text">Basic card with mixed content and a fixed width.  Cards have no margin and no fixed width by default (they’ll naturally fill the full width of its parent), so use 'spacing utilities'.
          </p>
          </div>
        </div> <!-- .card -->
      </div> <!-- .col -->
      <div class="col col-sm-4 p-3">
        <div class="card card-story">
          <img class="card-img-top" src="${exampleImage}" alt="Card image cap">
          <div class="card-header">
            <h3 class="card-title">Card default title</h3>
          </div>
          <div class="card-body">
            <a href="#" class="btn btn-dark">Button link here</a>
          </div>
        </div> <!-- .card -->
      </div> <!-- .col -->
    </div>
  </div>


  `)

  .add('4 column', () => `
  <div class="container-fluid">
    <div class="row">
      <div class="col col-sm-3 p-3">
        <div class="card card-story card-sm">
          <img class="card-img-top" src="${exampleImage}" alt="Card image cap">
          <div class="card-header">
            <h3 class="card-title">Card default title</h3>
          </div>
          <div class="card-body">
            <p class="card-text">Basic card with mixed content and a fixed width.  Cards have no margin and no fixed width by default (they’ll naturally fill the full width of its parent), so use 'spacing utilities'.
          </p>
            <a href="#" class="btn btn-sm btn-dark">Button link here</a>
          </div>
        </div> <!-- .card -->
      </div> <!-- .col -->
      <div class="col col-sm-3 p-3">
        <div class="card card-story card-sm">
          <img class="card-img-top" src="${exampleImage}" alt="Card image cap">
          <div class="card-header">
            <h3 class="card-title">Card default title</h3>
          </div>
          <div class="card-body">
            <p class="card-text">Basic card with mixed content and a fixed width.  Cards have no margin and no fixed width by default (they’ll naturally fill the full width of its parent), so use 'spacing utilities'.
          </p>
            <a href="#" class="btn btn-sm btn-dark">Button link here</a>
          </div>
        </div> <!-- .card -->
      </div> <!-- .col -->
      <div class="col col-sm-3 p-3">
        <div class="card card-story card-sm">
          <img class="card-img-top" src="${exampleImage}" alt="Card image cap">
          <div class="card-header">
            <h3 class="card-title">Card default title</h3>
          </div>
          <div class="card-body">
            <p class="card-text">Basic card with mixed content and a fixed width.  Cards have no margin and no fixed width by default (they’ll naturally fill the full width of its parent), so use 'spacing utilities'.
          </p>
            <a href="#" class="btn btn-sm btn-dark">Button link here</a>
          </div>
        </div> <!-- .card -->
      </div> <!-- .col -->
      <div class="col col-sm-3 p-3">
        <div class="card card-story card-sm">
          <img class="card-img-top" src="${exampleImage}" alt="Card image cap">
          <div class="card-header">
            <h3 class="card-title">Card default title</h3>
          </div>
          <div class="card-body">
            <p class="card-text">Basic card with mixed content and a fixed width.  Cards have no margin and no fixed width by default (they’ll naturally fill the full width of its parent), so use 'spacing utilities'.
          </p>
            <a href="#" class="btn btn-sm btn-dark">Button link here</a>
          </div>
        </div> <!-- .card -->
      </div> <!-- .col -->
    </div>
  </div>

  `)

  .add('3 column', () => `
  <div class="container-fluid">
    <div class="row">
      <div class="col col-sm-4 p-3">
        <div class="card card-story">
          <img class="card-img-top" src="${exampleImage}" alt="Card image cap">
          <div class="card-header">
            <h3 class="card-title">Card default title</h3>
          </div>
          <div class="card-body">
            <p class="card-text">Basic card with mixed content and a fixed width.  Cards have no margin and no fixed width by default (they’ll naturally fill the full width of its parent), so use 'spacing utilities'.
          </p>
            <a href="#" class="btn btn-dark">Button link here</a>
          </div>
        </div> <!-- .card -->
      </div> <!-- .col -->
      <div class="col col-sm-4 p-3">
        <div class="card card-story">
          <img class="card-img-top" src="${exampleImage}" alt="Card image cap">
          <div class="card-header">
            <h3 class="card-title">Card default title</h3>
          </div>
          <div class="card-body">
            <p class="card-text">Basic card with mixed content and a fixed width.  Cards have no margin and no fixed width by default (they’ll naturally fill the full width of its parent), so use 'spacing utilities'.
          </p>
            <a href="#" class="btn btn-dark">Button link here</a>
          </div>
        </div> <!-- .card -->
      </div> <!-- .col -->
      <div class="col col-sm-4 p-3">
        <div class="card card-story">
          <img class="card-img-top" src="${exampleImage}" alt="Card image cap">
          <div class="card-header">
            <h3 class="card-title">Card default title</h3>
          </div>
          <div class="card-body">
            <p class="card-text">Basic card with mixed content and a fixed width.  Cards have no margin and no fixed width by default (they’ll naturally fill the full width of its parent), so use 'spacing utilities'.
          </p>
            <a href="#" class="btn btn-dark">Button link here</a>
          </div>
        </div> <!-- .card -->
      </div> <!-- .col -->
    </div>
  </div>
  `)

;
