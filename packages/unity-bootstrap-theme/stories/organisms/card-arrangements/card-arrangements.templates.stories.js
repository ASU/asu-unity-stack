import React from "react";

import { defaultDecorator } from "../../../../../shared/components/Layout.js";
import { cardNoTemplates as Card } from "../../molecules/cards/cards.templates.stories";
import { horizontalCardsMap as horizontalCard } from "../../molecules/cards/cardVariations.js"

export default {
  title: "Organisms/Content Sections/Card Arrangements/Templates",
  decorators: [ defaultDecorator ],
  argTypes: {
    numCards: {
      name: "Columns",
      control: { type: "range", min: 1, max: 6, step: 1 },
    },
    vertical: {
      name: "Vertical",
      control: { type: "boolean" },
    },
    autoArrangement: {
      name: "Auto Arrangement",
      control: { type: "boolean" },
    },
    cardType: {
      name: "Card Type",
      options: ["default", "degree", "event", "story"],
      mapping: {
        "Default": "",
      },
      control: {
        type: "radio",
      },
    },
  },
  args: {
    cardType: "story",
    autoArrangement: false,
    vertical: false,
    numCards: 2,
  },
};

export const CardArrangement =
  ({cardType,autoArrangement,vertical,numCards}) => {
    const cards = Array.from(Array(numCards)).map(() => {
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
          vertical ? "uds-card-arrangement-vertical" : ""
        }`}
      >
        <div className="uds-card-arrangement-content-container">
          <h2>Lorem ipsum dolor sit amet</h2>
          {vertical && (
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
            autoArrangement ? "auto-arrangement" : ""
          }`}
        >
          {cards}
        </div>
      </div>
    );
  };
CardArrangement.args = {
  numCards: 2,
};
CardArrangement.argTypes = {
  cardType: {table:{disable:true}}
}

export const CardArrangementHorizontal =
({cardType,autoArrangement,vertical,numCards}) => {
    const cards = Array.from(Array(numCards)).map((x) => {
      return horizontalCard(cardType);
    });
    return (
      <div
        className={`uds-card-arrangement ${
          vertical ? "uds-card-arrangement-vertical" : ""
        }`}
      >
        <div className="uds-card-arrangement-content-container">
          <h2>Lorem ipsum dolor sit amet</h2>
          {vertical && (
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
            autoArrangement ? "auto-arrangement" : ""
          }`}
        >
      {cards}
        </div>
      </div>
    );
  }
;

CardArrangementHorizontal.args = {
  numCards: 2,
};
