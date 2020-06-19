import { document, console } from 'global';
import { storiesOf } from '@storybook/html';

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
              <a class="collapsed" data-toggle="collapse" href="#example-collapsed" role="button" aria-expanded="false" aria-controls="example-collapsed">This card unfolds.
                <span class="fas fa-chevron-up"></span>
              </a>
            </h4>
          </div>
          <div id="example-collapsed" class="collapse card-body">
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
              <a class="collapsed" data-toggle="collapse" href="#example-collapsed-twoline" role="button" aria-expanded="false" aria-controls="example-collapsed">This starts off folded and has a really long title which wraps to a second line.
                <span class="fas fa-chevron-up"></span>
              </a>
            </h4>
          </div>
          <div id="example-collapsed-twoline" class="collapse card-body">
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
              <a data-toggle="collapse" href="#example-expanded" role="button" aria-expanded="true" aria-controls="example-collapsed">This card starts off in an unfolded state.
                <span class="fas fa-chevron-up"></span>
              </a>
            </h4>
          </div>
          <div id="example-expanded" class="collapse show card-body">
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

.add('Accordion', () => `
  <div class="container my-5">

    <div class="row mt-4">
      <div class="col-md-9">

        <div class="accordion" id="accordionExample">

          <div class="card card-foldable">
            <div class="card-header" id="cardOne">
              <h4>
                <a class="collapsed" href="#cardBodyOne" data-toggle="collapse" data-target="#cardBodyOne" role="button" aria-expanded="false" aria-controls="cardBodyOne">These are sections within an accordion.
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
            <div class="card-header" id="cardTwo">
              <h4>
                <a class="collapsed" data-toggle="collapse" href="#cardBodyTwo" role="button" aria-expanded="false" aria-controls="cardBodyTwo">There should only be one open section at a time.
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
            <div class="card-header" id="cardThree">
              <h4>
                <a class="collapsed" data-toggle="collapse" href="#cardBodyThree" role="button" aria-expanded="false" aria-controls="cardBodyThree">The inactive panels should collapse while the active one expands.
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
