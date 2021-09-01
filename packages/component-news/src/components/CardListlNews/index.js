// @ts-check
import { FeedContext } from "@asu-design-system/components-core";
import React, { useContext } from "react";

import { BaseFeed } from "../../core/components/BaseFeed";
import { NewsWrapper } from "./index.styles";

const listRow = (item, cardsButtonsColor = "maroon") => (
  <div className="card card-hover cards-items-container" key={item.nid}>
    <a href={item.path}>
      <div className="row no-gutters">
        <div className="col-lg-4">
          <img
            className="card-img h-100"
            src={item.image_url}
            alt={item.image_alt}
          />
        </div>
        <div className="col-lg-8">
          <div className="list-view card-body row-cards-body-container">
            <h3 className="list-view card-title">
              {item.title}
              <p className="card-text text-muted m-0">
                {item.interests.split("|").join(", ")}
              </p>
            </h3>
            <div className="button-container">
              <a
                className={`btn btn-${
                  cardsButtonsColor || "maroon"
                } text-white read-more-btn`}
                href={item.path}
              >
                Read at ASU News
              </a>
            </div>
          </div>
        </div>
      </div>
    </a>
  </div>
);

const ListTemplate = () => {
  const { feeds } = useContext(FeedContext);

  return (
    <NewsWrapper className="row row-spaced">
      {feeds?.map((feed, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <React.Fragment key={index}>{listRow(feed.node)}</React.Fragment>
      ))}
    </NewsWrapper>
  );
};

const CardListlNews = props => (
  <BaseFeed {...props}>
    <ListTemplate />
  </BaseFeed>
);

CardListlNews.propTypes = BaseFeed.propTypes;

export { CardListlNews };
