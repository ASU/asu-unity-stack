import React, { useEffect, useRef } from "react";
import { expect, userEvent, waitFor } from "storybook/test";

import {
  AUDIENCES,
  contrastRatio,
  emulateReducedMotion,
  emulateTouchInput,
  forceHover,
  pressedPointer,
  realKeyboard,
  realPointer,
  reimagineHtml,
  resizeViewport,
  walkRules,
} from "./reimagine-helpers.jsx";

export default {
  title: "Homepage/Reimagine",
  parameters: {
    docs: {
      description: {
        component:
          'Homepage section "A top U.S. university reimagining education for everyone": eyebrow, `h2` with the hand-drawn underline under "everyone" only (`.scrib-host` + `img.scrib.scrib--reimg`), paragraph, the UDS outline button (`btn outline btn-outline-maroon btn-medium`) and a divider-separated list of six audience links. Static HTML + CSS only: the markup of these stories is the contract. Rows and button are CSS-only. Desktop: hover and keyboard focus show the same chip and gold bar. Phones (<= 900px): every row shows its gold arrow chip at rest and the gold bar while pressed or keyboard-focused (no hover dependency), on the page background with no band. The focus ring is the theme\'s own. `href` values are placeholders until the real URLs exist (WWWCMS-242): each is a unique fragment that matches no element (`#audience-<slug>` per row, `#reimagine-learn-more` for Learn more), because a bare `#` scrolls the page to the top on click. Replace them with the real URLs. Each rendered copy needs a unique heading id (it feeds `id` and `aria-labelledby`).',
      },
    },
  },
};

const THEME_RING =
  "rgb(255, 255, 255) 0px 0px 0px 2px, rgb(25, 25, 25) 0px 0px 0px 4px";
const HOVER_TRANSFORM = "matrix(1, 0, 0, 1, 0, 0)";
const REST_TRANSFORM = "matrix(0.6, 0, 0, 0.6, 0, 0)";

// Placeholder destinations (TBD): unique fragments that match no element, so a click never scrolls.
const CTA_HREF = "#reimagine-learn-more";
const AUDIENCE_HREFS = [
  "#audience-k-12-learners",
  "#audience-college-students",
  "#audience-professionals",
  "#audience-educators",
  "#audience-parents",
  "#audience-50-learners",
];

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

const centerY = element => {
  const box = element.getBoundingClientRect();
  return box.top + box.height / 2;
};

// QA "Column alignment": in the two-column layout the shorter column is centered against the taller
// one. The height check keeps the test from passing on two columns that are already the same height.
const expectMiddleAligned = async p => {
  await expect(
    getComputedStyle(p.inner).gridTemplateColumns.split(" ")
  ).toHaveLength(2);
  await near(centerY(p.content), centerY(p.list), 1);
  await expect(
    Math.abs(
      p.content.getBoundingClientRect().height -
        p.list.getBoundingClientRect().height
    )
  ).toBeGreaterThan(8);
};

// Stacked layout (<= 900px): the text block sits above the list, one row gap apart, same left edge.
const expectStacked = async p => {
  await expect(
    getComputedStyle(p.inner).gridTemplateColumns.split(" ")
  ).toHaveLength(1);
  const content = p.content.getBoundingClientRect();
  const list = p.list.getBoundingClientRect();
  await near(list.top - content.bottom, 24, 0.5);
  await near(list.left, content.left, 0.5);
  await near(list.width, content.width, 0.5);
};

const expectRest = async link => {
  await waitFor(() => expect(getComputedStyle(chipOf(link)).opacity).toBe("0"));
  await waitFor(() =>
    expect(getComputedStyle(chipOf(link)).transform).toBe(REST_TRANSFORM)
  );
  await waitFor(() => expect(bar(link).opacity).toBe("0"));
};

// Phone layout (<= 900px): the chip is a gold circle with a Gray 1 arrow, always visible, no motion.
const expectPhoneChip = async link => {
  const chip = chipOf(link);
  const style = getComputedStyle(chip);
  await expect(style.opacity).toBe("1");
  await expect(style.transform).toBe("none");
  await expect(style.backgroundColor).toBe("rgb(255, 198, 39)");
  await expect(parseFloat(style.borderTopLeftRadius)).toBeGreaterThanOrEqual(
    14
  );
  await near(chip.getBoundingClientRect().width, 28, 0.5);
  await near(chip.getBoundingClientRect().height, 28, 0.5);
  await expect(getComputedStyle(chip.querySelector("svg")).color).toBe(
    "rgb(25, 25, 25)"
  );
  await expect(style.transitionDuration).toBe("0s");
};

