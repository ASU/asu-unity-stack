import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

import { Form, formBackground } from "../Form/Form";
import { Radios } from "./Radio";

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

type Story = StoryObj<typeof Radios>;

export const Default: Story = {
  name: "Examples",
  args: {},
};
