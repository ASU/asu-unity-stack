import { test, expect } from "@playwright/test";

// WWWCMS-237: white text over every desktop photo must meet WCAG AA. Measured in a real 1:1 browser (the Storybook
// test runner scales its iframe). The section's text, bars, CTA underline and the scribble are made transparent; the
// photo, the caption chip fill and any scrim stay, and the screenshot is read back under each text line box.
const STORY = "/iframe.html?id=homepage-make-it-yours--default&viewMode=story";
const WIDTHS = [1280, 1920, 2500, 3934];
const TABS = [0, 1, 2, 3, 4];
const PROBE = `
.hp-myours__head *, .hp-myours__tabs *, .hp-myours__caption *, .hp-myours__caption {
  color: transparent !important; -webkit-text-fill-color: transparent !important;
  text-decoration-color: transparent !important; border-bottom-color: transparent !important;
}
.hp-myours__item::before { display: none !important; }
.hp-myours .scrib { visibility: hidden !important; }
.hp-myours__caption { border-color: transparent !important; }
`;

test.describe("Make it yours: white text contrast over the desktop photos", () => {
  for (const width of WIDTHS) {
    for (const tab of TABS) {
      test(`${width}px, tab ${tab + 1}`, async ({ page }) => {
        await page.setViewportSize({ width, height: 900 });
        await page.emulateMedia({ reducedMotion: "reduce" });
        await page.goto(STORY);
        await page.waitForSelector(".hp-myours.is-enhanced:not(.is-booting)");
        // Tab 1 is open at boot and its trigger is aria-disabled (Playwright treats that as not enabled), so only
        // click the tabs that are closed.
        if (tab > 0) await page.locator(".hp-myours__trigger").nth(tab).click();
        await page.waitForSelector(`.hp-myours__item.is-open:nth-child(${tab + 1})`);
        await page.mouse.move(1, 1);
        await page.evaluate(async () => {
          const img = document.querySelector(".hp-myours__photo.is-active .hp-myours__img");
          img.loading = "eager";
          await img.decode();
        });

        // 1. Record every visible text line box with the colour and size it will have, before the probe hides it.
        const boxes = await page.evaluate(() => {
          const stage = document.querySelector(".hp-myours__stage").getBoundingClientRect();
          const out = [];
          const walker = document.createTreeWalker(
            document.querySelector(".hp-myours__stage"), NodeFilter.SHOW_TEXT);
          for (let node = walker.nextNode(); node; node = walker.nextNode()) {
            if (!node.textContent.trim()) continue;
            const el = node.parentElement;
            const item = el.closest(".hp-myours__item");
            if (item && !item.classList.contains("is-open") && el.closest(".hp-myours__panel")) continue;
            const style = getComputedStyle(el);
            if (style.display === "none" || style.visibility === "hidden") continue;
            const range = document.createRange();
            range.selectNodeContents(node);
            for (const r of range.getClientRects()) {
              if (r.width < 2 || r.height < 2) continue;
              out.push({
                label: `${el.className || el.tagName}: ${node.textContent.trim().slice(0, 28)}`,
                color: style.color, size: parseFloat(style.fontSize), weight: parseInt(style.fontWeight, 10),
                x: Math.round(r.left - stage.left), y: Math.round(r.top - stage.top),
                w: Math.round(r.width), h: Math.round(r.height),
              });
            }
          }
          return out;
        });
        expect(boxes.length).toBeGreaterThan(8);

        await page.addStyleTag({ content: PROBE });
        const png = await page.locator(".hp-myours__stage").screenshot();
        const failures = await page.evaluate(async ({ data, boxes: list }) => {
          const bitmap = await createImageBitmap(await (await fetch(`data:image/png;base64,${data}`)).blob());
          const canvas = document.createElement("canvas");
          canvas.width = bitmap.width; canvas.height = bitmap.height;
          const ctx = canvas.getContext("2d");
          ctx.drawImage(bitmap, 0, 0);
          const channel = v => { const s = v / 255; return s <= 0.03928 ? s / 12.92 : ((s + 0.055) / 1.055) ** 2.4; };
          const lum = (r, g, b) => 0.2126 * channel(r) + 0.7152 * channel(g) + 0.0722 * channel(b);
          const bad = [];
          const all = [];
          for (const b of list) {
            const x = Math.max(0, b.x), y = Math.max(0, b.y);
            const w = Math.min(b.w, bitmap.width - x), h = Math.min(b.h, bitmap.height - y);
            const { data: px } = ctx.getImageData(x, y, w, h);
            const values = [];
            for (let i = 0; i < px.length; i += 4) values.push(lum(px[i], px[i + 1], px[i + 2]));
            values.sort((p, q) => p - q);
            const backdrop = values[Math.floor(values.length * 0.95)];
            const [r, g, bl] = b.color.match(/\d+(\.\d+)?/g).map(Number);
            const text = lum(r, g, bl);
            const ratio = (Math.max(text, backdrop) + 0.05) / (Math.min(text, backdrop) + 0.05);
            const large = b.size >= 24 || (b.size >= 18.66 && b.weight >= 700);
            const need = large ? 3 : 4.5;
            all.push(`${b.label} | ${b.size}px/${b.weight} | ratio ${ratio.toFixed(2)} | need ${need}`);
            if (ratio < need) bad.push(`${b.label} ratio ${ratio.toFixed(2)} < ${need} at (${b.x},${b.y})`);
          }
          return { bad, all, dpr: window.devicePixelRatio, width: bitmap.width };
        }, { data: png.toString("base64"), boxes });

        // Set MYOURS_CONTRAST_LOG=1 to print every measured ratio (design doc 12.4 asks for a table of failing boxes).
        if (process.env.MYOURS_CONTRAST_LOG) console.log(`CONTRAST ${width} tab${tab + 1}\n${failures.all.join("\n")}`);
        expect(failures.dpr).toBe(1);
        expect(failures.width).toBe(await page.evaluate(() =>
          Math.round(document.querySelector(".hp-myours__stage").getBoundingClientRect().width)));
        expect(failures.bad).toEqual([]);
      });
    }
  }
});
