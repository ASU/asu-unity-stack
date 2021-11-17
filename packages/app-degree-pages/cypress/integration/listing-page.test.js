/* eslint-disable jest/no-mocks-import */
/* eslint-disable jest/expect-expect */
// @ts-check
/// <reference types="../support" />

// @ts-ignore
import degreeSearchData from "../../__mocks__/data/degree-search.json";

/** @param {number} pages */
function expectPagerIs(pages) {
  const pagination = cy.get("[data-testid='pagination'] ul li");
  const navButtons = 4;
  pagination.should("have.length", pages + navButtons);
}

/** @param {number} rowCount */
function expectTableRowCountIs(rowCount) {
  const table = cy.get("[data-testid='program-list'] table tbody tr");
  table.should("have.length", rowCount);
}

describe("#Listing Page", () => {
  beforeAll(() => {
    cy.intercept("GET", "**/degreesearch/*", {
      body: degreeSearchData,
    }).as("getPrograms");

    cy.visit("/iframe.html?id=program-listing-page--default");
  });

  it("shuld be successfully loaded", () => {
    const searchBar = cy.getByTestId("search-bar");
    expect(searchBar).not.toBe(null);

    const filters = cy.getByTestId("filters");
    expect(filters).not.toBe(null);

    const filtersSummary = cy.getByTestId("filters-summary");
    expect(filtersSummary).not.toBe(null);

    const programList = cy.getByTestId("program-list");
    expect(programList).not.toBe(null);
  });

  describe("#Search by keyword", () => {
    it("shuold filter data by typing a word into the input field `Search`", () => {
      const searchField = cy.getByTestId("search-field");
      searchField.type("anthropology");

      const searchButton = cy.getByTestId("search-button");
      searchButton.click();

      expectTableRowCountIs(16);
      expectPagerIs(2);
    });

    it("shuold clear the input field `Search` and reset the table", () => {
      const searchField = cy.getByTestId("search-field");
      searchField.clear();

      const searchButton = cy.getByTestId("search-button");
      searchButton.click();

      expectTableRowCountIs(16);
      expectPagerIs(5);
    });
  });

  describe("#Search by Filters", () => {
    it("shuld filter data by selecting dropdown filters", () => {
      const locations = cy.getByTestId("locations");
      locations.select(["Tempe campus", "West campus"]);

      const asuLocals = cy.getByTestId("asuLocals");
      asuLocals.select("ASU@Los Angeles");

      const acceleratedConcurrent = cy.getByTestId("acceleratedConcurrent");
      acceleratedConcurrent.select("Concurrent");

      const applyButton = cy.getByTestId("btn-apply-filter");
      applyButton.click();

      const summaryFilters = cy
        .getByTestId("summary-filter-tags")
        .get("*[data-filter-id]");
      summaryFilters.should("have.length", 4);

      expectTableRowCountIs(16);
      expectPagerIs(2);
    });

    it("shuld clear the filters", () => {
      const clearButton = cy.getByTestId("btn-clear-filters");
      clearButton.click();

      const locations = cy.getByTestId("locations");
      locations.invoke("val").should("have.length", 0);

      const asuLocals = cy.getByTestId("asuLocals");
      asuLocals.invoke("val").should("have.length", 0);

      const acceleratedConcurrent = cy.getByTestId("acceleratedConcurrent");
      acceleratedConcurrent.should("have.value", "all");

      const searchField = cy.getByTestId("search-field");
      searchField.should("have.value", "");

      expectTableRowCountIs(16);
      expectPagerIs(5);
    });
  });

  describe("#Navigate program list", () => {
    // todo
  });
});
