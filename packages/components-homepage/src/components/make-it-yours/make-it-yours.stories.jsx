import React from "react";
import { expect, within } from "storybook/test";
import {
  Harness,
  MAKE_IT_YOURS,
  makeItYoursHtml,
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
