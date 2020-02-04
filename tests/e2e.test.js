




describe('Main', () => {
  beforeAll(async () => {
    await page.goto('http://localhost:3000');
  });

  it('displays heading', async () => {
    await expect(page).toMatch('Unity Kitchen Sink Page');
  })
})
