import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

import { Form, formBackground } from "../Form/Form";
import { TextInput, propDefaults } from "./TextInput";

const meta: Meta<typeof TextInput & { background?: typeof formBackground }> = {
  title: "Components/Form/Text Input",
  component: TextInput,
  parameters: {
    docs: {
      description: {
        component: "A text input field for forms.",
      },
    },
  },
  argTypes: {
    id: { control: "text" },
    label: { control: "text" },
    placeholder: { control: "text" },
    disabled: { control: "boolean" },
    required: { control: "boolean" },
    feedback: { control: "radio" },
    // @ts-expect-error
    background: {
      name: "Form Background",
      control: {
        type: "radio",
      },
      options: formBackground,
    },
  },
  args: {
    ...propDefaults,
    id: "input-id",
    label: "Input Label",
    placeholder: "Input Placeholder",
  },
  decorators: [
    // @ts-expect-error
    (Story, { args: { background, ...rest } }) => (
      <Form background={background}>
        <Story {...rest} />
      </Form>
    ),
  ],
};
export default meta;

type Story = StoryObj<typeof TextInput>;

export const BasicInput: Story = {
  args: {
    required: false,
  },
};

export const RequiredInput: Story = {
  args: {
    required: true,
  },
};
