const { toMatchImageSnapshot } = require('jest-image-snapshot');

expect.extend({ toMatchImageSnapshot });

describe("Main", () => {
  beforeAll(async () => {
    await page.goto("http://localhost:3000", {
      waitUntil: 'networkidle0'
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
      failureThresholdType: 'percent'
    });
  });

  it("Bootstrap 4", async () => {
    // Tests that the Bootstrap 4 navbar dropdown works
    const navBar = await page.$("#navbar-dropdown-test");
    await page.setViewport({ width: 1920, height: 1080 });

    await expect(navBar).not.toMatchElement(".dropdown-menu.show", {visible: true});
    await expect(navBar).toClick("#navbarDropdown");
    await expect(navBar).toMatchElement(".dropdown-menu.show", {visible: true});

  });

  it("ASU Brand", async () => {
    // Tests that the Bootstrap 4 navbar dropdown works
    const header = await page.$("#headerContainer");
    await page.setViewport({ width: 1920, height: 1080 });

  });
});
