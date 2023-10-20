import classNames from "classnames";
import PropTypes from "prop-types";
import React, { useState } from "react";

import { trackGAEvent } from "../../core/services/googleAnalytics";
import { sanitizeDangerousMarkup } from "../../core/utils/html-utils";
// eslint-disable-next-line import/no-cycle
import { Image } from "../Image";

const gaDefaultObject = {
  name: "onclick",
  event: "link",
  action: "click",
  type: "internal link",
  region: "main content",
};

const AVAILABLE_GA_ACTIONS = {
  OPEN: "open",
  CLOSE: "close",
};

const AVAILABLE_SIZES = {
  LARGE: "large",
  SMALL: "small",
};

const isSmallSize = size => size === AVAILABLE_SIZES.SMALL;

const ImageWrapper = ({ size, image, imageAlt }) => {
  return isSmallSize(size) ? (
    <div className="image-wrapper">
      <Image src={image} alt={imageAlt} fetchPriority="high" />
    </div>
  ) : (
    <Image src={image} alt={imageAlt} fetchPriority="high" />
  );
};

ImageWrapper.propTypes = {
  size: PropTypes.oneOf(["small", "large"]),
  image: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired,
};

const CitationWrapper = ({ heading, citation }) => {
  return (
    <div className="citation">
      <h4>{heading}</h4>
      <p>— {citation}</p>
    </div>
  );
};

CitationWrapper.propTypes = {
  heading: PropTypes.string.isRequired,
  citation: PropTypes.string.isRequired,
};

const InfoLayerWrapper = ({ imageSize, body, heading, readMoreLink }) => {
  const [open, setOpen] = useState(false);

  // TODO: test this
  const handleButtonClick = async () => {
    await setOpen(!open);
    trackGAEvent({
      ...gaDefaultObject,
      text: "Expand ranking",
      action: open ? AVAILABLE_GA_ACTIONS.OPEN : AVAILABLE_GA_ACTIONS.CLOSE,
      section: heading,
    });
  };

  return (
    <div
      className={classNames("info-layer", { [`active`]: open })}
      data-testid="info-layer"
    >
      <div className="content">
        <div className="header">
          {isSmallSize(imageSize) ? (
            // eslint-disable-next-line react/no-danger
            <p dangerouslySetInnerHTML={sanitizeDangerousMarkup(body)} />
          ) : (
            <h4>{heading}</h4>
          )}
          <button
            onClick={handleButtonClick}
            id="dispatch"
            className="btn btn-expand"
            aria-label="Expand ranking"
            type="button"
            aria-expanded="false"
            data-toggle="collapse"
            data-target="#collapseExample"
          >
            <i className="fas fa-chevron-up" />
            <span className="visually-hidden">Expand</span>
          </button>
        </div>
        {!isSmallSize(imageSize) && (
          // eslint-disable-next-line react/no-danger
          <p dangerouslySetInnerHTML={sanitizeDangerousMarkup(body)} />
        )}
        {readMoreLink && (
          <a
            href={readMoreLink}
            aria-label="Read more"
            onClick={() => {
              trackGAEvent({
                ...gaDefaultObject,
                section: heading,
                text: "read more",
              });
            }}
          >
            Read more
            <span
              className="fas icon-small fa-arrow-right"
              aria-hidden="true"
            />
          </a>
        )}
      </div>
    </div>
  );
};

InfoLayerWrapper.propTypes = {
  imageSize: PropTypes.oneOf(["small", "large"]),
  body: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  readMoreLink: PropTypes.string,
};

export const RankingCard = ({
  imageSize = "large",
  image,
  imageAlt,
  heading,
  body,
  readMoreLink = "",
  citation,
}) => {
  return (
    <div
      className={classNames("card-ranking", {
        [`large-image`]: imageSize === "large",
        [`small-image`]: imageSize === "small",
      })}
    >
      <ImageWrapper size={imageSize} image={image} imageAlt={imageAlt} />

      {isSmallSize(imageSize) && (
        <CitationWrapper heading={heading} citation={citation} />
      )}

      <InfoLayerWrapper
        imageSize={imageSize}
        body={body}
        heading={heading}
        readMoreLink={readMoreLink}
      />
    </div>
  );
};

RankingCard.propTypes = {
  /**
   * Size of ranking card
   */
  imageSize: PropTypes.oneOf(["small", "large"]).isRequired,
  /**
   * Ranking card image
   */
  image: PropTypes.string.isRequired,
  /**
   * Card header image alt text
   */
  imageAlt: PropTypes.string.isRequired,
  /**
   * Ranking card heading
   */
  heading: PropTypes.string.isRequired,
  /**
   * Ranking card body content
   */
  body: PropTypes.string.isRequired,
  /**
   * Link for read more
   */
  readMoreLink: PropTypes.string,
  /**
   * Ranking card citation content (Required for small size only)
   */
  citation: PropTypes.string,
};
