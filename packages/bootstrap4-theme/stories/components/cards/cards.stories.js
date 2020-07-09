import { document, console } from 'global';
import { storiesOf } from '@storybook/html';
import exampleImage from './example-image.jpg';

storiesOf('Components/Cards', module)
  .addParameters({
    happo: false,
  })

  .add('Default card', () => `
  <div class="container">
    <div class="row pt-2 pb-2">
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
  `)

  .add('Card images', () => `
  <div class="container">
    <div class="row pt-2 pb-2">
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
    <div class="row pt-2 pb-2">
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
    <div class="row pt-2 pb-2">
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
    <div class="row pt-2 pb-2">
      <div class="col col-12 col-md-6 col-lg-4">
        <div class="card">
          <img class="card-icon-top" src="data:image/svg+xml;charset=UTF-8,<svg aria-hidden='true' focusable='false' data-prefix='fas' data-icon='rocket' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' class='svg-inline--fa fa-rocket fa-w-16 fa-2x'><path fill='currentColor' d='M505.12019,19.09375c-1.18945-5.53125-6.65819-11-12.207-12.1875C460.716,0,435.507,0,410.40747,0,307.17523,0,245.26909,55.20312,199.05238,128H94.83772c-16.34763.01562-35.55658,11.875-42.88664,26.48438L2.51562,253.29688A28.4,28.4,0,0,0,0,264a24.00867,24.00867,0,0,0,24.00582,24H127.81618l-22.47457,22.46875c-11.36521,11.36133-12.99607,32.25781,0,45.25L156.24582,406.625c11.15623,11.1875,32.15619,13.15625,45.27726,0l22.47457-22.46875V488a24.00867,24.00867,0,0,0,24.00581,24,28.55934,28.55934,0,0,0,10.707-2.51562l98.72834-49.39063c14.62888-7.29687,26.50776-26.5,26.50776-42.85937V312.79688c72.59753-46.3125,128.03493-108.40626,128.03493-211.09376C512.07526,76.5,512.07526,51.29688,505.12019,19.09375ZM384.04033,168A40,40,0,1,1,424.05,128,40.02322,40.02322,0,0,1,384.04033,168Z' class=''></path></svg>" alt="Card image cap">
          <div class="card-header">
          </div>
        </div> <!-- .card -->
      </div> <!-- .col -->

    </div>
  </div>
  <hr/>

  <div class="container">
    <div class="row pt-2 pb-2">
      <div class="col col-12 col-md-6 col-lg-4">
        <div class="card card-centered">
          <img class="card-icon-top" src="data:image/svg+xml;charset=UTF-8,<svg aria-hidden='true' focusable='false' data-prefix='fas' data-icon='rocket' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' class='svg-inline--fa fa-rocket fa-w-16 fa-2x'><path fill='currentColor' d='M505.12019,19.09375c-1.18945-5.53125-6.65819-11-12.207-12.1875C460.716,0,435.507,0,410.40747,0,307.17523,0,245.26909,55.20312,199.05238,128H94.83772c-16.34763.01562-35.55658,11.875-42.88664,26.48438L2.51562,253.29688A28.4,28.4,0,0,0,0,264a24.00867,24.00867,0,0,0,24.00582,24H127.81618l-22.47457,22.46875c-11.36521,11.36133-12.99607,32.25781,0,45.25L156.24582,406.625c11.15623,11.1875,32.15619,13.15625,45.27726,0l22.47457-22.46875V488a24.00867,24.00867,0,0,0,24.00581,24,28.55934,28.55934,0,0,0,10.707-2.51562l98.72834-49.39063c14.62888-7.29687,26.50776-26.5,26.50776-42.85937V312.79688c72.59753-46.3125,128.03493-108.40626,128.03493-211.09376C512.07526,76.5,512.07526,51.29688,505.12019,19.09375ZM384.04033,168A40,40,0,1,1,424.05,128,40.02322,40.02322,0,0,1,384.04033,168Z' class=''></path></svg>" alt="Card image cap">
          <div class="card-header">
          </div>
        </div> <!-- .card -->
      </div> <!-- .col -->

    </div>
  </div>
  `)

  .add('Card titles', () => `
  <div class="container">
    <div class="row pt-2 pb-2">
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
      <div class="row pt-2 pb-2">
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
    <div class="row pt-2 pb-2">
      <div class="col col-12 col-md-6 col-lg-4">
        <div class="card">
        <div class="card-header">
        </div>
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
    <div class="row pt-2 pb-2">
      <div class="col col-12 col-md-6 col-lg-4">
        <div class="card">
          <div class="card-header">
          </div>
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
  <div class="row pt-2 pb-2">
    <div class="col col-12 col-md-6 col-lg-4">
      <div class="card">
        <div class="card-header">
        </div>
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
    <div class="row pt-2 pb-2">
      <div class="col col-12 col-md-6 col-lg-4">
        <div class="card">
          <div class="card-header">
          </div>
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
      <div class="row pt-2 pb-2">
        <div class="col col-12 col-md-6 col-lg-4">
          <div class="card">
            <div class="card-header">
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
  `)

  .add('Card call to actions', () => `
  <div class="container">
    <div class="row pt-2 pb-2">
      <div class="col col-12 col-md-6 col-lg-4">
        <div class="card">
        <div class="card-header">
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
        </div> <!-- .card -->
      </div> <!-- .col -->

    </div>
  </div>

  `)
  .add('Card tags', () => `
  <div class="container">
    <div class="row pt-2 pb-2">
      <div class="col col-12 col-md-6 col-lg-4">
        <div class="card">
        <div class="card-header">
        </div>
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
    <div class="row pt-2 pb-2">
      <div class="col col-12 col-md-6 col-lg-4">
        <div class="card card-degree">
          <img class="card-img-top" src="${exampleImage}" alt="Card image cap">
          <div class="card-header">
            <h3 class="card-title">Card default title</h3>
          </div>
          <div class="card-body">
            <p class="card-text">Basic card with mixed content and a fixed width.  Cards have no margin and no fixed width by default (they’ll naturally fill the full width of its parent), so use 'spacing utilities'.
          </p>
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
  `)

  .add('Story card', () => `
  <div class="container">
    <div class="row pt-2 pb-2">
      <div class="col col-12 col-md-6 col-lg-4">
        <div class="card card-story">
          <img class="card-img-top" src="${exampleImage}" alt="Card image cap">
          <div class="card-header">
            <h3 class="card-title">Card default title</h3>
          </div>
          <div class="card-body">
            <p class="card-text">Basic card with mixed content and a fixed width.  Cards have no margin and no fixed width by default (they’ll naturally fill the full width of its parent), so use 'spacing utilities'.
          </p>
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
  `)

  .add('Event card', () => `
  <div class="container">
    <div class="row pt-2 pb-2">
      <div class="col col-12 col-md-6 col-lg-4">
        <div class="card card-event">
          <img class="card-img-top" src="${exampleImage}" alt="Card image cap">
          <div class="card-header">
            <h3 class="card-title">Card default title</h3>
          </div>
          <div class="card-body">
            <p class="card-text">Basic card with mixed content and a fixed width.  Cards have no margin and no fixed width by default (they’ll naturally fill the full width of its parent), so use 'spacing utilities'.
          </p>
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
  `)

  .add('Hover', () => `
  <div class="container">
    <div class="row pt-2 pb-2">
      <div class="col col-12 col-md-6 col-lg-4">
        <div class="card card-hover">
          <img class="card-img-top" src="${exampleImage}" alt="Card image cap">
          <div class="card-header">
            <h3 class="card-title">Card default title</h3>
          </div>
          <div class="card-body">
            <p class="card-text">Body copy goes here. Limit to 5 lines max. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua eiusmod tempo.
          </p>
          </div>
        </div> <!-- .card -->
      </div> <!-- .col -->
    </div>
  `)

  .add('Mobile card', () => `
  <div class="container">
    <div class="row pt-2 pb-2">
      <div class="col col-12 col-md-6 col-lg-4">
        <div class="card card-sm">
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
            <a href="#" class="btn btn-sm btn-dark">Button link here</a>
          </div>
          <div class="card-link">
            <a href="#" class="">Regular text link here</a>
          </div>
        </div> <!-- .card -->
      </div> <!-- .col -->

    </div>
  `)

  .add('Variations', () => `
  <div class="container">
    <div class="row pt-2 pb-2">
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
    <div class="row pt-2 pb-2">
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
    <div class="row pt-2 pb-2">
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
        <img class="card-icon-top" src="data:image/svg+xml;charset=UTF-8,<svg aria-hidden='true' focusable='false' data-prefix='fas' data-icon='rocket' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' class='svg-inline--fa fa-rocket fa-w-16 fa-2x'><path fill='currentColor' d='M505.12019,19.09375c-1.18945-5.53125-6.65819-11-12.207-12.1875C460.716,0,435.507,0,410.40747,0,307.17523,0,245.26909,55.20312,199.05238,128H94.83772c-16.34763.01562-35.55658,11.875-42.88664,26.48438L2.51562,253.29688A28.4,28.4,0,0,0,0,264a24.00867,24.00867,0,0,0,24.00582,24H127.81618l-22.47457,22.46875c-11.36521,11.36133-12.99607,32.25781,0,45.25L156.24582,406.625c11.15623,11.1875,32.15619,13.15625,45.27726,0l22.47457-22.46875V488a24.00867,24.00867,0,0,0,24.00581,24,28.55934,28.55934,0,0,0,10.707-2.51562l98.72834-49.39063c14.62888-7.29687,26.50776-26.5,26.50776-42.85937V312.79688c72.59753-46.3125,128.03493-108.40626,128.03493-211.09376C512.07526,76.5,512.07526,51.29688,505.12019,19.09375ZM384.04033,168A40,40,0,1,1,424.05,128,40.02322,40.02322,0,0,1,384.04033,168Z' class=''></path></svg>" alt="Card image cap">
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
        <img class="card-icon-top" src="data:image/svg+xml;charset=UTF-8,<svg aria-hidden='true' focusable='false' data-prefix='fas' data-icon='rocket' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' class='svg-inline--fa fa-rocket fa-w-16 fa-2x'><path fill='currentColor' d='M505.12019,19.09375c-1.18945-5.53125-6.65819-11-12.207-12.1875C460.716,0,435.507,0,410.40747,0,307.17523,0,245.26909,55.20312,199.05238,128H94.83772c-16.34763.01562-35.55658,11.875-42.88664,26.48438L2.51562,253.29688A28.4,28.4,0,0,0,0,264a24.00867,24.00867,0,0,0,24.00582,24H127.81618l-22.47457,22.46875c-11.36521,11.36133-12.99607,32.25781,0,45.25L156.24582,406.625c11.15623,11.1875,32.15619,13.15625,45.27726,0l22.47457-22.46875V488a24.00867,24.00867,0,0,0,24.00581,24,28.55934,28.55934,0,0,0,10.707-2.51562l98.72834-49.39063c14.62888-7.29687,26.50776-26.5,26.50776-42.85937V312.79688c72.59753-46.3125,128.03493-108.40626,128.03493-211.09376C512.07526,76.5,512.07526,51.29688,505.12019,19.09375ZM384.04033,168A40,40,0,1,1,424.05,128,40.02322,40.02322,0,0,1,384.04033,168Z' class=''></path></svg>" alt="Card image cap">
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
    <div class="row pt-2 pb-2">
      <div class="col col-md-6 col-lg-3 col-12">
        <div class="card card-sm">
          <img class="card-img-top" src="${exampleImage}" alt="Card image cap">
          <div class="card-header">
            <h3 class="card-title">Card default title</h3>
          </div>
          <div class="card-body">
            <p class="card-text">Body copy goes here. Limit to 5 lines max. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua eiusmod tempo.
            </p>
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
            <p class="card-text">Body copy goes here. Limit to 5 lines max. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua eiusmod tempo.
          </p>
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
            <p class="card-text">Body copy goes here. Limit to 5 lines max. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua eiusmod tempo.
          </p>
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
    <div class="row pt-2 pb-2">
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
    <div class="row pt-2 pb-2">
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
  <div class="row pt-2 pb-2">
    <div class="col col-12 col-md-12 col-lg-6">
      <div class="card card-horizontal">
        <img class="card-img-top" src="${exampleImage}" alt="Card image cap">
        <div class="card-content-wrapper">
          <div class="card-header">
            <h3 class="card-title">Card default title</h3>
          </div>
          <div class="card-body">
            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut aliqua eiusmod tempo.
          </p>
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
            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua eiusmod tempo.
          </p>
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
  <div class="row pt-2 pb-2">
    <div class="col col-12 col-md-12 col-lg-6">
      <div class="card card-degree card-horizontal">
        <img class="card-img-top" src="${exampleImage}" alt="Card image cap">
        <div class="card-content-wrapper">
          <div class="card-header">
            <h3 class="card-title">Card default title</h3>
          </div>
          <div class="card-body">
            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut aliqua eiusmod tempo.
          </p>
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
            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua eiusmod tempo.
          </p>
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
  <div class="row pt-2 pb-2">
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
  <div class="row pt-2 pb-2">
    <div class="col col-12 col-md-12 col-lg-6">
      <div class="card card-story card-horizontal">
        <img class="card-img-top" src="${exampleImage}" alt="Card image cap">
        <div class="card-content-wrapper">
          <div class="card-header">
            <h3 class="card-title">Card default title</h3>
          </div>
          <div class="card-body">
            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut aliqua eiusmod tempo.
          </p>
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
            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua eiusmod tempo.
          </p>
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
  <p class="card-text">Body copy goes here. Limit to 5 lines max. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua eiusmod tempo.
</p>
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
  <p class="card-text">Body copy goes here. Limit to 5 lines max. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua eiusmod tempo.
</p>
</div>
<div class="card-button">
  <a href="#" class="btn btn-dark">Button link here</a>
</div>
</div>
`)

;
