import React from "react";
import { expect, waitFor } from "storybook/test";

import { initStories } from "./stories-grid.js";
import {
  Harness,
  MORE_HREF,
  PROMO_ALT,
  SCRIM_REST_START,
  STORIES,
  emulateReducedMotion,
  forceHover,
  maxPhotoGray,
  photoSrc,
  openingProgress,
  realKeyboard,
  realPointer,
  requiredRatio,
  resizeViewport,
  scrimMultiplier,
  storiesHtml,
  storyHref,
  walkRules,
} from "./stories-grid-helpers.jsx";
import * as entry from "../../js/index.js";

export default {
  title: "Homepage/Stories grid",
  // Every story leaves the page where it found it: scrolled to the top, no motion emulation.
  beforeEach: () => async () => {
    window.scrollTo({ top: 0, behavior: "instant" });
    await emulateReducedMotion(false);
  },
  parameters: {
    docs: {
      description: {
        component:
          'Homepage stories of excellence: an even 4x2 grid, edge to edge, of a Gray 1 heading tile ("Stories of excellence", "This is ASU innovation.", "More stories") and seven photo cards (six stories and one gold promo in row 2, cell 2). On desktop the grid starts inset by the 48px gutter with 4px corners and opens to full width with square corners as it scrolls into view (`initStories` writes `--hp-stories-progress` from the scroll position; the section\'s height never changes, so nothing below it moves). Hover and keyboard focus reveal the subhead (0.4s), darken the whole photo (the scrim starts at the top instead of at 54%) and invert the arrow chip. Tablet (900px and under) is two columns with the heading tile as the first cell and the subhead always shown; phones (600px and under) get the tile and a swipe row of 260px-wide cards with Previous/Next buttons. Reduced motion and no script show the grid at full width. Above 1920px the grid is capped and centered on a Gray 1 topo band. Photos are inline SVG placeholders; `href`s are placeholders (`#story-N`, `#stories-more`).',
      },
    },
  },
};

const viewport = width => ({
  viewport: { value: `hp${width}`, isRotated: false },
});

const GRAY_1 = "rgb(25, 25, 25)";
const WHITE = "rgb(255, 255, 255)";
const GRAY_3 = "rgb(116, 116, 116)";
const GOLD = "rgb(255, 198, 39)";
const LIFT_SHADOW = "rgba(0, 0, 0, 0.32) 0px 2px 10px 0px";
const RING_SHADOW =
  "rgb(255, 255, 255) 0px 0px 0px 2px inset, rgb(25, 25, 25) 0px 0px 0px 4px inset";

const near = (actual, expected, tolerance = 1) =>
  expect(Math.abs(actual - expected)).toBeLessThanOrEqual(tolerance);

const box = element => element.getBoundingClientRect();
const style = (element, pseudo) => getComputedStyle(element, pseudo);
const frame = () => new Promise(resolve => requestAnimationFrame(resolve));
const px = value => parseFloat(value);

const parts = canvasElement => {
  const section = canvasElement.querySelector("section.hp-stories");
  const find = selector => section.querySelector(selector);
  return {
    section,
    band: find(".hp-topo--band"),
    grid: find(".hp-stories__grid"),
    lead: find(".hp-stories__lead"),
    eyebrow: find(".hp-stories__eyebrow"),
    heading: find(".hp-stories__heading"),
    dek: find(".hp-stories__dek"),
    more: find(".hp-stories__more"),
    list: find(".hp-stories__cards"),
    items: Array.from(section.querySelectorAll(".hp-stories__cards > li")),
    cards: Array.from(section.querySelectorAll(".hp-stories__card")),
    controls: find(".hp-stories__controls"),
    prev: find(".hp-stories__prev"),
    next: find(".hp-stories__next"),
  };
};

const card = (p, index) => {
  const element = p.cards[index];
  return {
    element,
    img: element.querySelector("img"),
    scrim: element.querySelector(".hp-stories__scrim"),
    arrow: element.querySelector(".hp-stories__arrow"),
    text: element.querySelector(".hp-stories__text"),
    title: element.querySelector(".hp-stories__title"),
    wrap: element.querySelector(".hp-stories__sub-wrap"),
    sub: element.querySelector(".hp-stories__sub"),
  };
};

// The resting geometry the CSS derives (design doc D5): container width, row height and the type unit.
const metrics = section => {
  const width = box(section).width;
  const reserve = window.innerWidth <= 1079 ? 69 : 123;
  const cell = Math.min(width * 0.25, 480);
  const row = Math.min(
    (cell * 37) / 32,
    (window.innerHeight - reserve - 24) / 2,
    370
  );
  const unit = Math.max(0.875, Math.min(cell / 320, row / 370));
  return { width, row, unit, cell };
};

const progressOf = grid =>
  parseFloat(grid.style.getPropertyValue("--hp-stories-progress"));

const scrimStart = scrim =>
  style(scrim).getPropertyValue("--hp-stories-scrim-start").trim();

