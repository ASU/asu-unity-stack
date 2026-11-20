import { test, expect } from "@playwright/test";

// WWWCMS-241 QA: the Figma description box has a 4px gold bar across its top edge. This reads real pixels at 1:1 (the
// Storybook test runner scales its iframe): the rows just inside the top edge of the open box must be gold across its
// width, for a box that sits at its name (Tempe) and for the lowest name's raised box (London).

const STORY = "/iframe.html?id=homepage-places--default&viewMode=story";
const GOLD = [255, 198, 39];

for (const width of [1440, 1920, 2560]) {
  for (const [label, index] of [
    ["Tempe", 0],
    ["London", 6],
  ]) {
    test(`${label} box bar at ${width}px`, async ({ page }) => {
      await page.setViewportSize({ width, height: 900 });
      await page.goto(STORY);
      await page.waitForSelector(".hp-places.is-enhanced");
      // the theme scrolls smoothly: jump, and select only once the page is still (a scroll closes the box)
      await page.evaluate(() =>
        document
          .querySelector(".hp-places__media")
          .scrollIntoView({ block: "start", behavior: "instant" })
      );
      await page.waitForFunction(
        () =>
          document.querySelector(".hp-places__media").getBoundingClientRect()
            .top === 0
      );
      await page.evaluate(i => {
        document.querySelectorAll(".hp-places__name")[i].click();
      }, index);
      await page.waitForFunction(i => {
        const item = document.querySelectorAll(".hp-places__item")[i];
        const box = item.querySelector(".hp-places__box");
        return (
          item.classList.contains("is-shown") &&
          getComputedStyle(box).opacity === "1"
        );
      }, index);
      await page.mouse.move(1, 1);
      await page.evaluate(
        () =>
          new Promise(resolve =>
            requestAnimationFrame(() => requestAnimationFrame(resolve))
          )
      );
      const base64 = (await page.screenshot()).toString("base64");
      const result = await page.evaluate(
        async ({ data, i, gold }) => {
          const bitmap = await createImageBitmap(
            await (await fetch(`data:image/png;base64,${data}`)).blob()
          );
          const canvas = document.createElement("canvas");
          canvas.width = bitmap.width;
          canvas.height = bitmap.height;
          const context = canvas.getContext("2d");
          context.drawImage(bitmap, 0, 0);
          const { data: pixels } = context.getImageData(
            0,
            0,
            bitmap.width,
            bitmap.height
          );
          const at = (x, y) => {
            const k = (y * bitmap.width + x) * 4;
            return [pixels[k], pixels[k + 1], pixels[k + 2]];
          };
          const box = document
            .querySelectorAll(".hp-places__box")
            [i].getBoundingClientRect();
          const off = [];
          // rows +1 and +2 below the top edge (the edge row itself is blended when the top is fractional)
          [Math.ceil(box.top) + 1, Math.ceil(box.top) + 2].forEach(y => {
            for (let x = Math.ceil(box.left) + 8; x < box.right - 8; x += 16) {
              const rgb = at(x, y);
              if (rgb.some((v, c) => Math.abs(v - gold[c]) > 3)) {
                off.push(`x=${x} y=${y}: ${rgb.join(",")}`);
              }
            }
          });
          return {
            scale: bitmap.width / window.innerWidth,
            width: box.width,
            height: box.height,
            off,
          };
        },
        { data: base64, i: index, gold: GOLD }
      );
      expect(result.scale).toBe(1);
      expect(Math.abs(result.width - 347)).toBeLessThan(1);
      expect(result.off).toEqual([]);
    });
  }
}
