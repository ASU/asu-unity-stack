// @ts-check
import { render, cleanup, act } from "@testing-library/react";
import React from "react";

import { CardCarouselNews } from "./index";

const defaultArgs = {
  header: { color: "dark", text: "News Carousel" },
  ctaButton: {
    color: "gold",
    url: "https://news.asu.edu",
    text: "Click to see more events",
  },
  dataSource: {
    url: "/api/mocks/feeds-json",
  },
};

describe("#Cards Carousel News", () => {
  /** @type {import("@testing-library/react").RenderResult} */
  let component;

  const renderCardsCarouselNews = async props => {
    await act(async () => {
      component = await render(<CardCarouselNews {...{ ...props }} />);
    });
  };

  describe("Default", () => {
    beforeEach(async () => {
      await renderCardsCarouselNews(defaultArgs);
    });
    afterEach(cleanup);

    it("should define the component", () => {
      expect(component).toBeDefined();
    });
  });

  describe("#With No Header", () => {
    const noHeaderArgs = { ...defaultArgs, header: undefined };
    beforeEach(async () => {
      await renderCardsCarouselNews(noHeaderArgs);
    });
    afterEach(cleanup);

    it("should not render header component", () => {
      const headerComponent = component.queryByTestId("feed-header");
      expect(headerComponent).not.toBeInTheDocument();
    });
  });
});
