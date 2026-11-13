import React from "react";
import { expect, userEvent, waitFor } from "storybook/test";

import { initFacultyCarousel } from "./faculty-carousel.js";
import { initVideoControls } from "../video-control/video-control.js";
import {
  GA_COMPONENT,
  GA_SECTION,
  Harness,
  LiveHarness,
  PEOPLE,
  UTILITY_HREF,
  UTILITY_LABEL,
  emulateForcedColors,
  emulateReducedMotion,
  environment,
  facultyCarouselHtml,
  getSource,
  getStub,
  readMoreHref,
  realPointer,
  realTab,
  resizeViewport,
} from "./faculty-carousel-helpers.jsx";
import * as entry from "../../js/index.js";

export default {
  title: "Homepage/Faculty carousel",
  // Every story leaves the page as it found it. The live preview needs the real IntersectionObserver.
  beforeEach: ({ parameters }) => {
    if (parameters.realEnvironment || !realPointer.available) return undefined;
    environment.install(parameters.environmentOptions);
    return async () => {
      environment.restore();
      window.scrollTo({ top: 0, behavior: "instant" });
      await emulateReducedMotion(false);
    };
  },
  parameters: {
    docs: {
      description: {
        component:
          'Homepage "Learn from the best" faculty carousel (WWWCMS-240). A fan of faculty cards: the front card (361x415 at 1280) shows the person\'s muted video (shared play/pause control, three plays, then the poster with the Play button), the next person sits tucked behind it on the right and the one after on the left, both darkened and rotated; the rest wait behind. A text panel (role label, headline, bio with "Read more", a quote for Michael Crow) and previous/next arrows sit beside it from 1024px and below it under that. Pressing a back card or an arrow brings that person to the front (the cards rotate, 0.58s; the panel changes instantly) and the new front video starts when the fan is in view; the pressed button keeps focus. The fan scales with its column from 1024px (container query units, at most 1280 size) and with the viewport below. Without script the six stills show in a row with captions and the six panels stack. `initFacultyCarousel` and `initVideoControls` wire it (either order). Sample stills and clips are the prototype media; `href`s are placeholders.',
      },
    },
  },
};

const viewport = width => ({
  viewport: { value: `hp${width}`, isRotated: false },
});

const near = (actual, expected, tolerance = 1) =>
  expect(
    Math.abs(actual - expected),
    `${actual} is not within ${tolerance} of ${expected}`
  ).toBeLessThanOrEqual(tolerance);

const box = element => element.getBoundingClientRect();
const style = element => getComputedStyle(element);

const parts = (canvasElement, id = "hp-faculty") => {
  const section = canvasElement.querySelector(`#${id}`);
  const list = selector => Array.from(section.querySelectorAll(selector));
  const cards = list(".hp-faculty__card");
  return {
    section,
    wall: section.querySelector(".hp-faculty__wall"),
    heading: section.querySelector(".hp-faculty__heading"),
    sub: section.querySelector(".hp-faculty__sub"),
    grid: section.querySelector(".hp-faculty__grid"),
    stageCol: section.querySelector(".hp-faculty__stage-col"),
    stage: section.querySelector(".hp-faculty__stage"),
    textCol: section.querySelector(".hp-faculty__text-col"),
    cards,
    stills: list(".hp-faculty__still"),
    videos: cards.map(card => card.querySelector("video")),
    controls: cards.map(card => card.querySelector(".mbtn")),
    picks: cards.map(card => card.querySelector(".hp-faculty__pick")),
    captions: list(".hp-faculty__caption"),
    panels: list(".hp-faculty__panel"),
    prev: section.querySelector(".hp-faculty__arrow--prev"),
    next: section.querySelector(".hp-faculty__arrow--next"),
    all: section.querySelector(".hp-faculty__all"),
    status: section.querySelector(".hp-faculty__status"),
  };
};

// Waits until the section is enhanced and every video has its playback fake.
const find = async (canvasElement, id) => {
  const p = parts(canvasElement, id);
  await waitFor(() =>
    expect(p.section.classList.contains("is-enhanced")).toBe(true)
  );
  p.stubs = p.videos.map(video => (video ? getStub(video) : null));
  return p;
};

const posOf = card => parseInt(card.getAttribute("data-pos"), 10);
const frontIndex = p => p.cards.findIndex(card => posOf(card) === 0);

const click = async element => {
  await userEvent.click(element);
};

const settle = async () => {
  await new Promise(resolve => setTimeout(resolve, 30));
};

// The card's drawn state from its transform: scale, rotation (degrees) and centre inside the stage (px).
const cardState = card => {
  const m = new DOMMatrix(style(card).transform);
  return {
    s: Math.hypot(m.a, m.b),
    r: (Math.atan2(m.b, m.a) * 180) / Math.PI,
    cx: m.e + card.offsetWidth / 2,
    cy: m.f + card.offsetHeight / 2,
    w: card.offsetWidth,
    h: card.offsetHeight,
  };
};

// Figma tables (design doc section 13): sizes and centres inside the fan group, in design px.
const DESKTOP = {
  front: { w: 360.52, h: 415.25, x: 266.27, y: 207.62 },
  right: { x: 384.31, y: 213.78, r: 7.19, s: 268 / 360.52 },
  left: { x: 150.65, y: 216.8, r: -6.52, s: 268 / 360.52 },
  stage: { w: 536.57, h: 415.25 },
};
const STACKED = {
  front: { w: 430.11, h: 495.41, x: 334.7, y: 247.71 },
  right: { x: 480.41, y: 253.27, r: 7.19, s: 335.01 / 430.11 },
  left: { x: 188.32, y: 257.05, r: -6.52, s: 335.01 / 430.11 },
  stage: { w: 670.73, h: 495.41 },
};

const desktopUnit = p => Math.min(1, box(p.stageCol).width / 536.57);
const stackedUnit = () =>
  Math.max(0.6594, 0.6594 + (window.innerWidth - 393) * 0.000908);

// Front, right and left cards at their Figma sizes, centres, rotations and scale; the stage box too.
const expectFan = async (p, table, u) => {
  const byPos = n => p.cards.find(card => posOf(card) === n);
  const front = cardState(byPos(0));
  near(front.w, table.front.w * u, 1);
  near(front.h, table.front.h * u, 1);
  near(front.cx, table.front.x * u, 1);
  near(front.cy, table.front.y * u, 1);
  near(front.s, 1, 0.001);
  near(front.r, 0, 0.01);
  for (const [n, name] of [
    [1, "right"],
    [2, "left"],
  ]) {
    const state = cardState(byPos(n));
    near(state.s, table[name].s, 0.005);
    near(state.r, table[name].r, 0.05);
    near(state.cx, table[name].x * u, 1);
    near(state.cy, table[name].y * u, 1);
  }
  near(box(p.stage).width, table.stage.w * u, 1);
  near(box(p.stage).height, table.stage.h * u, 1);
};

