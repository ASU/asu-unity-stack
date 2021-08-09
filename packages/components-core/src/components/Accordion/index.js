// @ts-check
import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";

import { accordionCardPropTypes } from "../../core/models/shared-prop-types";
import { AccordionCard } from "./AccordionCard";

/**
 * @typedef {import('../../core/models/shared-model-types').AccordionProps} AccordionProps
 */

/**
 * @param {AccordionProps} props
 * @returns {JSX.Element}
 */

export const Accordion = ({ cards, openedCard }) => {
  const [openCard, setOpenCard] = useState(null);

  useEffect(() => {
    setOpenCard(openedCard);
  }, [openedCard]);

  const changeOpenCard = (event, card) => {
    event.preventDefault();
    setOpenCard(prevState => (prevState === card ? null : card));
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
              openCard={openCard}
              onClick={changeOpenCard}
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
