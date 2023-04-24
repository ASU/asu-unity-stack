import { createComponent, createStory } from "../../../helpers/wrapper.js";
export default createComponent("Accordions", "Atoms", "Examples");
import { googleAnalytics as initFunc } from "../../../src/js/googleAnalytics";

export const FoldableCardDefaultOpen = createStory(
  <div className="accordion">
  <div class="accordion-item">
    <div class="accordion-header">
      <h3>
        <a
          id="example-header-3"
          data-bs-toggle="collapse"
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
          <span class="fas fa-chevron-up"></span>
        </a>
      </h3>
    </div>
    <div
      id="example-content-3"
      class="collapse show accordion-body"
      aria-labelledby="example-header-3"
    >
      <h4>This is a quaternary headline</h4>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud
      </p>
      <h5>This is a level five headline. There's a fancy word for that too.</h5>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor
      </p>
    </div>
  </div>
  </div>
  ,
  { initFunc }
);
FoldableCardDefaultOpen.args = {
  template: 1,
};

export const ColorAccents = createStory(
  <div class="accordion" id="accordionExample">
    <div class="card accordion-item mt-3">
      <div class="accordion-header">
        <h4>
          <a
            id="cardOne"
            class="collapsed"
            href="#cardBodyOne"
            data-bs-toggle="collapse"
            data-bs-target="#cardBodyOne"
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
            <span class="fas fa-chevron-up"></span>
          </a>
        </h4>
      </div>
      {/* end .accordion-header */}
      <div
        id="cardBodyOne"
        class="collapse accordion-body"
        aria-labelledby="cardOne"
        data-bs-parent="#accordionExample"
      >
        <h4>Quatrenary Headline</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud
        </p>
        <h5>
          This is a level five headline. There's a fancy word for that too.
        </h5>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud
        </p>
      </div>
      {/* end .accordion-body */}
    </div>
    {/* end .card */}

    <div class="card accordion-item mt-3 accordion-item-maroon">
      <div class="accordion-header">
        <h4>
          <a
            id="cardTwo"
            class="collapsed"
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
            <span class="fas fa-chevron-up"></span>
          </a>
        </h4>
      </div>
      <div
        id="cardBodyTwo"
        class="collapse accordion-body"
        aria-labelledby="cardTwo"
        data-bs-parent="#accordionExample"
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud
        </p>
        <h5>
          This is a level five headline. There's a fancy word for that too.
        </h5>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor
        </p>
      </div>
      {/* end .accordion-body */}
    </div>
    {/* end .card */}

    <div class="card accordion-item mt-3 accordion-item-gray">
      <div class="accordion-header">
        <h4>
          <a
            id="cardThree"
            class="collapsed"
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
            <span class="fas fa-chevron-up"></span>
          </a>
        </h4>
      </div>
      <div
        id="cardBodyThree"
        class="collapse accordion-body"
        aria-labelledby="cardThree"
        data-bs-parent="#accordionExample"
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud
        </p>
        <h5>
          This is a level five headline. There's a fancy word for that too.
        </h5>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud
        </p>
      </div>
      {/* end .accordion-body */}
    </div>
    {/* end .card */}

    <div class="card accordion-item mt-3 accordion-item
    -dark">
      <div class="accordion-header">
        <h4>
          <a
            id="cardFour"
            class="collapsed"
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
            <span class="fas fa-chevron-up"></span>
          </a>
        </h4>
      </div>
      {/* end .accordion-header */}
      <div
        id="cardBodyFour"
        class="collapse accordion-body"
        aria-labelledby="cardFour"
        data-bs-parent="#accordionExample"
      >
        <h4>Quatrenary Headline</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud
        </p>
        <h5>
          This is a level five headline. There's a fancy word for that too.
        </h5>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud
        </p>
      </div>
      {/* end .accordion-body */}
    </div>
    {/* end .card */}
  </div>,
  { initFunc }
);

export const IncludedIcons = createStory(
  <div class="accordion" id="accordionExample">
    <div class="card accordion-item mt-3">
      <div class="accordion-header accordion-header-icon">
        <h4>
          <a
            id="cardOne"
            class="collapsed"
            href="#cardBodyOne"
            data-bs-toggle="collapse"
            data-bs-target="#cardBodyOne"
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
            <span class="accordion-icon">
              <i class="fas fa-dog mr-2" role="img" aria-label="..."></i>
              Accordion with icon and gold color.
            </span>
            <span class="fas fa-chevron-up"></span>
          </a>
        </h4>
      </div>
      {/* end .accordion-header */}
      <div
        id="cardBodyOne"
        class="collapse accordion-body"
        aria-labelledby="cardOne"
        data-bs-parent="#accordionExample"
      >
        <h4>Quatrenary Headline</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud
        </p>
        <h5>
          This is a level five headline. There's a fancy word for that too.
        </h5>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud
        </p>
      </div>
      {/* end .accordion-body */}
    </div>
    {/* end .card */}

    <div class="card accordion-item mt-3 accordion-item-maroon">
      <div class="accordion-header accordion-header-icon">
        <h4>
          <a
            id="cardTwo"
            class="collapsed"
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
            <span class="accordion-icon">
              <i class="fas fa-cat mr-2" role="img" aria-label="..."></i>
              Accordion with icon and maroon color.
            </span>
            <span class="fas fa-chevron-up"></span>
          </a>
        </h4>
      </div>
      <div
        id="cardBodyTwo"
        class="collapse accordion-body"
        aria-labelledby="cardTwo"
        data-bs-parent="#accordionExample"
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud
        </p>
        <h5>
          This is a level five headline. There's a fancy word for that too.
        </h5>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor
        </p>
      </div>
      {/* end .accordion-body */}
    </div>
    {/* end .card */}
  </div>,
  { initFunc }
);

export const DisableFold = createStory(
  <div class="container my-5">
    <div class="row mt-4">
      <div class="col-md-7">
        {/* Component start */}
        <div class="accordion" id="accordionExample">
        <div class="card accordion-item desktop-disable-lg">
          <div class="accordion-header">
            <h4>
              <a
                id="example-header-2"
                data-bs-toggle="collapse"
                href="#example-content-2"
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
                <span class="fas fa-chevron-up"></span>
              </a>
            </h4>
          </div>
          <div
            id="example-content-2"
            class="collapse accordion-body"
            aria-labelledby="example-header-2"
          >
            <p>
              This uses the <code>.desktop-disable-lg</code> class.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
              sem.
            </p>
          </div>
          </div>
        </div>
        {/* Component end */}
      </div>
    </div>

    <div class="row mt-4">
      <div class="col-md-7">
        {/* Component start */}
        <div class="accordion" id="accordionExample">
        <div class="card accordion-item desktop-disable-xl">
          <div class="accordion-header">
            <h4>
              <a
                id="example-header-3"
                data-bs-toggle="collapse"
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
                <span class="fas fa-chevron-up"></span>
              </a>
            </h4>
          </div>
          <div
            id="example-content-3"
            class="collapse accordion-body"
            aria-labelledby="example-header-3"
          >
            <p>
              This uses the <code>.desktop-disable-xl</code> class.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
              sem.
            </p>
          </div>
          </div>
        </div>
        {/* Component end */}
      </div>
    </div>
  </div>,
  { initFunc }
);
