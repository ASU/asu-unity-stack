/* eslint-disable react/jsx-props-no-spreading */
// @ts-check
import { render, fireEvent, cleanup } from "@testing-library/react";
import React from "react";

import { ButtonIconOnly } from ".";

const buttonOnClick = jest.fn();

const defaultArgs = {
  color: "white",
  icon: ["fas", "times"],
  onClick: buttonOnClick,
};

const renderButtonIcon = props => {
  return render(<ButtonIconOnly {...{ ...props }} />);
};

describe("#Button Icon", () => {
  /** @type {import("@testing-library/react").RenderResult} */
  let component;
  /** @type {ChildNode} */
  let element;

  beforeEach(() => {
    component = renderButtonIcon(defaultArgs);
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
