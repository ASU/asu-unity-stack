// @ts-check
import React from "react";
import renderer from "react-test-renderer";

import { Loader } from ".";

describe("#Loader", () => {
  it("should define the component", () => {
    const component = renderer.create(<Loader />);

    const page = component.toJSON();
    expect(page).toBeDefined();
  });
});
