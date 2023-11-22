// @ts-check
import React, { useEffect } from "react";

import trackReactComponent from "../../../../../shared/services/componentDatalayer";
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
const CardsGridEvents = ({ header, ctaButton, dataSource, maxItems }) => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      trackReactComponent({
        packageName: "component-events",
        component: "CardsGridEvents",
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
      <GridView />
    </BaseFeed>
  );
};

CardsGridEvents.propTypes = eventsPropTypes;

export { CardsGridEvents };
