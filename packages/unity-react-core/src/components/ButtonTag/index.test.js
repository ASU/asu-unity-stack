/* eslint-disable react/jsx-props-no-spreading */
// @ts-check
import { render, fireEvent, cleanup } from "@testing-library/react";
import React from "react";

import { ButtonTag } from ".";

const buttonOnClick = jest.fn();
const linkUrl = "/#mock-link";

const buttonDefaultArgs = {
  label: "Tag Button",
  color: "gray",
  onClick: buttonOnClick,
};

const linkDefaultArgs = {
  label: "Tag Link",
  color: "white",
  href: linkUrl,
};

const renderButtonTag = props => {
  return render(<ButtonTag {...{ ...props }} />);
};

describe("#Tag Button", () => {
  /** @type {import("@testing-library/react").RenderResult} */
  let component;
  /** @type {ChildNode} */
  let element;

  beforeEach(() => {
    component = renderButtonTag(buttonDefaultArgs);
    element = component.container.firstChild;
  });
  afterEach(cleanup);

  it("should define component", () => {
    expect(component).toBeDefined();
  });

  it("should call onClick", () => {
    fireEvent.click(element);
    expect(buttonOnClick).toBeCalledTimes(1);
  });
});

describe("#Tag Link", () => {
  /** @type {import("@testing-library/react").RenderResult} */
  let component;
  /** @type {ChildNode} */
  let element;

  beforeEach(() => {
    component = renderButtonTag(linkDefaultArgs);
    element = component.container.firstChild;
  });
  afterEach(cleanup);

  it("should be anchor element", () => {
    expect(element.nodeName.toLowerCase()).toBe("a");
  });
  it("should have href attribute", () => {
    expect(element).toHaveAttribute("href", linkUrl);
  });
});
