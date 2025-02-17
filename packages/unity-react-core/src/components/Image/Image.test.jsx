import { render, cleanup } from "@testing-library/react";
import React from "react";
import { expect, describe, it, afterEach, beforeEach } from "vitest";

// @ts-ignore
import img from "../../../../../shared/assets/img/named/img001.jpg";
import { Image } from "./Image";

const renderImage = props => {
  return render(<Image {...{ ...props }} />);
};

describe("#Image", () => {
  let component;

  beforeEach(() => {
    component = renderImage({
      src: img,
      alt: "Placeholder image",
    });
  });

  afterEach(cleanup);

  it("should define component", () => {
    expect(component).toBeDefined();
  });
});
