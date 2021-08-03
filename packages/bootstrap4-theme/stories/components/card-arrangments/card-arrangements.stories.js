import React from 'react';
import { createComponent, createStory } from '../../../helpers/wrapper.js'
export default createComponent('Content Sections/Card Arrangements');
import exampleImage from './example-image.jpg';

export const TwoCardArrangement = createStory(
  <div class="container">
    <div class="row">
      { /* Component start */  }
      <div class="uds-card-arrangement">
        <div class="uds-card-arrangement-content-container">
          <h2>Lorem ipsum dolor sit amet</h2>
          <button class="btn btn-dark">Default button</button>
        </div>
        <div class="uds-card-arrangement-card-container">
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
              <a href="#" class="btn btn-sm btn-dark">Button link here</a>
            </div>
            <div class="card-link">
              <a href="#" class="">Regular text link here</a>
            </div>
            <div class="card-tags">
              <a class="btn btn-tag btn-tag-alt-white" href="#" >test tag</a> <a class="btn btn-tag btn-tag-alt-white" href="#" >test tag 2</a> <a class="btn btn-tag btn-tag-alt-white" href="#" >test tag 3</a>
            </div>
          </div>
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
              <a href="#" class="btn btn-sm btn-dark">Button link here</a>
            </div>
            <div class="card-link">
              <a href="#" class="">Regular text link here</a>
            </div>
            <div class="card-tags">
              <a class="btn btn-tag btn-tag-alt-white" href="#" >test tag</a> <a class="btn btn-tag btn-tag-alt-white" href="#" >test tag 2</a> <a class="btn btn-tag btn-tag-alt-white" href="#" >test tag 3</a>
            </div>
          </div>
        </div>
      </div>
      { /* Component end */  }
    </div>
  </div>
);

export const ThreeCardArrangement = createStory(
  <div class="container">
    <div class="row">
      { /* Component start */  }
      <div class="uds-card-arrangement">
        <div class="uds-card-arrangement-content-container">
          <h2>Lorem ipsum dolor sit amet</h2>
          <button class="btn btn-dark">Default button</button>
        </div>
        <div class="uds-card-arrangement-card-container">
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
              <a href="#" class="btn btn-sm btn-dark">Button link here</a>
            </div>
            <div class="card-link">
              <a href="#" class="">Regular text link here</a>
            </div>
            <div class="card-tags">
              <a class="btn btn-tag btn-tag-alt-white" href="#" >test tag</a> <a class="btn btn-tag btn-tag-alt-white" href="#" >test tag 2</a> <a class="btn btn-tag btn-tag-alt-white" href="#" >test tag 3</a>
            </div>
          </div>
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
              <a href="#" class="btn btn-sm btn-dark">Button link here</a>
            </div>
            <div class="card-link">
              <a href="#" class="">Regular text link here</a>
            </div>
            <div class="card-tags">
              <a class="btn btn-tag btn-tag-alt-white" href="#" >test tag</a> <a class="btn btn-tag btn-tag-alt-white" href="#" >test tag 2</a> <a class="btn btn-tag btn-tag-alt-white" href="#" >test tag 3</a>
            </div>
          </div>
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
              <a href="#" class="btn btn-sm btn-dark">Button link here</a>
            </div>
            <div class="card-link">
              <a href="#" class="">Regular text link here</a>
            </div>
            <div class="card-tags">
              <a class="btn btn-tag btn-tag-alt-white" href="#" >test tag</a> <a class="btn btn-tag btn-tag-alt-white" href="#" >test tag 2</a> <a class="btn btn-tag btn-tag-alt-white" href="#" >test tag 3</a>
            </div>
          </div>
        </div>
      </div>
      { /* Component end */  }
    </div>
  </div>
);

export const ThreeCardVerticalArrangement = createStory(
  <div class="container">
    <div class="row">
      { /* Component start */  }
      <div class="uds-card-arrangement uds-card-arrangement-vertical">
        <div class="uds-card-arrangement-content-container">
          <h2>Lorem ipsum dolor sit amet</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
          <button class="btn btn-dark">Default button</button>
        </div>
        <div class="uds-card-arrangement-card-container">
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
                  <a class="btn btn-tag btn-tag-alt-white" href="#" >test tag</a> <a class="btn btn-tag btn-tag-alt-white" href="#" >test tag 2</a> <a class="btn btn-tag btn-tag-alt-white" href="#" >test tag 3</a>
                </div>
              </div>
            </div>
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
                  <a class="btn btn-tag btn-tag-alt-white" href="#" >test tag</a> <a class="btn btn-tag btn-tag-alt-white" href="#" >test tag 2</a> <a class="btn btn-tag btn-tag-alt-white" href="#" >test tag 3</a>
                </div>
              </div>
            </div>
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
                  <a class="btn btn-tag btn-tag-alt-white" href="#" >test tag</a> <a class="btn btn-tag btn-tag-alt-white" href="#" >test tag 2</a> <a class="btn btn-tag btn-tag-alt-white" href="#" >test tag 3</a>
                </div>
              </div>
            </div>
        </div>
      </div>
      { /* Component end */  }
    </div>
  </div>
);

