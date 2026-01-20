// @ts-check
import React from "react";
import { ContentSpotlight } from "./ContentSpotlight.jsx";

export default {
  title: "Components/ContentSpotlight",
  component: ContentSpotlight,
  parameters: {
    layout: 'fullscreen', // Hero components usually full width
    docs: {
      description: {
        component: "A spotlight component with background image, gradient overlay, and highlighted text.",
      },
    },
  },
  argTypes: {
    backgroundImage: { control: 'text' },
    icon: { control: 'text' },
    title: { control: 'text' },
    highlightText: { control: 'text' },
    description: { control: 'text' },
  },
};

const Template = (args) => <ContentSpotlight {...args} />;

export const Default = Template.bind({});
Default.args = {
  backgroundImage: "https://www.figma.com/api/mcp/asset/68c8d922-400e-4b74-9036-4e07f92603ac", // Using the Figma asset
  icon: "graduation-cap",
  title: "More grads,",
  highlightText: "more innovation",
  description: "ASU graduates more than 33,700 thinkers, innovators and master learners every year – more than any other public university in the U.S.",
  button: {
    label: "See more ASU facts and figures",
    href: "#",
    color: "gold"
  }
};
