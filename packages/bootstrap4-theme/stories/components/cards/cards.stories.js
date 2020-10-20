import { document, console } from 'global';
import { storiesOf } from '@storybook/html';
import exampleImage from './example-image.jpg';

storiesOf('Components/Cards', module)
  .addParameters({
    happo: false,
  })

  .add('Default card', () => `
  <div class="container">
    <div class="row row-spaced pt-2 pb-2">
      <div class="col col-12 col-md-6 col-lg-4">

        <div class="card">
          <img class="card-img-top" src="${exampleImage}" alt="Card image cap">
          <div class="card-header">
            <h3 class="card-title">Card default title</h3>
          </div>
          <div class="card-body">
            <p class="card-text">Body copy goes here. Limit to 5 lines max. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua eiusmod tempo.
          </p>
          </div>
          <div class="card-event-details">
            <div class="card-event-icons">
              <div><i class="fas fa-map-marker-alt"></i></div>
              <div>Downtown Phoenix campus</div>
            </div>
          </div>
          <div class="card-button">
            <a href="#" class="btn btn-dark">Button link here</a>
          </div>
          <div class="card-button">
            <a href="#" class="btn btn-sm btn-dark">Button link here</a>
          </div>
          <div class="card-link">
            <a href="#" class="">Regular text link here</a>
          </div>
          <div class="card-tags">
            <a class="btn btn-tag btn-tag-alt-white" href="#" >test tag</a> <a class="btn btn-tag btn-tag-alt-white" href="#" >test tag 2</a> <a class="btn btn-tag btn-tag-alt-white" href="#" >test tag 3</a>
          </div>
        </div> <!-- .card -->

      </div> <!-- .col -->
    </div>
  </div>
  `)

  .add('Card images', () => `
  <div class="container">
    <div class="row row-spaced pt-2 pb-2">
      <div class="col col-12 col-md-6 col-lg-4">

        <div class="card">
          <img class="card-img-top" src="${exampleImage}" alt="Card image cap">
          <div class="card-header">
          </div>
        </div> <!-- .card -->

      </div> <!-- .col -->
    </div>
  </div>
  <hr/>
  <div class="container">
    <div class="row row-spaced pt-2 pb-2">
      <div class="col col-12 col-md-6 col-lg-4">

        <div class="card card-event">
          <img class="card-img-top" src="${exampleImage}" alt="Card image cap">
          <div class="card-header">
          </div>
        </div> <!-- .card -->

      </div> <!-- .col -->
    </div>
  </div>
  <hr/>
  <div class="container">
    <div class="row row-spaced pt-2 pb-2">
      <div class="col col-12 col-md-6 col-lg-4">

        <div class="card card-story">
          <img class="card-img-top" src="${exampleImage}" alt="Card image cap">
          <div class="card-header">
          </div>
        </div> <!-- .card -->

      </div> <!-- .col -->
    </div>
  </div>
  <hr/>
  <div class="container">
    <div class="row row-spaced pt-2 pb-2">
      <div class="col col-12 col-md-6 col-lg-4">

        <div class="card">
          <i class="fas fa-rocket fa-2x card-icon-top"></i>
          <div class="card-header">
          </div>
        </div> <!-- .card -->

      </div> <!-- .col -->
    </div>
  </div>
  `)

  .add('Card titles', () => `
  <div class="container">
    <div class="row row-spaced pt-2 pb-2">
      <div class="col col-12 col-md-6 col-lg-4">

        <div class="card">
          <div class="card-header">
            <h3 class="card-title">Card default title</h3>
          </div>
        </div> <!-- .card -->

      </div> <!-- .col -->
    </div>
  </div>

    <hr/>

    <div class="container">
      <div class="row row-spaced pt-2 pb-2">
        <div class="col col-12 col-md-6 col-lg-4">
          <div class="card card-degree">
            <div class="card-header">
              <h3 class="card-title">Card default title</h3>
            </div>
          </div> <!-- .card -->
        </div> <!-- .col -->

      </div>
    </div>
  `)

  .add('Card body', () => `
  <div class="container">
    <div class="row row-spaced pt-2 pb-2">
      <div class="col col-12 col-md-6 col-lg-4">

        <div class="card">
          <div class="card-header"></div>
          <div class="card-body">
            <p class="card-text">Body copy goes here. Limit to 5 lines max. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua eiusmod tempo.
            </p>
          </div>
        </div> <!-- .card -->

      </div> <!-- .col -->
    </div>
  </div>
  `)

  .add('Card dates, times, locations', () => `
  <div class="container">
    <div class="row row-spaced pt-2 pb-2">
      <div class="col col-12 col-md-6 col-lg-4">

        <div class="card">
          <div class="card-header"></div>
          <div class="card-event-details">
            <div class="card-event-icons">
              <div><i class="far fa-calendar"></i></div>
              <div>Wednesday, November 21st, 2021 11:30 a.m. - 12:30 p.m.</div>
            </div>
            <div class="card-event-icons">
              <div><i class="fas fa-map-marker-alt"></i></div>
              <div>Downtown Phoenix campus</div>
            </div>
          </div>
        </div> <!-- .card -->

      </div> <!-- .col -->
    </div>
  </div>
  <hr/>
  <div class="container">
  <div class="row row-spaced pt-2 pb-2">
    <div class="col col-12 col-md-6 col-lg-4">

      <div class="card">
        <div class="card-header"></div>
        <div class="card-event-details">
          <div class="card-event-icons">
            <div><i class="far fa-calendar"></i></div>
            <div>Wednesday, November 21st, 2021 11:30 a.m. - 12:30 p.m.</div>
          </div>
        </div>
        <div class="card-event-details">
          <div class="card-event-icons">
            <div><i class="fas fa-map-marker-alt"></i></div>
            <div>Downtown Phoenix campus</div>
          </div>
        </div>
      </div> <!-- .card -->

    </div> <!-- .col -->
  </div>
</div>
<hr/>
  <div class="container">
    <div class="row row-spaced pt-2 pb-2">
      <div class="col col-12 col-md-6 col-lg-4">

        <div class="card">
          <div class="card-header"></div>
          <div class="card-event-details">
            <div class="card-event-icons">
              <div><i class="far fa-calendar"></i></div>
              <div>Wednesday, November 21st, 2021 11:30 a.m. - 12:30 p.m.</div>
            </div>
          </div>
        </div> <!-- .card -->

      </div> <!-- .col -->
    </div>
  </div>
  <hr/>
    <div class="container">
      <div class="row row-spaced pt-2 pb-2">
        <div class="col col-12 col-md-6 col-lg-4">

          <div class="card">
            <div class="card-header"></div>
            <div class="card-event-details">
              <div class="card-event-icons">
                <div><i class="fas fa-map-marker-alt"></i></div>
                <div>Downtown Phoenix campus</div>
              </div>
            </div>
          </div> <!-- .card -->

        </div> <!-- .col -->
      </div>
    </div>
  `)

  .add('Card call to actions', () => `
  <div class="container">
    <div class="row row-spaced pt-2 pb-2">
      <div class="col col-12 col-md-6 col-lg-4">

        <div class="card">
          <div class="card-header"></div>
          <div class="card-button">
            <a href="#" class="btn btn-dark">Button link here</a>
          </div>
          <div class="card-button">
            <a href="#" class="btn btn-sm btn-dark">Button link here</a>
          </div>
          <div class="card-link">
            <a href="#" class="">Regular text link here</a>
          </div>
        </div> <!-- .card -->

      </div> <!-- .col -->
    </div>
  </div>
  `)

  .add('Card tags', () => `
  <div class="container">
    <div class="row row-spaced pt-2 pb-2">
      <div class="col col-12 col-md-6 col-lg-4">

        <div class="card">
          <div class="card-header"></div>
          <div class="card-tags">
            <a class="btn btn-tag btn-tag-alt-white" href="#" >test tag</a> <a class="btn btn-tag btn-tag-alt-white" href="#" >test tag 2</a> <a class="btn btn-tag btn-tag-alt-white" href="#" >test tag 3</a>
          </div>
        </div> <!-- .card -->

      </div> <!-- .col -->
    </div>
  </div>
  `)

  .add('Degree card', () => `
  <div class="container">
    <div class="row row-spaced pt-2 pb-2">
      <div class="col col-12 col-md-6 col-lg-4">

        <div class="card card-degree">
          <img class="card-img-top" src="${exampleImage}" alt="Card image cap">
          <div class="card-header">
            <h3 class="card-title">Card default title</h3>
          </div>
          <div class="card-body">
            <p class="card-text">Basic card with mixed content and a fixed width.  Cards have no margin and no fixed width by default (they’ll naturally fill the full width of its parent), so use 'spacing utilities'.</p>
          </div>
          <div class="card-button">
            <a href="#" class="btn btn-maroon">Button link here</a>
          </div>
          <div class="card-link">
            <a href="#" class="">Regular text link here</a>
          </div>
          <div class="card-tags">
            <a class="btn btn-tag btn-tag-alt-white" href="#" >test tag</a> <a class="btn btn-tag btn-tag-alt-white" href="#" >test tag 2</a> <a class="btn btn-tag btn-tag-alt-white" href="#" >test tag 3</a>
          </div>
        </div> <!-- .card -->

      </div> <!-- .col -->
    </div>
  </div>
  `)

  .add('Story card', () => `
  <div class="container">
    <div class="row row-spaced pt-2 pb-2">
      <div class="col col-12 col-md-6 col-lg-4">

        <div class="card card-story">
          <img class="card-img-top" src="${exampleImage}" alt="Card image cap">
          <div class="card-header">
            <h3 class="card-title">Card default title</h3>
          </div>
          <div class="card-body">
            <p class="card-text">Basic card with mixed content and a fixed width.  Cards have no margin and no fixed width by default (they’ll naturally fill the full width of its parent), so use 'spacing utilities'.</p>
          </div>
          <div class="card-button">
            <a href="#" class="btn btn-gold">Button link here</a>
          </div>
          <div class="card-link">
            <a href="#" class="">Regular text link here</a>
          </div>
          <div class="card-tags">
            <a class="btn btn-tag btn-tag-alt-white" href="#" >test tag</a> <a class="btn btn-tag btn-tag-alt-white" href="#" >test tag 2</a> <a class="btn btn-tag btn-tag-alt-white" href="#" >test tag 3</a>
          </div>
        </div> <!-- .card -->

      </div> <!-- .col -->
    </div>
  </div>
  `)

  .add('Event card', () => `
  <div class="container">
    <div class="row row-spaced pt-2 pb-2">
      <div class="col col-12 col-md-6 col-lg-4">

        <div class="card card-event">
          <img class="card-img-top" src="${exampleImage}" alt="Card image cap">
          <div class="card-header">
            <h3 class="card-title">Card default title</h3>
          </div>
          <div class="card-body">
            <p class="card-text">Basic card with mixed content and a fixed width.  Cards have no margin and no fixed width by default (they’ll naturally fill the full width of its parent), so use 'spacing utilities'.</p>
          </div>
          <div class="card-event-details">
            <div class="card-event-icons">
              <div><i class="far fa-calendar"></i></div>
              <div>Wednesday, November 21st, 2021 12:30 p.m.</div>
            </div>
            <div class="card-event-icons">
              <div><i class="fas fa-map-marker-alt"></i></div>
              <div>Downtown Phoenix campus</div>
            </div>
          </div>
          <div class="card-button">
            <a href="#" class="btn btn-dark">Button link here</a>
          </div>
          <div class="card-link">
            <a href="#" class="">Regular text link here</a>
          </div>
          <div class="card-tags">
            <a class="btn btn-tag btn-tag-alt-white" href="#" >test tag</a> <a class="btn btn-tag btn-tag-alt-white" href="#" >test tag 2</a> <a class="btn btn-tag btn-tag-alt-white" href="#" >test tag 3</a>
          </div>
        </div> <!-- .card -->

      </div> <!-- .col -->
    </div>
  </div>
  `)

  .add('Hover', () => `
  <div class="container">
    <div class="row row-spaced pt-2 pb-2">
      <div class="col col-12 col-md-6 col-lg-4">

        <div class="card card-hover">
          <button>
            <img class="card-img-top" src="${exampleImage}" alt="Card image cap">
            <div class="card-header">
              <h3 class="card-title">Card default title</h3>
            </div>
            <div class="card-body">
              <p class="card-text">Body copy goes here. Limit to 5 lines max. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua eiusmod tempo.</p>
            </div>
          </button>
        </div> <!-- .card -->

      </div> <!-- .col -->
    </div>
  </div>
  `)

  .add('Mobile card', () => `
  <div class="container">
    <div class="row row-spaced pt-2 pb-2">
      <div class="col col-12 col-md-6 col-lg-4">

        <div class="card card-sm">
          <img class="card-img-top" src="${exampleImage}" alt="Card image cap">
          <div class="card-header">
            <h3 class="card-title">Card default title</h3>
          </div>
          <div class="card-body">
            <p class="card-text">Body copy goes here. Limit to 5 lines max. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua eiusmod tempo.</p>
          </div>
          <div class="card-event-details">
            <div class="card-event-icons">
              <div><i class="fas fa-map-marker-alt"></i></div>
              <div>Downtown Phoenix campus</div>
            </div>
          </div>
          <div class="card-button">
            <a href="#" class="btn btn-sm btn-dark">Button link here</a>
          </div>
          <div class="card-link">
            <a href="#" class="">Regular text link here</a>
          </div>
        </div> <!-- .card -->

      </div> <!-- .col -->
    </div>
  </div>
  `)

  .add('Variations', () => `
  <div class="container">
    <div class="row row-spaced pt-2 pb-2">
      <div class="col col-12 col-lg-4">

        <div class="card">
          <img class="card-img-top" src="${exampleImage}" alt="Card image cap">
          <div class="card-header">
            <h3 class="card-title">Card default title</h3>
          </div>
          <div class="card-body">
            <p class="card-text">Body copy goes here. Limit to 5 lines max. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua eiusmod tempo.</p>
          </div>
          <div class="card-event-details">
            <div class="card-event-icons">
              <div><i class="fas fa-map-marker-alt"></i></div>
              <div>Downtown Phoenix campus</div>
            </div>
          </div>
          <div class="card-button">
            <a href="#" class="btn btn-dark">Button link here</a>
          </div>
          <div class="card-button">
            <a href="#" class="btn btn-sm btn-dark">Button link here</a>
          </div>
          <div class="card-link">
            <a href="#" class="">Regular text link here</a>
          </div>
          <div class="card-tags">
            <a class="btn btn-tag btn-tag-alt-white" href="#" >test tag</a> <a class="btn btn-tag btn-tag-alt-white" href="#" >test tag 2</a> <a class="btn btn-tag btn-tag-alt-white" href="#" >test tag 3</a>
          </div>
        </div> <!-- .card -->

      </div> <!-- .col -->
      <div class="col col-12 col-lg-4">

        <div class="card">
          <div class="card-header">
            <h3 class="card-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit</h3>
          </div>
          <div class="card-body">
            <p class="card-text">Body copy goes here. Limit to 5 lines max. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua eiusmod tempo.</p>
          </div>
          <div class="card-event-details">
            <div class="card-event-icons">
              <div><i class="fas fa-map-marker-alt"></i></div>
              <div>Downtown Phoenix campus</div>
            </div>
          </div>
          <div class="card-link">
            <a href="#" class="">Regular text link here</a>
          </div>
          <div class="card-tags">
            <a class="btn btn-tag btn-tag-alt-white" href="#" >test tag</a> <a class="btn btn-tag btn-tag-alt-white" href="#" >test tag 2</a> <a class="btn btn-tag btn-tag-alt-white" href="#" >test tag 3</a>
          </div>
        </div> <!-- .card -->

      </div> <!-- .col -->
      <div class="col col-12 col-lg-4">

        <div class="card">
          <img class="card-img-top" src="${exampleImage}" alt="Card image cap">
          <div class="card-header">
            <h3 class="card-title">Card default title</h3>
          </div>
          <div class="card-event-details">
            <div class="card-event-icons">
              <div><i class="fas fa-map-marker-alt"></i></div>
              <div>Downtown Phoenix campus</div>
            </div>
          </div>
          <div class="card-button">
            <a href="#" class="btn btn-dark">Button link here</a>
          </div>
          <div class="card-tags">
            <a class="btn btn-tag btn-tag-alt-white" href="#" >test tag</a> <a class="btn btn-tag btn-tag-alt-white" href="#" >test tag 2</a> <a class="btn btn-tag btn-tag-alt-white" href="#" >test tag 3</a>
          </div>
        </div> <!-- .card -->

      </div> <!-- .col -->
    </div>
  </div>
  <div class="container">
    <div class="row row-spaced pt-2 pb-2">
      <div class="col col-12 col-lg-4">

        <div class="card">
          <img class="card-img-top" src="${exampleImage}" alt="Card image cap">
          <div class="card-header">
            <h3 class="card-title">Card default title</h3>
          </div>
          <div class="card-body">
            <p class="card-text">Body copy goes here. Limit to 5 lines max. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua eiusmod tempo.</p>
          </div>
          <div class="card-button">
            <a href="#" class="btn btn-dark">Button link here</a>
          </div>
        </div> <!-- .card -->

      </div> <!-- .col -->
      <div class="col col-12 col-lg-4">

        <div class="card">
          <div class="card-header">
            <h3 class="card-title">Card default title</h3>
          </div>
          <div class="card-body">
            <p class="card-text">Body copy goes here. Limit to 5 lines max. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua eiusmod tempo.</p>
          </div>
          <div class="card-event-details">
            <div class="card-event-icons">
              <div><i class="fas fa-map-marker-alt"></i></div>
              <div>Downtown Phoenix campus</div>
            </div>
          </div>
          <div class="card-button">
            <a href="#" class="btn btn-dark">Button link here</a>
          </div>
          <div class="card-link">
            <a href="#" class="">Regular text link here</a>
          </div>
        </div> <!-- .card -->

      </div> <!-- .col -->
      <div class="col col-12 col-lg-4">

        <div class="card">
          <div class="card-header">
            <h3 class="card-title">Card default title</h3>
          </div>
          <div class="card-body">
            <p class="card-text">Body copy goes here. Limit to 5 lines max. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua eiusmod tempo.
          </p>
          </div>
          <div class="card-event-details">
            <div class="card-event-icons">
              <div><i class="fas fa-map-marker-alt"></i></div>
              <div>Downtown Phoenix campus</div>
            </div>
          </div>
          <div class="card-link">
            <a href="#" class="">Regular text link here</a>
          </div>
          <div class="card-tags">
            <a class="btn btn-tag btn-tag-alt-white" href="#" >test tag</a> <a class="btn btn-tag btn-tag-alt-white" href="#" >test tag 2</a> <a class="btn btn-tag btn-tag-alt-white" href="#" >test tag 3</a>
          </div>
        </div> <!-- .card -->

      </div> <!-- .col -->
    </div>
  </div>
  <div class="container">
    <div class="row row-spaced pt-2 pb-2">
      <div class="col col-12 col-lg-4">

        <div class="card">
          <img class="card-img-top" src="${exampleImage}" alt="Card image cap">
          <div class="card-header">
            <h3 class="card-title">Card default title</h3>
          </div>
          <div class="card-body">
            <p class="card-text">Body copy goes here. Limit to 5 lines max. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua eiusmod tempo.</p>
          </div>
          <div class="card-event-details">
            <div class="card-event-icons">
              <div><i class="fas fa-map-marker-alt"></i></div>
              <div>Downtown Phoenix campus</div>
            </div>
          </div>
          <div class="card-link">
            <a href="#" class="">Regular text link here</a>
          </div>
        </div> <!-- .card -->

      </div> <!-- .col -->
      <div class="col col-12 col-lg-4">

      <div class="card">
        <i class="fas fa-rocket fa-2x card-icon-top"></i>
        <div class="card-header">
          <h3 class="card-title">Card default title</h3>
        </div>
        <div class="card-body">
          <p class="card-text">Body copy goes here. Limit to 5 lines max. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua eiusmod tempo.
        </p>
        </div>
        <div class="card-button">
          <a href="#" class="btn btn-dark">Button link here</a>
        </div>
      </div> <!-- .card -->

    </div> <!-- .col -->
    <div class="col col-12 col-lg-4">

      <div class="card card-centered">
        <i class="fas fa-rocket fa-2x card-icon-top"></i>
        <div class="card-header">
          <h3 class="card-title">Card default title</h3>
        </div>
        <div class="card-button">
          <a href="#" class="btn btn-dark">Button link here</a>
        </div>
      </div> <!-- .card -->

      </div> <!-- .col -->
    </div>
  </div>
  `)

  .add('4 column', () => `
  <div class="container">
    <div class="row row-spaced pt-2 pb-2">
      <div class="col col-md-6 col-lg-3 col-12">

        <div class="card card-sm">
          <img class="card-img-top" src="${exampleImage}" alt="Card image cap">
          <div class="card-header">
            <h3 class="card-title">Card default title</h3>
          </div>
          <div class="card-body">
            <p class="card-text">Body copy goes here. Limit to 5 lines max. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua eiusmod tempo.</p>
          </div>
          <div class="card-button">
            <a href="#" class="btn btn-dark btn-sm">Button link here</a>
          </div>
        </div> <!-- .card -->

      </div> <!-- .col -->
      <div class="col col-md-6 col-lg-3 col-12">

        <div class="card card-sm">
          <img class="card-img-top" src="${exampleImage}" alt="Card image cap">
          <div class="card-header">
            <h3 class="card-title">Card default title</h3>
          </div>
          <div class="card-body">
            <p class="card-text">Body copy goes here. Limit to 5 lines max. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua eiusmod tempo.</p>
          </div>
          <div class="card-button">
            <a href="#" class="btn btn-dark btn-sm">Button link here</a>
          </div>
        </div> <!-- .card -->

      </div> <!-- .col -->
      <div class="col col-md-6 col-lg-3 col-12">

        <div class="card card-sm">
          <img class="card-img-top" src="${exampleImage}" alt="Card image cap">
          <div class="card-header">
            <h3 class="card-title">Card default title</h3>
          </div>
          <div class="card-button">
            <a href="#" class="btn btn-dark btn-sm">Button link here</a>
          </div>
        </div> <!-- .card -->

      </div> <!-- .col -->
      <div class="col col-md-6 col-lg-3 col-12">

        <div class="card card-sm">
          <div class="card-header">
            <h3 class="card-title">Card default title</h3>
          </div>
          <div class="card-body">
            <p class="card-text">Body copy goes here. Limit to 5 lines max. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua eiusmod tempo.</p>
          </div>
          <div class="card-button">
            <a href="#" class="btn btn-dark btn-sm">Button link here</a>
          </div>
        </div> <!-- .card -->

      </div> <!-- .col -->
      <div class="col col-md-6 col-lg-3 col-12">

        <div class="card card-sm">
          <img class="card-img-top" src="${exampleImage}" alt="Card image cap">
          <div class="card-header">
            <h3 class="card-title">Card default title</h3>
          </div>
          <div class="card-body">
            <p class="card-text">Body copy goes here. Limit to 5 lines max. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua eiusmod tempo.</p>
          </div>
          <div class="card-button">
            <a href="#" class="btn btn-dark btn-sm">Button link here</a>
          </div>
        </div> <!-- .card -->

      </div> <!-- .col -->
      <div class="col col-md-6 col-lg-3 col-12">

        <div class="card card-sm">
          <img class="card-img-top" src="${exampleImage}" alt="Card image cap">
          <div class="card-header">
            <h3 class="card-title">Card default title</h3>
          </div>
          <div class="card-body">
            <p class="card-text">Body copy goes here. Limit to 5 lines max. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua eiusmod tempo.</p>
          </div>
          <div class="card-button">
            <a href="#" class="btn btn-dark btn-sm">Button link here</a>
          </div>
        </div> <!-- .card -->

      </div> <!-- .col -->
      <div class="col col-md-6 col-lg-3 col-12">

        <div class="card card-sm">
          <img class="card-img-top" src="${exampleImage}" alt="Card image cap">
          <div class="card-header">
            <h3 class="card-title">Card default title</h3>
          </div>
          <div class="card-button">
            <a href="#" class="btn btn-dark btn-sm">Button link here</a>
          </div>
        </div> <!-- .card -->

      </div> <!-- .col -->
      <div class="col col-md-6 col-lg-3 col-12">

        <div class="card card-sm">
          <div class="card-header">
            <h3 class="card-title">Card default title</h3>
          </div>
          <div class="card-body">
            <p class="card-text">Body copy goes here. Limit to 5 lines max. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua eiusmod tempo.</p>
          </div>
          <div class="card-button">
            <a href="#" class="btn btn-dark btn-sm">Button link here</a>
          </div>
        </div> <!-- .card -->

      </div> <!-- .col -->
    </div>
  </div>
  `)

  .add('3 column', () => `
  <div class="container">
    <div class="row row-spaced pt-2 pb-2">
      <div class="col col-12 col-lg-4">

        <div class="card">
          <img class="card-img-top" src="${exampleImage}" alt="Card image cap">
          <div class="card-header">
            <h3 class="card-title">Card default title</h3>
          </div>
          <div class="card-body">
            <p class="card-text">Body copy goes here. Limit to 5 lines max. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua eiusmod tempo.
          </p>
          </div>
          <div class="card-button">
            <a href="#" class="btn btn-dark">Button link here</a>
          </div>
        </div> <!-- .card -->

      </div> <!-- .col -->
      <div class="col col-12 col-lg-4">

        <div class="card">
          <img class="card-img-top" src="${exampleImage}" alt="Card image cap">
          <div class="card-header">
            <h3 class="card-title">Card default title</h3>
          </div>
          <div class="card-body">
            <p class="card-text">Body copy goes here. Limit to 5 lines max. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua eiusmod tempo.
          </p>
          </div>
          <div class="card-button">
            <a href="#" class="btn btn-dark">Button link here</a>
          </div>
        </div> <!-- .card -->

      </div> <!-- .col -->
      <div class="col col-12 col-lg-4">

        <div class="card">
          <img class="card-img-top" src="${exampleImage}" alt="Card image cap">
          <div class="card-header">
            <h3 class="card-title">Card default title</h3>
          </div>
          <div class="card-button">
            <a href="#" class="btn btn-dark">Button link here</a>
          </div>
        </div> <!-- .card -->

      </div> <!-- .col -->
    </div>
  </div>
  `)

  .add('2 column', () => `
  <div class="container">
    <div class="row row-spaced pt-2 pb-2">
      <div class="col col-12 col-md-12 col-lg-6">

        <div class="card">
          <img class="card-img-top" src="${exampleImage}" alt="Card image cap">
          <div class="card-header">
            <h3 class="card-title">Card default title</h3>
          </div>
          <div class="card-body">
            <p class="card-text">Body copy goes here. Limit to 5 lines max. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua eiusmod tempo.
          </p>
          </div>
          <div class="card-button">
            <a href="#" class="btn btn-dark">Button link here</a>
          </div>
        </div> <!-- .card -->

      </div> <!-- .col -->
      <div class="col col-12 col-md-12 col-lg-6">

        <div class="card">
          <img class="card-img-top" src="${exampleImage}" alt="Card image cap">
          <div class="card-header">
            <h3 class="card-title">Card default title</h3>
          </div>
          <div class="card-body">
            <p class="card-text">Body copy goes here. Limit to 5 lines max. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua eiusmod tempo.
          </p>
          </div>
          <div class="card-button">
            <a href="#" class="btn btn-dark">Button link here</a>
          </div>
        </div> <!-- .card -->

      </div> <!-- .col -->
    </div>
  </div>
  `)

