import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

import { Form, formBackground } from "../Form/Form";
import { Radios, RadioProps } from "./Radio";
import { radiosDefault, radiosInvalid, radiosValid} from "./Radio.parameters"

const meta: Meta<typeof Radios> = {
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
    // @ts-expect-error
    background: {
      name: "Form Background",
      control: {
        type: "radio",
      },
      options: formBackground,
    },
  },
  args: radiosDefault,
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

type Story = StoryObj<typeof Radios>;

export const Default: Story = {
  name: "Default",
  args: {},
};

export const Disabled: Story = {
  name: "Disabled",
  args: { label: "A Group of Disabled Radios", disabled: true },
};

export const Invalid: Story = {
  name: "Invalid",
  args: radiosInvalid,
};

export const Valid: Story = {
  name: "Valid",
  args: radiosValid,
};
