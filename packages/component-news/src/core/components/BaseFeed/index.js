// @ts-check
import {
  FeedContainerProvider,
  FeedHeader,
  FeedBody,
  feedHeaderShape,
  feedCtaButtonShape,
  feedDataSourceShape,
} from "@asu-design-system/components-core";
import PropTypes from "prop-types";
import React from "react";

import { defaultProps } from "../../constants/default-props";
import { filterData } from "../../services/data-manager";
import { transformData } from "../../transformers/transform-data";

/**
 * @typedef {import("@asu-design-system/components-core/src/components/FeedAnatomy/feed-types").FeedType} FeedType
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
  return (
    <FeedContainerProvider
      renderHeader={
        <FeedHeader
          header={header}
          ctaButton={ctaButton}
          defaultProps={defaultProps}
        />
      }
      renderBody={<FeedBody>{children}</FeedBody>}
      dataTransformer={transformData}
      dataFilter={filterData}
      dataSource={dataSource}
      defaultProps={defaultProps}
      maxItems={maxItems || defaultProps.maxItems}
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
