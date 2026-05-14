import { EventHandler } from "./bootstrap-helper";

let resizeAttached = false;

// must match $tabbed-panels-dropdown-width in SCSS.
const DROPDOWN_WIDTH = 282;

/**
 * Read layout constants from the live DOM and CSS.
 * - tabGap: from the actual computed column-gap of the nav-tabs flex container
 * - moreBtnWidth: from the actual rendered width of the More button (always in DOM, hidden when unused)
 * @param {HTMLElement} container - The .uds-tabbed-panels element
 * @param {HTMLElement} navTabs - The .nav.nav-tabs element
 */
function readLayoutConstants(container, navTabs) {
  const style = getComputedStyle(navTabs);
  const tabGap = parseFloat(style.columnGap || style.gap) || 8;

  const moreBtn = navTabs.querySelector(".more-dropdown-button");
  const moreBtnWidth = moreBtn
    ? Math.round(moreBtn.getBoundingClientRect().width)
    : 83;

  return { tabGap, moreBtnWidth };
}

// ─── helpers ──────────────────────────────────────────────────────────────────

/**
 * Build (or re-use) the More dropdown wrapper, button, and menu for a given
 * nav-tabs container.  Returns { wrapper, button, menu }.
 */
function ensureDropdown(navTabs, isDark) {
  let wrapper = navTabs.querySelector(".uds-more-dropdown");

  if (!wrapper) {
    wrapper = document.createElement("div");
    wrapper.className = "uds-more-dropdown";

    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "uds-tab more-dropdown-button";
    btn.setAttribute("aria-haspopup", "true");
    btn.setAttribute("aria-expanded", "false");
    btn.setAttribute("aria-controls", "more-dropdown-menu");
    btn.innerHTML =
      '<span class="more-dropdown-button-inner">' +
      '<span aria-hidden="true">More</span>' +
      '<i aria-hidden="true" class="fas fa-chevron-down more-dropdown-icon"></i>' +
      "</span>" +
      '<span class="more-dropdown-button-indicator" aria-hidden="true"></span>';

    const menu = document.createElement("ul");
    menu.id = "more-dropdown-menu";
    menu.className = "more-dropdown-menu uds-more-dropdown-list";
    menu.setAttribute("role", "menu");
    menu.setAttribute("aria-label", "More tabs");
    menu.setAttribute("aria-hidden", "true");

    wrapper.appendChild(btn);
    wrapper.appendChild(menu);
    navTabs.appendChild(wrapper);
  }

  // Wire events once and guard with data attribute to prevent duplicates on reusee
  if (!wrapper.hasAttribute("data-uds-events-wired")) {
    wrapper.setAttribute("data-uds-events-wired", "true");
    const btn = wrapper.querySelector(".more-dropdown-button");
    const menu = wrapper.querySelector(".more-dropdown-menu");
    wireDropdownEvents(wrapper, btn, menu);
  }

  return {
    wrapper,
    button: wrapper.querySelector(".more-dropdown-button"),
    menu: wrapper.querySelector(".more-dropdown-menu"),
  };
}

/**
 * Attach open/close and keyboard behaviour to a dropdown
 */
