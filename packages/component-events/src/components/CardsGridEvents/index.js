// @ts-check
import React from "react";

import { BaseFeed } from "../../core/components/BaseFeed";
import { eventsPropTypes } from "../../core/models/propTypes";
import { GridView } from "./GridView";

/**
 * @typedef {import('../../core/types/events-types').FeedType} FeedType
 */

/**
 *
 * @param {FeedType} props
 * @returns {JSX.Element}
 */
const CardsGridEvents = ({ header, ctaButton, dataSource, maxItems }) => (
  // Calling the high order component that fetch the data
  <BaseFeed {...{ header, ctaButton, dataSource, maxItems }}>
    <GridView />
  </BaseFeed>
);

CardsGridEvents.propTypes = eventsPropTypes;

export { CardsGridEvents };
