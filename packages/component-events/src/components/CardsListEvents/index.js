// @ts-check
import React from "react";

import { BaseFeed } from "../../core/components/BaseFeed";
import { eventsPropTypes } from "../../core/models/propTypes";
import { ListView } from "./ListView";

/**
 *
 * @param {import('../../core/models/types').FeedType} props
 * @returns {JSX.Element}
 */

const CardsListEvents = ({ header, ctaButton, dataSource, maxItems }) => {
  return (
    // Calling the high order component that fetch the data
    <BaseFeed {...{ header, ctaButton, dataSource, maxItems }}>
      <ListView />
    </BaseFeed>
  );
};

CardsListEvents.propTypes = eventsPropTypes;

export { CardsListEvents };
