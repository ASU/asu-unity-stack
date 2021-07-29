// @ts-check
import { render } from "@testing-library/react";
import React from "react";

import { OverlapContentImage } from ".";

describe("#OverlapContentImage", () => {
  it("should define the component", () => {
    const image = {
      url: "dummy-url/dummy-image.png",
      altText: "dummy alt",
    };

    const { container, getByText, getByAltText } = render(
      <OverlapContentImage
        title="dummy tile"
        contentDirection="right"
        image={image}
      />
    );
    expect(container.firstElementChild.className).toContain(
      "uds-image-overlap"
    );
    expect(container.firstElementChild.className).toContain("content-right");
    expect(getByText("dummy tile")).toBeDefined();

    const img = getByAltText(image.altText);
    expect(img.src).toContain(image.url);
  });
});
