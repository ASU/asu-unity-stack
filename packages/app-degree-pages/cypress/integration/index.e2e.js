// @ts-check

describe("Listing Page", () => {
  it("shuld be successfully loaded", () => {
    cy.visit("/iframe.html?id=program-listing-page--default");
    // cy.visit("?id=program-listing-page--default");
    const loader = cy.get("[data-testid='loader']");
    // expect(loader).equal(null);
  });
});
