// @ts-check
import { render, fireEvent, cleanup } from "@testing-library/react";
import React from "react";

import { Filters, INITIAL_FILTER_STATE } from ".";

import {
  locationOptions,
  asuLocalOptions,
  acceleratedConcurrentOptions,
} from "../../../../core/models";

const mockValue = INITIAL_FILTER_STATE;
const mockOnChange = jest.fn();
const mockOnApply = jest.fn();
const mockOnClean = jest.fn();

function renderFilter(value = mockValue) {
  return render(
    <Filters
      value={value}
      onChange={mockOnChange}
      onApply={mockOnApply}
      onClean={mockOnClean}
    />
  );
}

describe("#Filters", () => {
  /** @type {import("@testing-library/react").RenderResult} */
  let component = null;
  /** @type {HTMLElement} */
  let container = null;

  beforeEach(() => {
    component = renderFilter();
    container = component.container;
  });
  afterEach(cleanup);

  it("should define the component", () => {
    expect(component).toBeDefined();

    const selectElements = container.querySelectorAll("select");

    expect(selectElements).toHaveLength(3);
    expect(selectElements[0].children).toHaveLength(locationOptions.length);
    expect(selectElements[1].children).toHaveLength(asuLocalOptions.length);
    expect(selectElements[2].children).toHaveLength(
      acceleratedConcurrentOptions.length
    );
  });

  it("should trigger `change` events", () => {
    const mockFireChange = (targetId = "'", selectedIndex = 0) => {
      /** @type {HTMLSelectElement} */
      const locationsElement = container.querySelector(`#${targetId}`);
      fireEvent.change(locationsElement, {
        target: {
          targetId,
          event: {
            selectedOptions: [locationsElement.options[selectedIndex]],
          },
        },
      });
    };

    mockFireChange("locations");
    mockFireChange("asuLocals");
    mockFireChange("acceleratedConcurrent");
    expect(mockOnChange).toHaveBeenCalledTimes(3);
  });

  it("should trigger `apply filter` events", () => {
    const buttonElement = component.getByText(/Apply filters/i);
    fireEvent.click(buttonElement);
    expect(mockOnApply).toHaveBeenCalledTimes(1);
  });
});

describe("#Filters With state", () => {
  it("should trigger `clear filter` events", () => {
    const value = {
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

    const component = renderFilter(value);

    const buttonElement = component.getByTestId("btn-clear-filters");
    fireEvent.click(buttonElement);
    expect(mockOnClean).toHaveBeenCalledTimes(1);
  });
});
