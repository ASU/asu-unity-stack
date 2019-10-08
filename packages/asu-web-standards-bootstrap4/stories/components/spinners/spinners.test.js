describe('Spinners', () => {
  it('border visually looks correct', async () => {
    // APIs from jest-puppeteer
    await page.goto('http://localhost:9009/iframe.html?id=components-spinners--border');
    const image = await page.screenshot();

    // API from jest-image-snapshot
    expect(image).toMatchImageSnapshot();
  });

  it('colors visually looks correct', async () => {
    // APIs from jest-puppeteer
    await page.goto('http://localhost:9009/iframe.html?id=components-spinners--colors');
    const image = await page.screenshot();

    // API from jest-image-snapshot
    expect(image).toMatchImageSnapshot();
  });

  it('growing visually looks correct', async () => {
    // APIs from jest-puppeteer
    await page.goto('http://localhost:9009/iframe.html?id=components-spinners--growing');
    const image = await page.screenshot();

    // API from jest-image-snapshot
    expect(image).toMatchImageSnapshot();
  });

  it('growing colors visually looks correct', async () => {
    // APIs from jest-puppeteer
    await page.goto('http://localhost:9009/iframe.html?id=components-spinners--growing-colors');
    const image = await page.screenshot();

    // API from jest-image-snapshot
    expect(image).toMatchImageSnapshot();
  });

  it('margins visually looks correct', async () => {
    // APIs from jest-puppeteer
    await page.goto('http://localhost:9009/iframe.html?id=components-spinners--margins');
    const image = await page.screenshot();

    // API from jest-image-snapshot
    expect(image).toMatchImageSnapshot();
  });

  it('flex visually looks correct', async () => {
    // APIs from jest-puppeteer
    await page.goto('http://localhost:9009/iframe.html?id=components-spinners--flex');
    const image = await page.screenshot();

    // API from jest-image-snapshot
    expect(image).toMatchImageSnapshot();
  });

  it('floats visually looks correct', async () => {
    // APIs from jest-puppeteer
    await page.goto('http://localhost:9009/iframe.html?id=components-spinners--floats');
    const image = await page.screenshot();

    // API from jest-image-snapshot
    expect(image).toMatchImageSnapshot();
  });

  it('text align visually looks correct', async () => {
    // APIs from jest-puppeteer
    await page.goto('http://localhost:9009/iframe.html?id=components-spinners--text-align');
    const image = await page.screenshot();

    // API from jest-image-snapshot
    expect(image).toMatchImageSnapshot();
  });

  it('sizing visually looks correct', async () => {
    // APIs from jest-puppeteer
    await page.goto('http://localhost:9009/iframe.html?id=components-spinners--sizing');
    const image = await page.screenshot();

    // API from jest-image-snapshot
    expect(image).toMatchImageSnapshot();
  });

  it('buttons visually looks correct', async () => {
    // APIs from jest-puppeteer
    await page.goto('http://localhost:9009/iframe.html?id=components-spinners--buttons');
    const image = await page.screenshot();

    // API from jest-image-snapshot
    expect(image).toMatchImageSnapshot();
  });

  it('nAMEOFCOMPONENT visually looks correct', async () => {
    // APIs from jest-puppeteer
    await page.goto('http://localhost:9009/iframe.html?id=components-spinners--nAMEOFCOMPONENT');
    const image = await page.screenshot();

    // API from jest-image-snapshot
    expect(image).toMatchImageSnapshot();
  });

  it('nAMEOFCOMPONENT visually looks correct', async () => {
    // APIs from jest-puppeteer
    await page.goto('http://localhost:9009/iframe.html?id=components-spinners--nAMEOFCOMPONENT');
    const image = await page.screenshot();

    // API from jest-image-snapshot
    expect(image).toMatchImageSnapshot();
  });

}); //close