// Everything the markup contract fixes, with or without script.
const expectContract = async p => {
  await expect(p.section.getAttribute("aria-labelledby")).toBe(p.heading.id);
  await expect(p.section.querySelectorAll("h2")).toHaveLength(1);
  await expect(p.heading.textContent).toBe("Stories of excellence");
  await expect(p.heading.querySelector("img")).toBeNull(); // no underline mark on this heading
  await expect(p.eyebrow.textContent).toBe("ASU news");
  await expect(p.dek.textContent).toBe("This is ASU innovation.");
  await expect(p.more.tagName).toBe("A");
  await expect(p.more.getAttribute("href")).toBe(MORE_HREF);
  for (const name of ["btn", "btn-outline-gold", "btn-sm"]) {
    await expect(p.more.classList.contains(name)).toBe(true);
  }
  await expect(p.list.getAttribute("role")).toBe("list");
  await expect(p.items).toHaveLength(7);
  await expect(p.cards).toHaveLength(7);
  p.items.forEach(item => expect(item.getAttribute("role")).toBe("listitem"));
  // DOM order = visual order; the promo is the 5th card (row 2, cell 2)
  const promos = p.cards.filter(c =>
    c.classList.contains("hp-stories__card--promo")
  );
  await expect(promos).toHaveLength(1);
  await expect(p.cards.indexOf(promos[0])).toBe(4);
  STORIES.forEach((story, index) => {
    const c = card(p, index);
    expect(p.cards[index].getAttribute("href")).toBe(storyHref(index));
    expect(c.title.tagName).toBe("H3");
    expect(c.title.textContent).toBe(story.title);
    expect(c.sub.textContent).toBe(story.sub);
    expect(c.arrow.getAttribute("aria-hidden")).toBe("true");
    expect(c.scrim.getAttribute("aria-hidden")).toBe("true");
    expect(c.img.getAttribute("alt")).toBe(story.promo ? PROMO_ALT : "");
  });
  // the controls follow the list in DOM order
  await expect(
    p.list.compareDocumentPosition(p.controls) &
      Node.DOCUMENT_POSITION_FOLLOWING
  ).toBeTruthy();
  await expect(p.prev.getAttribute("aria-label")).toBe("Previous stories");
  await expect(p.next.getAttribute("aria-label")).toBe("Next stories");
};

// The geometry of the 4x2 desktop grid at the current viewport.
const expectDesktopGrid = async p => {
  const m = metrics(p.section);
  const g = box(p.grid);
  const columns = style(p.grid).gridTemplateColumns.split(" ");
  await expect(columns).toHaveLength(4);
  const cellWidth = Math.min(m.width, 1920) / 4;
  await near(g.width, Math.min(m.width, 1920), 1);
  const lead = box(p.lead);
  await near(lead.width, cellWidth, 1);
  await near(lead.height, m.row, 1);
  await near(lead.left, g.left, 1);
  p.cards.forEach((element, index) => {
    const b = box(element);
    const col = (index + 1) % 4;
    const rowIndex = index < 3 ? 0 : 1;
    near(b.width, cellWidth, 1);
    near(b.height, m.row, 1);
    near(b.left - g.left, col * cellWidth, 1);
    near(b.top - g.top, rowIndex * m.row, 1);
  });
  await near(g.height, 2 * m.row, 1);
  return m;
};

// --- server markup ---

export const NoScript = {
  name: "No script (server markup)",
  globals: viewport(1440),
  render: () => <Harness manual html={storiesHtml()} />,
  play: async ({ canvasElement }) => {
    await resizeViewport(1440, 900);
    const p = parts(canvasElement);
    await expectContract(p);
    // parity: the story markup is the contract (the handoff's markup.html)
    const template = document.createElement("template");
    template.innerHTML = storiesHtml();
    await expect(p.section.outerHTML).toBe(
      template.content.firstElementChild.outerHTML
    );
    // no script: the controls stay hidden, the grid is full width and square
    await expect(p.controls.hidden).toBe(true);
    await expect(style(p.controls).display).toBe("none");
    await expect(p.grid.style.getPropertyValue("--hp-stories-progress")).toBe(
      ""
    );
    await near(box(p.grid).width, box(p.section).width, 1);
    await expect(style(p.grid).borderRadius).toBe("0px");
    await expect(style(p.grid).overflow).toBe("visible");
    // the subheads are clipped but still in the accessibility tree
    p.cards.forEach((_, index) => {
      const c = card(p, index);
      expect(style(c.sub).display).not.toBe("none");
      expect(style(c.sub).visibility).toBe("visible");
      expect(style(c.sub).opacity).toBe("0");
      expect(box(c.sub).height).toBe(0);
    });
  },
};

// --- desktop ---

export const Default = {
  globals: viewport(1440),
  render: () => <Harness html={storiesHtml()} />,
  play: async ({ canvasElement }) => {
    await resizeViewport(1440, 900);
    const p = parts(canvasElement);
    await expectContract(p);
    await waitFor(() => expect(progressOf(p.grid)).toBe(1));
    // every card shows its prototype photo (568x660), not a broken image
    await waitFor(() =>
      p.cards.forEach((_, index) => {
        const { img } = card(p, index);
        expect(img.complete && img.naturalWidth).toBe(568);
        expect(img.naturalHeight).toBe(660);
      })
    );
    const m = await expectDesktopGrid(p);
    // heading tile (design doc D9)
    await expect(style(p.lead).backgroundColor).toBe(GRAY_1);
    await near(px(style(p.heading).fontSize), 32 * m.unit, 0.5);
    await expect(style(p.heading).color).toBe(WHITE);
    await expect(style(p.eyebrow).backgroundColor).toBe(GOLD);
    await expect(style(p.eyebrow).color).toBe(GRAY_1);
    await expect(style(p.more).borderTopColor).toBe(GOLD);
    // cards: flush, square, no shadow, photo overscan, in-flow bottom text
    p.cards.forEach((_, index) => {
      const c = card(p, index);
      const s = style(c.element);
      expect(s.borderRadius).toBe("0px");
      expect(s.boxShadow).toBe("none");
      expect(s.overflow).toBe("hidden");
      expect(style(c.img).position).toBe("absolute");
      near(box(c.img).width, box(c.element).width + 12, 1);
      expect(style(c.title).color).toBe(WHITE);
      expect(style(c.title).fontWeight).toBe("700");
      near(px(style(c.title).fontSize), 24 * m.unit, 0.5);
      expect(style(c.sub).opacity).toBe("0");
      expect(scrimStart(c.scrim)).toBe("50%");
      expect(style(c.arrow).borderTopColor).toBe(WHITE);
      expect(style(c.arrow).backgroundColor).not.toBe(WHITE);
      near(box(c.arrow).width, 24 * m.unit, 0.5);
      // text sits bottom-left, 24px (scaled) from the edges
      near(box(c.element).bottom - box(c.text).bottom, 0, 1);
      near(box(c.title).left - box(c.element).left, 24 * m.unit, 1);
    });
    await expect(entry.initStories === initStories).toBe(true);
  },
};