// Contract that holds with or without script and at every width.
const expectContract = async p => {
  await expect(p.section.tagName).toBe("SECTION");
  await expect(p.section.getAttribute("aria-labelledby")).toBe(p.heading.id);
  await expect(p.section.querySelectorAll("h2")).toHaveLength(1);
  await expect(p.heading.textContent).toBe(
    "Learn from the best.Become your best."
  );
  const mark = p.heading.querySelector(".scrib-host > img.scrib.scrib--learn");
  await expect(mark.getAttribute("alt")).toBe("");
  await expect(mark.getAttribute("aria-hidden")).toBe("true");
  await expect(p.cards).toHaveLength(PEOPLE.length);
  await expect(p.panels).toHaveLength(PEOPLE.length);
  await expect(p.captions).toHaveLength(PEOPLE.length);
  PEOPLE.forEach((person, i) => {
    expect(p.stills[i].getAttribute("src")).toBe(person.still);
    expect(p.captions[i].textContent).toBe(person.name + person.title);
    const panel = p.panels[i];
    expect(panel.querySelector(".hp-faculty__role").textContent).toBe(
      person.role
    );
    expect(panel.querySelector("h3").textContent).toBe(person.headline);
    expect(panel.querySelector(".hp-faculty__bio").textContent).toContain(
      person.bio
    );
    const more = panel.querySelector(".hp-faculty__more");
    expect(more.getAttribute("href")).toBe(readMoreHref(person));
    expect(more.getAttribute("aria-label")).toBe(
      `Read more about ${person.name}`
    );
    expect(panel.querySelector("blockquote") !== null).toBe(
      Boolean(person.quote)
    );
    if (person.video) {
      expect(p.videos[i].getAttribute("poster")).toBe(person.still);
      expect(p.videos[i].hasAttribute("muted")).toBe(true);
      expect(p.videos[i].hasAttribute("autoplay")).toBe(false);
      expect(p.videos[i].hasAttribute("loop")).toBe(false);
      expect(p.videos[i].dataset.plays).toBe("3");
      expect(p.videos[i].dataset.inView).toBe("0.98");
      expect(p.controls[i].dataset.for).toBe(p.videos[i].id);
      expect(
        document.getElementById(p.picks[i].getAttribute("aria-describedby"))
          .textContent
      ).toBe(person.description);
    } else {
      expect(p.videos[i]).toBe(null);
      expect(p.controls[i]).toBe(null);
    }
  });
  // video ids and descriptions are unique and wired
  const ids = Array.from(p.section.querySelectorAll("[id]")).map(el => el.id);
  await expect(new Set(ids).size).toBe(ids.length);
  // data layer: every link and button carries the full attribute set (asucms datalayer.md)
  const clickable = Array.from(p.section.querySelectorAll("a[href], button"));
  await expect(clickable.length).toBeGreaterThanOrEqual(20);
  clickable.forEach(element => {
    const video = element.classList.contains("mbtn");
    expect(element.getAttribute("data-ga-name")).toBe("onclick");
    expect(["link", "select"]).toContain(element.getAttribute("data-ga-event"));
    expect(element.getAttribute("data-ga-action")).toBe("click");
    expect(element.getAttribute("data-ga-type")).toBe("internal link");
    expect(element.getAttribute("data-ga-region")).toBe("main content");
    expect(element.getAttribute("data-ga-section")).toBe(GA_SECTION);
    expect(element.getAttribute("data-ga-component")).toBe(
      video ? "homepage video control" : GA_COMPONENT
    );
    expect(element.getAttribute("data-ga-text")).toBeTruthy();
    expect(element.hasAttribute("data-ga")).toBe(false);
  });
  await expect(p.all.getAttribute("href")).toBe(UTILITY_HREF);
  await expect(p.all.textContent).toBe(UTILITY_LABEL);
  await expect(p.prev.getAttribute("aria-label")).toBe(
    "Previous faculty member"
  );
  await expect(p.next.getAttribute("aria-label")).toBe("Next faculty member");
  await expect(p.status.getAttribute("role")).toBe("status");
};

// --- server markup ---

export const NoScript = {
  name: "No script (server markup)",
  globals: viewport(393),
  render: () => <Harness manual html={facultyCarouselHtml()} />,
  play: async ({ canvasElement }) => {
    const p = parts(canvasElement);
    await expectContract(p);
    // the markup is the contract: nothing rewrote it
    const template = document.createElement("template");
    template.innerHTML = facultyCarouselHtml();
    await expect(p.section.outerHTML).toBe(
      template.content.firstElementChild.outerHTML
    );
    await expect(p.section.classList.contains("is-enhanced")).toBe(false);
    p.stills.forEach((still, i) =>
      expect(still.getAttribute("alt")).toBe(PEOPLE[i].alt)
    );
    p.videos.filter(Boolean).forEach(video => {
      expect(video.hasAttribute("src")).toBe(false);
      expect(style(video).display).toBe("none");
    });
    p.controls
      .filter(Boolean)
      .forEach(control => expect(control.hidden).toBe(true));
    p.picks.forEach(pick => expect(style(pick).display).toBe("none"));
    await expect(style(p.prev).display).toBe("none");
    await expect(style(p.next).display).toBe("none");
    // only the first card is free to play: the others are held
    p.videos.forEach((video, i) => {
      if (video) expect(video.hasAttribute("data-hold")).toBe(i !== 0);
    });
    p.panels.forEach(panel => expect(style(panel).display).toBe("block"));
    p.captions.forEach(caption =>
      expect(style(caption).visibility).toBe("visible")
    );
    PEOPLE.forEach((person, i) => {
      expect(p.panels[i].querySelector(".hp-faculty__person").textContent).toBe(
        person.name
      );
      expect(
        style(p.panels[i].querySelector(".hp-faculty__person")).display
      ).toBe("block");
    });
    // the wallpaper is behind everything and ignores the pointer
    await expect(style(p.wall).backgroundImage).toContain("learn-bg");
    await expect(style(p.wall).pointerEvents).toBe("none");
    await expect(document.documentElement.scrollWidth).toBeLessThanOrEqual(
      window.innerWidth
    );
  },
};

// --- initialised states ---

