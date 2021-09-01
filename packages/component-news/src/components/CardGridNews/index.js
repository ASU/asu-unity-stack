// @ts-check
import { FeedContext } from "@asu-design-system/components-core";
import React, { useContext } from "react";

import { BaseFeed } from "../../core/components/BaseFeed";
import { NewsWrapper } from "./index.styles";

const gridRow = (item, cardsButtonsColor = "maroon") => (
  <div
    className="col col-12 col-md-6 col-lg-4 cards-items-container"
    key={item.nid}
  >
    <a href={item.path}>
      <div className="card card card-hover h-100">
        <img
          className="card-img-top"
          src={item.image_url}
          alt={item.image_alt}
          style={{ padding: 0 }}
        />
        <div className="card-header">
          <h4 className="card-title">{item.title}</h4>
        </div>
        <div className="card-body">
          <p className="card-text text-dark">{item.teaser}</p>
        </div>
        <div className="card-tags">
          {item.interests.split("|").map((tagItem, index) => (
            <span className="btn btn-tag btn-tag-alt-white" href="#">
              {tagItem}{" "}
            </span>
          ))}
        </div>
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
    </a>
  </div>
);


const GridTemplate = () => {
  const { feeds } = useContext(FeedContext);

  return (
    <NewsWrapper className="row row-spaced">
      {feeds?.map((feed, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <React.Fragment key={index}>{gridRow(feed.node)}</React.Fragment>
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
