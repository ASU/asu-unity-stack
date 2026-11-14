import React from "react";
import { expect, waitFor } from "storybook/test";

import {
  Harness,
  GA_COMPONENT,
  GROUPS,
  LOCATIONS,
  SECTION_HEADING,
  emulateReducedMotion,
  glassContrast,
  openingProgress,
  placesHtml,
  realPointer,
  resizeViewport,
  watchTransitions,
} from "./places-helpers.jsx";
import * as entry from "../../js/index.js";

export default {
  title: "Homepage/Places",
  // Every story leaves the page where it found it: scrolled to the top, no motion emulation.
  beforeEach: () => async () => {
    window.scrollTo({ top: 0, behavior: "instant" });
    await emulateReducedMotion(false);
  },
  parameters: {
    docs: {
      description: {
        component:
          'Homepage campus locator ("One university, many places"). From 1024px a looping video (shared play/pause control) starts inset by the 48px gutter and opens to full width as it scrolls into view; a frosted panel holds the heading, two buttons and the seven locations in two groups. Choosing a location (click or keyboard, never hover) crossfades its photo over the video (0.6s), draws a gold leader line (0.4s) to a description box (fades in 0.3s after 0.2s) with a link; Esc, the close button, a second click or an outside click returns to the video, and so does scrolling more than 48px from where the box opened (a scroll caused by moving focus does not). While a campus is selected a still replaces the video and the play/pause control is hidden until the box is closed. Below 1024px (Figma 375, brand: Figma is the source of truth, no carousel) the same list is an accordion on Gray 1: each name has a chevron and a rule, one location is open at a time with its text, link and photo (all start collapsed); a 375:219 video strip with the pause button at its bottom right sits above the list. The section draws the Learn network wallpaper behind it (desktop). Without script every location is open and stacked. `initPlaces` and `initVideoControls` wire it. Sample photos, poster and clip are the prototype media; `href`s are placeholders.',
      },
    },
  },
};

const viewport = width => ({
  viewport: { value: `hp${width}`, isRotated: false },
});

const WHITE = "rgb(255, 255, 255)";
const GOLD = "rgb(255, 198, 39)";
const GRAY_1 = "rgb(25, 25, 25)";

const near = (actual, expected, tolerance = 1) =>
  expect(Math.abs(actual - expected)).toBeLessThanOrEqual(tolerance);

const box = element => element.getBoundingClientRect();
const style = (element, pseudo) => getComputedStyle(element, pseudo);

const parts = canvasElement => {
  const section = canvasElement.querySelector("section.hp-places");
  const find = selector => section.querySelector(selector);
  const list = selector => Array.from(section.querySelectorAll(selector));
  return {
    section,
    frame: find(".hp-places__frame"),
    panel: find(".hp-places__panel"),
    heading: find(".hp-places__heading"),
    media: find(".hp-places__media"),
    video: find(".hp-places__video"),
    mbtn: find(".hp-places__mbtn"),
    stills: list(".hp-places__still"),
    items: list(".hp-places__item"),
    names: list(".hp-places__name"),
    details: list(".hp-places__detail"),
    boxes: list(".hp-places__box"),
    closes: list(".hp-places__close"),
    photos: list(".hp-places__photo"),
    chevrons: list(".hp-places__chevron"),
    wall: find(".hp-places__wall"),
  };
};

const progressOf = media =>
  parseFloat(media.style.getPropertyValue("--hp-places-progress"));

// Contract that holds with or without script and at every width.
const expectContract = async p => {
  await expect(p.section.getAttribute("aria-labelledby")).toBe(p.heading.id);
  await expect(p.section.querySelectorAll("h2")).toHaveLength(1);
  await expect(p.heading.textContent).toBe(SECTION_HEADING);
  await expect(p.names).toHaveLength(LOCATIONS.length);
  await expect(p.photos).toHaveLength(LOCATIONS.length);
  // every photo has its own alt text (WCAG 1.1.1)
  p.photos.forEach((photo, i) => {
    expect(LOCATIONS[i].alt.length).toBeGreaterThan(20);
    expect(photo.getAttribute("alt")).toBe(LOCATIONS[i].alt);
  });
  // data layer: every link and button carries the full attribute set (asucms datalayer.md)
  const clickable = Array.from(p.section.querySelectorAll("a[href], button"));
  await expect(clickable.length).toBeGreaterThan(20);
  clickable.forEach(element => {
    const video = element.classList.contains("mbtn");
    expect(element.getAttribute("data-ga-name")).toBe("onclick");
    expect(["link", "select", "collapse"]).toContain(
      element.getAttribute("data-ga-event")
    );
    expect(["click", "open", "close"]).toContain(
      element.getAttribute("data-ga-action")
    );
    expect(element.getAttribute("data-ga-type")).toBe("internal link");
    expect(element.getAttribute("data-ga-region")).toBe("main content");
    expect(element.getAttribute("data-ga-section")).toBe(
      SECTION_HEADING.toLowerCase()
    );
    expect(element.getAttribute("data-ga-component")).toBe(
      video ? "homepage video control" : GA_COMPONENT
    );
    if (video) {
      expect(["play button", "pause button"]).toContain(
        element.getAttribute("data-ga-text")
      );
    }
    expect(element.getAttribute("data-ga-text")).toBeTruthy();
    expect(element.hasAttribute("data-ga")).toBe(false);
  });
};

// --- server markup ---