export const FourCardArrangement = createStory(
  <div class="container">
    <div class="row">
      { /* Component start */  }
      <div class="uds-card-arrangement">
        <div class="uds-card-arrangement-content-container">
          <h2>Lorem ipsum dolor sit amet</h2>
          <button class="btn btn-dark">Default button</button>
        </div>
        <div class="uds-card-arrangement-card-container">
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
              <a href="#" class="btn btn-sm btn-dark">Button link here</a>
            </div>
            <div class="card-link">
              <a href="#" class="">Regular text link here</a>
            </div>
            <div class="card-tags">
              <a class="btn btn-tag btn-tag-alt-white" href="#" >test tag</a> <a class="btn btn-tag btn-tag-alt-white" href="#" >test tag 2</a> <a class="btn btn-tag btn-tag-alt-white" href="#" >test tag 3</a>
            </div>
          </div>
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
              <a href="#" class="btn btn-sm btn-dark">Button link here</a>
            </div>
            <div class="card-link">
              <a href="#" class="">Regular text link here</a>
            </div>
            <div class="card-tags">
              <a class="btn btn-tag btn-tag-alt-white" href="#" >test tag</a> <a class="btn btn-tag btn-tag-alt-white" href="#" >test tag 2</a> <a class="btn btn-tag btn-tag-alt-white" href="#" >test tag 3</a>
            </div>
          </div>
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
              <a href="#" class="btn btn-sm btn-dark">Button link here</a>
            </div>
            <div class="card-link">
              <a href="#" class="">Regular text link here</a>
            </div>
            <div class="card-tags">
              <a class="btn btn-tag btn-tag-alt-white" href="#" >test tag</a> <a class="btn btn-tag btn-tag-alt-white" href="#" >test tag 2</a> <a class="btn btn-tag btn-tag-alt-white" href="#" >test tag 3</a>
            </div>
          </div>
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
              <a href="#" class="btn btn-sm btn-dark">Button link here</a>
            </div>
            <div class="card-link">
              <a href="#" class="">Regular text link here</a>
            </div>
            <div class="card-tags">
              <a class="btn btn-tag btn-tag-alt-white" href="#" >test tag</a> <a class="btn btn-tag btn-tag-alt-white" href="#" >test tag 2</a> <a class="btn btn-tag btn-tag-alt-white" href="#" >test tag 3</a>
            </div>
          </div>
        </div>
      </div>
      { /* Component end */  }
    </div>
  </div>
);

