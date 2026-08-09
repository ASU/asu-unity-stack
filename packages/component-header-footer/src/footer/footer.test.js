// @ts-check
import { render, cleanup } from "@testing-library/react";
import React from "react";

import { ASUFooter } from ".";

import {
  completeState,
  emptyStateFooter,
  unbrandedStateFooter,
} from "../../__mocks__/data/props-mock";

const renderFooter = props => {
  return render(<ASUFooter {...{ ...props }} />);
};

describe("#ASU Footer", () => {
  /** @type {import("@testing-library/react").RenderResult} */
  let component;

  beforeEach(() => {
    component = renderFooter(completeState);
  });
  afterAll(cleanup);

  it("should define component", () => {
    expect(component).toBeDefined();
  });

  const cases = [
    [`Social`, `social`],
    [`Contact`, `contact`],
    [`Innovation`, `innovation`],
    [`Legal`, `legal`],
  ];

  test.each(cases)("should %p section be defined", (_, testId) =>
    expect(component.queryByTestId(testId)).toBeInTheDocument()
  );
});

describe("#ASU Footer without social and contact", () => {
  /** @type {import("@testing-library/react").RenderResult} */
  let component;

  beforeEach(() => {
    component = renderFooter(emptyStateFooter);
  });
  afterAll(cleanup);

  it("should define component", () => {
    expect(component).toBeDefined();
  });

  const positiveCases = [
    [`Innovation`, `innovation`],
    [`Legal`, `legal`],
  ];
  const negativeCases = [
    [`Social`, `social`],
    [`Contact`, `contact`],
  ];

  test.each(positiveCases)("should %p section be defined", (_, testId) =>
    expect(component.queryByTestId(testId)).toBeInTheDocument()
  );
  test.each(negativeCases)("should %p section not be defined", (_, testId) =>
    expect(component.queryByTestId(testId)).not.toBeInTheDocument()
  );
});

describe("#ASU Unbranded Footer", () => {
  /** @type {import("@testing-library/react").RenderResult} */
  let component;

  beforeEach(() => {
    component = renderFooter(unbrandedStateFooter);
  });
  afterAll(cleanup);

  const positiveCases = [
    [`Contact`, `contact`],
    [`Legal`, `legal`],
  ];
  const negativeCases = [
    [`Social`, `social`],
    [`Innovation`, `innovation`],
  ];

  test.each(positiveCases)("should %p section be defined", (_, testId) =>
    expect(component.queryByTestId(testId)).toBeInTheDocument()
  );
  test.each(negativeCases)("should %p section not be defined", (_, testId) =>
    expect(component.queryByTestId(testId)).not.toBeInTheDocument()
  );
});
