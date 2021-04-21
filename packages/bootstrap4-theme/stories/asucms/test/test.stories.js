export default { title: 'ASUCMS/Test' };

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

