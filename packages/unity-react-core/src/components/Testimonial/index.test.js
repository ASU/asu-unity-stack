/* eslint-disable react/jsx-props-no-spreading */
// @ts-check
import { render, cleanup } from "@testing-library/react";
import React from "react";

import { Testimonial } from ".";

const defaultArgs = {
  quote: {
    title: "Testimonial",
    content: `ASU is a comprehensive public research university, measured not by whom we exclude, but rather by whom we include and how they succeed; advancing research and discovery of public value; and assuming fundamental responsibility for the economic, social, cultural and overall health of the communities it serves.`,
    cite: {
      name: `Michael M. Crow`,
      description: `ASU Charter`,
    },
  },
  imageSource: "https://placeimg.com/400/400/any",
};

const renderTestimonial = props => {
  return render(<Testimonial {...{ ...props }} />);
};

describe("#Testimonial", () => {
  /** @type {import("@testing-library/react").RenderResult} */
  let component;

  beforeEach(() => {
    component = renderTestimonial(defaultArgs);
  });
  afterEach(cleanup);

  it("should define component", () => {
    expect(component).toBeDefined();
  });

  const elements = [
    [`Image`, `testimonial-image`],
    [`Title`, `testimonial-title`],
    [`Content`, `testimonial-content`],
    [`Citation`, `testimonial-citation`],
  ];

  test.each(elements)("should define %p element", (_, testId) =>
    expect(component.queryByTestId(testId)).toBeInTheDocument()
  );
});
