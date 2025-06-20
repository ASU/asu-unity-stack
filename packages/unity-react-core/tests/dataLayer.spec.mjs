import { test, expect } from '@playwright/test';

const STORYBOOK_BASE_URL = 'http://localhost:9200';
const STORY_ID_PARAMS = 'iframe.html?id=components-accordion--color-combinations&viewMode=story';

const testUrls = [
  {
    name: 'Bootstrap Version',
    url: `${STORYBOOK_BASE_URL}/${STORY_ID_PARAMS}`,
  },
  {
    name: 'React Framework',
    url: `${STORYBOOK_BASE_URL}/${STORY_ID_PARAMS}&globals=framework:react`,
  },
];

async function getLatestCollapseEvent(page) {
  return await page.evaluate(() => {
    if (!window.dataLayer) return null;

    const events = window.dataLayer.filter(e => e && e.event === 'collapse');
    return events.length ? events[events.length - 1] : null;
  });
}

for (const config of testUrls) {
  test.describe(`GTM dataLayer events for Accordion - ${config.name}`, () => {
    test('should push correct events when opening and closing accordion', async ({ page }) => {
      await page.goto(config.url);

      await page.waitForSelector('[data-testid="accordion-opener"]');

      const openers = await page.getByTestId('accordion-opener').all();
      expect(openers.length).toBeGreaterThan(0);

      const dataLayerInit = await page.evaluate(() => Array.isArray(window.dataLayer));
      expect(dataLayerInit).toBe(true);

      await openers[0].click();
      let event = await getLatestCollapseEvent(page);
      expect(event).not.toBeNull();
      expect(event.action).toBe('close');
      expect(event.text).toBe('accordion card 1');
    });
  });
}
