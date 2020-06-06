describe('List', () => {
  it('Unordered list visually looks correct', async () => {
    // APIs from jest-puppeteer
    await page.goto(
      'http://localhost:9009/iframe.html?id=components-list--unordered-list'
    );
    const image = await page.screenshot();

    // API from jest-image-snapshot
    expect(image).toMatchImageSnapshot();
  });

  it('Unordered list, darkmode visually looks correct', async () => {
    // APIs from jest-puppeteer
    await page.goto(
      'http://localhost:9009/iframe.html?id=components-list--unordered-list-darkmode'
    );
    const image = await page.screenshot();

    // API from jest-image-snapshot
    expect(image).toMatchImageSnapshot();
  });

  it('Ordered list visually looks correct', async () => {
    // APIs from jest-puppeteer
    await page.goto(
      'http://localhost:9009/iframe.html?id=components-list--ordered-list'
    );
    const image = await page.screenshot();

    // API from jest-image-snapshot
    expect(image).toMatchImageSnapshot();
  });

  it('Ordered list, smokemode visually looks correct', async () => {
    // APIs from jest-puppeteer
    await page.goto(
      'http://localhost:9009/iframe.html?id=components-list--ordered-list-smokemode'
    );
    const image = await page.screenshot();

    // API from jest-image-snapshot
    expect(image).toMatchImageSnapshot();
  });

  it('Icon list visually looks correct', async () => {
    // APIs from jest-puppeteer
    await page.goto(
      'http://localhost:9009/iframe.html?id=components-list--icon-list'
    );
    const image = await page.screenshot();

    // API from jest-image-snapshot
    expect(image).toMatchImageSnapshot();
  });

  it('Unordered list, maroon visually looks correct', async () => {
    // APIs from jest-puppeteer
    await page.goto(
      'http://localhost:9009/iframe.html?id=components-list--unordered-list-maroon'
    );
    const image = await page.screenshot();

    // API from jest-image-snapshot
    expect(image).toMatchImageSnapshot();
  });

  it('Ordered list, maroon visually looks correct', async () => {
    // APIs from jest-puppeteer
    await page.goto(
      'http://localhost:9009/iframe.html?id=components-list--ordered-list-maroon'
    );
    const image = await page.screenshot();

    // API from jest-image-snapshot
    expect(image).toMatchImageSnapshot();
  });

  it('Icon list, maroon visually looks correct', async () => {
    // APIs from jest-puppeteer
    await page.goto(
      'http://localhost:9009/iframe.html?id=components-list--icon-list-maroon'
    );
    const image = await page.screenshot();

    // API from jest-image-snapshot
    expect(image).toMatchImageSnapshot();
  });

  it('Icon list, darkmode visually looks correct', async () => {
    // APIs from jest-puppeteer
    await page.goto(
      'http://localhost:9009/iframe.html?id=components-list--icon-list-darkmode'
    );
    const image = await page.screenshot();

    // API from jest-image-snapshot
    expect(image).toMatchImageSnapshot();
  });

  it('Icon list, gold darkmode visually looks correct', async () => {
    // APIs from jest-puppeteer
    await page.goto(
      'http://localhost:9009/iframe.html?id=components-list--icon-list-gold-darkmode'
    );
    const image = await page.screenshot();

    // API from jest-image-snapshot
    expect(image).toMatchImageSnapshot();
  });

  it('Multilevel unordered list visually looks correct', async () => {
    // APIs from jest-puppeteer
    await page.goto(
      'http://localhost:9009/iframe.html?id=components-list--multilevel-unordered-list'
    );
    const image = await page.screenshot();

    // API from jest-image-snapshot
    expect(image).toMatchImageSnapshot();
  });

  it('Multilevel ordered list visually looks correct', async () => {
    // APIs from jest-puppeteer
    await page.goto(
      'http://localhost:9009/iframe.html?id=components-list--multilevel-ordered-list'
    );
    const image = await page.screenshot();

    // API from jest-image-snapshot
    expect(image).toMatchImageSnapshot();
  });

  it('Step list visually looks correct', async () => {
    // APIs from jest-puppeteer
    await page.goto(
      'http://localhost:9009/iframe.html?id=components-list--step-list'
    );
    const image = await page.screenshot();

    // API from jest-image-snapshot
    expect(image).toMatchImageSnapshot();
  });

  it('Step list, gold visually looks correct', async () => {
    // APIs from jest-puppeteer
    await page.goto(
      'http://localhost:9009/iframe.html?id=components-list--step-list-gold'
    );
    const image = await page.screenshot();

    // API from jest-image-snapshot
    expect(image).toMatchImageSnapshot();
  });

  it('Step list, maroon visually looks correct', async () => {
    // APIs from jest-puppeteer
    await page.goto(
      'http://localhost:9009/iframe.html?id=components-list--step-list-maroon'
    );
    const image = await page.screenshot();

    // API from jest-image-snapshot
    expect(image).toMatchImageSnapshot();
  });

  it('Step list, smokemode visually looks correct', async () => {
    // APIs from jest-puppeteer
    await page.goto(
      'http://localhost:9009/iframe.html?id=components-list--step-list-smokemode'
    );
    const image = await page.screenshot();

    // API from jest-image-snapshot
    expect(image).toMatchImageSnapshot();
  });

  it('Step list, gold smokemode visually looks correct', async () => {
    // APIs from jest-puppeteer
    await page.goto(
      'http://localhost:9009/iframe.html?id=components-list--step-list-gold-smokemode'
    );
    const image = await page.screenshot();

    // API from jest-image-snapshot
    expect(image).toMatchImageSnapshot();
  });

  it('Step list, maroon smokemode visually looks correct', async () => {
    // APIs from jest-puppeteer
    await page.goto(
      'http://localhost:9009/iframe.html?id=components-list--step-list-maroon-smokemode'
    );
    const image = await page.screenshot();

    // API from jest-image-snapshot
    expect(image).toMatchImageSnapshot();
  });

  it('Step list, darkmode visually looks correct', async () => {
    // APIs from jest-puppeteer
    await page.goto(
      'http://localhost:9009/iframe.html?id=components-list--step-list-darkmode'
    );
    const image = await page.screenshot();

    // API from jest-image-snapshot
    expect(image).toMatchImageSnapshot();
  });

  it('Step list, gold darkmode visually looks correct', async () => {
    // APIs from jest-puppeteer
    await page.goto(
      'http://localhost:9009/iframe.html?id=components-list--step-list-gold-darkmode'
    );
    const image = await page.screenshot();

    // API from jest-image-snapshot
    expect(image).toMatchImageSnapshot();
  });
}); // close
