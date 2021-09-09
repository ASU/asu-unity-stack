// @ts-check
import React from "react";

import { BaseFeed } from "../../core/components/BaseFeed";
import { eventsPropTypes } from "../../core/models/propTypes";
import { GridView } from "./GridView";

/**
 *
 * @param {import('../../core/models/types').FeedType} props
 * @returns {JSX.Element}
 */

const CardsGridEvents = ({ header, ctaButton, dataSource, maxItems }) => {
  return (
    <BaseFeed {...{ header, ctaButton, dataSource, maxItems }}>
      <GridView />
    </BaseFeed>
  );
};

CardsGridEvents.propTypes = eventsPropTypes;

export { CardsGridEvents };
