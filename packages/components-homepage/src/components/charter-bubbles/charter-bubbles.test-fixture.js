import {
  approvedGaAttributes,
  DEFAULT_CHARTER_BUBBLES,
  sanitizeCharterBubbleId,
  sanitizeCharterBubbleUrl,
} from "./charter-bubbles-data.js";

const HTML_ESCAPES = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
};

const escapeHtml = value =>
  String(value ?? "").replace(/[&<>"']/g, character => HTML_ESCAPES[character]);

const CHEVRON_PATH =
  "M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z";
const XMARK_PATH =
  "M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z";

const analyticsHtml = attributes =>
  Object.entries(approvedGaAttributes(attributes))
    .map(([name, value]) => ` ${name}="${escapeHtml(value)}"`)
    .join("");

const staticItemHtml = (item, instanceId, openId) => {
  const open = item.id === openId;
  const idBase = `${instanceId}-${item.id}`;
  const triggerId = `${idBase}-trigger`;
  const panelId = `${idBase}-panel`;
  const headingId = `${idBase}-heading`;
  const closeLabel = `Close: ${item.frontHeadline}`;

  return `<li class="hp-charter-bubble${open ? " is-open" : ""}" data-charter-bubble-item data-charter-bubble-id="${escapeHtml(item.id)}" data-charter-bubble-state="${open ? "open" : "closed"}"><button id="${triggerId}" class="hp-charter-bubble__front" type="button" aria-expanded="${open}" aria-controls="${panelId}"${open ? ' aria-hidden="true" tabindex="-1"' : ""} data-charter-bubble-open${analyticsHtml(item.frontAnalytics)}><span class="hp-charter-bubble__front-label">${escapeHtml(item.frontHeadline)}</span><svg class="hp-charter-bubble__chevron" viewBox="0 0 512 512" aria-hidden="true" focusable="false"><path fill="currentColor" d="${CHEVRON_PATH}"></path></svg></button><div id="${panelId}" class="hp-charter-bubble__back"${open ? ' aria-hidden="false"' : ""} aria-labelledby="${headingId}" data-charter-bubble-panel><h3 id="${headingId}" class="hp-charter-bubble__heading">${escapeHtml(item.backHeadline)}</h3><p class="hp-charter-bubble__detail">${escapeHtml(item.detail)}</p><a class="hp-charter-bubble__link" href="${escapeHtml(sanitizeCharterBubbleUrl(item.linkUrl))}"${analyticsHtml(item.linkAnalytics)}>${escapeHtml(item.linkLabel)}</a><button class="hp-charter-bubble__close" type="button" aria-label="${escapeHtml(closeLabel)}" data-charter-bubble-close${analyticsHtml(item.closeAnalytics)}><svg class="hp-charter-bubble__close-icon" viewBox="0 0 384 512" aria-hidden="true" focusable="false"><path fill="currentColor" d="${XMARK_PATH}"></path></svg></button></div></li>`;
};

/**
 * Static Stage B/Twig-shaped fixture used to verify the React HTML contract.
 * It intentionally contains no behavior and never enters the production bundle.
 */
export const charterBubblesStaticHtml = ({
  instanceId = "storybook-charter",
  openId = null,
  items = DEFAULT_CHARTER_BUBBLES,
  previousAnalytics,
  nextAnalytics,
} = {}) => {
  const safeInstanceId = sanitizeCharterBubbleId(
    instanceId,
    "storybook-charter"
  );
  const openIndex = items.findIndex(item => item.id === openId);
  const open = openIndex !== -1;

  return `<div class="hp-charter-bubbles" data-charter-bubbles data-charter-bubbles-instance="${safeInstanceId}"${open ? ` data-open-id="${openId}"` : ""}><div class="hp-charter-bubbles__cluster-shell${open ? " has-open-bubble" : ""}" data-charter-bubble-cluster${open ? ` data-open-slot="${openIndex + 1}"` : ""}><div class="hp-charter-bubbles__cluster-stage" data-charter-bubble-cluster-stage><div class="hp-charter-bubbles__carousel" data-charter-bubble-carousel><div class="hp-charter-bubbles__viewport" data-charter-bubble-viewport><div class="hp-charter-bubbles__track" data-charter-bubble-track><ol class="hp-charter-bubbles__list" aria-label="ASU by the numbers" data-charter-bubble-list>${items.map(item => staticItemHtml(item, safeInstanceId, openId)).join("")}</ol></div></div><div class="hp-charter-bubbles__nav" role="group" aria-label="ASU facts carousel navigation" data-charter-bubble-nav><button class="hp-charter-bubbles__nav-button hp-charter-bubbles__nav-button--previous" type="button" aria-label="Previous ASU fact" disabled data-charter-bubble-previous${analyticsHtml(previousAnalytics)}><span aria-hidden="true">←</span></button><button class="hp-charter-bubbles__nav-button hp-charter-bubbles__nav-button--next" type="button" aria-label="Next ASU fact" data-charter-bubble-next${analyticsHtml(nextAnalytics)}><span aria-hidden="true">→</span></button></div></div></div></div></div>`;
};

/**
 * Reduces either React or static output to the meaningful parity contract.
 */
export const captureCharterBubblesContract = scope => {
  const root = scope?.matches?.("[data-charter-bubbles]")
    ? scope
    : scope?.querySelector?.("[data-charter-bubbles]");
  if (!root) return null;

  const instanceId = root.getAttribute("data-charter-bubbles-instance") ?? "";
  const normalizeId = value =>
    value?.startsWith(`${instanceId}-`)
      ? `{instance}-${value.slice(instanceId.length + 1)}`
      : (value ?? null);
  const classes = element =>
    Array.from(element?.classList ?? [])
      .sort()
      .join(" ");
  const ga = element =>
    Object.fromEntries(
      (element?.getAttributeNames?.() ?? [])
        .filter(name => name.startsWith("data-ga-"))
        .sort()
        .map(name => [name, element.getAttribute(name)])
    );
  const lists = root.querySelectorAll("[data-charter-bubble-list]");
  const items = Array.from(root.querySelectorAll("[data-charter-bubble-item]"));
  const cluster = root.querySelector("[data-charter-bubble-cluster]");
  const stage = root.querySelector("[data-charter-bubble-cluster-stage]");
  const carousel = root.querySelector("[data-charter-bubble-carousel]");
  const viewport = root.querySelector("[data-charter-bubble-viewport]");
  const track = root.querySelector("[data-charter-bubble-track]");
  const navigation = root.querySelector("[data-charter-bubble-nav]");
  const previous = root.querySelector("[data-charter-bubble-previous]");
  const next = root.querySelector("[data-charter-bubble-next]");

  return {
    root: {
      classes: classes(root),
      instanceId: "{instance}",
      enhanced: root.getAttribute("data-enhanced"),
      layout: root.getAttribute("data-layout"),
      openId: root.getAttribute("data-open-id"),
      carouselPosition: root.getAttribute("data-carousel-position"),
    },
    cluster: {
      classes: classes(cluster),
      openSlot: cluster?.getAttribute("data-open-slot") ?? null,
    },
    structure: {
      stageClasses: classes(stage),
      carouselClasses: classes(carousel),
      viewportClasses: classes(viewport),
      trackClasses: classes(track),
      navigationClasses: classes(navigation),
      stageInCluster: stage?.parentElement === cluster,
      carouselInStage: carousel?.parentElement === stage,
      viewportInCarousel: viewport?.parentElement === carousel,
      trackInViewport: track?.parentElement === viewport,
      listInTrack: lists[0]?.parentElement === track,
      navigationInCarousel: navigation?.parentElement === carousel,
    },
    listCount: lists.length,
    listClasses: classes(lists[0]),
    listLabel: lists[0]?.getAttribute("aria-label") ?? null,
    itemCount: items.length,
    items: items.map(item => ({
      id: item.getAttribute("data-charter-bubble-id"),
      classes: classes(item),
      state: item.getAttribute("data-charter-bubble-state"),
      frontHeadline:
        item.querySelector(".hp-charter-bubble__front-label")?.textContent ??
        null,
      backHeadline:
        item.querySelector(".hp-charter-bubble__heading")?.textContent ?? null,
      detail:
        item.querySelector(".hp-charter-bubble__detail")?.textContent ?? null,
      linkLabel:
        item.querySelector(".hp-charter-bubble__link")?.textContent ?? null,
      linkUrl:
        item.querySelector(".hp-charter-bubble__link")?.getAttribute("href") ??
        null,
      front: (() => {
        const element = item.querySelector("[data-charter-bubble-open]");
        return {
          tag: element?.tagName ?? null,
          id: normalizeId(element?.id),
          classes: classes(element),
          type: element?.getAttribute("type") ?? null,
          expanded: element?.getAttribute("aria-expanded") ?? null,
          controls: normalizeId(element?.getAttribute("aria-controls")),
          hidden: element?.getAttribute("aria-hidden") ?? null,
          tabIndex: element?.getAttribute("tabindex") ?? null,
          analytics: ga(element),
        };
      })(),
      panel: (() => {
        const element = item.querySelector("[data-charter-bubble-panel]");
        return {
          tag: element?.tagName ?? null,
          id: normalizeId(element?.id),
          classes: classes(element),
          hidden: element?.getAttribute("aria-hidden") ?? null,
          labelledBy: normalizeId(element?.getAttribute("aria-labelledby")),
          inert: Boolean(element?.hasAttribute("inert")),
        };
      })(),
      link: (() => {
        const element = item.querySelector(".hp-charter-bubble__link");
        return {
          tag: element?.tagName ?? null,
          classes: classes(element),
          href: element?.getAttribute("href") ?? null,
          tabIndex: element?.getAttribute("tabindex") ?? null,
          analytics: ga(element),
        };
      })(),
      close: (() => {
        const element = item.querySelector("[data-charter-bubble-close]");
        const icon = element?.querySelector(".hp-charter-bubble__close-icon");
        return {
          tag: element?.tagName ?? null,
          classes: classes(element),
          type: element?.getAttribute("type") ?? null,
          label: element?.getAttribute("aria-label") ?? null,
          text: element?.textContent?.trim() ?? null,
          tabIndex: element?.getAttribute("tabindex") ?? null,
          analytics: ga(element),
          icon: {
            tag: icon?.tagName ?? null,
            classes: classes(icon),
            viewBox: icon?.getAttribute("viewBox") ?? null,
            hidden: icon?.getAttribute("aria-hidden") ?? null,
            focusable: icon?.getAttribute("focusable") ?? null,
          },
        };
      })(),
      headingId: normalizeId(
        item.querySelector(".hp-charter-bubble__heading")?.id
      ),
    })),
    navigation: {
      label:
        root
          .querySelector("[data-charter-bubble-nav]")
          ?.getAttribute("aria-label") ?? null,
      previous: {
        classes: classes(previous),
        label: previous?.getAttribute("aria-label") ?? null,
        type: previous?.getAttribute("type") ?? null,
        disabled: Boolean(previous?.hasAttribute("disabled")),
        ariaDisabled: previous?.getAttribute("aria-disabled") ?? null,
        analytics: ga(previous),
      },
      next: {
        classes: classes(next),
        label: next?.getAttribute("aria-label") ?? null,
        type: next?.getAttribute("type") ?? null,
        disabled: Boolean(next?.hasAttribute("disabled")),
        ariaDisabled: next?.getAttribute("aria-disabled") ?? null,
        analytics: ga(next),
      },
    },
  };
};