export const CardsAutoArrangementTwoColumns = createStory(
  <div class="container">
    <div class="row">
      { /* Component start */  }
      <div class="uds-card-arrangement">
        <div class="uds-card-arrangement-content-container">
          <h2>Lorem ipsum dolor sit amet</h2>
          <button class="btn btn-dark">Default button</button>
        </div>
        <div class="uds-card-arrangement-card-container auto-arrangement">
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
              <a href="#" class="btn btn-sm btn-dark">Button link here</a>
            </div>
            <div class="card-link">
              <a href="#" class="">Regular text link here</a>
            </div>
            <div class="card-tags">
              <a class="btn btn-tag btn-tag-alt-white" href="#" >test tag</a> <a class="btn btn-tag btn-tag-alt-white" href="#" >test tag 2</a> <a class="btn btn-tag btn-tag-alt-white" href="#" >test tag 3</a>
            </div>
          </div>
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
              <a href="#" class="btn btn-sm btn-dark">Button link here</a>
            </div>
            <div class="card-link">
              <a href="#" class="">Regular text link here</a>
            </div>
            <div class="card-tags">
              <a class="btn btn-tag btn-tag-alt-white" href="#" >test tag</a> <a class="btn btn-tag btn-tag-alt-white" href="#" >test tag 2</a> <a class="btn btn-tag btn-tag-alt-white" href="#" >test tag 3</a>
            </div>
          </div>
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
              <a href="#" class="btn btn-sm btn-dark">Button link here</a>
            </div>
            <div class="card-link">
              <a href="#" class="">Regular text link here</a>
            </div>
            <div class="card-tags">
              <a class="btn btn-tag btn-tag-alt-white" href="#" >test tag</a> <a class="btn btn-tag btn-tag-alt-white" href="#" >test tag 2</a> <a class="btn btn-tag btn-tag-alt-white" href="#" >test tag 3</a>
            </div>
          </div>
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
              <a href="#" class="btn btn-sm btn-dark">Button link here</a>
            </div>
            <div class="card-link">
              <a href="#" class="">Regular text link here</a>
            </div>
            <div class="card-tags">
              <a class="btn btn-tag btn-tag-alt-white" href="#" >test tag</a> <a class="btn btn-tag btn-tag-alt-white" href="#" >test tag 2</a> <a class="btn btn-tag btn-tag-alt-white" href="#" >test tag 3</a>
            </div>
          </div>
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
              <a href="#" class="btn btn-sm btn-dark">Button link here</a>
            </div>
            <div class="card-link">
              <a href="#" class="">Regular text link here</a>
            </div>
            <div class="card-tags">
              <a class="btn btn-tag btn-tag-alt-white" href="#" >test tag</a> <a class="btn btn-tag btn-tag-alt-white" href="#" >test tag 2</a> <a class="btn btn-tag btn-tag-alt-white" href="#" >test tag 3</a>
            </div>
          </div>
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
              <a href="#" class="btn btn-sm btn-dark">Button link here</a>
            </div>
            <div class="card-link">
              <a href="#" class="">Regular text link here</a>
            </div>
            <div class="card-tags">
              <a class="btn btn-tag btn-tag-alt-white" href="#" >test tag</a> <a class="btn btn-tag btn-tag-alt-white" href="#" >test tag 2</a> <a class="btn btn-tag btn-tag-alt-white" href="#" >test tag 3</a>
            </div>
          </div>
        </div>
      </div>
      { /* Component end */  }
    </div>
  </div>
);

export const CardsAutoArrangementThreeColumns = createStory(
  <div class="container">
    <div class="row">
      { /* Component start */  }
      <div class="uds-card-arrangement">
        <div class="uds-card-arrangement-content-container">
          <h2>Lorem ipsum dolor sit amet</h2>
          <button class="btn btn-dark">Default button</button>
        </div>
        <div class="uds-card-arrangement-card-container auto-arrangement three-columns">
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
              <a href="#" class="btn btn-sm btn-dark">Button link here</a>
            </div>
            <div class="card-link">
              <a href="#" class="">Regular text link here</a>
            </div>
            <div class="card-tags">
              <a class="btn btn-tag btn-tag-alt-white" href="#" >test tag</a> <a class="btn btn-tag btn-tag-alt-white" href="#" >test tag 2</a> <a class="btn btn-tag btn-tag-alt-white" href="#" >test tag 3</a>
            </div>
          </div>
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
              <a href="#" class="btn btn-sm btn-dark">Button link here</a>
            </div>
            <div class="card-link">
              <a href="#" class="">Regular text link here</a>
            </div>
            <div class="card-tags">
              <a class="btn btn-tag btn-tag-alt-white" href="#" >test tag</a> <a class="btn btn-tag btn-tag-alt-white" href="#" >test tag 2</a> <a class="btn btn-tag btn-tag-alt-white" href="#" >test tag 3</a>
            </div>
          </div>
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
              <a href="#" class="btn btn-sm btn-dark">Button link here</a>
            </div>
            <div class="card-link">
              <a href="#" class="">Regular text link here</a>
            </div>
            <div class="card-tags">
              <a class="btn btn-tag btn-tag-alt-white" href="#" >test tag</a> <a class="btn btn-tag btn-tag-alt-white" href="#" >test tag 2</a> <a class="btn btn-tag btn-tag-alt-white" href="#" >test tag 3</a>
            </div>
          </div>
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
              <a href="#" class="btn btn-sm btn-dark">Button link here</a>
            </div>
            <div class="card-link">
              <a href="#" class="">Regular text link here</a>
            </div>
            <div class="card-tags">
              <a class="btn btn-tag btn-tag-alt-white" href="#" >test tag</a> <a class="btn btn-tag btn-tag-alt-white" href="#" >test tag 2</a> <a class="btn btn-tag btn-tag-alt-white" href="#" >test tag 3</a>
            </div>
          </div>
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
              <a href="#" class="btn btn-sm btn-dark">Button link here</a>
            </div>
            <div class="card-link">
              <a href="#" class="">Regular text link here</a>
            </div>
            <div class="card-tags">
              <a class="btn btn-tag btn-tag-alt-white" href="#" >test tag</a> <a class="btn btn-tag btn-tag-alt-white" href="#" >test tag 2</a> <a class="btn btn-tag btn-tag-alt-white" href="#" >test tag 3</a>
            </div>
          </div>
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
              <a href="#" class="btn btn-sm btn-dark">Button link here</a>
            </div>
            <div class="card-link">
              <a href="#" class="">Regular text link here</a>
            </div>
            <div class="card-tags">
              <a class="btn btn-tag btn-tag-alt-white" href="#" >test tag</a> <a class="btn btn-tag btn-tag-alt-white" href="#" >test tag 2</a> <a class="btn btn-tag btn-tag-alt-white" href="#" >test tag 3</a>
            </div>
          </div>
        </div>
      </div>
      { /* Component end */  }
    </div>
  </div>
);

