import React, { useEffect, useRef } from "react";
import { expect, userEvent, waitFor } from "storybook/test";

import {
  AUDIENCES,
  PLACEHOLDER_HREF,
  contrastRatio,
  forceHover,
  realKeyboard,
  realPointer,
  reimagineHtml,
  walkRules,
} from "./reimagine-helpers.jsx";

export default {
  title: "Homepage/Reimagine",
  parameters: {
    docs: {
      description: {
        component:
          'Homepage section "A top U.S. university reimagining education for everyone": eyebrow, `h2` with the hand-drawn underline under "everyone" only (`.scrib-host` + `img.scrib.scrib--reimg`), paragraph, the UDS outline button (`btn outline btn-outline-maroon btn-medium`) and a divider-separated list of six audience links. Static HTML + CSS only: the markup of these stories is the contract. Rows and button are CSS-only (hover and keyboard focus show the same chip and gold bar; the focus ring is the theme\'s own). `href="#"` values are placeholders. Each rendered copy needs a unique heading id (it feeds `id` and `aria-labelledby`).',
      },
    },
  },
};

const THEME_RING =
  "rgb(255, 255, 255) 0px 0px 0px 2px, rgb(25, 25, 25) 0px 0px 0px 4px";
const HOVER_TRANSFORM = "matrix(1, 0, 0, 1, 0, 0)";
const REST_TRANSFORM = "matrix(0.6, 0, 0, 0.6, 0, 0)";

const viewport = width => ({
  viewport: { value: `hp${width}`, isRotated: false },
});

// The hover story pins row 2 with the mirrored :hover rules (story state, not part of the markup).
const Page = ({ headingId, pinned = false }) => {
  const ref = useRef(null);
  useEffect(() => {
    if (!pinned) return undefined;
    const row = ref.current.querySelectorAll(".hp-reimagine__link")[1];
    forceHover(row);
    return () => forceHover(row, false);
  }, [pinned]);
  return (
    <div
      ref={ref}
      dangerouslySetInnerHTML={{ __html: reimagineHtml({ headingId }) }}
    />
  );
};

const near = (actual, expected, tolerance = 1) =>
  expect(Math.abs(actual - expected)).toBeLessThanOrEqual(tolerance);

const parts = canvasElement => {
  const section = canvasElement.querySelector("section.hp-reimagine");
  const find = selector => section.querySelector(selector);
  return {
    section,
    inner: find(".hp-reimagine__inner"),
    content: find(".hp-reimagine__content"),
    eyebrow: find(".hp-reimagine__eyebrow"),
    heading: find(".hp-reimagine__heading"),
    text: find(".hp-reimagine__text"),
    cta: find(".hp-reimagine__cta"),
    list: find(".hp-reimagine__list"),
    links: Array.from(section.querySelectorAll(".hp-reimagine__link")),
  };
};

// HTML parity: complete markup on the very first check, no waiting.
const expectComplete = async (canvasElement, headingId) => {
  const p = parts(canvasElement);
  await expect(p.section).not.toBeNull();
  await expect(p.section.getAttribute("aria-labelledby")).toBe(headingId);
  await expect(p.heading.id).toBe(headingId);
  await expect(p.links).toHaveLength(6);
  await expect(p.cta).not.toBeNull();
  await expect(
    p.section.querySelector(".scrib-host > img.scrib.scrib--reimg")
  ).not.toBeNull();
  return p;
};

const chipOf = link => link.querySelector(".hp-reimagine__chip");
const bar = link => getComputedStyle(link, "::after");

const expectRest = async link => {
  await waitFor(() => expect(getComputedStyle(chipOf(link)).opacity).toBe("0"));
  await waitFor(() =>
    expect(getComputedStyle(chipOf(link)).transform).toBe(REST_TRANSFORM)
  );
  await waitFor(() => expect(bar(link).opacity).toBe("0"));
};

