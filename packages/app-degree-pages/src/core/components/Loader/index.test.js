// @ts-check
import { render } from "@testing-library/react";
import React from "react";

import { Loader } from ".";

describe("#Loader", () => {
  it("should define the component with class 'ball-loader'", () => {
    const { container } = render(<Loader />);
    expect(container.firstElementChild.className).toContain("ball-loader");
  });
});
