// @ts-check
import PropTypes from "prop-types";

import { Card } from "../Card/Card";
import { RankingCard } from "../RankingCard/RankingCard";

/**
 * @typedef {import('../Card/Card').CardProps} IndividualCardProps
 */

/**
 * @typedef {import('../RankingCard/RankingCard').RankingCardProps} IndividualRankingCardProps
 */

/**
 * @typedef {Object} CardArrangementProps
 * @property {(IndividualCardProps[] | IndividualRankingCardProps[])} cards - Array of card props objects to render
 * @property {"card" | "ranking"} [cardType="card"] - Type of card to render
 * @property {1 | 2 | 3 | 4 | "1" | "2" | "3" | "4"} [columns] - Number of columns to display (optional)
 */

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

  /**
   *
   * @param {CardArrangementProps["columns"]} columns
   * @returns
   */
  const getColumnClass = (columns) => {
    const col = String(columns);
      switch (col) {
        case "2":
          return "col-6";
        case "3":
          return "col-4";
        case "4":
          return "col-3";
        default:
          return "col";
      }
    };

  const CardComponent = cardType === "ranking" ? RankingCard : Card;

  return (
    <div
      className={`row`}
      data-testid="card-arrangement"
    >
      {cards.map((cardProps, index) => {

        return (
          <div key={index} data-testid="uds-card-arrangement-content-container" className={`${ cardProps.horizontal === true ? "" : getColumnClass(columns)} mb-4`}>
            <CardComponent {...cardProps} />
          </div>
        );
      })}
    </div>
  );
};

CardArrangement.propTypes = {
  /**
   * Array of card objects to render. Each object should contain props for the Card or RankingCard component.
   * Cards will wrap naturally based on their intrinsic min/max widths.
   */
  cards: PropTypes.arrayOf(PropTypes.object).isRequired,
  /**
   * Type of card to render - either "card" (default) or "ranking"
   */
  cardType: PropTypes.oneOf(["card", "ranking"]),
};
