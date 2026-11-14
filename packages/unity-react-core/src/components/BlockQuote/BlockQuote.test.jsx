// @ts-check
import { render, cleanup } from "@testing-library/react";
import React from "react";
import { expect, describe, it, afterEach, beforeEach, test } from "vitest";

import { BlockQuote } from "./BlockQuote";

const defaultArgs = {
  quote: {
    title: "BlockQuote",
    content: `ASU is a comprehensive public research university, measured not by whom we exclude, but rather by whom we include and how they succeed; advancing research and discovery of public value; and assuming fundamental responsibility for the economic, social, cultural and overall health of the communities it serves.`,
    cite: {
      name: `Michael M. Crow`,
      description: `ASU Charter`,
    },
  },
  imageSource: "https://placeimg.com/400/400/any",
  imageAltText: "describe the image",
};

// @ts-ignore
const renderBlockQuote = props => {
  return render(<BlockQuote {...{ ...props }} />);
};

describe("#BlockQuote", () => {
  /** @type {import("@testing-library/react").RenderResult} */
  let component;

  beforeEach(() => {
    component = renderBlockQuote(defaultArgs);
  });
  afterEach(cleanup);

  it("should define component", () => {
    expect(component).toBeDefined();
  });

  const elements = [
    [`Image`, `blockquote-image`],
    [`Title`, `blockquote-title`],
    [`Content`, `blockquote-content`],
    [`Citation`, `blockquote-citation`],
  ];

  test.each(elements)("should define %p element", (_, testId) => {
    expect(component.queryByTestId(testId)).toBeInTheDocument();
  });
});
