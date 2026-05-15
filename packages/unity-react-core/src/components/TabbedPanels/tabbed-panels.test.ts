/**
 * tabbed-panels-v2.test.ts
 *
 * Unit tests for the vanilla-JS progressive-enhancement layer that powers the
 * Bootstrap HTML version of UDS TabbedPanels.
 *
 * Strategy
 * --------
 * • `bootstrap-helper` is mocked so EventHandler.on/off delegate to plain
 *   addEventListener / removeEventListener.  This lets us fire real DOM events
 *   with dispatchEvent() and assert on outcomes without Bootstrap internals.
 * • jsdom is the test environment (set in vitest.config.ts).
 * • Layout APIs (getBoundingClientRect, clientWidth) return zeros in jsdom, so
 *   overflow tests mock them per element to exercise the width-fitting logic.
 * • The module has top-level side-effects (load-event wiring).  We suppress
 *   console.log noise via beforeAll and call initTabbedPanelsV2 directly.
 */

import { describe, it, expect, beforeAll, beforeEach, afterEach, vi } from "vitest";

// ─── mock bootstrap-helper BEFORE the module under test is loaded ─────────────
// vi.mock is hoisted by vitest, so the mock is in place when the import below
// resolves the real module and it calls EventHandler.on at the top level.
vi.mock("../../../../unity-bootstrap-theme/src/js/bootstrap-helper", () => ({
  EventHandler: {
    on(el: EventTarget, namespacedEvent: string, handler: EventListenerOrEventListenerObject) {
      const type = namespacedEvent.split(".")[0];
      el.addEventListener(type, handler);
    },
    off(el: EventTarget, namespacedEvent: string, handler?: EventListenerOrEventListenerObject) {
      const type = namespacedEvent.split(".")[0];
      if (handler) el.removeEventListener(type, handler);
    },
  },
}));

import { initTabbedPanelsV2 } from "../../../../unity-bootstrap-theme/src/js/tabbed-panels-v2";

// ─── helpers ──────────────────────────────────────────────────────────────────

/**
 * Build a minimal .uds-tabbed-panels container with N tabs, appended to
 * document.body so querySelectorAll picks it up.
 *
 * @param tabCount   Number of tabs to generate
 * @param opts.dark  Whether to add the dark-theme modifier class
 * @param opts.activeIndex  Which tab is initially active (default 0)
 */
function buildContainer(
  tabCount = 3,
  opts: { dark?: boolean; activeIndex?: number; navWidth?: number } = {}
): HTMLElement {
  const { dark = false, activeIndex = 0, navWidth = 1000 } = opts;

  const container = document.createElement("nav");
  container.className = `uds-tabbed-panels${dark ? " uds-tabbed-panels-dark" : ""}`;

  const navTabs = document.createElement("div");
  navTabs.className = "nav nav-tabs";
  navTabs.setAttribute("role", "tablist");
  // Set a visible width so calculateOverflow doesn't treat all tabs as overflow
  // (jsdom returns 0 for layout APIs by default).
  Object.defineProperty(navTabs, "clientWidth", { configurable: true, get: () => navWidth });

  for (let i = 0; i < tabCount; i++) {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = `nav-link${i === activeIndex ? " active" : ""}`;
    btn.id = `tab-${i}`;
    btn.setAttribute("role", "tab");
    btn.setAttribute("aria-selected", i === activeIndex ? "true" : "false");
    btn.textContent = `Tab ${i + 1}`;
    navTabs.appendChild(btn);
  }

  container.appendChild(navTabs);
  document.body.appendChild(container);

  // Also build matching tab-content so activateTab can find panels
  const tabContent = document.createElement("div");
  tabContent.className = "tab-content";

  for (let i = 0; i < tabCount; i++) {
    const pane = document.createElement("div");
    pane.id = `nav-tab-${i}`;
    pane.className = `tab-pane fade${i === activeIndex ? " show active" : ""}`;
    tabContent.appendChild(pane);
  }

  // Wrap container + tabContent in a shared parent (mirrors real HTML)
  const wrapper = document.createElement("div");
  wrapper.appendChild(container);
  wrapper.appendChild(tabContent);
  document.body.appendChild(wrapper);

  return container;
}

/**
 * Return the More button inside a container, asserting it exists.
 */
function getMoreButton(container: HTMLElement): HTMLButtonElement {
  const btn = container.querySelector<HTMLButtonElement>(".more-dropdown-button");
  if (!btn) throw new Error("More button not found");
  return btn;
}

