import React from "react";

import { fireEvent, render, screen } from "@testing-library/react";

import { FilterComponent } from "./index";

const CHOICES = ["A", "B", "C", "D", "E", "F", "G"];

/**
 * jsdom never actually lays out content, so `scrollWidth`/`offsetWidth`
 * default to 0. Mock them on the rendered `.choices-container` and fire the
 * events `FilterComponent` listens for, mirroring what a real overflowing
 * browser layout would report.
 */
const mockScrollableContainer = ({ scrollWidth, offsetWidth }) => {
  const container = screen.getByRole("radiogroup");
  Object.defineProperty(container, "scrollWidth", {
    configurable: true,
    value: scrollWidth,
  });
  Object.defineProperty(container, "offsetWidth", {
    configurable: true,
    value: offsetWidth,
  });
  Object.defineProperty(container, "clientWidth", {
    configurable: true,
    value: offsetWidth,
  });
  container.scrollTo = jest.fn();
  fireEvent(container, new Event("resize"));
  return container;
};

describe("FilterComponent nav controls", () => {
  it("renders the prev/next controls with the classes their CSS depends on", () => {
    render(
      <FilterComponent filterLabel="Filter By Last Initial" choices={CHOICES} />
    );
    const container = mockScrollableContainer({
      scrollWidth: 600,
      offsetWidth: 300,
    });

    // Nothing scrolled yet: only the "next" control should be visible.
    expect(
      document.querySelector(".scroll-control-next .carousel-control-next-icon")
    ).toBeInTheDocument();
    expect(document.querySelector(".scroll-control-prev")).not.toBeInTheDocument();

    // Simulate having scrolled all the way over: "prev" appears, "next" hides.
    Object.defineProperty(container, "scrollLeft", {
      configurable: true,
      value: 300,
    });
    fireEvent.scroll(container);

    expect(
      document.querySelector(".scroll-control-prev .carousel-control-prev-icon")
    ).toBeInTheDocument();
    expect(document.querySelector(".scroll-control-next")).not.toBeInTheDocument();
  });

  it("scrolls the choices container when the next control is clicked", () => {
    render(
      <FilterComponent filterLabel="Filter By Last Initial" choices={CHOICES} />
    );
    const container = mockScrollableContainer({
      scrollWidth: 600,
      offsetWidth: 300,
    });

    fireEvent.click(document.querySelector(".scroll-control-next"));

    expect(container.scrollTo).toHaveBeenCalledWith({
      left: 200,
      behavior: "smooth",
    });
  });

  it("clamps the scroll position to the container's max scrollable width", () => {
    render(
      <FilterComponent filterLabel="Filter By Last Initial" choices={CHOICES} />
    );
    const container = mockScrollableContainer({
      scrollWidth: 350,
      offsetWidth: 300,
    });

    fireEvent.click(document.querySelector(".scroll-control-next"));

    // maxScrollLeft is only 50, even though a "next" click nominally asks for +200.
    expect(container.scrollTo).toHaveBeenCalledWith({
      left: 50,
      behavior: "smooth",
    });
  });
});