const expectBar = async (link, shown) => {
  const gold = bar(link);
  await expect(gold.opacity).toBe(shown ? "1" : "0");
  if (shown) {
    await expect(gold.backgroundColor).toBe("rgb(255, 198, 39)");
    await expect(gold.height).toBe("4px");
    await expect(gold.bottom).toBe("-1px");
  }
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
    // brand QA: the hand-drawn mark sits 0.1em below the baseline box (32px heading: -3.2px)
    await expect(
      getComputedStyle(mark).getPropertyValue("--scrib-bottom").trim()
    ).toBe("-0.1em");
    await near(parseFloat(getComputedStyle(mark).bottom), -3.2, 0.1);
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
    for (const [index, link] of p.links.entries()) {
      await expect(link.getAttribute("href")).toBe(AUDIENCE_HREFS[index]);
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
    await expect(p.cta.getAttribute("href")).toBe(CTA_HREF);

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
    await expectMiddleAligned(p);
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

      // Learn more: stays an outline on hover (no fill) and grows to 1.05
      await realPointer.hover(p.cta);
      await waitFor(() =>
        expect(getComputedStyle(p.cta).transform).toBe(
          "matrix(1.05, 0, 0, 1.05, 0, 0)"
        )
      );
      await expect(getComputedStyle(p.cta).backgroundColor).toBe(
        "rgba(0, 0, 0, 0)"
      );
      await expect(getComputedStyle(p.cta).color).toBe("rgb(140, 29, 64)");
      await expect(getComputedStyle(p.cta).borderTopColor).toBe(
        "rgb(140, 29, 64)"
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
      await expect(p.links[5].getAttribute("href")).toBe(AUDIENCE_HREFS[5]);

      // the next Tab leaves the section
      await userEvent.tab();
      await expect(p.section.contains(document.activeElement)).toBe(false);

      // brand QA: focus by mouse (:focus, not :focus-visible) shows no ring, on rows and Learn more
      if (realPointer.available) {
        for (const target of [p.links[0], p.cta]) {
          await realPointer.click(target);
          await expect(document.activeElement).toBe(target);
          await expect(target.matches(":focus-visible")).toBe(false);
          await expect(getComputedStyle(target).boxShadow).toBe("none");
          await realPointer.unhover(target);
          target.blur();
          await realKeyboard.press("{Escape}");
        }
        // keyboard focus after a click still shows the ring
        await userEvent.tab();
        await expect(document.activeElement).toBe(p.cta);
        await waitFor(() =>
          expect(getComputedStyle(p.cta).boxShadow).toBe(THEME_RING)
        );
      }
    } finally {
      document.removeEventListener("click", onClick, true);
    }

    // the ring is the theme's: our sheets only cancel it for non-keyboard focus, never set one
    const rowShadows = [];
    let visitedRule = null;
    walkRules(rule => {
      if (!rule.selectorText.includes(".hp-reimagine__link")) return;
      if (
        rule.style.boxShadow &&
        !rule.selectorText.includes(":not(:focus-visible)")
      )
        rowShadows.push(rule.selectorText);
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
    await expectStacked(p);
    // brand QA "Mobile padding": the phone gutter is 24px (it was 16px)
    await near(p.content.getBoundingClientRect().left, 24);

    // no grey band: the list is transparent and sits inside the gutters (rows keep their dividers)
    const list = getComputedStyle(p.list);
    await expect(list.backgroundColor).toBe("rgba(0, 0, 0, 0)");
    await expect(list.paddingBottom).toBe("0px");
    const listBox = p.list.getBoundingClientRect();
    await near(listBox.left, 24, 0.5);
    await near(listBox.width, 345, 0.5);

    for (const link of p.links) {
      // the 28px chip is taller than the 24px label: rows are 61px, as on desktop
      await near(link.getBoundingClientRect().height, 61, 0.5);
      await near(link.getBoundingClientRect().left, 24, 0.5);
      await expect(getComputedStyle(link).borderBottomWidth).toBe("1px");
      await expectPhoneChip(link);
      await expect(bar(link).opacity).toBe("0");
    }

    // mirrored hover changes nothing on phones: no hover dependency, no bar, no scale
    forceHover(p.links[1]);
    await expect(bar(p.links[1]).opacity).toBe("0");
    await expect(getComputedStyle(chipOf(p.links[1])).transform).toBe("none");
    forceHover(p.links[1], false);

    // keyboard focus keeps the theme ring and shows the gold bar (touch has no hover)
    await realKeyboard.press("{Escape}");
    await userEvent.tab();
    await userEvent.tab();
    await expect(document.activeElement).toBe(p.links[0]);
    await expect(p.links[0].matches(":focus-visible")).toBe(true);
    const ring = getComputedStyle(p.links[0]).boxShadow;
    await expect(ring).toBe(THEME_RING);
    await expect(
      contrastRatio(ring.match(/rgb\([^)]*\)/g)[1], "rgb(255, 255, 255)")
    ).toBeGreaterThanOrEqual(3);
    await expectBar(p.links[0], true);
    await userEvent.tab();
    await expectBar(p.links[0], false);
    await expectBar(p.links[1], true);
    p.links[1].blur();

    // QA: "No on click gold underline" - a real press (pointer held down) shows the bar, release hides it
    if (realPointer.available) {
      const row = p.links[3];
      const swallow = event => event.preventDefault();
      document.addEventListener("click", swallow, true);
      try {
        await realPointer.hover(row);
        await expectBar(row, false);
        await pressedPointer.down();
        await waitFor(() => expect(row.matches(":active")).toBe(true));
        await expectBar(row, true);
        await expect(getComputedStyle(row).color).toBe("rgb(25, 25, 25)");
        // neighbours stay quiet
        await expectBar(p.links[2], false);
        await pressedPointer.up();
        await waitFor(() => expect(row.matches(":active")).toBe(false));
        await expectBar(row, false);
      } finally {
        document.removeEventListener("click", swallow, true);
        await pressedPointer.up();
        await realPointer.unhover(row);
        row.blur();
        await realKeyboard.press("{Escape}");
      }
    }

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
    await expectStacked(p);
    await near(p.content.getBoundingClientRect().left, 48);
    // no grey band at 768 either: transparent, inside the 48px gutters
    await expect(getComputedStyle(p.list).backgroundColor).toBe(
      "rgba(0, 0, 0, 0)"
    );
    const listBox = p.list.getBoundingClientRect();
    await near(listBox.left, 48, 0.5);
    await near(listBox.width, 672, 0.5);
    for (const link of p.links) {
      const box = link.getBoundingClientRect();
      await near(box.left, 48, 0.5);
      await near(box.right, 720, 0.5);
      await expectPhoneChip(link);
    }
    const heading = getComputedStyle(p.heading);
    await expect(heading.fontSize).toBe("32px");
    await expect(heading.lineHeight).toBe("32px");
    const text = getComputedStyle(p.text);
    await expect(text.fontSize).toBe("14px");
    await expect(text.lineHeight).toBe("24px");
  },
};

const LINKS_ID = "hp-reimagine-heading-placeholder-links";

// A bare `#` (or `#top`) makes the browser scroll to the top of the page; QA saw this as "it bumps me
// back to the top of the component". The placeholders must be fragments that match no element.
export const PlaceholderLinks = {
  name: "Placeholder links 393",
  globals: viewport(393),
  render: () => <Page headingId={LINKS_ID} />,
  play: async ({ canvasElement }) => {
    const p = await expectComplete(canvasElement, LINKS_ID);
    await expect(window.innerWidth).toBe(393);
    const targets = [p.cta, ...p.links];

    // every placeholder is a distinct, non-empty fragment that no element answers to
    for (const link of targets) {
      const href = link.getAttribute("href");
      await expect(href).toMatch(/^#[a-z0-9-]+$/);
      await expect(document.getElementById(href.slice(1))).toBeNull();
      await expect(document.getElementsByName(href.slice(1))).toHaveLength(0);
    }
    await expect(new Set(targets.map(l => l.getAttribute("href"))).size).toBe(
      targets.length
    );
    await expect(targets.map(l => l.getAttribute("href"))).toEqual([
      CTA_HREF,
      ...AUDIENCE_HREFS,
    ]);

    // reproduce the report in a phone-sized frame of its own (a fragment navigation must not touch
    // the test page): activate each link in the middle of a long page and watch the scroll position
    const markup = reimagineHtml({ headingId: LINKS_ID });
    const frame = document.createElement("iframe");
    const url = URL.createObjectURL(
      new Blob(
        [
          `<!doctype html><body style="margin:0"><div style="height:2000px"></div>${markup}<div style="height:2000px"></div></body>`,
        ],
        { type: "text/html" }
      )
    );
    frame.style.cssText = "width:393px;height:700px;border:0";
    canvasElement.append(frame);
    try {
      await new Promise(resolve => {
        frame.addEventListener("load", resolve, { once: true });
        frame.src = url;
      });
      const view = frame.contentWindow;
      const inner = [
        ...frame.contentDocument.querySelectorAll(
          ".hp-reimagine__cta, .hp-reimagine__link"
        ),
      ];
      await expect(inner).toHaveLength(7);
      for (const link of inner) {
        const top = link.getBoundingClientRect().top + view.scrollY;
        view.scrollTo(0, top - 200);
        await expect(view.scrollY).toBeGreaterThan(1000);
        const before = view.scrollY;
        link.click();
        // sample a few frames so a late scroll cannot be missed
        for (let tick = 0; tick < 10; tick += 1) {
          await new Promise(resolve => requestAnimationFrame(resolve));
          await expect(view.scrollY).toBe(before);
        }
      }
    } finally {
      frame.remove();
      URL.revokeObjectURL(url);
    }
  },
};

const CTA_ID = "hp-reimagine-heading-learn-more";
const GROWN = "matrix(1.05, 0, 0, 1.05, 0, 0)";

// QA: "Learn more should grow on hover; it currently changes color" and "remove the fill on hover".
// The theme scales `.btn` only from 992px and in 0.03s; the button grows at every width, unfilled.
export const LearnMoreGrows = {
  name: "Learn more grows",
  globals: viewport(393),
  render: () => <Page headingId={CTA_ID} />,
  play: async ({ canvasElement }) => {
    const p = await expectComplete(canvasElement, CTA_ID);
    const motion = [];
    walkRules((rule, conditions) => {
      if (rule.selectorText.includes(".hp-reimagine__cta")) {
        motion.push({ rule, conditions });
      }
    });
    const grows = motion.filter(
      ({ rule }) => rule.style.transform === "scale(1.05)"
    );
    await expect(grows.length).toBeGreaterThan(0);
    // the growth is gated by no-preference; a reduce rule cancels the theme's own ungated scale
    for (const { conditions } of grows) {
      await expect(
        conditions.some(c =>
          c.includes("prefers-reduced-motion: no-preference")
        )
      ).toBe(true);
    }
    const reduced = motion.filter(({ conditions }) =>
      conditions.some(c => c.includes("prefers-reduced-motion: reduce"))
    );
    await expect(
      reduced.some(({ rule }) => rule.style.transform === "none")
    ).toBe(true);
    if (!realPointer.available) return;

    for (const width of [393, 768, 991, 992, 1280, 1440]) {
      await resizeViewport(width);
      await expect(window.innerWidth).toBe(width);
      await waitFor(() =>
        expect(getComputedStyle(p.cta).transform).toBe("none")
      );
      const rest = getComputedStyle(p.cta);
      const restColor = rest.color;
      await realPointer.hover(p.cta);
      await waitFor(() =>
        expect(getComputedStyle(p.cta).transform).toBe(GROWN)
      );
      const hovered = getComputedStyle(p.cta);
      // brand QA: no fill and no colour change on hover, and a smooth (not 0.03s) growth
      await expect(hovered.backgroundColor).toBe("rgba(0, 0, 0, 0)");
      await expect(hovered.color).toBe(restColor);
      await expect(hovered.borderTopColor).toBe("rgb(140, 29, 64)");
      await expect(hovered.transitionProperty).toContain("transform");
      await expect(hovered.transitionDuration).toContain("0.25s");
      await realPointer.unhover(p.cta);
      await waitFor(() =>
        expect(getComputedStyle(p.cta).transform).toBe("none")
      );
    }

    // keyboard focus grows it as well
    await resizeViewport(393);
    await realKeyboard.press("{Escape}");
    await userEvent.tab();
    await expect(document.activeElement).toBe(p.cta);
    await expect(p.cta.matches(":focus-visible")).toBe(true);
    await waitFor(() => expect(getComputedStyle(p.cta).transform).toBe(GROWN));
    await userEvent.tab();
    await waitFor(() => expect(getComputedStyle(p.cta).transform).toBe("none"));
  },
};

const CTA_REDUCED_ID = "hp-reimagine-heading-learn-more-reduced";

// Review: under `prefers-reduced-motion: reduce` the button must not transform at all. The theme's
// `.btn:active` scales it (.95 below 992px, 1 from 992px) and `.btn:hover` scales it from 992px.
export const LearnMoreReducedMotion = {
  name: "Learn more reduced motion",
  globals: viewport(393),
  render: () => <Page headingId={CTA_REDUCED_ID} />,
  play: async ({ canvasElement }) => {
    const p = await expectComplete(canvasElement, CTA_REDUCED_ID);

    // stylesheet guard (also runs without a real browser): the reduce block cancels every state
    const cancelled = [];
    walkRules((rule, conditions) => {
      if (
        rule.selectorText.includes(".hp-reimagine__cta") &&
        rule.style.transform === "none" &&
        conditions.some(c => c.includes("prefers-reduced-motion: reduce"))
      ) {
        cancelled.push(rule.selectorText);
      }
    });
    for (const state of [":hover", ":focus-visible", ":active"]) {
      await expect(cancelled.some(s => s.includes(state))).toBe(true);
    }
    if (!realPointer.available) return;

    // The theme's `transition: all .03s` would hide a transform for the first frames, so no transform
    // transition may start and, once every transition has finished, the transform is still `none`.
    const expectStill = async () => {
      await expect(
        p.cta.getAnimations().filter(a => a.transitionProperty === "transform")
      ).toHaveLength(0);
      await Promise.all(p.cta.getAnimations().map(a => a.finished));
      await expect(getComputedStyle(p.cta).transform).toBe("none");
    };

    const swallow = event => event.preventDefault();
    document.addEventListener("click", swallow, true);
    try {
      await emulateReducedMotion(true);
      await expect(
        window.matchMedia("(prefers-reduced-motion: reduce)").matches
      ).toBe(true);
      for (const width of [393, 768, 991, 992, 1280, 1440]) {
        await resizeViewport(width);
        await expect(window.innerWidth).toBe(width);
        await expectStill();
        await realPointer.hover(p.cta);
        await waitFor(() => expect(p.cta.matches(":hover")).toBe(true));
        await expectStill();
        await pressedPointer.down();
        await waitFor(() => expect(p.cta.matches(":active")).toBe(true));
        await expectStill();
        // still pressed with the pointer moved off (`:active` without `:hover`: the theme's `.btn:active`
        // scale is not cancelled by a hover rule)
        await realPointer.unhover(p.cta);
        await waitFor(() => expect(p.cta.matches(":hover")).toBe(false));
        await expect(p.cta.matches(":active")).toBe(true);
        await expectStill();
        await pressedPointer.up();
        await waitFor(() => expect(p.cta.matches(":active")).toBe(false));
        await expectStill();
      }

      // keyboard focus keeps it still at every width as well (a trusted key press first, so that the
      // script focus below counts as keyboard focus)
      p.cta.blur();
      await realKeyboard.press("{Escape}");
      await resizeViewport(393);
      p.cta.focus();
      await expect(document.activeElement).toBe(p.cta);
      await expect(p.cta.matches(":focus-visible")).toBe(true);
      for (const width of [393, 991, 992, 1440]) {
        await resizeViewport(width);
        await expectStill();
      }
      p.cta.blur();
    } finally {
      await pressedPointer.up();
      document.removeEventListener("click", swallow, true);
      await emulateReducedMotion(false);
    }
  },
};

const BREAKPOINT_ID = "hp-reimagine-heading-breakpoint";

// QA: "a flash of buttons at an odd breakpoint on tablet". The chip must switch state at the 900/901px
// breakpoint instantly: no transition may be running right after the viewport changes. Entering the
// phone layout that holds for every pointer. Entering the desktop layout it holds for touch devices
// (`hover: none`, where the chip has no hover transition); with a mouse the chip's own 0.2s hover fade
// runs, because a CSS-only chip cannot tell a breakpoint from the end of a hover.
export const BreakpointCrossing = {
  name: "Breakpoint crossing",
  globals: viewport(1024),
  render: () => <Page headingId={BREAKPOINT_ID} />,
  play: async ({ canvasElement }) => {
    const p = await expectComplete(canvasElement, BREAKPOINT_ID);
    if (!realPointer.available) return;
    const chips = p.links.map(chipOf);
    // a pointer resting on a row would fade that row's bar by design: take hover out of the picture
    canvasElement.style.pointerEvents = "none";
    // every width is read straight after the resize, before any frame can advance a transition
    const crossTo = async (width, { touch }) => {
      await resizeViewport(width);
      await expect(window.innerWidth).toBe(width);
      const phone = width <= 900;
      if (phone || touch) {
        for (const chip of chips) {
          await expect(getComputedStyle(chip).opacity).toBe(phone ? "1" : "0");
        }
        await expect(p.section.getAnimations({ subtree: true })).toHaveLength(
          0
        );
        return;
      }
      // mouse on desktop: nothing but the chips' own fade may run, and it ends hidden
      const others = p.section
        .getAnimations({ subtree: true })
        .filter(animation => !chips.includes(animation.effect.target));
      await expect(others).toHaveLength(0);
      await Promise.all(
        p.section.getAnimations({ subtree: true }).map(a => a.finished)
      );
      for (const chip of chips) {
        await expect(getComputedStyle(chip).opacity).toBe("0");
      }
    };
    // both directions across 900/901, plus the 1023/1024 and 600/601 breakpoints
    const widths = [
      880, 920, 880, 900, 901, 900, 1023, 1024, 1023, 601, 600, 601,
    ];
    try {
      for (const touch of [false, true]) {
        await emulateTouchInput(touch);
        await expect(window.matchMedia("(hover: none)").matches).toBe(touch);
        await resizeViewport(1024);
        for (const width of widths) {
          await crossTo(width, { touch });
        }
      }
    } finally {
      await emulateTouchInput(false);
      canvasElement.style.pointerEvents = "";
    }
  },
};

const ALIGN_ID = "hp-reimagine-heading-column-alignment";

// Brand QA "Column alignment": "The 2 columns should be middle aligned." Two columns from 901px (equal
// tracks up to about 1146px, 544/480 from about 1217px): their vertical centers coincide. At <= 900px
// the layout is stacked and unchanged.
export const ColumnAlignment = {
  name: "Column alignment",
  globals: viewport(1440),
  render: () => <Page headingId={ALIGN_ID} />,
  play: async ({ canvasElement }) => {
    const p = await expectComplete(canvasElement, ALIGN_ID);
    await expectMiddleAligned(p);
    if (!realPointer.available) return;
    for (const width of [1920, 1440, 1280, 1200, 1100, 1024, 1023, 901]) {
      await resizeViewport(width);
      await expect(window.innerWidth).toBe(width);
      await expectMiddleAligned(p);
      // widths and row heights are untouched: only the vertical position changes
      const content = p.content.getBoundingClientRect();
      const list = p.list.getBoundingClientRect();
      if (width >= 1280) {
        await near(content.width, 544);
        await near(list.width, 480);
      } else if (width === 1200) {
        // the list is capped at 480px, the text column is still growing towards 544px
        await near(list.width, 480);
        await expect(content.width).toBeGreaterThan(480);
        await expect(content.width).toBeLessThan(544);
      } else {
        await near(content.width, list.width, 1);
      }
      for (const link of p.links) {
        await near(link.getBoundingClientRect().height, 61, 0.5);
      }
    }
    for (const width of [900, 768, 601, 393]) {
      await resizeViewport(width);
      await expect(window.innerWidth).toBe(width);
      await expectStacked(p);
    }
    await resizeViewport(1440);
  },
};

const GUTTER_ID = "hp-reimagine-heading-gutter";
// [viewport width, expected horizontal gutter]: 24px up to 600px, the unchanged 48px from 601px.
const GUTTERS = [
  [360, 24],
  [393, 24],
  [480, 24],
  [600, 24],
  [601, 48],
  [768, 48],
  [900, 48],
];

// Brand QA "Mobile padding": "Mobile padding should be at 24px, currently at 16px." The phone gutter
// (<= 600px) is 24px; 601-900px was already 48px and stays. Nothing overflows at 360px.
export const PhoneGutter = {
  name: "Phone gutter",
  globals: viewport(393),
  render: () => <Page headingId={GUTTER_ID} />,
  play: async ({ canvasElement }) => {
    const p = await expectComplete(canvasElement, GUTTER_ID);
    const widths = realPointer.available ? GUTTERS : [[393, 24]];
    try {
      for (const [width, gutter] of widths) {
        await resizeViewport(width);
        await expect(window.innerWidth).toBe(width);
        const root = document.documentElement;
        const edge = root.clientWidth;
        await expect(getComputedStyle(p.inner).paddingLeft).toBe(`${gutter}px`);
        await expect(getComputedStyle(p.inner).paddingRight).toBe(
          `${gutter}px`
        );
        const content = p.content.getBoundingClientRect();
        const list = p.list.getBoundingClientRect();
        await near(content.left, gutter, 0.5);
        await near(content.right, edge - gutter, 0.5);
        await near(list.left, gutter, 0.5);
        await near(list.right, edge - gutter, 0.5);

        // nothing sticks out sideways
        await expect(root.scrollWidth).toBeLessThanOrEqual(width);
        for (const element of [p.heading, p.text, p.cta, ...p.links]) {
          const box = element.getBoundingClientRect();
          await expect(box.left).toBeGreaterThanOrEqual(gutter - 0.5);
          await expect(box.right).toBeLessThanOrEqual(edge - gutter + 0.5);
        }
        // (not the button: its ::before hit area extends 8px past its box by design)
        for (const element of [p.heading, p.text, ...p.links]) {
          await expect(element.scrollWidth).toBeLessThanOrEqual(
            element.clientWidth + 1
          );
        }
        const nowrap = p.heading.querySelector(".text-nowrap");
        await expect(nowrap.getBoundingClientRect().right).toBeLessThanOrEqual(
          content.right + 0.5
        );

        // heading wraps on 32px lines, mark and Learn more stay as they are
        const lines = p.heading.getBoundingClientRect().height / 32;
        await near(lines, Math.round(lines), 0.02);
        await expect(Math.round(lines)).toBeGreaterThanOrEqual(3);
        await expect(Math.round(lines)).toBeLessThanOrEqual(7);
        const host = p.heading.querySelector(".scrib-host");
        const mark = host.querySelector("img.scrib--reimg");
        const hostBox = host.getBoundingClientRect();
        const markBox = mark.getBoundingClientRect();
        await near(markBox.width, hostBox.width, 1);
        await near(markBox.left, hostBox.left - 0.03 * hostBox.width, 1);
        await near(markBox.bottom - hostBox.bottom, 3.2, 1);
        const cta = p.cta.getBoundingClientRect();
        await near(cta.height, 36, 2);
        await expect(cta.width).toBeLessThan(content.width);

        for (const link of p.links) {
          const row = link.getBoundingClientRect();
          const chip = chipOf(link).getBoundingClientRect();
          const label = link
            .querySelector(".hp-reimagine__label")
            .getBoundingClientRect();
          await near(row.height, 61, 0.5);
          await near(chip.width, 28, 0.5);
          await near(chip.height, 28, 0.5);
          await expect(label.right).toBeLessThanOrEqual(chip.left);
          await expect(chip.right).toBeLessThanOrEqual(row.right + 0.5);
        }
      }
    } finally {
      await resizeViewport(393);
    }
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
      await expectMiddleAligned(p);
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
        await expect(["opacity", "none"]).toContain(
          rule.style.transitionProperty
        );
      }
    }

    // this browser has no reduced-motion preference: the resting chip is scaled down
    await expect(getComputedStyle(chipOf(p.links[0])).transform).toBe(
      REST_TRANSFORM
    );
  },
};
