/* eslint-disable react/jsx-props-no-spreading */
// @ts-check
import { render, cleanup } from "@testing-library/react";
import React from "react";

import { Video } from ".";

const defaultArgs = {
  type: "video",
  url: "",
  caption: "Sample video",
};

const renderVideo = props => {
  return render(<Video {...{ ...props }} />);
};

describe("#Video", () => {
  /** @type {import("@testing-library/react").RenderResult} */
  let component;

  beforeEach(() => {
    component = renderVideo(defaultArgs);
  });
  afterEach(cleanup);

  it("should define component", () => {
    const videoTag = component.container.querySelector("video");
    const sourceTag = component.container.querySelector("source");

    expect(component).toBeDefined();
    expect(videoTag).toBeInTheDocument();
    expect(sourceTag.getAttribute("src")).toBeDefined();
  });

  it("should render caption element", () => {
    expect(component.queryByTestId("video-caption")).toBeInTheDocument();
  });
});

describe("#Youtube Video", () => {
  it("should define component", () => {
    const component = renderVideo({ ...defaultArgs, type: "youtube" });
    const videoTag = component.container.querySelector("iframe");

    expect(component).toBeDefined();
    expect(videoTag).toBeInTheDocument();
    expect(videoTag.getAttribute("src")).toBeDefined();
  });
});
