import { render } from "@testing-library/react";
import { generateImage } from "jsdom-screenshot";
import React from "react";
import "regenerator-runtime";

import { Card } from ".";

it("default card has no visual regressions", async () => {
  render(
    <Card
      type={"event"}
      width={"25%"}
      horizontal={false}
      clickable={false}
      title={"Default Title"}
      image={"https://via.placeholder.com/300x200"}
      imageAltText={"placeholder image"}
    />
  );

  const screenshot = await generateImage();
  expect(screenshot).toMatchImageSnapshot();
});
