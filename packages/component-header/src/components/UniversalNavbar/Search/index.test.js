/* eslint-disable jest/no-mocks-import */
// @ts-check
import { render, fireEvent, cleanup } from "@testing-library/react";
import React from "react";

import { Search } from ".";

import { defaultState } from "../../../../__mocks__/data/props-mock";
import { AppContextProvider } from "../../../core/context/app-context";

const renderSearch = props => {
  return render(
    <AppContextProvider initialValue={props}>
      <Search />
    </AppContextProvider>
  );
};

describe("#Search Component", () => {
  /** @type {import("@testing-library/react").RenderResult} */
  let component;

  beforeEach(() => {
    component = renderSearch(defaultState);
  });
  afterAll(cleanup);

  it("should define component", () => {
    expect(component).toBeDefined();
  });

  it("should show search field", () => {
    const searchButton = component.container.querySelector(".search-button");
    fireEvent.click(searchButton);
    expect(component.container.firstElementChild.className).toContain(
      "open-search"
    );
  });

  it("should close search field", () => {
    const searchButton = component.container.querySelector(".search-button");
    fireEvent.click(searchButton);
    const closeButton = component.container.querySelector(".close-search");
    fireEvent.click(closeButton);
    expect(component.container.firstElementChild.className).not.toContain(
      "open-search"
    );
  });
});