export const NoScript = {
  name: "No script (server markup)",
  globals: viewport(393),
  render: () => <Harness manual html={placesHtml()} />,
  play: async ({ canvasElement }) => {
    await resizeViewport(393, 852);
    const p = parts(canvasElement);
    await expectContract(p);
    await expect(p.section.classList.contains("is-enhanced")).toBe(false);
    // the stacked baseline on Gray 1: the intro, then every location open; nothing that needs script
    await expect(style(p.section).backgroundColor).toBe(GRAY_1);
    await expect(style(p.media).display).toBe("none");
    await expect(style(p.mbtn).display).toBe("none");
    await expect(p.details.every(detail => !detail.hidden)).toBe(true);
    await expect(p.names.some(n => n.hasAttribute("aria-expanded"))).toBe(
      false
    );
    await expect(
      p.photos.every(photo => style(photo).display === "block")
    ).toBe(true);
    await expect(box(p.items[1]).top).toBeGreaterThan(box(p.items[0]).top);
    // the names do nothing without script: no chevron, and each one points at its detail
    await expect(
      p.chevrons.every(chevron => style(chevron).display === "none")
    ).toBe(true);
    p.names.forEach((name, i) => {
      expect(document.getElementById(name.getAttribute("aria-controls"))).toBe(
        p.details[i]
      );
    });
    // the same at the desktop width: script-only layout is not applied
    await resizeViewport(1440, 900);
    await expect(style(p.media).display).toBe("none");
    await expect(style(p.section).backgroundColor).toBe(GRAY_1);
  },
};

// --- desktop ---

export const Default = {
  globals: viewport(1440),
  render: () => <Harness before="60vh" after="60vh" html={placesHtml()} />,
  play: async ({ canvasElement }) => {
    await resizeViewport(1440, 900);
    const p = parts(canvasElement);
    await expectContract(p);
    await expect(p.section.classList.contains("is-enhanced")).toBe(true);
    // the frosted panel: 347 wide, overhanging the media by 24px, starting 24px below its top
    const m = box(p.media);
    const panel = box(p.panel);
    await near(panel.width, 347, 1);
    await near(panel.left, m.left + 24, 1);
    await near(panel.top, m.top + 24, 1);
    // names are toggle buttons, nothing selected; the accordion parts are not shown
    p.names.forEach(name => {
      expect(name.getAttribute("aria-pressed")).toBe("false");
      expect(name.hasAttribute("aria-expanded")).toBe(false);
      expect(box(name).height).toBeGreaterThanOrEqual(44);
    });
    await expect(p.details.every(detail => detail.hidden)).toBe(true);
    await expect(
      p.chevrons.every(chevron => style(chevron).display === "none")
    ).toBe(true);
    await expect(p.photos.every(photo => style(photo).display === "none")).toBe(
      true
    );
    await expect(p.stills.every(still => style(still).opacity === "0")).toBe(
      true
    );
    // an unselected still is decorative: no alt text in the accessibility tree
    await expect(
      p.stills.every(still => still.getAttribute("alt") === "")
    ).toBe(true);
    // the control is revealed once a source is attached (a clip that fails to load, as in this runner, hides it)
    await waitFor(() =>
      expect(p.video.getAttribute("src")).toContain("locations.mp4")
    );
    // the wallpaper layer is decorative and behind the section
    await expect(p.wall.getAttribute("aria-hidden")).toBe("true");
    await expect(style(p.wall).pointerEvents).toBe("none");
    await expect(style(p.wall).backgroundImage).toContain("learn-bg");
  },
};

export const Selected = {
  name: "Location selected",
  globals: viewport(1440),
  render: () => <Harness before="40vh" after="40vh" html={placesHtml()} />,
  play: async ({ canvasElement }) => {
    await resizeViewport(1440, 900);
    const p = parts(canvasElement);
    p.names[0].click();
    await waitFor(() =>
      expect(p.items[0].classList.contains("is-shown")).toBe(true)
    );
    await expect(p.names[0].getAttribute("aria-pressed")).toBe("true");
    await expect(p.stills[0].getAttribute("src")).toContain("place-tempe");
    // the selected still carries the photo's alt text, the others stay empty
    await expect(p.stills[0].getAttribute("alt")).toBe(LOCATIONS[0].alt);
    await expect(
      p.stills.slice(1).every(still => still.getAttribute("alt") === "")
    ).toBe(true);
    await waitFor(() => expect(style(p.stills[0]).opacity).toBe("1"));
    await waitFor(() => expect(style(p.video).opacity).toBe("0"));
    await expect(p.video.hasAttribute("data-hold")).toBe(true);
    await expect(style(p.names[0]).borderBottomColor).toBe(GOLD);
    // the box meets the leader: its top is the name's bottom minus the 4px rule, its left the panel's right edge
    await waitFor(() => expect(style(p.boxes[0]).opacity).toBe("1"));
    const name = box(p.names[0]);
    const b = box(p.boxes[0]);
    await near(b.top, name.bottom - 4, 1);
    await near(b.left, box(p.panel).right, 1);
    // no stroke between the panel and the box while it is open (brand QA 2026-11-09, places-gap.png)
    await expect(style(p.panel).borderRightColor).toBe("rgba(0, 0, 0, 0)");
    await near(b.width, 347, 1);
    const leader = style(p.details[0], "::before");
    await expect(leader.backgroundColor).toBe(GOLD);
  },
};

export const ContentDocAlt = {
  name: "Alt text matches the content doc",
  globals: viewport(1440),
  render: () => <Harness html={placesHtml()} />,
  play: async ({ canvasElement }) => {
    const p = parts(canvasElement);
    const alt = name => p.photos[LOCATIONS.findIndex(l => l.name === name)];
    // Content doc 2026-11-09 ("Ready for devs"): Tempe names Mountain America Stadium, LA names the building.
    await expect(alt("Tempe").getAttribute("alt")).toBe(
      "Aerial views of Arizona State University’s Tempe campus and Mountain America Stadium, along with students exploring a rocky outdoor area and an ASU building exterior."
    );
    await expect(alt("Los Angeles").getAttribute("alt")).toBe(
      "Aerial view of the California Center Grand building, a white multistory structure surrounded by trees and a lawn in downtown Los Angeles."
    );
    await expect(alt("Washington, D.C.").getAttribute("alt")).toBe(
      "The ASU Washington, D.C., building, a historic stone building with illuminated cornices and the ASU sign, on a busy street corner."
    );
    // the video is described by the content doc's b-roll description, not the Tempe photo's
    const description = p.section.querySelector(
      `#${p.video.getAttribute("aria-describedby")}`
    );
    await expect(description.textContent).toBe(
      "A video showcasing ASU’s locations and campuses including Tempe, Downtown Phoenix, Polytechnic, West Valley, Los Angeles and more."
    );
  },
};

