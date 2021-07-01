/* eslint react/jsx-props-no-spreading: "off" */
import React from "react";

import { Accordion } from ".";

export default {
  title: "UDS/Accordion",
  component: Accordion,
  parameters: {
    docs: {
      description: {
        component: `The Accordion component can be used to generate an accordion of editable content cards.
        ## Usage

        Accordion users are responsible to meet all UDS design guidelines with their menu,
        including rules on the use of Call-to-Action buttons and tags.

        View component examples and source code below.

        This story includes another components for demostration purposes.
        `,
      },
    },
  },
};

const Template = args => <Accordion {...args} />;

export const Default = Template.bind({});
Default.args = {
  cards: [
    {
      content: {
        header: "Accordion Card 1",
        body: "<h4>Quatrenary Headline</h4><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p><h5>This is a level five headline. There's a fancy word for that too.</h5><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p>",
      },
    },
    {
      content: {
        header: "Accordion Card 2",
        body: "<h4>Quatrenary Headline</h4><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p><h5>This is a level five headline. There's a fancy word for that too.</h5><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p>",
      },
    },
    {
      content: {
        header: "Accordion Card 3, opened card",
        body: "<h4>Quatrenary Headline</h4><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p><h5>This is a level five headline. There's a fancy word for that too.</h5><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p>",
      },
    },
  ],
  openedCard: 3,
};
export const ColorCombinations = Template.bind({});
ColorCombinations.args = {
  cards: [
    {
      content: {
        header: "Accordion Card 1",
        body: "<h4>Quatrenary Headline</h4><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p><h5>This is a level five headline. There's a fancy word for that too.</h5><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p>",
      },
    },
    {
      color: "maroon",
      content: {
        header: "Accordion Card 2",
        body: "<h4>Quatrenary Headline</h4><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p><h5>This is a level five headline. There's a fancy word for that too.</h5><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p>",
      },
    },
    {
      color: "gray",
      content: {
        header: "Accordion Card 3",
        body: "<h4>Quatrenary Headline</h4><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p><h5>This is a level five headline. There's a fancy word for that too.</h5><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p>",
      },
    },
    {
      color: "dark",
      content: {
        header: "Accordion Card 4",
        body: "<h4>Quatrenary Headline</h4><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p><h5>This is a level five headline. There's a fancy word for that too.</h5><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p>",
      },
    },
  ],
};
export const Icon = Template.bind({});
Icon.args = {
  cards: [
    {
      content: {
        icon: "pencil-alt",
        header: "Accordion Card 1",
        body: "<h4>Quatrenary Headline</h4><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p><h5>This is a level five headline. There's a fancy word for that too.</h5><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p>",
      },
    },
    {
      content: {
        icon: "newspaper",
        header: "Accordion Card 2",
        body: "<h4>Quatrenary Headline</h4><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p><h5>This is a level five headline. There's a fancy word for that too.</h5><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p>",
      },
    },
  ],
};
