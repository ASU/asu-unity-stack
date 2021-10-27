// @ts-check
import React from "react";

import { BaseFeed } from "../../core/components/BaseFeed";

const SomeComponent = ({ ...props }) => (
  <BaseFeed {...props}>
    <div> and some thing </div>
  </BaseFeed>
);

SomeComponent.propTypes = BaseFeed.propTypes;

export { SomeComponent };
