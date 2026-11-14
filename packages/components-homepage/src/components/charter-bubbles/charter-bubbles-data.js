// Charter Bubbles data contract — WWWCMS-238

/**
 * @typedef {Object} CharterBubbleItem
 * @property {string} id Stable, unique HTML-safe token.
 * @property {string} frontHeadline Headline displayed on the closed face.
 * @property {string} backHeadline Heading displayed on the expanded face.
 * @property {string} detail Expanded supporting copy.
 * @property {string} linkLabel Expanded link label.
 * @property {string} linkUrl Safe absolute, relative, or fragment URL.
 * @property {Record<string, string|number|boolean>} [frontAnalytics] Approved data-ga-* attributes for the front control.
 * @property {Record<string, string|number|boolean>} [linkAnalytics] Approved data-ga-* attributes for the link.
 * @property {Record<string, string|number|boolean>} [closeAnalytics] Approved data-ga-* attributes for the close control.
 */

export const CHARTER_BUBBLE_COUNT = 5;

const REQUIRED_STRING_FIELDS = [
  "id",
  "frontHeadline",
  "backHeadline",
  "detail",
  "linkLabel",
  "linkUrl",
];

/**
 * Returns an HTML-safe ID token or the supplied fallback.
 *
 * @param {unknown} id
 * @param {string} [fallback=""]
 * @returns {string}
 */
export const sanitizeCharterBubbleId = (id, fallback = "") => {
  if (typeof id !== "string" || !/^[A-Za-z][\w-]*$/.test(id)) {
    return fallback;
  }

  return id;
};

/**
 * Allows HTTP(S), mail, telephone, fragment, and relative URLs. Any unsafe or
 * unusable value resolves to the non-navigating placeholder.
 *
 * @param {unknown} url
 * @returns {string}
 */
export const sanitizeCharterBubbleUrl = url => {
  if (typeof url !== "string") return "#";

  const trimmed = url.trim();
  if (!trimmed) return "#";
  if (trimmed.startsWith("#")) return trimmed;
  if (
    trimmed.startsWith("/") ||
    trimmed.startsWith("./") ||
    trimmed.startsWith("../")
  ) {
    return trimmed;
  }

  const colonAt = trimmed.indexOf(":");
  const slashAt = trimmed.indexOf("/");
  const hasLeadingScheme =
    colonAt !== -1 && (slashAt === -1 || colonAt < slashAt);

  if (!hasLeadingScheme) return trimmed;
  return /^(https?|mailto|tel):/i.test(trimmed) ? trimmed : "#";
};

/**
 * Constrains consumer analytics forwarding to serializable `data-ga-*` keys.
 * Event names and values remain consumer/data-owner supplied.
 *
 * @param {unknown} attributes
 * @returns {Record<string, string|number|boolean>}
 */
export const approvedGaAttributes = attributes => {
  if (
    !attributes ||
    typeof attributes !== "object" ||
    Array.isArray(attributes)
  ) {
    return {};
  }

  return Object.fromEntries(
    Object.entries(attributes).filter(
      ([name, value]) =>
        /^data-ga-[a-z0-9_-]+$/i.test(name) &&
        ["string", "number", "boolean"].includes(typeof value)
    )
  );
};

/**
 * Validates the public five-item contract without mutating the input.
 *
 * @param {unknown} items
 * @returns {{isValid: boolean, errors: string[]}}
 */
export const validateCharterBubbleItems = items => {
  const errors = [];

  if (!Array.isArray(items)) {
    return {
      isValid: false,
      errors: ["Charter bubbles must be supplied as an array."],
    };
  }

  if (items.length !== CHARTER_BUBBLE_COUNT) {
    errors.push(
      `Charter bubbles require exactly ${CHARTER_BUBBLE_COUNT} items; received ${items.length}.`
    );
  }

  const seenIds = new Set();

  items.forEach((item, index) => {
    if (!item || typeof item !== "object" || Array.isArray(item)) {
      errors.push(`Charter bubble ${index + 1} must be an object.`);
      return;
    }

    REQUIRED_STRING_FIELDS.forEach(field => {
      if (typeof item[field] !== "string" || item[field].trim() === "") {
        errors.push(`Charter bubble ${index + 1} requires ${field}.`);
      }
    });

    const safeId = sanitizeCharterBubbleId(item.id);
    if (!safeId || safeId !== item.id) {
      errors.push(`Charter bubble ${index + 1} has an unsafe id.`);
    } else if (seenIds.has(safeId)) {
      errors.push(`Charter bubble id "${safeId}" must be unique.`);
    } else {
      seenIds.add(safeId);
    }

    if (
      typeof item.linkUrl === "string" &&
      sanitizeCharterBubbleUrl(item.linkUrl) !== item.linkUrl.trim()
    ) {
      errors.push(`Charter bubble ${index + 1} has an unsafe linkUrl.`);
    }
  });

  return { isValid: errors.length === 0, errors };
};

const createDefaultItem = item => Object.freeze(item);

/**
 * Canonical DOM, focus, carousel, and visual order. Copy is approved from
 * `.intake/copy.md`. Link destinations remain TODO placeholders until supplied.
 *
 * @type {ReadonlyArray<Readonly<CharterBubbleItem>>}
 */
export const DEFAULT_CHARTER_BUBBLES = Object.freeze([
  createDefaultItem({
    id: "employability",
    frontHeadline: "#2 public university in the U.S. for employability",
    backHeadline: "#2 public university in the U.S. for employability",
    detail:
      "Employers rank ASU graduates ahead of UCLA, Michigan and Purdue on readiness to contribute.",
    linkLabel: "Career outcomes",
    linkUrl: "#", // TODO(WWWCMS-238): replace with the approved destination.
  }),
  createDefaultItem({
    id: "fortune-500",
    frontHeadline: "Fortune 500 companies rely on ASU",
    backHeadline: "Fortune 500 companies rely on ASU",
    detail:
      "Industry partners work alongside ASU researchers and students on problems that matter now.",
    linkLabel: "Partners and industry",
    linkUrl: "#", // TODO(WWWCMS-238): replace with the approved destination.
  }),
  createDefaultItem({
    id: "faculty",
    frontHeadline: "Top-tier faculty like no other",
    backHeadline: "Top-tier faculty like no other",
    detail:
      "Nobel laureates, MacArthur fellows and National Academy members teach here — and they teach undergraduates.",
    linkLabel: "Explore our faculty",
    linkUrl: "#", // TODO(WWWCMS-238): replace with the approved destination.
  }),
  createDefaultItem({
    id: "degree-programs",
    frontHeadline: "30 degree programs rank top 10 in the U.S.",
    backHeadline: "30 degree programs rank top 10 in the U.S.",
    detail:
      "Depth across disciplines, from engineering and sustainability to journalism and design.",
    linkLabel: "Browse programs",
    linkUrl: "#", // TODO(WWWCMS-238): replace with the approved destination.
  }),
  createDefaultItem({
    id: "undergraduate-research",
    frontHeadline: "Elite research opportunities for undergrads",
    backHeadline: "Elite research opportunities for undergrads",
    detail:
      "Undergraduates join funded research from year one, not after they’ve proved themselves.",
    linkLabel: "Research at ASU",
    linkUrl: "#", // TODO(WWWCMS-238): replace with the approved destination.
  }),
]);
