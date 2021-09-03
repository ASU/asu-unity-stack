import React from 'react';
import { createComponent, createStory } from '../../../helpers/wrapper.js';
import { initCarousel } from './image-carousel';
export default createComponent('Image Carousel', 'ASUCMS');


export const defaultCard = createStory(
  <div class="asu-cms-image-carousel" style={{maxWidth: '1920px', margin: 'auto'}}>
    <div class="carousel-header-section">
      <h2><span class="highlight-gold">One university, many places</span></h2>
    </div>
    <div class="image-carousel">
      <div id="one-university-carousel" class="glide">
        <div class="glide__track" data-glide-el="track">
          <ul class="glide__slides">
            <li class="glide__slide">
              <div class="asucms-image">
                <img
                  src="https://source.unsplash.com/random/700x400"
                  alt="Polytechnic campus" />
                <div class="content-area">
                  <div class="highlight-gray slide-header">Polytechnic campus</div>
                  <input class="btn btn-gold" type="submit" value="Schedule a tour"></input>
                </div>
              </div>
            </li>
            <li class="glide__slide">
              <div class="asucms-image">
                <img
                  src="https://source.unsplash.com/random/700x400"
                  alt="Tempe campus" />
                <div class="content-area">
                  <div class="highlight-gray slide-header">Tempe campus</div>
                  <input class="btn btn-gold" type="submit" value="Schedule a tour"></input>
                </div>
              </div>
            </li>
            <li class="glide__slide">
              <div class="asucms-image">
                <img
                  src="https://source.unsplash.com/random/700x400"
                  alt="West campus" />
                <div class="content-area">
                  <div class="highlight-gray slide-header">West campus</div>
                  <input class="btn btn-gold" type="submit" value="Schedule a tour"></input>
                </div>
              </div>
            </li>
            <li class="glide__slide">
              <div class="asucms-image">
                <img
                  src="https://source.unsplash.com/random/700x400"
                  alt="Downtown Phoenix Campus" />
                <div class="content-area">
                  <div class="highlight-gray slide-header">Downtown Phoenix Campus</div>
                  <input class="btn btn-gold" type="submit" value="Schedule a tour"></input>
                </div>
              </div>
            </li>
            <li class="glide__slide">
              <div class="asucms-image">
                <img
                  src="https://source.unsplash.com/random/700x400"
                  alt="Skysong" />
                <div class="content-area">
                  <div class="highlight-gray slide-header">Skysong</div>
                  <input class="btn btn-gold" type="submit" value="Schedule a tour"></input>
                </div>
              </div>
            </li>
            <li class="glide__slide">
              <div class="asucms-image">
                <img
                  src="https://source.unsplash.com/random/700x400"
                  alt="Washington D.C." />
                <div class="content-area">
                  <div class="highlight-gray slide-header">Washington D.C.</div>
                  <input class="btn btn-gold" type="submit" value="Schedule a tour"></input>
                </div>
              </div>
            </li>
            <li class="glide__slide">
              <div class="asucms-image">
                <img
                  src="https://source.unsplash.com/random/700x400"
                  alt="Lake Havasu" />
                <div class="content-area">
                  <div class="highlight-gray slide-header">Lake Havasu</div>
                  <input class="btn btn-gold" type="submit" value="Schedule a tour"></input>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div class="glide__arrows" data-glide-el="controls">
          <button class="glide__arrow glide__arrow--left" data-glide-dir="<">
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="chevron-left"
              className="svg-inline--fa fa-chevron-left fa-w-10"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 100 100"
            >
              <path fill="currentColor" d="M 50,0 L 60,10 L 20,50 L 60,90 L 50,100 L 0,50 Z" class="arrow" transform="translate(15,0)"></path>
            </svg>
          </button>
          <button class="glide__arrow glide__arrow--right" data-glide-dir=">">
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="chevron-right"
              className="svg-inline--fa fa-chevron-right fa-w-10"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 100 100"
            >
              <path fill="currentColor" d="M 50,0 L 60,10 L 20,50 L 60,90 L 50,100 L 0,50 Z" class="arrow" transform="translate(85,100) rotate(180)"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
    <script src="https://unpkg.com/@glidejs/glide@3.4.1/dist/glide.js"></script>
  </div>,
  initCarousel
);
