import { document, console } from 'global';
import { storiesOf } from '@storybook/html';
import exampleImage from './example-image.jpg';

storiesOf('Components/Cards - event', module)
  .addParameters({
    happo: false,
  })

  .add('Event card', () => `
  <div class="container-fluid">
    <div class="row pt-2 pb-2">
      <div class="col col-12 col-md-4">
        <div class="card card-event">
          <img class="card-img-top" src="${exampleImage}" alt="Card image cap">
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
          <div class="card-body">
            <p class="card-text">Body copy goes here. Limit to 5 lines max. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua eiusmod tempo.
          </p>
          </div>
          <div class="card-button">
            <a href="#" class="btn btn-dark">Button link here</a>
          </div>
        </div> <!-- .card -->
      </div> <!-- .col -->
      <div class="col col-sm-8">
        <div style="background-color:#e5e5e5;padding:16px;">
        <strong>Correct markup for card components<br/><br/></strong>
          <pre>
&lt;div class="card"&gt;
  &lt;img class="card-img-top" /&gt; (optional)
  &lt;div class="card-header"&gt;
    Any brand aligned heading
  &lt;/div&gt;
  &lt;div class="card-body"&gt;
    Any brand aligned body content (optional)
  &lt;/div&gt;
  &lt;div class="card-button"&gt;
    One brand aligned button (optional)
  &lt;/div&gt;
  &lt;div class="card-footer"&gt;
     Not used in basic card
  &lt;/div&gt;
&lt;/div&gt;
          </pre>
        </div>
      </div>
    </div>
  `)

  .add('Hover', () => `
  <div class="container-fluid">
    <div class="row pt-2 pb-2">
      <div class="col col-12 col-md-4">
        <div class="card card-event card-hover">
          <img class="card-img-top" src="${exampleImage}" alt="Card image cap">
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
          <div class="card-body">
            <p class="card-text">Body copy goes here. Limit to 5 lines max. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua eiusmod tempo.
          </p>
          </div>
        </div> <!-- .card -->
      </div> <!-- .col -->
    </div>
  `)

  .add('Variations', () => `
  <div class="container-fluid">
    <div class="row pt-2 pb-2">
      <div class="col col-12 col-md-4">
        <div class="card card-event">
          <img class="card-img-top" src="${exampleImage}" alt="Card image cap">
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
          <div class="card-body">
            <p class="card-text">Body copy goes here. Limit to 5 lines max. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua eiusmod tempo.
          </p>
          </div>
          <div class="card-button">
            <a href="#" class="btn btn-dark">Button link here</a>
          </div>
        </div> <!-- .card -->
      </div> <!-- .col -->
      <div class="col col-12 col-md-4">
        <div class="card card-event">
          <img class="card-img-top" src="${exampleImage}" alt="Card image cap">
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
          <div class="card-body">
            <p class="card-text">Body copy goes here. Limit to 5 lines max. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua eiusmod tempo.
          </p>
          </div>
        </div> <!-- .card -->
      </div> <!-- .col -->
      <div class="col col-12 col-md-4">
        <div class="card card-event">
          <img class="card-img-top" src="${exampleImage}" alt="Card image cap">
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
        </div> <!-- .card -->
      </div> <!-- .col -->
    </div>
  </div>

<hr/>

  <div class="container-fluid">
    <div class="row pt-2 pb-2">
      <div class="col col-12 col-md-6">
        <div class="card card-event card-event-horizontal">
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
      <div class="col col-12 col-md-6">
        <div class="card card-event card-event-horizontal">
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

    <div class="container-fluid">
      <div class="row pt-2 pb-2">
        <div class="col col-12 col-md-6">
          <div class="card card-event card-event-horizontal">
            <img class="card-img-top" src="${exampleImage}" alt="Card image cap">
            <div class="card-content-wrapper">
              <div class="card-header">
                <h3 class="card-title">Card default title</h3>
              </div>
              <div class="card-button">
                <a href="#" class="btn btn-dark btn-sm">Button link here</a>
              </div>
            </div>
          </div> <!-- .card -->
        </div> <!-- .col -->
        <div class="col col-12 col-md-6">
          <div class="card card-event card-event-horizontal">
            <img class="card-img-top" src="${exampleImage}" alt="Card image cap">
            <div class="card-content-wrapper">
              <div class="card-header">
                <h3 class="card-title">Card default title</h3>
              </div>
            </div>
          </div> <!-- .card -->
        </div> <!-- .col -->
      </div>
    </div>

  `)

  .add('4 column', () => `
  <div class="container-fluid">
    <div class="row pt-2 pb-2">
      <div class="col col-md-3 col-sm-6 col-12">
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
      <div class="col col-md-3 col-sm-6 col-12">
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
      <div class="col col-md-3 col-sm-6 col-12">
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
      <div class="col col-md-3 col-sm-6 col-12">
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
  <div class="container-fluid">
    <div class="row pt-2 pb-2">
      <div class="col col-12 col-md-4">
        <div class="card">
          <img class="card-img-top" src="${exampleImage}" alt="Card image cap">
          <div class="card-header">
            <h3 class="card-title">Card default title</h3>
          </div>
          <div class="card-body">
            <p class="card-text">Body copy goes here. Limit to 5 lines max. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua eiusmod tempo.
          </p>
            <a href="#" class="btn btn-dark">Button link here</a>
          </div>
        </div> <!-- .card -->
      </div> <!-- .col -->
      <div class="col col-12 col-md-4">
        <div class="card">
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
      <div class="col col-12 col-md-4">
        <div class="card">
          <img class="card-img-top" src="${exampleImage}" alt="Card image cap">
          <div class="card-header">
            <h3 class="card-title">Card default title</h3>
          </div>
        </div> <!-- .card -->
      </div> <!-- .col -->
    </div>
  </div>
  `)

  .add('2 column', () => `
  <div class="container-fluid">
    <div class="row pt-2 pb-2">
      <div class="col col-12 col-md-6 p-3">
        <div class="card card-lg">
          <img class="card-img-top" src="${exampleImage}" alt="Card image cap">
          <div class="card-header">
            <h3 class="card-title">Card default title</h3>
          </div>
          <div class="card-body">
            <p class="card-text">Body copy goes here. Limit to 5 lines max. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua eiusmod tempo.
          </p>
            <a href="#" class="btn btn-dark">Button link here</a>
          </div>
        </div> <!-- .card -->
      </div> <!-- .col -->
      <div class="col col-12 col-md-6 p-3">
        <div class="card card-lg">
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
  </div>
  `)

;