export const Default = {
  globals: viewport(1440),
  render: () => <Harness html={facultyCarouselHtml()} />,
  play: async ({ canvasElement }) => {
    await resizeViewport(1440, 900);
    const p = await find(canvasElement);
    await expectContract(p);
    // the fan: the first person in front, the next two behind, the rest waiting and inert
    p.cards.forEach((card, i) => {
      expect(card.getAttribute("data-pos")).toBe(String(i));
      expect(card.hasAttribute("inert")).toBe(i >= 3);
      expect(card.getAttribute("aria-hidden")).toBe(i >= 3 ? "true" : null);
    });
    p.panels.forEach((panel, i) => {
      expect(panel.classList.contains("is-active")).toBe(i === 0);
      expect(panel.hasAttribute("inert")).toBe(i !== 0);
      expect(panel.getAttribute("aria-hidden")).toBe(i === 0 ? null : "true");
    });
    p.captions.forEach((caption, i) => {
      expect(caption.classList.contains("is-active")).toBe(i === 0);
      expect(style(caption).visibility).toBe(i === 0 ? "visible" : "hidden");
    });
    // pick buttons: the front one is the current, disabled-looking button; the others name the person
    p.picks.forEach((pick, i) => {
      expect(pick.hidden).toBe(false);
      expect(pick.getAttribute("aria-label")).toBe(
        `${i === 0 ? "Showing" : "Show"} ${PEOPLE[i].name}`
      );
      expect(pick.getAttribute("aria-current")).toBe(i === 0 ? "true" : null);
      expect(pick.getAttribute("aria-disabled")).toBe(i === 0 ? "true" : null);
    });
    // back stills have no alt text (the pick button names them); the front one keeps it
    p.stills.forEach((still, i) =>
      expect(still.getAttribute("alt")).toBe(i === 0 ? PEOPLE[i].alt : "")
    );
    await expect(p.prev.hidden).toBe(false);
    await expect(p.next.hidden).toBe(false);
    await expect(p.status.textContent).toBe("");
    await expect(p.stage.getAttribute("role")).toBe("group");
    await expect(p.stage.getAttribute("aria-roledescription")).toBe("carousel");
    // sources are attached (metadata only), the controls appear on the front card only and the others are held
    p.videos.forEach((video, i) => {
      if (!video) return;
      expect(getSource(video).sets).toHaveLength(1);
      expect(video.getAttribute("preload")).toBe("metadata");
      expect(video.hasAttribute("data-hold")).toBe(i !== 0);
      expect(p.controls[i].hidden).toBe(false);
      expect(style(p.controls[i]).visibility).toBe(
        i === 0 ? "visible" : "hidden"
      );
      expect(style(p.controls[i]).pointerEvents).toBe(
        i === 0 ? "auto" : "none"
      );
    });
    // layers: front above the right card above the left card; the control above the pick button
    const z = el => parseInt(style(el).zIndex, 10) || 0;
    await expect(z(p.cards[0])).toBeGreaterThan(z(p.cards[1]));
    await expect(z(p.cards[1])).toBeGreaterThan(z(p.cards[2]));
    await expect(z(p.controls[0])).toBeGreaterThan(z(p.picks[0]));
    await expect(style(p.cards[3]).opacity).toBe("0");
    await expect(style(p.cards[3]).pointerEvents).toBe("none");
    // the dark overlay is on the cards behind the front one only
    await expect(getComputedStyle(p.cards[0], "::after").opacity).toBe("0");
    await expect(getComputedStyle(p.cards[1], "::after").backgroundColor).toBe(
      "rgba(0, 0, 0, 0.6)"
    );
  },
};

// --- rotation ---

export const Rotation = {
  tags: ["!dev"],
  globals: viewport(1440),
  render: () => <Harness html={facultyCarouselHtml()} />,
  play: async ({ canvasElement }) => {
    await resizeViewport(1440, 900);
    await emulateReducedMotion(true);
    const p = await find(canvasElement);
    const expectFront = async i => {
      await expect(frontIndex(p)).toBe(i);
      p.cards.forEach((card, c) =>
        expect(posOf(card)).toBe((c - i + PEOPLE.length) % PEOPLE.length)
      );
      p.panels.forEach((panel, c) => {
        expect(panel.classList.contains("is-active")).toBe(c === i);
        expect(style(panel).visibility).toBe(c === i ? "visible" : "hidden");
      });
      p.captions.forEach((caption, c) =>
        expect(caption.classList.contains("is-active")).toBe(c === i)
      );
      p.picks.forEach((pick, c) => {
        expect(pick.getAttribute("aria-label")).toBe(
          `${c === i ? "Showing" : "Show"} ${PEOPLE[c].name}`
        );
        expect(pick.getAttribute("aria-current")).toBe(c === i ? "true" : null);
        expect(pick.getAttribute("aria-disabled")).toBe(
          c === i ? "true" : null
        );
      });
      p.cards.forEach(card =>
        expect(card.hasAttribute("inert")).toBe(posOf(card) >= 3)
      );
    };

    await expectFront(0);
    // next: the next person (right card) comes forward, with the announcement
    await click(p.next);
    await expectFront(1);
    await expect(p.status.textContent).toBe(
      `${PEOPLE[1].name}, ${PEOPLE[1].title}. 2 of 6`
    );
    await expect(document.activeElement).toBe(p.next);
    // previous goes back
    await click(p.prev);
    await expectFront(0);
    await expect(document.activeElement).toBe(p.prev);
    // previous from the first wraps to the last; six nexts come all the way round
    await click(p.prev);
    await expectFront(5);
    await click(p.next);
    await expectFront(0);
    for (let step = 1; step <= 6; step += 1) {
      await click(p.next);
      await expectFront(step % 6);
    }
    // pressing the right back card (the next person) or the left one (the one after) brings it forward
    await click(p.picks[1]);
    await expectFront(1);
    await expect(document.activeElement).toBe(p.picks[1]);
    await click(p.picks[3]);
    await expectFront(3);
    await expect(document.activeElement).toBe(p.picks[3]);
    await expect(p.status.textContent).toBe(
      `${PEOPLE[3].name}, ${PEOPLE[3].title}. 4 of 6`
    );
    // the front card's own button does nothing
    await click(p.picks[3]);
    await expectFront(3);
    // a control with focus hands it to the card's pick button when the card leaves the front (a programmatic click,
    // as Safari does not move focus on a mouse click, leaves focus where it was)
    p.controls[3].focus();
    await expect(document.activeElement).toBe(p.controls[3]);
    p.next.click();
    await expectFront(4);
    await expect(document.activeElement).toBe(p.picks[4]);
    // the same for a panel link: the panel goes inert, focus moves to the new front card's button
    p.panels[4].querySelector(".hp-faculty__more").focus();
    p.next.click();
    await expectFront(5);
    await expect(document.activeElement).toBe(p.picks[5]);
    // focus on an arrow stays on it
    await click(p.next);
    await expectFront(0);
    await expect(document.activeElement).toBe(p.next);
    // keyboard: Enter and Space on a back card's button
    p.picks[1].focus();
    await userEvent.keyboard("{Enter}");
    await expectFront(1);
    p.picks[3].focus();
    await userEvent.keyboard(" ");
    await expectFront(3);
    p.picks[5].focus();
    await userEvent.keyboard("{Enter}");
    await expectFront(5);
    // hit-testing on the overlapped slivers: the right and left cards' own buttons answer
    await click(p.picks[0]);
    await expectFront(0);
    const u = desktopUnit(p);
    const at = (x, y) => {
      const rect = box(p.stage);
      return document.elementFromPoint(rect.left + x * u, rect.top + y * u);
    };
    await expect(at(500, 215)).toBe(p.picks[1]);
    await expect(at(20, 215)).toBe(p.picks[2]);
    await expect(at(266, 207)).toBe(p.picks[0]);
  },
};

