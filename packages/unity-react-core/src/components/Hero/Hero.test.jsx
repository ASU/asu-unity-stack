/* eslint-disable react/jsx-props-no-spreading */
// @ts-check
import { render, cleanup } from "@testing-library/react";
import React from "react";
import { expect, describe, it, afterEach, beforeEach, test } from "vitest";

// @ts-ignore
import img1 from "../../../../../shared/assets/img/named/hero01.jpg";
import { Hero } from "./Hero";

const defaultArgs = {
  image: {
    url: img1,
    altText: "Hero image",
    size: "large",
  },
  title: { text: "Heading 1", color: "white" },
  subTitle: { text: "Subtitle 1", color: "white" },
  contentsColor: "white",
  contents: [
    {
      text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    },
  ],
};

const renderHero = props => {
  return render(<Hero {...{ ...props }} />);
};

describe("#Hero", () => {
  /** @type {import("@testing-library/react").RenderResult} */
  let component;

  beforeEach(() => {
    component = renderHero(defaultArgs);
  });
  afterEach(cleanup);

  it("should define component", () => {
    expect(component).toBeDefined();
  });

  const sections = [
    [`Image`, `hero-image`],
    [`Title`, `hero-title`],
    [`Subtitle`, `hero-subtitle`],
    [`Content`, `hero-content`],
  ];

  test.each(sections)("should define %p section", async (_, testId) => {
    await expect(component.queryByTestId(testId)).toBeInTheDocument();
  });
});

describe("#Hero without content and subtitle", () => {
  it("should render the title only", () => {
    const props = {
      image: {
        url: img1,
        altText: "Hero image",
        size: "small",
      },
      title: {
        text: "Heading with a long title 1",
        highlightColor: "gold",
      },
    };

    const component = renderHero(props);

    expect(component.queryByTestId("hero-image")).toBeInTheDocument();
    expect(component.queryByTestId("hero-title")).toBeInTheDocument();
    expect(component.queryByTestId("hero-subtitle")).not.toBeInTheDocument();
    expect(component.queryByTestId("hero-content")).not.toBeInTheDocument();
  });
});
