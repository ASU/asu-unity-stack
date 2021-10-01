// @ts-check
import { render, cleanup, act } from "@testing-library/react";
import React from "react";

import { CardGridNews } from "./index";

const DEFAULT_MAX_ITEMS = 3;
const CUSTOM_MAX_ITEMS = 6;

const defaultArgs = {
  header: { color: "dark", text: "News Grid" },
  ctaButton: {
    color: "maroon",
    url: "https://news.asu.edu",
    text: "Click to see more",
  },
  dataSource: {
    url: "/api/mocks/feeds-json",
  },
};

describe("#Cards Grid News", () => {
  /** @type {import("@testing-library/react").RenderResult} */
  let component;

  const renderCardsGridNews = async props => {
    await act(async () => {
      component = await render(<CardGridNews {...{ ...props }} />);
    });
  };

  describe("Default", () => {
    beforeEach(async () => {
      await renderCardsGridNews(defaultArgs);
    });
    afterEach(cleanup);

    it("should define the component", () => {
      expect(component).toBeDefined();
    });

    it("should render default number of cards", () => {
      const renderedCards = component.queryByTestId(
        "grid-view-container"
      ).childElementCount;
      expect(renderedCards).toBe(DEFAULT_MAX_ITEMS);
    });
  });

  describe("#With No Header", () => {
    const noHeaderArgs = { ...defaultArgs, header: undefined };
    beforeEach(async () => {
      await renderCardsGridNews(noHeaderArgs);
    });
    afterEach(cleanup);

    it("should not render header component", () => {
      const headerComponent = component.queryByTestId("feed-header");
      expect(headerComponent).not.toBeInTheDocument();
    });
  });

  describe("#With Max Items", () => {
    const maxItemsArgs = { ...defaultArgs, maxItems: 6 };
    beforeEach(async () => {
      await renderCardsGridNews(maxItemsArgs);
    });
    afterEach(cleanup);

    it("should render custom number of cards", () => {
      const renderedCards = component.queryByTestId(
        "grid-view-container"
      ).childElementCount;
      expect(renderedCards).toBe(CUSTOM_MAX_ITEMS);
    });
  });
});
