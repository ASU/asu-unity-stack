// Pure markup builder for the homepage "Make it yours" section. No React, no DOM: it runs in Storybook,
// Vitest and plain Node (handoff/WWWCMS-237/markup.html is exported from it). Design doc: WWWCMS-237.
// Icon: Font Awesome Free 6.4.2 solid arrow-right (CC BY 4.0, https://fontawesome.com/license/free).
const ARROW_PATH =
  "M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z";
const arrow = `<svg class="hp-myours__cta-icon" viewBox="0 0 448 512" aria-hidden="true" focusable="false"><path fill="currentColor" d="${ARROW_PATH}"/></svg>`;

export const GA_COMPONENT = "homepage make it yours";
export const GA_SECTION = "make it yours";
export const DESKTOP_MEDIA = "(min-width: 769px)"; // keep equal to DESKTOP in make-it-yours.js and $hp-myours-bp
export const TAB_COUNT = 5;

const escape = value =>
  String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

// http(s), root-relative and fragment URLs only; anything else (javascript:, data:, empty) is dropped.
// "//" and "/\" are protocol-relative to a browser, so a root-relative URL may not start with either.
const SAFE_URL = /^(?:https?:\/\/|\/(?![/\\])|#)/i;
// Browsers drop tab, LF and CR inside a URL, so "/<tab>/evil" becomes "//evil". Any C0 control or DEL inside the URL
// is rejected (not stripped): no silent rewrite of what the editor typed.
const CONTROL_CHARS = /[\u0000-\u001f\u007f]/;
const safeHref = value => {
  const text = String(value ?? "").trim();
  return SAFE_URL.test(text) && !CONTROL_CHARS.test(text) ? text : "";
};
const FOCUS = /^\d{1,3}(?:\.\d+)?% \d{1,3}(?:\.\d+)?%$/;
const focusOf = value =>
  FOCUS.test(String(value ?? "").trim()) ? String(value).trim() : "50% 50%";

const isExternal = href => {
  if (!/^https?:\/\//i.test(href)) return false;
  try {
    const host =
      typeof location === "undefined" ? "www.asu.edu" : location.host;
    return new URL(href).host !== host;
  } catch {
    return true;
  }
};

// Data layer (asucms docs/datalayer.md), the data-ga-text family only. TODO: confirm the names with the data team.
const ga = (text, { event, action, href = "" }) =>
  `data-ga-name="onclick" data-ga-event="${event}" data-ga-action="${action}" data-ga-type="${isExternal(href) ? "external link" : "internal link"}" data-ga-region="main content" data-ga-section="${GA_SECTION}" data-ga-component="${GA_COMPONENT}" data-ga-text="${escape(String(text).toLowerCase())}"`;

// "it yours" underlined in "Make it yours": the last word hosts the scribble, earlier words are the lead-in.
const headingHtml = (heading, underlined) => {
  const text = String(heading);
  const phrase = String(underlined ?? "").trim();
  const at = phrase ? text.lastIndexOf(phrase) : -1;
  if (at < 0 || at + phrase.length !== text.length)
    return { html: escape(text), lead: false };
  const words = phrase.split(/\s+/);
  const last = words.pop();
  const lead = words.join(" ");
  const mark = `<span class="scrib-host">${escape(last)}<img class="scrib scrib--myours hp-myours__scrib" src="img/scribble-myours.svg" alt="" aria-hidden="true"></span>`;
  const leadHtml = lead
    ? `<span class="hp-myours__lead">${escape(lead)}</span> `
    : "";
  return {
    html: `${escape(text.slice(0, at))}${leadHtml}${mark}`,
    lead: Boolean(lead),
  };
};

const itemHtml = (tab, i, id) => {
  const base = `${id}-tab-${i + 1}`;
  const href = safeHref(tab.cta?.url);
  const cta = href
    ? `<a class="hp-myours__cta" href="${escape(href)}" ${ga(tab.cta.label, { event: "link", action: "click", href })}>${escape(tab.cta.label)}${arrow}</a>`
    : "";
  return `<div class="hp-myours__item" data-tab="${escape(tab.slug)}"><h3 class="hp-myours__tab-heading"><button type="button" class="hp-myours__trigger" id="${base}-trigger" aria-controls="${base}-panel" ${ga(tab.title, { event: "select", action: "open" })}>${escape(tab.title)}</button></h3><div class="hp-myours__panel" id="${base}-panel" role="region" aria-labelledby="${base}-trigger"><div class="hp-myours__panel-inner"><p class="hp-myours__desc">${escape(tab.description)}</p>${cta}</div></div></div>`;
};

const figureHtml = (tab, i) => {
  const { desktop, mobile } = tab;
  const srcset = desktop.sources
    .map(s => `${escape(s.src)} ${Number(s.width)}w`)
    .join(", ");
  return `<figure class="hp-myours__photo${i === 0 ? " is-active" : ""}" data-tab="${escape(tab.slug)}" style="--hp-myours-focus: ${focusOf(desktop.focus)}"><picture><source media="${DESKTOP_MEDIA}" sizes="100vw" srcset="${srcset}"><img class="hp-myours__img" src="${escape(mobile.src)}" width="900" height="650" alt="${escape(mobile.alt)}" data-alt-desktop="${escape(desktop.alt)}" loading="lazy" decoding="async"></picture><figcaption class="hp-myours__caption"><span class="hp-myours__caption-text hp-myours__caption-text--desktop">${escape(desktop.caption)}</span><span class="hp-myours__caption-text hp-myours__caption-text--mobile">${escape(mobile.caption)}</span></figcaption></figure>`;
};

// Editor limits (characters) for Stage B, measured so the worst case still fits the fixed 865px desktop stage
// (Amendment A2.1): all five tabs at these lengths, at 769, 1280 and 3934, leave the open tab at least 24px above the
// stage bottom, keep each CTA and title on one line and the heading unclipped. The `MaxLengthContent` story checks
// them. The helper does not enforce them; Stage B validates the fields.
export const MAKE_IT_YOURS_LIMITS = {
  heading: 13,
  intro: 280,
  title: 40,
  description: 250,
  ctaLabel: 40,
};

// Desktop sources: the "-1280" tier is at least 1280 wide AND at least 865px tall (the stage height), so wide
// photos get a wider file (1330w, 1873w; scripts/make-it-yours-images.sh). The descriptor is the real width.
export const MAKE_IT_YOURS = {
  heading: "Make it yours",
  underlined: "it yours",
  intro:
    "Design a path around your interests and your ambitions — what you study, how and where you learn, who you’re with, what comes next. Everything here can flex and be customized by you — except our standard for academic excellence.",
  tabs: [
    {
      slug: "design-your-degree",
      title: "Design your degree",
      description:
        "Your degree isn’t one fixed product — it’s a stack you assemble. Majors, minors, certificates, interdisciplinary specializations, built around what you want to do next.",
      cta: {
        label: "Browse degree programs",
        url: "https://admission.asu.edu/academics/majors-degrees",
      },
      desktop: {
        sources: [
          {
            src: "img/make-it-yours/design-your-degree-1280.webp",
            width: 1330,
          },
          {
            src: "img/make-it-yours/design-your-degree-1920.webp",
            width: 1920,
          },
          {
            src: "img/make-it-yours/design-your-degree-2560.webp",
            width: 2560,
          },
          { src: "img/make-it-yours/design-your-degree.webp", width: 3932 },
        ],
        alt: "Minlan, in a maroon graduation cap and gown with a gold ASU stole, holding the stole with both hands and looking off to the side, smiling.",
        caption: "Minlan “Paul” Ezan, ’25 BS in accountancy",
        focus: "50% 7%",
      },
      mobile: {
        src: "img/make-it-yours/design-your-degree-mobile.webp",
        alt: "Laughing graduate in a maroon cap and gown with a gold stole, sitting outdoors and raising a hand in the ASU pitchfork sign.",
        caption: "Minlan “Paul” Ezan, ’25 BS in accountancy",
      },
    },
    {
      slug: "learn-your-way",
      title: "Learn your way",
      description:
        "Same university, multiple ways in. On a campus in metro Phoenix or in downtown Los Angeles, fully online from anywhere, accelerated or hybrid — your life shapes the format, not the reverse.",
      cta: {
        label: "Find your fit",
        url: "https://yourfuture.asu.edu/campus-fit",
      },
      desktop: {
        sources: [
          { src: "img/make-it-yours/learn-your-way-1280.webp", width: 1330 },
          { src: "img/make-it-yours/learn-your-way-1920.webp", width: 1920 },
          { src: "img/make-it-yours/learn-your-way-2560.webp", width: 2560 },
          { src: "img/make-it-yours/learn-your-way.webp", width: 3934 },
        ],
        alt: "Gebriela in an Arizona State University shirt writing in a notebook with a laptop on their lap, at a coffee table covered in papers and supplies.",
        caption: "Gebriela Boteo Flores, ’25 MEd in early childhood education",
        focus: "50% 38%",
      },
      mobile: {
        src: "img/make-it-yours/learn-your-way-mobile.webp",
        alt: "Gebriela in an Arizona State University shirt writing in a notebook with a laptop on their lap, at a coffee table covered in papers and supplies.",
        caption: "Gebriela Boteo Flores, ’25 MEd in early childhood education",
      },
    },
    {
      slug: "find-your-people",
      title: "Find your people",
      description:
        "Community here takes many shapes. Live in a residential college with classmates in your major or join one of 1,000+ student organizations — academic, faith, identity, interest or service.",
      cta: { label: "Explore student life", url: "https://eoss.asu.edu/" },
      desktop: {
        sources: [
          { src: "img/make-it-yours/find-your-people-1280.webp", width: 1280 },
          { src: "img/make-it-yours/find-your-people-1920.webp", width: 1920 },
          { src: "img/make-it-yours/find-your-people-2560.webp", width: 2560 },
          { src: "img/make-it-yours/find-your-people.webp", width: 3934 },
        ],
        alt: "Students Athrava, Aron, Aiyana and Damian walking and chatting across a campus plaza, with a modern brick-and-glass building and other students behind them.",
        caption: "Athrava Warke, Aron Sher, Aiyana Porter, Damian Goacher",
        focus: "50% 70%",
      },
      mobile: {
        src: "img/make-it-yours/find-your-people-mobile.webp",
        alt: "Four students talking and laughing on a stone ledge above the Tempe skyline in warm afternoon light.",
        caption: "Yibo Pang, Devpriya Jaiswal, Zoe Patten, Matthew Pearson",
      },
    },
    {
      slug: "build-your-experience",
      title: "Build your experience",
      description:
        "What you do outside class shapes who you become. Study abroad, civic engagement, internships with real industry partners — work that travels with you, and counts long after you leave.",
      cta: { label: "Learn more", url: "https://yourfuture.asu.edu/" },
      desktop: {
        sources: [
          {
            src: "img/make-it-yours/build-your-experience-1280.webp",
            width: 1873,
          },
          {
            src: "img/make-it-yours/build-your-experience-1920.webp",
            width: 1920,
          },
          {
            src: "img/make-it-yours/build-your-experience-2560.webp",
            width: 2560,
          },
          { src: "img/make-it-yours/build-your-experience.webp", width: 3934 },
        ],
        alt: "Three ASU FIDM students, Halle, Adel and Dominique in business casual clothes and lanyards with badges marked “intern,” walking and laughing together along a downtown Los Angeles sidewalk.",
        caption:
          "Halle Sweeter, Fashion Business; Adel Mosyagin, Fashion Business; Dominique Joseph, Fashion Business",
        focus: "10% 10%",
      },
      mobile: {
        src: "img/make-it-yours/build-your-experience-mobile.webp",
        alt: "Three ASU FIDM students, Halle, Adel and Dominique in business casual clothes and lanyards with badges marked “intern,” walking and laughing together along a downtown Los Angeles sidewalk.",
        caption:
          "Halle Sweeter, Fashion Business; Adel Mosyagin, Fashion Business; Dominique Joseph, Fashion Business",
      },
    },
    {
      slug: "explore-costs-and-aid",
      title: "Explore costs and aid",
      description:
        "College is an important investment that you are making. ASU is here to help make costs easier to understand and help you explore options that may help pay for college.",
      cta: {
        label: "Find resources",
        url: "https://admission.asu.edu/cost-aid",
      },
      desktop: {
        sources: [
          {
            src: "img/make-it-yours/explore-costs-and-aid-1280.webp",
            width: 1280,
          },
          {
            src: "img/make-it-yours/explore-costs-and-aid-1920.webp",
            width: 1920,
          },
          {
            src: "img/make-it-yours/explore-costs-and-aid-2560.webp",
            width: 2560,
          },
          { src: "img/make-it-yours/explore-costs-and-aid.webp", width: 3934 },
        ],
        alt: "Excited graduate at commencement holding her ASU diploma high in the air, with other graduates in maroon and gold in the background.",
        caption: "Barrett Convocation, ’19",
        focus: "50% 49%",
      },
      mobile: {
        src: "img/make-it-yours/explore-costs-and-aid-mobile.webp",
        alt: "Graduate, Nyla, in a maroon cap and gown smiling and hugging someone, holding a bouquet of flowers and ASU diploma.",
        caption: "Nyla Castillo, ’23 master’s degree in special education",
      },
    },
  ],
};

export const makeItYoursHtml = ({
  id = "hp-myours",
  data = MAKE_IT_YOURS,
} = {}) => {
  if (!Array.isArray(data.tabs) || data.tabs.length !== TAB_COUNT) {
    throw new Error("make-it-yours: exactly five tabs are required");
  }
  const heading = headingHtml(data.heading, data.underlined);
  return `<section class="hp-myours" aria-labelledby="${id}-heading"><div class="hp-myours__stage"><div class="hp-myours__head"><h2 id="${id}-heading" class="hp-myours__heading${heading.lead ? " hp-myours__heading--lead" : ""}">${heading.html}</h2><p class="hp-myours__intro">${escape(data.intro)}</p></div><div class="hp-myours__photos">${data.tabs.map(figureHtml).join("")}</div><div class="hp-myours__tabs"><div class="hp-myours__list">${data.tabs.map((tab, i) => itemHtml(tab, i, id)).join("")}</div></div></div></section>`;
};
