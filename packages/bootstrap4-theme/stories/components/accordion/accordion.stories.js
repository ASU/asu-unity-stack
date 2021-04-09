export default { title: 'Components/Accordions' };

export const foldableCard = () => `
  <div class="container my-5">

    <div class="row">
      <div class="col-md-12">
        <h4>Foldable Card</h4>
        <p>The <code>.card-foldable</code> class is a wrapper for a generic card which creates a single section that expands and contracts independently of other surrounding foldable cards.</p>
        <ul>
          <li>The cards will conform to the width of the surrounding container.</li>
          <li>There is a recommended character limit of 75 characters for the text within the header of a foldable card.</li>
        </ul>
      </div>
    </div>

    <div class="row mt-4">
      <div class="col-md-4">

        <div class="card card-foldable mt-3">
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

        <div class="card card-foldable mt-3">
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

        <div class="card card-foldable mt-3">
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
`;

export const accordion = () => `
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

          <div class="card card-foldable mt-3">
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

          <div class="card card-foldable mt-3">
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

          <div class="card card-foldable mt-3">
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
`;


export const disableFoldAtBreakpoint = () => `
  <div class="container my-5">

    <div class="row">
      <div class="col">

        <h4>Foldable cards, disabled at breakpoints</h4>
        <p>Several utility class were created to allow an foldable card to display as a fully expanded normal card upon reaching a screen size of a specific breakpoint.</p>

        <p>Use a variant of the <code>.desktop-disable</code> along with a <code>.card-foldable</code> class to enable the functionality.</p>
      </div>
    </div>

    <div class="row mt-4">
      <div class="col-md-7 mb-4">
        <div class="card card-foldable desktop-disable-md">
          <div class="card-header">
            <h4>
              <a id="example-header-1" data-toggle="collapse" href="#example-content-1" role="button" aria-expanded="false" aria-controls="example-content-1">This should look like a normal card until the md breakpoint
                <span class="fas fa-chevron-up"></span>
              </a>
            </h4>
          </div>
          <div id="example-content-1" class="collapse card-body" aria-labelledby="example-header-1">
          <p>This uses the <code>.desktop-disable-md</code> class.</p>
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing
            elit. Aenean commodo ligula eget dolor. Aenean massa.
            Cum sociis natoque penatibus et magnis dis parturient
            montes, nascetur ridiculus mus. Donec quam felis,
            ultricies nec, pellentesque eu, pretium quis, sem.</p>
          </div>
        </div>
      </div><!-- end .col -->

      <div class="col-md-7 mb-4">
        <div class="card card-foldable desktop-disable-lg">
          <div class="card-header">
            <h4>
              <a id="example-header-2" data-toggle="collapse" href="#example-content-2" role="button" aria-expanded="false" aria-controls="example-content-2">This will become an accordion at the lg breakpoint.
                <span class="fas fa-chevron-up"></span>
              </a>
            </h4>
          </div>
          <div id="example-content-2" class="collapse card-body" aria-labelledby="example-header-2">
            <p>This uses the <code>.desktop-disable-lg</code> class.</p>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing
            elit. Aenean commodo ligula eget dolor. Aenean massa.
            Cum sociis natoque penatibus et magnis dis parturient
            montes, nascetur ridiculus mus. Donec quam felis,
            ultricies nec, pellentesque eu, pretium quis, sem.</p>
          </div>
        </div>
      </div><!-- end .col -->

      <div class="col-md-7 mb-4">
        <div class="card card-foldable desktop-disable-xl">
          <div class="card-header">
            <h4>
              <a id="example-header-3" data-toggle="collapse" href="#example-content-3" role="button" aria-expanded="false" aria-controls="example-content-3">Collapses to an accordion at the xl breakpoint
                <span class="fas fa-chevron-up"></span>
              </a>
            </h4>
          </div>
          <div id="example-content-3" class="collapse card-body" aria-labelledby="example-header-3">
          <p>This uses the <code>.desktop-disable-xl</code> class.</p>
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing
            elit. Aenean commodo ligula eget dolor. Aenean massa.
            Cum sociis natoque penatibus et magnis dis parturient
            montes, nascetur ridiculus mus. Donec quam felis,
            ultricies nec, pellentesque eu, pretium quis, sem.</p>
          </div>
        </div>

      </div>
    </div>
  </div>
`;
