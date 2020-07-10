describe('Collapse', () => {
  it('collapse example visually look correct', async () => {
    // APIs from jest-puppeteer
    await page.goto('http://localhost:9009/iframe.html?id=collapse--examples');
    const image = await page.screenshot();

    // API from jest-image-snapshot
    expect(image).toMatchImageSnapshot();
  });

  it('collapse multiple visually look correct', async () => {
    // APIs from jest-puppeteer
    await page.goto('http://localhost:9009/iframe.html?id=collapse--collapse-multiple');
    const image = await page.screenshot();

    // API from jest-image-snapshot
    expect(image).toMatchImageSnapshot();
  });

  it('collapse accordion visually look correct', async () => {
    // APIs from jest-puppeteer
    await page.goto('http://localhost:9009/iframe.html?id=collapse--collapse-accordion');
    const image = await page.screenshot();

    // API from jest-image-snapshot
    expect(image).toMatchImageSnapshot();
  });
});
