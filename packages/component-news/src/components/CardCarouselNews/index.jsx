// @ts-check
import { CardCarousel, FeedContext } from "@asu/unity-react-core";
import React, { useContext, useEffect } from "react";

import trackReactComponent from "../../../../../shared/services/componentDatalayer";
import { BaseFeed } from "../../core/components/BaseFeed";
import { defaultProps } from "../../core/constants/default-props";
import { NewsWrapper } from "./index.styles";

/**
 * @param {Object} feed
 * @param {number} index
 * @param {import("../../core/types/news-types").CardButton} cardButton
 */
const cardRow = (feed, index, cardButton) => ({
  id: index,
  imageSource: feed.imageUrl,
  imageAltText: feed.imageAltText,
  title: feed.title,
  content: feed.content,
  buttons: [
    {
      ariaLabel: cardButton.text,
      color: cardButton.color,
      label: cardButton.text,
      size: cardButton.size,
      href: feed.buttonLink,
    },
  ],
});

/**
 * @param {import("../../core/types/news-types").TemplateProps} props
 */
// eslint-disable-next-line react/prop-types
const CarouselTemplate = ({ cardButton }) => {
  const { feeds } = useContext(FeedContext); // Reading the "feeds" object from the context
  const cardItems = feeds?.map((feed, index) =>
    cardRow(feed, index, cardButton)
  );

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
// eslint-enable-next-line react/prop-types

/**
 * @typedef {import("../../core/types/news-types").FeedType} FeedType
 */

/**
 * @param {FeedType} props
 */
const CardCarouselNews = ({ cardButton, ...props }) => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      trackReactComponent({
        packageName: "component-news",
        component: "CardCarouselNews",
        type: "NA",
        configuration: {
          cardButton,
          props,
        },
      });
    }
  }, []);

  return (
    // Calling the high order component that fetches the data
    <BaseFeed {...props}>
      <CarouselTemplate
        cardButton={{ ...defaultProps.cardButton, ...cardButton }}
      />
    </BaseFeed>
  );
};

CardCarouselNews.propTypes = BaseFeed.propTypes;

export { CardCarouselNews };
