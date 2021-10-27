// @ts-check
import React from "react";

import { BaseFeed } from "../../core/components/BaseFeed";

import { defaultProps } from "../../core/constants/default-props";

const SomeComponent = ({ ...props }) => (
  <BaseFeed {...{ ...defaultProps, ...props }}>
    <div> and some thing </div>
  </BaseFeed>
);

SomeComponent.propTypes = BaseFeed.propTypes;

export { SomeComponent };
