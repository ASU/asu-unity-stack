// @ts-check
import { render, cleanup, act } from "@testing-library/react";
import React from "react";

import { CardsGridEvents } from "./index";

const DEFAULT_MAX_ITEMS = 3;
const CUSTOM_MAX_ITEMS = 6;

const defaultArgs = {
  header: { color: "dark", text: "Events Grid" },
  ctaButton: {
    color: "gold",
    url: "https://news.asu.edu",
    text: "Click to see more events",
  },
  dataSource: {
    url: "/api/mocks/feeds-json",
  },
};

describe("#Cards Grid Events", () => {
  /** @type {import("@testing-library/react").RenderResult} */
  let component;

  const renderCardsGridEvents = async props => {
    await act(async () => {
      component = await render(<CardsGridEvents {...{ ...props }} />);
    });
  };

  describe("Default", () => {
    beforeEach(async () => {
      await renderCardsGridEvents(defaultArgs);
    });
    afterEach(cleanup);

    it("should define the component", () => {
      expect(component).toBeDefined();
    });

    it("should render default number of cards", () => {
      const renderedCards = component
        .queryByTestId("grid-view-container")
        .querySelectorAll("li");
      expect(renderedCards.length).toBe(DEFAULT_MAX_ITEMS);
    });
  });

  describe("#With Max Items", () => {
    const maxItemsArgs = { ...defaultArgs, maxItems: 6 };
    beforeEach(async () => {
      await renderCardsGridEvents(maxItemsArgs);
    });
    afterEach(cleanup);

    it("should render custom number of cards", () => {
      const renderedCards = component
        .queryByTestId("grid-view-container")
        .querySelectorAll("li");
      expect(renderedCards.length).toBe(CUSTOM_MAX_ITEMS);
    });
  });

  describe("#With No Header", () => {
    const noHeaderArgs = { ...defaultArgs, header: undefined };
    beforeEach(async () => {
      await renderCardsGridEvents(noHeaderArgs);
    });
    afterEach(cleanup);

    it("should not render header component", () => {
      const headerComponent = component.queryByTestId("feed-header");
      expect(headerComponent).not.toBeInTheDocument();
    });
  });
});