// --- counts ---

export const Counts = {
  tags: ["!dev"],
  globals: viewport(1440),
  render: () => (
    <>
      {[1, 2, 3, 4].map(n => (
        <Harness
          key={n}
          html={facultyCarouselHtml({
            id: `hp-faculty-${n}`,
            people: PEOPLE.slice(0, n),
          })}
        />
      ))}
    </>
  ),
  play: async ({ canvasElement }) => {
    await emulateReducedMotion(true);
    const sets = {};
    for (const n of [1, 2, 3, 4]) {
      sets[n] = await find(canvasElement, `hp-faculty-${n}`);
    }
    // one person: nothing to rotate
    await expect(sets[1].prev.hidden).toBe(true);
    await expect(sets[1].next.hidden).toBe(true);
    await expect(posOf(sets[1].cards[0])).toBe(0);
    // two: next and previous are the same move
    await click(sets[2].next);
    await expect(posOf(sets[2].cards[1])).toBe(0);
    await click(sets[2].prev);
    await expect(posOf(sets[2].cards[0])).toBe(0);
    // three: no card waits behind; four: one does
    await expect(sets[3].cards.map(posOf)).toEqual([0, 1, 2]);
    await click(sets[3].next);
    await expect(sets[3].cards.map(posOf)).toEqual([2, 0, 1]);
    await expect(sets[4].cards.map(posOf)).toEqual([0, 1, 2, 3]);
    await expect(sets[4].cards[3].hasAttribute("inert")).toBe(true);
    await click(sets[4].prev);
    await expect(sets[4].cards.map(posOf)).toEqual([1, 2, 3, 0]);
    await expect(sets[4].cards[2].hasAttribute("inert")).toBe(true);
  },
};

// --- layout: numbers from Figma ---

const expectIntro = async (p, { size, line, sub }) => {
  const h = style(p.heading);
  await expect(h.fontSize).toBe(`${size}px`);
  await expect(h.lineHeight).toBe(`${line}px`);
  await expect(h.fontWeight).toBe("700");
  await expect(h.color).toBe("rgb(25, 25, 25)");
  await expect(h.textAlign).toBe("center");
  near(parseFloat(h.letterSpacing), -0.05 * size, 0.05);
  const s = style(p.sub);
  await expect(s.fontSize).toBe("16px");
  await expect(s.lineHeight).toBe("24px");
  await expect(s.color).toBe("rgb(116, 116, 116)");
  near(box(p.sub).width, sub, 1);
  near(box(p.sub).top - box(p.heading).bottom, 16, 1);
};

const expectText = async p => {
  const panel = p.panels[0];
  const role = style(panel.querySelector(".hp-faculty__role"));
  await expect(role.fontSize).toBe("12px");
  await expect(role.lineHeight).toBe("24px");
  await expect(role.fontWeight).toBe("700");
  await expect(role.textTransform).toBe("uppercase");
  near(parseFloat(role.letterSpacing), 2.4, 0.05);
  await expect(role.color).toBe("rgb(116, 116, 116)");
  const headline = style(panel.querySelector("h3"));
  await expect(headline.fontSize).toBe("20px");
  await expect(headline.lineHeight).toBe("24px");
  await expect(headline.fontWeight).toBe("700");
  near(parseFloat(headline.letterSpacing), -0.6, 0.05);
  const bio = style(panel.querySelector(".hp-faculty__bio"));
  await expect(bio.fontSize).toBe("14px");
  await expect(bio.lineHeight).toBe("20px");
  const more = style(panel.querySelector(".hp-faculty__more"));
  await expect(more.color).toBe("rgb(140, 29, 64)");
  await expect(more.textDecorationLine).toBe("underline");
  const caption = style(p.captions[0]);
  await expect(caption.fontSize).toBe("13.08px");
  await expect(caption.color).toBe("rgb(116, 116, 116)");
  const arrow = box(p.next);
  near(arrow.width, 52.3, 0.1);
  near(arrow.height, 52.3, 0.1);
  near(box(p.next).left - box(p.prev).right, 13.08, 0.1);
  const all = style(p.all);
  await expect(all.fontSize).toBe("16px");
  await expect(all.fontWeight).toBe("700");
  await expect(all.color).toBe("rgb(140, 29, 64)");
  await expect(all.borderBottomWidth).toBe("1px");
  await expect(all.lineHeight).toBe("20px");
  // a 44px hit area around the 21px link (20px line and the 1px stroke)
  await expect(getComputedStyle(p.all, "::before").top).toBe("-12px");
  await expect(getComputedStyle(p.all, "::before").bottom).toBe("-12px");
  near(box(p.all).height, 21, 0.5);
};

const expectControl = async (p, size, inset) => {
  const control = p.controls[0];
  near(box(control).width, size, 0.6);
  near(box(control).height, size, 0.6);
  const card = box(p.cards[0]);
  near(card.right - box(control).right, inset, 1);
  near(card.bottom - box(control).bottom, inset, 1);
  await expect(style(control).backgroundColor).toBe("rgb(232, 232, 232)");
};

