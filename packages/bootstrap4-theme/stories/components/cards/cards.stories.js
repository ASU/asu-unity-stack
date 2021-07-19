import React from 'react';
import { createComponent, createStory } from '../../../helpers/wrapper.js'
export default createComponent('Cards');
import exampleImage from './example-image.jpg';



const defaultCardComponent = (
  <div class="container">
    <div class="row row-spaced pt-2 pb-2">
      <div class="col col-12 col-md-6 col-lg-4">

        <div class="card">
          <img class="card-img-top" src={exampleImage} alt="Card image cap" />
          <div class="card-header">
            <h3 class="card-title">Card default title</h3>
          </div>
          <div class="card-body">
            <p class="card-text">Body copy goes here. Limit to 5 lines max. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua eiusmod tempo.
          </p>
          </div>
          <div class="card-event-details">
            <div class="card-event-icons">
              <div><i class="fas fa-map-marker-alt"></i></div>
              <div>Downtown Phoenix campus</div>
            </div>
          </div>
          <div class="card-button">
            <a href="#" class="btn btn-dark">Button link here</a>
          </div>
          <div class="card-button">
            <a href="#" class="btn btn-md btn-dark">Button link here</a>
          </div>
          <div class="card-link">
            <a href="#" class="">Regular text link here</a>
          </div>
          <div class="card-tags">
            <a class="btn btn-tag btn-tag-alt-white" href="#" >test tag</a><a class="btn btn-tag btn-tag-alt-white" href="#" >test tag 2</a><a class="btn btn-tag btn-tag-alt-white" href="#" >test tag 3</a>
          </div>
        </div>

      </div>
    </div>
  </div>
);

const cardImagesComponent = (
  <div>
    <div class="container">
      <div class="row row-spaced pt-2 pb-2">
        <div class="col col-12 col-md-6 col-lg-4">

          <div class="card">
            <img class="card-img-top" src={exampleImage} alt="Card image cap" />
            <div class="card-header">
            </div>
          </div>

        </div>
      </div>
    </div>
    <hr/>
    <div class="container">
      <div class="row row-spaced pt-2 pb-2">
        <div class="col col-12 col-md-6 col-lg-4">

          <div class="card card-event">
            <img class="card-img-top" src={exampleImage} alt="Card image cap" />
            <div class="card-header">
            </div>
          </div>

        </div>
      </div>
    </div>
    <hr/>
    <div class="container">
      <div class="row row-spaced pt-2 pb-2">
        <div class="col col-12 col-md-6 col-lg-4">

          <div class="card card-story">
            <img class="card-img-top" src={exampleImage} alt="Card image cap" />
            <div class="card-header">
            </div>
          </div>

        </div>
      </div>
    </div>
    <hr/>
    <div class="container">
      <div class="row row-spaced pt-2 pb-2">
        <div class="col col-12 col-md-6 col-lg-4">

          <div class="card">
            <i class="fas fa-rocket fa-2x card-icon-top"></i>
            <div class="card-header">
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
);

const cardTitlesComponent = (
  <div>
    <div class="container">
      <div class="row row-spaced pt-2 pb-2">
        <div class="col col-12 col-md-6 col-lg-4">

          <div class="card">
            <div class="card-header">
              <h3 class="card-title">Card default title</h3>
            </div>
          </div>

        </div>
      </div>
    </div>

    <hr/>

    <div class="container">
      <div class="row row-spaced pt-2 pb-2">
        <div class="col col-12 col-md-6 col-lg-4">
          <div class="card card-degree">
            <div class="card-header">
              <h3 class="card-title">Card default title</h3>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
);

const cardBodyComponent = (
  <div class="container">
    <div class="row row-spaced pt-2 pb-2">
      <div class="col col-12 col-md-6 col-lg-4">

        <div class="card">
          <div class="card-header"></div>
          <div class="card-body">
            <p class="card-text">Body copy goes here. Limit to 5 lines max. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua eiusmod tempo.
            </p>
          </div>
        </div>

      </div>
    </div>
  </div>
);

const cardIconComponent = (
  <div class="container">
    <div class="row row-spaced pt-2 pb-2">
      <div class="col col-12 col-md-6 col-lg-4">

        <div class="card">
        <div class="card-header card-header-icon">
        <i class="fas fa-newspaper fa-2x card-icon"></i>
            <h3 class="card-title">Headline goes here</h3>
          </div>
          <div class="card-body">
            <p class="card-text">Body copy goes here. Limit to 5 lines max. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua eiusmod tempo.
            </p>
          </div>
          <div class="card-button">
            <a href="#" class="btn btn-maroon">Button text</a>
          </div>
        </div>

      </div>
    </div>
  </div>
);

