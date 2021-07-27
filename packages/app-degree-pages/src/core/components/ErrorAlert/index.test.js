// @ts-check
import React from "react";
import renderer from "react-test-renderer";

import { ErrorAlert } from ".";

describe("#ErrorAlert", () => {
  it("should define the component", () => {
    const component = renderer.create(<ErrorAlert />);

    const page = component.toJSON();
    expect(page).toBeDefined();
  });
});
