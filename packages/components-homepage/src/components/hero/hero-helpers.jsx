import React, { useEffect, useRef } from "react";

import { initVideoControls } from "../video-control/video-control.js";
import { initHero } from "./hero.js";
import {
  POSTER,
  controlHtml,
  stubPlayback,
} from "../video-control/video-control-helpers.jsx";

export {
  emulateReducedMotion,
  realKeyboard,
  realPointer,
  resizeViewport,
  walkRules,
} from "../reimagine/reimagine-helpers.jsx";

// TODO: destination TBD (WWWCMS-232, open question A1). A bare "#" scrolls to the top on click, so the
// placeholder is a unique fragment that matches no element.
export const HERO_HREF = "#hero-find-out-more";
export const HERO_LINK_LABEL =
  "Find out more about ASU’s No. 1 ranking for global impact";
export const VIDEO_SRC = "https://media.example.com/homepage-hero.mp4";

// Icon: Font Awesome Free 6.4.2 solid arrow-right (CC BY 4.0, https://fontawesome.com/license/free).
const ARROW_PATH =
  "M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z";

const escape = value =>
  String(value)
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

// Markup contract (design doc section 6): the Stage B parity source. `id` must be unique per rendered
// copy (it feeds the video id, the control's data-for and the description id).
export const heroHtml = ({
  id = "hp-hero-video",
  poster = true,
  href = HERO_HREF,
  dataSrc = VIDEO_SRC,
  linkLabel = HERO_LINK_LABEL,
  description = "Students walk across the Tempe campus at sunrise while a drone circles the Memorial Union.",
} = {}) => {
  const control = controlHtml({
    id,
    hero: true,
    hidden: true,
    labelPlay: "Play the hero video",
    labelPause: "Pause the hero video",
  }).replace(
    'class="mbtn mbtn--hero"',
    'class="mbtn mbtn--hero hp-hero__control"'
  );
  return `<section class="hp-hero" aria-label="Featured story"><div class="hp-hero__media"><video id="${id}" class="hp-hero__video" muted playsinline preload="none"${poster ? ` poster="${POSTER}"` : ""} data-auto data-src="${escape(dataSrc)}" aria-describedby="${id}-desc"></video><p id="${id}-desc" class="visually-hidden">${escape(description)}</p></div><div class="hp-hero__scrim"></div><div class="hp-hero__inner">${control}<div class="hp-hero__copy"><h1 class="hp-hero__heading">ASU again ranks No. 1 in the US for <span class="text-nowrap">global impact</span><a class="hp-hero__arrow" href="${escape(href)}" aria-label="${escape(linkLabel)}"><span class="hp-hero__arrow-pill"><span class="hp-hero__arrow-label">Find out more</span><svg class="hp-hero__arrow-icon" viewBox="0 0 448 512" aria-hidden="true" focusable="false"><path fill="currentColor" d="${ARROW_PATH}"/></svg></span></a></h1><p class="hp-hero__text">For the seventh year in a row, ASU has been named the top institution in the U.S. for its impact on global challenges, reflecting the university’s work to improve lives around the world.</p><a class="btn btn-gold btn-large hp-hero__cta" href="${escape(href)}" aria-label="${escape(linkLabel)}">Find out more</a></div><div class="hp-hero__assistant" data-hp-slot="assistant"></div></div></section>`;
};

// ---- Test support ----

const sources = new WeakMap();

// Replaces the `src` attribute handling and `load()` of ONE video instance with an in-memory fake, so a
// test can attach a source without any network request. Returns a restore function.
export const stubSource = video => {
  let value = null;
  const record = { sets: [], removes: 0, loads: 0 };
  const original = {
    setAttribute: video.setAttribute,
    removeAttribute: video.removeAttribute,
    getAttribute: video.getAttribute,
    hasAttribute: video.hasAttribute,
  };
  video.setAttribute = (name, attribute) => {
    if (name === "src") {
      value = String(attribute);
      record.sets.push(value);
      return;
    }
    original.setAttribute.call(video, name, attribute);
  };
  video.removeAttribute = name => {
    if (name === "src") {
      if (value !== null) record.removes += 1;
      value = null;
      return;
    }
    original.removeAttribute.call(video, name);
  };
  video.getAttribute = name =>
    name === "src" ? value : original.getAttribute.call(video, name);
  video.hasAttribute = name =>
    name === "src" ? value !== null : original.hasAttribute.call(video, name);
  video.load = () => {
    record.loads += 1;
  };
  sources.set(video, record);
  return () => {
    ["setAttribute", "removeAttribute", "getAttribute", "hasAttribute"].forEach(
      name => {
        delete video[name];
      }
    );
    delete video.load;
    sources.delete(video);
  };
};

export const getSource = video => sources.get(video);