const cardEventInfoComponent = (
  <div>
    <div class="container">
      <div class="row row-spaced pt-2 pb-2">
        <div class="col col-12 col-md-6 col-lg-4">

          <div class="card">
            <div class="card-header"></div>
            <div class="card-event-details">
              <div class="card-event-icons">
                <div><i class="far fa-calendar"></i></div>
                <div>Wednesday, November 21st, 2021 11:30 a.m. - 12:30 p.m.</div>
              </div>
              <div class="card-event-icons">
                <div><i class="fas fa-map-marker-alt"></i></div>
                <div>Downtown Phoenix campus</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>

    <hr/>

    <div class="container">
      <div class="row row-spaced pt-2 pb-2">
        <div class="col col-12 col-md-6 col-lg-4">

          <div class="card">
            <div class="card-header"></div>
            <div class="card-event-details">
              <div class="card-event-icons">
                <div><i class="far fa-calendar"></i></div>
                <div>Wednesday, November 21st, 2021 11:30 a.m. - 12:30 p.m.</div>
              </div>
            </div>
            <div class="card-event-details">
              <div class="card-event-icons">
                <div><i class="fas fa-map-marker-alt"></i></div>
                <div>Downtown Phoenix campus</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>

    <hr/>

    <div class="container">
      <div class="row row-spaced pt-2 pb-2">
        <div class="col col-12 col-md-6 col-lg-4">

          <div class="card">
            <div class="card-header"></div>
            <div class="card-event-details">
              <div class="card-event-icons">
                <div><i class="far fa-calendar"></i></div>
                <div>Wednesday, November 21st, 2021 11:30 a.m. - 12:30 p.m.</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>

    <hr/>

    <div class="container">
      <div class="row row-spaced pt-2 pb-2">
        <div class="col col-12 col-md-6 col-lg-4">

          <div class="card">
            <div class="card-header"></div>
            <div class="card-event-details">
              <div class="card-event-icons">
                <div><i class="fas fa-map-marker-alt"></i></div>
                <div>Downtown Phoenix campus</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
);

const cardCallToActionsComponent = (
  <div class="container">
    <div class="row row-spaced pt-2 pb-2">
      <div class="col col-12 col-md-6 col-lg-4">

        <div class="card">
          <div class="card-header"></div>
          <div class="card-button">
            <a href="#" class="btn btn-dark">Button link here</a>
          </div>
          <div class="card-button">
            <a href="#" class="btn btn-md btn-dark">Button link here</a>
          </div>
          <div class="card-link">
            <a href="#" class="">Regular text link here</a>
          </div>
        </div>

      </div>
    </div>
  </div>
);

const cardTagsComponent = (
  <div class="container">
    <div class="row row-spaced pt-2 pb-2">
      <div class="col col-12 col-md-6 col-lg-4">

        <div class="card">
          <div class="card-header"></div>
          <div class="card-tags">
            <a class="btn btn-tag btn-tag-alt-white" href="#" >test tag</a><a class="btn btn-tag btn-tag-alt-white" href="#" >test tag 2</a><a class="btn btn-tag btn-tag-alt-white" href="#" >test tag 3</a>
          </div>
        </div>

      </div>

      <div class="col col-12 col-md-6 col-lg-4">

        {/* No anchor tags */ }
        <div class="card">
          <div class="card-header"></div>
          <div class="card-body">Need a card tag that does not behave like an anchor? Try the <code>.badge</code> class. Be sure to include the modifier background class too.</div>
          <div class="card-tags">
            <span class="badge badge-gray-2">No button class</span>
            <span class="badge badge-gray-2">No hover effects</span>
            <span class="badge badge-gray-7 text-gray-1">Dark mode</span>
          </div>
        </div>

      </div>
    </div>
  </div>
);

const degreeCardComponent = (
  <div class="container">
    <div class="row row-spaced pt-2 pb-2">
      <div class="col col-12 col-md-6 col-lg-4">

        <div class="card card-degree">
          <img class="card-img-top" src={exampleImage} alt="Card image cap" />
          <div class="card-header">
            <h3 class="card-title">Card default title</h3>
          </div>
          <div class="card-body">
            <p class="card-text">Basic card with mixed content and a fixed width.  Cards have no margin and no fixed width by default (they’ll naturally fill the full width of its parent), so use 'spacing utilities'.</p>
          </div>
          <div class="card-button">
            <a href="#" class="btn btn-maroon">Button link here</a>
          </div>
          <div class="card-link">
            <a href="#" class="">Regular text link here</a>
          </div>
          <div class="card-tags">
            <a class="btn btn-tag btn-tag-alt-white" href="#" >test tag</a><a class="btn btn-tag btn-tag-alt-white" href="#" >test tag 2</a><a class="btn btn-tag btn-tag-alt-white" href="#" >test tag 3</a>
          </div>
        </div>

      </div>
    </div>
  </div>
);

const storyCardComponent = (
  <div class="container">
    <div class="row row-spaced pt-2 pb-2">
      <div class="col col-12 col-md-6 col-lg-4">

        <div class="card card-story">
          <img class="card-img-top" src={exampleImage} alt="Card image cap" />
          <div class="card-header">
            <h3 class="card-title">Card default title</h3>
          </div>
          <div class="card-body">
            <p class="card-text">Basic card with mixed content and a fixed width.  Cards have no margin and no fixed width by default (they’ll naturally fill the full width of its parent), so use 'spacing utilities'.</p>
          </div>
          <div class="card-button">
            <a href="#" class="btn btn-gold">Button link here</a>
          </div>
          <div class="card-link">
            <a href="#" class="">Regular text link here</a>
          </div>
          <div class="card-tags">
            <a class="btn btn-tag btn-tag-alt-white" href="#" >test tag</a><a class="btn btn-tag btn-tag-alt-white" href="#" >test tag 2</a><a class="btn btn-tag btn-tag-alt-white" href="#" >test tag 3</a>
          </div>
        </div>

      </div>
    </div>
  </div>
);