/**
 * Return the More dropdown menu, asserting it exists.
 */
function getMenu(container: HTMLElement): HTMLUListElement {
  const menu = container.querySelector<HTMLUListElement>(".more-dropdown-menu");
  if (!menu) throw new Error("More menu not found");
  return menu;
}

/**
 * Dispatch a keyboard event on an element.
 */
function keydown(el: HTMLElement, key: string): void {
  el.dispatchEvent(new KeyboardEvent("keydown", { key, bubbles: true, cancelable: true }));
}

/**
 * Make jsdom report a specific clientWidth for an element.
 */
function setClientWidth(el: HTMLElement, width: number): void {
  Object.defineProperty(el, "clientWidth", { configurable: true, get: () => width });
}

/**
 * Make jsdom report a specific getBoundingClientRect width for an element.
 */
function setOffsetWidth(el: HTMLElement, width: number): void {
  el.getBoundingClientRect = () =>
    ({ width, height: 40, top: 0, left: 0, right: width, bottom: 40, x: 0, y: 0, toJSON: () => ({}) } as DOMRect);
}

// ─── suite ────────────────────────────────────────────────────────────────────

beforeAll(() => {
  // jsdom does not implement requestAnimationFrame — provide a synchronous stub
  // so keyboard-open → focus-first-item works synchronously in tests.
  vi.stubGlobal("requestAnimationFrame", (cb: FrameRequestCallback) => { cb(0); return 0; });
});

beforeEach(() => {
  document.body.innerHTML = "";
});

afterEach(() => {
  document.body.innerHTML = "";
});

// ─────────────────────────────────────────────────────────────────────────────
describe("initTabbedPanelsV2", () => {
  it("marks each container with data-uds-v2-init after initialization", () => {
    buildContainer(3);
    initTabbedPanelsV2();
    const container = document.querySelector(".uds-tabbed-panels")!;
    expect(container.hasAttribute("data-uds-v2-init")).toBe(true);
  });

  it("skips containers that have [data-react]", () => {
    const container = buildContainer(3);
    container.setAttribute("data-react", "");
    initTabbedPanelsV2();
    expect(container.hasAttribute("data-uds-v2-init")).toBe(false);
  });

  it("skips containers already marked with [data-uds-v2-init]", () => {
    const container = buildContainer(3);
    container.setAttribute("data-uds-v2-init", "true");
    // The More button should NOT be created on a skipped container
    initTabbedPanelsV2();
    // No second dropdown wrapper should have appeared (still 0 wrappers because
    // we never called calculateOverflow on it)
    expect(container.querySelectorAll(".uds-more-dropdown").length).toBe(0);
  });

  it("initializes multiple independent containers in one call", () => {
    buildContainer(3);
    buildContainer(3);
    initTabbedPanelsV2();
    const initialized = document.querySelectorAll(".uds-tabbed-panels[data-uds-v2-init]");
    expect(initialized.length).toBe(2);
  });
});

