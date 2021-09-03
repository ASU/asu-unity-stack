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
import { filterData } from "../../services/dataManager";
import { transformData } from "../../transformers/data.transfromer";

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
      dataSource={dataSource}
      defaultProps={defaultProps}
      maxItems={maxItems}
      dataTransformer={transformData}
      dataFilter={filterData}
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