export const ContentDocCopy = {
  name: "Copy matches the content doc",
  globals: viewport(1440),
  render: () => <Harness html={placesHtml()} />,
  play: async ({ canvasElement }) => {
    const p = parts(canvasElement);
    // Content doc 2026-11-09 ("Ready for devs"); the doc's West Valley line has no final period (added here).
    const captions = Array.from(
      p.section.querySelectorAll(".hp-places__caption")
    ).map(caption => caption.textContent);
    await expect(captions).toEqual([
      "The flagship campus — a walkable, tree-lined home to more than 55,000 Sun Devils.",
      "An urban campus woven into the city core, home to journalism, health and public service.",
      "An Oxford-inspired campus serving the dynamic workforce needs of a rapidly growing economy.",
      "A hands-on campus for engineering, aviation and applied technology, turning ideas into real things.",
      "A creative foothold in the entertainment capital, home to film, fashion, media and design.",
      "A launchpad into government, policy and law, just blocks from the White House.",
      "A global gateway in the heart of London, where you can earn two international degrees.",
    ]);
    const labels = Array.from(
      p.section.querySelectorAll(".hp-places__group-label")
    );
    await expect(labels.map(label => label.textContent)).toEqual([
      "Phoenix metro area campuses",
      "U.S. and international",
    ]);
    // Figma is 0%; the theme h3 would otherwise tighten the gold headings to -0.84px (brand QA 2026-11-05).
    // Chrome serialises a computed 0 as "normal".
    labels.forEach(label =>
      expect(["normal", "0px"]).toContain(style(label).letterSpacing)
    );
  },
};

export const ScrollOpening = {
  name: "Scroll opening",
  globals: viewport(1440),
  render: () => (
    <Harness before="120vh" after="120vh" html={placesHtml()} header="147px" />
  ),
  parameters: {
    docs: {
      description: {
        story:
          "The section sits between blank spacers so the real motion can be scrolled: the video is inset 48px with 4px corners when it enters at the bottom of the window and reaches full width as it rises under the header. It reverses on scroll up; the list does not move and scrolling never changes a selection.",
      },
    },
  },
  play: async ({ canvasElement }) => {
    await resizeViewport(1440, 900);
    const p = parts(canvasElement);
    await waitFor(() => expect(progressOf(p.media)).toBe(0));
    await expect(p.media.classList.contains("is-opening")).toBe(true);
    await expect(style(p.media).clipPath).toContain("inset");
  },
};

export const Desktop1024 = {
  name: "Desktop 1024",
  tags: ["!dev"],
  globals: viewport(1024),
  render: () => <Harness html={placesHtml()} />,
  play: async ({ canvasElement }) => {
    await resizeViewport(1024, 768);
    const p = parts(canvasElement);
    await expect(style(p.media).display).toBe("block");
    await expect(box(p.panel).width).toBe(347);
    await expect(box(p.frame).width).toBe(1024);
  },
};

export const Large1920 = {
  name: "Large 1920",
  globals: viewport(1920),
  render: () => <Harness html={placesHtml()} />,
  play: async ({ canvasElement }) => {
    await resizeViewport(1920, 1080);
    const p = parts(canvasElement);
    await expect(box(p.frame).width).toBe(1920);
    await near(box(p.panel).left, box(p.media).left + 24, 1);
  },
};

export const Above1920 = {
  name: "Above 1920 (capped)",
  globals: viewport(2560),
  render: () => <Harness html={placesHtml()} />,
  play: async ({ canvasElement }) => {
    await resizeViewport(2560, 1440);
    const p = parts(canvasElement);
    await expect(box(p.frame).width).toBe(1920);
    await near(box(p.frame).left, 320, 1);
    // the wallpaper still spans the viewport
    await near(box(p.wall).width, 2560, 1);
  },
};

// --- below 1024: the Figma 375 accordion ---

const accordionPlay =
  width =>
  async ({ canvasElement }) => {
    await resizeViewport(width, 852);
    const p = parts(canvasElement);
    await expectContract(p);
    await expect(p.section.classList.contains("is-enhanced")).toBe(true);
    await expect(style(p.section).backgroundColor).toBe(GRAY_1);
    // Figma mobile (Background 13472:63645): a full-width 375:219 video strip directly above the list
    await expect(style(p.media).display).toBe("block");
    await waitFor(() =>
      expect(p.video.getAttribute("src")).toContain("locations.mp4")
    );
    const strip = box(p.media);
    await near(strip.width, width, 1);
    await near(strip.height, (strip.width * 219) / 375, 1);
    await expect(strip.bottom).toBeLessThanOrEqual(box(p.panel).top + 1);
    // the pause control sits over the strip's bottom right (Figma: 18px / 12px) with a 48px hit area; it is
    // hidden until the clip loads, which the runner may not manage
    p.mbtn.hidden = false;
    const control = box(p.mbtn);
    await near(strip.right - control.right, 18, 1);
    await near(strip.bottom - control.bottom, 12, 1);
    await expect(
      parseFloat(style(p.mbtn, "::after").width)
    ).toBeGreaterThanOrEqual(48);
    p.mbtn.hidden = true;
    await expect(p.stills.every(still => style(still).display === "none")).toBe(
      true
    );
    await expect(style(p.wall).display).toBe("none");
    // names are disclosure buttons; every location starts collapsed (brand decision 2026-11-05)
    p.names.forEach(name => {
      expect(name.getAttribute("aria-expanded")).toBe("false");
      expect(name.hasAttribute("aria-pressed")).toBe(false);
      expect(box(name).height).toBeGreaterThanOrEqual(44);
    });
    await expect(p.details.every(detail => detail.hidden)).toBe(true);
    await expect(
      p.names.every(
        name => style(name).borderBottomColor === WHITE && box(name).width < 600
      )
    ).toBe(true);
    await expect(p.chevrons.every(c => style(c).transform === "none")).toBe(
      true
    );
    // open one: gold rule across the panel, chevron up
    p.names[0].click();
    await expect(p.names[0].getAttribute("aria-expanded")).toBe("true");
    await expect(p.details[0].hidden).toBe(false);
    const side = width >= 768 ? 48 : 16 + 8;
    const panelContent = width - 2 * side;
    await near(box(p.names[0]).width, panelContent, 1);
    await expect(style(p.names[0]).borderBottomColor).toBe(GOLD);
    await expect(box(p.names[1]).width).toBeLessThan(panelContent);
    await expect(style(p.chevrons[0]).transform).not.toBe("none");
    // the open photo keeps the Figma 327:219 ratio, at most 480 wide
    const photo = box(p.photos[0]);
    await near(photo.width, Math.min(480, panelContent), 1);
    await near(photo.height, (photo.width * 219) / 327, 1);
    // no horizontal overflow
    await expect(document.documentElement.scrollWidth).toBeLessThanOrEqual(
      width
    );
  };