// ─────────────────────────────────────────────────────────────────────────────
describe("ensureDropdown — DOM creation", () => {
  it("appends a .uds-more-dropdown wrapper to the nav-tabs element", () => {
    const container = buildContainer(3);
    initTabbedPanelsV2();
    const navTabs = container.querySelector(".nav.nav-tabs")!;
    expect(navTabs.querySelector(".uds-more-dropdown")).not.toBeNull();
  });

  it("More button has correct ARIA attributes", () => {
    const container = buildContainer(3);
    initTabbedPanelsV2();
    const btn = getMoreButton(container);
    expect(btn.getAttribute("aria-haspopup")).toBe("true");
    expect(btn.getAttribute("aria-expanded")).toBe("false");
    expect(btn.getAttribute("aria-controls")).toBeTruthy();
  });

  it("menu has role=menu and aria-hidden=true initially", () => {
    const container = buildContainer(3);
    initTabbedPanelsV2();
    const menu = getMenu(container);
    expect(menu.getAttribute("role")).toBe("menu");
    expect(menu.getAttribute("aria-hidden")).toBe("true");
  });

  it("reuses a pre-existing .uds-more-dropdown wrapper without duplicating it", () => {
    const container = buildContainer(3);
    // Simulate a pre-rendered wrapper (e.g. SSR or React output)
    const navTabs = container.querySelector(".nav.nav-tabs")!;
    const preExisting = document.createElement("div");
    preExisting.className = "uds-more-dropdown";
    const preBtn = document.createElement("button");
    preBtn.className = "more-dropdown-button uds-tab";
    preBtn.setAttribute("aria-expanded", "false");
    preBtn.setAttribute("aria-haspopup", "true");
    preBtn.setAttribute("aria-controls", "pre-menu");
    const preMenu = document.createElement("ul");
    preMenu.id = "pre-menu";
    preMenu.className = "more-dropdown-menu uds-more-dropdown-list";
    preMenu.setAttribute("role", "menu");
    preMenu.setAttribute("aria-hidden", "true");
    preExisting.appendChild(preBtn);
    preExisting.appendChild(preMenu);
    navTabs.appendChild(preExisting);

    initTabbedPanelsV2();

    // Still exactly one wrapper
    expect(navTabs.querySelectorAll(".uds-more-dropdown").length).toBe(1);
  });

  it("wires click events on a pre-existing wrapper that lacks data-uds-events-wired", () => {
    const container = buildContainer(3);
    const navTabs = container.querySelector(".nav.nav-tabs")!;

    // Pre-existing wrapper with NO data-uds-events-wired
    const wrapper = document.createElement("div");
    wrapper.className = "uds-more-dropdown";
    const btn = document.createElement("button");
    btn.className = "more-dropdown-button uds-tab";
    btn.setAttribute("aria-expanded", "false");
    btn.setAttribute("aria-haspopup", "true");
    btn.setAttribute("aria-controls", "pre-menu");
    const menu = document.createElement("ul");
    menu.id = "pre-menu";
    menu.className = "more-dropdown-menu uds-more-dropdown-list";
    menu.setAttribute("role", "menu");
    menu.setAttribute("aria-hidden", "true");
    wrapper.appendChild(btn);
    wrapper.appendChild(menu);
    navTabs.appendChild(wrapper);

    initTabbedPanelsV2();

    // Now clicking should toggle aria-expanded
    btn.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    expect(btn.getAttribute("aria-expanded")).toBe("true");
  });

  it("does not wire events twice when data-uds-events-wired is already present", () => {
    const container = buildContainer(3);
    const navTabs = container.querySelector(".nav.nav-tabs")!;

    const wrapper = document.createElement("div");
    wrapper.className = "uds-more-dropdown";
    wrapper.setAttribute("data-uds-events-wired", "true"); // already wired
    const btn = document.createElement("button");
    btn.className = "more-dropdown-button uds-tab";
    btn.setAttribute("aria-expanded", "false");
    btn.setAttribute("aria-haspopup", "true");
    btn.setAttribute("aria-controls", "pre-menu");
    const menu = document.createElement("ul");
    menu.id = "pre-menu";
    menu.className = "more-dropdown-menu uds-more-dropdown-list";
    menu.setAttribute("role", "menu");
    menu.setAttribute("aria-hidden", "true");
    wrapper.appendChild(btn);
    wrapper.appendChild(menu);
    navTabs.appendChild(wrapper);

    const clickSpy = vi.fn();
    btn.addEventListener("click", clickSpy);

    initTabbedPanelsV2();

    // Click event should only fire the manually-added spy — the module should
    // not have added another listener (since data-uds-events-wired was set).
    btn.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    expect(clickSpy).toHaveBeenCalledTimes(1);
    // aria-expanded stays false because no module handler was added
    expect(btn.getAttribute("aria-expanded")).toBe("false");
  });
});

