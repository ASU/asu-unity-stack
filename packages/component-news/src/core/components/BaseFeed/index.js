// @ts-check
import React from "react";
import PropTypes from "prop-types";
import { FeedContainerProvider } from "../../../../../components-core/src/components/FeedAnatomy/FeedContainerContext";
import { FeedHeader } from "../../../../../components-core/src/components/FeedAnatomy/FeedHeader";
import { FeedBody } from "../../../../../components-core/src/components/FeedAnatomy/FeedBody";
import {
  feedHeaderShape,
  feedCtaButtonShape,
  feedDataSourceShape,
} from "../../../../../components-core/src/components/FeedAnatomy/feed-prop-types";

import { defaultProps } from "../../constants/default-props";
import { filterData } from "../../services/data-manager";
import { transformData } from "../../transformers/transform-data";

/**
 * @typedef {import("@asu-design-system/components-core/src/core/types/feed-types").FeedType} FeedType
 */

/**
 * @param {FeedType & {children: object}} props
 */
const BaseFeed = ({
  children,
  header,
  ctaButton,
  dataSource: pDataSource,
  maxItems,
}) => {
  const filters = pDataSource.filters?.replace(/_/g, " ");
  const dataSource = { ...pDataSource, filters };

  // We provide in the renderBody the view specified before in the parent component, recieved as "children" in this component.
  // We provide in the renderHeader the components-core header, if it is desired to be shown
  // We provide the maxItems prop to limit the items rendered
  // We provide the dataSource to read the url to fetch the data
  // We provide the defaultProps to use some needed default values in case they are not provided
  return (
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
      noFeedText="No news to show."
      maxItems={maxItems}
    />
  );
};

BaseFeed.propTypes = {
  header: feedHeaderShape,
  ctaButton: feedCtaButtonShape,
  dataSource: feedDataSourceShape,
  maxItems: PropTypes.number,
  children: PropTypes.element,
};

export { BaseFeed };