export const Phone393 = {
  name: "Phone 393",
  globals: viewport(393),
  render: () => <Harness html={placesHtml()} />,
  play: accordionPlay(393),
};

export const Phone375 = {
  name: "Phone 375 (Figma frame)",
  tags: ["!dev"],
  globals: viewport(393),
  render: () => <Harness html={placesHtml()} />,
  play: async ({ canvasElement }) => {
    await resizeViewport(375, 812);
    const p = parts(canvasElement);
    // Figma 13824:1800: collapsed rows 60px apart; an open row spans the 327px content, its photo 327x219
    await near(box(p.names[2]).top - box(p.names[1]).top, 60, 2);
    p.names[0].click();
    await near(box(p.names[0]).width, 327, 1);
    await near(box(p.photos[0]).width, 327, 1);
    await near(box(p.photos[0]).height, 219, 1);
    await near(style(p.heading).fontSize.replace("px", ""), 32, 0);
  },
};

export const Tablet768 = {
  name: "Tablet 768",
  globals: viewport(768),
  render: () => <Harness html={placesHtml()} />,
  play: accordionPlay(768),
};

export const Tablet1023 = {
  name: "Tablet 1023",
  globals: viewport(1023),
  render: () => <Harness html={placesHtml()} />,
  play: accordionPlay(1023),
};

export const AccordionBehaviour = {
  name: "Accordion: one open at a time",
  tags: ["!dev"],
  globals: viewport(393),
  render: () => <Harness html={placesHtml()} />,
  play: async ({ canvasElement }) => {
    await resizeViewport(393, 852);
    const p = parts(canvasElement);
    const expanded = () => p.names.map(n => n.getAttribute("aria-expanded"));
    // one open at a time: opening a second closes the first
    p.names[0].click();
    p.names[1].click();
    await expect(expanded()).toEqual(
      LOCATIONS.map((_, i) => (i === 1 ? "true" : "false"))
    );
    await expect(p.details[0].hidden).toBe(true);
    await expect(p.details[1].hidden).toBe(false);
    // the data layer follows the widget: open / close below 1024
    await expect(p.names[1].getAttribute("data-ga-event")).toBe("collapse");
    await expect(p.names[1].getAttribute("data-ga-action")).toBe("close");
    await expect(p.names[0].getAttribute("data-ga-action")).toBe("open");
    // keyboard: a focused name toggles with Enter or Space (native button) and keeps focus
    p.names[2].focus();
    p.names[2].click();
    await expect(document.activeElement).toBe(p.names[2]);
    await expect(p.names[2].getAttribute("aria-expanded")).toBe("true");
    p.names[1].click();
    // a second press collapses it
    p.names[1].click();
    await expect(expanded().every(state => state === "false")).toBe(true);
    await expect(p.details.every(detail => detail.hidden)).toBe(true);
    // the last location in the second group opens too
    const last = LOCATIONS.length - 1;
    p.names[last].click();
    await expect(p.names[last].getAttribute("aria-expanded")).toBe("true");
    await expect(style(p.names[last]).borderBottomColor).toBe(GOLD);
  },
};

export const BreakpointCrossing = {
  name: "Breakpoint crossing 1023/1024",
  tags: ["!dev"],
  globals: viewport(1440),
  render: () => <Harness html={placesHtml()} />,
  play: async ({ canvasElement }) => {
    await resizeViewport(1440, 900);
    const p = parts(canvasElement);
    p.names[2].click();
    await waitFor(() => expect(p.video.hasAttribute("data-hold")).toBe(true));
    await resizeViewport(1023, 800);
    // the accordion: no selection or hold carried over, the video still attached, everything collapsed
    await waitFor(() =>
      expect(box(p.media).bottom).toBeLessThanOrEqual(box(p.panel).top + 1)
    );
    await waitFor(() =>
      expect(p.video.getAttribute("src")).toContain("locations.mp4")
    );
    await waitFor(() => expect(p.video.hasAttribute("data-hold")).toBe(false));
    await expect(
      p.names.every(n => n.getAttribute("aria-expanded") === "false")
    ).toBe(true);
    await expect(p.names[2].hasAttribute("aria-pressed")).toBe(false);
    await expect(p.section.classList.contains("has-still")).toBe(false);
    p.names[3].click();
    await expect(p.names[3].getAttribute("aria-expanded")).toBe("true");
    await resizeViewport(1024, 800);
    // back on desktop: nothing selected, details hidden, aria-pressed again
    await waitFor(() =>
      expect(p.names[0].getAttribute("aria-pressed")).toBe("false")
    );
    await expect(
      p.names.every(n => n.getAttribute("aria-pressed") === "false")
    ).toBe(true);
    await expect(p.names.some(n => n.hasAttribute("aria-expanded"))).toBe(
      false
    );
    await expect(p.details.every(detail => detail.hidden)).toBe(true);
    // and back to the accordion: it starts collapsed again (the earlier open location is not remembered)
    await resizeViewport(1023, 800);
    await waitFor(() =>
      expect(
        p.names.every(n => n.getAttribute("aria-expanded") === "false")
      ).toBe(true)
    );
  },
};