const desktop = async (canvasElement, width) => {
  await resizeViewport(width, 900);
  await emulateReducedMotion(true);
  const p = await find(canvasElement);
  const gap =
    width >= 1280
      ? 96
      : Math.min(96, Math.max(24, 24 + (width - 1024) * 0.28125));
  const container = Math.min(width - 96, 1200);
  // columns: equal, separated by the eased gap, vertically centred on each other
  near(box(p.stageCol).width, (container - gap) / 2, 1.5);
  near(box(p.textCol).width, (container - gap) / 2, 1.5);
  near(box(p.textCol).left - box(p.stageCol).right, gap, 1.5);
  near(
    box(p.stageCol).top + box(p.stageCol).height / 2,
    box(p.textCol).top + box(p.textCol).height / 2,
    1.5
  );
  // a resize can leave the cards mid-transition for a moment
  await waitFor(() => expectFan(p, DESKTOP, desktopUnit(p)), { timeout: 3000 });
  await expectIntro(p, { size: 64, line: 68, sub: 513 });
  await expectText(p);
  await expectControl(p, 32, 24);
  // caption: 225px under the fan, 22px below it, left-aligned text centred under the stage
  near(box(p.captions[0]).width, 225, 1);
  near(box(p.captions[0]).top - box(p.stage).bottom, 22, 1);
  near(
    box(p.captions[0]).left + 112.5,
    box(p.stage).left + 266.27 * desktopUnit(p),
    4
  );
  // the panels' cell is as tall as the tallest one; the controls sit 34px under it
  near(
    box(p.next).top -
      box(p.section.querySelector(".hp-faculty__panels")).bottom,
    34,
    1
  );
  await expect(document.documentElement.scrollWidth).toBeLessThanOrEqual(
    window.innerWidth
  );
  return p;
};

const stacked = async (canvasElement, width, { control, inset, sub, wide }) => {
  await resizeViewport(width, 900);
  await emulateReducedMotion(true);
  const p = await find(canvasElement);
  // one column: fan, caption, panel, controls, in that order
  await expect(box(p.textCol).top).toBeGreaterThanOrEqual(
    box(p.stageCol).bottom - 1
  );
  near(box(p.stageCol).width, Math.min(width - 64, 704), 1);
  near(box(p.textCol).width, Math.min(width - 64, 704), 1);
  near(box(p.textCol).top - box(p.stageCol).bottom, 24, 1);
  await waitFor(() => expectFan(p, STACKED, stackedUnit()), { timeout: 3000 });
  // the fan is centred on the page and bleeds past the column on phones
  near(box(p.stage).left + box(p.stage).width / 2, width / 2, 1);
  await expectIntro(p, { size: 36, line: 40, sub });
  await expectText(p);
  await expectControl(p, control, inset);
  near(box(p.captions[0]).top - box(p.stage).bottom, 22, 1);
  near(box(p.captions[0]).width, wide ? 225 : width - 64, 1);
  near(
    box(p.next).top - box(p.panels[0].querySelector(".hp-faculty__bio")).bottom,
    16,
    1
  );
  // no horizontal scroll even though the phone fan is wider than the screen
  await expect(document.documentElement.scrollWidth).toBeLessThanOrEqual(
    window.innerWidth
  );
  // only the active panel takes room
  p.panels.forEach((panel, i) =>
    expect(style(panel).display).toBe(i === 0 ? "block" : "none")
  );
  return p;
};

export const Phone393 = {
  globals: viewport(393),
  render: () => <Harness html={facultyCarouselHtml()} />,
  play: async ({ canvasElement }) => {
    const p = await stacked(canvasElement, 393, {
      control: 32,
      inset: 16,
      sub: 329,
      wide: false,
    });
    // arrows and the utility link: the link wraps under the arrows (16px gap)
    near(box(p.all).top - box(p.next).bottom, 16, 1.5);
    near(box(p.all).left, box(p.prev).left, 1);
    // the page padding is 32px
    near(box(p.grid).width, 329, 1);
    near(box(p.grid).left, 32, 1);
  },
};

export const Tablet768 = {
  globals: viewport(768),
  render: () => <Harness html={facultyCarouselHtml()} />,
  play: async ({ canvasElement }) => {
    const p = await stacked(canvasElement, 768, {
      control: 48,
      inset: 24,
      sub: 704,
      wide: true,
    });
    // the utility link sits on the right of the arrows (space between)
    near(box(p.all).right, box(p.textCol).right, 1);
    near(box(p.all).top + box(p.all).height / 2, box(p.next).top + 26.15, 3);
    near(box(p.stageCol).height, 495.41 + 22 + box(p.captions[0]).height, 1);
  },
};

export const Stacked1023 = {
  tags: ["!dev"],
  globals: viewport(1023),
  render: () => <Harness html={facultyCarouselHtml()} />,
  play: async ({ canvasElement }) => {
    const p = await stacked(canvasElement, 1023, {
      control: 48,
      inset: 24,
      sub: 704,
      wide: true,
    });
    await expect(p.section).toBeDefined();
  },
};

export const Desktop1024 = {
  globals: viewport(1024),
  render: () => <Harness html={facultyCarouselHtml()} />,
  play: async ({ canvasElement }) => {
    const p = await desktop(canvasElement, 1024);
    // the column is 452px: the fan is .8424 of its 1280 size (Figma's 1024 frame: 306 x 353 front card)
    near(desktopUnit(p), 452 / 536.57, 0.003);
    near(cardState(p.cards[0]).w, 303.7, 1);
  },
};

export const Desktop1100 = {
  tags: ["!dev"],
  globals: viewport(1100),
  render: () => <Harness html={facultyCarouselHtml()} />,
  play: async ({ canvasElement }) => {
    await desktop(canvasElement, 1100);
  },
};

export const Desktop1280 = {
  globals: viewport(1280),
  render: () => <Harness html={facultyCarouselHtml()} />,
  play: async ({ canvasElement }) => {
    const p = await desktop(canvasElement, 1280);
    // 1184 container, 96px gap: 544px columns; the fan is at its full 1280 size
    near(desktopUnit(p), 1, 0.001);
    near(cardState(p.cards[0]).w, 360.52, 0.5);
    near(box(p.heading).width, 555, 6);
    near(box(p.section).height, 837.63, 40);
  },
};

export const Desktop1440 = {
  globals: viewport(1440),
  render: () => <Harness html={facultyCarouselHtml()} />,
  play: async ({ canvasElement }) => {
    await desktop(canvasElement, 1440);
  },
};

export const Large1920 = {
  globals: viewport(1920),
  render: () => <Harness html={facultyCarouselHtml()} />,
  play: async ({ canvasElement }) => {
    const p = await desktop(canvasElement, 1920);
    // the content stays 1200px wide and centred; the fan is still at 1280 size
    near(box(p.grid).width, 1200, 1);
    near(box(p.grid).left, (1920 - 1200) / 2, 1);
  },
};

// --- motion ---

