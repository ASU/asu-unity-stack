import React from "react";
import { createComponent, createStory } from "../../../helpers/wrapper.js";

import { cardNoTemplates as Card } from "../../molecules/cards/cards.templates.stories";
import { horizontalCardsMap as horizontalCard } from "../../molecules/cards/cardVariations.js"
const extraOptions = {
  numCards: {
    name: "Columns",
    options: [1, 2, 3, 4, 5, 6],
    defaultValue: 2,
    control: {
      type: "radio",
    },
  },
  vertical: {
    name: "Vertical",
    control: { type: "boolean" },
    defaultValue: false,
  },
  autoArrangement: {
    name: "Auto Arrangement",
    control: { type: "boolean" },
    defaultValue: false,
  },
  cardType: {
    name: "Card Type",
    options: ["", "degree", "event", "story"],
    defaultValue: "story",
    control: {
      type: "radio",
      labels: {
        "": "Default",
        degree: "Degree",
        event: "Event",
        story: "Story",
      },
    },
  },
};

export default {
  title: "Organisms/Content Sections/Card Arrangements/Templates",
  argTypes: extraOptions,
};

export const CardArrangement = createStory(
  args => {
    const cards = Array.from(Array(args.numCards)).map(() => {
      return Card({
        cardHeader: "image",
        event: false,
        link: true,
        tags: true,
        numButtons: 1,
      });
    });
    return (
      <div
        className={`uds-card-arrangement ${
          args.vertical ? "uds-card-arrangement-vertical" : ""
        }`}
      >
        <div className="uds-card-arrangement-content-container">
          <h2>Lorem ipsum dolor sit amet</h2>
          {args.vertical && (
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipiscing
              elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
              dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur.
            </p>
          )}
          <button className="btn btn-dark">Default button</button>
        </div>
        <div
          className={`uds-card-arrangement-card-container  ${
            args.autoArrangement ? "auto-arrangement" : ""
          }`}
        >
          {cards}
        </div>
      </div>
    );
  }
);
CardArrangement.args = {
  numCards: 2,
};

export const CardArrangementHorizontal = createStory(
  args => {
    const cards = Array.from(Array(args.numCards)).map((x) => {
      return horizontalCard(args.cardType);
    });
    return (
      <div
        className={`uds-card-arrangement ${
          args.vertical ? "uds-card-arrangement-vertical" : ""
        }`}
      >
        <div className="uds-card-arrangement-content-container">
          <h2>Lorem ipsum dolor sit amet</h2>
          {args.vertical && (
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipiscing
              elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
              dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur.
            </p>
          )}
          <button className="btn btn-dark">Default button</button>
        </div>
        <div
          className={`uds-card-arrangement-card-container  ${
            args.autoArrangement ? "auto-arrangement" : ""
          }`}
        >
      {cards}
        </div>
      </div>
    );
  }
);

CardArrangementHorizontal.args = {
  numCards: 2,
};
