// @ts-check
import { render } from "@testing-library/react";
import React from "react";

import { ParagrapList } from ".";

describe("#ParagrapList", () => {
  it("should define the component", () => {
    const contents = [
      {
        text: "Dummy text 1",
      },
      {
        text: "Dummy text 2",
      },
    ];

    const { getByText } = render(<ParagrapList contents={contents} />);
    expect(getByText("Dummy text 1")).toBeDefined();
    expect(getByText("Dummy text 2")).toBeDefined();
  });
});
