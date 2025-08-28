import { test, expect } from '@playwright/test';

const STORYBOOK_URL = 'http://localhost:9080';
const STORY_ID = 'uds-asu-header--default';

async function getLatestLinkEvent(page) {
  return await page.evaluate(() => {
    if (!window.dataLayer) return null;
    const events = window.dataLayer.filter(e => e && e.region === 'navbar');
    return events.length ? events[events.length - 1] : null;
  });
}

test.describe('GTM dataLayer events for ASUHeader', () => {
  test('should push correct events when clicking navbar item', async ({ page }) => {
    await page.goto(`${STORYBOOK_URL}/iframe.html?id=${STORY_ID}&viewMode=story`);

    await page.waitForSelector('[data-testid="navigation"]');

    const navLinks = await page.$$('.nav-list a');
    expect(navLinks.length).toBeGreaterThan(0);

    const dataLayerInit = await page.evaluate(() => Array.isArray(window.dataLayer));
    expect(dataLayerInit).toBe(true);
    const navText = await navLinks[1].textContent();

    await navLinks[1].click();
    let event = await getLatestLinkEvent(page);
    expect(event).not.toBeNull();
    expect(event.event).toBe('collapse');
    expect(event.action).toBe('open');
    expect(event.region).toBe('navbar');
    expect(event.section).toBe('main navbar');
    expect(event.text?.toLowerCase()).toEqual(navText?.toLowerCase());
  });

  test('should push correct events when clicking dropdown link', async ({ page }) => {
    await page.goto(`${STORYBOOK_URL}/iframe.html?id=${STORY_ID}&viewMode=story`);
    await page.waitForSelector('[data-testid="navigation"]');

    await page.evaluate(() => {
      document.querySelectorAll('a').forEach(a => {
        a.addEventListener('click', e => e.preventDefault());
      });
    });

    const navLinks = await page.$$('.nav-list a');
    expect(navLinks.length).toBeGreaterThan(1);
    await navLinks[1].click();

    const dropdownLinks = await page.$$('.header-dropdown-1 a');

    expect(dropdownLinks.length).toBeGreaterThan(0);
    const dropdownText = await dropdownLinks[0].textContent();

    await dropdownLinks[0].click();
    let event = await getLatestLinkEvent(page);
    expect(event).not.toBeNull();
    expect(event.event).toBe('link');
    expect(event.action).toBe('click');
    expect(event.region).toBe('navbar');
    expect(event.section).toBe('main navbar');
    expect(event.text?.toLowerCase()).toEqual(dropdownText?.toLowerCase());
  });
});
