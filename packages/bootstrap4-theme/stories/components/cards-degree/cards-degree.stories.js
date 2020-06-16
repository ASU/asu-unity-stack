import { document, console } from 'global';
import { storiesOf } from '@storybook/html';
import exampleImage from '../cards-basic/example-image.jpg';

storiesOf('Components/Cards - degree', module)
  .addParameters({
    happo: false,
  })

  .add('Degree card', () => `
  <div class="container-fluid">
    <div class="row">
      <div class="col col-sm-4 p-3">
        <div class="card card-degree">
          <img class="card-img-top" src="${exampleImage}" alt="Card image cap">
          <div class="card-header">
            <h3 class="card-title">Card default title</h3>
          </div>
          <div class="card-body">
            <p class="card-text">Basic card with mixed content and a fixed width.  Cards have no margin and no fixed width by default (they’ll naturally fill the full width of its parent), so use 'spacing utilities'.
          </p>
          </div>
          <div class="card-footer-link">
            <a href="#" >Test link</a>
          </div>
        </div> <!-- .card -->
      </div> <!-- .col -->
      <div class="col col-sm-8 p-3">
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
    <div class="row">
      <div class="col col-sm-4 p-3">
        <div class="card card-degree card-hover">
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
        <div class="card card-degree">
          <img class="card-img-top" src="${exampleImage}" alt="Card image cap">
          <div class="card-header">
            <h3 class="card-title">Card default title</h3>
          </div>
          <div class="card-body">
            <p class="card-text">Basic card with mixed content and a fixed width.  Cards have no margin and no fixed width by default (they’ll naturally fill the full width of its parent), so use 'spacing utilities'.
            </p>
          </div>
          <div class="card-footer-link">
            <a href="#" >Test link</a>
          </div>
        </div> <!-- .card -->
      </div> <!-- .col -->
      <div class="col col-sm-4 p-3">
        <div class="card card-degree">
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
        <div class="card card-degree">
          <div class="card-header">
            <h3 class="card-title">Card default title</h3>
          </div>
          <div class="card-body">
            <p class="card-text">Basic card with mixed content and a fixed width.  Cards have no margin and no fixed width by default (they’ll naturally fill the full width of its parent), so use 'spacing utilities'.
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
    <div class="row">
      <div class="col col-sm-3 p-3">
        <div class="card card-degree card-sm">
          <img class="card-img-top" src="${exampleImage}" alt="Card image cap">
          <div class="card-header">
            <h3 class="card-title">Card default title</h3>
          </div>
          <div class="card-body">
            <p class="card-text">Basic card with mixed content and a fixed width.  Cards have no margin and no fixed width by default (they’ll naturally fill the full width of its parent), so use 'spacing utilities'.
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
      <div class="col col-sm-3 p-3">
        <div class="card card-degree card-sm">
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
      <div class="col col-sm-3 p-3">
        <div class="card card-degree card-sm">
          <div class="card-header">
            <h3 class="card-title">Card default title</h3>
          </div>
          <div class="card-body">
            <p class="card-text">Basic card with mixed content and a fixed width.  Cards have no margin and no fixed width by default (they’ll naturally fill the full width of its parent), so use 'spacing utilities'.
          </p>
          </div>
        </div> <!-- .card -->
      </div> <!-- .col -->
      <div class="col col-sm-3 p-3">
        <div class="card card-degree card-sm">
          <div class="card-header">
            <h3 class="card-title">Card default title</h3>
          </div>
          <div class="card-body">
            <p class="card-text">Basic card with mixed content and a fixed width.  Cards have no margin and no fixed width by default (they’ll naturally fill the full width of its parent), so use 'spacing utilities'.
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
    <div class="row">
      <div class="col col-sm-4 p-3">
        <div class="card card-degree">
          <img class="card-img-top" src="${exampleImage}" alt="Card image cap">
          <div class="card-header">
            <h3 class="card-title">Card default title</h3>
          </div>
          <div class="card-body">
            <p class="card-text">Basic card with mixed content and a fixed width.  Cards have no margin and no fixed width by default (they’ll naturally fill the full width of its parent), so use 'spacing utilities'.
            </p>
          </div>
          <div class="card-footer-link">
            <a href="#" >Test link</a>
          </div>
        </div> <!-- .card -->
      </div> <!-- .col -->
      <div class="col col-sm-4 p-3">
        <div class="card card-degree">
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
        <div class="card card-degree">
          <div class="card-header">
            <h3 class="card-title">Card default title</h3>
          </div>
          <div class="card-body">
            <p class="card-text">Basic card with mixed content and a fixed width.  Cards have no margin and no fixed width by default (they’ll naturally fill the full width of its parent), so use 'spacing utilities'.
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
