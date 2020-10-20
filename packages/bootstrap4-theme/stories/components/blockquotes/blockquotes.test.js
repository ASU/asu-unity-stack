describe('Blockquote', () => {
  it('Blockquote default visually looks correct', async () => {
    // APIs from jest-puppeteer
    await page.goto(
      'http://localhost:9009/iframe.html?id=components-blockquotes--blockquote-default'
    );
    const image = await page.screenshot();

    // API from jest-image-snapshot
    expect(image).toMatchImageSnapshot();
  });

  it('Blockquote (Alt Gray) visually looks correct', async () => {
    // APIs from jest-puppeteer
    await page.goto(
      'http://localhost:9009/iframe.html?id=components-blockquotes--blockquote-alt-gray'
    );
    const image = await page.screenshot();

    // API from jest-image-snapshot
    expect(image).toMatchImageSnapshot();
  });

  it('Blockquote (Alt Gray) visually looks correct', async () => {
    // APIs from jest-puppeteer
    await page.goto(
      'http://localhost:9009/iframe.html?id=components-blockquotes--blockquote-alt-black'
    );
    const image = await page.screenshot();

    // API from jest-image-snapshot
    expect(image).toMatchImageSnapshot();
  });
}); // close