const expectActive = async link => {
  await waitFor(() => expect(getComputedStyle(chipOf(link)).opacity).toBe("1"));
  await waitFor(() =>
    expect(getComputedStyle(chipOf(link)).transform).toBe(HOVER_TRANSFORM)
  );
  await waitFor(() => expect(bar(link).opacity).toBe("1"));
};

// --- stories ---

const DEFAULT_ID = "hp-reimagine-heading-default";

export const Default = {
  globals: viewport(1440),
  render: () => <Page headingId={DEFAULT_ID} />,
  play: async ({ canvasElement, canvas }) => {
    const p = await expectComplete(canvasElement, DEFAULT_ID);
    await expect(window.innerWidth).toBe(1440);

    // --- markup contract ---
    const name = /^A top U\.S\. university reimagining education for everyone$/;
    await expect(canvas.getByRole("region", { name })).toBe(p.section);
    await expect(canvas.getAllByRole("heading")).toHaveLength(1);
    await expect(canvas.getByRole("heading", { level: 2, name })).toBe(
      p.heading
    );
    const host = p.section.querySelector(".scrib-host");
    const mark = host.querySelector("img");
    await expect(host.textContent).toBe("everyone");
    await expect(mark.getAttribute("alt")).toBe("");
    await expect(mark.getAttribute("aria-hidden")).toBe("true");
    await expect(mark.getAttribute("src")).toBe("img/scribble-reimg.svg");
    const hostStyle = getComputedStyle(host);
    await expect(hostStyle.position).toBe("relative");
    await expect(hostStyle.display).toBe("inline-block");
    await expect(hostStyle.zIndex).toBe("0");
    const nowrap = host.closest(".text-nowrap");
    await expect(nowrap).not.toBeNull();
    await expect(nowrap.textContent).toBe("for everyone");
    await expect(
      p.heading.querySelectorAll(".scrib-host, .scrib")
    ).toHaveLength(2);

    const list = canvas.getByRole("list", { name: "Programs by audience" });
    await expect(list).toBe(p.list);
    const items = list.querySelectorAll("li");
    await expect(items).toHaveLength(6);
    await expect(Array.from(items, li => li.textContent)).toEqual(AUDIENCES);
    for (const link of p.links) {
      await expect(link.getAttribute("href")).toBe(PLACEHOLDER_HREF);
      await expect(link.textContent).toBe(
        link.querySelector(".hp-reimagine__label").textContent
      );
    }
    await expect(p.section.querySelector("[tabindex]")).toBeNull();
    await expect(p.section.hasAttribute("data-entrance")).toBe(false);
    await expect(p.section.classList.contains("hp-reimagine--enter")).toBe(
      false
    );
    await expect(p.section.classList.contains("hp-reimagine--settled")).toBe(
      false
    );

    // --- text blocks ---
    await expect(p.eyebrow.textContent).toBe("Programs for all ages");
    const eyebrow = getComputedStyle(p.eyebrow);
    await expect(eyebrow.textTransform).toBe("uppercase");
    await expect(eyebrow.backgroundColor).toBe("rgb(255, 198, 39)");
    await expect(eyebrow.color).toBe("rgb(25, 25, 25)");
    await expect(eyebrow.fontSize).toBe("12px");
    await expect(eyebrow.fontWeight).toBe("700");

    const heading = getComputedStyle(p.heading);
    await expect(heading.fontSize).toBe("32px");
    await expect(heading.lineHeight).toBe("32px");
    await expect(parseFloat(heading.letterSpacing)).toBeCloseTo(-0.96, 2);
    await near(p.heading.getBoundingClientRect().height, 96, 1);

    const text = getComputedStyle(p.text);
    await expect(text.color).toBe("rgb(116, 116, 116)");
    await expect(text.fontSize).toBe("16px");
    await expect(text.lineHeight).toBe("24px");

    // --- Learn more: the UDS outline button plus the two custom-property deltas ---
    await expect(p.cta.tagName).toBe("A");
    for (const cls of ["btn", "outline", "btn-outline-maroon", "btn-medium"]) {
      await expect(p.cta.classList.contains(cls)).toBe(true);
    }
    const cta = getComputedStyle(p.cta);
    await expect(cta.color).toBe("rgb(140, 29, 64)");
    await expect(cta.borderTopWidth).toBe("2px");
    await expect(cta.borderTopStyle).toBe("solid");
    await expect(cta.borderTopColor).toBe("rgb(140, 29, 64)");
    await expect(cta.backgroundColor).toBe("rgba(0, 0, 0, 0)");
    // fails without the --bs-btn-font-size override while the theme's missing semicolon exists
    await expect(cta.fontSize).toBe("14px");
    // a bare `-$uds-size-spacing-1` (no Sass interpolation) would stay literal and fail here
    await expect(
      cta.getPropertyValue("--uds-clickable-area-inset").trim()
    ).toBe("-0.5rem");
    const ctaHeight = p.cta.getBoundingClientRect().height;
    await expect(ctaHeight).toBeGreaterThanOrEqual(34);
    await expect(ctaHeight).toBeLessThanOrEqual(38);
    await expect(
      parseFloat(getComputedStyle(p.cta, "::before").height)
    ).toBeGreaterThanOrEqual(44);
    const icon = p.cta.lastElementChild;
    await expect(icon.tagName.toLowerCase()).toBe("svg");
    await expect(icon.getAttribute("aria-hidden")).toBe("true");
    await expect(p.cta.textContent).toBe("Learn more");
    await expect(p.cta.getAttribute("aria-label")).toContain("Learn more");

    // --- rows at rest ---
    for (const link of p.links) {
      const style = getComputedStyle(link);
      await expect(style.fontSize).toBe("24px");
      await expect(parseFloat(style.letterSpacing)).toBeCloseTo(-0.72, 2);
      await expect(style.color).toBe("rgb(25, 25, 25)");
      await expect(style.textDecorationLine).toBe("none");
      await expect(style.borderBottomWidth).toBe("1px");
      await expect(style.borderBottomColor).toBe("rgb(208, 208, 208)");
      await near(link.getBoundingClientRect().height, 61, 0.5);
      await expectRest(link);
    }

    // --- layout at 1440 (design doc section 9) ---
    const content = p.content.getBoundingClientRect();
    const listBox = p.list.getBoundingClientRect();
    await near(content.left, 150.4);
    await near(content.width, 544);
    await near(listBox.left, 809.6);
    await near(listBox.width, 480);
    await near(
      parseFloat(getComputedStyle(p.section).paddingTop),
      0.1 * window.innerHeight,
      0.5
    );
    await near(
      parseFloat(getComputedStyle(p.section).paddingBottom),
      0.12 * window.innerHeight,
      0.5
    );
  },
};