// ─────────────────────────────────────────────────────────────────────────────
describe("More button — open / close", () => {
  let container: HTMLElement;
  let moreBtn: HTMLButtonElement;
  let menu: HTMLUListElement;

  beforeEach(() => {
    container = buildContainer(3);
    initTabbedPanelsV2();
    moreBtn = getMoreButton(container);
    menu = getMenu(container);
  });

  it("click opens the dropdown: aria-expanded → true, aria-hidden → false", () => {
    moreBtn.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    expect(moreBtn.getAttribute("aria-expanded")).toBe("true");
    expect(menu.getAttribute("aria-hidden")).toBe("false");
  });

  it("second click closes the dropdown: aria-expanded → false, aria-hidden → true", () => {
    moreBtn.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    moreBtn.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    expect(moreBtn.getAttribute("aria-expanded")).toBe("false");
    expect(menu.getAttribute("aria-hidden")).toBe("true");
  });

  it("mousedown outside the wrapper closes an open dropdown", () => {
    moreBtn.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    expect(moreBtn.getAttribute("aria-expanded")).toBe("true");

    const outside = document.createElement("button");
    document.body.appendChild(outside);
    document.dispatchEvent(new MouseEvent("mousedown", { bubbles: true, target: outside } as MouseEventInit));
    // Use the outside element as the target directly
    outside.dispatchEvent(new MouseEvent("mousedown", { bubbles: true }));

    expect(moreBtn.getAttribute("aria-expanded")).toBe("false");
  });

  it("touchstart outside the wrapper closes an open dropdown", () => {
    moreBtn.dispatchEvent(new MouseEvent("click", { bubbles: true }));

    const outside = document.createElement("div");
    document.body.appendChild(outside);
    outside.dispatchEvent(new TouchEvent("touchstart", { bubbles: true }));

    expect(moreBtn.getAttribute("aria-expanded")).toBe("false");
  });

  it("mousedown inside the wrapper does NOT close the dropdown", () => {
    moreBtn.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    // Click on the button itself (inside wrapper)
    moreBtn.dispatchEvent(new MouseEvent("mousedown", { bubbles: true }));
    // The second click fires from the click listener — just check mousedown alone
    expect(moreBtn.getAttribute("aria-expanded")).toBe("true");
  });
});

// ─────────────────────────────────────────────────────────────────────────────
describe("More button — keyboard (ARIA APG menu-button pattern)", () => {
  let container: HTMLElement;
  let moreBtn: HTMLButtonElement;
  let menu: HTMLUListElement;

  /**
   * Add a couple of real menu items so keyboard tests have items to focus.
   */
  function seedMenuItems() {
    for (let i = 0; i < 3; i++) {
      const li = document.createElement("li");
      li.setAttribute("role", "none");
      const btn = document.createElement("button");
      btn.type = "button";
      btn.setAttribute("role", "menuitem");
      btn.setAttribute("tabindex", "-1");
      btn.className = "more-dropdown-item";
      btn.textContent = `Overflow Tab ${i + 1}`;
      li.appendChild(btn);
      menu.appendChild(li);
    }
  }

  beforeEach(() => {
    container = buildContainer(3);
    initTabbedPanelsV2();
    moreBtn = getMoreButton(container);
    menu = getMenu(container);
    seedMenuItems();
  });

  it("Enter opens the dropdown and moves focus to the first menu item", () => {
    keydown(moreBtn, "Enter");
    expect(moreBtn.getAttribute("aria-expanded")).toBe("true");
    const items = menu.querySelectorAll<HTMLElement>('[role="menuitem"]');
    expect(document.activeElement).toBe(items[0]);
  });

  it("Space opens the dropdown and moves focus to the first menu item", () => {
    keydown(moreBtn, " ");
    expect(moreBtn.getAttribute("aria-expanded")).toBe("true");
    const items = menu.querySelectorAll<HTMLElement>('[role="menuitem"]');
    expect(document.activeElement).toBe(items[0]);
  });

  it("Enter on an open dropdown closes it", () => {
    keydown(moreBtn, "Enter"); // open
    keydown(moreBtn, "Enter"); // close
    expect(moreBtn.getAttribute("aria-expanded")).toBe("false");
  });

  it("Escape closes an open dropdown and returns focus to the trigger button", () => {
    keydown(moreBtn, "Enter"); // open
    keydown(moreBtn, "Escape"); // close
    expect(moreBtn.getAttribute("aria-expanded")).toBe("false");
    expect(document.activeElement).toBe(moreBtn);
  });

  it("ArrowDown focuses the first menu item when the dropdown is open", () => {
    moreBtn.dispatchEvent(new MouseEvent("click", { bubbles: true })); // open via click
    keydown(moreBtn, "ArrowDown");
    const items = menu.querySelectorAll<HTMLElement>('[role="menuitem"]');
    expect(document.activeElement).toBe(items[0]);
  });

  it("ArrowUp focuses the last menu item when the dropdown is open", () => {
    moreBtn.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    keydown(moreBtn, "ArrowUp");
    const items = menu.querySelectorAll<HTMLElement>('[role="menuitem"]');
    expect(document.activeElement).toBe(items[items.length - 1]);
  });

  it("ArrowDown does nothing when the dropdown is closed", () => {
    const focusBefore = document.activeElement;
    keydown(moreBtn, "ArrowDown");
    expect(moreBtn.getAttribute("aria-expanded")).toBe("false");
    expect(document.activeElement).toBe(focusBefore);
  });
});

