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

const CardsListEvents = ({ header, ctaButton, dataSource }) => {
  return (
    <BaseFeed {...{ header, ctaButton, dataSource }}>
      <ListView />
    </BaseFeed>
  );
};

CardsListEvents.propTypes = eventsPropTypes;

export { CardsListEvents };