const HOVER_ID = "hp-reimagine-heading-hover";

export const Hover = {
  globals: viewport(1440),
  render: () => <Page pinned headingId={HOVER_ID} />,
  play: async ({ canvasElement }) => {
    const p = await expectComplete(canvasElement, HOVER_ID);
    const row = p.links[1];
    await expect(row.textContent).toBe("College students");
    const chip = chipOf(row);

    // (1) the story pins row 2 with the mirrored :hover rules; every animated value is awaited
    const expectPinned = async () => {
      await expectActive(row);
      const style = getComputedStyle(chip);
      await expect(style.transitionDuration).toContain("0.25s");
      await expect(style.transitionTimingFunction).toContain(
        "cubic-bezier(0.34, 1.4, 0.44, 1)"
      );
      await expect(style.backgroundColor).toBe("rgb(255, 198, 39)");
      await near(chip.getBoundingClientRect().width, 28, 0.5);
      await near(chip.getBoundingClientRect().height, 28, 0.5);
      const gold = bar(row);
      await expect(gold.backgroundColor).toBe("rgb(255, 198, 39)");
      await expect(gold.height).toBe("4px");
      await expect(gold.position).toBe("absolute");
      // the bar's bottom edge is the link's border-box bottom (border is 1px)
      await expect(gold.bottom).toBe("-1px");
      await expect(getComputedStyle(row).borderBottomWidth).toBe("1px");
      // text stays as it is: no maroon, no underline
      await expect(getComputedStyle(row).color).toBe("rgb(25, 25, 25)");
      await expect(getComputedStyle(row).textDecorationLine).toBe("none");
    };
    await expectPinned();
    // neighbours are unaffected
    await expectRest(p.links[0]);
    await expectRest(p.links[2]);

    // (2) real :hover needs the vitest browser pointer; clear the pin first so only the pointer acts
    if (realPointer.available) {
      await realPointer.unhover(row);
      forceHover(row, false);
      await expectRest(row);
      await realPointer.hover(row);
      await expectActive(row);
      await expect(getComputedStyle(row).color).toBe("rgb(25, 25, 25)");
      await realPointer.unhover(row);
      await expectRest(row);

      // Learn more: the theme's own hover (maroon fill, white text, scale 1.05 at >= 992px)
      await realPointer.hover(p.cta);
      await waitFor(() =>
        expect(getComputedStyle(p.cta).backgroundColor).toBe("rgb(140, 29, 64)")
      );
      await waitFor(() =>
        expect(getComputedStyle(p.cta).color).toBe("rgb(255, 255, 255)")
      );
      await waitFor(() =>
        expect(getComputedStyle(p.cta).transform).toBe(
          "matrix(1.05, 0, 0, 1.05, 0, 0)"
        )
      );
      await realPointer.unhover(p.cta);
    }

    // (3) end on the pinned state
    forceHover(row);
    await expectPinned();
  },
};