function wireDropdownEvents(wrapper, btn, menu) {
  // ── toggle open/close ──────────────────────────────────────────────────────
  EventHandler.on(btn, "click.uds.tabbed-panels-v2", e => {
    e.preventDefault();
    const opening = btn.getAttribute("aria-expanded") !== "true";
    setOpen(btn, menu, opening);
  });

  // ── keyboard on trigger button ────────────────────────────────────────────
  EventHandler.on(btn, "keydown.uds.tabbed-panels-v2", e => {
    const isOpen = btn.getAttribute("aria-expanded") === "true";
    const items = Array.from(menu.querySelectorAll('[role="menuitem"]'));
    switch (e.key) {
      case "Enter":
      case " ":
        e.preventDefault();
        if (!isOpen) {
          setOpen(btn, menu, true);
          // Per ARIA APG menu-button pattern: keyboard open must move focus to first item
          requestAnimationFrame(() => items[0]?.focus());
        } else {
          setOpen(btn, menu, false);
        }
        break;
      case "ArrowDown":
        if (isOpen) {
          e.preventDefault();
          items[0]?.focus();
        }
        break;
      case "ArrowUp":
        if (isOpen) {
          e.preventDefault();
          items[items.length - 1]?.focus();
        }
        break;
      case "Escape":
        if (isOpen) {
          e.preventDefault();
          setOpen(btn, menu, false);
          btn.focus();
        }
        break;
      default:
        break;
    }
  });

  // ── close on outside click ─────────────────────────────────────────────────
  EventHandler.on(document, "mousedown.uds.tabbed-panels-v2", e => {
    if (!wrapper.contains(e.target)) {
      setOpen(btn, menu, false);
    }
  };
  EventHandler.on(document, "mousedown.uds.tabbed-panels-v2", closeIfOutside);
  EventHandler.on(document, "touchstart.uds.tabbed-panels-v2", closeIfOutside);

  // ── keyboard navigation inside menu ───────────────────────────────────────
  EventHandler.on(menu, "keydown.uds.tabbed-panels-v2", e => {
    const items = Array.from(menu.querySelectorAll('[role="menuitem"]'));
    const idx = items.indexOf(document.activeElement);

    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        (items[idx + 1] ?? items[0]).focus();
        break;
      case "ArrowUp":
        e.preventDefault();
        (items[idx - 1] ?? items[items.length - 1]).focus();
        break;
      case "Home":
        e.preventDefault();
        items[0]?.focus();
        break;
      case "End":
        e.preventDefault();
        items[items.length - 1]?.focus();
        break;
      case "Escape":
        e.preventDefault();
        setOpen(btn, menu, false);
        btn.focus();
        break;
      case "Tab":
        setOpen(btn, menu, false);
        break;
      default:
        break;
    }
  });
}

function setOpen(btn, menu, open) {
  btn.setAttribute("aria-expanded", String(open));
  menu.setAttribute("aria-hidden", String(!open));
  menu.classList.toggle("open", open);
  // The chevron rotation is driven by the button's [aria-expanded] state in CSS,
  // so both the React and vanilla layers share a single mechanism.
}

// ─── overflow calculation ─────────────────────────────────────────────────────

/**
 * Measure all tabs, decide which fit, hide the rest and populate the More menu.
 */