export const Motion = {
  tags: ["!dev"],
  globals: viewport(1440),
  render: () => <Harness html={facultyCarouselHtml()} />,
  play: async ({ canvasElement }) => {
    await resizeViewport(1440, 900);
    await emulateReducedMotion(false);
    const p = await find(canvasElement);
    await waitFor(() =>
      expect(p.section.classList.contains("is-animated")).toBe(true)
    );
    // 0.58s transform with a slight overshoot, 0.35s fade; the video fades in over 0.4s
    const card = style(p.cards[0]);
    await expect(card.transitionProperty).toContain("transform");
    await expect(card.transitionDuration).toContain("0.58s");
    await expect(card.transitionTimingFunction).toContain(
      "cubic-bezier(0.34, 1.12, 0.44, 1)"
    );
    await expect(style(p.videos[0]).transitionDuration).toBe("0.4s");
    await expect(style(p.controls[1]).transitionDuration).toContain("0.3s");
    // reduced motion: no transitions at all
    await emulateReducedMotion(true);
    await waitFor(() =>
      expect(style(p.cards[0]).transitionDuration).toBe("0s")
    );
    await expect(style(p.videos[0]).transitionDuration).toBe("0s");
  },
};

// --- video ---

export const VideoFrontOnly = {
  tags: ["!dev"],
  name: "Video: only the front card plays",
  globals: viewport(1440),
  render: () => <Harness html={facultyCarouselHtml()} />,
  play: async ({ canvasElement }) => {
    await emulateReducedMotion(true);
    const p = await find(canvasElement);
    // the front video is in view and free to start; the held ones are not started
    environment.emit(p.videos[0], 1);
    await waitFor(() => expect(p.stubs[0].calls.play).toBe(1));
    p.stubs.slice(1).forEach(stub => stub && expect(stub.calls.play).toBe(0));
    // the front video fades over the still once it plays, and the control shows Pause
    await expect(p.videos[0].classList.contains("is-ready")).toBe(true);
    await expect(p.controls[0].dataset.state).toBe("playing");
    p.videos
      .slice(1)
      .forEach(
        video =>
          video && expect(video.classList.contains("is-ready")).toBe(false)
      );
    // next: the old front is held and paused, its still returns; the new front waits for the fan to be fully in view
    await click(p.next);
    await waitFor(() => expect(p.stubs[0].calls.pause).toBeGreaterThan(0));
    await expect(p.videos[0].hasAttribute("data-hold")).toBe(true);
    await expect(p.videos[0].classList.contains("is-ready")).toBe(false);
    await expect(p.videos[1].hasAttribute("data-hold")).toBe(false);
    await settle();
    await expect(p.stubs[1].calls.play).toBe(0);
    environment.emit(p.videos[1], 0.5);
    await settle();
    await expect(p.stubs[1].calls.play).toBe(0);
    environment.emit(p.videos[1], 1);
    await waitFor(() => expect(p.stubs[1].calls.play).toBe(1));
    await waitFor(() =>
      expect(p.videos[1].classList.contains("is-ready")).toBe(true)
    );
    // the still-only card (Jackson, the fifth) has no video to start
    await click(p.picks[2]);
    await click(p.picks[4]);
    await expect(frontIndex(p)).toBe(4);
    await expect(p.videos[1].hasAttribute("data-hold")).toBe(true);
    // rapid next x3: at most one video plays at a time
    await click(p.next);
    await click(p.next);
    await click(p.next);
    await settle();
    p.videos.forEach(video => video && environment.emit(video, 1));
    await settle();
    // three nexts from the fifth card land on the second again; it is the only video playing
    await expect(frontIndex(p)).toBe(1);
    const running = p.videos.filter(video => video && !video.paused);
    await expect(running).toEqual([p.videos[1]]);
  },
};

export const VideoPlayBudget = {
  tags: ["!dev"],
  name: "Video: three plays, then the still and Play",
  globals: viewport(1440),
  render: () => <Harness html={facultyCarouselHtml()} />,
  play: async ({ canvasElement }) => {
    await emulateReducedMotion(true);
    const p = await find(canvasElement);
    const video = p.videos[0];
    const stub = p.stubs[0];
    environment.emit(video, 1);
    await waitFor(() =>
      expect(video.classList.contains("is-ready")).toBe(true)
    );
    // two ends restart the clip without the still dipping through: is-ready is never removed in between
    // (the spy sees a remove-then-add that a final-state check would miss)
    let removals = 0;
    const remove = video.classList.remove;
    video.classList.remove = (...names) => {
      if (names.includes("is-ready")) removals += 1;
      return remove.apply(video.classList, names);
    };
    stub.finish();
    await settle();
    stub.finish();
    await settle();
    delete video.classList.remove;
    await expect(removals).toBe(0);
    await expect(video.classList.contains("is-ready")).toBe(true);
    await expect(stub.calls.play).toBe(3);
    // the third end is the last: the video stays on its first frame, the still returns, Play shows
    stub.finish();
    await waitFor(() =>
      expect(video.classList.contains("is-ready")).toBe(false)
    );
    await expect(video.paused).toBe(true);
    await expect(p.controls[0].dataset.state).toBe("paused");
    await expect(p.controls[0].getAttribute("aria-label")).toBe(
      `Play the ${PEOPLE[0].name} video`
    );
    // Play gives one more run, then it stops again
    await click(p.controls[0]);
    await waitFor(() =>
      expect(video.classList.contains("is-ready")).toBe(true)
    );
    stub.finish();
    await waitFor(() =>
      expect(video.classList.contains("is-ready")).toBe(false)
    );
    // a spent card that comes back to the front shows the still with Play and does not autoplay
    await click(p.next);
    await click(p.prev);
    environment.emit(video, 1);
    await settle();
    await expect(video.paused).toBe(true);
    await expect(video.classList.contains("is-ready")).toBe(false);
  },
};

export const VideoVisitorPause = {
  tags: ["!dev"],
  name: "Video: a visitor's pause sticks",
  globals: viewport(1440),
  render: () => <Harness html={facultyCarouselHtml()} />,
  play: async ({ canvasElement }) => {
    await emulateReducedMotion(true);
    const p = await find(canvasElement);
    environment.emit(p.videos[0], 1);
    await waitFor(() =>
      expect(p.videos[0].classList.contains("is-ready")).toBe(true)
    );
    await click(p.controls[0]); // pause
    await expect(p.videos[0].paused).toBe(true);
    // the paused frame stays (no still) while the card is in front
    await expect(p.videos[0].classList.contains("is-ready")).toBe(true);
    // away and back: still showing, still paused, even when the fan is in view
    await click(p.next);
    await expect(p.videos[0].classList.contains("is-ready")).toBe(false);
    await click(p.prev);
    environment.emit(p.videos[0], 1);
    await settle();
    await expect(p.videos[0].paused).toBe(true);
    await expect(p.stubs[0].calls.play).toBe(1);
    await expect(p.controls[0].dataset.state).toBe("paused");
  },
};