// --- behaviour (tests only) ---

export const SelectionAndReturn = {
  name: "Selection: four ways back to the video",
  tags: ["!dev"],
  globals: viewport(1440),
  render: () => <Harness before="40vh" after="150vh" html={placesHtml()} />,
  play: async ({ canvasElement }) => {
    await resizeViewport(1440, 900);
    const p = parts(canvasElement);
    const selected = () =>
      p.names.map(name => name.getAttribute("aria-pressed"));
    // second click
    p.names[2].click();
    await expect(selected()[2]).toBe("true");
    p.names[2].click();
    await expect(selected().every(state => state === "false")).toBe(true);
    await expect(p.video.hasAttribute("data-hold")).toBe(false);
    // switching
    p.names[1].click();
    p.names[3].click();
    await expect(selected()).toEqual([
      "false",
      "false",
      "false",
      "true",
      "false",
      "false",
      "false",
    ]);
    // a small scroll keeps the selection (beyond 48px it closes, see ScrollClose)
    window.scrollTo({ top: 24, behavior: "instant" });
    await new Promise(resolve => requestAnimationFrame(resolve));
    await expect(selected()[3]).toBe("true");
    // Esc, with focus on the name, returns focus to the name
    p.names[3].focus();
    document.dispatchEvent(new KeyboardEvent("keydown", { key: "Escape" }));
    await expect(selected().every(state => state === "false")).toBe(true);
    await expect(document.activeElement).toBe(p.names[3]);
    // the close button
    p.names[4].click();
    await waitFor(() => expect(p.closes[4].hidden).toBe(false));
    p.closes[4].click();
    await expect(selected().every(state => state === "false")).toBe(true);
    await expect(document.activeElement).toBe(p.names[4]);
    // an outside click (on the media)
    p.names[0].click();
    p.media.click();
    await expect(selected().every(state => state === "false")).toBe(true);
  },
};

export const HoldGate = {
  name: "Video hold (shared control)",
  tags: ["!dev"],
  globals: viewport(1440),
  render: () => <Harness html={placesHtml()} />,
  play: async ({ canvasElement }) => {
    await resizeViewport(1440, 900);
    const p = parts(canvasElement);
    p.names[0].click();
    await expect(p.video.hasAttribute("data-hold")).toBe(true);
    // the control is not shown while a campus is selected, so this click is programmatic: the shared control
    // still clears the hold itself (video-control.js) and the places listener goes back to the video
    p.mbtn.click();
    await waitFor(() => expect(p.video.hasAttribute("data-hold")).toBe(false));
    await expect(p.names[0].getAttribute("aria-pressed")).toBe("false");
    await expect(p.video.getAttribute("data-in-view")).toBe("0.2");
  },
};

export const LowerNameBox = {
  name: "Box of the lowest name hangs below the stage",
  tags: ["!dev"],
  globals: viewport(1440),
  render: () => <Harness before="20vh" after="40vh" html={placesHtml()} />,
  play: async ({ canvasElement }) => {
    await resizeViewport(1440, 900);
    const p = parts(canvasElement);
    const last = LOCATIONS.length - 1;
    p.names[last].click();
    await waitFor(() =>
      expect(p.items[last].classList.contains("is-shown")).toBe(true)
    );
    // brand QA 2026-11-09: London's box may go below the section so its gold bar lines up with the leader, as in
    // the prototype: nothing moves it up
    await near(box(p.boxes[last]).top, box(p.names[last]).bottom - 4, 1);
    await expect(box(p.boxes[last]).bottom).toBeGreaterThan(
      box(p.media).bottom
    );
    await near(box(p.details[last]).bottom, box(p.names[last]).bottom, 1);
  },
};

// --- WWWCMS-241 QA round 2026-11-05/06: the two buttons, the box bar, the links, the control and scroll close ---

const frame = () => new Promise(resolve => requestAnimationFrame(resolve));
const px = value => parseFloat(value);
const alphaOf = color => {
  const parts = color.match(/[\d.]+/g).map(Number);
  return parts.length === 4 ? parts[3] : 1;
};
const channels = color =>
  color
    .match(/[\d.]+/g)
    .slice(0, 3)
    .map(Number);
const textRect = element => {
  const range = document.createRange();
  range.selectNodeContents(element.firstChild);
  return range.getBoundingClientRect();
};
const ctas = p => [
  p.section.querySelector(".hp-places__cta--primary"),
  p.section.querySelector(".hp-places__cta--secondary"),
];
const select = async (p, index) => {
  p.names[index].click();
  await waitFor(() =>
    expect(p.items[index].classList.contains("is-shown")).toBe(true)
  );
  await waitFor(() => expect(style(p.boxes[index]).opacity).toBe("1"));
};

export const CtaButtons = {
  name: "CTA buttons",
  tags: ["!dev"],
  globals: viewport(1440),
  render: () => <Harness html={placesHtml()} />,
  play: async ({ canvasElement }) => {
    const p = parts(canvasElement);
    const [primary, secondary] = ctas(p);
    for (const [width, height] of [
      [1440, 900],
      [393, 852],
    ]) {
      await resizeViewport(width, height);
      await frame();
      await frame();
      for (const cta of [primary, secondary]) {
        // Figma Button: 32 tall, text 14/18, a 14 x 14 arrow 8px after it, 16px padding and a 2px border
        const icon = cta.querySelector("svg");
        await expect(icon).not.toBeNull();
        await near(box(icon).width, 14, 0.1);
        await near(box(icon).height, 14, 0.1);
        await near(box(icon).left - textRect(cta).right, 8, 0.5);
        await near(box(cta).width, textRect(cta).width + 8 + 14 + 36, 1);
        await near(box(cta).height, 32, 0.5);
      }
      // Find your fit: gold fill, Gray 1 text and arrow; Visit ASU: gold outline, gold text and arrow
      await expect(style(primary).backgroundColor).toBe(GOLD);
      await expect(style(primary).color).toBe(GRAY_1);
      await expect(style(secondary).backgroundColor).toBe("rgba(0, 0, 0, 0)");
      await expect(style(secondary).borderTopColor).toBe(GOLD);
      await expect(style(secondary).color).toBe(GOLD);
      await expect(style(secondary.querySelector("svg")).color).toBe(GOLD);
    }
  },
};

