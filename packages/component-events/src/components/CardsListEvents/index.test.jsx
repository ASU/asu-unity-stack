// @ts-check
import { render, cleanup, act } from "@testing-library/react";
import React from "react";
import { vi } from "vitest";

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
  maxItems: DEFAULT_MAX_ITEMS,
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

  describe("#No feed text", () => {
    // Force an empty feed so the "no results" message is rendered
    const emptyFeedArgs = { ...defaultArgs, dataSource: { url: "/empty" } };

    beforeEach(() => {
      vi.mocked(fetch).mockImplementation(
        async () =>
          new Response(JSON.stringify({ nodes: [] }), {
            status: 200,
            headers: { "Content-Type": "application/json" },
          })
      );
    });

    afterEach(() => {
      vi.mocked(fetch).mockReset();
      cleanup();
    });

    it("should render the default no-feed text when noFeedText is not provided", async () => {
      await renderCardsListEvents(emptyFeedArgs);
      expect(
        await component.findByText("No events to show.")
      ).toBeInTheDocument();
    });

    it("should render a custom no-feed text when noFeedText is provided", async () => {
      const customText = "Nothing happening right now.";
      await renderCardsListEvents({ ...emptyFeedArgs, noFeedText: customText });
      expect(await component.findByText(customText)).toBeInTheDocument();
      expect(
        component.queryByText("No events to show.")
      ).not.toBeInTheDocument();
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
