describe('Buttons', () => {
  it('example visually looks correct', async () => {
    // APIs from jest-puppeteer
    await page.goto('http://localhost:9009/iframe.html?id=components-button-groups--basic-example');
    const image = await page.screenshot();

    // API from jest-image-snapshot
    expect(image).toMatchImageSnapshot();
  });

  it('button toolbar visually looks correct', async () => {
    // APIs from jest-puppeteer
    await page.goto('http://localhost:9009/iframe.html?id=components-button-groups--button-toolbar');
    const image = await page.screenshot();

    // API from jest-image-snapshot
    expect(image).toMatchImageSnapshot();
  });

  it('button group sizing visually looks correct', async () => {
    // APIs from jest-puppeteer
    await page.goto('http://localhost:9009/iframe.html?id=components-button-groups--sizing');
    const image = await page.screenshot();

    // API from jest-image-snapshot
    expect(image).toMatchImageSnapshot();
  });

  it('button group nesting visually looks correct', async () => {
    // APIs from jest-puppeteer
    await page.goto('http://localhost:9009/iframe.html?id=components-button-groups--nesting');
    const image = await page.screenshot();

    // API from jest-image-snapshot
    expect(image).toMatchImageSnapshot();
  });

  it('button group vertical variation visually looks correct', async () => {
    // APIs from jest-puppeteer
    await page.goto('http://localhost:9009/iframe.html?id=components-button-groups--vertical-variation');
    const image = await page.screenshot();

    // API from jest-image-snapshot
    expect(image).toMatchImageSnapshot();
  });
});
