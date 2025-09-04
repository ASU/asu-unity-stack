import { imageAny } from "@asu/shared";
import { render, cleanup } from "@testing-library/react";
import React from "react";
import { expect, describe, it, afterEach, beforeEach } from "vitest";

// @ts-ignore
import { Image } from "./Image";
const img = imageAny();
const img2 = imageAny();

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

  describe("Multiple Images", () => {
    it("should render multiple images with auto arrangement", () => {
      const { container } = renderImage({
        images: [
          { src: img, alt: "First image" },
          { src: img2, alt: "Second image" },
        ],
        columns: "0",
      });

      expect(container.querySelector(".uds-card-arrangement")).toBeTruthy();
      expect(container.querySelector(".auto-arrangement")).toBeTruthy();
      expect(container.querySelectorAll("img")).toHaveLength(2);
    });

    it("should render multiple images with three columns", () => {
      const { container } = renderImage({
        images: [
          { src: img, alt: "First image" },
          { src: img2, alt: "Second image" },
        ],
        columns: "3",
      });

      expect(container.querySelector(".uds-card-arrangement")).toBeTruthy();
      expect(container.querySelector(".three-columns")).toBeTruthy();
      expect(container.querySelectorAll("img")).toHaveLength(2);
    });

    it("should render multiple images with four columns", () => {
      const { container } = renderImage({
        images: [
          { src: img, alt: "First image" },
          { src: img2, alt: "Second image" },
        ],
        columns: "4",
      });

      expect(container.querySelector(".uds-card-arrangement")).toBeTruthy();
      expect(container.querySelector(".four-columns")).toBeTruthy();
      expect(container.querySelectorAll("img")).toHaveLength(2);
    });

    it("should render single image when images prop is not provided", () => {
      const { container } = renderImage({
        src: img,
        alt: "Single image",
      });

      expect(container.querySelector(".uds-card-arrangement")).toBeFalsy();
      expect(container.querySelectorAll("img")).toHaveLength(1);
    });
  });
});
