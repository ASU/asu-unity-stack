// @ts-check
import { act, render } from "@testing-library/react";
import React from "react";

import { ColumnSection } from ".";

const column = {
  title: "Academic resources",
  links: [
    {
      text: "Library",
      title: "Visit the library",
      url: "https://example.com/library",
    },
  ],
};

/** @type {Set<(event: { matches: boolean }) => void>} */
const listeners = new Set();
let desktop = false;

const renderColumn = () =>
  render(<ColumnSection columnIndex={0} column={column} />);

beforeEach(() => {
  desktop = false;
  listeners.clear();
  Object.defineProperty(window, "innerWidth", {
    configurable: true,
    value: 1024,
    writable: true,
  });
  Object.defineProperty(window, "matchMedia", {
    configurable: true,
    writable: true,
    value: jest.fn(() => ({
      matches: desktop,
      addEventListener: (
        /** @type {string} */ _,
        /** @type {(event: { matches: boolean }) => void} */ listener
      ) => listeners.add(listener),
      removeEventListener: (
        /** @type {string} */ _,
        /** @type {(event: { matches: boolean }) => void} */ listener
      ) => listeners.delete(listener),
    })),
  });
});

afterEach(() => {
  jest.restoreAllMocks();
});

describe("#ColumnSection", () => {
  it("labels the mobile accordion region with its button title", () => {
    const component = renderColumn();
    const region = component.getByRole("region", {
      name: column.title,
    });
    const button = component.getByRole("button", {
      name: column.title,
    });

    expect(region).toHaveAttribute("aria-labelledby", "footlink-header-0");
    expect(button).toHaveAttribute("id", "footlink-header-0");
    expect(button).toHaveAttribute("aria-controls", "footlink-0");
  });

  it("retains the region name when the desktop breakpoint is active", () => {
    desktop = true;
    window.innerWidth = 1260;
    const component = renderColumn();

    expect(
      component.getByRole("region", { name: column.title })
    ).toHaveAttribute("aria-labelledby", "footlink-header-0");
    expect(document.getElementById("footlink-header-0")).toHaveTextContent(
      column.title
    );
  });

  it("retains the label reference after crossing the desktop breakpoint", () => {
    const component = renderColumn();

    act(() => {
      desktop = true;
      listeners.forEach(listener => listener({ matches: desktop }));
    });

    expect(
      component.getByRole("region", { name: column.title })
    ).toHaveAttribute("aria-labelledby", "footlink-header-0");
    expect(document.getElementById("footlink-header-0")).toHaveTextContent(
      column.title
    );
  });
});
