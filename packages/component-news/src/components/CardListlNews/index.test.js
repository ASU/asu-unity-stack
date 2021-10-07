// @ts-check
import { render, cleanup, act } from "@testing-library/react";
import React from "react";

import { CardListlNews } from "./index";

const DEFAULT_MAX_ITEMS = 3;
const CUSTOM_MAX_ITEMS = 6;

const defaultArgs = {
  header: { color: "dark", text: "News List" },
  ctaButton: {
    color: "maroon",
    url: "https://news.asu.edu",
    text: "Click to see more",
  },
  dataSource: {
    url: "/api/mocks/feeds-json",
  },
};

describe("#Cards List News", () => {
  /** @type {import("@testing-library/react").RenderResult} */
  let component;

  const renderCardsListNews = async props => {
    await act(async () => {
      component = await render(<CardListlNews {...{ ...props }} />);
    });
  };

  describe("Default", () => {
    beforeEach(async () => {
      await renderCardsListNews(defaultArgs);
    });
    afterEach(cleanup);

    it("should define the component", () => {
      expect(component).toBeDefined();
    });

    it("should render default number of cards", () => {
      const renderedCards = component.queryByTestId(
        "list-view-container"
      ).childElementCount;
      expect(renderedCards).toBe(DEFAULT_MAX_ITEMS);
    });
  });

  describe("#With Max Items", () => {
    const maxItemsArgs = { ...defaultArgs, maxItems: 6 };
    beforeEach(async () => {
      await renderCardsListNews(maxItemsArgs);
    });
    afterEach(cleanup);

    it("should render custom number of cards", () => {
      const renderedCards = component.queryByTestId(
        "list-view-container"
      ).childElementCount;
      expect(renderedCards).toBe(CUSTOM_MAX_ITEMS);
    });
  });

  describe("#With No Header", () => {
    const noHeaderArgs = { ...defaultArgs, header: undefined };
    beforeEach(async () => {
      await renderCardsListNews(noHeaderArgs);
    });
    afterEach(cleanup);

    it("should not render header component", () => {
      const headerComponent = component.queryByTestId("feed-header");
      expect(headerComponent).not.toBeInTheDocument();
    });
  });
});
