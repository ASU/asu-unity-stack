// @ts-check
import { render, cleanup, act } from "@testing-library/react";
import React from "react";

import { ResultCardTemplate } from "./index";

const defaultArgs = {
  numItems: 6,
};

describe("#Cards Carousel News", () => {
  /** @type {import("@testing-library/react").RenderResult} */
  let component;

  const renderCardsCarouselNews = async props => {
    await act(async () => {
      component = await render(<ResultCardTemplate {...{ ...props }} />);
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
});
