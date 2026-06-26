// @ts-check
import PropTypes from "prop-types";
import React, { useCallback, useRef, useState } from "react";

import { Hero } from "../Hero/Hero";
import {
  contentPropType,
  imagePropType,
} from "../../core/models/shared-prop-types";

/**
 * @typedef {import('../../core/types/expandable-heroes-types').ExpandableHeroesProps} ExpandableHeroesProps
 */

/** @type {PropTypes.Requireable<object>} */
const panePropType = PropTypes.shape({
  image: imagePropType,
  title: contentPropType,
  subTitle: contentPropType,
  contents: PropTypes.arrayOf(contentPropType),
  contentsColor: PropTypes.oneOf(["white", "black"]),
});

const tabId = i => `expandable-heroes-tab-${i}`;
const panelId = i => `expandable-heroes-panel-${i}`;

/**
 * Push a GA event directly to window.dataLayer.
 * Uses exact keys from design-doc §8; no `type` key.
 * @param {{event:string, action:string, component:string, region:string, section:string, text:string}} data
 */
const pushGaEvent = data => {
  const { dataLayer } = window;
  if (dataLayer) {
    dataLayer.push({
      event: data.event,
      action: data.action,
      component: data.component,
      region: data.region,
      section: data.section,
      text: data.text,
    });
  }
};

/**
 * @param {ExpandableHeroesProps} props
 * @returns {JSX.Element|null}
 */
const ExpandableHeroes = ({
  panes,
  initialActiveIndex = 0,
  onPaneChange,
  gaRegion = "main content",
  gaSection = "hero",
}) => {
  // ── Runtime guards ──────────────────────────────────────────────────────────
  if (!panes || panes.length !== 3) {
    // eslint-disable-next-line no-console
    console.error(
      "ExpandableHeroes: 'panes' prop must be an array of exactly 3 pane objects."
    );
    return null;
  }

  const clampedInitial = (() => {
    if (initialActiveIndex < 0 || initialActiveIndex > 2) {
      // eslint-disable-next-line no-console
      console.warn(
        `ExpandableHeroes: initialActiveIndex ${initialActiveIndex} is out of range [0,2]; clamping to ${Math.min(Math.max(initialActiveIndex, 0), 2)}.`
      );
      return Math.min(Math.max(initialActiveIndex, 0), 2);
    }
    return initialActiveIndex;
  })();

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [activeIndex, setActiveIndex] = useState(clampedInitial);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [previewIndex, setPreviewIndex] = useState(
    /** @type {number|null} */ (null)
  );
  // focusIndex tracks roving tabindex — on mount equals activeIndex
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [focusIndex, setFocusIndex] = useState(clampedInitial);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const tabRefs = useRef(
    /** @type {(HTMLButtonElement|null)[]} */ ([null, null, null])
  );

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const commit = useCallback(
    (index, method) => {
      setActiveIndex(index);
      setFocusIndex(index);
      setPreviewIndex(null);
      const pane = panes[index];
      pushGaEvent({
        event: "link",
        action: method === "keyboard" ? "keypress" : "click",
        component: "expandable-heroes",
        region: gaRegion,
        section: gaSection,
        text: pane.title?.text ?? "",
      });
      if (onPaneChange) {
        onPaneChange(index, pane);
      }
    },
    [onPaneChange, panes, gaRegion, gaSection]
  );

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const moveFocus = useCallback(newIndex => {
    setFocusIndex(newIndex);
    setPreviewIndex(newIndex);
    tabRefs.current[newIndex]?.focus();
  }, []);

  const handleKeyDown = (e, index) => {
    const count = 3;
    switch (e.key) {
      case "Enter":
      case " ":
        if (e.key === " ") e.preventDefault();
        commit(index, "keyboard");
        break;
      case "ArrowRight":
        e.preventDefault();
        moveFocus((index + 1) % count);
        break;
      case "ArrowLeft":
        e.preventDefault();
        moveFocus((index - 1 + count) % count);
        break;
      case "Home":
        e.preventDefault();
        moveFocus(0);
        break;
      case "End":
        e.preventDefault();
        moveFocus(count - 1);
        break;
      default:
        break;
    }
  };

  const handlePointerDown = (e, index) => {
    if (e.pointerType === "touch") {
      // Touch tap — suppress hover preview
      setPreviewIndex(null);
    }
  };

  const handleMouseEnter = index => {
    setPreviewIndex(index);
  };

  const clearPreview = () => {
    setPreviewIndex(null);
  };

  return (
    <div
      className="uds-expandable-heroes"
      role="tablist"
      aria-orientation="horizontal"
      aria-label="Expandable hero panes"
    >
      {panes.map((pane, i) => {
        const isActive = i === activeIndex;
        const isPreview = i === previewIndex && !isActive;

        return (
          <React.Fragment key={tabId(i)}>
            <button
              type="button"
              className={[
                "uds-expandable-heroes__pane",
                isActive
                  ? "is-active"
                  : "uds-expandable-heroes__pane--collapsed",
                isPreview ? "is-preview" : "",
              ]
                .filter(Boolean)
                .join(" ")}
              role="tab"
              id={tabId(i)}
              aria-selected={isActive}
              aria-controls={panelId(i)}
              tabIndex={i === focusIndex ? 0 : -1}
              style={{ backgroundImage: `url('${pane.image?.url ?? ""}')` }}
              ref={el => {
                tabRefs.current[i] = el;
              }}
              // HTML-parity data-ga-* attributes (picked up by bootstrap GA listener)
              data-ga={pane.title?.text ?? ""}
              data-ga-event="link"
              data-ga-action="click"
              data-ga-component="expandable-heroes"
              data-ga-region={gaRegion}
              data-ga-section={gaSection}
              onClick={() => commit(i, "click")}
              onKeyDown={e => handleKeyDown(e, i)}
              onPointerDown={e => handlePointerDown(e, i)}
              onMouseEnter={() => handleMouseEnter(i)}
              onMouseLeave={clearPreview}
              onFocus={() => handleMouseEnter(i)}
              onBlur={clearPreview}
            >
              <span className="uds-expandable-heroes__rotated-title">
                {pane.title?.text}
              </span>
            </button>
            <div
              className={[
                "uds-expandable-heroes__panel",
                !isActive ? "is-hidden" : "",
              ]
                .filter(Boolean)
                .join(" ")}
              role="tabpanel"
              id={panelId(i)}
              aria-labelledby={tabId(i)}
              tabIndex={isActive ? 0 : -1}
            >
              <Hero
                type="heading-hero"
                image={pane.image}
                title={pane.title}
                subTitle={pane.subTitle}
                contents={pane.contents}
                contentsColor={pane.contentsColor}
              />
            </div>
          </React.Fragment>
        );
      })}
    </div>
  );
};

ExpandableHeroes.propTypes = {
  panes: PropTypes.arrayOf(panePropType).isRequired,
  initialActiveIndex: PropTypes.number,
  onPaneChange: PropTypes.func,
  gaRegion: PropTypes.string,
  gaSection: PropTypes.string,
};

ExpandableHeroes.defaultProps = {
  initialActiveIndex: 0,
  gaRegion: "main content",
  gaSection: "hero",
};

export { ExpandableHeroes };
