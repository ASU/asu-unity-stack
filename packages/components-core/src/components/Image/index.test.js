import { render, cleanup } from "@testing-library/react";
import React from "react";

import { Image } from ".";

const renderImage = props => {
  return render(<Image {...{ ...props }} />);
};

describe("#Image", () => {
  let component;

  beforeEach(() => {
    component = renderImage({
      src: "https://source.unsplash.com/WLUHO9A_xik/800x600",
      alt: "Placeholder image",
    });
  });

  afterEach(cleanup);

  it("should define component", () => {
    expect(component).toBeDefined();
  });
});
