import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { ImageBasedCard } from "./ImageBasedCard";
// @ts-ignore
import { imageArray } from "@shared/assets";

const meta: Meta<typeof ImageBasedCard> = {
  title: "Components/ImageBasedCard",
  component: ImageBasedCard,
  argTypes: {
    orientation: {
      control: "select",
      options: ["portrait", "landscape", "square"],
      description: "Card orientation layout",
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
      description: "Card size variant",
    },
    image: {
      control: "text",
      description: "URL or path to card image",
    },
    title: {
      control: "text",
      description: "Card title text",
    },
    buttonText: {
      control: "text",
      description: "Call to action button text",
    },
    buttonHref: {
      control: "text",
      description: "Button link URL",
    },
    gaSection: {
      control: "text",
      description: "Google Analytics section identifier",
    },
  },
};

export default meta;
type Story = StoryObj<typeof ImageBasedCard>;

const defaultArgs = {
  image: imageArray[0],
  title: "Example Card Title",
  buttonText: "Learn More",
  buttonHref: "https://example.com",
  gaSection: "Card Section",
};

export const Portrait: Story = {
  args: {
    ...defaultArgs,
    orientation: "portrait",
    size: "md",
  },
};