export const Hover = {
  globals: viewport(1440),
  render: () => <Harness html={storiesHtml()} />,
  play: async ({ canvasElement }) => {
    await resizeViewport(1440, 900);
    const p = parts(canvasElement);
    const c = card(p, 1);
    const before = box(c.element);
    await expect(style(c.sub).opacity).toBe("0");
    forceHover(c.element);
    await waitFor(() => expect(style(c.sub).opacity).toBe("1"));
    await waitFor(() => expect(scrimStart(c.scrim)).toBe("0%"));
    await waitFor(() => expect(box(c.sub).height).toBeGreaterThan(20));
    // the chip inverts: white fill, Gray 3 arrow
    await waitFor(() => expect(style(c.arrow).backgroundColor).toBe(WHITE));
    await expect(style(c.arrow).color).toBe(GRAY_3);
    // the card box does not move or resize, and stays flush and square
    const after = box(c.element);
    await near(after.top, before.top, 0.5);
    await near(after.height, before.height, 0.5);
    await near(after.width, before.width, 0.5);
    // the hovered card rises above its flush neighbours with the Figma hover shadow; still square
    await expect(style(c.element).boxShadow).toBe(LIFT_SHADOW);
    await expect(style(c.element).zIndex).toBe("4");
    await expect(style(c.element).borderRadius).toBe("0px");
    // the title rose by the subhead's height
    await near(
      box(c.element).bottom - box(c.sub).bottom,
      px(style(c.text).paddingBottom),
      1
    );
    forceHover(c.element, false);
    await waitFor(() => expect(style(c.sub).opacity).toBe("0"));
    await waitFor(() => expect(scrimStart(c.scrim)).toBe("50%"));
    await expect(style(c.element).boxShadow).toBe("none");
    // the shadow of an edge card is not clipped at full width
    await expect(style(p.grid).overflow).toBe("visible");
    // a real pointer reveals the same state (only where the test runner provides one)
    if (realPointer.available) {
      await realPointer.hover(c.element);
      await waitFor(() => expect(style(c.sub).opacity).toBe("1"));
      await waitFor(() => expect(scrimStart(c.scrim)).toBe("0%"));
      await realPointer.unhover(c.element);
      await waitFor(() => expect(style(c.sub).opacity).toBe("0"));
    }
    // end on the hover state, as the story shows it
    forceHover(c.element);
    await waitFor(() => expect(style(c.sub).opacity).toBe("1"));
  },
};

export const ScrollOpening = {
  name: "Scroll opening",
  globals: viewport(1440),
  render: () => <Harness before="120vh" after="120vh" html={storiesHtml()} />,
  parameters: {
    docs: {
      description: {
        story:
          "The section sits between blank spacers so the real motion can be scrolled: the grid is inset 48px with 4px corners when it enters at the bottom of the window and reaches full width with square corners as it rises under the header. It reverses on scroll up.",
      },
    },
  },
  play: async ({ canvasElement }) => {
    await resizeViewport(1440, 900);
    const p = parts(canvasElement);
    await waitFor(() => expect(progressOf(p.grid)).toBe(0));
    await near(box(p.grid).width, box(p.section).width - 96, 1);
    await expect(style(p.grid).borderRadius).toBe("4px");
  },
};

export const FocusVisible = {
  name: "Focus visible",
  tags: ["!dev"],
  globals: viewport(1440),
  render: () => <Harness html={storiesHtml()} />,
  play: async ({ canvasElement }) => {
    await resizeViewport(1440, 900);
    const p = parts(canvasElement);
    const c = card(p, 2);
    c.element.focus();
    await expect(c.element.matches(":focus-visible")).toBe(true);
    // the ring is drawn above the photo (a pseudo-element), the theme's global ring is cancelled
    await expect(style(c.element, "::after").boxShadow).toBe(RING_SHADOW);
    await expect(style(c.element, "::after").zIndex).toBe("3");
    await expect(style(c.element).boxShadow).toBe(LIFT_SHADOW);
    await expect(style(c.element).outlineStyle).toBe("none");
    await expect(style(c.element, "::after").outlineColor).toBe(
      "rgba(0, 0, 0, 0)"
    );
    // focus reveals exactly what hover reveals
    await waitFor(() => expect(style(c.sub).opacity).toBe("1"));
    await waitFor(() => expect(scrimStart(c.scrim)).toBe("0%"));
    await waitFor(() => expect(style(c.arrow).backgroundColor).toBe(WHITE));
    // visited links keep white text
    await expect(style(c.title).color).toBe(WHITE);
    c.element.blur();
    await waitFor(() => expect(style(c.sub).opacity).toBe("0"));
    // no ring after a pointer click (brand QA precedent)
    if (!realPointer.available) return;
    await realPointer.hover(c.element);
    await realPointer.unhover(c.element);
    await expect(style(c.element, "::after").boxShadow).toBe("none");
    await realKeyboard.press("Tab");
  },
};

