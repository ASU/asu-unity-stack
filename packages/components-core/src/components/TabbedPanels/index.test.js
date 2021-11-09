/* eslint-disable react/jsx-props-no-spreading */
// @ts-check
import { render, fireEvent, cleanup } from "@testing-library/react";
import React from "react";

import { Button } from ".";

const buttonOnClick = jest.fn();
const linkUrl = "/#mock-link";

const buttonDefaultArgs = {
  label: "Default Button",
  onClick: buttonOnClick,
};

const linkDefaultArgs = {
  label: "Default Button",
  href: linkUrl,
};

const renderButton = props => {
  return render(<Button {...{ ...props }} />);
};

describe("#Button", () => {
  /** @type {import("@testing-library/react").RenderResult} */
  let component;
  /** @type {ChildNode} */
  let element;

  beforeEach(() => {
    component = renderButton(buttonDefaultArgs);
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

describe("#Link Button", () => {
  /** @type {import("@testing-library/react").RenderResult} */
  let component;
  /** @type {ChildNode} */
  let element;

  beforeEach(() => {
    component = renderButton(linkDefaultArgs);
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
