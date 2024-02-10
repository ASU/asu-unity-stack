import { createComponent, createStory } from "../../../helpers/wrapper.js";
export default createComponent("Accordions", "Atoms", "Examples");
import { googleAnalytics as initFunc } from "@asu/unity-bootstrap-theme/js/data-layer.js";

export const FoldableCardDefaultOpen = createStory(
  <div className="accordion">
    <div className="accordion-item mt-3">
      <div className="accordion-header">
        <h3>
          <a
            id="example-header-3"
            data-bs-toggle="collapse"
            className="collapse"
            href="#example-content-3"
            role="button"
            aria-expanded="true"
            aria-controls="example-content-3"
            data-ga="This card starts off in an unfolded state."
            data-ga-name="onclick"
            data-ga-event="collapse"
            data-ga-type="click"
            data-ga-region="main content"
            data-ga-section="default"
          >
            This card starts off in an unfolded state.
            <span className="fas fa-chevron-up"></span>
          </a>
        </h3>
      </div>
      <div
        id="example-content-3"
        className="collapse show"
        aria-labelledby="example-header-3"
      >
        <div className="accordion-body">
          <h4>This is a quaternary headline</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud
          </p>
          <h5>
            This is a level five headline. There's a fancy word for that too.
          </h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor
          </p>
        </div>
      </div>
    </div>
  </div>,
  { initFunc }
);
FoldableCardDefaultOpen.args = {
  template: 1,
};

export const ColorAccents = createStory(
  <div className="accordion" id="accordionExample">
    <div className="accordion-item mt-3">
      <div className="accordion-header">
        <h4>
          <a
            id="cardOne"
            className="collapsed"
            href="#cardBodyOne"
            data-bs-toggle="collapse"
            role="button"
            aria-expanded="false"
            aria-controls="cardBodyOne"
            data-ga="Accordion gold color (default)."
            data-ga-name="onclick"
            data-ga-event="collapse"
            data-ga-type="click"
            data-ga-region="main content"
            data-ga-section="default"
          >
            Accordion gold color (default).
            <span className="fas fa-chevron-up"></span>
          </a>
        </h4>
      </div>
      {/* end .accordion-header */}
      <div
        id="cardBodyOne"
        className="collapse"
        aria-labelledby="cardOne"
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body">
          <h4>Quatrenary Headline</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud
          </p>
          <h5>
            This is a level five headline. There's a fancy word for that too.
          </h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud
          </p>
        </div>
      </div>
      {/* end .accordion-body */}
    </div>
    {/* end .card */}

    <div className="accordion-item mt-3 accordion-item-maroon">
      <div className="accordion-header">
        <h4>
          <a
            id="cardTwo"
            className="collapsed"
            data-bs-toggle="collapse"
            href="#cardBodyTwo"
            role="button"
            aria-expanded="false"
            aria-controls="cardBodyTwo"
            data-ga="Accordion maroon color."
            data-ga-name="onclick"
            data-ga-event="collapse"
            data-ga-type="click"
            data-ga-region="main content"
            data-ga-section="default"
          >
            Accordion maroon color.
            <span className="fas fa-chevron-up"></span>
          </a>
        </h4>
      </div>
      <div
        id="cardBodyTwo"
        className="collapse"
        aria-labelledby="cardTwo"
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud
          </p>
          <h5>
            This is a level five headline. There's a fancy word for that too.
          </h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor
          </p>
        </div>
      </div>
      {/* end .accordion-body */}
    </div>
    {/* end .card */}

    <div className="accordion-item mt-3 accordion-item-gray">
      <div className="accordion-header">
        <h4>
          <a
            id="cardThree"
            className="collapsed"
            data-bs-toggle="collapse"
            href="#cardBodyThree"
            role="button"
            aria-expanded="false"
            aria-controls="cardBodyThree"
            data-ga="Accordion gray color."
            data-ga-name="onclick"
            data-ga-event="collapse"
            data-ga-type="click"
            data-ga-region="main content"
            data-ga-section="default"
          >
            Accordion gray color.
            <span className="fas fa-chevron-up"></span>
          </a>
        </h4>
      </div>
      <div
        id="cardBodyThree"
        className="collapse"
        aria-labelledby="cardThree"
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud
          </p>
          <h5>
            This is a level five headline. There's a fancy word for that too.
          </h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud
          </p>
        </div>
      </div>
      {/* end .accordion-body */}
    </div>
    {/* end .card */}

    <div className="accordion-item mt-3 accordion-item-dark">
      <div className="accordion-header">
        <h4>
          <a
            id="cardFour"
            className="collapsed"
            href="#cardBodyFour"
            data-bs-toggle="collapse"
            data-bs-target="#cardBodyFour"
            role="button"
            aria-expanded="false"
            aria-controls="cardBodyFour"
            data-ga="Accordion dark color."
            data-ga-name="onclick"
            data-ga-event="collapse"
            data-ga-type="click"
            data-ga-region="main content"
            data-ga-section="default"
          >
            Accordion dark color.
            <span className="fas fa-chevron-up"></span>
          </a>
        </h4>
      </div>
      {/* end .accordion-header */}
      <div
        id="cardBodyFour"
        className="collapse"
        aria-labelledby="cardFour"
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body">
          <h4>Quatrenary Headline</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud
          </p>
          <h5>
            This is a level five headline. There's a fancy word for that too.
          </h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud
          </p>
        </div>
      </div>
      {/* end .accordion-body */}
    </div>
    {/* end .card */}
  </div>,
  { initFunc }
);