function calculateOverflow(container) {
  // React manages its own instances; never enhance one from the bootstrap version
  if (container.hasAttribute("data-react")) return;

  const navTabs = container.querySelector(".nav.nav-tabs");
  if (!navTabs) return;

  // Collect original tab buttons (exclude the More wrapper itself)
  const tabLinks = Array.from(navTabs.querySelectorAll("button.nav-link"));

  if (tabLinks.length === 0) return;

  const isDark = container.classList.contains("uds-tabbed-panels-dark");
  const { wrapper, button, menu } = ensureDropdown(navTabs, isDark);

  // Temporarily show all tabs so we can measure them
  tabLinks.forEach(a => {
    a.style.display = "";
    a.removeAttribute("aria-hidden");
    a.removeAttribute("tabindex");
    a.removeAttribute("inert");
  });

  const availableWidth = navTabs.clientWidth;
  const { moreBtnWidth, tabGap } = readLayoutConstants(container, navTabs);
  const widths = tabLinks.map(a => a.getBoundingClientRect().width || 80);

  const visibleIds = [];
  const overflowIds = [];
  let used = 0;

  for (let i = 0; i < tabLinks.length; i++) {
    const w = widths[i];
    if (used + w + moreBtnWidth > availableWidth) {
      for (let j = i; j < tabLinks.length; j++) {
        overflowIds.push(tabLinks[j].id);
      }
      break;
    }
    visibleIds.push(tabLinks[i].id);
    used += w + tabGap;
  }

  // Show / hide tab links
  // Overflow tabs get display:none + tabindex="-1" + aria-hidden + inert
  // so they are completely unreachable by any keyboard interaction.
  tabLinks.forEach(a => {
    if (overflowIds.includes(a.id)) {
      a.style.display = "none";
      a.setAttribute("tabindex", "-1");
      a.setAttribute("aria-hidden", "true");
      a.setAttribute("inert", "");
    }
  });

  if (overflowIds.length === 0) {
    wrapper.classList.add("uds-more-dropdown-hidden");
    wrapper.setAttribute("aria-hidden", "true");
    return;
  }
  wrapper.classList.remove("uds-more-dropdown-hidden");
  wrapper.removeAttribute("aria-hidden");

  // Anchor dropdown to the right of the More button when the container is
  // narrower than 1200px AND the dropdown still fits within the viewport
  // (so it doesn't overflow on mobile).
  const wrapperRect = wrapper.getBoundingClientRect();
  const fitsInViewport = wrapperRect.left + DROPDOWN_WIDTH <= window.innerWidth;
  const fitsIn1200 = wrapperRect.left + DROPDOWN_WIDTH <= 1200;
  const containerWidth = container.getBoundingClientRect().width;
  const isNarrow = containerWidth < 1200;
  wrapper.classList.toggle(
    "dropdown-open-right",
    isNarrow && fitsInViewport && fitsIn1200
  );

  // Determine the active tab
  const activeTab = navTabs.querySelector("button.nav-link.active");
  const activeId = activeTab?.id ?? "";
  const hasActiveOverflow = overflowIds.includes(activeId);

  button.classList.toggle("active", hasActiveOverflow);

  // Update More button aria-label to announce the overflow count to screen readers
  const overflowCount = overflowIds.length;
  button.setAttribute(
    "aria-label",
    `More, ${overflowCount} additional tab${overflowCount !== 1 ? "s" : ""}`
  );

  // Roving tabindex: only one visible tab gets tabindex="0" so keyboard users
  // can reach the tab row. If the active tab is hidden in the dropdown, the
  // first visible tab becomes the focus entry point instead.
  const rovingFocusId = hasActiveOverflow ? visibleIds[0] : activeId;
  tabLinks.forEach(a => {
    if (!overflowIds.includes(a.id)) {
      a.setAttribute("tabindex", a.id === rovingFocusId ? "0" : "-1");
    }
  });

  // Rebuild menu items
  menu.innerHTML = "";
  overflowIds.forEach(tabId => {
    const originalLink = navTabs.querySelector(`#${CSS.escape(tabId)}`);
    if (!originalLink) return;

    const isActive = tabId === activeId;
    const li = document.createElement("li");
    li.setAttribute("role", "none");

    const btn = document.createElement("button");
    btn.type = "button";
    btn.setAttribute("role", "menuitem");
    btn.setAttribute("tabindex", "-1");
    btn.className = "more-dropdown-item";
    btn.dataset.tabId = tabId;
    if (isActive) btn.setAttribute("aria-current", "true");
    btn.textContent = originalLink.textContent.trim();

    EventHandler.on(btn, "click.uds.tabbed-panels-v2", e => {
      e.preventDefault();
      setOpen(button, menu, false);
      button.focus();
      activateTab(container, tabId);
      // Update active state on button and menu items
      updateActiveState(navTabs, tabId, button, menu);
    });

    li.appendChild(btn);
    menu.appendChild(li);
  });
}

/**
 * Manually activate a tab without the Bootstrap JS dependency.
 */
function activateTab(container, tabId) {
  const navTabs = container.querySelector(".nav.nav-tabs");
  const tabContent =
    container.closest("div")?.querySelector(".tab-content") ??
    container.parentElement?.querySelector(".tab-content");

  // Deactivate all
  navTabs.querySelectorAll("button.nav-link").forEach(a => {
    a.classList.remove("active");
    a.setAttribute("aria-selected", "false");
  });
  tabContent?.querySelectorAll(".tab-pane").forEach(pane => {
    pane.classList.remove("show", "active");
  });

  // Activate target
  const targetLink = navTabs.querySelector(`#${CSS.escape(tabId)}`);
  targetLink?.classList.add("active");
  targetLink?.setAttribute("aria-selected", "true");

  const panelId = `nav-${tabId}`;
  const targetPane = tabContent?.querySelector(`#${CSS.escape(panelId)}`);
  targetPane?.classList.add("show", "active");
}

/**
 * Sync the More button active state and aria-current on menu items.
 */