export const VideoReducedMotion = {
  tags: ["!dev"],
  name: "Video: reduced motion",
  globals: viewport(1440),
  parameters: { environmentOptions: { reducedMotion: true } },
  render: () => <Harness html={facultyCarouselHtml()} />,
  play: async ({ canvasElement }) => {
    await emulateReducedMotion(true);
    const p = await find(canvasElement);
    environment.emit(p.videos[0], 1);
    await settle();
    // nothing autoplays; pressing Play still works
    await expect(p.stubs[0].calls.play).toBe(0);
    await click(p.controls[0]);
    await expect(p.stubs[0].calls.play).toBe(1);
    await waitFor(() =>
      expect(p.videos[0].classList.contains("is-ready")).toBe(true)
    );
  },
};

export const VideoError = {
  tags: ["!dev"],
  name: "Video: a source that fails hides its control",
  globals: viewport(1440),
  render: () => <Harness html={facultyCarouselHtml()} />,
  play: async ({ canvasElement }) => {
    await emulateReducedMotion(true);
    const p = await find(canvasElement);
    // a failure while the video is showing puts the still back (no frozen frame) and hides the control
    environment.emit(p.videos[1], 1);
    environment.emit(p.videos[0], 1);
    await waitFor(() =>
      expect(p.videos[0].classList.contains("is-ready")).toBe(true)
    );
    p.controls[0].focus();
    await expect(document.activeElement).toBe(p.controls[0]);
    p.videos[0].dispatchEvent(new Event("error"));
    await expect(p.controls[0].hidden).toBe(true);
    await expect(p.videos[0].classList.contains("is-ready")).toBe(false);
    // focus moves to the card's pick button
    await expect(document.activeElement).toBe(p.picks[0]);
    // the other cards are unaffected
    await expect(p.controls[1].hidden).toBe(false);
  },
};

export const ControlsFirst = {
  tags: ["!dev"],
  name: "Video: the shared controls initialised first",
  globals: viewport(1440),
  render: () => <Harness controlsFirst html={facultyCarouselHtml()} />,
  play: async ({ canvasElement }) => {
    await emulateReducedMotion(true);
    const p = await find(canvasElement);
    environment.emit(p.videos[0], 1);
    await waitFor(() => expect(p.stubs[0].calls.play).toBe(1));
    await click(p.next);
    environment.emit(p.videos[1], 1);
    await waitFor(() => expect(p.stubs[1].calls.play).toBe(1));
    await expect(p.videos[0].paused).toBe(true);
    // the three plays and the still, with the shared controls first (the ended check runs a task later)
    p.stubs[1].finish();
    await settle();
    p.stubs[1].finish();
    await settle();
    await expect(p.videos[1].classList.contains("is-ready")).toBe(true);
    p.stubs[1].finish();
    await waitFor(() =>
      expect(p.videos[1].classList.contains("is-ready")).toBe(false)
    );
  },
};

// A back card that is already fully in view has a cached ratio of 1: removing its hold starts it at once.
export const VideoNextAutoplay = {
  tags: ["!dev"],
  name: "Video: next starts a card that was already in view",
  globals: viewport(1440),
  render: () => <Harness html={facultyCarouselHtml()} />,
  play: async ({ canvasElement }) => {
    await emulateReducedMotion(true);
    const p = await find(canvasElement);
    environment.emit(p.videos[1], 1);
    environment.emit(p.videos[0], 1);
    await waitFor(() => expect(p.stubs[0].calls.play).toBe(1));
    await expect(p.stubs[1].calls.play).toBe(0);
    await click(p.next);
    await waitFor(() => expect(p.stubs[1].calls.play).toBe(1));
    await expect(p.videos[0].paused).toBe(true);
  },
};

// --- script contract ---

export const InitContract = {
  tags: ["!dev"],
  name: "Init contract",
  globals: viewport(1440),
  render: () => <Harness manual html={facultyCarouselHtml()} />,
  play: async ({ canvasElement }) => {
    await emulateReducedMotion(true);
    const p = parts(canvasElement);
    await waitFor(() => expect(getStub(p.videos[0])).toBeDefined());
    const template = document.createElement("template");
    template.innerHTML = facultyCarouselHtml();
    // init twice: idempotent
    const stop = initFacultyCarousel(canvasElement);
    const again = initFacultyCarousel(canvasElement);
    const stopControls = initVideoControls(canvasElement);
    await expect(p.section.classList.contains("is-enhanced")).toBe(true);
    await click(p.next);
    await expect(frontIndex(p)).toBe(1);
    await expect(p.status.textContent).not.toBe("");
    // a video that is playing when the page tears the carousel down stops and is held again
    environment.emit(p.videos[1], 1);
    await waitFor(() => expect(p.videos[1].paused).toBe(false));
    // the entry point exports it next to the other inits
    await expect(entry.initFacultyCarousel === initFacultyCarousel).toBe(true);
    // a root that is the section itself works too
    const section = canvasElement.querySelector("section");
    again();
    stop();
    stopControls();
    // teardown restores the server markup, including the authored hold on every video but the first
    await waitFor(() =>
      expect(p.section.classList.contains("is-enhanced")).toBe(false)
    );
    p.videos.forEach((video, i) => {
      if (!video) return;
      expect(video.hasAttribute("data-hold")).toBe(i !== 0);
      expect(video.classList.contains("is-ready")).toBe(false);
      expect(video.hasAttribute("src")).toBe(false);
      expect(p.controls[i].hidden).toBe(true);
    });
    await expect(p.videos[1].paused).toBe(true);
    p.picks.forEach(pick => expect(pick.hidden).toBe(true));
    await expect(p.prev.hidden).toBe(true);
    await expect(p.next.hidden).toBe(true);
    await expect(p.status.textContent).toBe("");
    await expect(
      p.section.isEqualNode(template.content.firstElementChild)
    ).toBe(true);
    // and it can be enhanced again, from the section element itself
    const stopAgain = initFacultyCarousel(section);
    await expect(p.section.classList.contains("is-enhanced")).toBe(true);
    stopAgain();
  },
};