export const Desktop1280 = {
  name: "Desktop 1280",
  tags: ["!dev"],
  globals: viewport(1280),
  render: () => <Harness html={storiesHtml()} />,
  play: async ({ canvasElement }) => {
    await resizeViewport(1280, 800);
    const p = parts(canvasElement);
    await waitFor(() => expect(progressOf(p.grid)).toBe(1));
    const m = await expectDesktopGrid(p);
    // (800 - 123 - 24) / 2: shorter than Figma's 370 because both rows fit the window
    await near(m.row, 326.5, 0.5);
  },
};

export const Desktop1024 = {
  name: "Desktop 1024",
  tags: ["!dev"],
  globals: viewport(1024),
  render: () => <Harness html={storiesHtml()} />,
  play: async ({ canvasElement }) => {
    await resizeViewport(1024, 768);
    const p = parts(canvasElement);
    await waitFor(() => expect(progressOf(p.grid)).toBe(1));
    const m = await expectDesktopGrid(p);
    // narrower reserve (69px) below 1080px
    await near(
      m.row,
      Math.min((m.cell * 37) / 32, (768 - 69 - 24) / 2, 370),
      0.5
    );
    await expect(
      style(p.section).getPropertyValue("--hp-stories-header-used").trim()
    ).toBe("69px");
  },
};

export const Large1920 = {
  name: "Large 1920",
  globals: viewport(1920),
  render: () => <Harness html={storiesHtml()} />,
  play: async ({ canvasElement }) => {
    await resizeViewport(1920, 1080);
    const p = parts(canvasElement);
    await waitFor(() => expect(progressOf(p.grid)).toBe(1));
    const m = await expectDesktopGrid(p);
    await near(m.row, 370, 0.5);
    // the band exists only above 1920
    await expect(style(p.band).display).toBe("none");
  },
};

export const UltraWide2560 = {
  name: "Ultra-wide 2560",
  globals: viewport(2560),
  render: () => <Harness html={storiesHtml()} />,
  play: async ({ canvasElement }) => {
    await resizeViewport(2560, 1440);
    const p = parts(canvasElement);
    await waitFor(() => expect(progressOf(p.grid)).toBe(1));
    const m = await expectDesktopGrid(p);
    // the grid stops at 1920 (cards 480x370) and is centered
    await near(box(p.grid).width, 1920, 1);
    await near(box(p.cards[0]).width, 480, 1);
    await near(box(p.cards[0]).height, 370, 1);
    const g = box(p.grid);
    await near(g.left, (m.width - 1920) / 2, 1);
    // a Gray 1 topo band as tall as the grid runs behind it
    await expect(style(p.band).display).toBe("block");
    await expect(style(p.band).backgroundColor).toBe(GRAY_1);
    await near(box(p.band).height, g.height, 1);
    await near(box(p.band).width, m.width, 1);
    await expect(style(p.lead).backgroundColor).toBe(GRAY_1);
  },
};

// --- opening (design doc D6) ---

export const OpeningProgress = {
  name: "Opening progress",
  tags: ["!dev"],
  globals: viewport(1440),
  render: () => <Harness before="150vh" after="150vh" html={storiesHtml()} />,
  play: async ({ canvasElement }) => {
    await resizeViewport(1440, 900);
    const p = parts(canvasElement);
    const spacer = canvasElement.lastElementChild;
    const header = px(
      style(p.section).getPropertyValue("--hp-stories-header-used")
    );
    const vh = window.innerHeight;
    const docTop = () => box(p.section).top + window.scrollY;
    const after = () => box(spacer).top + window.scrollY;
    const settle = async target => {
      window.scrollTo({ top: docTop() - target, behavior: "instant" });
      await frame();
      await frame();
    };
    const measure = async top => {
      await settle(top);
      const expected = openingProgress(box(p.section).top, vh, header);
      await waitFor(() => expect(progressOf(p.grid)).toBeCloseTo(expected, 1));
      return {
        p: progressOf(p.grid),
        width: box(p.grid).width,
        radius: px(style(p.grid).borderRadius),
        height: box(p.section).height,
        next: after(),
        section: box(p.section).width,
        clip: style(p.grid).overflow,
      };
    };
    const start = vh * 0.9;
    const end = header + 48;
    const a = await measure(start); // p = 0
    const b = await measure((start + end) / 2); // p = .5
    const c = await measure(end); // p = 1
    await near(a.p, 0, 0.02);
    await near(b.p, 0.5, 0.05);
    await near(c.p, 1, 0.02);
    await near(a.width, a.section - 96, 1);
    await near(c.width, c.section, 1);
    await expect(a.clip).toBe("hidden");
    await expect(c.clip).toBe("visible");
    await near(a.radius, 4, 0.1);
    await near(c.radius, 0, 0.1);
    await expect(b.width).toBeGreaterThan(a.width);
    await expect(b.width).toBeLessThan(c.width);
    // the opening cannot move anything: same section height, same next-sibling position (no layout shift)
    await near(b.height, a.height, 0.5);
    await near(c.height, a.height, 0.5);
    await near(b.next, a.next, 0.5);
    await near(c.next, a.next, 0.5);
    // reversible
    const back = await measure((start + end) / 2);
    await near(back.p, b.p, 0.05);
    // one write per frame under an event burst
    let writes = 0;
    const original = p.grid.style.setProperty.bind(p.grid.style);
    p.grid.style.setProperty = (...args) => {
      writes += 1;
      return original(...args);
    };
    window.scrollTo({ top: docTop() - start + 20, behavior: "instant" });
    for (let i = 0; i < 20; i += 1) window.dispatchEvent(new Event("scroll"));
    await frame();
    await frame();
    await expect(writes).toBeLessThanOrEqual(2);
    delete p.grid.style.setProperty;
  },
};

