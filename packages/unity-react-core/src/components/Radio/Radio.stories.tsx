import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

import { Form, formBackground } from "../Form/Form";
import { Radios } from "./Radio";

const options = {
    groupLabel: "A Group of Radios",
    name: "exampleRadios",
    // validMessage: "Success message",
    // invalidMessage: "Form error message",
    options: [
      { "label": "Default radio", "data-ga-input-section": "Default radio" },
      { "label": "Second default radio", "data-ga-input-section": "" },
      { "label": "Third default radio", "data-ga-input-section": "" },
      {
        "label": "Disabled radio",
        "disabled": true,
        "data-ga-input-section": "",
      },
    ],
  }

const meta: Meta<{ background?: typeof formBackground }> = {
  title: "Components/Form/Radios",
  component: Radios,
  parameters: {
    docs: {
      description: {
        component: "A text input field for forms.",
      },
    },
  },
  argTypes: {
    background: {
      name: "Form Background",
      control: {
        type: "radio",
      },
      options: formBackground,
    },
  },
  args: {options},
  decorators: [
    (Story, { args: { background, ...rest } }) => (
      // @ts-expect-error
      <Form background={background}>
        <Story {...rest} />
      </Form>
    ),
  ],
};
export default meta;

type Story = StoryObj<typeof Radios>;

export const Default: Story = {
  name: "Examples",
  args: {},
};
