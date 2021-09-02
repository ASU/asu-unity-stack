// @ts-check
import { CardCarousel } from "@asu-design-system/component-carousel";
import { FeedContext } from "@asu-design-system/components-core";
import React, { useContext } from "react";

import { BaseFeed } from "../../core/components/BaseFeed";
import { NewsWrapper } from "./index.styles";

const cardRow = (item, index, cardsButtonsColor = "maroon") => ({
  id: index,
  imageSource: item.imageUrl,
  imageAltText: item.imageAltText,
  title: item.title,
  content: item.content,
  buttons: [
    {
      ariaLabel: `Read more`,
      color: cardsButtonsColor,
      href: item.buttonLink,
      label: `Read more`,
      size: "default",
    },
  ],
});

const CarouselTemplate = () => {
  const { feeds } = useContext(FeedContext);
  const cardItems = feeds?.map((feed, index) => cardRow(feed, index));

  return (
    <NewsWrapper>
      <CardCarousel
        width="auto"
        cardType="story"
        perView="3"
        cardItems={cardItems || []}
      />
    </NewsWrapper>
  );
};

const CardCarouselNews = props => (
  <BaseFeed {...props}>
    <CarouselTemplate />
  </BaseFeed>
);

CardCarouselNews.propTypes = BaseFeed.propTypes;

export { CardCarouselNews };
