// @ts-check
import { Card, FeedContext } from "@asu-design-system/components-core";
import React, { useContext } from "react";

import { BaseFeed } from "../../core/components/BaseFeed";
import { parseInterests } from "../../core/utils";
import { NewsWrapper } from "./index.styles";

/**
 * @typedef {import("@asu-design-system/components-core/src/components/FeedAnatomy/feed-types").FeedType} FeedType
 */

const listRow = event => (
  <div className="card card-hover cards-items-container" key={event.id}>
    <Card
      type="story"
      horizontal
      eventFormat="inline"
      eventLocation={event.location}
      clickable={!!event.buttonLink}
      clickHref={event.buttonLink}
      title={event.title}
      body={`<p class="card-text text-dark">${event.content}</p>`}
      image={event.imageUrl}
      imageAltText={event.title}
      linkLabel={event.eventButtonText}
      linkUrl={event.eventButtonUrl}
      buttons={[
        {
          ariaLabel: `Read at ASU News`,
          color: "maroon",
          href: event.buttonLink,
          label: `Read at ASU News`,
          size: "default",
        },
      ]}
      tags={parseInterests(event?.interests)}
    />
  </div>
);

const ListTemplate = () => {
  const { feeds } = useContext(FeedContext);

  return (
    <NewsWrapper className="row row-spaced">
      {feeds?.map((feed, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <React.Fragment key={index}>{listRow(feed)}</React.Fragment>
      ))}
    </NewsWrapper>
  );
};

/**
 * @param {FeedType} props
 */
const CardListlNews = props => (
  <BaseFeed {...props}>
    <ListTemplate />
  </BaseFeed>
);

CardListlNews.propTypes = BaseFeed.propTypes;

export { CardListlNews };