export const LateContent = {
  tags: ["!dev"],
  name: "Content added later",
  globals: viewport(1440),
  render: () => (
    <>
      <Harness html={facultyCarouselHtml({ id: "hp-faculty-a" })} />
      <Harness manual html={facultyCarouselHtml({ id: "hp-faculty-b" })} />
    </>
  ),
  play: async ({ canvasElement }) => {
    const a = await find(canvasElement, "hp-faculty-a");
    const b = parts(canvasElement, "hp-faculty-b");
    await expect(b.section.classList.contains("is-enhanced")).toBe(false);
    // init over the whole page binds the new copy and leaves the first one alone
    const stop = initFacultyCarousel(canvasElement);
    await expect(b.section.classList.contains("is-enhanced")).toBe(true);
    // the first copy was not bound twice: one press moves it exactly one card
    await click(a.next);
    await expect(frontIndex(a)).toBe(1);
    stop();
  },
};

// --- more contracts ---

// Render only (no play function): the Playwright spec measures this one at real widths.
export const Fan = {
  tags: ["!dev"],
  name: "Fan (render only)",
  globals: viewport(1440),
  render: () => <Harness html={facultyCarouselHtml()} />,
};

export const TabOrder = {
  tags: ["!dev"],
  name: "Tab order",
  globals: viewport(1440),
  render: () => <Harness html={facultyCarouselHtml()} />,
  play: async ({ canvasElement }) => {
    if (!realTab.available) return;
    await emulateReducedMotion(true);
    const p = await find(canvasElement);
    p.picks[0].focus();
    // the front card's pause control, the two back cards (in roster order), the panel's link, the arrows, the link
    const expected = [
      p.controls[0],
      p.picks[1],
      p.picks[2],
      p.panels[0].querySelector(".hp-faculty__more"),
      p.prev,
      p.next,
      p.all,
    ];
    for (const element of expected) {
      await realTab();
      await expect(document.activeElement).toBe(element);
    }
    // after a wrap the trio is right, left, front in roster order: nothing is skipped or trapped
    await click(p.prev);
    await expect(frontIndex(p)).toBe(5);
    p.picks[0].focus();
    await realTab();
    await expect(document.activeElement).toBe(p.picks[1]);
    await realTab();
    await expect(document.activeElement).toBe(p.picks[5]);
  },
};

// The theme draws link focus with a box-shadow, which forced-colors mode removes: the links need a real outline.
export const ForcedColors = {
  tags: ["!dev"],
  name: "Forced colors",
  globals: viewport(1440),
  render: () => <Harness html={facultyCarouselHtml()} />,
  play: async ({ canvasElement }) => {
    if (!realTab.available) return;
    await emulateReducedMotion(true);
    const p = await find(canvasElement);
    await emulateForcedColors(true);
    try {
      await waitFor(() =>
        expect(window.matchMedia("(forced-colors: active)").matches).toBe(true)
      );
      const more = p.panels[0].querySelector(".hp-faculty__more");
      p.picks[2].focus();
      await realTab();
      await expect(document.activeElement).toBe(more);
      await expect(style(more).outlineStyle, "more").not.toBe("none");
      await expect(parseFloat(style(more).outlineWidth)).toBeGreaterThan(0);
      p.next.focus();
      await realTab();
      await expect(document.activeElement).toBe(p.all);
      await expect(style(p.all).outlineStyle, "all").not.toBe("none");
      await expect(parseFloat(style(p.all).outlineWidth)).toBeGreaterThan(0);
      // the buttons keep theirs
      p.controls[0].focus();
      await realTab();
      await expect(document.activeElement).toBe(p.picks[1]);
      await expect(style(p.picks[1]).outlineStyle, "pick").not.toBe("none");
    } finally {
      await emulateForcedColors(false);
    }
  },
};

export const BreakpointCrossing = {
  tags: ["!dev"],
  name: "Crossing 1023 and 1024 keeps the state",
  globals: viewport(1024),
  render: () => <Harness html={facultyCarouselHtml()} />,
  play: async ({ canvasElement }) => {
    await emulateReducedMotion(true);
    await resizeViewport(1024, 900);
    const p = await find(canvasElement);
    await click(p.picks[1]);
    await expect(frontIndex(p)).toBe(1);
    const state = () => ({
      pos: p.cards.map(posOf),
      active: p.panels.map(panel => panel.classList.contains("is-active")),
      text: p.status.textContent,
    });
    const before = state();
    for (const width of [1023, 1024, 1023]) {
      await resizeViewport(width, 900);
      await expect(state()).toEqual(before);
      await expect(style(p.panels[1]).display).toBe("block");
      await expect(style(p.panels[0]).display).toBe(
        width < 1024 ? "none" : "block"
      );
    }
  },
};

// Only an absolute-or-relative http(s) source is attached; the control stays hidden where nothing was.
export const SourceSafety = {
  tags: ["!dev"],
  name: "Unsafe or empty video sources",
  globals: viewport(1440),
  render: () => {
    const sources = [
      "javascript:alert(1)",
      " ",
      "data:video/mp4;base64,AAAA",
      "/media/faculty.mp4",
    ];
    const people = PEOPLE.map((person, i) =>
      i < 4 ? { ...person, video: sources[i] } : person
    );
    return <Harness html={facultyCarouselHtml({ people })} />;
  },
  play: async ({ canvasElement }) => {
    await emulateReducedMotion(true);
    const p = await find(canvasElement);
    for (const i of [0, 1, 2]) {
      await expect(getSource(p.videos[i]).sets).toEqual([]);
      await expect(p.videos[i].hasAttribute("src")).toBe(false);
      await expect(p.controls[i].hidden).toBe(true);
    }
    await expect(getSource(p.videos[3]).sets).toEqual([
      `${window.location.origin}/media/faculty.mp4`,
    ]);
    await expect(p.controls[3].hidden).toBe(false);
  },
};

// --- live preview (brand QA) ---

// Not a test: it plays the real clips, so it is excluded from the test run. Scroll the fan fully into view to
// see the front video start; it stops on the still with Play after three plays.
export const LivePreview = {
  name: "Live video (preview)",
  tags: ["!test"],
  globals: viewport(1440),
  render: () => (
    <LiveHarness html={facultyCarouselHtml({ id: "hp-faculty-live" })} />
  ),
  parameters: {
    realEnvironment: true,
    docs: {
      description: {
        story:
          "QA preview with the real prototype clips and the real IntersectionObserver, no fakes: the front video starts once the fan is fully on screen, a visitor's pause sticks, pressing a card or an arrow brings it forward and starts its video, and after three plays the poster returns with the Play button.",
      },
    },
  },
};

// The Storybook UI plays the real clips for QA; these assertions rely on the test fakes, so only the test runner runs them.
[
  Default,
  Phone393,
  Tablet768,
  Desktop1024,
  Desktop1280,
  Desktop1440,
  Large1920,
].forEach(story => {
  const { play } = story;
  story.play = context => (realPointer.available ? play(context) : undefined);
});
