// @ts-check
import {
  FeedContext,
  Card,
  feedCardButtonShape,
} from "@asu-design-system/components-core";
import React, { useContext } from "react";

import { BaseFeed } from "../../core/components/BaseFeed";
import { defaultProps } from "../../core/constants/default-props";
import { parseInterests } from "../../core/utils";
import { NewsWrapper } from "./index.styles";

/**
 *
 * @param {Object} feed
 * @param {import("../../core/models/news-types").CardButton} cardButton
 */
const gridRow = (feed, cardButton) => (
  <div
    className="col col-12 col-md-6 col-lg-4 cards-items-container"
    key={feed.id}
  >
    <Card
      type="default"
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
const GridTemplate = ({ cardButton }) => {
  const { feeds } = useContext(FeedContext);

  return (
    <NewsWrapper className="row row-spaced" data-testid="grid-view-container">
      {feeds?.map((feed, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <React.Fragment key={index}>{gridRow(feed, cardButton)}</React.Fragment>
      ))}
    </NewsWrapper>
  );
};
// eslint-enable-next-line react/prop-types

/**
 * @param {import("../../core/models/news-types").FeedType} props
 */
const CardGridNews = ({ cardButton, ...props }) => (
  <BaseFeed {...props}>
    <GridTemplate cardButton={{ ...defaultProps.cardButton, ...cardButton }} />
  </BaseFeed>
);

CardGridNews.propTypes = {
  ...BaseFeed.propTypes,
  cardButton: feedCardButtonShape,
};

export { CardGridNews };
