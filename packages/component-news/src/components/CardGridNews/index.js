// @ts-check
import { FeedContext } from "@asu-design-system/components-core";
import React, { useContext } from "react";

import { BaseFeed } from "../../core/components/BaseFeed";
import { NewsWrapper } from "./index.styles";

const GridTemplate = () => {
  const { feeds } = useContext(FeedContext);

  return (
    <NewsWrapper>
      Card Grid News PLACE HOLDER
      <br />
      <h1>Total {feeds?.length}</h1>
      <ul>
        {feeds?.map((feed, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <li key={index}>{feed.node.title}</li>
        ))}
      </ul>
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