const eventCardComponent = (
  <div class="container">
    <div class="row row-spaced pt-2 pb-2">
      <div class="col col-12 col-md-6 col-lg-4">

        <div class="card card-event">
          <img class="card-img-top" src={exampleImage} alt="Card image cap" />
          <div class="card-header">
            <h3 class="card-title">Card default title</h3>
          </div>
          <div class="card-body">
            <p class="card-text">Basic card with mixed content and a fixed width.  Cards have no margin and no fixed width by default (they’ll naturally fill the full width of its parent), so use 'spacing utilities'.</p>
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
          <div class="card-link">
            <a href="#" class="">Regular text link here</a>
          </div>
          <div class="card-tags">
            <a class="btn btn-tag btn-tag-alt-white" href="#" >test tag</a><a class="btn btn-tag btn-tag-alt-white" href="#" >test tag 2</a><a class="btn btn-tag btn-tag-alt-white" href="#" >test tag 3</a>
          </div>
        </div>

      </div>
    </div>
  </div>
);

const hoverableComponent = (
  <div class="container">
    <div class="row row-spaced pt-2 pb-2">
      <div class="col col-12 col-md-6 col-lg-4">

        <div class="card card-hover">
          <button>
            <img class="card-img-top" src={exampleImage} alt="Card image cap" />
            <div class="card-header">
              <h3 class="card-title">Card default title</h3>
            </div>
            <div class="card-body">
              <p class="card-text">Body copy goes here. Limit to 5 lines max. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua eiusmod tempo.</p>
            </div>
          </button>
        </div>

      </div>
    </div>
  </div>
);

