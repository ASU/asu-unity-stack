// @ts-check
import { render, fireEvent, cleanup } from "@testing-library/react";
import React from "react";

import { Accordion } from "./index";

const defaultArgs = {
  cards: [
    {
      content: {
        header: "Accordion Card",
        body: "<h4>Quatrenary Headline</h4><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p><h5>This is a level five headline. There's a fancy word for that too.</h5><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p>",
      },
    },
  ],
};

const renderAccordion = args => {
  return render(<Accordion cards={args.cards} openedCard={args.openedCard} />);
};

describe("#Accordion", () => {
  /** @type {import("@testing-library/react").RenderResult} */
  let component;

  beforeEach(() => {
    component = renderAccordion(defaultArgs);
  });
  afterEach(cleanup);

  it("should define the component", () => {
    expect(component).toBeDefined();
  });

  it("should open the card", async () => {
    const buttonCard = await component.findByTestId("accordion-opener");
    fireEvent.click(buttonCard);
    expect(buttonCard.getAttribute("aria-expanded")).toBe("true");
  });
});

describe("#Accordion opened", () => {
  it("should define the component opened", async () => {
    const props = {
      cards: [...defaultArgs.cards],
      openedCard: 1,
    };

    const component = renderAccordion(props);
    const componentActioner = await component.findByTestId("accordion-opener");

    expect(component).toBeDefined();
    expect(componentActioner.getAttribute("aria-expanded")).toBe("true");
  });
});