export const CardsAutoArrangementFourColumns = createStory(
  <div class="container">
    <div class="row">
      { /* Component start */  }
      <div class="uds-card-arrangement">
        <div class="uds-card-arrangement-content-container">
          <h2>Lorem ipsum dolor sit amet</h2>
          <button class="btn btn-dark">Default button</button>
        </div>
        <div class="uds-card-arrangement-card-container auto-arrangement four-columns">
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
              <a href="#" class="btn btn-sm btn-dark">Button link here</a>
            </div>
            <div class="card-link">
              <a href="#" class="">Regular text link here</a>
            </div>
            <div class="card-tags">
              <a class="btn btn-tag btn-tag-alt-white" href="#" >test tag</a> <a class="btn btn-tag btn-tag-alt-white" href="#" >test tag 2</a> <a class="btn btn-tag btn-tag-alt-white" href="#" >test tag 3</a>
            </div>
          </div>
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
              <a href="#" class="btn btn-sm btn-dark">Button link here</a>
            </div>
            <div class="card-link">
              <a href="#" class="">Regular text link here</a>
            </div>
            <div class="card-tags">
              <a class="btn btn-tag btn-tag-alt-white" href="#" >test tag</a> <a class="btn btn-tag btn-tag-alt-white" href="#" >test tag 2</a> <a class="btn btn-tag btn-tag-alt-white" href="#" >test tag 3</a>
            </div>
          </div>
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
              <a href="#" class="btn btn-sm btn-dark">Button link here</a>
            </div>
            <div class="card-link">
              <a href="#" class="">Regular text link here</a>
            </div>
            <div class="card-tags">
              <a class="btn btn-tag btn-tag-alt-white" href="#" >test tag</a> <a class="btn btn-tag btn-tag-alt-white" href="#" >test tag 2</a> <a class="btn btn-tag btn-tag-alt-white" href="#" >test tag 3</a>
            </div>
          </div>
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
              <a href="#" class="btn btn-sm btn-dark">Button link here</a>
            </div>
            <div class="card-link">
              <a href="#" class="">Regular text link here</a>
            </div>
            <div class="card-tags">
              <a class="btn btn-tag btn-tag-alt-white" href="#" >test tag</a> <a class="btn btn-tag btn-tag-alt-white" href="#" >test tag 2</a> <a class="btn btn-tag btn-tag-alt-white" href="#" >test tag 3</a>
            </div>
          </div>
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
              <a href="#" class="btn btn-sm btn-dark">Button link here</a>
            </div>
            <div class="card-link">
              <a href="#" class="">Regular text link here</a>
            </div>
            <div class="card-tags">
              <a class="btn btn-tag btn-tag-alt-white" href="#" >test tag</a> <a class="btn btn-tag btn-tag-alt-white" href="#" >test tag 2</a> <a class="btn btn-tag btn-tag-alt-white" href="#" >test tag 3</a>
            </div>
          </div>
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
              <a href="#" class="btn btn-sm btn-dark">Button link here</a>
            </div>
            <div class="card-link">
              <a href="#" class="">Regular text link here</a>
            </div>
            <div class="card-tags">
              <a class="btn btn-tag btn-tag-alt-white" href="#" >test tag</a> <a class="btn btn-tag btn-tag-alt-white" href="#" >test tag 2</a> <a class="btn btn-tag btn-tag-alt-white" href="#" >test tag 3</a>
            </div>
          </div>
        </div>
      </div>
      { /* Component end */  }
    </div>
  </div>
);
