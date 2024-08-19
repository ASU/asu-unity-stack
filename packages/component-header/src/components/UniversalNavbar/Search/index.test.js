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

  it("should open and close the universal search field", async () => {
    const searchButton = await component.findByTestId("search-button");
    fireEvent.click(searchButton);

    const searchField = await component.findByPlaceholderText("Search asu.edu");
    expect(searchField).toBeVisible();

    const closeButton = await component.findByTestId("close-search");
    fireEvent.click(closeButton);

    const searchFieldAfterClose =
      component.queryByPlaceholderText("Search asu.edu");
    expect(searchFieldAfterClose).not.toBeInTheDocument();
  });
});
