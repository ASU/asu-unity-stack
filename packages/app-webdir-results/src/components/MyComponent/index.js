// @ts-check
import React from "react";

import { ExampleComponent } from "../../core/components/ExampleComponent";
import { defaultProps } from "../../core/constants/default-props";

const MyComponent = ({ ...props }) => (
  <ExampleComponent {...{ ...defaultProps, ...props }}>
    <div> and some thing </div>
  </ExampleComponent>
);

MyComponent.propTypes = ExampleComponent.propTypes;

export { MyComponent };
