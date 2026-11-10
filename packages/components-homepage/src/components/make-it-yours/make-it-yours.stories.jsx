import React from "react";
import { expect, waitFor, within } from "storybook/test";
import {
  Harness,
  MAKE_IT_YOURS,
  makeItYoursHtml,
  realPointer,
  resizeViewport,
  walkRules,
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

// ---- side by side (>= 769) ----
const desktopParts = canvasElement => ({
  ...parts(canvasElement),
  head: find(canvasElement, ".hp-myours__head"),
  tabs: find(canvasElement, ".hp-myours__tabs"),
  photos: find(canvasElement, ".hp-myours__photos"),
});
const FRAME = 1920;
// Batch 1 only: `initMakeItYours` is still a stub, so the section stays in the no-JS baseline (every panel open,
// stage taller than 865px). This applies the same boot classes the real script sets (design doc section 9) so the
// 865px geometry can be asserted. It is a no-op once the real script has enhanced the section (T9).
const bootStandIn = canvasElement => {
  const section = find(canvasElement, ".hp-myours");
  if (section.classList.contains("is-enhanced")) return;
  section.classList.add("is-enhanced");
  find(canvasElement, ".hp-myours__item").classList.add("is-open");
};
// Geometry shared by every desktop width (design doc 12.1): 865px stage, photo fills it, chip 48px in from the
// bottom and from the left edge of the 1920px frame, heading 88px.
const expectDesktopStage = (canvasElement, width) => {
  const p = desktopParts(canvasElement);
  expect(style(p.stage).display).toBe("grid");
  near(box(p.stage).height, 865, 1);
  near(box(p.stage).width, width, 1);
  near(box(p.photos).width, width, 1);
  near(box(p.img).width, width, 1);
  near(box(p.img).height, 865, 1);
  expect(style(p.img).objectFit).toBe("cover");
  near(px(style(p.heading).fontSize), 88, 0);
  near(box(p.stage).bottom - box(p.caption).bottom, 48, 1);
  near(box(p.caption).left, Math.max(48, (width - FRAME) / 2 + 48), 1);
  noHorizontalOverflow();
  return p;
};
const desktopStory = (name, width, column) => ({
  name,
  globals: { viewport: viewport(width) },
  render: () => <Harness html={makeItYoursHtml()} />,
  play: async ({ canvasElement }) => {
    await atWidth(width, 1000);
    bootStandIn(canvasElement);
    const p = expectDesktopStage(canvasElement, width);
    if (column) {
      expect(box(p.tabs).left).toBeGreaterThanOrEqual(column[0]);
      expect(box(p.tabs).left).toBeLessThanOrEqual(column[1]);
      near(box(p.tabs).width, 548, 1);
    }
    // The content column sits right of centre, over the photo.
    expect(box(p.tabs).left).toBeGreaterThan(width / 2 - 1);
  },
});
export const Boundary769 = {
  name: "Boundary 769",
  globals: { viewport: viewport(769) },
  render: () => <Harness html={makeItYoursHtml()} />,
  play: async ({ canvasElement }) => {
    await atWidth(769, 900);
    bootStandIn(canvasElement);
    await expect(window.matchMedia("(min-width: 769px)").matches).toBe(true);
    const p = desktopParts(canvasElement);
    await expect(style(p.stage).display).toBe("grid");
    near(box(p.stage).height, 865, 1);
    await waitFor(() =>
      expect(p.img.currentSrc).toMatch(/design-your-degree(-\d+)?\.webp$/)
    );
    await expect(p.img.currentSrc).not.toMatch(/-mobile\.webp$/);
    noHorizontalOverflow();
  },
};
export const Desktop1280 = desktopStory("Desktop 1280", 1280, [640, 690]);
export const Large1920 = desktopStory("Large 1920", 1920, [1250, 1340]);
export const Wide2500 = desktopStory("Wide 2500", 2500);
export const Ultra3934 = desktopStory("Ultra-wide 3934", 3934);
export const NoScript = {
  name: "No script",
  globals: { viewport: viewport(1280) },
  render: () => <Harness manual html={makeItYoursHtml()} />,
  play: async ({ canvasElement }) => {
    await atWidth(1280, 900);
    const p = desktopParts(canvasElement);
    await expect(find(canvasElement, ".hp-myours")).not.toHaveClass(
      "is-enhanced"
    );
    // Every panel is open and the stage grows past 865px if it has to.
    list(canvasElement, ".hp-myours__panel-inner").forEach(inner =>
      expect(box(inner).height).toBeGreaterThan(0)
    );
    expect(box(p.stage).height).toBeGreaterThanOrEqual(865 - 1);
    const shown = list(canvasElement, ".hp-myours__photo").filter(
      figure => style(figure).display !== "none"
    );
    await expect(shown).toHaveLength(1);
    await expect(shown[0]).toHaveClass("is-active");
    p.triggers.forEach(trigger =>
      expect(trigger.hasAttribute("aria-expanded")).toBe(false)
    );
  },
};

// ---- CTA and heading states ----
const WHITE = "rgb(255, 255, 255)";
// Counts the class, attribute and pseudo-class parts of one selector (enough to compare two :visited rules).
const classWeight = selector => (selector.match(/[.[]|:(?!:)/g) || []).length;
export const CtaLinkStates = {
  name: "CTA link states",
  globals: { viewport: viewport(1280) },
  render: () => <Harness html={makeItYoursHtml()} />,
  play: async ({ canvasElement }) => {
    await atWidth(1280, 900);
    const cta = find(canvasElement, ".hp-myours__cta");
    await expect(style(cta).color).toBe(WHITE);
    await expect(style(cta).borderBottomColor).toBe(WHITE);
    await expect(style(cta).borderBottomWidth).toBe("1px");
    await expect(style(find(cta, ".hp-myours__cta-icon") ?? cta).color).toBe(
      WHITE
    );
    // Focus
    cta.focus();
    await expect(style(cta).color).toBe(WHITE);
    cta.blur();
    // Hover: still white, the underline goes away.
    if (realPointer.available) {
      await realPointer.hover(cta);
      await waitFor(() =>
        expect(style(cta).borderBottomColor).toBe("rgba(0, 0, 0, 0)")
      );
      await expect(style(cta).color).toBe(WHITE);
      await realPointer.unhover(cta);
    }
    // :visited and :active cannot be forced in a test; the rules must exist, be white and outrank the theme's.
    const states = { visited: [], active: [], other: [] };
    walkRules((rule, conditions) => {
      // Forced colors deliberately switches to system colors.
      if (conditions.some(c => /forced-colors/.test(c))) return;
      rule.selectorText.split(",").forEach(raw => {
        const selector = raw.trim();
        const white =
          rule.style.color === "rgb(255, 255, 255)" ||
          rule.style.color === "var(--bs-white)" ||
          /^#fff(fff)?$/i.test(rule.style.color) ||
          rule.style.color === "white";
        if (/hp-myours__cta/.test(selector) && /:visited$/.test(selector)) {
          states.visited.push({ selector, white });
        } else if (
          /hp-myours__cta/.test(selector) &&
          /:active$/.test(selector)
        ) {
          states.active.push({ selector, white });
        } else if (/(^|[\s>+~])a:visited$/.test(selector) && rule.style.color) {
          states.other.push({ selector, weight: classWeight(selector) });
        }
      });
    });
    await expect(states.visited.length).toBeGreaterThan(0);
    states.visited.forEach(rule => expect(rule.white).toBe(true));
    await expect(states.active.length).toBeGreaterThan(0);
    states.active.forEach(rule => expect(rule.white).toBe(true));
    const ours = Math.max(...states.visited.map(r => classWeight(r.selector)));
    states.other.forEach(rule => expect(ours).toBeGreaterThan(rule.weight));
  },
};
export const HeadingUnderline = {
  name: "Heading underline",
  globals: { viewport: viewport(393) },
  render: () => <Harness html={makeItYoursHtml()} />,
  play: async ({ canvasElement }) => {
    // Stacked: the swash sits under "yours" only (base underline-mark values).
    await atWidth(393, 852);
    let p = parts(canvasElement);
    near(box(p.scrib).left - box(p.host).left, box(p.host).width * 0.02, 2);
    near(box(p.scrib).width, box(p.host).width, 2);
    // Desktop: it runs from 1.03em left of "yours", 3.02em wide, under "it yours".
    await atWidth(1280, 900);
    bootStandIn(canvasElement);
    p = parts(canvasElement);
    const em = px(style(p.host).fontSize);
    near(box(p.host).left - box(p.scrib).left, 1.03 * em, 2);
    near(box(p.scrib).width, 3.02 * em, 2);
    expect(box(p.scrib).left).toBeLessThan(box(p.lead).right);
  },
};
