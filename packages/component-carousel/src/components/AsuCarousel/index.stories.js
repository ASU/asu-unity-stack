/** @jsx h */

import { h } from "preact";

import { AsuCarousel } from ".";
import Glide from "@glidejs/glide";

export default {
  component: AsuCarousel,
  title: "Carousel",
};

export const base = () => <AsuCarousel></AsuCarousel>;
/*
export const base = () => (
  <FoldableCard
    id="foldable-card-1"
    head={
      <H4>
        <span class="fa fa-mobile" />
        <a

        >
          ASU Mobile App (push notifications)
        </a>
      </H4>
    }
  >
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud
  </FoldableCard>
);
*/

/*
import { AsuCarousel, window } from "global";
import { AsuCarousel } from "."; // <-- path wrong now - co-locate story with component.
import Glide from "@glidejs/glide";

// TODO throws errors - scss import failing.
//import "../src/styles.scss";

export default {
  title: "Carousel",
};

export const BaseCarousel = () => {
  window.addEventListener("DOMContentLoaded", event => {
    // TODO this is done in the component now - see src/index.js
    //new Glide(".glide").mount();
  });

  // TODO IS the issue that the mount needs to be on the inner component?
  return `
<div>hey
  <AsuCarousel></AsuCarousel>
</div>`;
*/

/*
  return `
  <!-- Carousel structure -->
  <div class="glide">

    <!-- Main carousel -->
    <div class="glide__track" data-glide-el="track">
      <ul class="glide__slides">
        <li class="glide__slide">0</li>
        <li class="glide__slide">1</li>
        <li class="glide__slide">2</li>
      </ul>
    </div>

    <!-- Arrow Controls -->
    <div class="glide__arrows" data-glide-el="controls">
      <button class="glide__arrow glide__arrow--left" data-glide-dir="<">prev</button>
      <button class="glide__arrow glide__arrow--right" data-glide-dir=">">next</button>
    </div>

    <!-- Bullet Controls -->
    <div class="glide__bullets" data-glide-el="controls[nav]">
      <button class="glide__bullet" data-glide-dir="=0"></button>
      <button class="glide__bullet" data-glide-dir="=1"></button>
      <button class="glide__bullet" data-glide-dir="=2"></button>
    </div>

  </div>
`;
};
*/
