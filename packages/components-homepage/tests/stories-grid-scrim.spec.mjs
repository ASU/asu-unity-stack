import { test, expect } from "@playwright/test";

// WWWCMS-236 QA: the stories grid scrim must darken every card edge to edge. At widths where a card boundary falls on a
// half pixel (965, 969, 973, 1817: width / 4 ends in .25) the composited scrim layer used to snap short of the card's
// anti-aliased clip, leaving a one pixel column of un-darkened photo. The Storybook test runner scales its iframe, so
// this has to be measured in a real 1:1 browser: the card photos are hidden and the cards painted white, so the scrim
// is the only thing that darkens them, and every card boundary column must match the pixels next to it.

const STORY = "/iframe.html?id=homepage-stories-grid--default&viewMode=story";
const PROBE =
  ".hp-stories__card img{visibility:hidden!important}.hp-stories__card{background:#fff!important}.hp-stories__lead{background:#00f!important}";
// The cards that have another card on their left: row 1 cards 1 and 2, row 2 cards 4, 5 and 6 (card 0 meets the tile).
const SEAM_CARDS = [1, 2, 4, 5, 6];
// The four widths from the QA sheet, and one whose boundaries fall on whole pixels as a control.
const WIDTHS = [965, 969, 973, 1817, 968];

test.describe("Stories grid scrim covers the cards edge to edge", () => {
  for (const width of WIDTHS) {
    test(`${width}px`, async ({ page }) => {
      await page.setViewportSize({ width, height: 900 });
      await page.goto(STORY);
      await page.waitForSelector(".hp-stories__grid");
      await page.waitForFunction(
        () =>
          document
            .querySelector(".hp-stories__grid")
            .style.getPropertyValue("--hp-stories-progress") === "1.0000"
      );
      await page.mouse.move(1, 1); // over the heading tile, never over a card
      await page.addStyleTag({ content: PROBE });
      await page.evaluate(
        () =>
          new Promise(resolve =>
            requestAnimationFrame(() => requestAnimationFrame(resolve))
          )
      );
      const base64 = (await page.screenshot()).toString("base64");
      const result = await page.evaluate(
        async ({ base64: data, seamCards }) => {
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
          const red = (x, y) => pixels[(y * bitmap.width + x) * 4];
          const scale = bitmap.width / window.innerWidth;
          const cards = Array.from(
            document.querySelectorAll(".hp-stories__card")
          );
          const lead = document
            .querySelector(".hp-stories__lead")
            .getBoundingClientRect();
          const marker = red(
            Math.round((lead.left + 3) * scale),
            Math.round((lead.top + 3) * scale)
          );
          const off = [];
          seamCards.forEach(index => {
            const b = cards[index].getBoundingClientRect();
            const x0 = Math.floor(b.left * scale);
            // the lower part of the card, where the resting gradient is, clear of the text and the arrow
            [0.65, 0.75, 0.85].forEach(fraction => {
              const y = Math.round((b.top + b.height * fraction) * scale);
              const reference = red(x0 + 8, y);
              [x0 - 1, x0, x0 + 1].forEach(x => {
                const value = red(x, y);
                if (Math.abs(value - reference) > 3) {
                  off.push(`card ${index} x=${x} y=${y}: ${value} vs ${reference}`);
                }
              });
            });
          });
          return { scale, marker, off };
        },
        { base64, seamCards: SEAM_CARDS }
      );
      // the screenshot is the page at 1:1, and the heading tile (painted blue, red channel 0) is where its box says
      expect(result.scale).toBe(1);
      expect(result.marker).toBe(0);
      expect(result.off).toEqual([]);
    });
  }
});
