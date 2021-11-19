import React from 'react';
import { createComponent, createStory } from '../../../helpers/wrapper.js';
export default createComponent('Accordions', 'Atoms', 'Examples');

export const FoldableCardDefaultOpen = createStory(
  <div class="card card-foldable">
    <div class="card-header">
      <h4>
        <a
          id="example-header-3"
          data-toggle="collapse"
          href="#example-content-3"
          role="button"
          aria-expanded="true"
          aria-controls="example-content-3"
        >
          This card starts off in an unfolded state.
          <span class="fas fa-chevron-up"></span>
        </a>
      </h4>
    </div>
    <div
      id="example-content-3"
      class="collapse show card-body"
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
);
FoldableCardDefaultOpen.args = {
  template: 1,
};

export const ColorAccents = createStory(
  <div class="accordion" id="accordionExample">
    <div class="card card-foldable mt-3">
      <div class="card-header">
        <h4>
          <a
            id="cardOne"
            class="collapsed"
            href="#cardBodyOne"
            data-toggle="collapse"
            data-target="#cardBodyOne"
            role="button"
            aria-expanded="false"
            aria-controls="cardBodyOne"
          >
            Accordion gold color (default).
            <span class="fas fa-chevron-up"></span>
          </a>
        </h4>
      </div>
      {/* end .card-header */}
      <div
        id="cardBodyOne"
        class="collapse card-body"
        aria-labelledby="cardOne"
        data-parent="#accordionExample"
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
      {/* end .card-body */}
    </div>
    {/* end .card */}

    <div class="card card-foldable mt-3 card-maroon">
      <div class="card-header">
        <h4>
          <a
            id="cardTwo"
            class="collapsed"
            data-toggle="collapse"
            href="#cardBodyTwo"
            role="button"
            aria-expanded="false"
            aria-controls="cardBodyTwo"
          >
            Accordion maroon color.
            <span class="fas fa-chevron-up"></span>
          </a>
        </h4>
      </div>
      <div
        id="cardBodyTwo"
        class="collapse card-body"
        aria-labelledby="cardTwo"
        data-parent="#accordionExample"
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
      {/* end .card-body */}
    </div>
    {/* end .card */}

    <div class="card card-foldable mt-3 card-gray">
      <div class="card-header">
        <h4>
          <a
            id="cardThree"
            class="collapsed"
            data-toggle="collapse"
            href="#cardBodyThree"
            role="button"
            aria-expanded="false"
            aria-controls="cardBodyThree"
          >
            Accordion gray color.
            <span class="fas fa-chevron-up"></span>
          </a>
        </h4>
      </div>
      <div
        id="cardBodyThree"
        class="collapse card-body"
        aria-labelledby="cardThree"
        data-parent="#accordionExample"
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
      {/* end .card-body */}
    </div>
    {/* end .card */}

    <div class="card card-foldable mt-3 card-dark">
      <div class="card-header">
        <h4>
          <a
            id="cardFour"
            class="collapsed"
            href="#cardBodyFour"
            data-toggle="collapse"
            data-target="#cardBodyFour"
            role="button"
            aria-expanded="false"
            aria-controls="cardBodyFour"
          >
            Accordion dark color.
            <span class="fas fa-chevron-up"></span>
          </a>
        </h4>
      </div>
      {/* end .card-header */}
      <div
        id="cardBodyFour"
        class="collapse card-body"
        aria-labelledby="cardFour"
        data-parent="#accordionExample"
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
      {/* end .card-body */}
    </div>
    {/* end .card */}
  </div>,
  {}
);

export const IncludedIcons = createStory(
  <div class="accordion" id="accordionExample">
    <div class="card card-foldable mt-3">
      <div class="card-header card-header-icon">
        <h4>
          <a
            id="cardOne"
            class="collapsed"
            href="#cardBodyOne"
            data-toggle="collapse"
            data-target="#cardBodyOne"
            role="button"
            aria-expanded="false"
            aria-controls="cardBodyOne"
          >
            <span class="card-icon">
              <i class="fas fa-dog mr-2" role="img" aria-label="..."></i>
              Accordion with icon and gold color.
            </span>
            <span class="fas fa-chevron-up"></span>
          </a>
        </h4>
      </div>
      {/* end .card-header */}
      <div
        id="cardBodyOne"
        class="collapse card-body"
        aria-labelledby="cardOne"
        data-parent="#accordionExample"
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
      {/* end .card-body */}
    </div>
    {/* end .card */}

    <div class="card card-foldable mt-3 card-maroon">
      <div class="card-header card-header-icon">
        <h4>
          <a
            id="cardTwo"
            class="collapsed"
            data-toggle="collapse"
            href="#cardBodyTwo"
            role="button"
            aria-expanded="false"
            aria-controls="cardBodyTwo"
          >
            <span class="card-icon">
              <i class="fas fa-cat mr-2" role="img" aria-label="..."></i>
              Accordion with icon and maroon color.
            </span>
            <span class="fas fa-chevron-up"></span>
          </a>
        </h4>
      </div>
      <div
        id="cardBodyTwo"
        class="collapse card-body"
        aria-labelledby="cardTwo"
        data-parent="#accordionExample"
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
      {/* end .card-body */}
    </div>
    {/* end .card */}
  </div>,
  {}
);

export const DisableFold = createStory(
  <div class="container my-5">
    <div class="row mt-4">
      <div class="col-md-7">
        {/* Component start */}
        <div class="card card-foldable desktop-disable-lg">
          <div class="card-header">
            <h4>
              <a
                id="example-header-2"
                data-toggle="collapse"
                href="#example-content-2"
                role="button"
                aria-expanded="false"
                aria-controls="example-content-2"
              >
                This will become an foldable card at the lg breakpoint.
                <span class="fas fa-chevron-up"></span>
              </a>
            </h4>
          </div>
          <div
            id="example-content-2"
            class="collapse card-body"
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
        {/* Component end */}
      </div>
    </div>

    <div class="row mt-4">
      <div class="col-md-7">
        {/* Component start */}
        <div class="card card-foldable desktop-disable-xl">
          <div class="card-header">
            <h4>
              <a
                id="example-header-3"
                data-toggle="collapse"
                href="#example-content-3"
                role="button"
                aria-expanded="false"
                aria-controls="example-content-3"
              >
                Collapses to an foldable card at the xl breakpoint.
                <span class="fas fa-chevron-up"></span>
              </a>
            </h4>
          </div>
          <div
            id="example-content-3"
            class="collapse card-body"
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
        {/* Component end */}
      </div>
    </div>
  </div>,
  {}
);