const FOCUS_ID = "hp-reimagine-heading-focus-visible";

export const FocusVisible = {
  globals: viewport(1440),
  render: () => <Page headingId={FOCUS_ID} />,
  play: async ({ canvasElement }) => {
    const p = await expectComplete(canvasElement, FOCUS_ID);
    const activations = [];
    const onClick = event => {
      activations.push(event.target.closest("a"));
      event.preventDefault();
    };
    document.addEventListener("click", onClick, true);
    try {
      await realKeyboard.press("{Escape}");
      await userEvent.tab();
      await expect(document.activeElement).toBe(p.cta);
      // Learn more shows the very same ring (the theme's transition settles first)
      await waitFor(() =>
        expect(getComputedStyle(p.cta).boxShadow).toBe(THEME_RING)
      );

      const background = getComputedStyle(p.section).backgroundColor;
      for (const link of p.links) {
        await userEvent.tab();
        await expect(document.activeElement).toBe(link);
        await expect(link.matches(":focus-visible")).toBe(true);
        await expectActive(link);
        const style = getComputedStyle(link);
        // the theme's own ring (global `a:focus`), the same as Learn more's; not #00BAFF
        await expect(style.boxShadow).toBe(THEME_RING);
        // transparent outline: the focus indicator that survives forced colors
        await expect(style.outlineStyle).toBe("solid");
        await expect(style.outlineWidth).toBe("2px");
        await expect(style.outlineColor).toBe("rgba(0, 0, 0, 0)");
        await expect(style.color).toBe("rgb(25, 25, 25)");
        const outer = style.boxShadow.match(/rgb\([^)]*\)/g)[1];
        await expect(contrastRatio(outer, background)).toBeGreaterThanOrEqual(
          3
        );
      }

      // Enter on a focused link is the native activation (navigation is cancelled by the test)
      await userEvent.keyboard("{Enter}");
      await expect(activations).toEqual([p.links[5]]);
      await expect(p.links[5].getAttribute("href")).toBe(PLACEHOLDER_HREF);

      // the next Tab leaves the section
      await userEvent.tab();
      await expect(p.section.contains(document.activeElement)).toBe(false);

      // focus by mouse (:focus, not :focus-visible): the theme still shows its ring
      if (realPointer.available) {
        await realPointer.click(p.links[0]);
        await expect(document.activeElement).toBe(p.links[0]);
        await expect(p.links[0].matches(":focus-visible")).toBe(false);
        await expect(getComputedStyle(p.links[0]).boxShadow).toBe(THEME_RING);
        await realPointer.unhover(p.links[0]);
        p.links[0].blur();
        await realKeyboard.press("{Escape}");
      }
    } finally {
      document.removeEventListener("click", onClick, true);
    }

    // the ring is the theme's: no box-shadow declaration on any row selector in our own sheets
    const rowShadows = [];
    let visitedRule = null;
    walkRules(rule => {
      if (!rule.selectorText.includes(".hp-reimagine__link")) return;
      if (rule.style.boxShadow) rowShadows.push(rule.selectorText);
      if (rule.selectorText.includes(":visited")) visitedRule = rule;
    });
    await expect(rowShadows).toEqual([]);
    // visited rows keep Gray 1 (the theme turns visited links dark maroon)
    await expect(visitedRule).not.toBeNull();
    await expect(visitedRule.style.color).not.toBe("");
  },
};

