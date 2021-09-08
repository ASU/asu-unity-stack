// @ts-check
import { FeedContext, Card } from "@asu-design-system/components-core";
import React, { useContext } from "react";

import { BaseFeed } from "../../core/components/BaseFeed";
import { parseInterests } from "../../core/utils";
import { NewsWrapper } from "./index.styles";

const gridRow = event => (
  <div
    className="col col-12 col-md-6 col-lg-4 cards-items-container"
    key={event.id}
  >
    <Card
      type="default"
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

const GridTemplate = () => {
  const { feeds } = useContext(FeedContext);

  return (
    <NewsWrapper className="row row-spaced">
      {feeds?.map((feed, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <React.Fragment key={index}>{gridRow(feed)}</React.Fragment>
      ))}
    </NewsWrapper>
  );
};

const CardGridNews = props => (
  <BaseFeed {...props}>
    <GridTemplate />
  </BaseFeed>
);

CardGridNews.propTypes = BaseFeed.propTypes;

export { CardGridNews };
