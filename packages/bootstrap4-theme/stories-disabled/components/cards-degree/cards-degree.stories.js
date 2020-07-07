import { document, console } from 'global';
import { storiesOf } from '@storybook/html';
import exampleImage from '../cards-basic/example-image.jpg';
/*
storiesOf('Components/Cards - degree', module)
  .addParameters({
    happo: false,
  })

  .add('Degree card', () => `
  <div class="container-fluid">
    <div class="row pt-2 pb-2">
      <div class="col col-sm-4">
        <div class="card card-degree">
          <img class="card-img-top" src="${exampleImage}" alt="Card image cap">
          <div class="card-header">
            <h3 class="card-title">Card default title</h3>
          </div>
          <div class="card-body">
            <p class="card-text">Body copy goes here. Limit to 5 lines max. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua eiusmod tempo.
          </p>
          </div>
          <div class="card-footer-link">
            <a href="#" >Test link</a>
          </div>
        </div> <!-- .card -->
      </div> <!-- .col -->
      <div class="col col-sm-8">
        <div style="background-color:#e5e5e5;padding:16px;">
        <strong>Correct markup for card components<br/><br/></strong>
          <pre>
&lt;div class="card card-degree"&gt;
  &lt;img class="card-img-top" /&gt; (optional)
  &lt;div class="card-header"&gt;
    Any brand aligned heading element
  &lt;/div&gt;
  &lt;div class="card-body"&gt;
    Any brand aligned body content
  &lt;/div&gt;
  &lt;div class="card-footer-link"&gt;
     Additional link (optional, multiple)
  &lt;/div&gt;
&lt;/div&gt;
          </pre>
        </div>
      </div>
    </div>
  </div>
  `)
  .add('Hover', () => `
  <div class="container-fluid">
    <div class="row pt-2 pb-2">
      <div class="col col-sm-4">
        <div class="card card-degree card-hover">
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
  .add('Variations', () => `
  <div class="container-fluid">
    <div class="row pt-2 pb-2">
      <div class="col col-sm-4">
        <div class="card card-degree">
          <img class="card-img-top" src="${exampleImage}" alt="Card image cap">
          <div class="card-header">
            <h3 class="card-title">Card default title</h3>
          </div>
          <div class="card-body">
            <p class="card-text">Body copy goes here. Limit to 5 lines max. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua eiusmod tempo.
            </p>
          </div>
          <div class="card-footer-link">
            <a href="#" >Test link</a>
          </div>
        </div> <!-- .card -->
      </div> <!-- .col -->
      <div class="col col-sm-4">
        <div class="card card-degree">
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
      <div class="col col-sm-4">
        <div class="card card-degree">
          <div class="card-header">
            <h3 class="card-title">Card default title</h3>
          </div>
          <div class="card-body">
            <p class="card-text">Body copy goes here. Limit to 5 lines max. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua eiusmod tempo.
            </p>
          </div>
          <div class="card-footer-link">
            <a href="#" >Test link 1</a>
          </div>
          <div class="card-footer-link">
            <a href="#" >Test link 2</a>
          </div>
        </div> <!-- .card -->
      </div> <!-- .col -->
    </div>
  </div>

  `)

  .add('4 column', () => `
  <div class="container-fluid">
    <div class="row pt-2 pb-2">
      <div class="col col-sm-3">
        <div class="card card-degree card-sm">
          <img class="card-img-top" src="${exampleImage}" alt="Card image cap">
          <div class="card-header">
            <h3 class="card-title">Card default title</h3>
          </div>
          <div class="card-body">
            <p class="card-text">Body copy goes here. Limit to 5 lines max. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua eiusmod tempo.
          </p>
          </div>
          <div class="card-footer-link">
            <a href="#" >Test link</a>
          </div>
          <div class="card-footer-link">
            <a href="#" >Test link</a>
          </div>
        </div> <!-- .card -->
      </div> <!-- .col -->
      <div class="col col-sm-3">
        <div class="card card-degree card-sm">
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
      <div class="col col-sm-3">
        <div class="card card-degree card-sm">
          <div class="card-header">
            <h3 class="card-title">Card default title</h3>
          </div>
          <div class="card-body">
            <p class="card-text">Body copy goes here. Limit to 5 lines max. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua eiusmod tempo.
          </p>
          </div>
        </div> <!-- .card -->
      </div> <!-- .col -->
      <div class="col col-sm-3">
        <div class="card card-degree card-sm">
          <div class="card-header">
            <h3 class="card-title">Card default title</h3>
          </div>
          <div class="card-body">
            <p class="card-text">Body copy goes here. Limit to 5 lines max. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua eiusmod tempo.
          </p>
          </div>
          <div class="card-footer-link">
            <a href="#" >Test link</a>
          </div>
        </div> <!-- .card -->
      </div> <!-- .col -->
    </div>
  </div>

  `)

  .add('3 column', () => `
  <div class="container-fluid">
    <div class="row pt-2 pb-2">
      <div class="col col-sm-4">
        <div class="card card-degree">
          <img class="card-img-top" src="${exampleImage}" alt="Card image cap">
          <div class="card-header">
            <h3 class="card-title">Card default title</h3>
          </div>
          <div class="card-body">
            <p class="card-text">Body copy goes here. Limit to 5 lines max. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua eiusmod tempo.
            </p>
          </div>
          <div class="card-footer-link">
            <a href="#" >Test link</a>
          </div>
        </div> <!-- .card -->
      </div> <!-- .col -->
      <div class="col col-sm-4">
        <div class="card card-degree">
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
      <div class="col col-sm-4">
        <div class="card card-degree">
          <div class="card-header">
            <h3 class="card-title">Card default title</h3>
          </div>
          <div class="card-body">
            <p class="card-text">Body copy goes here. Limit to 5 lines max. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua eiusmod tempo.
            </p>
          </div>
          <div class="card-footer-link">
            <a href="#" >Test link 1</a>
          </div>
          <div class="card-footer-link">
            <a href="#" >Test link 2</a>
          </div>
        </div> <!-- .card -->
      </div> <!-- .col -->
    </div>
  </div>

  `)

;
*/