const variationsComponent = (
  <div>
    <div class="container">
      <div class="row row-spaced pt-2 pb-2">
        <div class="col col-12 col-lg-4">

          <div class="card">
            <img class="card-img-top" src={exampleImage} alt="Card image cap" />
            <div class="card-header">
              <h3 class="card-title">Card default title</h3>
            </div>
            <div class="card-body">
              <p class="card-text">Body copy goes here. Limit to 5 lines max. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua eiusmod tempo.</p>
            </div>
            <div class="card-event-details">
              <div class="card-event-icons">
                <div><i class="fas fa-map-marker-alt"></i></div>
                <div>Downtown Phoenix campus</div>
              </div>
            </div>
            <div class="card-button">
              <a href="#" class="btn btn-dark">Button link here</a>
            </div>
            <div class="card-button">
              <a href="#" class="btn btn-md btn-dark">Button link here</a>
            </div>
            <div class="card-link">
              <a href="#" class="">Regular text link here</a>
            </div>
            <div class="card-tags">
              <a class="btn btn-tag btn-tag-alt-white" href="#" >test tag</a><a class="btn btn-tag btn-tag-alt-white" href="#" >test tag 2</a><a class="btn btn-tag btn-tag-alt-white" href="#" >test tag 3</a>
            </div>
          </div>

        </div>
        <div class="col col-12 col-lg-4">

          <div class="card">
            <div class="card-header">
              <h3 class="card-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit</h3>
            </div>
            <div class="card-body">
              <p class="card-text">Body copy goes here. Limit to 5 lines max. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua eiusmod tempo.</p>
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
            <div class="card-link">
              <a href="#" class="">Regular text link here</a>
            </div>
            <div class="card-tags">
              <a class="btn btn-tag btn-tag-alt-white" href="#" >test tag</a><a class="btn btn-tag btn-tag-alt-white" href="#" >test tag 2</a><a class="btn btn-tag btn-tag-alt-white" href="#" >test tag 3</a>
            </div>
          </div>

        </div>
        <div class="col col-12 col-lg-4">

          <div class="card">
            <img class="card-img-top" src={exampleImage} alt="Card image cap" />
            <div class="card-header">
              <h3 class="card-title">Card default title</h3>
            </div>
            <div class="card-event-details">
              <div class="card-event-icons">
                <div><i class="far fa-calendar"></i></div>
                <div>Wednesday, November 21st, 2021 12:30 p.m.</div>
              </div>
            </div>
            <div class="card-event-details">
              <div class="card-event-icons">
                <div><i class="fas fa-map-marker-alt"></i></div>
                <div>Downtown Phoenix campus</div>
              </div>
            </div>
            <div class="card-button">
              <a href="#" class="btn btn-dark">Button link here</a>
            </div>
            <div class="card-tags">
              <a class="btn btn-tag btn-tag-alt-white" href="#" >test tag</a><a class="btn btn-tag btn-tag-alt-white" href="#" >test tag 2</a><a class="btn btn-tag btn-tag-alt-white" href="#" >test tag 3</a>
            </div>
          </div>

        </div>
      </div>
    </div>
    <div class="container">
      <div class="row row-spaced pt-2 pb-2">
        <div class="col col-12 col-lg-4">

          <div class="card">
            <img class="card-img-top" src={exampleImage} alt="Card image cap" />
            <div class="card-header">
              <h3 class="card-title">Card default title</h3>
            </div>
            <div class="card-body">
              <p class="card-text">Body copy goes here. Limit to 5 lines max. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua eiusmod tempo.</p>
            </div>
            <div class="card-button">
              <a href="#" class="btn btn-dark">Button link here</a>
            </div>
          </div>

        </div>
        <div class="col col-12 col-lg-4">

          <div class="card">
            <div class="card-header">
              <h3 class="card-title">Card default title</h3>
            </div>
            <div class="card-body">
              <p class="card-text">Body copy goes here. Limit to 5 lines max. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua eiusmod tempo.</p>
            </div>
            <div class="card-event-details">
              <div class="card-event-icons">
                <div><i class="far fa-calendar"></i></div>
                <div>Wednesday, November 21st, 2021 12:30 p.m.</div>
              </div>
            </div>
            <div class="card-button">
              <a href="#" class="btn btn-dark">Button link here</a>
            </div>
            <div class="card-link">
              <a href="#" class="">Regular text link here</a>
            </div>
          </div>

        </div>
        <div class="col col-12 col-lg-4">

          <div class="card">
            <div class="card-header">
              <h3 class="card-title">Card default title</h3>
            </div>
            <div class="card-body">
              <p class="card-text">Body copy goes here. Limit to 5 lines max. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua eiusmod tempo.
            </p>
            </div>
            <div class="card-event-details">
              <div class="card-event-icons">
                <div><i class="fas fa-map-marker-alt"></i></div>
                <div>Downtown Phoenix campus</div>
              </div>
            </div>
            <div class="card-link">
              <a href="#" class="">Regular text link here</a>
            </div>
            <div class="card-tags">
              <a class="btn btn-tag btn-tag-alt-white" href="#" >test tag</a><a class="btn btn-tag btn-tag-alt-white" href="#" >test tag 2</a><a class="btn btn-tag btn-tag-alt-white" href="#" >test tag 3</a>
            </div>
          </div>

        </div>
      </div>
    </div>
    <div class="container">
      <div class="row row-spaced pt-2 pb-2">
        <div class="col col-12 col-lg-4">

          <div class="card">
            <img class="card-img-top" src={exampleImage} alt="Card image cap" />
            <div class="card-header">
              <h3 class="card-title">Card default title</h3>
            </div>
            <div class="card-body">
              <p class="card-text">Body copy goes here. Limit to 5 lines max. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua eiusmod tempo.</p>
            </div>
            <div class="card-event-details">
              <div class="card-event-icons">
                <div><i class="fas fa-map-marker-alt"></i></div>
                <div>Downtown Phoenix campus</div>
              </div>
            </div>
            <div class="card-link">
              <a href="#" class="">Regular text link here</a>
            </div>
          </div>

        </div>
        <div class="col col-12 col-lg-4">

        <div class="card">
          <i class="fas fa-rocket fa-2x card-icon-top"></i>
          <div class="card-header">
            <h3 class="card-title">Card default title</h3>
          </div>
          <div class="card-body">
            <p class="card-text">Body copy goes here. Limit to 5 lines max. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua eiusmod tempo.
          </p>
          </div>
          <div class="card-button">
            <a href="#" class="btn btn-dark">Button link here</a>
          </div>
        </div>

      </div>
      <div class="col col-12 col-lg-4">

        <div class="card card-centered">
          <i class="fas fa-rocket fa-2x card-icon-top"></i>
          <div class="card-header">
            <h3 class="card-title">Card default title</h3>
          </div>
          <div class="card-button">
            <a href="#" class="btn btn-dark">Button link here</a>
          </div>
        </div>

        </div>
      </div>
    </div>

    <div class="container">
      <div class="row row-spaced pt-2 pb-2">
        <div class="col col-12 col-lg-4">

          <div class="card">
            <img class="card-img-top" src={exampleImage} alt="Card image cap" />
            <div class="card-body">
              <p class="card-text">Body copy goes here. Limit to 5 lines max. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua eiusmod tempo.</p>
            </div>
            <div class="card-event-details">
              <div class="card-event-icons">
                <div><i class="fas fa-map-marker-alt"></i></div>
                <div>Downtown Phoenix campus</div>
              </div>
            </div>
            <div class="card-link">
              <a href="#" class="">Regular text link here</a>
            </div>
          </div>

        </div>
        <div class="col col-12 col-lg-4">

        <div class="card">
          <div class="card-body">
            <p class="card-text">Body copy goes here. Limit to 5 lines max. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua eiusmod tempo.
          </p>
          </div>
          <div class="card-button">
            <a href="#" class="btn btn-dark">Button link here</a>
          </div>
        </div>

      </div>
      <div class="col col-12 col-lg-4">

        <div class="card card-centered">
          <i class="fas fa-rocket fa-2x card-icon-top"></i>
          <div class="card-button">
            <a href="#" class="btn btn-dark">Button link here</a>
          </div>
        </div>

        </div>
      </div>
    </div>
  </div>
);

