// @ts-check
import {
  Card,
  feedCardButtonShape,
  FeedContext,
} from "@asu-ke/components-core";
import React, { useContext } from "react";

import { BaseFeed } from "../../core/components/BaseFeed";
import { defaultProps } from "../../core/constants/default-props";
import { parseInterests } from "../../core/utils";
import { NewsWrapper } from "./index.styles";

/**
 * @param {object} feed
 * @param {import("../../core/types/news-types").CardButton} cardButton
 */
const listRow = (feed, cardButton) => (
  <div className="card card-hover cards-items-container" key={feed.id}>
    <Card
      type="story"
      horizontal
      eventFormat="inline"
      eventLocation={feed.location}
      clickable={!!feed.buttonLink}
      clickHref={feed.buttonLink}
      title={feed.title}
      body={`<p class="card-text text-dark">${feed.content}</p>`}
      image={feed.imageUrl}
      imageAltText={feed.title}
      linkLabel={feed.eventButtonText}
      linkUrl={feed.eventButtonUrl}
      buttons={[
        {
          ariaLabel: cardButton.text,
          color: cardButton.color,
          label: cardButton.text,
          size: cardButton.size,
          href: feed.buttonLink,
        },
      ]}
      tags={parseInterests(feed?.interests)}
    />
  </div>
);

/**
 * @param {import("../../core/types/news-types").TemplateProps} props
 */
// eslint-disable-next-line react/prop-types
const ListTemplate = ({ cardButton }) => {
  const { feeds } = useContext(FeedContext); // Reading the "feeds" object from the context

  return (
    <NewsWrapper className="row-spaced" data-testid="list-view-container">
      {feeds?.map((feed, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <React.Fragment key={index}>{listRow(feed, cardButton)}</React.Fragment>
      ))}
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
const CardListlNews = ({ cardButton, ...props }) => (
  // Calling the high order component that fetch the data
  <BaseFeed {...props}>
    <ListTemplate cardButton={{ ...defaultProps.cardButton, ...cardButton }} />
  </BaseFeed>
);

CardListlNews.propTypes = { ...BaseFeed.propTypes, feedCardButtonShape };

export { CardListlNews };
