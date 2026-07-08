// @ts-check
import {
  FeedBody,
  FeedContainerProvider,
  FeedHeader,
  feedHeaderShape,
  feedCtaButtonShape,
  feedDataSourceShape,
} from "@asu/unity-react-core";
import PropTypes from "prop-types";
import React from "react";

import { defaultProps } from "../../constants/default-props";
import { filterData } from "../../services/dataManager";
import { transformData } from "../../transformers/data.transfromer";

const DEFAULT_NO_FEED_TEXT = "No events to show.";

const BaseFeed = ({
  children,
  header,
  ctaButton,
  dataSource,
  maxItems,
  noFeedText = DEFAULT_NO_FEED_TEXT,
}) => (
  // Calling the unity-react-core component to fetch the data, transform it and filter it
  // We provide in the renderBody the view specified before in the parent component, recieved as "children" in this component.
  // We provide in the renderHeader the unity-react-core header, if it is desired to be shown
  // We provide the maxItems prop to limit the items rendered
  // We provide the dataSource to read the url to fetch the data
  // We provide the defaultProps to use some needed default values in case they are not provided
  <FeedContainerProvider
    renderHeader={
      header && ctaButton ? (
        <FeedHeader
          header={header}
          ctaButton={ctaButton}
          defaultProps={defaultProps}
        />
      ) : null
    }
    renderBody={<FeedBody>{children}</FeedBody>}
    dataTransformer={transformData}
    dataFilter={filterData}
    dataSource={dataSource}
    defaultProps={defaultProps}
    noFeedText={noFeedText.trim() ? noFeedText : DEFAULT_NO_FEED_TEXT}
    maxItems={maxItems}
  />
);

BaseFeed.propTypes = {
  header: feedHeaderShape,
  ctaButton: feedCtaButtonShape,
  dataSource: feedDataSourceShape,
  maxItems: PropTypes.number,
  noFeedText: PropTypes.string,
  children: PropTypes.element,
};

export { BaseFeed };
