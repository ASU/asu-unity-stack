/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jest/no-mocks-import */
// @ts-check
import { render, cleanup } from "@testing-library/react";
import React from "react";

import { Social } from ".";

import { social } from "../../../__mocks__/data/props-mock";

const renderSocial = props => {
  return render(<Social {...{ ...props }} />);
};

describe("#Social", () => {
  /** @type {import("@testing-library/react").RenderResult} */
  let component;

  beforeEach(() => {
    component = renderSocial(social);
  });
  afterAll(cleanup);

  it("should define component", () => {
    expect(component).toBeDefined();
  });

  const cases = [
    [`Facebook`, `facebook`],
    [`Twitter`, `twitter`],
    [`Instagram`, `instagram`],
    [`Youtube`, `youtube`],
    [`LinkedIn`, `linkedin`],
  ];

  test.each(cases)(
    "should %p element be defined and be an anchor",
    (_, testId) => {
      const element = component.queryByTestId(testId);
      expect(element).toBeInTheDocument();
      expect(element.nodeName.toLowerCase()).toBe("a");
    }
  );
});