// ─────────────────────────────────────────────────────────────────────────────
describe("Menu keyboard navigation", () => {
  let container: HTMLElement;
  let moreBtn: HTMLButtonElement;
  let menu: HTMLUListElement;
  let items: HTMLElement[];

  beforeEach(() => {
    container = buildContainer(3);
    initTabbedPanelsV2();
    moreBtn = getMoreButton(container);
    menu = getMenu(container);

    // Add 4 menu items
    for (let i = 0; i < 4; i++) {
      const li = document.createElement("li");
      li.setAttribute("role", "none");
      const btn = document.createElement("button");
      btn.type = "button";
      btn.setAttribute("role", "menuitem");
      btn.setAttribute("tabindex", "-1");
      btn.className = "more-dropdown-item";
      btn.textContent = `Item ${i + 1}`;
      li.appendChild(btn);
      menu.appendChild(li);
    }
    items = Array.from(menu.querySelectorAll<HTMLElement>('[role="menuitem"]'));

    // Open the menu first
    moreBtn.dispatchEvent(new MouseEvent("click", { bubbles: true }));
  });

  it("ArrowDown advances focus to the next item", () => {
    items[0].focus();
    keydown(items[0], "ArrowDown");
    expect(document.activeElement).toBe(items[1]);
  });

  it("ArrowDown wraps from last to first item", () => {
    items[3].focus();
    keydown(items[3], "ArrowDown");
    expect(document.activeElement).toBe(items[0]);
  });

  it("ArrowUp moves focus to the previous item", () => {
    items[2].focus();
    keydown(items[2], "ArrowUp");
    expect(document.activeElement).toBe(items[1]);
  });

  it("ArrowUp wraps from first to last item", () => {
    items[0].focus();
    keydown(items[0], "ArrowUp");
    expect(document.activeElement).toBe(items[3]);
  });

  it("Home moves focus to the first item", () => {
    items[2].focus();
    keydown(items[2], "Home");
    expect(document.activeElement).toBe(items[0]);
  });

  it("End moves focus to the last item", () => {
    items[1].focus();
    keydown(items[1], "End");
    expect(document.activeElement).toBe(items[3]);
  });

  it("Escape closes the menu and returns focus to the trigger button", () => {
    items[1].focus();
    keydown(items[1], "Escape");
    expect(moreBtn.getAttribute("aria-expanded")).toBe("false");
    expect(document.activeElement).toBe(moreBtn);
  });

  it("Tab closes the dropdown without stealing focus", () => {
    items[0].focus();
    keydown(items[0], "Tab");
    expect(moreBtn.getAttribute("aria-expanded")).toBe("false");
  });
});

// ─────────────────────────────────────────────────────────────────────────────
describe("activateTab — tab switching", () => {
  it("activates the clicked tab and its panel, deactivates the previous one", () => {
    const container = buildContainer(3);
    initTabbedPanelsV2();

    const tabs = Array.from(container.querySelectorAll<HTMLButtonElement>("button.nav-link"));
    const wrapper = container.closest("div")!;
    const panes = Array.from(wrapper.querySelectorAll<HTMLElement>(".tab-pane"));

    // Simulate clicking tab index 1
    tabs[1].dispatchEvent(new MouseEvent("click", { bubbles: true }));

    expect(tabs[0].classList.contains("active")).toBe(false);
    expect(tabs[0].getAttribute("aria-selected")).toBe("false");
    expect(tabs[1].classList.contains("active")).toBe(true);
    expect(tabs[1].getAttribute("aria-selected")).toBe("true");

    expect(panes[0].classList.contains("active")).toBe(false);
    expect(panes[1].classList.contains("active")).toBe(true);
    expect(panes[1].classList.contains("show")).toBe(true);
  });

  it("clicking a tab that is already active keeps it active", () => {
    const container = buildContainer(3);
    initTabbedPanelsV2();
    const tabs = Array.from(container.querySelectorAll<HTMLButtonElement>("button.nav-link"));

    tabs[0].dispatchEvent(new MouseEvent("click", { bubbles: true }));
    expect(tabs[0].classList.contains("active")).toBe(true);
  });
});