export const IncludedIcons = createStory(
  <div className="accordion" id="accordionExample">
    <div className="accordion-item mt-3">
      <div className="accordion-header accordion-header-icon">
        <h4>
          <a
            id="cardOne"
            className="collapsed"
            href="#cardBodyOne"
            data-bs-toggle="collapse"
            role="button"
            aria-expanded="false"
            aria-controls="cardBodyOne"
            data-ga="Accordion with icon and gold color."
            data-ga-name="onclick"
            data-ga-event="collapse"
            data-ga-type="click"
            data-ga-region="main content"
            data-ga-section="default"
          >
            <span className="accordion-icon">
              <i className="fas fa-dog me-2" role="img" aria-label="..."></i>
              Accordion with icon and gold color.
            </span>
            <span className="fas fa-chevron-up"></span>
          </a>
        </h4>
      </div>
      {/* end .accordion-header */}
      <div
        id="cardBodyOne"
        className="collapse"
        aria-labelledby="cardOne"
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body">
          <h4>Quatrenary Headline</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud
          </p>
          <h5>
            This is a level five headline. There's a fancy word for that too.
          </h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud
          </p>
        </div>
      </div>
      {/* end .accordion-body */}
    </div>
    {/* end .card */}

    <div className="accordion-item mt-3 accordion-item-maroon">
      <div className="accordion-header accordion-header-icon">
        <h4>
          <a
            id="cardTwo"
            className="collapsed"
            data-bs-toggle="collapse"
            href="#cardBodyTwo"
            role="button"
            aria-expanded="false"
            aria-controls="cardBodyTwo"
            data-ga="Accordion with icon and maroon color."
            data-ga-name="onclick"
            data-ga-event="collapse"
            data-ga-type="click"
            data-ga-region="main content"
            data-ga-section="default"
          >
            <span className="accordion-icon">
              <i className="fas fa-cat me-2" role="img" aria-label="..."></i>
              Accordion with icon and maroon color.
            </span>
            <span className="fas fa-chevron-up"></span>
          </a>
        </h4>
      </div>
      <div
        id="cardBodyTwo"
        className="collapse"
        aria-labelledby="cardTwo"
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud
          </p>
          <h5>
            This is a level five headline. There's a fancy word for that too.
          </h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor
          </p>
        </div>
      </div>
      {/* end .accordion-body */}
    </div>
    {/* end .card */}
  </div>,
  { initFunc }
);

export const DisableFold = createStory(
  <div className="container my-5">
    <div className="row mt-4">
      <div className="col-md-7">
        {/* Component start */}
        <div className="accordion" id="accordionExample">
          <div className="accordion-item desktop-disable-lg">
            <div className="accordion-header">
              <h4>
                <a
                  id="example-header-2"
                  data-bs-toggle="collapse"
                  href="#example-content-2"
                  className="collapsed"
                  role="button"
                  aria-expanded="false"
                  aria-controls="example-content-2"
                  data-ga="This will become an foldable card at the lg breakpoint"
                  data-ga-name="onclick"
                  data-ga-event="collapse"
                  data-ga-type="click"
                  data-ga-region="main content"
                  data-ga-section="default"
                >
                  This will become an foldable card at the lg breakpoint.
                  <span className="fas fa-chevron-up"></span>
                </a>
              </h4>
            </div>
            <div
              id="example-content-2"
              className="collapse"
              aria-labelledby="example-header-2"
            >
              <div className="accordion-body">
                <p>
                  This uses the <code>.desktop-disable-lg</code> class.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                  natoque penatibus et magnis dis parturient montes, nascetur
                  ridiculus mus. Donec quam felis, ultricies nec, pellentesque
                  eu, pretium quis, sem.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Component end */}
      </div>
    </div>

    <div className="row mt-4">
      <div className="col-md-7">
        {/* Component start */}
        <div className="accordion" id="accordionExample">
          <div className="accordion-item desktop-disable-xl">
            <div className="accordion-header">
              <h4>
                <a
                  id="example-header-3"
                  data-bs-toggle="collapse"
                  className="collapsed"
                  href="#example-content-3"
                  role="button"
                  aria-expanded="false"
                  aria-controls="example-content-3"
                  data-ga="Collapses to an foldable card at the xl breakpoint"
                  data-ga-name="onclick"
                  data-ga-event="collapse"
                  data-ga-type="click"
                  data-ga-region="main content"
                  data-ga-section="default"
                >
                  Collapses to an foldable card at the xl breakpoint.
                  <span className="fas fa-chevron-up"></span>
                </a>
              </h4>
            </div>
            <div
              id="example-content-3"
              className="collapse"
              aria-labelledby="example-header-3"
            >
              <div className="accordion-body">
                <p>
                  This uses the <code>.desktop-disable-xl</code> class.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                  natoque penatibus et magnis dis parturient montes, nascetur
                  ridiculus mus. Donec quam felis, ultricies nec, pellentesque
                  eu, pretium quis, sem.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Component end */}
      </div>
    </div>
  </div>,
  { initFunc }
);