export const CtaHover = {
  name: "CTA hover",
  tags: ["!dev"],
  globals: viewport(1440),
  render: () => <Harness html={placesHtml()} />,
  play: async ({ canvasElement }) => {
    if (!realPointer.available) return;
    await resizeViewport(1440, 900);
    const p = parts(canvasElement);
    const [primary, secondary] = ctas(p);
    const hover = async (cta, check) => {
      const watch = watchTransitions(cta);
      try {
        await realPointer.hover(cta);
        await waitFor(() => expect(watch.runs.length).toBeGreaterThan(0));
        const byProperty = Object.fromEntries(
          watch.runs.map(a => [a.transitionProperty, a])
        );
        await check(byProperty);
        watch.runs.forEach(a => a.finish());
      } finally {
        watch.stop();
      }
    };
    const eased = async animation => {
      await expect(animation).toBeDefined();
      await expect(animation.effect.getComputedTiming().duration).toBe(200);
      await expect(animation.effect.getTiming().easing).toBe("ease");
    };
    // Find your fit grows 5% over 0.2s, colours unchanged, no outline ring (the prototype's filled pill)
    const primaryWidth = primary.offsetWidth;
    const secondaryLeft = box(secondary).left;
    await hover(primary, async byProperty => {
      await eased(byProperty.transform);
    });
    await expect(style(primary).transform).toBe(
      "matrix(1.05, 0, 0, 1.05, 0, 0)"
    );
    await expect(style(primary).boxShadow).toBe("none");
    await expect(style(primary).backgroundColor).toBe(GOLD);
    await expect(style(primary).color).toBe(GRAY_1);
    await expect(primary.offsetWidth).toBe(primaryWidth);
    await near(box(secondary).left, secondaryLeft, 0.1);
    await realPointer.unhover(primary);
    await waitFor(() => expect(style(primary).transform).toBe("none"));
    // Visit ASU fills gold over 0.2s with Gray 1 text, no growth, no ring (the prototype's outline pill)
    await hover(secondary, async byProperty => {
      await eased(byProperty["background-color"]);
      await eased(byProperty.color);
      byProperty["background-color"].currentTime = 100;
      byProperty.color.currentTime = 100;
      await frame();
      const alpha = alphaOf(style(secondary).backgroundColor);
      await expect(alpha).toBeGreaterThan(0);
      await expect(alpha).toBeLessThan(1);
      const [red] = channels(style(secondary).color);
      await expect(red).toBeGreaterThan(25);
      await expect(red).toBeLessThan(255);
    });
    await expect(style(secondary).backgroundColor).toBe(GOLD);
    await expect(style(secondary).color).toBe(GRAY_1);
    await expect(style(secondary.querySelector("svg")).color).toBe(GRAY_1);
    await expect(style(secondary).transform).toBe("none");
    await expect(style(secondary).boxShadow).toBe("none");
    await realPointer.unhover(secondary);
    await waitFor(() =>
      expect(style(secondary).backgroundColor).toBe("rgba(0, 0, 0, 0)")
    );
    // reduced motion: the same end states, no transition and no growth
    await emulateReducedMotion(true);
    try {
      for (const cta of [primary, secondary]) {
        const watch = watchTransitions(cta);
        try {
          await realPointer.hover(cta);
          await frame();
          await frame();
          await expect(watch.runs).toHaveLength(0);
          await expect(style(cta).transform).toBe("none");
        } finally {
          watch.stop();
          await realPointer.unhover(cta);
        }
      }
      await realPointer.hover(secondary);
      await waitFor(() => expect(style(secondary).backgroundColor).toBe(GOLD));
      await realPointer.unhover(secondary);
    } finally {
      await emulateReducedMotion(false);
    }
  },
};

export const CtaFocus = {
  name: "CTA focus",
  tags: ["!dev"],
  globals: viewport(1440),
  render: () => <Harness html={placesHtml()} />,
  play: async ({ canvasElement }) => {
    await resizeViewport(1440, 900);
    const p = parts(canvasElement);
    for (const cta of ctas(p)) {
      cta.focus();
      await expect(cta.matches(":focus-visible")).toBe(true);
      await expect(style(cta).boxShadow).not.toBe("none");
      cta.blur();
    }
  },
};

export const BoxBar = {
  name: "Gold bar over the box",
  tags: ["!dev"],
  globals: viewport(1440),
  render: () => <Harness before="20vh" after="40vh" html={placesHtml()} />,
  play: async ({ canvasElement }) => {
    await resizeViewport(1440, 900);
    const p = parts(canvasElement);
    // Figma: the box has a 4px gold stroke on its top edge, as wide as the box
    for (const index of [0, LOCATIONS.length - 1]) {
      await select(p, index);
      const bar = style(p.boxes[index], "::after");
      await expect(bar.content).toBe('""');
      await expect(bar.position).toBe("absolute");
      await expect(bar.height).toBe("4px");
      await expect(bar.top).toBe("0px");
      await expect(bar.backgroundColor).toBe(GOLD);
      await near(px(bar.width), box(p.boxes[index]).width, 1);
      p.names[index].click();
      await waitFor(() =>
        expect(p.items[index].classList.contains("is-shown")).toBe(false)
      );
    }
    // Tempe: the bar is flush with the leader (the box top is the leader's top)
    await select(p, 0);
    await near(box(p.boxes[0]).top, box(p.details[0]).top, 1);
    p.names[0].click();
    // below 1024 the accordion has no bar
    await resizeViewport(393, 852);
    p.names[0].click();
    await waitFor(() => expect(p.details[0].hidden).toBe(false));
    await expect(style(p.boxes[0], "::after").content).toBe("none");
  },
};

