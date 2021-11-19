// @ts-check
import React from "react";

import { BaseFeed } from "../../core/components/BaseFeed";
import { eventsPropTypes } from "../../core/models/propTypes";
import { ListView } from "./ListView";

/**
 * @typedef {import('../../core/types/events-types').FeedType} FeedType
 */

/**
 *
 * @param {FeedType} props
 * @returns {JSX.Element}
 */
const CardsListEvents = ({ header, ctaButton, dataSource, maxItems }) => (
  // Calling the high order component that fetch the data
  <BaseFeed {...{ header, ctaButton, dataSource, maxItems }}>
    <ListView />
  </BaseFeed>
);

CardsListEvents.propTypes = eventsPropTypes;

export { CardsListEvents };
