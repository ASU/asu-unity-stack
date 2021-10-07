// @ts-check
import {
  Card,
  feedCardButtonShape,
  FeedContext,
} from "@asu-design-system/components-core";
import React, { useContext } from "react";

import { BaseFeed } from "../../core/components/BaseFeed";
import { defaultProps } from "../../core/constants/default-props";
import { parseInterests } from "../../core/utils";
import { NewsWrapper } from "./index.styles";

/**
 *
 * @param {*} feed
 * @param {import("../../core/models/news-types").CardButton} cardButton
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
 * @param {{
 *  cardButton: import("../../core/models/news-types").CardButton
 * }} props
 */
// eslint-disable-next-line react/prop-types
const ListTemplate = ({ cardButton }) => {
  const { feeds } = useContext(FeedContext);

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
 * @param {import("../../core/models/news-types").FeedType} props
 */
const CardListlNews = ({ cardButton, ...props }) => (
  <BaseFeed {...props}>
    <ListTemplate cardButton={{ ...defaultProps.cardButton, ...cardButton }} />
  </BaseFeed>
);

CardListlNews.propTypes = { ...BaseFeed.propTypes, feedCardButtonShape };

export { CardListlNews };
