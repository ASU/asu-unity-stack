const { toMatchImageSnapshot } = require("jest-image-snapshot");

expect.extend({ toMatchImageSnapshot });

describe("Main", () => {
  beforeAll(async () => {
    await page.goto("http://localhost:3000", {
      waitUntil: "networkidle0"
    });
  });

  it("Whole page snapshot", async () => {
    await expect(page).toMatch("Unity Kitchen Sink Page");

    await page.setViewport({ width: 1920, height: 1080 });

    const image = await page.screenshot({
      fullPage: true
    });

    expect(image).toMatchImageSnapshot({
      failureThreshold: 0.00001,
      failureThresholdType: "percent"
    });
  });

  it("Bootstrap 4", async () => {
    // Tests that the Bootstrap 4 navbar dropdown works
    const navBar = await page.$("#navbar-dropdown-test");
    await page.setViewport({ width: 1920, height: 1080 });

    await expect(navBar).not.toMatchElement(".dropdown-menu.show", {
      visible: true
    });
    await expect(navBar).toClick("#navbarDropdown");
    await expect(navBar).toMatchElement(".dropdown-menu.show", {
      visible: true
    });
  });

  it("ASU Brand", async () => {
    // Tests the brand header
    let header = await page.$("#headerContainer");

    // Check that nav is collapsed in mobile and expands on click
    await page.setViewport({ width: 600, height: 1080 });
    await expect(header).not.toMatchElement('header[class*="openedNav"]', {
      visible: true
    });
    await expect(header).toClick("span[class*=icoNavIcon]");
    await expect(header).toMatchElement('header[class*="openedNav"]', {
      timeout: 2500
    });

    // check the search form has proper attributes
    const search = await header.$("form");

    expect(await search.evaluate(node => node.action)).toBe(
      "https://search.asu.edu/search"
    );
    //expect(await search.evaluate(node => node.role)).toBe('search');
    expect(await search.evaluate(node => node.method)).toBe("get");
  });

  it("Axe Testing", async () => {
    await expect(page).toPassAxeTests({
      runOnly: {
        type: "tag",
        values: ["wcag2aa"]
      }
    });
  });
});