const fourColumnComponent = (
  <div>
    <div class="container">
      <div class="row row-spaced pt-2 pb-2">
        <div class="col col-md-6 col-lg-3 col-12">

          <div class="card card-sm">
            <img class="card-img-top" src={exampleImage} alt="Card image cap" />
            <div class="card-header">
              <h3 class="card-title">Card default title</h3>
            </div>
            <div class="card-body">
              <p class="card-text">Body copy goes here. Limit to 5 lines max. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua eiusmod tempo.</p>
            </div>
            <div class="card-button">
              <a href="#" class="btn btn-dark btn-md">Button link here</a>
            </div>
          </div>

        </div>
        <div class="col col-md-6 col-lg-3 col-12">

          <div class="card card-sm">
            <img class="card-img-top" src={exampleImage} alt="Card image cap" />
            <div class="card-header">
              <h3 class="card-title">Card default title</h3>
            </div>
            <div class="card-body">
              <p class="card-text">Body copy goes here. Limit to 5 lines max. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua eiusmod tempo.</p>
            </div>
            <div class="card-button">
              <a href="#" class="btn btn-dark btn-md">Button link here</a>
            </div>
          </div>

        </div>
        <div class="col col-md-6 col-lg-3 col-12">

          <div class="card card-sm">
            <img class="card-img-top" src={exampleImage} alt="Card image cap" />
            <div class="card-header">
              <h3 class="card-title">Card default title</h3>
            </div>
            <div class="card-button">
              <a href="#" class="btn btn-dark btn-md">Button link here</a>
            </div>
          </div>

        </div>
        <div class="col col-md-6 col-lg-3 col-12">

          <div class="card card-sm">
            <div class="card-header">
              <h3 class="card-title">Card default title</h3>
            </div>
            <div class="card-body">
              <p class="card-text">Body copy goes here. Limit to 5 lines max. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua eiusmod tempo.</p>
            </div>
            <div class="card-button">
              <a href="#" class="btn btn-dark btn-md">Button link here</a>
            </div>
          </div>

        </div>
        <div class="col col-md-6 col-lg-3 col-12">

          <div class="card card-sm">
            <img class="card-img-top" src={exampleImage} alt="Card image cap" />
            <div class="card-header">
              <h3 class="card-title">Card default title</h3>
            </div>
            <div class="card-body">
              <p class="card-text">Body copy goes here. Limit to 5 lines max. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua eiusmod tempo.</p>
            </div>
            <div class="card-button">
              <a href="#" class="btn btn-dark btn-md">Button link here</a>
            </div>
          </div>

        </div>
        <div class="col col-md-6 col-lg-3 col-12">

          <div class="card card-sm">
            <img class="card-img-top" src={exampleImage} alt="Card image cap" />
            <div class="card-header">
              <h3 class="card-title">Card default title</h3>
            </div>
            <div class="card-body">
              <p class="card-text">Body copy goes here. Limit to 5 lines max. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua eiusmod tempo.</p>
            </div>
            <div class="card-button">
              <a href="#" class="btn btn-dark btn-md">Button link here</a>
            </div>
          </div>

        </div>
        <div class="col col-md-6 col-lg-3 col-12">

          <div class="card card-sm">
            <img class="card-img-top" src={exampleImage} alt="Card image cap" />
            <div class="card-header">
              <h3 class="card-title">Card default title</h3>
            </div>
            <div class="card-button">
              <a href="#" class="btn btn-dark btn-md">Button link here</a>
            </div>
          </div>

        </div>
        <div class="col col-md-6 col-lg-3 col-12">

          <div class="card card-sm">
            <div class="card-header">
              <h3 class="card-title">Card default title</h3>
            </div>
            <div class="card-body">
              <p class="card-text">Body copy goes here. Limit to 5 lines max. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua eiusmod tempo.</p>
            </div>
            <div class="card-button">
              <a href="#" class="btn btn-dark btn-md">Button link here</a>
            </div>
          </div>

        </div>
      </div>
    </div>

    <div class="container">
    <h2>Story cards</h2>
      <div class="row row-spaced pt-2 pb-2">
        <div class="col col-md-6 col-lg-3 col-12">

          <div class="card card-story card-sm">
            <img class="card-img-top" src={exampleImage} alt="Card image cap" />
            <div class="card-header">
              <h3 class="card-title">Card default title</h3>
            </div>
            <div class="card-body">
              <p class="card-text">Body copy goes here. Limit to 5 lines max. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua eiusmod tempo.</p>
            </div>
            <div class="card-button">
              <a href="#" class="btn btn-dark btn-md">Button link here</a>
            </div>
          </div>

        </div>
        <div class="col col-md-6 col-lg-3 col-12">

          <div class="card card-story card-sm">
            <img class="card-img-top" src={exampleImage} alt="Card image cap" />
            <div class="card-header">
              <h3 class="card-title">Card default title</h3>
            </div>
            <div class="card-body">
              <p class="card-text">Body copy goes here. Limit to 5 lines max. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua eiusmod tempo.</p>
            </div>
            <div class="card-button">
              <a href="#" class="btn btn-dark btn-md">Button link here</a>
            </div>
          </div>

        </div>
        <div class="col col-md-6 col-lg-3 col-12">

          <div class="card card-story card-sm">
            <img class="card-img-top" src={exampleImage} alt="Card image cap" />
            <div class="card-header">
              <h3 class="card-title">Card default title</h3>
            </div>
            <div class="card-button">
              <a href="#" class="btn btn-dark btn-md">Button link here</a>
            </div>
          </div>

        </div>
        <div class="col col-md-6 col-lg-3 col-12">

          <div class="card card-story card-sm">
            <div class="card-header">
              <h3 class="card-title">Card default title</h3>
            </div>
            <div class="card-body">
              <p class="card-text">Body copy goes here. Limit to 5 lines max. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua eiusmod tempo.</p>
            </div>
            <div class="card-button">
              <a href="#" class="btn btn-dark btn-md">Button link here</a>
            </div>
          </div>

        </div>

      </div>
    </div>
  </div>
);