export const PlaceLinks = {
  name: "Link underline (Figma stroke)",
  tags: ["!dev"],
  globals: viewport(1440),
  render: () => <Harness before="20vh" after="40vh" html={placesHtml()} />,
  play: async ({ canvasElement }) => {
    const p = parts(canvasElement);
    const check = async link => {
      // Figma: a 1px stroke on the bottom of the link frame, below the 24px line and clear of the glyphs
      await expect(style(link).borderBottomWidth).toBe("1px");
      await expect(style(link).borderBottomStyle).toBe("solid");
      await expect(box(link).bottom - 1).toBeGreaterThanOrEqual(
        textRect(link).bottom + 1
      );
      await expect(style(link, "::after").content).toBe("none");
      // it runs under the text, the gap and the arrow
      await near(
        box(link).right - box(link.querySelector("svg")).right,
        0,
        0.5
      );
    };
    const hoverGone = async link => {
      if (!realPointer.available) return;
      await realPointer.hover(link);
      await waitFor(() =>
        expect(style(link).borderBottomColor).toBe("rgba(0, 0, 0, 0)")
      );
      await realPointer.unhover(link);
    };
    await resizeViewport(1440, 900);
    await select(p, 0);
    const link = p.boxes[0].querySelector(".hp-places__link");
    const seeAll = p.section.querySelector(".hp-places__see-all");
    await check(link);
    await check(seeAll);
    // desktop keeps the Figma geometry; mobile and tablet add 4px (brand QA 2026-11-10)
    await expect(style(link).paddingBottom).toBe("0px");
    await expect(style(seeAll).paddingBottom).toBe("0px");
    await expect(style(link).borderBottomColor).toBe(GOLD);
    await expect(style(seeAll).borderBottomColor).toBe(WHITE);
    await hoverGone(link);
    await hoverGone(seeAll);
    await resizeViewport(393, 852);
    p.names[0].click();
    await waitFor(() => expect(p.details[0].hidden).toBe(false));
    await check(p.boxes[0].querySelector(".hp-places__link"));
    await check(seeAll);
    for (const width of [393, 768]) {
      await resizeViewport(width, 1024);
      await expect(
        style(p.boxes[0].querySelector(".hp-places__link")).paddingBottom
      ).toBe("4px");
      await expect(style(seeAll).paddingBottom).toBe("4px");
    }
  },
};

export const PauseControl = {
  name: "Pause control hidden while a campus is selected",
  tags: ["!dev"],
  globals: viewport(1440),
  render: () => <Harness before="20vh" after="40vh" html={placesHtml()} />,
  play: async ({ canvasElement }) => {
    await resizeViewport(1440, 900);
    const p = parts(canvasElement);
    // in this runner the clip fails to load and the script hides the control: settle, then show it for the test
    await waitFor(() =>
      expect(p.video.error !== null || p.video.readyState >= 2).toBe(true)
    );
    p.mbtn.hidden = false;
    await expect(style(p.mbtn).display).toBe("grid");
    // a still replaces the video: nothing to pause, so the control goes (and focus on it moves to the name)
    p.mbtn.focus({ preventScroll: true });
    p.names[1].click();
    await waitFor(() => expect(style(p.mbtn).display).toBe("none"));
    await expect(p.mbtn.checkVisibility()).toBe(false);
    await expect(document.activeElement).toBe(p.names[1]);
    // switching keeps it away; every way back to the video brings it back
    p.names[2].click();
    await expect(style(p.mbtn).display).toBe("none");
    p.names[2].click();
    await waitFor(() => expect(style(p.mbtn).display).toBe("grid"));
    await select(p, 3);
    p.closes[3].click();
    await waitFor(() => expect(style(p.mbtn).display).toBe("grid"));
    await select(p, 4);
    document.dispatchEvent(new KeyboardEvent("keydown", { key: "Escape" }));
    await waitFor(() => expect(style(p.mbtn).display).toBe("grid"));
    await select(p, 5);
    p.media.click();
    await waitFor(() => expect(style(p.mbtn).display).toBe("grid"));
    // below 1024 no still ever covers the video, so the control stays with an accordion item open
    await resizeViewport(393, 852);
    p.names[0].click();
    await waitFor(() => expect(p.details[0].hidden).toBe(false));
    await expect(p.section.classList.contains("has-still")).toBe(false);
    await expect(style(p.mbtn).display).toBe("grid");
  },
};

