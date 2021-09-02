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
import { transformData } from "../../transformers/data.transfromer";

/**
 * @typedef {import("@asu-design-system/components-core/src/components/FeedAnatomy/feed-types").FeedType} FeedType
 */

/**
 * @param {FeedType & {children: object}} props
 */
const BaseFeed = ({ children, header, ctaButton, dataSource, maxItems }) => (
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
  />
);

BaseFeed.propTypes = {
  header: feedHeaderShape,
  ctaButton: feedCtaButtonShape,
  dataSource: feedDataSourceShape,
  maxItems: PropTypes.number,
  children: PropTypes.element,
};

export { BaseFeed };