const threeColumnComponent = (
  <div class="container">
    <div class="row row-spaced pt-2 pb-2">
      <div class="col col-12 col-lg-4">

        <div class="card">
          <img class="card-img-top" src={exampleImage} alt="Card image cap" />
          <div class="card-header">
            <h3 class="card-title">Card default title</h3>
          </div>
          <div class="card-body">
            <p class="card-text">Body copy goes here. Limit to 5 lines max. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua eiusmod tempo.
          </p>
          </div>
          <div class="card-button">
            <a href="#" class="btn btn-dark">Button link here</a>
          </div>
        </div>

      </div>
      <div class="col col-12 col-lg-4">

        <div class="card">
          <img class="card-img-top" src={exampleImage} alt="Card image cap" />
          <div class="card-header">
            <h3 class="card-title">Card default title</h3>
          </div>
          <div class="card-body">
            <p class="card-text">Body copy goes here. Limit to 5 lines max. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua eiusmod tempo.
          </p>
          </div>
          <div class="card-button">
            <a href="#" class="btn btn-dark">Button link here</a>
          </div>
        </div>

      </div>
      <div class="col col-12 col-lg-4">

        <div class="card">
          <img class="card-img-top" src={exampleImage} alt="Card image cap" />
          <div class="card-header">
            <h3 class="card-title">Card default title</h3>
          </div>
          <div class="card-button">
            <a href="#" class="btn btn-dark">Button link here</a>
          </div>
        </div>

      </div>
    </div>
  </div>
);

const twoColumnComponent = (
  <div class="container">
    <div class="row row-spaced pt-2 pb-2">
      <div class="col col-12 col-md-12 col-lg-6">

        <div class="card">
          <img class="card-img-top" src={exampleImage} alt="Card image cap" />
          <div class="card-header">
            <h3 class="card-title">Card default title</h3>
          </div>
          <div class="card-body">
            <p class="card-text">Body copy goes here. Limit to 5 lines max. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua eiusmod tempo.
          </p>
          </div>
          <div class="card-button">
            <a href="#" class="btn btn-dark">Button link here</a>
          </div>
        </div>

      </div>
      <div class="col col-12 col-md-12 col-lg-6">

        <div class="card">
          <img class="card-img-top" src={exampleImage} alt="Card image cap" />
          <div class="card-header">
            <h3 class="card-title">Card default title</h3>
          </div>
          <div class="card-body">
            <p class="card-text">Body copy goes here. Limit to 5 lines max. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua eiusmod tempo.
          </p>
          </div>
          <div class="card-button">
            <a href="#" class="btn btn-dark">Button link here</a>
          </div>
        </div>

      </div>
    </div>
  </div>
);

const horizontalComponent = (
  <div>
    <div class="container">
      <div class="row row-spaced pt-2 pb-2">
        <div class="col col-12 col-md-12 col-lg-6">

          <div class="card card-horizontal">
            <img class="card-img-top" src={exampleImage} alt="Card image cap" />
            <div class="card-content-wrapper">
              <div class="card-header">
                <h3 class="card-title">Card default title</h3>
              </div>
              <div class="card-body">
                <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut aliqua eiusmod tempo.</p>
              </div>
              <div class="card-link">
                <a href="#" class="">Regular text link here</a>
              </div>
              <div class="card-tags">
                <a class="btn btn-tag btn-tag-alt-white" href="#" >test tag</a><a class="btn btn-tag btn-tag-alt-white" href="#" >test tag 2</a><a class="btn btn-tag btn-tag-alt-white" href="#" >test tag 3</a>
              </div>
            </div>
          </div>

        </div>
        <div class="col col-12 col-md-12 col-lg-6">

          <div class="card card-horizontal">
            <img class="card-img-top" src={exampleImage} alt="Card image cap" />
            <div class="card-content-wrapper">
              <div class="card-header">
                <h3 class="card-title">Card default title</h3>
              </div>
              <div class="card-body">
                <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua eiusmod tempo.</p>
              </div>
              <div class="card-button">
                <a href="#" class="btn btn-dark">Button link here</a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
    <hr/>
    <div class="container">
      <div class="row row-spaced pt-2 pb-2">
        <div class="col col-12 col-md-12 col-lg-6">

          <div class="card card-degree card-horizontal">
            <img class="card-img-top" src={exampleImage} alt="Card image cap" />
            <div class="card-content-wrapper">
              <div class="card-header">
                <h3 class="card-title">Card default title</h3>
              </div>
              <div class="card-body">
                <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut aliqua eiusmod tempo.</p>
              </div>
              <div class="card-link">
                <a href="#" class="">Regular text link here</a>
              </div>
              <div class="card-tags">
                <a class="btn btn-tag btn-tag-alt-white" href="#" >test tag</a><a class="btn btn-tag btn-tag-alt-white" href="#" >test tag 2</a><a class="btn btn-tag btn-tag-alt-white" href="#" >test tag 3</a>
              </div>
            </div>
          </div>

        </div>
        <div class="col col-12 col-md-12 col-lg-6">

          <div class="card card-degree card-horizontal">
            <img class="card-img-top" src={exampleImage} alt="Card image cap" />
            <div class="card-content-wrapper">
              <div class="card-header">
                <h3 class="card-title">Card default title</h3>
              </div>
              <div class="card-body">
                <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua eiusmod tempo.</p>
              </div>
              <div class="card-button">
                <a href="#" class="btn btn-dark">Button link here</a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
    <hr/>
    <div class="container">
      <div class="row row-spaced pt-2 pb-2">
        <div class="col col-12 col-md-12 col-lg-6">

          <div class="card card-event card-horizontal">
            <img class="card-img-top" src={exampleImage} alt="Card image cap" />
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
          </div>

        </div>
        <div class="col col-12 col-md-12 col-lg-6">

          <div class="card card-event card-horizontal">
            <img class="card-img-top" src={exampleImage} alt="Card image cap" />
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
          </div>

        </div>
      </div>
    </div>
    <hr/>
    <div class="container">
      <div class="row row-spaced pt-2 pb-2">
        <div class="col col-12 col-md-12 col-lg-6">

          <div class="card card-story card-horizontal">
            <img class="card-img-top" src={exampleImage} alt="Card image cap" />
            <div class="card-content-wrapper">
              <div class="card-header">
                <h3 class="card-title">Card default title</h3>
              </div>
              <div class="card-body">
                <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut aliqua eiusmod tempo.</p>
              </div>
              <div class="card-link">
                <a href="#" class="">Regular text link here</a>
              </div>
              <div class="card-tags">
                <a class="btn btn-tag btn-tag-alt-white" href="#" >test tag</a><a class="btn btn-tag btn-tag-alt-white" href="#" >test tag 2</a><a class="btn btn-tag btn-tag-alt-white" href="#" >test tag 3</a>
              </div>
            </div>
          </div>

        </div>
        <div class="col col-12 col-md-12 col-lg-6">
          <div class="card card-story card-horizontal">
            <img class="card-img-top" src={exampleImage} alt="Card image cap" />
            <div class="card-content-wrapper">
              <div class="card-header">
                <h3 class="card-title">Card default title</h3>
              </div>
              <div class="card-body">
                <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua eiusmod tempo.</p>
              </div>
              <div class="card-button">
                <a href="#" class="btn btn-dark">Button link here</a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
    <hr/>
  </div>
);