const PHONE_ID = "hp-reimagine-heading-phone-393";

export const Phone393 = {
  name: "Phone 393",
  globals: viewport(393),
  render: () => <Page headingId={PHONE_ID} />,
  play: async ({ canvasElement }) => {
    const p = await expectComplete(canvasElement, PHONE_ID);
    await expect(window.innerWidth).toBe(393);
    await expect(
      getComputedStyle(p.inner).gridTemplateColumns.split(" ")
    ).toHaveLength(1);
    await near(p.content.getBoundingClientRect().left, 16);

    // the full-bleed Gray 7 band
    const list = getComputedStyle(p.list);
    await expect(list.backgroundColor).toBe("rgb(250, 250, 250)");
    await expect(list.paddingBottom).toBe("16px");
    const band = p.list.getBoundingClientRect();
    await near(band.left, 0, 0.5);
    await near(band.width, 393, 0.5);

    for (const link of p.links) {
      await near(link.getBoundingClientRect().height, 57, 0.5);
      await near(link.getBoundingClientRect().left, 16, 0.5);
      const chip = chipOf(link);
      await expect(getComputedStyle(chip).opacity).toBe("1");
      await expect(getComputedStyle(chip).backgroundColor).toBe(
        "rgba(0, 0, 0, 0)"
      );
      await expect(getComputedStyle(chip).transform).toBe("none");
      await expect(getComputedStyle(chip.querySelector("svg")).color).toBe(
        "rgb(116, 116, 116)"
      );
    }

    // mirrored hover shows no gold bar on phones (the rule keeps its desktop-only media query)
    forceHover(p.links[1]);
    await expect(["none", "normal"]).toContain(bar(p.links[1]).content);
    await expect(getComputedStyle(chipOf(p.links[1])).transform).toBe("none");
    forceHover(p.links[1], false);

    // keyboard focus keeps the theme ring, the only focus indicator on phones
    await realKeyboard.press("{Escape}");
    await userEvent.tab();
    await userEvent.tab();
    await expect(document.activeElement).toBe(p.links[0]);
    await expect(p.links[0].matches(":focus-visible")).toBe(true);
    const ring = getComputedStyle(p.links[0]).boxShadow;
    await expect(ring).toBe(THEME_RING);
    await expect(
      contrastRatio(ring.match(/rgb\([^)]*\)/g)[1], "rgb(250, 250, 250)")
    ).toBeGreaterThanOrEqual(3);

    // heading, mark and no sideways scroll
    await expect(getComputedStyle(p.heading).fontSize).toBe("32px");
    const mark = p.heading.querySelector("img.scrib--reimg");
    await expect(getComputedStyle(mark).display).not.toBe("none");
    await expect(mark.getBoundingClientRect().width).toBeGreaterThan(0);
    await expect(document.documentElement.scrollWidth).toBeLessThanOrEqual(393);
  },
};

const TABLET_ID = "hp-reimagine-heading-tablet-768";

