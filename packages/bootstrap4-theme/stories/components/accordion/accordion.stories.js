import { document, console } from 'global';
import { storiesOf } from '@storybook/html';

// comment to test
storiesOf('Components/Accordion', module)
  .addParameters({
    happo: false,
  })

.add('Card - Foldable', () => `
  <div class="container my-5">

    <div class="row">
      <div class="col-md-4">

        <div class="card card-foldable">
          <div class="card-header">
            <h4>
              <a id="example-header-1" class="collapsed" data-toggle="collapse" href="#example-content-1" role="button" aria-expanded="false" aria-controls="example-content-1">This card unfolds.
                <span class="fas fa-chevron-up"></span>
              </a>
            </h4>
          </div>
          <div id="example-content-1" class="collapse card-body" aria-labelledby="example-header-1">
            <h4>This is a quaternary headline</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p>
            <h5>This is a level five headline. There's a fancy word for that too.</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
          </div>
        </div>

      </div>
    </div>

    <div class="row mt-4">
      <div class="col-md-6">

        <div class="card card-foldable">
          <div class="card-header">
            <h4>
              <a id="example-header-2" class="collapsed" data-toggle="collapse" href="#example-content-2" role="button" aria-expanded="false" aria-controls="example-content-2">This starts off folded and has a really long title which wraps to a second line.
                <span class="fas fa-chevron-up"></span>
              </a>
            </h4>
          </div>
          <div id="example-content-2" class="collapse card-body" aria-labelledby="example-header-2">
            <h4>This is a quaternary headline</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p>
            <h5>This is a level five headline. There's a fancy word for that too.</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
          </div>
        </div>

      </div>
    </div>

    <div class="row mt-4">
      <div class="col-md-9">

        <div class="card card-foldable">
          <div class="card-header">
            <h4>
              <a id="example-header-3" data-toggle="collapse" href="#example-content-3" role="button" aria-expanded="true" aria-controls="example-content-3">This card starts off in an unfolded state.
                <span class="fas fa-chevron-up"></span>
              </a>
            </h4>
          </div>
          <div id="example-content-3" class="collapse show card-body" aria-labelledby="example-header-3">
            <h4>This is a quaternary headline</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p>
            <h5>This is a level five headline. There's a fancy word for that too.</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
          </div>
        </div>

      </div>
    </div>

  </div>
`)

.add('Card - Foldable, Mobile Only', () => `
  <div class="container my-5">
    <div class="row mt-4">
      <div class="col-md-9">

        <h4>Foldable only on a mobile device</h4>
        <p>Add the utility class of <code>.desktop-disable</code> to a foldable card to display a full card on a desktop view and a foldable card on mobile.</p>

        <div class="card card-foldable desktop-disable">
          <div class="card-header">
            <h4>
              <a id="example-header-4" data-toggle="collapse" href="#example-content-4" role="button" aria-expanded="false" aria-controls="example-content-4">This should look like a normal card on a desktop.
                <span class="fas fa-chevron-up"></span>
              </a>
            </h4>
          </div>
          <div id="example-content-4" class="collapse card-body" aria-labelledby="example-header-4">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
          </div>
        </div>

      </div>
    </div>
  </div>
`)

.add('Accordion', () => `
  <div class="container my-5">

    <div class="row mt-4">
      <div class="col-md-10">

        <h4>Accordion</h4>
        <p>With some small modifications of the <strong>foldable card</strong> code, a series of foldable cards can be connected together to form an accordion.</p>
        <ul style="padding:1rem 3rem;">
          <li>Wrap the collection of foldable cards with an element containing the class of <code>.accordion</code> and a unique ID.</li>
          <li>Include the <code>data-parent</code> attribute within the card body elemment to properly toggle the folded/expanded state.</li>
        </ul>

        <div class="accordion" id="accordionExample">

          <div class="card card-foldable">
            <div class="card-header">
              <h4>
                <a id="cardOne" class="collapsed" href="#cardBodyOne" data-toggle="collapse" data-target="#cardBodyOne" role="button" aria-expanded="false" aria-controls="cardBodyOne">These are sections within an accordion.
                  <span class="fas fa-chevron-up"></span>
                </a>
              </h4>
            </div><!-- end .card-header -->
            <div id="cardBodyOne" class="collapse card-body" aria-labelledby="cardOne" data-parent="#accordionExample">
              <h4>Quatrenary Headline</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p>
              <h5>This is a level five headline. There's a fancy word for that too.</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p>
            </div><!-- end .card-body -->
          </div><!-- end .card -->

          <div class="card card-foldable">
            <div class="card-header">
              <h4>
                <a id="cardTwo" class="collapsed" data-toggle="collapse" href="#cardBodyTwo" role="button" aria-expanded="false" aria-controls="cardBodyTwo">There should only be one open section at a time.
                  <span class="fas fa-chevron-up"></span>
                </a>
              </h4>
            </div>
            <div id="cardBodyTwo" class="collapse card-body" aria-labelledby="cardTwo" data-parent="#accordionExample">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p>
              <h5>This is a level five headline. There's a fancy word for that too.</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
            </div><!-- end .card-body -->
          </div><!-- end .card -->

          <div class="card card-foldable">
            <div class="card-header">
              <h4>
                <a id="cardThree" class="collapsed" data-toggle="collapse" href="#cardBodyThree" role="button" aria-expanded="false" aria-controls="cardBodyThree">The inactive panels should collapse while the active one expands.
                  <span class="fas fa-chevron-up"></span>
                </a>
              </h4>
            </div>
            <div id="cardBodyThree" class="collapse card-body" aria-labelledby="cardThree" data-parent="#accordionExample">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p>
              <h5>This is a level five headline. There's a fancy word for that too.</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p>
            </div><!-- end .card-body -->
          </div><!-- end .card -->

        </div><!-- end .accordion -->

      </div>
    </div>

  </div>
`)

