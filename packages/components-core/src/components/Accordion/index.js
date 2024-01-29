// @ts-nocheck
import PropTypes from "prop-types";
import React, { useState } from "react";
import "../../../../../node_modules/bootstrap/js/dist/collapse";

import { trackGAEvent } from "../../../../../shared";
import { accordionCardPropTypes } from "../../core/models/shared-prop-types";
import { AccordionCard } from "./AccordionCard";

const defaultGAEvent = {
  event: "collapse",
  name: "onclick",
  type: "click",
  region: "main content",
};

const AVAILABLE_GA_ACTIONS = {
  OPEN: "open",
  CLOSE: "close",
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

  const trackEvent = (cardTitle, action) => {
    trackGAEvent({
      ...defaultGAEvent,
      action,
      text: cardTitle,
    });
  };

  const toggleCard = (event, card, cardTitle) => {
    event.preventDefault();

    // If there is a difference between the previously opened card and the currently opened card, or if the same card is clicked, the close event is triggered.
    if (currentOpenCard === card || currentOpenCard) {
      // we get the header of the previous card and send it to the GA event from the cards list
      trackEvent(
        cards[currentOpenCard - 1].content.header,
        AVAILABLE_GA_ACTIONS.CLOSE
      );
    }

    if (currentOpenCard !== card) {
      setCurrentOpenCard(card);
      trackEvent(cardTitle, AVAILABLE_GA_ACTIONS.OPEN);
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
