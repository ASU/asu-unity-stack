import { sanitizeDangerousMarkup } from "@asu/shared";
import classNames from "classnames";
import PropTypes from "prop-types";
import React, { useState, useId } from "react";

import { GaEventWrapper } from "../GaEventWrapper/GaEventWrapper";
import { useBaseSpecificFramework } from "../GaEventWrapper/useBaseSpecificFramework";
import { Image } from "../Image/Image";

/**
 * @typedef {import('../../core/types/ranking-card-types').RankingCardProps} RankingCardProps
 */

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

const BaseRankingCard = ({
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

BaseRankingCard.propTypes = {
  imageSize: PropTypes.oneOf(["small", "large"]),
  image: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  readMoreLink: PropTypes.string,
  citation: PropTypes.string,
};

/**
 * @param {RankingCardProps} props
 * @returns {JSX.Element}
 */
export const RankingCard = ({
  imageSize = "large",
  image,
  imageAlt,
  heading,
  body,
  readMoreLink = "",
  citation,
  cards = [],
  columns = "0",
}) => {
  // If multiple cards are provided, render them in a card container
  if (cards.length > 1) {
    const getColumnClass = () => {
      switch (columns) {
        case "2":
          return "";
        case "3":
          return "three-columns";
        case "4":
          return "four-columns";
        default:
          return "";
      }
    };

    return (
      <div className="uds-card-arrangement">
        <div className={classNames("uds-card-arrangement-card-container", "auto-arrangement", getColumnClass())}>
          {cards.map((card, index) => (
            <BaseRankingCard
              key={index}
              imageSize={card.imageSize || imageSize}
              image={card.image}
              imageAlt={card.imageAlt}
              heading={card.heading}
              body={card.body}
              readMoreLink={card.readMoreLink || readMoreLink}
              citation={card.citation}
            />
          ))}
        </div>
      </div>
    );
  }

  return (
    <BaseRankingCard
      imageSize={imageSize}
      image={image}
      imageAlt={imageAlt}
      heading={heading}
      body={body}
      readMoreLink={readMoreLink}
      citation={citation}
    />
  );
};

RankingCard.propTypes = {
  /**
   * Size of ranking card
   */
  imageSize: PropTypes.oneOf(["small", "large"]),
  /**
   * Ranking card image
   */
  image: PropTypes.string,
  /**
   * Card header image alt text
   */
  imageAlt: PropTypes.string,
  /**
   * Ranking card heading
   */
  heading: PropTypes.string,
  /**
   * Ranking card body content
   */
  body: PropTypes.string,
  /**
   * Link for read more
   */
  readMoreLink: PropTypes.string,
  /**
   * Ranking card citation content (Required for small size only)
   */
  citation: PropTypes.string,
  /**
   * Array of ranking card objects for rendering multiple cards
   */
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      imageSize: PropTypes.oneOf(["small", "large"]),
      image: PropTypes.string.isRequired,
      imageAlt: PropTypes.string.isRequired,
      heading: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      readMoreLink: PropTypes.string,
      citation: PropTypes.string,
    })
  ),
  /**
   * Number of columns for multiple cards layout (0, 2, 3, or 4)
   */
  columns: PropTypes.oneOf(["0", "2", "3", "4"]),
};
