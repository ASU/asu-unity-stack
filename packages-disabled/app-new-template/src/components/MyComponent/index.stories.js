// @ts-check
import React from "react";
import withMock from "storybook-addon-mock";

import { MyComponent } from "./index";

/** @typedef {import("@asu-design-system/components-core/src/core/types/feed-types").ComponentType } ComponentType */
export default {
  title: "New App Template/Test Component",
  component: MyComponent,
  decorators: [withMock],
};

const Template = args => <MyComponent {...args} />;

/**
 * @type {{ args: ComponentType, parameters: object}}
 */
export const Story = Template.bind({});
Story.args = {
  numItems: 4,
};
