// @ts-check
import React from "react";

import { CardCarousel } from ".";

// eslint-disable-next-line jest/no-mocks-import
import { cardCarouselItems } from "../../../__mocks__/data/props-mock";
import { Basic as Header } from "../../../../bootstrap4-theme/stories/organisms/global-header/global-header.templates";

export default {
  component: CardCarousel,
  title: "Card Carousel",
};

export const ThreeItemCarousel = () => (
  <div>
    {Header}
    <div className="container">
      <div className="row">
        <div className="col-12">
          <CardCarousel
            perView="3"
            cardItems={cardCarouselItems}
            width="100%"
          />
        </div>
      </div>
    </div>
  </div>
);

export const TwoItemCarousel = () => (
  <div className="container">
    <CardCarousel perView="2" cardItems={cardCarouselItems} />
  </div>
);

export const OneItemCarousel = () => (
  <div className="container">
    <CardCarousel perView="1" cardItems={cardCarouselItems} />
  </div>
);

export const MultipleCarousels = () => (
  <div className="container">
    <CardCarousel perView="3" cardItems={cardCarouselItems} />
    <CardCarousel perView="1" cardItems={cardCarouselItems} />
    <CardCarousel perView="2" cardItems={cardCarouselItems} />
  </div>
);
