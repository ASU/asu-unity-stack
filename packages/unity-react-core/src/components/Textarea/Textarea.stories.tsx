import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

import { Form, formBackground } from "../Form/Form";
import { Textarea, propDefaults } from "./Textarea";

const meta: Meta<typeof Textarea> = {
  title: "Components/Form/Textarea",
  component: Textarea,
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
    id: "textarea-id",
    label: "Textarea Label",
    placeholder: "Textarea Placeholder",
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

type Story = StoryObj<typeof Textarea>;

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
