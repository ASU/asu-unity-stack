// @ts-check
import PropTypes from "prop-types";
import React from "react";
import { Card } from "../Card/Card";
import { Image } from "../Image/Image";
import { RankingCard } from "../RankingCard/RankingCard";

/**
 * @typedef {import('../Card/Card').CardProps} IndividualCardProps
 */

/**
 * @typedef {import('../RankingCard/RankingCard').RankingCardProps} IndividualRankingCardProps
 */

/**
 * @typedef {Object} CardArrangementProps
 * @property {(IndividualCardProps[] | IndividualRankingCardProps[] | import('../Image/Image').ImageProps[] )} cards - Array of card props objects to render
 * @property {"card" | "ranking" | "image"} [cardType="card"] - Type of card to render
 * @property {1 | 2 | 3 | 4 | "1" | "2" | "3" | "4"} [columns] - Number of columns to display (optional)
 */

const COLUMN_CLASSES = {
  1: "col-12",
  2: "col-12 col-md-6",
  3: "col-12 col-md-6 col-lg-4",
  4: "col-12 col-md-6 col-lg-4 col-xl-3",
};

/**
 * CardArrangement component renders multiple cards that wrap naturally based on
 * their intrinsic min/max widths. The parent container determines the overall width,
 * and cards will flow and wrap automatically to fit the available space.
 *
 * @param {CardArrangementProps} props
 * @returns {JSX.Element}
 */
export const CardArrangement = ({ cards, cardType = "card", columns }) => {
  if (!cards || cards.length === 0) {
    return null;
  }
  let CardComponent;
  switch (cardType) {
    case "ranking":
      CardComponent = RankingCard;
      break;
    case "image":
      CardComponent = Image;
      break;
    default:
      CardComponent = Card;
      break;
  }
  const defaultColClass = COLUMN_CLASSES[columns] || "col-12 col-md-auto";

  return (
    <div className="row" data-testid="card-arrangement">
      {cards.map((cardProps, index) => (
        <div
          key={index}
          data-testid="uds-card-arrangement-content-container"
          className={`${
            cardProps.horizontal
              ? "col-12 col-md-6" // Webspark constraint: horizontal cards max out at 2 columns
              : defaultColClass
          } mb-4`}
        >
          <CardComponent {...cardProps} />
        </div>
      ))}
    </div>
  );
};

CardArrangement.propTypes = {
  /**
   * Array of card objects to render. Each object should contain props for the
   * Card or RankingCard component. Cards will wrap naturally based on their
   * intrinsic min/max widths.
   */
  cards: PropTypes.arrayOf(PropTypes.object).isRequired,
  /**
   * Type of card to render - either "card" (default), "ranking", or "image"
   */
  cardType: PropTypes.oneOf(["card", "ranking", "image"]),
  /**
   * Number of columns to display.
   */
  columns: PropTypes.oneOf([1, 2, 3, 4, "1", "2", "3", "4"]),
};
