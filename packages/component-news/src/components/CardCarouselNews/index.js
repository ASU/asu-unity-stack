// @ts-check
import { CardCarousel } from "@asu-design-system/component-carousel";
import { FeedContext } from "@asu-design-system/components-core";
import React, { useContext } from "react";

import { BaseFeed } from "../../core/components/BaseFeed";
import { NewsWrapper } from "./index.styles";

const cardRow = (item, index, cardsButtonsColor = "maroon") => ({
  id: index,
  imageSource: item.image_url,
  imageAltText: item.image_alt,
  title: item.title,
  content: item.teaser,
  buttons: [
    {
      ariaLabel: `Read more`,
      color: cardsButtonsColor,
      href: item.path,
      label: `Read more`,
      size: "default",
    },
  ],
});

const CarouselTemplate = () => {
  const { feeds } = useContext(FeedContext);
  const cardItems = feeds?.map((feed, index) => cardRow(feed.node, index));

  return (
    <NewsWrapper>
      <CardCarousel perView="3" cardItems={cardItems || []} />
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
