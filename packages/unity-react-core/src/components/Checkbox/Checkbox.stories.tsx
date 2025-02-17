import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

import { Form, formBackground } from "../Form/Form";
import { Checkboxes } from "./Checkbox";

const meta: Meta<{ background?: typeof formBackground }> = {
  title: "Components/Form/Checkboxes",
  component: Checkboxes,
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
  args: {},
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

type Story = StoryObj<typeof Checkboxes>;

export const Default: Story = {
  name: "Examples",
};