export const OpeningOff = {
  name: "Opening off",
  tags: ["!dev"],
  globals: viewport(1440),
  render: () => <Harness before="150vh" after="150vh" html={storiesHtml()} />,
  play: async ({ canvasElement }) => {
    await resizeViewport(1440, 900);
    const p = parts(canvasElement);
    const full = () => {
      near(box(p.grid).width, box(p.section).width, 1);
      expect(style(p.grid).borderRadius).toBe("0px");
    };
    // on: the grid below the fold is inset
    await waitFor(() => expect(progressOf(p.grid)).toBe(0));
    // reduced motion: full width, the property is removed, scrolling writes nothing
    await emulateReducedMotion(true);
    await waitFor(() =>
      expect(p.grid.style.getPropertyValue("--hp-stories-progress")).toBe("")
    );
    full();
    window.scrollTo({
      top: box(p.section).top + window.scrollY - 300,
      behavior: "instant",
    });
    await frame();
    await frame();
    await expect(p.grid.style.getPropertyValue("--hp-stories-progress")).toBe(
      ""
    );
    await emulateReducedMotion(false);
    await waitFor(() =>
      expect(p.grid.style.getPropertyValue("--hp-stories-progress")).not.toBe(
        ""
      )
    );
    // tablet (900px and under): full width, no property
    await resizeViewport(900, 900);
    await waitFor(() =>
      expect(p.grid.style.getPropertyValue("--hp-stories-progress")).toBe("")
    );
    full();
    await resizeViewport(901, 900);
    await waitFor(() =>
      expect(p.grid.style.getPropertyValue("--hp-stories-progress")).not.toBe(
        ""
      )
    );
    window.scrollTo({ top: 0, behavior: "instant" });
  },
};

// --- tablet and phone ---

export const Tablet768 = {
  name: "Tablet 768",
  globals: viewport(768),
  render: () => <Harness html={storiesHtml()} />,
  play: async ({ canvasElement }) => {
    await resizeViewport(768, 1024);
    const p = parts(canvasElement);
    await waitFor(() =>
      expect(style(p.grid).gridTemplateColumns.split(" ")).toHaveLength(2)
    );
    const width = box(p.section).width;
    const cellWidth = width / 2;
    const cellHeight = (cellWidth * 37) / 32;
    const g = box(p.grid);
    // the heading tile is the first cell, the seven cards fill 4 rows of 2
    const lead = box(p.lead);
    await near(lead.width, cellWidth, 1);
    await near(lead.height, cellHeight, 1);
    await near(lead.left, g.left, 1);
    p.cards.forEach((element, index) => {
      const b = box(element);
      near(b.width, cellWidth, 1);
      near(b.height, cellHeight, 1);
      near(b.left - g.left, ((index + 1) % 2) * cellWidth, 1);
      near(b.top - g.top, Math.floor((index + 1) / 2) * cellHeight, 1);
    });
    await near(g.height, 4 * cellHeight, 1);
    // the gold promo is row 3, right
    await near(box(p.cards[4]).top - g.top, 2 * cellHeight, 1);
    await near(box(p.cards[4]).left - g.left, cellWidth, 1);
    // no opening, no gaps, square; the page background is white; 32px under the grid
    await expect(style(p.grid).borderRadius).toBe("0px");
    await near(g.width, width, 1);
    await expect(style(p.section).backgroundColor).toBe(WHITE);
    await near(px(style(p.section).paddingBottom), 32, 0.5);
    await expect(p.controls.hidden).toBe(true);
    // the subhead is always shown (no hover on touch); the promo's is visually hidden but in the tree
    p.cards.forEach((_, index) => {
      const c = card(p, index);
      expect(style(c.sub).display).not.toBe("none");
      if (index !== 4) {
        expect(style(c.sub).opacity).toBe("1");
        expect(box(c.sub).height).toBeGreaterThan(20);
      }
      expect(scrimStart(c.scrim)).toBe("0%");
    });
    await expect(box(card(p, 4).sub).height).toBeLessThanOrEqual(1);
    await expect(card(p, 4).element.textContent).toContain(STORIES[4].sub);
  },
};

export const Phone393 = {
  name: "Phone 393",
  globals: viewport(393),
  render: () => <Harness html={storiesHtml()} />,
  play: async ({ canvasElement }) => {
    await resizeViewport(393, 852);
    const p = parts(canvasElement);
    await waitFor(() => expect(style(p.list).display).toBe("flex"));
    const width = box(p.section).width;
    // the tile is full width, 32px/16px padding
    const lead = box(p.lead);
    await near(lead.width, width, 1);
    await near(px(style(p.lead).paddingLeft), 16, 0.5);
    await near(px(style(p.lead).paddingTop), 32, 0.5);
    await expect(style(p.grid).backgroundColor).toBe("rgba(0, 0, 0, 0)");
    await expect(style(p.lead).backgroundColor).toBe(GRAY_1);
    // 16px gap, then the swipe row
    const row = box(p.list);
    await near(row.top - lead.bottom, 16, 1);
    await expect(style(p.list).overflowX).toBe("auto");
    await expect(style(p.list).scrollSnapType).toContain("x mandatory");
    await near(px(style(p.list).paddingLeft), 16, 0.5);
    // 260 x >= 302 cards, flush (no gap), square, no shadow
    p.cards.forEach((element, index) => {
      const b = box(element);
      near(b.width, 260, 1);
      expect(b.height).toBeGreaterThanOrEqual(301.5);
      near(b.left, row.left + 16 + index * 260, 1);
      expect(style(element).borderRadius).toBe("0px");
      expect(style(element).boxShadow).toBe("none");
    });
    await near(box(p.cards[0]).height, 302, 1);
    // subheads always shown, the promo's visually hidden
    await expect(style(card(p, 0).sub).opacity).toBe("1");
    await expect(box(card(p, 4).sub).height).toBeLessThanOrEqual(1);
    // the controls row is visible (the row overflows), 24px under the cards, buttons 48px
    await waitFor(() => expect(p.controls.hidden).toBe(false));
    await near(box(p.controls).top - box(p.cards[0]).bottom, 24, 1.5);
    await near(box(p.prev).width, 48, 0.5);
    await near(box(p.next).height, 48, 0.5);
    await near(px(style(p.section).paddingBottom), 32, 0.5);
    await expect(p.grid.style.getPropertyValue("--hp-stories-progress")).toBe(
      ""
    );
  },
};

