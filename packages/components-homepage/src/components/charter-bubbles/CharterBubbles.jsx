import React, {
  forwardRef,
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
} from "react";

import { CharterBubble } from "./CharterBubble.jsx";
import { CharterBubbleCarousel } from "./CharterBubbleCarousel.jsx";
import { CharterBubbleCluster } from "./CharterBubbleCluster.jsx";
import {
  DEFAULT_CHARTER_BUBBLES,
  sanitizeCharterBubbleId,
  validateCharterBubbleItems,
} from "./charter-bubbles-data.js";
import { initCharterBubbles } from "./charter-bubbles.js";

const useBrowserLayoutEffect =
  typeof window === "undefined" ? useEffect : useLayoutEffect;

/**
 * @typedef {Object} CharterBubbleItem
 * @property {string} id
 * @property {string} frontHeadline
 * @property {string} backHeadline
 * @property {string} detail
 * @property {string} linkLabel
 * @property {string} linkUrl
 * @property {Record<string, string|number|boolean>} [frontAnalytics] Approved data-ga-* attributes for the front control.
 * @property {Record<string, string|number|boolean>} [linkAnalytics] Approved data-ga-* attributes for the expanded link.
 * @property {Record<string, string|number|boolean>} [closeAnalytics] Approved data-ga-* attributes for the close control.
 */

/**
 * @typedef {Object} CharterBubblesProps
 * @property {ReadonlyArray<CharterBubbleItem>} [items] Five validated items.
 * @property {string} instanceId Stable unique ID shared with static output.
 * @property {string|null} [initialOpenId=null] Initially expanded item ID.
 * @property {string} [className=""] Additional root class for composition.
 * @property {Record<string, string|number|boolean>} [previousAnalytics] Approved data-ga-* attributes for Previous.
 * @property {Record<string, string|number|boolean>} [nextAnalytics] Approved data-ga-* attributes for Next.
 */

const warnInDevelopment = message => {
  if (import.meta.env?.DEV) {
    // eslint-disable-next-line no-console
    console.warn(`[charter-bubbles] ${message} (WWWCMS-238)`);
  }
};

const resolveItems = items => {
  const validation = validateCharterBubbleItems(items);

  if (validation.isValid) return items;

  warnInDevelopment(
    `Invalid custom data; using reviewed defaults. ${validation.errors.join(" ")}`
  );
  return DEFAULT_CHARTER_BUBBLES;
};

/**
 * Coordinates one canonical bubble list across the cluster and carousel shells.
 *
 * @param {CharterBubblesProps} props
 * @param {React.ForwardedRef<HTMLDivElement>} ref
 * @returns {JSX.Element}
 */
const CharterBubblesRender = (
  {
    items = DEFAULT_CHARTER_BUBBLES,
    instanceId,
    initialOpenId = null,
    className = "",
    previousAnalytics,
    nextAnalytics,
  },
  forwardedRef
) => {
  const resolvedItems = resolveItems(items);
  const safeInstanceId = sanitizeCharterBubbleId(instanceId, "charter-bubbles");
  const openIndex = resolvedItems.findIndex(item => item.id === initialOpenId);
  const activeOpenId = openIndex === -1 ? null : initialOpenId;
  const structuralSignature = JSON.stringify([
    safeInstanceId,
    ...resolvedItems.map(item => item.id),
  ]);
  const classes = ["hp-charter-bubbles", className].filter(Boolean).join(" ");
  const rootRef = useRef(null);
  const assignRoot = useCallback(
    node => {
      rootRef.current = node;
      if (typeof forwardedRef === "function") forwardedRef(node);
      else if (forwardedRef) forwardedRef.current = node;
    },
    [forwardedRef]
  );

  if (safeInstanceId !== instanceId) {
    warnInDevelopment(
      'A unique HTML-safe instanceId is required; using "charter-bubbles".'
    );
  }

  useBrowserLayoutEffect(() => {
    const root = rootRef.current;
    const teardown = initCharterBubbles(root);

    return () => {
      const activeElement = root?.ownerDocument?.activeElement;
      const focusedItem = activeElement?.closest?.(
        "[data-charter-bubble-item]"
      );
      const focusedId = focusedItem?.getAttribute("data-charter-bubble-id");
      const shouldRestoreFocus = Boolean(
        root?.isConnected && activeElement && root.contains(activeElement)
      );

      teardown();

      if (!shouldRestoreFocus || !root?.isConnected) return;
      const itemsInCurrentContract = Array.from(
        root.querySelectorAll("[data-charter-bubble-item]")
      );
      const focusItem =
        itemsInCurrentContract.find(
          item => item.getAttribute("data-charter-bubble-id") === focusedId
        ) ?? itemsInCurrentContract[0];
      const front = focusItem?.querySelector("[data-charter-bubble-open]");
      try {
        front?.focus({ preventScroll: true });
      } catch {
        front?.focus();
      }
    };
  }, [structuralSignature]);

  useBrowserLayoutEffect(() => {
    // React or a host renderer can restore the authored className during a
    // responsive rerender. Initialization is idempotent and reasserts the
    // controller-owned enhancement and layout state when already active.
    initCharterBubbles(rootRef.current);
  });

  return (
    <div
      ref={assignRoot}
      className={classes}
      data-charter-bubbles=""
      data-charter-bubbles-instance={safeInstanceId}
      data-open-id={activeOpenId || undefined}
    >
      <CharterBubbleCluster openIndex={openIndex}>
        <CharterBubbleCarousel
          previousAnalytics={previousAnalytics}
          nextAnalytics={nextAnalytics}
        >
          <ol
            className="hp-charter-bubbles__list"
            aria-label="ASU by the numbers"
            data-charter-bubble-list=""
          >
            {resolvedItems.map(item => (
              <CharterBubble
                key={item.id}
                item={item}
                instanceId={safeInstanceId}
                isOpen={item.id === activeOpenId}
              />
            ))}
          </ol>
        </CharterBubbleCarousel>
      </CharterBubbleCluster>
    </div>
  );
};

const CharterBubbles = forwardRef(CharterBubblesRender);
CharterBubbles.displayName = "CharterBubbles";

export { CharterBubbles };
