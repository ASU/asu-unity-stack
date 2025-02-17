// @ts-check
import React, { useEffect } from "react";

import trackReactComponent from "../../../../../shared/services/componentDatalayer";
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
const CardsListEvents = ({ header, ctaButton, dataSource, maxItems }) => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      trackReactComponent({
        packageName: "component-events",
        component: "CardsListEvents",
        type: "NA",
        configuration: {
          header,
          ctaButton,
          dataSource,
          maxItems,
        },
      });
    }
  }, []);

  return (
    // Calling the high order component that fetch the data
    <BaseFeed {...{ header, ctaButton, dataSource, maxItems }}>
      <ListView />
    </BaseFeed>
  );
};

CardsListEvents.propTypes = eventsPropTypes;

export { CardsListEvents };
