import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import React from "react";

import { ASUHeader } from ".";
import { defaultState } from "../../__mocks__/data/props-mock";

const getToggle = () =>
  screen.getAllByRole("link", { name: /link option 1/i })[0];

describe("NavItem dropdown toggling", () => {
  beforeEach(() => {
    window.HTMLElement.prototype.scrollIntoView = jest.fn();
    render(<ASUHeader {...defaultState} />);
  });
  afterEach(cleanup);

  it("opens on Enter and closes on Enter again", () => {
    const toggle = getToggle();
    fireEvent.keyDown(toggle, { key: "Enter" });
    expect(toggle).toHaveAttribute("aria-expanded", "true");
    fireEvent.keyDown(toggle, { key: "Enter" });
    expect(toggle).toHaveAttribute("aria-expanded", "false");
  });

  it("closes an open dropdown on Escape", () => {
    const toggle = getToggle();
    fireEvent.keyDown(toggle, { key: "Enter" });
    expect(toggle).toHaveAttribute("aria-expanded", "true");
    fireEvent.keyDown(toggle, { key: "Escape" });
    expect(toggle).toHaveAttribute("aria-expanded", "false");
  });

  it("closes an open dropdown on click", () => {
    const toggle = getToggle();
    fireEvent.click(toggle);
    expect(toggle).toHaveAttribute("aria-expanded", "true");
    fireEvent.click(toggle);
    expect(toggle).toHaveAttribute("aria-expanded", "false");
  });
});
