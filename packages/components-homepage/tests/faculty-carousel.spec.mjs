import { test, expect } from "@playwright/test";

// WWWCMS-240: the fan's real geometry at 1:1 (the Storybook test runner scales its iframe), the overlapped hit areas,
// the reduced-motion state and, where the browser can decode H.264, the real IntersectionObserver autoplay.
// Figma tables: design doc section 13. Desktop (>= 1024) scales with the stage column; stacked with the viewport.

// The render-only story fakes playback (the controls always show); the live one plays the real clips.
const STATIC = "/iframe.html?id=homepage-faculty-carousel--fan&viewMode=story";
const LIVE = "/iframe.html?id=homepage-faculty-carousel--live-preview&viewMode=story";

const DESKTOP = { w: 360.52, h: 415.25, stageW: 536.57, stageH: 415.25 };
const STACKED = { w: 430.11, h: 495.41, stageW: 670.73, stageH: 495.41 };

const unit = (width, column) =>
  width >= 1024
    ? Math.min(1, column / 536.57)
    : Math.max(0.6594, 0.6594 + (width - 393) * 0.000908);

const open = async (page, width, story = STATIC, height = 900) => {
  await page.setViewportSize({ width, height });
  await page.goto(story);
  await page.waitForSelector(".hp-faculty.is-animated");
};

for (const width of [393, 768, 1023, 1024, 1100, 1280, 1440, 1920]) {
  test(`fan geometry at ${width}px`, async ({ page }) => {
    await open(page, width);
    const result = await page.evaluate(() => {
      const box = el => el.getBoundingClientRect();
      const stage = document.querySelector(".hp-faculty__stage");
      const front = document.querySelector('.hp-faculty__card[data-pos="0"]');
      const column = document.querySelector(".hp-faculty__stage-col");
      const control = front.querySelector(".mbtn");
      return {
        column: box(column).width,
        stage: [box(stage).width, box(stage).height],
        front: [box(front).width, box(front).height],
        control: [box(control).width, box(control).right - box(front).right, box(control).bottom - box(front).bottom],
        centre: box(stage).left + box(stage).width / 2,
        scrollWidth: document.documentElement.scrollWidth,
        innerWidth: window.innerWidth,
      };
    });
    const table = width >= 1024 ? DESKTOP : STACKED;
    const u = unit(width, result.column);
    expect(Math.abs(result.front[0] - table.w * u)).toBeLessThanOrEqual(1);
    expect(Math.abs(result.front[1] - table.h * u)).toBeLessThanOrEqual(1);
    expect(Math.abs(result.stage[0] - table.stageW * u)).toBeLessThanOrEqual(1);
    expect(Math.abs(result.stage[1] - table.stageH * u)).toBeLessThanOrEqual(1);
    // pause control: 32px (48px between 768 and 1023), 24px from the card's corner (16px on phones)
    const size = width >= 768 && width < 1024 ? 48 : 32;
    const inset = width < 768 ? 16 : 24;
    expect(Math.abs(result.control[0] - size)).toBeLessThanOrEqual(0.6);
    expect(Math.abs(-result.control[1] - inset)).toBeLessThanOrEqual(1);
    expect(Math.abs(-result.control[2] - inset)).toBeLessThanOrEqual(1);
    // no horizontal scroll (the phone fan is wider than the screen)
    expect(result.scrollWidth).toBeLessThanOrEqual(result.innerWidth);
    if (width < 1024) {
      expect(Math.abs(result.centre - result.innerWidth / 2)).toBeLessThanOrEqual(8);
    }
  });
}

test("the overlapped back cards answer a real pointer", async ({ page }) => {
  await open(page, 1440);
  const hits = await page.evaluate(() => {
    const stage = document.querySelector(".hp-faculty__stage");
    const rect = stage.getBoundingClientRect();
    const u = 1;
    const at = (x, y) =>
      document.elementFromPoint(rect.left + x * u, rect.top + y * u);
    const pick = pos =>
      document.querySelector(`.hp-faculty__card[data-pos="${pos}"] .hp-faculty__pick`);
    return {
      right: at(500, 215) === pick(1),
      left: at(20, 215) === pick(2),
      front: at(266, 207) === pick(0),
    };
  });
  expect(hits).toEqual({ right: true, left: true, front: true });
  // a real click on the right sliver brings that person forward
  const target = await page.evaluate(() => {
    const rect = document.querySelector(".hp-faculty__stage").getBoundingClientRect();
    return { x: rect.left + 500, y: rect.top + 215 };
  });
  await page.mouse.click(target.x, target.y);
  await expect(page.locator('.hp-faculty__card[data-pos="0"]')).toHaveAttribute("data-index", "1");
  await expect(page.locator(".hp-faculty__status")).toHaveText(/Hao Yan, .* 2 of 6/);
});

test("reduced motion: no transitions and no autoplay", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await open(page, 1280, LIVE);
  const canPlay = await page.evaluate(() =>
    document.createElement("video").canPlayType('video/mp4; codecs="avc1.42E01E"')
  );
  const state = await page.evaluate(async () => {
    const card = document.querySelector(".hp-faculty__card");
    document.querySelector(".hp-faculty__stage").scrollIntoView({ block: "center" });
    await new Promise(resolve => setTimeout(resolve, 1500));
    return {
      duration: getComputedStyle(card).transitionDuration,
      playing: Array.from(document.querySelectorAll(".hp-faculty video")).filter(v => !v.paused).length,
    };
  });
  expect(state.duration).toBe("0s");
  // "no autoplay" only proves something where the clips can play at all (the same page plays without the preference)
  if (canPlay) expect(state.playing).toBe(0);
});

for (const width of [393, 768, 1024, 1280]) {
  test(`the front video autoplays once the fan is fully in view at ${width}px`, async ({ page }) => {
    await open(page, width, LIVE);
    const canPlay = await page.evaluate(() =>
      document.createElement("video").canPlayType('video/mp4; codecs="avc1.42E01E"')
    );
    test.skip(!canPlay, "this browser build cannot decode H.264");
    await page.evaluate(() =>
      document.querySelector(".hp-faculty__stage").scrollIntoView({ block: "center" })
    );
    await page.waitForFunction(() => {
      const video = document.querySelector('.hp-faculty__card[data-pos="0"] video');
      return !video.paused && video.currentTime > 0;
    });
    await expect(page.locator('.hp-faculty__card[data-pos="0"] video')).toHaveClass(/is-ready/);
    // pressing next starts the next person's video (the fan stays in view at desktop widths)
    if (width >= 1024) {
      await page.locator(".hp-faculty__arrow--next").click();
      await page.waitForFunction(() => {
        const video = document.querySelector('.hp-faculty__card[data-pos="0"] video');
        return !video.paused && video.currentTime > 0;
      });
    }
  });
}
