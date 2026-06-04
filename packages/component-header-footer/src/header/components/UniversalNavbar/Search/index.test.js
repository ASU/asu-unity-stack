// @ts-check
import { render, fireEvent, cleanup } from "@testing-library/react";
import React from "react";

import { Search } from ".";

import { defaultState } from "../../../../../__mocks__/data/props-mock";
import { AppContextProvider } from "../../../core/context/app-context";

/**
 * @typedef {Object} SearchProps
 * @property {any} initialValue - The initial value for the app context
 */

/**
 * @param {SearchProps} props - The props for rendering the search component
 * @returns {import("@testing-library/react").RenderResult}
 */
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
    component = renderSearch({ initialValue: defaultState });
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

    // Simulate blur to close the search field when empty
    fireEvent.blur(searchField);

    const searchFieldAfterClose =
      component.queryByPlaceholderText("Search asu.edu");
    expect(searchFieldAfterClose).not.toBeInTheDocument();
  });

  it("should submit form via eventCallback after search", async () => {
    const pushMock = jest.fn(obj => {
      if (obj.eventCallback) obj.eventCallback();
      return 1;
    });
    window.dataLayer = [];
    window.dataLayer.push = pushMock;

    const searchButton = await component.findByTestId("search-button");
    fireEvent.click(searchButton);

    const searchField = await component.findByPlaceholderText("Search asu.edu");
    fireEvent.change(searchField, { target: { value: "engineering" } });

    const form = /** @type {HTMLFormElement} */ (
      component.getByTestId("universal-nav-search-form")
    );
    // jsdom does not implement real form submission/navigation, so stub it to
    // verify the eventCallback path without triggering jsdom navigation.
    const submitMock = jest.fn();
    form.submit = submitMock;
    fireEvent.submit(form);

    expect(pushMock).toHaveBeenCalledWith(
      expect.objectContaining({
        event: "search",
        text: "engineering",
        eventCallback: expect.any(Function),
        eventTimeout: 2000,
      })
    );
    expect(submitMock).toHaveBeenCalledTimes(1);
  });
});
