/* eslint react/jsx-props-no-spreading: "off" */
import React from "react";

import { getLoremSentences } from "@asu/shared";
import { Accordion } from "./Accordion";

export default {
  title: "Components/Accordion",
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

## Bootstrap HTML

The \`.accordion\` class is a bootstrap5 class that is used to create an accordion.

- The accordions will conform to the width of the surrounding container.
- There is a recommended character limit of 75 characters for the text within the header of a foldable card.

The recommended markup for an accordion begins from the following pattern.

***Note:*** The \`.accordion-body\` class must be wrapped in a div with the \`.collapse\` class, or else the accordion will have a jerky animation when opening and closing.
`,
      },
    },
  },
};

const Template = args => (
  <>
    <Accordion {...args} />
  </>
);

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

let i = 0;
export const LargeContent = {
  render: args => (
    <>
      <div className="container" style={{ paddingTop: "50vh" }}>
        <p>{getLoremSentences(12, i++)}</p>
        <p>{getLoremSentences(22, i++)}</p>
        <p>{getLoremSentences(10, i++)}</p>
        <Accordion {...args} />
        <br />
        <p>{getLoremSentences(35, i++)}</p>
        <p>{getLoremSentences(22, i++)}</p>
        <p>{getLoremSentences(12, i++)}</p>
        <p>{getLoremSentences(42, i++)}</p>
        <p>{getLoremSentences(19, i++)}</p>
        <p>{getLoremSentences(12, i++)}</p>
        <p>{getLoremSentences(10, i++)}</p>
        <p>{getLoremSentences(35, i++)}</p>
        <p>{getLoremSentences(22, i++)}</p>
        <p>{getLoremSentences(12, i++)}</p>
        <p>{getLoremSentences(42, i++)}</p>
        <p>{getLoremSentences(19, i++)}</p>
        <p>{getLoremSentences(12, i++)}</p>
        <p>{getLoremSentences(10, i++)}</p>
      </div>
    </>
  ),
  args: {
    cards: [
      {
        content: {
          header: "Accordion Card 1",
          body: "<h4>Quatrenary Headline</h4><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p><h5>This is a level five headline. There's a fancy word for that too.</h5><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p>",
        },
      },
      {
        content: {
          header: "Accordion Card 2, Large Content",
          body: `<h4>Quatrenary Headline</h4>
          <p>${getLoremSentences(35, i++)}</p>
          <p>${getLoremSentences(22, i++)}</p>
          <p>${getLoremSentences(12, i++)}</p>
          <p>${getLoremSentences(42, i++)}</p>
          <p>${getLoremSentences(19, i++)}</p>
          <p>${getLoremSentences(12, i++)}</p>
          <p>${getLoremSentences(10, i++)}</p>
          <p>${getLoremSentences(35, i++)}</p>
          <p>${getLoremSentences(22, i++)}</p>
          <p>${getLoremSentences(12, i++)}</p>
          <p>${getLoremSentences(42, i++)}</p>
          <p>${getLoremSentences(19, i++)}</p>
          <p>${getLoremSentences(12, i++)}</p>
          <p>${getLoremSentences(10, i++)}</p>
          `,
        },
      },
      {
        content: {
          header: "Accordion Card 3",
          body: `<h4>Quatrenary Headline</h4><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p><h5>This is a level five headline. There's a fancy word for that too.</h5><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p>
          <p>${getLoremSentences(35, i++)}</p>
          <p>${getLoremSentences(22, i++)}</p>`,
        },
      },
    ],
    openedCard: 2,
  },
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
        icon: ["fas", "pencil-alt"],
        header: "Accordion Card 1",
        body: "<h4>Quatrenary Headline</h4><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p><h5>This is a level five headline. There's a fancy word for that too.</h5><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p>",
      },
    },
    {
      content: {
        icon: ["fas", "newspaper"],
        header: "Accordion Card 2",
        body: "<h4>Quatrenary Headline</h4><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p><h5>This is a level five headline. There's a fancy word for that too.</h5><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p>",
      },
    },
  ],
};
