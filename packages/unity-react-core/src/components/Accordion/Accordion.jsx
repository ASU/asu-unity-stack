// @ts-nocheck
import PropTypes from "prop-types";
import React, { useId, useRef, useState } from "react";

import { adjustShrinkingElementIfAboveViewport } from "../../../../../shared";
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
 * @typedef {import('../../../core/types/shared-types').AccordionCardItemProps} AccordionCardItemProps
 */

/**
 * @param {AccordionProps} props
 * @returns {JSX.Element}
 */
const Accordion = ({ cards, openedCard }) => {
  const [currentOpenCard, setCurrentOpenCard] = useState(openedCard);
  const parentId = `accordion-${useId()}`;
  const cardsRef = useRef(/** @type { HTMLDivElement[]} */ []);

  const toggleCard = (event, card) => {
    event.preventDefault();
    if (currentOpenCard !== card) {
      const closingCard = cardsRef.current[currentOpenCard - 1];
      const closingCardBody = closingCard?.lastElementChild;
      adjustShrinkingElementIfAboveViewport(closingCardBody);
      setCurrentOpenCard(card);
    } else {
      setCurrentOpenCard(null);
    }
  };

  return (
    <div className="accordion" id={parentId}>
      {cards?.map(
        (card, key) =>
          card.content.body &&
          card.content.header && (
            <AccordionCard
              ref={element => {
                cardsRef.current[key] = element;
              }}
              // eslint-disable-next-line react/no-array-index-key
              key={key + 1}
              id={key + 1}
              parentId={parentId}
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
