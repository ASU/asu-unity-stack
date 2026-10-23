import { test, expect } from '@playwright/test';

const SRC = '/src/components/ga-event-wrapper/uds-ga-event-wrapper.ts';

test.describe('uds-ga-event-wrapper', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('renders its slotted child', async ({ page }) => {
    await page.setContent(`
      <script type="module" src="${SRC}"></script>
      <uds-ga-event-wrapper id="w">
        <a href="/apply">Apply now</a>
      </uds-ga-event-wrapper>
    `);

    const link = page.locator('uds-ga-event-wrapper a');
    await expect(link).toBeVisible();
    await expect(link).toContainText('Apply now');
  });

  test('applies data-ga* attributes to the slotted child', async ({ page }) => {
    await page.setContent(`
      <script type="module" src="${SRC}"></script>
      <uds-ga-event-wrapper id="w">
        <a href="/apply">Apply now</a>
      </uds-ga-event-wrapper>
    `);

    await page.evaluate(() => {
      const w = document.querySelector('uds-ga-event-wrapper') as any;
      return customElements.whenDefined('uds-ga-event-wrapper').then(() => {
        w.gaData = {
          text: 'Apply now',
          event: 'link',
          action: 'apply cta',
          name: 'onclick',
          component: 'hero',
        };
      });
    });

    const link = page.locator('uds-ga-event-wrapper a');
    await expect(link).toHaveAttribute('data-ga', 'Apply now');
    await expect(link).toHaveAttribute('data-ga-event', 'link');
    await expect(link).toHaveAttribute('data-ga-action', 'apply cta');
    await expect(link).toHaveAttribute('data-ga-component', 'hero');
  });

  test('namespaces attributes when a prefix is set', async ({ page }) => {
    await page.setContent(`
      <script type="module" src="${SRC}"></script>
      <uds-ga-event-wrapper id="w" prefix="header">
        <button type="button">Menu</button>
      </uds-ga-event-wrapper>
    `);

    await page.evaluate(() => {
      const w = document.querySelector('uds-ga-event-wrapper') as any;
      return customElements.whenDefined('uds-ga-event-wrapper').then(() => {
        w.gaData = { text: 'Menu', event: 'nav', action: 'open menu' };
      });
    });

    const btn = page.locator('uds-ga-event-wrapper button');
    await expect(btn).toHaveAttribute('data-ga-header', 'Menu');
    await expect(btn).toHaveAttribute('data-ga-header-event', 'nav');
    await expect(btn).toHaveAttribute('data-ga-header-action', 'open menu');
  });

  test('pushes to dataLayer on click when event and action are present', async ({ page }) => {
    await page.setContent(`
      <script type="module" src="${SRC}"></script>
      <uds-ga-event-wrapper id="w">
        <button type="button">Track me</button>
      </uds-ga-event-wrapper>
    `);

    const pushed = await page.evaluate(() => {
      (window as any).dataLayer = [];
      const w = document.querySelector('uds-ga-event-wrapper') as any;
      return customElements.whenDefined('uds-ga-event-wrapper').then(() => {
        w.gaData = { text: 'Track me', event: 'link', action: 'clicked' };
        return w.updateComplete.then(() => {
          w.querySelector('button').click();
          return (window as any).dataLayer;
        });
      });
    });

    expect(pushed.length).toBe(1);
    expect(pushed[0].event).toBe('link');
    expect(pushed[0].action).toBe('clicked');
    expect(pushed[0].text).toBe('track me');
  });

  test('does not push to dataLayer when event/action are missing', async ({ page }) => {
    await page.setContent(`
      <script type="module" src="${SRC}"></script>
      <uds-ga-event-wrapper id="w">
        <button type="button">No GA</button>
      </uds-ga-event-wrapper>
    `);

    const pushed = await page.evaluate(() => {
      (window as any).dataLayer = [];
      const w = document.querySelector('uds-ga-event-wrapper') as any;
      return customElements.whenDefined('uds-ga-event-wrapper').then(() => {
        w.gaData = { text: 'No GA' }; // no event/action
        return w.updateComplete.then(() => {
          w.querySelector('button').click();
          return (window as any).dataLayer;
        });
      });
    });

    expect(pushed.length).toBe(0);
  });
});
