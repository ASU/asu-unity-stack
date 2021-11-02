// @ts-check
import React from "react";

import { MyComponent } from "./index";

import {
  createComponent,
  createStory,
} from "../../../../bootstrap4-theme/helpers/wrapper";

export default createComponent(
  "App Webdir UI/Test Component",
  "Molecules",
  "Templates"
);

export const Story = createStory(args => {
  return <MyComponent {...args} />;
});

/** @typedef {import("@asu-design-system/components-core/src/core/types/feed-types").ComponentType } ComponentType */

/**
 * @type {{ args: ComponentType, parameters: object}}
 */
Story.args = {
  numItems: 4,
};
