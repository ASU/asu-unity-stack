// @ts-check
import { render, cleanup, act } from "@testing-library/react";
import React from "react";
import { vi } from "vitest";

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
  maxItems: DEFAULT_MAX_ITEMS,
};

describe("#Cards Grid Events", () => {
  /** @type {import("@testing-library/react").RenderResult} */
  let component;
  let container;

  const renderCardsGridEvents = async props => {
    await act(async () => {
      component = render(<CardsGridEvents {...{ ...props }} />);
      container = component.container;
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

    it("should render custom number of cards", async () => {
      const renderedCards = await component.findByTestId("grid-view-container");
      expect(renderedCards.children.length).toBe(CUSTOM_MAX_ITEMS);
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
      await renderCardsGridEvents(emptyFeedArgs);
      expect(
        await component.findByText("No events to show.")
      ).toBeInTheDocument();
    });

    it("should render a custom no-feed text when noFeedText is provided", async () => {
      const customText = "Nothing happening right now.";
      await renderCardsGridEvents({ ...emptyFeedArgs, noFeedText: customText });
      expect(await component.findByText(customText)).toBeInTheDocument();
      expect(
        component.queryByText("No events to show.")
      ).not.toBeInTheDocument();
    });

    it("should fall back to the default no-feed text when noFeedText is empty", async () => {
      await renderCardsGridEvents({ ...emptyFeedArgs, noFeedText: "" });
      expect(
        await component.findByText("No events to show.")
      ).toBeInTheDocument();
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