// ─────────────────────────────────────────────────────────────────────────────
describe("Tab-list keyboard navigation (WCAG 2.1 tablist pattern)", () => {
  it("ArrowRight moves focus to the next tab and activates it", () => {
    const container = buildContainer(3);
    initTabbedPanelsV2();
    const tabs = Array.from(container.querySelectorAll<HTMLButtonElement>("button.nav-link"));
    tabs[0].focus();

    keydown(tabs[0], "ArrowRight");

    expect(document.activeElement).toBe(tabs[1]);
    expect(tabs[1].classList.contains("active")).toBe(true);
  });

  it("ArrowRight wraps from last tab to first", () => {
    const container = buildContainer(3);
    initTabbedPanelsV2();
    const tabs = Array.from(container.querySelectorAll<HTMLButtonElement>("button.nav-link"));
    tabs[2].focus();

    keydown(tabs[2], "ArrowRight");

    expect(document.activeElement).toBe(tabs[0]);
  });

  it("ArrowLeft moves focus to the previous tab", () => {
    const container = buildContainer(3);
    initTabbedPanelsV2();
    const tabs = Array.from(container.querySelectorAll<HTMLButtonElement>("button.nav-link"));
    tabs[2].focus();

    keydown(tabs[2], "ArrowLeft");

    expect(document.activeElement).toBe(tabs[1]);
    expect(tabs[1].classList.contains("active")).toBe(true);
  });

  it("ArrowLeft wraps from first tab to last", () => {
    const container = buildContainer(3);
    initTabbedPanelsV2();
    const tabs = Array.from(container.querySelectorAll<HTMLButtonElement>("button.nav-link"));
    tabs[0].focus();

    keydown(tabs[0], "ArrowLeft");

    expect(document.activeElement).toBe(tabs[2]);
  });

  it("Home moves focus to the first tab", () => {
    const container = buildContainer(3);
    initTabbedPanelsV2();
    const tabs = Array.from(container.querySelectorAll<HTMLButtonElement>("button.nav-link"));
    tabs[2].focus();

    keydown(tabs[2], "Home");

    expect(document.activeElement).toBe(tabs[0]);
  });

  it("End moves focus to the last tab", () => {
    const container = buildContainer(3);
    initTabbedPanelsV2();
    const tabs = Array.from(container.querySelectorAll<HTMLButtonElement>("button.nav-link"));
    tabs[0].focus();

    keydown(tabs[0], "End");

    expect(document.activeElement).toBe(tabs[2]);
  });

  it("arrow keys skip tabs that are hidden (display:none)", () => {
    const container = buildContainer(4);
    initTabbedPanelsV2();
    const tabs = Array.from(container.querySelectorAll<HTMLButtonElement>("button.nav-link"));

    // Hide tab index 1
    tabs[1].style.display = "none";
    tabs[0].focus();

    keydown(tabs[0], "ArrowRight");

    // Should skip index 1 and land on index 2
    expect(document.activeElement).toBe(tabs[2]);
  });
});