export const SwipeControls = {
  name: "Swipe controls",
  tags: ["!dev"],
  globals: viewport(393),
  render: () => <Harness html={storiesHtml()} />,
  play: async ({ canvasElement }) => {
    await resizeViewport(393, 852);
    const p = parts(canvasElement);
    await waitFor(() => expect(p.controls.hidden).toBe(false));
    const row = p.list;
    // at the start: Previous is aria-disabled (still focusable), Next is not
    await waitFor(() =>
      expect(p.prev.getAttribute("aria-disabled")).toBe("true")
    );
    await expect(p.next.getAttribute("aria-disabled")).toBe("false");
    await expect(p.prev.disabled).toBe(false);
    // Next scrolls one card
    p.next.click();
    await waitFor(() => near(row.scrollLeft, 260, 2), { timeout: 3000 });
    await waitFor(() =>
      expect(p.prev.getAttribute("aria-disabled")).toBe("false")
    );
    p.prev.click();
    await waitFor(() => near(row.scrollLeft, 0, 2), { timeout: 3000 });
    // at the end: Next is aria-disabled, a click does nothing, and focus stays on the button
    row.scrollLeft = row.scrollWidth;
    await waitFor(() =>
      expect(p.next.getAttribute("aria-disabled")).toBe("true")
    );
    p.next.focus();
    const end = row.scrollLeft;
    p.next.click();
    await frame();
    await frame();
    await expect(row.scrollLeft).toBe(end);
    await expect(document.activeElement).toBe(p.next);
    // focusing an off-screen card scrolls it into view (the row is not a trap)
    row.scrollLeft = 0;
    await frame();
    p.cards[6].focus();
    await waitFor(() => expect(row.scrollLeft).toBeGreaterThan(300));
    // reduced motion: no smooth scrolling
    row.scrollLeft = 0;
    await emulateReducedMotion(true);
    await frame();
    p.next.click();
    await waitFor(() => near(row.scrollLeft, 260, 2), { timeout: 500 });
    await emulateReducedMotion(false);
    // the buttons' focus ring is white + Gray 1 (visible on the white page)
    p.prev.focus();
    await expect(style(p.prev).boxShadow).toBe(
      "rgb(255, 255, 255) 0px 0px 0px 2px, rgb(25, 25, 25) 0px 0px 0px 4px"
    );
    // above 600px the controls go away; a focused button hands focus to the first card
    p.next.focus();
    await resizeViewport(601, 900);
    await waitFor(() => expect(p.controls.hidden).toBe(true));
    await expect(document.activeElement).toBe(p.cards[0]);
  },
};

export const BreakpointCrossing = {
  name: "Breakpoint crossing",
  tags: ["!dev"],
  globals: viewport(1440),
  render: () => <Harness before="150vh" after="150vh" html={storiesHtml()} />,
  play: async ({ canvasElement }) => {
    await resizeViewport(1440, 900);
    const p = parts(canvasElement);
    const progress = () =>
      p.grid.style.getPropertyValue("--hp-stories-progress");
    await waitFor(() => expect(progress()).not.toBe(""));
    // 901 -> 900: opening off, two columns
    await resizeViewport(900, 900);
    await waitFor(() => expect(progress()).toBe(""));
    await expect(style(p.grid).gridTemplateColumns.split(" ")).toHaveLength(2);
    await expect(p.controls.hidden).toBe(true);
    // 900 -> 600 -> 601: the controls follow the 600px boundary on their own
    await resizeViewport(600, 900);
    await waitFor(() => expect(p.controls.hidden).toBe(false));
    await resizeViewport(601, 900);
    await waitFor(() => expect(p.controls.hidden).toBe(true));
    await expect(style(p.grid).gridTemplateColumns.split(" ")).toHaveLength(2);
    // back up: the opening returns
    await resizeViewport(901, 900);
    await waitFor(() => expect(progress()).not.toBe(""));
    await expect(style(p.grid).gridTemplateColumns.split(" ")).toHaveLength(4);
  },
};

// --- script contract ---

