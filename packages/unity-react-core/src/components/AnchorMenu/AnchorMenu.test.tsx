import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import React from "react";
import { expect, describe, it, afterEach, beforeEach, vi } from "vitest";

import { AnchorMenu } from "./AnchorMenu";
import { Containers } from "./AnchorMenu.stories";

const defaultArgs = {
  items: [
    { text: "First container", targetIdName: "first-container" },
    { text: "Second container", targetIdName: "second-container" },
    { text: "Third container", targetIdName: "third-container" },
    { text: "Fourth container", targetIdName: "fourth-container" },
  ],
  firstElementId: "first-container",
};

const renderAnchorMenu = (props = defaultArgs) => {
  return render(
    <>
      <AnchorMenu items={props.items} firstElementId={props.firstElementId} />
      <Containers />
    </>
  );
};

describe("#Anchor Menu", () => {
  /** @type {import("@testing-library/react").RenderResult} */
  let component;

  beforeEach(() => {
    window.scrollTo = vi.fn();
    component = renderAnchorMenu(defaultArgs);
  });
  afterEach(cleanup);

  it("should define the component", () => {
    expect(screen.getByTestId("anchor-menu-container")).toBeDefined();
  });

  it("should scroll to the section specified", async () => {
    const itemExample = "first-container";
    const anchor = await component.findByTestId(`anchor-item-${itemExample}`);
    fireEvent.click(anchor);
    expect(anchor).toBeVisible();
  });

  it("should close the mobile menu when an anchor link is clicked (UDS-2176)", async () => {
    cleanup();

    // Mock matchMedia for mobile viewport (< 992px)
    const originalMatchMedia = window.matchMedia;
    window.matchMedia = vi.fn().mockImplementation(query => ({
      matches: query.includes("max-width: 991px"),
      media: query,
      onchange: null,
      addListener: vi.fn(),
      removeListener: vi.fn(),
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    }));

    const mobileComponent = renderAnchorMenu(defaultArgs);
    const toggler = screen.getByRole("button", { name: /On This Page:/i });
    const collapseContainer = screen.getByTestId("anchor-menu-container");

    // Initially closed
    expect(collapseContainer).not.toHaveClass("show");
    expect(toggler).toHaveAttribute("aria-expanded", "false");

    // Open the mobile menu
    fireEvent.click(toggler);
    expect(collapseContainer).toHaveClass("show");
    expect(toggler).toHaveAttribute("aria-expanded", "true");

    // Click an anchor link in the menu
    const anchor = await mobileComponent.findByTestId("anchor-item-second-container");
    fireEvent.click(anchor);

    // Menu should automatically collapse/close after selection
    expect(collapseContainer).not.toHaveClass("show");
    expect(toggler).toHaveAttribute("aria-expanded", "false");

    // Target element should receive focus for keyboard/screen-reader navigation (WCAG 2.4.3)
    const targetElement = document.getElementById("second-container");
    expect(document.activeElement).toBe(targetElement);

    window.matchMedia = originalMatchMedia;
  });

  it("should handle missing anchor target gracefully and still close the menu", async () => {
    cleanup();

    const originalMatchMedia = window.matchMedia;
    window.matchMedia = vi.fn().mockImplementation(query => ({
      matches: query.includes("max-width: 991px"),
      media: query,
      onchange: null,
      addListener: vi.fn(),
      removeListener: vi.fn(),
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    }));

    const warnSpy = vi.spyOn(console, "warn").mockImplementation(() => {});

    const itemsWithMissing = [
      { text: "Missing Target", targetIdName: "non-existent-target" },
    ];
    render(
      <AnchorMenu
        items={itemsWithMissing}
        firstElementId="non-existent-target"
      />
    );

    const toggler = screen.getByRole("button", { name: /On This Page:/i });
    const collapseContainer = screen.getByTestId("anchor-menu-container");

    // Open menu
    fireEvent.click(toggler);
    expect(collapseContainer).toHaveClass("show");

    // Click missing anchor
    const anchor = screen.getByTestId("anchor-item-non-existent-target");
    fireEvent.click(anchor);

    // Should warn and close menu
    expect(warnSpy).toHaveBeenCalledWith(
      expect.stringContaining('Anchor target "#non-existent-target" no longer exists')
    );
    expect(collapseContainer).not.toHaveClass("show");

    warnSpy.mockRestore();
    window.matchMedia = originalMatchMedia;
  });

  it("should close mobile menu without scrolling when first anchor is already visible", async () => {
    cleanup();

    const originalMatchMedia = window.matchMedia;
    window.matchMedia = vi.fn().mockImplementation(query => ({
      matches: query.includes("max-width: 991px"),
      media: query,
      onchange: null,
      addListener: vi.fn(),
      removeListener: vi.fn(),
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    }));

    const mobileComponent = renderAnchorMenu(defaultArgs);
    const toggler = screen.getByRole("button", { name: /On This Page:/i });
    const collapseContainer = screen.getByTestId("anchor-menu-container");

    // Open menu
    fireEvent.click(toggler);
    expect(collapseContainer).toHaveClass("show");

    // Mock anchor menu container with a realistic expanded height (e.g. 300px)
    const anchorMenuEl = document.getElementById("uds-anchor-menu");
    if (anchorMenuEl) {
      Object.defineProperty(anchorMenuEl, "offsetHeight", {
        configurable: true,
        value: 300,
      });
    }

    // Mock first target element rect as already visible in viewport
    const firstTarget = document.getElementById("first-container");
    if (firstTarget) {
      vi.spyOn(firstTarget, "getBoundingClientRect").mockReturnValue({
        top: 200,
        bottom: 500,
        left: 0,
        right: 300,
        width: 300,
        height: 300,
        x: 0,
        y: 200,
        toJSON: () => {},
      });
    }

    const scrollToSpy = vi.fn();
    window.scrollTo = scrollToSpy;

    const anchor = await mobileComponent.findByTestId("anchor-item-first-container");
    fireEvent.click(anchor);

    // Should close menu and not call window.scrollTo since it's already visible
    expect(collapseContainer).not.toHaveClass("show");
    expect(scrollToSpy).not.toHaveBeenCalled();
    expect(document.activeElement).toBe(firstTarget);

    window.matchMedia = originalMatchMedia;
  });
});
