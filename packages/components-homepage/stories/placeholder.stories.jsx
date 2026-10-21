import { expect } from "storybook/test";
import React from "react";

export default {
  title: "Scaffold/Placeholder",
};

// Proves the tooling only (SCSS + UDS token import, play tests, a11y); removed once real stories land.
export const Default = {
  render: () => (
    <p className="hp-placeholder" data-testid="hp-placeholder">
      components-homepage scaffold
    </p>
  ),
  play: async ({ canvas }) => {
    const el = canvas.getByTestId("hp-placeholder");
    // $asu-gray-7 (#FAFAFA) from the UDS tokens, applied by components-homepage.scss
    await expect(getComputedStyle(el).backgroundColor).toBe(
      "rgb(250, 250, 250)"
    );
  },
};
