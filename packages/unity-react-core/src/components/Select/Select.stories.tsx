import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

import { Form, formBackground } from "../Form/Form";
import { Select, OptionProps, propDefaults } from "./Select";

const options: OptionProps[] = [
  { value: "1", label: "Option 1" },
  { value: "2", label: "Option 2" },
  { value: "3", label: "Option 3" },
];

const meta: Meta<typeof Select> = {
  title: "Components/Form/Select",
  component: Select,
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
    disabled: { control: "boolean" },
    required: { control: "boolean" },
    feedback: { control: "radio" },
    // displaySize: { control: { type: "radio" } },
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
    options,
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

type Story = StoryObj<typeof Select>;

export const Basic: Story = {};

export const Required: Story = {
  args: {
    required: true,
  },
};