export const Tablet768 = {
  name: "Tablet 768",
  globals: viewport(768),
  render: () => <Page headingId={TABLET_ID} />,
  play: async ({ canvasElement }) => {
    const p = await expectComplete(canvasElement, TABLET_ID);
    await expect(window.innerWidth).toBe(768);
    await expect(
      getComputedStyle(p.inner).gridTemplateColumns.split(" ")
    ).toHaveLength(1);
    await near(p.content.getBoundingClientRect().left, 48);
    const band = p.list.getBoundingClientRect();
    await near(band.left, 0, 0.5);
    await near(band.width, 768, 0.5);
    for (const link of p.links) {
      const box = link.getBoundingClientRect();
      await near(box.left, 48, 0.5);
      await near(box.right, 720, 0.5);
    }
    const heading = getComputedStyle(p.heading);
    await expect(heading.fontSize).toBe("32px");
    await expect(heading.lineHeight).toBe("32px");
    const text = getComputedStyle(p.text);
    await expect(text.fontSize).toBe("14px");
    await expect(text.lineHeight).toBe("24px");
  },
};

const columnsStory = (label, width, expectedLayout) => {
  const headingId = `hp-reimagine-heading-${label.toLowerCase().replace(" ", "-")}`;
  return {
    name: label,
    globals: viewport(width),
    render: () => <Page headingId={headingId} />,
    play: async ({ canvasElement }) => {
      const p = await expectComplete(canvasElement, headingId);
      await expect(window.innerWidth).toBe(width);
      const content = p.content.getBoundingClientRect();
      const list = p.list.getBoundingClientRect();
      await expectedLayout({ p, content, list });
      for (const link of p.links) {
        await expect(getComputedStyle(chipOf(link)).opacity).toBe("0");
      }
    },
  };
};

export const Desktop1024 = columnsStory(
  "Desktop 1024",
  1024,
  async ({ content, list }) => {
    // narrow two columns: equal tracks, gap 8vw
    await near(content.width, list.width, 1);
    await expect(content.width).toBeGreaterThan(400);
    await expect(content.width).toBeLessThan(440);
    await near(list.left - content.right, 81.92);
  }
);

export const Desktop1280 = columnsStory(
  "Desktop 1280",
  1280,
  async ({ content, list }) => {
    await near(content.width, 544);
    await near(list.width, 480);
    await near(list.left - content.right, 102.4);
    await near(content.left, 76.8);
  }
);

export const Large1920 = columnsStory(
  "Large 1920",
  1920,
  async ({ p, content, list }) => {
    await near(content.width, 544);
    await near(list.width, 480);
    await near(list.left - content.right, 153.6);
    await near(content.left, 371.2);
    // the 1440 frame is capped and centered
    const frame = p.inner.getBoundingClientRect();
    await near(frame.width, 1440, 0.5);
    await near(frame.left, 240, 0.5);
  }
);

const MOTION_ID = "hp-reimagine-heading-reduced-motion";

export const ReducedMotion = {
  globals: viewport(1440),
  render: () => <Page headingId={MOTION_ID} />,
  play: async ({ canvasElement }) => {
    const p = await expectComplete(canvasElement, MOTION_ID);
    const chipRules = [];
    walkRules((rule, conditions) => {
      if (rule.selectorText.includes(".hp-reimagine__chip")) {
        chipRules.push({ rule, conditions });
      }
    });
    await expect(chipRules.length).toBeGreaterThan(0);
    const gated = ({ conditions }) =>
      conditions.some(c => c.includes("prefers-reduced-motion: no-preference"));

    // every transform on the chip is gated by prefers-reduced-motion: no-preference
    const transforming = chipRules.filter(({ rule }) => rule.style.transform);
    await expect(transforming.length).toBeGreaterThan(0);
    for (const entry of transforming) {
      await expect(gated(entry)).toBe(true);
    }
    // outside the gate the chip only fades
    const ungated = chipRules.filter(entry => !gated(entry));
    for (const { rule } of ungated) {
      await expect(rule.style.transform).toBe("");
      if (rule.style.transitionProperty) {
        await expect(rule.style.transitionProperty).toBe("opacity");
      }
    }

    // this browser has no reduced-motion preference: the resting chip is scaled down
    await expect(getComputedStyle(chipOf(p.links[0])).transform).toBe(
      REST_TRANSFORM
    );
  },
};
