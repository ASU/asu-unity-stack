import React from "react";
import { generateImage } from "jsdom-screenshot";
import { render } from "@testing-library/react";

import { Card } from ".";

it("default card has no visual regressions", async () => {
  render(
    <Card
      type={"default"}
      width={"25%"}
      horizontal={false}
      clickable={false}
      title={"Default title"}
      image={"https://via.placeholder.com/300x200"}
      imageAltText={"placeholder image"}
    />
  );

  const screenshot = await generateImage();
  expect(screenshot).toMatchImageSnapshot();
});
