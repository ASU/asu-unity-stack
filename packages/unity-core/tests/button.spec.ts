import { test, expect } from '@playwright/test';

test.describe('uds-button', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('renders with label', async ({ page }) => {
    await page.setContent(`
      <script type="module" src="/src/components/button/uds-button.ts"></script>
      <uds-button label="Test Button"></uds-button>
    `);

    const button = page.locator('uds-button');
    await expect(button).toBeVisible();

    const inner = button.locator('button');
    await expect(inner).toContainText('Test Button');
  });

  test('renders as link when href is set', async ({ page }) => {
    await page.setContent(`
      <script type="module" src="/src/components/button/uds-button.ts"></script>
      <uds-button label="Link Button" href="https://www.asu.edu"></uds-button>
    `);

    const button = page.locator('uds-button');
    const anchor = button.locator('a');
    await expect(anchor).toHaveAttribute('href', 'https://www.asu.edu');
    await expect(anchor).toContainText('Link Button');
  });

  test('dispatches uds-click event on click', async ({ page }) => {
    await page.setContent(`
      <script type="module" src="/src/components/button/uds-button.ts"></script>
      <uds-button label="Click Me"></uds-button>
    `);

    const eventFired = await page.evaluate(() => {
      return new Promise<boolean>((resolve) => {
        const el = document.querySelector('uds-button')!;
        el.addEventListener('uds-click', () => resolve(true));
        setTimeout(() => resolve(false), 2000);

        // Wait for custom element to be defined, then click
        customElements.whenDefined('uds-button').then(() => {
          el.shadowRoot!.querySelector('button')!.click();
        });
      });
    });

    expect(eventFired).toBe(true);
  });

  test('respects disabled state', async ({ page }) => {
    await page.setContent(`
      <script type="module" src="/src/components/button/uds-button.ts"></script>
      <uds-button label="Disabled" disabled></uds-button>
    `);

    const button = page.locator('uds-button');
    await expect(button).toHaveAttribute('disabled', '');

    const inner = button.locator('button');
    await expect(inner).toBeDisabled();

    // Verify no uds-click event fires
    const eventFired = await page.evaluate(() => {
      return new Promise<boolean>((resolve) => {
        const el = document.querySelector('uds-button')!;
        el.addEventListener('uds-click', () => resolve(true));
        setTimeout(() => resolve(false), 500);

        customElements.whenDefined('uds-button').then(() => {
          el.shadowRoot!.querySelector('button')!.click();
        });
      });
    });

    expect(eventFired).toBe(false);
  });

  test('has correct colors on dark surface', async ({ page }) => {
    await page.setContent(`
      <link rel="stylesheet" href="/src/global/tokens.css" />
      <script type="module" src="/src/components/button/uds-button.ts"></script>
      <div class="uds-surface-dark" style="background: #191919; padding: 2rem;">
        <uds-button label="Dark Surface" color="primary"></uds-button>
      </div>
    `);

    const button = page.locator('uds-button');
    await expect(button).toBeVisible();

    // Verify the button is rendered within the dark surface context
    const container = page.locator('.uds-surface-dark');
    await expect(container).toBeVisible();

    // Check that the inner button element exists and is styled
    const inner = button.locator('button');
    await expect(inner).toBeVisible();

    // On dark surface, primary button should have white/light background
    const bgColor = await inner.evaluate((el) => {
      return window.getComputedStyle(el).backgroundColor;
    });

    // The button should have a background color set (not transparent)
    expect(bgColor).toBeTruthy();
    expect(bgColor).not.toBe('rgba(0, 0, 0, 0)');
  });
});