// Renders the markup, fakes playback and the source on every video, then runs the two inits in the
// requested order (`controlsFirst`) or not at all (`manual`, the server-markup state).
export const Harness = ({ html, manual = false, controlsFirst = false }) => {
  const ref = useRef(null);
  useEffect(() => {
    const root = ref.current;
    const videos = Array.from(root.querySelectorAll("video"));
    const restores = videos.flatMap(video => {
      const restore = [stubPlayback(video), stubSource(video)];
      // like a browser: a video without a source rejects play() (NotSupportedError)
      const play = video.play;
      video.play = () =>
        video.hasAttribute("src")
          ? play.call(video)
          : Promise.reject(new DOMException("no source", "NotSupportedError"));
      return restore;
    });
    const destroy = [];
    if (!manual) {
      if (controlsFirst) destroy.push(initVideoControls(root));
      destroy.push(initHero(root));
      if (!controlsFirst) destroy.push(initVideoControls(root));
    }
    return () => {
      destroy.forEach(cleanup => cleanup());
      restores.forEach(restore => restore());
    };
  }, [html, manual, controlsFirst]);
  return <div ref={ref} dangerouslySetInnerHTML={{ __html: html }} />;
};

// QA preview only: the prototype's own hotlink to the current asu.edu clip. Production serves a hosted
// media file (ticket); no video is committed to this repo.
export const LIVE_VIDEO_SRC =
  "https://www.asu.edu/sites/default/files/2026-10/homepage-impact-ranking2026_720p.mp4";

// The real thing, no fakes: real playback, a real source and the real IntersectionObserver. Blank space
// below the hero lets a reviewer scroll it out of view and back.
export const LiveHarness = ({ html }) => {
  const ref = useRef(null);
  useEffect(() => {
    const root = ref.current;
    const destroy = [initHero(root), initVideoControls(root)];
    return () => destroy.forEach(cleanup => cleanup());
  }, [html]);
  return (
    <>
      <div ref={ref} dangerouslySetInnerHTML={{ __html: html }} />
      <div style={{ height: "150vh" }} aria-hidden="true" />
    </>
  );
};

const MIRROR_ID = "hp-hero-hover-mirror";
const HOVER_ATTRIBUTE = "data-hero-hover";

// Storybook cannot set :hover, so the package's own `.hp-hero__*:hover` rules are copied at runtime to
// `[data-hero-hover]` (enclosing @media conditions kept).
const ensureHoverMirror = () => {
  if (document.getElementById(MIRROR_ID)) return;
  const rules = [];
  const collect = (list, conditions) =>
    Array.from(list).forEach(rule => {
      if (rule instanceof CSSStyleRule) {
        if (/\.hp-hero__[^,{]*:hover/.test(rule.selectorText)) {
          const text = rule.cssText.replace(/:hover/g, `[${HOVER_ATTRIBUTE}]`);
          rules.push(
            conditions.reduceRight(
              (inner, condition) => `@media ${condition} { ${inner} }`,
              text
            )
          );
        }
      } else if (rule instanceof CSSMediaRule) {
        collect(rule.cssRules, [...conditions, rule.conditionText]);
      } else if (rule.cssRules) {
        collect(rule.cssRules, conditions);
      }
    });
  Array.from(document.styleSheets).forEach(sheet => {
    try {
      collect(sheet.cssRules, []);
    } catch {
      // cross-origin sheet: not ours
    }
  });
  if (!rules.length) throw new Error("No .hp-hero__*:hover rule to mirror.");
  const style = document.createElement("style");
  style.id = MIRROR_ID;
  style.textContent = rules.join("\n");
  document.head.appendChild(style);
};

// Shows (or clears) the hover styles on an element without a pointer.
export const forceHover = (element, on = true) => {
  ensureHoverMirror();
  element.toggleAttribute(HOVER_ATTRIBUTE, on);
};

// ---- Contrast budget (design doc section 8): pure arithmetic over the scrim stops ----

// Scrim alpha at `fraction` (0 = hero top, 1 = bottom) for stops (top, 40%, bottom).
export const scrimAlpha = (fraction, [top, mid, bottom]) =>
  fraction <= 0.4
    ? top + (mid - top) * (fraction / 0.4)
    : mid + (bottom - mid) * ((fraction - 0.4) / 0.6);

const channel = value => {
  const s = value / 255;
  return s <= 0.03928 ? s / 12.92 : ((s + 0.055) / 1.055) ** 2.4;
};

// Highest video gray (0-255) that keeps white text at `ratio`:1 under a black scrim of `alpha`.
export const maxVideoGray = (alpha, ratio) => {
  const needed = 1.05 / ratio - 0.05;
  let low = 0;
  let high = 255;
  for (let i = 0; i < 40; i += 1) {
    const mid = (low + high) / 2;
    if (channel(mid * (1 - alpha)) <= needed) low = mid;
    else high = mid;
  }
  return low;
};