// ─────────────────────────────────────────────────────────────────────────────
describe("calculateOverflow — width-based tab hiding", () => {
  it("hides tabs that exceed the available nav width", () => {
    const container = buildContainer(5);
    const navTabs = container.querySelector<HTMLElement>(".nav.nav-tabs")!;
    const tabs = Array.from(navTabs.querySelectorAll<HTMLElement>("button.nav-link"));

    // nav is 300px wide; each tab is 100px; More button is 83px.
    // tabs[0] (100) fits → used=100
    // tabs[1] (100) → 100+100+83=283 ≤ 300 → fits → used=200
    // tabs[2] (100) → 200+100+83=383 > 300 → overflow from here
    setClientWidth(navTabs, 300);
    tabs.forEach(t => setOffsetWidth(t, 100));

    initTabbedPanelsV2();

    expect(tabs[0].style.display).not.toBe("none");
    expect(tabs[1].style.display).not.toBe("none");
    expect(tabs[2].style.display).toBe("none");
    expect(tabs[3].style.display).toBe("none");
    expect(tabs[4].style.display).toBe("none");
  });

  it("shows the More button when there are overflow tabs", () => {
    const container = buildContainer(5);
    const navTabs = container.querySelector<HTMLElement>(".nav.nav-tabs")!;
    const tabs = Array.from(navTabs.querySelectorAll<HTMLElement>("button.nav-link"));

    setClientWidth(navTabs, 300);
    tabs.forEach(t => setOffsetWidth(t, 100));

    initTabbedPanelsV2();

    const wrapper = navTabs.querySelector<HTMLElement>(".uds-more-dropdown")!;
    expect(wrapper.style.display).not.toBe("none");
    expect(wrapper.style.visibility).not.toBe("hidden");
  });

  it("hides the More button when all tabs fit", () => {
    const container = buildContainer(3);
    const navTabs = container.querySelector<HTMLElement>(".nav.nav-tabs")!;
    const tabs = Array.from(navTabs.querySelectorAll<HTMLElement>("button.nav-link"));

    // 3 tabs × 50px = 150px, well within 600px
    setClientWidth(navTabs, 600);
    tabs.forEach(t => setOffsetWidth(t, 50));

    initTabbedPanelsV2();

    const wrapper = navTabs.querySelector<HTMLElement>(".uds-more-dropdown")!;
    expect(wrapper.style.display).toBe("none");
    expect(wrapper.style.visibility).toBe("hidden");
  });

  it("sets aria-label on More button with the overflow tab count", () => {
    const container = buildContainer(5);
    const navTabs = container.querySelector<HTMLElement>(".nav.nav-tabs")!;
    const tabs = Array.from(navTabs.querySelectorAll<HTMLElement>("button.nav-link"));

    setClientWidth(navTabs, 300);
    tabs.forEach(t => setOffsetWidth(t, 100));

    initTabbedPanelsV2();

    const btn = getMoreButton(container);
    // 3 tabs overflow (indices 2, 3, 4)
    expect(btn.getAttribute("aria-label")).toBe("More, 3 additional tabs");
  });

  it("sets aria-label in singular form when exactly 1 tab overflows", () => {
    const container = buildContainer(2);
    const navTabs = container.querySelector<HTMLElement>(".nav.nav-tabs")!;
    const tabs = Array.from(navTabs.querySelectorAll<HTMLElement>("button.nav-link"));

    // 200px nav; tab[0]=150px fits; tab[1]=150px → 150+150+83=383>200 → overflows
    setClientWidth(navTabs, 200);
    tabs.forEach(t => setOffsetWidth(t, 150));

    initTabbedPanelsV2();

    const btn = getMoreButton(container);
    expect(btn.getAttribute("aria-label")).toBe("More, 1 additional tab");
  });

  it("marks the More button active when the currently active tab is in overflow", () => {
    // Make tab[2] the active one, and force it into overflow
    const container = buildContainer(5, { activeIndex: 2 });
    const navTabs = container.querySelector<HTMLElement>(".nav.nav-tabs")!;
    const tabs = Array.from(navTabs.querySelectorAll<HTMLElement>("button.nav-link"));

    setClientWidth(navTabs, 300);
    tabs.forEach(t => setOffsetWidth(t, 100));

    initTabbedPanelsV2();

    const btn = getMoreButton(container);
    expect(btn.classList.contains("active")).toBe(true);
  });

  it("does NOT mark the More button active when the active tab is visible", () => {
    const container = buildContainer(5, { activeIndex: 0 });
    const navTabs = container.querySelector<HTMLElement>(".nav.nav-tabs")!;
    const tabs = Array.from(navTabs.querySelectorAll<HTMLElement>("button.nav-link"));

    setClientWidth(navTabs, 300);
    tabs.forEach(t => setOffsetWidth(t, 100));

    initTabbedPanelsV2();

    const btn = getMoreButton(container);
    expect(btn.classList.contains("active")).toBe(false);
  });

  it("populates the menu with a menuitem for each overflow tab", () => {
    const container = buildContainer(5);
    const navTabs = container.querySelector<HTMLElement>(".nav.nav-tabs")!;
    const tabs = Array.from(navTabs.querySelectorAll<HTMLElement>("button.nav-link"));

    setClientWidth(navTabs, 300);
    tabs.forEach(t => setOffsetWidth(t, 100));

    initTabbedPanelsV2();

    const menu = getMenu(container);
    const items = menu.querySelectorAll('[role="menuitem"]');
    expect(items.length).toBe(3); // tabs 2, 3, 4 overflow
  });

  it("overflow menu items carry the correct data-tab-id", () => {
    const container = buildContainer(5);
    const navTabs = container.querySelector<HTMLElement>(".nav.nav-tabs")!;
    const tabs = Array.from(navTabs.querySelectorAll<HTMLElement>("button.nav-link"));

    setClientWidth(navTabs, 300);
    tabs.forEach(t => setOffsetWidth(t, 100));

    initTabbedPanelsV2();

    const menu = getMenu(container);
    const items = Array.from(menu.querySelectorAll<HTMLButtonElement>('[role="menuitem"]'));
    expect(items[0].dataset.tabId).toBe("tab-2");
    expect(items[1].dataset.tabId).toBe("tab-3");
    expect(items[2].dataset.tabId).toBe("tab-4");
  });

  it("overflow menu items get aria-current when their tab is active", () => {
    const container = buildContainer(5, { activeIndex: 3 });
    const navTabs = container.querySelector<HTMLElement>(".nav.nav-tabs")!;
    const tabs = Array.from(navTabs.querySelectorAll<HTMLElement>("button.nav-link"));

    setClientWidth(navTabs, 300);
    tabs.forEach(t => setOffsetWidth(t, 100));

    initTabbedPanelsV2();

    const menu = getMenu(container);
    const items = Array.from(menu.querySelectorAll<HTMLButtonElement>('[role="menuitem"]'));
    const activeItem = items.find(i => i.dataset.tabId === "tab-3");
    expect(activeItem?.getAttribute("aria-current")).toBe("true");
  });

  it("applies roving tabindex so only one visible tab has tabindex=0", () => {
    const container = buildContainer(5, { activeIndex: 0 });
    const navTabs = container.querySelector<HTMLElement>(".nav.nav-tabs")!;
    const tabs = Array.from(navTabs.querySelectorAll<HTMLElement>("button.nav-link"));

    setClientWidth(navTabs, 300);
    tabs.forEach(t => setOffsetWidth(t, 100));

    initTabbedPanelsV2();

    const visibleTabs = tabs.filter(t => t.style.display !== "none");
    const tabbable = visibleTabs.filter(t => t.getAttribute("tabindex") === "0");
    expect(tabbable.length).toBe(1);
    expect(tabbable[0]).toBe(tabs[0]); // active tab gets tabindex=0
  });
});

