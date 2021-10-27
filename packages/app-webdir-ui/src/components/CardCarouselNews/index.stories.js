// @ts-check
import React from "react";
import withMock from "storybook-addon-mock";

import { SomeComponent } from "./index";

import { createMockParam } from "../../core/utils";

/** @typedef {import("@asu-design-system/components-core/src/core/types/feed-types").ComponentType } ComponentType */
export default {
  title: "Webdir UI/Test Component",
  component: SomeComponent,
  decorators: [withMock],
};

const Template = args => <SomeComponent {...args} />;

/**
 * @type {{ args: ComponentType, parameters: object}}
 */
export const Story = Template.bind({});
Story.args = {
  numItems: 4,
};
Story.parameters = {
  mockData: createMockParam(),
};