function updateActiveState(navTabs, activeId, button, menu) {
  const overflowIds = Array.from(
    menu.querySelectorAll('[role="menuitem"]')
  ).map((_, i) => i);
  // Re-check which ids are in the menu
  const menuItems = Array.from(menu.querySelectorAll('[role="menuitem"]'));
  const overflowVisible = menuItems.some(item => {
    // item text matches an overflow tab — check the hidden link
    return true; // we'll match by aria-current below
  });

  menuItems.forEach(item => {
    // Re-derive: find hidden button whose text matches
    const matchingHiddenLink = Array.from(
      navTabs.querySelectorAll("button.nav-link")
    ).find(
      a =>
        a.style.display === "none" &&
        a.textContent.trim() === item.textContent.trim()
    );
    const tabId = matchingHiddenLink?.id;
    if (tabId === activeId) {
      item.setAttribute("aria-current", "true");
    } else {
      item.removeAttribute("aria-current");
    }
  });

  const anyOverflowActive = menuItems.some(item =>
    item.hasAttribute("aria-current")
  );
  button.classList.toggle("active", anyOverflowActive);
}

// ─── listen for Bootstrap tab-shown events ────────────────────────────────────

function listenForTabChanges(container) {
  const navTabs = container.querySelector(".nav.nav-tabs");
  if (!navTabs) return;

  // Arrow key navigation between visible tabs (WCAG 2.1 tablist pattern).
  // IMPORTANT: use native addEventListener with { capture: true } so this fires
  // BEFORE Bootstrap's own keydown handler, which is attached directly on each
  // tab element (bubble phase). stopImmediatePropagation prevents Bootstrap from
  // also handling the event on the same element.
  function handleTabKeydown(e) {
    if (e.target?.getAttribute("role") !== "tab") return;
    const isArrow = ["ArrowRight", "ArrowLeft", "Home", "End"].includes(e.key);
    if (!isArrow) return;

    e.preventDefault();
    e.stopImmediatePropagation();

    const visibleTabs = Array.from(
      navTabs.querySelectorAll("button.nav-link")
    ).filter(a => a.style.display !== "none");
    const idx = visibleTabs.indexOf(e.target);
    if (idx === -1) return;

    let next = null;
    if (e.key === "ArrowRight") {
      next = visibleTabs[idx + 1] ?? visibleTabs[0];
    } else if (e.key === "ArrowLeft") {
      next = visibleTabs[idx - 1] ?? visibleTabs[visibleTabs.length - 1];
    } else if (e.key === "Home") {
      next = visibleTabs[0];
    } else if (e.key === "End") {
      next = visibleTabs[visibleTabs.length - 1];
    }

    if (next && next !== e.target) {
      // Update roving tabindex
      e.target.setAttribute("tabindex", "-1");
      next.setAttribute("tabindex", "0");
      next.focus();
      // Activate the tab — buttons use our own activateTab, no Bootstrap plugin needed
      activateTab(container, next.id);
      const moreBtn = navTabs.querySelector(".more-dropdown-button");
      const moreMenu = navTabs.querySelector(".more-dropdown-menu");
      if (moreBtn && moreMenu)
        updateActiveState(navTabs, next.id, moreBtn, moreMenu);
    }
  }

  navTabs.addEventListener("keydown", handleTabKeydown, true);

  // Click handler for tab buttons — Bootstrap's Tab plugin is not involved
  // (buttons have no data-bs-toggle), so we activate tabs manually on click.
  EventHandler.on(navTabs, "click.uds.tabbed-panels-v2", e => {
    const btn = e.target?.closest("button.nav-link");
    if (!btn || btn.style.display === "none") return;
    e.preventDefault();
    activateTab(container, btn.id);
    const moreBtn = navTabs.querySelector(".more-dropdown-button");
    const moreMenu = navTabs.querySelector(".more-dropdown-menu");
    if (moreBtn && moreMenu)
      updateActiveState(navTabs, btn.id, moreBtn, moreMenu);
  });
}

// ─── public init ──────────────────────────────────────────────────────────────

function initTabbedPanelsV2() {
  document
    .querySelectorAll(".uds-tabbed-panels:not([data-react])")
    .forEach(container => {
      calculateOverflow(container);
      listenForTabChanges(container);
    });

  // Recalculate on resize (debounced)
  let resizeTimer;
  EventHandler.on(window, "resize.uds.tabbed-panels-v2", () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      document
        .querySelectorAll(".uds-tabbed-panels:not([data-react])")
        .forEach(calculateOverflow);
    }, 100);
  });
}

export { initTabbedPanelsV2 };

if (document.readyState === "complete") {
  setTimeout(initTabbedPanelsV2, 0);
} else {
  // Wait for full load so dynamically-generated HTML is in the DOM
  EventHandler.on(window, "load.uds.tabbed-panels-v2", initTabbedPanelsV2);
}
