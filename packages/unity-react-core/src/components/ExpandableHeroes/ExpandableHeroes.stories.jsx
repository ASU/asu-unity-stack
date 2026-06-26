// @ts-check
import { imageAny } from "@asu/shared";
import React from "react";

import { ExpandableHeroes } from "./ExpandableHeroes";

// ── Fixtures ──────────────────────────────────────────────────────────────────

const IMG1 = imageAny();
const IMG2 = imageAny();
const IMG3 = imageAny();

/** @type {import('./ExpandableHeroes').ExpandableHeroesProps['panes']} */
const samplePanes = [
  {
    image: { url: IMG1, altText: "Hero image one", size: "large" },
    title: { text: "Pane One Title", color: "white" },
    subTitle: { text: "Subtitle One", color: "white" },
    contents: [{ text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." }],
    contentsColor: "white",
  },
  {
    image: { url: IMG2, altText: "Hero image two", size: "large" },
    title: { text: "Pane Two Title", color: "white" },
    subTitle: { text: "Subtitle Two", color: "white" },
    contents: [{ text: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." }],
    contentsColor: "white",
  },
  {
    image: { url: IMG3, altText: "Hero image three", size: "large" },
    title: { text: "A Very Long Pane Three Title That Tests Ellipsis Overflow Behavior", color: "white" },
    subTitle: { text: "Subtitle Three", color: "white" },
    contents: [{ text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco." }],
    contentsColor: "white",
  },
];

export default {
  title: "Components/ExpandableHeroes",
  component: ExpandableHeroes,
  parameters: {
    docs: {
      description: {
        component:
          "Three-pane expandable hero implementing the APG Tabs (manual activation) pattern. " +
          "Click / Enter / Space commits a pane. Hover and focus show a non-committing preview. " +
          "Arrow Left/Right/Home/End navigate without committing. Below lg breakpoint all panes stack.",
      },
    },
  },
};

// ── React Story ───────────────────────────────────────────────────────────────

/**
 * @type {{ args: import('./ExpandableHeroes').ExpandableHeroesProps }}
 */
export const Default = {
  args: {
    panes: samplePanes,
    initialActiveIndex: 0,
    gaRegion: "main content",
    gaSection: "hero",
  },
};

Default.parameters = {
  docs: { description: { story: "Default React story — pane 0 active on mount." } },
};

// ── HTML-Parity Story ─────────────────────────────────────────────────────────

/**
 * Hand-written JSX-as-HTML literal mirroring the exact DOM tree emitted by the
 * React component with panes=samplePanes, initialActiveIndex=0.
 * CSS-class and attribute structure MUST stay in sync with ExpandableHeroes.jsx.
 */
export const HtmlParity = {
  render: () => (
    <div
      className="uds-expandable-heroes"
      role="tablist"
      aria-orientation="horizontal"
      aria-label="Expandable hero panes"
    >
      {/* Pane 0 — ACTIVE */}
      <button
        type="button"
        className="uds-expandable-heroes__pane is-active"
        role="tab"
        id="expandable-heroes-tab-0"
        aria-selected="true"
        aria-controls="expandable-heroes-panel-0"
        tabIndex={0}
        style={{ backgroundImage: `url('${IMG1}')` }}
        data-ga="Pane One Title"
        data-ga-event="link"
        data-ga-action="click"
        data-ga-component="expandable-heroes"
        data-ga-region="main content"
        data-ga-section="hero"
      >
        <span className="uds-expandable-heroes__rotated-title">Pane One Title</span>
      </button>
      <div
        className="uds-expandable-heroes__panel"
        role="tabpanel"
        id="expandable-heroes-panel-0"
        aria-labelledby="expandable-heroes-tab-0"
        tabIndex={0}
      >
        <div className="uds-hero uds-hero-lg">
          <div className="hero-overlay" />
          <img className="hero" src={IMG1} alt="Hero image one" data-testid="hero-image" />
          <div role="doc-subtitle" data-testid="hero-subtitle">
            <span className="text-white">Subtitle One</span>
          </div>
          <h1 style={{ maxWidth: "" }} data-testid="hero-title">
            <span className="text-white">Pane One Title</span>
          </h1>
          <div className="content text-white" data-testid="hero-content">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
      </div>

      {/* Pane 1 — COLLAPSED */}
      <button
        type="button"
        className="uds-expandable-heroes__pane uds-expandable-heroes__pane--collapsed"
        role="tab"
        id="expandable-heroes-tab-1"
        aria-selected="false"
        aria-controls="expandable-heroes-panel-1"
        tabIndex={-1}
        style={{ backgroundImage: `url('${IMG2}')` }}
        data-ga="Pane Two Title"
        data-ga-event="link"
        data-ga-action="click"
        data-ga-component="expandable-heroes"
        data-ga-region="main content"
        data-ga-section="hero"
      >
        <span className="uds-expandable-heroes__rotated-title">Pane Two Title</span>
      </button>
      <div
        className="uds-expandable-heroes__panel is-hidden"
        role="tabpanel"
        id="expandable-heroes-panel-1"
        aria-labelledby="expandable-heroes-tab-1"
        tabIndex={-1}
      >
        <div className="uds-hero uds-hero-lg">
          <div className="hero-overlay" />
          <img className="hero" src={IMG2} alt="Hero image two" data-testid="hero-image" />
          <div role="doc-subtitle" data-testid="hero-subtitle">
            <span className="text-white">Subtitle Two</span>
          </div>
          <h1 style={{ maxWidth: "" }} data-testid="hero-title">
            <span className="text-white">Pane Two Title</span>
          </h1>
          <div className="content text-white" data-testid="hero-content">
            <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
        </div>
      </div>

      {/* Pane 2 — COLLAPSED */}
      <button
        type="button"
        className="uds-expandable-heroes__pane uds-expandable-heroes__pane--collapsed"
        role="tab"
        id="expandable-heroes-tab-2"
        aria-selected="false"
        aria-controls="expandable-heroes-panel-2"
        tabIndex={-1}
        style={{ backgroundImage: `url('${IMG3}')` }}
        data-ga="A Very Long Pane Three Title That Tests Ellipsis Overflow Behavior"
        data-ga-event="link"
        data-ga-action="click"
        data-ga-component="expandable-heroes"
        data-ga-region="main content"
        data-ga-section="hero"
      >
        <span className="uds-expandable-heroes__rotated-title">
          A Very Long Pane Three Title That Tests Ellipsis Overflow Behavior
        </span>
      </button>
      <div
        className="uds-expandable-heroes__panel is-hidden"
        role="tabpanel"
        id="expandable-heroes-panel-2"
        aria-labelledby="expandable-heroes-tab-2"
        tabIndex={-1}
      >
        <div className="uds-hero uds-hero-lg">
          <div className="hero-overlay" />
          <img className="hero" src={IMG3} alt="Hero image three" data-testid="hero-image" />
          <div role="doc-subtitle" data-testid="hero-subtitle">
            <span className="text-white">Subtitle Three</span>
          </div>
          <h1 style={{ maxWidth: "" }} data-testid="hero-title">
            <span className="text-white">
              A Very Long Pane Three Title That Tests Ellipsis Overflow Behavior
            </span>
          </h1>
          <div className="content text-white" data-testid="hero-content">
            <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
          </div>
        </div>
      </div>
    </div>
  ),
};

HtmlParity.parameters = {
  docs: {
    description: {
      story:
        "HTML-parity story: hand-written JSX-as-HTML literal matching the React component DOM tree " +
        "(panes[0] active). Used to verify CMS authors can copy-paste markup with identical CSS hooks. " +
        "T23: axe scans this story. T28: snapshot comparison asserts structural equivalence.",
    },
  },
};
