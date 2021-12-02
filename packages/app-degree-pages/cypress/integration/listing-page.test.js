/* eslint-disable jest/valid-expect-in-promise */
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

/** @param {string} majorName */
function expectFirstMajorToBe(majorName = "") {
  cy.get("table tbody > tr:first-child td.major").then(major =>
    expect(major.text()).toBe(majorName)
  );
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

  describe("#Major details", () => {
    function toggleDetail() {
      const showRowDetail = cy.get(
        "table tbody > tr:nth-child(1) [data-testid='show-row-detail']"
      );
      showRowDetail.click();
    }

    beforeAll(toggleDetail);

    afterAll(toggleDetail);

    it("shuold open the accordion details", () => {
      cy.get("table tbody > tr:first-child").then(row =>
        expect(row.attr("data-is-open")).toBe("true")
      );
    });

    it("shuold toggle more/less info", () => {
      cy.get("table tbody > tr:nth-child(2) [data-testid='more-text']")
        .click()
        .then(moreText => {
          expect(moreText.is(":visible")).toBe(false);
        });

      cy.get("table tbody > tr:nth-child(2) [data-testid='less-text']")
        .click()
        .then(lessText => {
          expect(lessText.is(":visible")).toBe(false);
        });
    });
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
    it("Should change page when I  click on pager bar", () => {
      const firstRowMajors = [
        "Accountancy",
        "Aerospace Engineering (Autonomous Vehicle Systems)",
        "Applied Biological Sciences (Preveterinary Medicine)",
        "Applied Physics",
      ];

      cy.get("[data-testid='pagination'] [data-id='page-number']").as("pages");

      cy.get("@pages")
        .its("length")
        // @ts-ignore
        .then(len => [...Array(len).keys()])
        .each(index => {
          const pageIndex = /** @type {number} */ (index);
          cy.get("@pages").eq(pageIndex).click();
          cy.get("table tbody > tr:first-child td.major").each(td => {
            const majorName = td.text();
            expect(majorName).toBe(firstRowMajors[pageIndex]);
          });
        });
    });

    it("Should change page when I FIRST, PREV, NEXT, LAST", () => {
      const firstPageMajor = "Accountancy";
      const secondPageMajor =
        "Aerospace Engineering (Autonomous Vehicle Systems)";
      const secondLastPageMajor = "Theory and Composition (Theory)";
      const lastPageMajor =
        "Transborder Chicana/o and Latina/o Studies" +
        " (US and Mexican Regional Immigration Policy and Economy)";

      const firstButton = cy.get(
        "[data-testid='pagination'] [data-id='first']"
      );
      firstButton.click();
      expectFirstMajorToBe(firstPageMajor);

      const nextButton = cy.get("[data-testid='pagination'] [data-id='next']");
      nextButton.click();
      expectFirstMajorToBe(secondPageMajor);

      const lastButton = cy.get("[data-testid='pagination'] [data-id='last']");
      lastButton.click();
      expectFirstMajorToBe(lastPageMajor);

      const prevButton = cy.get("[data-testid='pagination'] [data-id='prev']");
      prevButton.click();
      expectFirstMajorToBe(secondLastPageMajor);
    });
  });
});
