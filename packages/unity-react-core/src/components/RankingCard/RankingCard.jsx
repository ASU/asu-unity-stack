import classNames from "classnames";
import PropTypes from "prop-types";
import React, { useState, useId } from "react";

import { sanitizeDangerousMarkup } from "../../../../../shared";
import { GaEventWrapper } from "../GaEventWrapper/GaEventWrapper";
import { useBaseSpecificFramework } from "../GaEventWrapper/useBaseSpecificFramework";
import { Image } from "../Image/Image";

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

const InfoLayerWrapper = ({ imageSize, body, heading, readMoreLink }) => {
  const [open, setOpen] = useState(false);
  const id = useId();
  const { isReact, isBootstrap } = useBaseSpecificFramework();
  const uniqueId = `info-layer-${id}`;
  const isSmall = isSmallSize(imageSize);
  const handleButtonClick = event => {
    if (event.type === "click" || event.key === "Enter" || event.key === " ") {
      setOpen(!open);
    }
  };

  return (
    <div
      className={classNames("info-layer", { [`show`]: open })}
      data-testid="info-layer"
      id={uniqueId}
    >
      <div className="content">
        <div
          className={classNames("header", {
            [`closed`]: isSmall && !open,
          })}
        >
          {isSmall && (
            // eslint-disable-next-line react/no-danger
            <p dangerouslySetInnerHTML={sanitizeDangerousMarkup(body)} />
          )}
          <GaEventWrapper
            gaData={{
              ...gaDefaultObject,
              text: "Expand ranking",
              // TODO: for bootstrap can we use aria-expanded value of the button to populate the "action" field
              action: open
                ? AVAILABLE_GA_ACTIONS.OPEN
                : AVAILABLE_GA_ACTIONS.CLOSE,
              section: heading,
            }}
          >
            <button
              // Framework specific code start
              data-bs-toggle={isBootstrap && "collapse"}
              data-bs-target={isBootstrap && `#${uniqueId}`}
              onClick={isReact && handleButtonClick}
              // Framework specific code end
              className={classNames("btn-expand", {
                btn: isSmall,
              })}
              type="button"
              aria-expanded={open}
              aria-controls={uniqueId}
            >
              {isSmall ? (
                <span className="visually-hidden">{heading}</span>
              ) : (
                <h4>{heading}</h4>
              )}
              <i className="fas fa-chevron-up" />
            </button>
          </GaEventWrapper>
        </div>
        {!isSmall && (
          // eslint-disable-next-line react/no-danger
          <p dangerouslySetInnerHTML={sanitizeDangerousMarkup(body)} />
        )}
        {readMoreLink && (
          <GaEventWrapper
            gaData={{
              ...gaDefaultObject,
              section: heading,
              text: "read more",
            }}
          >
            <a href={readMoreLink} className="read-more">
              Read more <span className="visually-hidden">{heading}</span>
              <span
                className="fas icon-small fa-arrow-right"
                aria-hidden="true"
              />
            </a>
          </GaEventWrapper>
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
  const isSmall = isSmallSize(imageSize);
  return (
    <div
      className={classNames("card-ranking", {
        [`large-image`]: !isSmall,
        [`small-image`]: isSmall,
      })}
    >
      {isSmall ? (
        <div className="image-wrapper">
          <Image src={image} alt={imageAlt} fetchPriority="high" />
        </div>
      ) : (
        <Image src={image} alt={imageAlt} fetchPriority="high" />
      )}

      {isSmall && (
        <div className="citation">
          <h4>{heading}</h4>
          <p>— {citation}</p>
        </div>
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
