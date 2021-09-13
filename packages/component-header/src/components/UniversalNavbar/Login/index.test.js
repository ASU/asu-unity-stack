/* eslint-disable jest/no-mocks-import */
// @ts-check
import { render, cleanup } from "@testing-library/react";
import React from "react";

import { Login } from ".";

import {
  defaultState,
  defaultStateLoggedIn,
} from "../../../../__mocks__/data/props-mock";
import { AppContextProvider } from "../../../core/context/app-context";

const renderLogin = props => {
  return render(
    <AppContextProvider initialValue={props}>
      <Login />
    </AppContextProvider>
  );
};

describe("#Login Component", () => {
  /** @type {import("@testing-library/react").RenderResult} */
  let component;

  afterAll(cleanup);

  it("should define component", () => {
    component = renderLogin(defaultState);
    expect(component).toBeDefined();
  });

  describe("#Logged Out", () => {
    it("should render 'Sign In' button", () => {
      component = renderLogin(defaultState);
      const element = component.queryByText("Sign In");
      expect(element).toBeInTheDocument();
      expect(element.nodeName.toLowerCase()).toBe("a");
      expect(element.getAttribute("href")).toBeDefined();
    });
  });
  describe("#Logged In", () => {
    beforeEach(() => {
      component = renderLogin(defaultStateLoggedIn);
    });
    it("should render 'Sign Out' button", () => {
      const element = component.queryByText("Sign Out");
      expect(element).toBeInTheDocument();
      expect(element.nodeName.toLowerCase()).toBe("a");
      expect(element.getAttribute("href")).toBeDefined();
    });
    it("should render user name", () => {
      expect(component.queryByTestId("user-name")).toBeInTheDocument();
    });
  });
});
