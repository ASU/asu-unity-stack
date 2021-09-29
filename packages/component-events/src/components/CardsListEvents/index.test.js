// @ts-check
import { render, cleanup, act } from "@testing-library/react";
import React from "react";

import { CardsListEvents } from "./index";

const DEFAULT_MAX_ITEMS = 3;
const CUSTOM_MAX_ITEMS = 6;

const defaultArgs = {
  header: { color: "dark", text: "Events List" },
  ctaButton: {
    color: "gold",
    url: "https://news.asu.edu",
    text: "Click to see more events",
  },
  dataSource: {
    url: "/api/mocks/feeds-json",
  },
};

describe("#Cards List Events", () => {
  /** @type {import("@testing-library/react").RenderResult} */
  let component;

  const renderCardsListEvents = async props => {
    await act(async () => {
      component = await render(<CardsListEvents {...{ ...props }} />);
    });
  };

  describe("Default", () => {
    beforeEach(async () => {
      await renderCardsListEvents(defaultArgs);
    });
    afterEach(cleanup);

    it("should define the component", () => {
      expect(component).toBeDefined();
    });

    it("should render default number of cards", () => {
      const renderedCards = component
        .queryByTestId("list-view-container")
        .querySelectorAll("li");
      expect(renderedCards.length).toBe(DEFAULT_MAX_ITEMS);
    });
  });

  describe("#With Max Items", () => {
    const maxItemsArgs = { ...defaultArgs, maxItems: 6 };
    beforeEach(async () => {
      await renderCardsListEvents(maxItemsArgs);
    });
    afterEach(cleanup);

    it("should render custom number of cards", () => {
      const renderedCards = component
        .queryByTestId("list-view-container")
        .querySelectorAll("li");
      expect(renderedCards.length).toBe(CUSTOM_MAX_ITEMS);
    });
  });

  describe("#With No Header", () => {
    const noHeaderArgs = { ...defaultArgs, header: undefined };
    beforeEach(async () => {
      await renderCardsListEvents(noHeaderArgs);
    });
    afterEach(cleanup);

    it("should not render header component", () => {
      const headerComponent = component.queryByTestId("feed-header");
      expect(headerComponent).not.toBeInTheDocument();
    });
  });
});
