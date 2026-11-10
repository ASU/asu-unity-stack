import React from "react";
import { expect, waitFor, within } from "storybook/test";
import {
  Harness,
  MAKE_IT_YOURS,
  makeItYoursHtml,
  resizeViewport,
} from "./make-it-yours-helpers.jsx";
export default {
  title: "Homepage/Make it yours",
  parameters: {
    docs: {
      description: {
        component:
          'Homepage "Make it yours" section (WWWCMS-237): five photo tabs (degree, format, community, experience, cost). Stacked through 768px (white head, inset photo, dark band with the tab list) and side by side from 769px (full-bleed photo, content column on the right, 865px tall). WAI-ARIA APG Accordion: one panel is always open. Without script every panel is open and only the first photo shows. `initMakeItYours` wires it.',
      },
    },
  },
};
const viewport = width => ({
  viewport: { value: `hp${width}`, isRotated: false },
});
// Whitespace between tags is ignored, and both sides go through the parser so `<path/>` equals `<path></path>`.
const normalize = html => {
  const template = document.createElement("template");
  template.innerHTML = html;
  return template.innerHTML.replace(/>\s+</g, "><").trim();
};
const find = (canvasElement, selector) => canvasElement.querySelector(selector);
const list = (canvasElement, selector) =>
  Array.from(canvasElement.querySelectorAll(selector));
export const Default = {
  globals: { viewport: viewport(1280) },
  render: () => <Harness html={makeItYoursHtml()} />,
  play: async ({ canvasElement }) => {
    const triggers = list(canvasElement, ".hp-myours__trigger");
    const panels = list(canvasElement, ".hp-myours__panel");
    await expect(triggers).toHaveLength(5);
    await expect(panels).toHaveLength(5);
    triggers.forEach((trigger, i) => {
      const panel = canvasElement.ownerDocument.getElementById(
        trigger.getAttribute("aria-controls")
      );
      expect(panel).toBe(panels[i]);
      expect(panel.getAttribute("role")).toBe("region");
      expect(panel.getAttribute("aria-labelledby")).toBe(trigger.id);
    });
    await expect(list(canvasElement, "figure")).toHaveLength(5);
    await expect(list(canvasElement, "figure.is-active")).toHaveLength(1);
    await expect(list(canvasElement, "h3")).toHaveLength(5);
    await expect(
      within(canvasElement).getByRole("heading", {
        level: 2,
        name: "Make it yours",
      })
    ).toBeTruthy();
  },
};
export const HtmlParity = {
  name: "HTML parity",
  globals: { viewport: viewport(1280) },
  render: () => <Harness manual html={makeItYoursHtml()} />,
  play: async ({ canvasElement }) => {
    await expect(normalize(canvasElement.firstElementChild.innerHTML)).toBe(
      normalize(makeItYoursHtml())
    );
    await expect(
      canvasElement.querySelector(
        "[aria-expanded], [aria-disabled], [inert], .is-open, .is-enhanced, .is-booting"
      )
    ).toBeNull();
    await expect(find(canvasElement, "figure")).toHaveClass("is-active");
  },
};
export const FiveTabsRequired = {
  name: "Five tabs required",
  globals: { viewport: viewport(1280) },
  render: () => <Harness manual html="" />,
  play: async () => {
    const data = MAKE_IT_YOURS;
    const build = count =>
      makeItYoursHtml({
        data: {
          ...data,
          tabs: Array.from({ length: count }, (_, i) => data.tabs[i % 5]),
        },
      });
    await expect(() => build(4)).toThrow(/exactly five tabs/);
    await expect(() => build(6)).toThrow(/exactly five tabs/);
    await expect(build(5)).toContain("hp-myours__stage");
  },
};
export const InjectionEscaping = {
  name: "Injection escaping",
  globals: { viewport: viewport(1280) },
  render: () => {
    const [first, ...rest] = MAKE_IT_YOURS.tabs;
    const hostile = {
      ...first,
      title: "<img src=x onerror=alert(1)>",
      cta: { label: "Go", url: "javascript:alert(1)" },
      desktop: {
        ...first.desktop,
        alt: 'Quote " and <b>tag</b> & amp',
        caption: "<script>alert(2)</script>",
        focus: "50%; background:red",
      },
    };
    return (
      <Harness
        manual
        html={makeItYoursHtml({
          data: { ...MAKE_IT_YOURS, tabs: [hostile, ...rest] },
        })}
      />
    );
  },
  play: async ({ canvasElement }) => {
    await expect(canvasElement.querySelector("img[src='x']")).toBeNull();
    await expect(canvasElement.querySelector("script")).toBeNull();
    await expect(canvasElement.querySelector("b")).toBeNull();
    await expect(find(canvasElement, ".hp-myours__trigger").textContent).toBe(
      "<img src=x onerror=alert(1)>"
    );
    const firstItem = find(canvasElement, ".hp-myours__item");
    await expect(firstItem.querySelector(".hp-myours__cta")).toBeNull();
    await expect(
      find(canvasElement, ".hp-myours__img").getAttribute("data-alt-desktop")
    ).toBe('Quote " and <b>tag</b> & amp');
    await expect(
      find(canvasElement, ".hp-myours__photo").style.getPropertyValue(
        "--hp-myours-focus"
      )
    ).toBe("50% 50%");
    await expect(
      list(canvasElement, ".hp-myours__cta[href^='javascript']")
    ).toHaveLength(0);
  },
};