export const InitContract = {
  name: "Init contract",
  tags: ["!dev"],
  globals: viewport(1440),
  render: () => (
    <>
      <Harness manual html={storiesHtml({ id: "stories-a" })} />
      <Harness manual before="150vh" html={storiesHtml({ id: "stories-b" })} />
    </>
  ),
  play: async ({ canvasElement }) => {
    await resizeViewport(1440, 900);
    const sections = Array.from(
      canvasElement.querySelectorAll("section.hp-stories")
    );
    await expect(sections).toHaveLength(2);
    await expect(sections[0].getAttribute("aria-labelledby")).toBe("stories-a");
    await expect(sections[1].getAttribute("aria-labelledby")).toBe("stories-b");
    await expect(document.querySelectorAll("#stories-a")).toHaveLength(1);
    const [first, second] = sections.map(section =>
      section.querySelector(".hp-stories__grid")
    );
    const value = grid => grid.style.getPropertyValue("--hp-stories-progress");
    // idempotent: a second call binds nothing new
    const cleanup = initStories(canvasElement);
    const again = initStories(canvasElement);
    await waitFor(() => expect(value(first)).not.toBe(""));
    await waitFor(() => expect(value(second)).not.toBe(""));
    // two instances are independent: the first is at the top (open), the second is below the fold (inset)
    await expect(parseFloat(value(first))).toBe(1);
    await expect(parseFloat(value(second))).toBe(0);
    again();
    // cleanup removes the property and hides the controls
    cleanup();
    await expect(value(first)).toBe("");
    await expect(value(second)).toBe("");
    sections.forEach(section =>
      expect(section.querySelector(".hp-stories__controls").hidden).toBe(true)
    );
    // calling cleanup twice is harmless
    cleanup();
    // and the public entry exports it
    await expect(entry.initStories === initStories).toBe(true);
  },
};

export const StylesheetContract = {
  name: "Stylesheet contract",
  tags: ["!dev"],
  globals: viewport(1440),
  render: () => <Harness html={storiesHtml()} />,
  play: async ({ canvasElement }) => {
    await resizeViewport(1440, 900);
    const p = parts(canvasElement);
    const c = card(p, 0);
    // timings from the Figma hover spec and the ticket (0.4s height, 0.3s opacity, 0.25s chip)
    await expect(style(c.wrap).transitionProperty).toBe("grid-template-rows");
    await expect(style(c.wrap).transitionDuration).toBe("0.4s");
    await expect(style(c.wrap).transitionTimingFunction).toBe(
      "cubic-bezier(0.4, 0, 0.2, 1)"
    );
    await expect(style(c.sub).transitionProperty).toBe("opacity");
    await expect(style(c.sub).transitionDuration).toBe("0.3s");
    await expect(style(c.arrow).transitionProperty).toBe(
      "background-color, color"
    );
    await expect(style(c.arrow).transitionDuration).toBe("0.25s, 0.25s");
    await expect(style(c.scrim).transitionProperty).toBe(
      "--hp-stories-scrim-start"
    );
    await expect(style(c.scrim).transitionDuration).toBe("0.4s");
    // containment keeps the width change inside the grid; the section is the size container
    await expect(style(p.grid).contain).toContain("layout");
    await expect(style(p.section).containerType).toBe("inline-size");
    // the scrim is an alpha gradient (no blend mode)
    await expect(style(c.scrim).mixBlendMode).toBe("normal");
    await expect(style(c.scrim).backgroundImage).toContain("linear-gradient");
    // desktop-first: no min-width rule for this component (design doc D17 of the hero, D7 here)
    const offenders = [];
    walkRules((rule, conditions) => {
      if (
        /\.hp-stories/.test(rule.selectorText) &&
        conditions.some(condition => /min-width/.test(condition))
      ) {
        offenders.push(`${conditions.join(" and ")} ${rule.selectorText}`);
      }
    });
    // nothing to hover (touch screens of any width, tablets, phones): the subhead is always shown and the
    // scrim is full height. A story cannot emulate touch input here (the runner's emulation session is shared
    // by parallel files), so the media query itself is asserted.
    let touchRule = false;
    walkRules((rule, conditions) => {
      if (
        rule.selectorText === ".hp-stories__card .hp-stories__sub" &&
        conditions.some(
          condition =>
            condition.includes("hover: none") &&
            condition.includes("max-width: 900px")
        )
      ) {
        touchRule = rule.style.opacity === "1";
      }
    });
    await expect(touchRule).toBe(true);
    // the 1921px band is the one documented exception (it lives in the foundations' `.hp-topo--band` rule)
    await expect(offenders).toEqual([]);
  },
};

export const Fallbacks = {
  tags: ["!dev"],
  globals: viewport(1440),
  render: () => <Harness manual before="150vh" html={storiesHtml()} />,
  play: async ({ canvasElement }) => {
    await resizeViewport(1440, 900);
    const p = parts(canvasElement);
    const progress = () =>
      p.grid.style.getPropertyValue("--hp-stories-progress");
    const { IntersectionObserver: observer, matchMedia } = window;
    try {
      // no IntersectionObserver: stay static (full width), never a permanent scroll listener
      window.IntersectionObserver = undefined;
      let cleanup = initStories(canvasElement);
      await expect(progress()).toBe("");
      await near(box(p.grid).width, box(p.section).width, 1);
      cleanup();
      window.IntersectionObserver = observer;
      // no matchMedia: counts as a phone (no opening, no controls)
      window.matchMedia = undefined;
      cleanup = initStories(canvasElement);
      await expect(progress()).toBe("");
      await expect(p.controls.hidden).toBe(true);
      cleanup();
    } finally {
      window.IntersectionObserver = observer;
      window.matchMedia = matchMedia;
    }
  },
};

// --- promo, zoom and contrast ---

