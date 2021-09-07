// @ts-check
import { render, fireEvent } from "@testing-library/react";
import React from "react";

import { FiltersSummary } from ".";

const mockValue = {};
const mockOnRemove = jest.fn();

function renderFiltersSummary(value = mockValue) {
  return render(<FiltersSummary value={value} onRemove={mockOnRemove} />);
}

describe("#FiltersSummary", () => {
  /** @type {import("@testing-library/react").RenderResult} */
  let component = null;

  beforeEach(() => {
    component = renderFiltersSummary();
  });

  it("should define the component", () => {
    expect(component).toBeDefined();
    expect(component.getByTestId("summary-filter-tags").childElementCount).toBe(
      1
    );
  });
});

describe("#FiltersSummary  With state", () => {
  it("should trigger `remove` events", () => {
    const value = {
      isActive: true,
      asuLocals: [{ id: "0", text: "ASU@Cochise", value: "COCHS" }],
      acceleratedConcurrent: {
        id: "2",
        text: "Concurrent",
        value: "concurrentDegrees",
      },
      locations: [
        { id: "1", text: "Polytechnic campus", value: "POLY" },
        { id: "2", text: "Tempe campus", value: "TEMPE" },
      ],
    };

    const componentWithValue = renderFiltersSummary(value);

    const btnTagElements = componentWithValue.getAllByRole("button");
    expect(btnTagElements).toHaveLength(4);
    fireEvent.click(btnTagElements[0]);
    expect(mockOnRemove).toHaveBeenCalledTimes(1);
  });
});