.add('Horizontal cards', () => `

<div class="container">
  <div class="row row-spaced pt-2 pb-2">
    <div class="col col-12 col-md-12 col-lg-6">

      <div class="card card-horizontal">
        <img class="card-img-top" src="${exampleImage}" alt="Card image cap">
        <div class="card-content-wrapper">
          <div class="card-header">
            <h3 class="card-title">Card default title</h3>
          </div>
          <div class="card-body">
            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut aliqua eiusmod tempo.</p>
          </div>
          <div class="card-link">
            <a href="#" class="">Regular text link here</a>
          </div>
          <div class="card-tags">
            <a class="btn btn-tag btn-tag-alt-white" href="#" >test tag</a> <a class="btn btn-tag btn-tag-alt-white" href="#" >test tag 2</a> <a class="btn btn-tag btn-tag-alt-white" href="#" >test tag 3</a>
          </div>
        </div>
      </div> <!-- .card -->

    </div> <!-- .col -->
    <div class="col col-12 col-md-12 col-lg-6">

      <div class="card card-horizontal">
        <img class="card-img-top" src="${exampleImage}" alt="Card image cap">
        <div class="card-content-wrapper">
          <div class="card-header">
            <h3 class="card-title">Card default title</h3>
          </div>
          <div class="card-body">
            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua eiusmod tempo.</p>
          </div>
          <div class="card-button">
            <a href="#" class="btn btn-dark">Button link here</a>
          </div>
        </div>
      </div> <!-- .card -->

    </div> <!-- .col -->
  </div>
</div>
<hr/>
<div class="container">
  <div class="row row-spaced pt-2 pb-2">
    <div class="col col-12 col-md-12 col-lg-6">

      <div class="card card-degree card-horizontal">
        <img class="card-img-top" src="${exampleImage}" alt="Card image cap">
        <div class="card-content-wrapper">
          <div class="card-header">
            <h3 class="card-title">Card default title</h3>
          </div>
          <div class="card-body">
            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut aliqua eiusmod tempo.</p>
          </div>
          <div class="card-link">
            <a href="#" class="">Regular text link here</a>
          </div>
          <div class="card-tags">
            <a class="btn btn-tag btn-tag-alt-white" href="#" >test tag</a> <a class="btn btn-tag btn-tag-alt-white" href="#" >test tag 2</a> <a class="btn btn-tag btn-tag-alt-white" href="#" >test tag 3</a>
          </div>
        </div>
      </div> <!-- .card -->

    </div> <!-- .col -->
    <div class="col col-12 col-md-12 col-lg-6">

      <div class="card card-degree card-horizontal">
        <img class="card-img-top" src="${exampleImage}" alt="Card image cap">
        <div class="card-content-wrapper">
          <div class="card-header">
            <h3 class="card-title">Card default title</h3>
          </div>
          <div class="card-body">
            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua eiusmod tempo.</p>
          </div>
          <div class="card-button">
            <a href="#" class="btn btn-dark">Button link here</a>
          </div>
        </div>
      </div> <!-- .card -->

    </div> <!-- .col -->
  </div>
</div>
<hr/>
<div class="container">
  <div class="row row-spaced pt-2 pb-2">
    <div class="col col-12 col-md-12 col-lg-6">

      <div class="card card-event card-horizontal">
        <img class="card-img-top" src="${exampleImage}" alt="Card image cap">
        <div class="card-content-wrapper">
          <div class="card-header">
            <h3 class="card-title">Card default title</h3>
          </div>
          <div class="card-event-details">
            <div class="card-event-icons">
              <div><i class="far fa-calendar"></i></div>
              <div>Wednesday, November 21st, 2021 12:30 p.m.</div>
            </div>
            <div class="card-event-icons">
              <div><i class="fas fa-map-marker-alt"></i></div>
              <div>Downtown Phoenix campus</div>
            </div>
          </div>
          <div class="card-button">
            <a href="#" class="btn btn-dark">Button link here</a>
          </div>
        </div>
      </div> <!-- .card -->

    </div> <!-- .col -->
    <div class="col col-12 col-md-12 col-lg-6">

      <div class="card card-event card-horizontal">
        <img class="card-img-top" src="${exampleImage}" alt="Card image cap">
        <div class="card-content-wrapper">
          <div class="card-header">
            <h3 class="card-title">Card default title</h3>
          </div>
          <div class="card-event-details">
            <div class="card-event-icons">
              <div><i class="far fa-calendar"></i></div>
              <div>Wednesday, November 21st, 2021 12:30 p.m.</div>
            </div>
            <div class="card-event-icons">
              <div><i class="fas fa-map-marker-alt"></i></div>
              <div>Downtown Phoenix campus</div>
            </div>
          </div>
        </div>
      </div> <!-- .card -->

    </div> <!-- .col -->
  </div>
</div>
<hr/>
<div class="container">
  <div class="row row-spaced pt-2 pb-2">
    <div class="col col-12 col-md-12 col-lg-6">

      <div class="card card-story card-horizontal">
        <img class="card-img-top" src="${exampleImage}" alt="Card image cap">
        <div class="card-content-wrapper">
          <div class="card-header">
            <h3 class="card-title">Card default title</h3>
          </div>
          <div class="card-body">
            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut aliqua eiusmod tempo.</p>
          </div>
          <div class="card-link">
            <a href="#" class="">Regular text link here</a>
          </div>
          <div class="card-tags">
            <a class="btn btn-tag btn-tag-alt-white" href="#" >test tag</a> <a class="btn btn-tag btn-tag-alt-white" href="#" >test tag 2</a> <a class="btn btn-tag btn-tag-alt-white" href="#" >test tag 3</a>
          </div>
        </div>
      </div> <!-- .card -->

    </div> <!-- .col -->
    <div class="col col-12 col-md-12 col-lg-6">
      <div class="card card-story card-horizontal">
        <img class="card-img-top" src="${exampleImage}" alt="Card image cap">
        <div class="card-content-wrapper">
          <div class="card-header">
            <h3 class="card-title">Card default title</h3>
          </div>
          <div class="card-body">
            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua eiusmod tempo.</p>
          </div>
          <div class="card-button">
            <a href="#" class="btn btn-dark">Button link here</a>
          </div>
        </div>
      </div> <!-- .card -->

    </div> <!-- .col -->
  </div>
</div>
<hr/>
`)

.add('Sizing using utilities', () => `
<div class="card w-75">
  <img class="card-img-top" src="${exampleImage}" alt="Card image cap">
  <div class="card-header">
    <h3 class="card-title">Card default title</h3>
  </div>
  <div class="card-body">
    <p class="card-text">Body copy goes here. Limit to 5 lines max. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua eiusmod tempo.</p>
  </div>
  <div class="card-button">
    <a href="#" class="btn btn-dark">Button link here</a>
  </div>
</div>

<hr />

<div class="card w-50">
  <img class="card-img-top" src="${exampleImage}" alt="Card image cap">
  <div class="card-header">
    <h3 class="card-title">Card default title</h3>
  </div>
  <div class="card-body">
    <p class="card-text">Body copy goes here. Limit to 5 lines max. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua eiusmod tempo.</p>
  </div>
  <div class="card-button">
    <a href="#" class="btn btn-dark">Button link here</a>
  </div>
</div>
`)

;
