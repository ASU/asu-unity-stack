import { render, cleanup, RenderResult } from "@testing-library/react";
import React from "react";
import { expect, describe, it, afterEach, beforeEach } from 'vitest';
import { Table } from "./Tables";

describe("Table Component Tests", () => {
  let component: RenderResult;
  const defaultProps = {
    columns: 5
  };

  const renderComponent = (props = defaultProps) => {
    return render(
      <div className="uds-table" tabIndex={0}>
        <Table {...props} />
      </div>
    );
  };

  beforeEach(() => {
    component = renderComponent();
  });

  afterEach(cleanup);

  it("should render the table component", () => {
    expect(component).toBeDefined();
  });

  it("should have correct number of columns", () => {
    const headerCells = component.container.querySelectorAll('thead th');
    expect(headerCells.length).toBe(defaultProps.columns + 1);
  });

  it("should display correct year range", () => {
    const currentYear = 2024;
    const headerCells = component.container.querySelectorAll('thead th');
    const years = Array.from(headerCells)
      .slice(1)
      .map(cell => cell.textContent);

    const expectedYears = new Array(defaultProps.columns)
      .fill(null)
      .map((_, i) => `Fall ${currentYear - (defaultProps.columns - 1) + i}`);

    expect(years).toEqual(expectedYears);
  });

  it("should render all campus rows", () => {
    const campuses = [
      "Tempe",
      "Downtown",
      "Polytechnic",
      "West",
      "Thunderbird",
      "Skysong Campus"
    ];

    campuses.forEach(campus => {
      expect(component.getByText(campus)).toBeInTheDocument();
    });
  });

  it("should have correct table structure", () => {
    expect(component.container.querySelector('table')).toBeInTheDocument();
    expect(component.container.querySelector('thead')).toBeInTheDocument();
    expect(component.container.querySelector('tbody')).toBeInTheDocument();
  });

  it("should render example link in first row", () => {
    const link = component.container.querySelector('a');
    expect(link).toBeInTheDocument();
    expect(link?.textContent).toBe('example link');
  });

  describe("with different column counts", () => {
    it("should render with minimum columns", () => {
      const minColumns = 4;
      const minComponent = renderComponent({ columns: minColumns });
      const headerCells = minComponent.container.querySelectorAll('thead th');
      expect(headerCells.length).toBe(minColumns + 1);
    });

    it("should render with maximum columns", () => {
      const maxColumns = 14;
      const maxComponent = renderComponent({ columns: maxColumns });
      const headerCells = maxComponent.container.querySelectorAll('thead th');
      expect(headerCells.length).toBe(maxColumns + 1);
    });
  });

  describe("data calculation tests", () => {
    it("should generate numbers for each cell", () => {
      const firstDataRow = component.container.querySelectorAll('tbody tr')[0];
      const dataCells = firstDataRow.querySelectorAll('td');

      dataCells.forEach(cell => {
        expect(cell.textContent).toMatch(/^\d{1,3}(,\d{3})*$/); // Format like 1,234
      });
    });

    it("should maintain consistent data structure across rows", () => {
      const rows = component.container.querySelectorAll('tbody tr');
      const expectedCellCount = defaultProps.columns + 1; // columns + header cell

      rows.forEach(row => {
        const cells = row.querySelectorAll('th, td');
        expect(cells.length).toBe(expectedCellCount);
      });
    });
  });

  describe("accessibility tests", () => {
    it("should have proper scope attributes on headers", () => {
      const columnHeaders = component.container.querySelectorAll('thead th');
      columnHeaders.forEach(header => {
        expect(header).toHaveAttribute('scope', 'col');
      });

      const rowHeaders = component.container.querySelectorAll('tbody th');
      rowHeaders.forEach(header => {
        expect(header).toHaveAttribute('scope', 'row');
      });
    });

    it("should have tabIndex on container", () => {
      const container = component.container.querySelector('.uds-table');
      expect(container).toHaveAttribute('tabIndex', '0');
    });
  });
});