export const ScrollClose = {
  name: "Scroll closes the open box",
  tags: ["!dev"],
  globals: viewport(1440),
  render: () => <Harness before="40vh" after="250vh" html={placesHtml()} />,
  play: async ({ canvasElement }) => {
    await resizeViewport(1440, 900);
    const p = parts(canvasElement);
    const selected = () =>
      p.names.map(name => name.getAttribute("aria-pressed"));
    const scrollTo = async top => {
      window.scrollTo({ top, behavior: "instant" });
      await frame();
      await frame();
    };
    // a small scroll leaves the box open; more than 48px from where it opened closes it
    await select(p, 3);
    await scrollTo(30);
    await expect(selected()[3]).toBe("true");
    await scrollTo(100);
    await waitFor(() =>
      expect(selected().every(state => state === "false")).toBe(true)
    );
    await expect(p.video.hasAttribute("data-hold")).toBe(false);
    // measured from where it opened (here 300px down), up or down
    await scrollTo(300);
    await select(p, 1);
    await scrollTo(270);
    await expect(selected()[1]).toBe("true");
    await scrollTo(200);
    await waitFor(() => expect(selected()[1]).toBe("false"));
    // focus inside the box returns to the name, and the page stays where the visitor scrolled
    await scrollTo(0);
    await select(p, 2);
    p.boxes[2].querySelector(".hp-places__link").focus();
    // the theme scrolls smoothly: let a scroll to the focused link finish before the visitor scrolls
    await new Promise(resolve => setTimeout(resolve, 700));
    const reached = [];
    const record = () => reached.push(window.scrollY);
    window.addEventListener("scroll", record);
    await scrollTo(150);
    window.removeEventListener("scroll", record);
    await waitFor(() => expect(selected()[2]).toBe("false"));
    await expect(document.activeElement).toBe(p.names[2]);
    // closing and moving focus did not scroll the page any further
    await expect(window.scrollY).toBe(reached[0]);
    // a scroll with nothing open does nothing, and the next selection measures from its own position
    await scrollTo(400);
    await select(p, 0);
    await scrollTo(420);
    await expect(selected()[0]).toBe("true");
    // a scroll caused by moving focus (Tab to a link below the fold) is not the visitor leaving the box
    await resizeViewport(1440, 600);
    await scrollTo(0);
    await select(p, 0);
    p.section.querySelector(".hp-places__see-all").focus();
    await new Promise(resolve => setTimeout(resolve, 700));
    await expect(window.scrollY).toBeGreaterThan(60);
    await expect(selected()[0]).toBe("true");
    // ... and the next real scroll is measured from there
    await scrollTo(window.scrollY + 100);
    await waitFor(() => expect(selected()[0]).toBe("false"));
    await resizeViewport(1440, 900);
    // the accordion (below 1024) is not touched by scrolling
    await resizeViewport(1023, 800);
    await scrollTo(0);
    p.names[0].click();
    await waitFor(() => expect(p.details[0].hidden).toBe(false));
    await scrollTo(300);
    await expect(p.names[0].getAttribute("aria-expanded")).toBe("true");
  },
};

export const ContrastBudget = {
  name: "Contrast budget (glass)",
  tags: ["!dev"],
  render: () => <div />,
  play: async () => {
    // White text over the .75 glass on the brightest possible backdrop needs 4.5:1 (7.7:1 here); gold 3:1 as large bold.
    await expect(glassContrast([255, 255, 255], 0.75, 255)).toBeGreaterThan(
      4.5
    );
    await expect(glassContrast([255, 198, 39], 0.75, 255)).toBeGreaterThan(4.5);
    // the Figma .5 would fail for white
    await expect(glassContrast([255, 255, 255], 0.5, 255)).toBeLessThan(4.5);
    await expect(openingProgress(450, 900, 147)).toBeLessThan(1);
  },
};

export const EntryPoint = {
  name: "Entry point exports",
  tags: ["!dev"],
  render: () => <div />,
  play: async () => {
    await expect(typeof entry.initPlaces).toBe("function");
    await expect(GROUPS).toHaveLength(2);
  },
};

export const InitContract = {
  name: "Init contract (teardown restores the server markup)",
  tags: ["!dev"],
  globals: viewport(1440),
  render: () => <Harness manual html={placesHtml()} />,
  play: async ({ canvasElement }) => {
    await resizeViewport(1440, 900);
    const p = parts(canvasElement);
    const stop = entry.initPlaces(canvasElement);
    await expect(p.section.classList.contains("is-enhanced")).toBe(true);
    // a second call binds nothing twice
    entry.initPlaces(canvasElement)();
    await expect(p.section.classList.contains("is-enhanced")).toBe(true);
    p.names[1].click();
    await waitFor(() =>
      expect(p.items[1].classList.contains("is-shown")).toBe(true)
    );
    stop();
    // back to the server markup: every location open, no state, nothing attached
    await expect(p.section.classList.contains("is-enhanced")).toBe(false);
    await expect(p.section.classList.contains("has-still")).toBe(false);
    await expect(
      p.items.some(item =>
        ["is-selected", "is-shown", "is-open"].some(name =>
          item.classList.contains(name)
        )
      )
    ).toBe(false);
    await expect(p.details.every(detail => !detail.hidden)).toBe(true);
    await expect(p.closes.every(button => button.hidden)).toBe(true);
    await expect(
      p.names.some(
        n => n.hasAttribute("aria-pressed") || n.hasAttribute("aria-expanded")
      )
    ).toBe(false);
    await expect(p.video.hasAttribute("data-hold")).toBe(false);
    await expect(p.video.hasAttribute("src")).toBe(false);
    await expect(p.media.style.getPropertyValue("--hp-places-progress")).toBe(
      ""
    );
    // it can be started again and starts clean
    const again = entry.initPlaces(canvasElement);
    await expect(
      p.items.some(item => item.classList.contains("is-selected"))
    ).toBe(false);
    p.names[2].click();
    await expect(p.names[2].getAttribute("aria-pressed")).toBe("true");
    again();
  },
};

export const LazyClip = {
  name: "Clip loads when the media is near",
  tags: ["!dev"],
  globals: viewport(1440),
  render: () => <Harness before="300vh" after="40vh" html={placesHtml()} />,
  play: async ({ canvasElement }) => {
    await resizeViewport(1440, 900);
    const p = parts(canvasElement);
    // far below the window: no clip is requested yet, the control waits
    await new Promise(resolve => setTimeout(resolve, 300));
    await expect(p.video.hasAttribute("src")).toBe(false);
    await expect(p.mbtn.hidden).toBe(true);
    // within one window height: the clip is attached
    window.scrollTo({
      top: p.media.getBoundingClientRect().top - 300 + window.scrollY,
      behavior: "instant",
    });
    await waitFor(() =>
      expect(p.video.getAttribute("src")).toContain("locations.mp4")
    );
    // and it stays attached when the media leaves again
    window.scrollTo({ top: 0, behavior: "instant" });
    await new Promise(resolve => setTimeout(resolve, 200));
    await expect(p.video.hasAttribute("src")).toBe(true);
  },
};
