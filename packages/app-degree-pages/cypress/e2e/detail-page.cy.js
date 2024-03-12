/* eslint-disable jest/valid-expect-in-promise */
/* eslint-disable jest/no-mocks-import */
/* eslint-disable jest/expect-expect */
// @ts-check
/// <reference types="../support" />

// @ts-ignore
import degreeSearchData from "../../__mocks__/data/degree-detail.json";

describe("#Detail Page", () => {
  beforeAll(() => {
    cy.intercept("GET", "**/degreesearch/*", {
      body: degreeSearchData,
    }).as("getPrograms");

    cy.visit("/iframe.html?id=program-detail-page--with-content");
  });

  it("shuld be able to use anchor menu", () => {
    const sections = [
      "application-requirements",
      "next-steps",
      "affording-college",
      "career-outlook",
      "global-opportunity",
      "my-request-form-info-id",
    ];
    cy.getByTestId("anchor-menu")
      .get("button")
      .each((btn, index) => {
        btn.trigger("click");
        cy.get(`#${sections[index]}`).scrollIntoView().should("be.visible");
      });
  });
});