const sizingUsingUtilitiesComponent = (
  <div>
    <div class="card w-75">
      <img class="card-img-top" src={exampleImage} alt="Card image cap" />
      <div class="card-header">
        <h3 class="card-title">Card default title</h3>
      </div>
      <div class="card-body">
        <p class="card-text">Body copy goes here. Limit to 5 lines max. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua eiusmod tempo.</p>
      </div>
      <div class="card-button">
        <a href="#" class="btn btn-dark">Button link here</a>
      </div>
    </div>

    <hr />

    <div class="card w-50">
      <img class="card-img-top" src={exampleImage} alt="Card image cap" />
      <div class="card-header">
        <h3 class="card-title">Card default title</h3>
      </div>
      <div class="card-body">
        <p class="card-text">Body copy goes here. Limit to 5 lines max. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua eiusmod tempo.</p>
      </div>
      <div class="card-button">
        <a href="#" class="btn btn-dark">Button link here</a>
      </div>
    </div>
  </div>
);

const checkboxStackedCardComponent = (
  <div>
    <div class="container">
      <div class="row row-spaced pt-2 pb-2">
        <div class="col col-12 col-md-6 col-lg-4">

          <div class="card card-checkbox-stacked">
            <div class="card-image-content">
              <div class="card-image-gradient checkbox-card">
                <img class="card-img-top" src={exampleImage} alt="Card image cap" />
              </div>
              <form class="uds-form card-image-overlay-content ml-4">
                <fieldset class="card-image-fieldset">
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="checkbox2" value="option2" />
                    <label class="form-check-label" for="checkbox2">Option 2</label>
                  </div>
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="checkbox1" value="option1" checked />
                    <label class="form-check-label" for="checkbox1">Option 1</label>
                  </div>
                </fieldset>
              </form>
            </div>
            <div class="card-header">
              <h3 class="card-title">Card default title</h3>
            </div>
            <div class="card-body">
              <p class="card-text">Basic card with mixed content and a fixed width.  Cards have no margin and no fixed width by default (they’ll naturally fill the full width of its parent), so use 'spacing utilities'.</p>
            </div>
            <div class="card-button">
              <a href="#" class="btn btn-maroon">Default button</a>
            </div>
            <div class="card-link">
              <a href="#" class="">Regular text link here</a>
            </div>
            <div class="card-tags">
              <a class="btn btn-tag btn-tag-alt-white" href="#" >test tag</a><a class="btn btn-tag btn-tag-alt-white" href="#" >test tag 2</a><a class="btn btn-tag btn-tag-alt-white" href="#" >test tag 3</a>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
);

const checkboxInlineCardComponent = (
<div class="container">
  <div class="row row-spaced pt-2 pb-2">
    <div class="col col-12 col-md-6 col-lg-4">
      <div class="card card-checkbox-inline">
        <div class="card-image-content">
          <div class="card-image-gradient checkbox-card">
            <img class="card-img-top" src={exampleImage} alt="Card image cap" />
          </div>
          <form class="uds-form card-image-overlay-content ml-4">
            <fieldset class="card-image-fieldset inline">
              <div class="form-check">
                <input class="form-check-input" type="checkbox" id="checkbox2" value="option2" />
                <label class="form-check-label" for="checkbox2">Option 2</label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" id="checkbox1" value="option1" checked />
                <label class="form-check-label" for="checkbox1">Option 1</label>
              </div>
            </fieldset>
          </form>
        </div>
        <div class="card-header">
          <h3 class="card-title">Card default title</h3>
        </div>
        <div class="card-body">
          <p class="card-text">Basic card with mixed content and a fixed width.  Cards have no margin and no fixed width by default (they’ll naturally fill the full width of its parent), so use 'spacing utilities'.</p>
        </div>
        <div class="card-button">
          <a href="#" class="btn btn-maroon">Default button</a>
        </div>
        <div class="card-link">
          <a href="#" class="">Regular text link here</a>
        </div>
        <div class="card-tags">
          <a class="btn btn-tag btn-tag-alt-white" href="#" >test tag</a><a class="btn btn-tag btn-tag-alt-white" href="#" >test tag 2</a><a class="btn btn-tag btn-tag-alt-white" href="#" >test tag 3</a>
        </div>
      </div>

    </div>
  </div>
</div>
);