// ---- shared geometry helpers ----
const near = (actual, expected, tolerance = 1) =>
  expect(Math.abs(actual - expected)).toBeLessThanOrEqual(tolerance);
const box = element => element.getBoundingClientRect();
const style = (element, pseudo) => getComputedStyle(element, pseudo);
const px = value => parseFloat(value);
// The vitest iframe may not honour the viewport global at every width, so each layout story sets its own.
const atWidth = async (width, height = 900) => {
  await resizeViewport(width, height);
  await expect(window.innerWidth).toBe(width);
};
const noHorizontalOverflow = () =>
  expect(document.documentElement.scrollWidth).toBeLessThanOrEqual(
    window.innerWidth
  );
const parts = canvasElement => ({
  stage: find(canvasElement, ".hp-myours__stage"),
  heading: find(canvasElement, ".hp-myours__heading"),
  lead: find(canvasElement, ".hp-myours__lead"),
  host: find(canvasElement, ".scrib-host"),
  scrib: find(canvasElement, ".hp-myours__scrib"),
  picture: find(canvasElement, ".hp-myours__photo.is-active picture"),
  img: find(canvasElement, ".hp-myours__photo.is-active .hp-myours__img"),
  caption: find(canvasElement, ".hp-myours__photo.is-active figcaption"),
  triggers: list(canvasElement, ".hp-myours__trigger"),
  ctas: list(canvasElement, ".hp-myours__cta"),
});
const MOBILE_ALT_1 =
  "Laughing graduate in a maroon cap and gown with a gold stole, sitting outdoors and raising a hand in the ASU pitchfork sign.";

// ---- stacked layout (<= 768) ----
export const Phone393 = {
  name: "Phone 393",
  globals: { viewport: viewport(393) },
  render: () => <Harness html={makeItYoursHtml()} />,
  play: async ({ canvasElement }) => {
    await atWidth(393, 852);
    const p = parts(canvasElement);
    await expect(style(p.stage).display).toBe("block");
    await expect(style(p.picture).aspectRatio.replace(/\s/g, "")).toBe(
      "900/650"
    );
    near(box(p.picture).width, 393 - 64, 1);
    // The dark band starts 24px above the photo's bottom edge.
    near(box(p.caption).top, box(p.picture).bottom - 24, 1);
    // "Make it / yours": two lines, so the heading is about two font sizes tall.
    const fontSize = px(style(p.heading).fontSize);
    near(box(p.heading).height, fontSize * 2, 2);
    // Stacked swash sits under "yours" only.
    expect(box(p.scrib).left).toBeGreaterThanOrEqual(box(p.host).left - 1);
    // "yours" wraps below the lead-in "it", so the swash cannot reach it.
    expect(box(p.host).top).toBeGreaterThan(box(p.lead).top + fontSize / 2);
    // The base swash is shifted 2% right of the host; allow 5% of its width.
    expect(box(p.scrib).right).toBeLessThanOrEqual(
      box(p.host).right + box(p.host).width * 0.05
    );
    p.triggers.forEach(trigger =>
      expect(box(trigger).height).toBeGreaterThanOrEqual(44)
    );
    p.ctas.forEach(cta => {
      // The ::after pseudo-element extends the 24px line to a 44px hit area.
      expect(px(style(cta, "::after").height)).toBeGreaterThanOrEqual(44);
    });
    noHorizontalOverflow();
  },
};
export const Tablet768 = {
  name: "Tablet 768",
  globals: { viewport: viewport(768) },
  render: () => <Harness html={makeItYoursHtml()} />,
  play: async ({ canvasElement }) => {
    await atWidth(768, 1024);
    const p = parts(canvasElement);
    await expect(window.matchMedia("(min-width: 769px)").matches).toBe(false);
    await expect(style(p.stage).display).toBe("block");
    await waitFor(() =>
      expect(p.img.currentSrc).toMatch(/design-your-degree-mobile\.webp$/)
    );
    await expect(p.img.getAttribute("alt")).toBe(MOBILE_ALT_1);
    // One line at 768 (line-height 1).
    near(box(p.heading).height, px(style(p.heading).fontSize), 4);
    noHorizontalOverflow();
  },
};
export const NoScriptPhone393 = {
  name: "No script, phone 393",
  globals: { viewport: viewport(393) },
  render: () => <Harness manual html={makeItYoursHtml()} />,
  play: async ({ canvasElement }) => {
    await atWidth(393, 852);
    const p = parts(canvasElement);
    await expect(find(canvasElement, ".hp-myours")).not.toHaveClass(
      "is-enhanced"
    );
    list(canvasElement, ".hp-myours__panel-inner").forEach(inner =>
      expect(box(inner).height).toBeGreaterThan(0)
    );
    list(canvasElement, ".hp-myours__panel").forEach(panel =>
      expect(style(panel).visibility).toBe("visible")
    );
    const shown = list(canvasElement, ".hp-myours__photo").filter(
      figure => style(figure).display !== "none"
    );
    await expect(shown).toHaveLength(1);
    await expect(shown[0]).toHaveClass("is-active");
    p.triggers.forEach(trigger =>
      expect(trigger.hasAttribute("aria-expanded")).toBe(false)
    );
    noHorizontalOverflow();
  },
};