// ─────────────────────────────────────────────────────────────────────────────
describe("Menu item click — selecting an overflow tab", () => {
  let container: HTMLElement;
  let moreBtn: HTMLButtonElement;
  let menu: HTMLUListElement;

  beforeEach(() => {
    container = buildContainer(5);
    const navTabs = container.querySelector<HTMLElement>(".nav.nav-tabs")!;
    const tabs = Array.from(navTabs.querySelectorAll<HTMLElement>("button.nav-link"));

    setClientWidth(navTabs, 300);
    tabs.forEach(t => setOffsetWidth(t, 100));

    initTabbedPanelsV2();

    moreBtn = getMoreButton(container);
    menu = getMenu(container);

    // Open the dropdown first
    moreBtn.dispatchEvent(new MouseEvent("click", { bubbles: true }));
  });

  it("clicking a menu item activates the corresponding tab pane", () => {
    const items = Array.from(menu.querySelectorAll<HTMLButtonElement>('[role="menuitem"]'));
    // Click item for tab-2
    items[0].dispatchEvent(new MouseEvent("click", { bubbles: true }));

    const activeTab = container.querySelector<HTMLButtonElement>("#tab-2");
    expect(activeTab?.classList.contains("active")).toBe(true);
  });

  it("clicking a menu item closes the dropdown", () => {
    const items = Array.from(menu.querySelectorAll<HTMLButtonElement>('[role="menuitem"]'));
    items[0].dispatchEvent(new MouseEvent("click", { bubbles: true }));

    expect(moreBtn.getAttribute("aria-expanded")).toBe("false");
    expect(menu.getAttribute("aria-hidden")).toBe("true");
  });

  it("clicking a menu item updates aria-current on menu items", () => {
    const items = Array.from(menu.querySelectorAll<HTMLButtonElement>('[role="menuitem"]'));
    items[1].dispatchEvent(new MouseEvent("click", { bubbles: true })); // tab-3

    // Re-open to inspect items
    moreBtn.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    const updatedItems = Array.from(menu.querySelectorAll<HTMLButtonElement>('[role="menuitem"]'));
    const activeItem = updatedItems.find(i => i.dataset.tabId === "tab-3");
    expect(activeItem?.getAttribute("aria-current")).toBe("true");

    const inactiveItem = updatedItems.find(i => i.dataset.tabId === "tab-2");
    expect(inactiveItem?.hasAttribute("aria-current")).toBe(false);
  });

  it("clicking a menu item marks the More button active", () => {
    const items = Array.from(menu.querySelectorAll<HTMLButtonElement>('[role="menuitem"]'));
    items[0].dispatchEvent(new MouseEvent("click", { bubbles: true }));

    expect(moreBtn.classList.contains("active")).toBe(true);
  });
});
