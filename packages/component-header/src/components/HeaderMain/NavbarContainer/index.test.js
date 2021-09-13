/* eslint-disable jest/no-mocks-import */
// @ts-check
import { render, fireEvent, cleanup } from "@testing-library/react";
import React from "react";

import { NavbarContainer } from ".";

import {
  defaultState,
  onHoverState,
} from "../../../../__mocks__/data/props-mock";
import { AppContextProvider } from "../../../core/context/app-context";

const renderNavbarContainer = props => {
  return render(
    <AppContextProvider initialValue={props}>
      <NavbarContainer />
    </AppContextProvider>
  );
};

describe("#Navbar Container Component", () => {
  /** @type {import("@testing-library/react").RenderResult} */
  let component;

  beforeEach(() => {
    component = renderNavbarContainer(defaultState);
  });
  afterAll(cleanup);

  it("should define component", () => {
    expect(component).toBeDefined();
  });

  it("should render correct amount of clickable nav items", () => {
    const items = component.queryAllByTestId("nav-item");
    items?.forEach(item => {
      expect(item.nodeName.toLowerCase()).toBe("a");
    });
    expect(items.length).toBe(defaultState.navTree.length);
  });

  it("should open/close dropdown", () => {
    const navItem = component.queryAllByTestId("nav-item")[0];
    fireEvent.click(navItem.parentElement);
    setTimeout(() => {
      expect(navItem.className).toContain("open-link");
    });
    fireEvent.click(navItem.parentElement);
    expect(navItem.className).not.toContain("open-link");
  });
});

describe("#Navbar Container Component opened/closed on hover", () => {
  /** @type {import("@testing-library/react").RenderResult} */
  let component;
  let navItems;

  beforeEach(() => {
    component = renderNavbarContainer(onHoverState);
    navItems = component.queryAllByTestId("nav-item");
  });
  afterAll(cleanup);

  it("should open dropdown", () => {
    fireEvent.mouseEnter(navItems[0].parentElement);
    expect(navItems[0].className).toContain("open-link");
  });
  it("should close dropdown", () => {
    fireEvent.mouseEnter(navItems[0].parentElement);
    fireEvent.mouseLeave(navItems[0].parentElement);
    expect(navItems[0].className).not.toContain("open-link");
  });
});