export const PromoCard = {
  name: "Promo card",
  tags: ["!dev"],
  globals: viewport(1440),
  render: () => <Harness html={storiesHtml()} />,
  play: async ({ canvasElement }) => {
    await resizeViewport(1440, 900);
    const p = parts(canvasElement);
    const promo = card(p, 4);
    await expect(promo.img.getAttribute("alt")).toBe(PROMO_ALT);
    await expect(promo.img.getAttribute("src")).toBe(photoSrc(6));
    await expect(promo.arrow).toBeTruthy();
    await expect(promo.scrim).toBeTruthy();
    // the same hover pattern as the news cards
    await expect(style(promo.sub).opacity).toBe("0");
    forceHover(promo.element);
    await waitFor(() => expect(style(promo.sub).opacity).toBe("1"));
    await waitFor(() => expect(scrimStart(promo.scrim)).toBe("0%"));
    forceHover(promo.element, false);
    // the link's text (its accessible name) does not change with the width
    const name = `${promo.img.alt} ${promo.element.textContent}`;
    await resizeViewport(768, 1024);
    await waitFor(() =>
      expect(style(p.grid).gridTemplateColumns.split(" ")).toHaveLength(2)
    );
    await expect(`${promo.img.alt} ${promo.element.textContent}`).toBe(name);
    await expect(box(promo.sub).height).toBeLessThanOrEqual(1);
    // at tablet width the hidden subhead leaves no gap under the title, hovered or not
    forceHover(promo.element);
    await waitFor(() =>
      near(
        box(promo.element).bottom - box(promo.title).bottom,
        px(style(promo.text).paddingBottom),
        1
      )
    );
    forceHover(promo.element, false);
    await expect(style(promo.sub).display).not.toBe("none");
  },
};

export const ZoomAndSpacing = {
  name: "Zoom and text spacing",
  tags: ["!dev"],
  globals: viewport(1024),
  render: () => <Harness html={storiesHtml()} />,
  play: async ({ canvasElement }) => {
    await resizeViewport(901, 600);
    const p = parts(canvasElement);
    const c = card(p, 0);
    await waitFor(() => expect(progressOf(p.grid)).toBe(1));
    // the type unit never falls below the .875 floor: the title stays >= 21px (large text), the subhead >= 14px
    await expect(px(style(c.title).fontSize)).toBeGreaterThanOrEqual(20.99);
    forceHover(c.element);
    await expect(px(style(c.sub).fontSize)).toBeGreaterThanOrEqual(13.99);
    // WCAG 1.4.12 overrides: a long title grows its card instead of being clipped
    const override = document.createElement("style");
    override.textContent =
      ".hp-stories * { line-height: 1.5 !important; letter-spacing: 0.12em !important; word-spacing: 0.16em !important; } .hp-stories p { margin-bottom: 2em !important; }";
    document.head.appendChild(override);
    try {
      c.title.textContent =
        "A new generation of physician-engineers begins at ASU and reshapes how medicine is taught";
      await waitFor(() => {
        const t = box(c.text);
        const e = box(c.element);
        expect(t.top).toBeGreaterThanOrEqual(e.top - 0.5);
        expect(t.bottom).toBeLessThanOrEqual(e.bottom + 0.5);
      });
      await expect(box(c.element).height).toBeGreaterThan(
        metrics(p.section).row
      );
    } finally {
      override.remove();
    }
  },
};

export const ContrastBudget = {
  name: "Contrast budget",
  tags: ["!dev"],
  globals: viewport(1440),
  render: () => <Harness html={storiesHtml()} />,
  play: async ({ canvasElement }) => {
    // The constants below must be the ones the stylesheet renders: scrim stops and the text's position.
    await resizeViewport(1440, 900);
    const p = parts(canvasElement);
    const c = card(p, 0);
    await expect(scrimStart(c.scrim)).toBe("50%");
    await expect(style(c.scrim).backgroundImage).toContain(
      "rgba(0, 0, 0, 0.77)"
    );
    await near(box(c.element).height, 370, 1);
    await near(
      box(c.element).bottom -
        box(c.title).bottom -
        px(style(c.text).paddingBottom),
      0,
      1
    );
    await near(px(style(c.text).paddingBottom), 24, 0.5);
    await near(px(style(c.title).lineHeight), 26, 0.5);
    // Geometry of a 370px card: the title block ends 24px above the bottom, 26px per line.
    const firstLine = lines => 1 - (24 + 26 * lines) / 370;
    // Rest: the first line of a three-line title sits where the scrim has reached about 45% of its ramp.
    const rest = scrimMultiplier(firstLine(3), SCRIM_REST_START);
    await near(rest, 0.6551, 0.005);
    // the large-text bar (3:1) tolerates a photo gray up to about 227 there (white lab coats exceed it)
    await near(maxPhotoGray(rest, 3), 227, 2);
    // a one-line title sits lower, where the scrim is stronger: pure white passes
    await expect(
      maxPhotoGray(scrimMultiplier(firstLine(1), SCRIM_REST_START), 3)
    ).toBeGreaterThanOrEqual(254);
    // hover/touch: the scrim covers the whole card, so even a three-line title over pure white passes 3:1
    await expect(
      maxPhotoGray(scrimMultiplier(firstLine(3), 0), 3)
    ).toBeGreaterThanOrEqual(254);
    // the subhead (4.5:1) exists only with the full-height scrim: the worst case is its first line
    // after a one-line title and a two-line subhead (24px lines)
    const subFirst = 1 - (24 + 24 * 2) / 370;
    await expect(
      maxPhotoGray(scrimMultiplier(subFirst, 0), 4.5)
    ).toBeGreaterThan(250);
    // the threshold follows the rendered size: 24px bold and the 21px floor are large text, 14px is not
    await expect(requiredRatio(24)).toBe(3);
    await expect(requiredRatio(21)).toBe(3);
    await expect(requiredRatio(16, false)).toBe(4.5);
    await expect(requiredRatio(14)).toBe(4.5);
  },
};
