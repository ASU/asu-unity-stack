// @ts-nocheck
import PropTypes from "prop-types";
import React, { useState } from "react";

import { accordionCardPropTypes } from "../../core/models/shared-prop-types";
import { AccordionCard } from "./AccordionCard/AccordionCard";

const defaultGAEvent = {
  event: "collapse",
  name: "onclick",
  type: "click",
  region: "main content",
};

/**
 * @typedef {import('../../core/types/shared-types').AccordionProps} AccordionProps
 */

/**
 * @param {AccordionProps} props
 * @returns {JSX.Element}
 */
const Accordion = ({ cards, openedCard }) => {
  const [currentOpenCard, setCurrentOpenCard] = useState(openedCard);

  const toggleCard = (event, card) => {
    event.preventDefault();

    if (currentOpenCard !== card) {
      setCurrentOpenCard(card);
    } else {
      setCurrentOpenCard(null);
    }
  };

  return (
    <div className="accordion">
      {cards?.map(
        (card, key) =>
          card.content.body &&
          card.content.header && (
            <AccordionCard
              // eslint-disable-next-line react/no-array-index-key
              key={key + 1}
              id={key + 1}
              item={card}
              openCard={currentOpenCard}
              onClick={toggleCard}
              gaData={defaultGAEvent}
            />
          )
      )}
    </div>
  );
};

Accordion.propTypes = {
  /**
   * Cards to show in the accordion component
   */
  cards: PropTypes.arrayOf(accordionCardPropTypes).isRequired,
  /**
   * Opened card based on rendered card position
   */
  openedCard: PropTypes.number,
};

export { Accordion };
