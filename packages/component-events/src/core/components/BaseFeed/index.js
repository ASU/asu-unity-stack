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

const BaseFeed = ({ children, header, ctaButton, dataSource, maxItems }) => (
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
    maxItems={maxItems || defaultProps.maxItems}
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