const mediaTypeOverlayCardComponent = (
  <div class="container">
    <div class="row row-spaced pt-2 pb-2">
      <div class="col col-12 col-md-6 col-lg-4">

        <div class="card card-checkbox-inline">
          <div class="card-image-content">
            <div class="card-image-gradient">
              <img class="card-img-top" src={exampleImage} alt="Card image cap" />
            </div>
            <div class="card-image-overlay-content media-type-overlay ml-4 mb-4">
              <span class="fas icon-small fa-video" title="Video Icon"></span>
            </div>
          </div>
          <div class="card-header">
            <h3 class="card-title">Card default title</h3>
          </div>
          <div class="card-body">
            <p class="card-text">Basic card with mixed content and a fixed width.  Cards have no margin and no fixed width by default (they’ll naturally fill the full width of its parent), so use 'spacing utilities'.</p>
          </div>
          <div class="card-button">
            <a href="#" class="btn btn-maroon">Default button</a>
          </div>
          <div class="card-link">
            <a href="#" class="">Regular text link here</a>
          </div>
          <div class="card-tags">
            <a class="btn btn-tag btn-tag-alt-white" href="#" >test tag</a><a class="btn btn-tag btn-tag-alt-white" href="#" >test tag 2</a><a class="btn btn-tag btn-tag-alt-white" href="#" >test tag 3</a>
          </div>
        </div>

      </div>
      <div class="col col-12 col-md-6 col-lg-4">

        <div class="card card-story card-checkbox-inline">
          <div class="card-image-content">
            <div class="card-image-gradient">
              <img class="card-img-top" src={exampleImage} alt="Card image cap" />
            </div>
            <div class="card-image-overlay-content media-type-overlay ml-4 mb-2">
              <span class="fas icon-small fa-video" title="Video Icon"></span>
            </div>
          </div>
          <div class="card-header">
            <h3 class="card-title">Card default title</h3>
          </div>
          <div class="card-body">
            <p class="card-text">Basic card with mixed content and a fixed width.  Cards have no margin and no fixed width by default (they’ll naturally fill the full width of its parent), so use 'spacing utilities'.</p>
          </div>
          <div class="card-button">
            <a href="#" class="btn btn-maroon">Default button</a>
          </div>
          <div class="card-link">
            <a href="#" class="">Regular text link here</a>
          </div>
          <div class="card-tags">
            <a class="btn btn-tag btn-tag-alt-white" href="#" >test tag</a><a class="btn btn-tag btn-tag-alt-white" href="#" >test tag 2</a><a class="btn btn-tag btn-tag-alt-white" href="#" >test tag 3</a>
          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col col-12">
        <div class="pt-4">
          <h2>Approved overlay icons</h2>
        </div>
      </div>
    </div>
    <div class="row">
        <span class="col mr-4">
          <h3>Video</h3>
          <div class="media-type-overlay mt-2">
            <span class="fas icon-small fa-video" title="Video Icon"></span>
          </div>
        </span>
        <span class="col mr-4">
          <h3>Audio</h3>
          <div class="media-type-overlay mt-2">
            <span class="fas icon-small fa-volume-up" title="Video Icon"></span>
          </div>
        </span>
        <span class="col mr-4">
          <h3>VR/AR/360</h3>
          <div class="media-type-overlay mt-2">
            <span class="fas icon-small fa-street-view" title="Video Icon"></span>
          </div>
        </span>
        <span class="col mr-4">
          <h3>Image gallery</h3>
          <div class="media-type-overlay mt-2">
            <span class="fas icon-small fa-images" title="Video Icon"></span>
          </div>
        </span>
    </div>
  </div>
);




export const defaultCard = createStory(defaultCardComponent);
export const cardImages = createStory(cardImagesComponent);
export const cardTitles = createStory(cardTitlesComponent);
export const cardBody = createStory(cardBodyComponent);
export const cardIcon = createStory(cardIconComponent);
export const cardEventInfo = createStory(cardEventInfoComponent);
export const cardCallToActions = createStory(cardCallToActionsComponent);
export const cardTags = createStory(cardTagsComponent);
export const degreeCard = createStory(degreeCardComponent);
export const storyCard = createStory(storyCardComponent);
export const eventCard = createStory(eventCardComponent);
export const hoverable = createStory(hoverableComponent);
export const variations = createStory(variationsComponent);
export const fourColumn = createStory(fourColumnComponent);
export const threeColumn = createStory(threeColumnComponent);
export const twoColumn = createStory(twoColumnComponent);
export const horizontal = createStory(horizontalComponent);
export const sizingUsingUtilities = createStory(sizingUsingUtilitiesComponent);
export const checkboxStackedCard = createStory(checkboxStackedCardComponent);
export const checkboxInlineCard = createStory(checkboxInlineCardComponent);
export const mediaTypeOverlayCard = createStory(mediaTypeOverlayCardComponent);
