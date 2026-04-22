### Bug 1 — `active` state on "More" button is wrong (behavioral)

**File**: `components/MoreDropdown.jsx` (~line 123)

The Figma annotation states: *"'More' dropdown is underlined when a tab from the hidden list is **selected**."* Currently `active` is tied solely to `isOpen` — whether the dropdown panel is open. This produces two failures:

1. **Dropdown closed, overflow tab selected** — the More button has no `active` class and no maroon underline. The user has zero visual feedback in the nav bar that an overflow tab is currently active. Live test confirmed: selecting "Tab seven" correctly renders content `7` in the panel, but the More button appears completely inactive with no underline.
2. **Dropdown open, no overflow tab selected** — the More button incorrectly shows `active` styling just because the panel is toggled open, even though no overflow tab is the current tab.

```jsx
// Current — WRONG: active only when dropdown is open
className={`uds-tab more-dropdown-button${isOpen ? " active" : ""}`}

// Fix — active when an overflow tab is selected (regardless of open/closed state)
// Also keep active while open so the user sees continuity while browsing the list
className={`uds-tab more-dropdown-button${(overflowTabs.includes(activeTabID) || isOpen) ? " active" : ""}`}
```

---

### Bug 2 — CSS property ordering nullifies the transparent border (visual)

**File**: `packages/unity-bootstrap-theme/src/scss/extends/_tabbed-panels.scss` (~line 113)

`border: none` comes **after** `border-bottom: 8px solid transparent` and overrides it. The More button ends up with no bottom border in its inactive state, making it **32px tall** vs 41px for every other tab — a visible misalignment.

```scss
// Current — WRONG: border: none resets border-bottom
.more-dropdown-button {
  border-bottom: 8px solid transparent; // gets overridden
  border: none;                         // resets ALL borders including bottom
}

// Fix — swap the order
.more-dropdown-button {
  border: none;
  border-bottom: 8px solid transparent; // now takes effect
}
```

---

### Bug 3 — Dropdown dimensions don't match Figma (visual)

**File**: `packages/unity-bootstrap-theme/src/scss/extends/_tabbed-panels.scss` (~line 133)

https://www.figma.com/design/fCGmbJDE7gn87tqezmv815/241121-Tabbed-panel-updates?node-id=3096-1697&m=dev specifies a 282×332px dropdown with 32px padding and 16px gap between items. The current implementation is significantly smaller with no side padding.

```scss
// Current — WRONG
.more-dropdown-menu {
  width: 180px;   // should be 17.625rem per A1
  padding: 0.5rem 0;
  gap: 0;
}

// Fix — use rem per A1 convention
.more-dropdown-menu {
  min-width: 17.625rem; // 282px — min-width allows growth at larger font sizes
  padding: 2rem;
  gap: 1rem;            // 16px
}
```

---

### Bug 4 — Active dropdown item bar has unintended gap and incorrect width (visual)

**File**: `packages/unity-bootstrap-theme/src/scss/extends/_tabbed-panels.scss` (~line 195)

The 8px maroon bar IS present — it is rendered via a `::after` pseudo-element. However the implementation has two visual problems compared to Figma node `3096:1720`:

1. **4px gap between text and bar** — `margin-top: 4px` on `::after` adds a gap that does not exist in the Figma design, where the bar sits flush directly below the text.
2. **Bar is narrower than the full item width** — because `::after` renders inside the content box of the `<a>` element, it is `width - padding-left - padding-right` wide (i.e. `100% - 2rem`), not the full item width. Figma specifies `w-full` (full container width).

Additionally, using `::after` is inconsistent with how every other active state in this component was implemented (via `border-bottom` directly on the element). The `border-bottom` approach handles both issues naturally: no gap, full element width.

```scss
// Current — bar present but wrong position and width
.more-dropdown-item[aria-current="true"] {
  color: $uds-color-base-maroon;
}
.more-dropdown-item[aria-current="true"]::after {
  content: "";
  display: block;
  height: 8px;
  background: $uds-color-base-maroon;
  margin-top: 4px; // unintended gap; bar is also content-width, not full-width
}

// Fix — consistent with the rest of the component
.more-dropdown-item[aria-current="true"] {
  color: $uds-color-base-maroon;
  border-bottom: 8px solid $uds-color-base-maroon;
  padding-bottom: 0; // account for the 8px border so total height stays consistent
}
// Remove the ::after rule entirely
```

---

### Bug 5 — Thin unintended underline appears on first dropdown item when opened (visual)

**Files**: `components/MoreDropdown.jsx`, `packages/unity-bootstrap-theme/src/scss/extends/_tabbed-panels.scss`

When the dropdown opens, `MoreDropdown` auto-focuses the first list item via `firstItemRef.current?.focus()`. This triggers the `:focus-visible` CSS rule which applies `text-decoration: underline` — producing a thin dark underline under whatever item happens to be first in the list, regardless of whether it is the active tab.

When the first item is *also* the active tab (`aria-current="true"`), both states fire simultaneously. The `[aria-current]` rule sets `color` and adds an `::after` bar — but it does not suppress `:focus-visible`'s `text-decoration: underline`. The result is the thin underline showing alongside the bar, which is visually inconsistent.

**This fix depends on Bug 4 being applied first** (replacing `::after` with `border-bottom` on `[aria-current]`). Once Bug 4 is done, add the following rule to suppress the focus underline on active items:

```scss
// Add alongside the [aria-current] rule — suppresses focus underline on active items
// Requires Bug 4's border-bottom fix to be in place first
.more-dropdown-item[aria-current="true"]:focus-visible {
  text-decoration: none;
  // border-bottom: 8px solid $uds-color-base-maroon is applied by the [aria-current] rule
}
```

This ensures a focused-and-active item shows only the correct 8px maroon border, not the generic focus underline.

---

### Bug 6 — More button is not right-aligned to the tab bar edge (visual/layout)

**File**: `TabbedPanels.jsx`, `packages/unity-bootstrap-theme/src/scss/extends/_tabbed-panels.scss`

The Figma design (annotated: *"More tab is always anchored to far right of tabbed panel component"*) requires the More button to be pinned to the **right edge** of the nav bar at all times, regardless of how many visible tabs are showing. Currently the More button sits immediately after the last visible tab with no separation, so it shifts position on every resize.

The fix is to push the More button to the far right with `margin-left: auto` on its container:

```scss
// Add to _tabbed-panels.scss
.uds-more-dropdown {
  margin-left: auto;  // always pins More to the right edge of the flex row
  position: relative; // required for Bug 7 fix
  flex-shrink: 0;     // prevents the button from being squished
}
```

---

### Bug 7 — Dropdown menu does not open below the More button (layout)

**File**: `packages/unity-bootstrap-theme/src/scss/extends/_tabbed-panels.scss`

This is the root cause of the dropdown appearing at the far right of the screen rather than below the More button. There is **no `position: relative` on `.uds-more-dropdown`**. The `.more-dropdown-menu` uses `position: absolute; top: 41px; right: 0` — without a positioned parent, the browser walks up the DOM and finds `.nav-tabs` (which has `position: relative`). This makes the dropdown's `right: 0` align to the right edge of the entire nav bar, not the More button.

The fix in Bug 6 (`position: relative` on `.uds-more-dropdown`) resolves this. Once applied, `right: 0` on the dropdown will correctly anchor to the right edge of the More button container.

Figma also specifies a second layout rule: *"If tabbed panel is shorter than full-width / 1200px, 'More' dropdown can anchor to left of 'More' tab so long as it'll fit within the 1200px content area."* This means the dropdown should flip to `left: 0` (instead of `right: 0`) when it would overflow the right edge of the content area.

Two important conventions must be followed for this fix:

- **Use `useLayoutEffect`, not `useEffect`** — this is the same reason as P1: we are measuring DOM positions and making a visual correction. `useEffect` runs after paint, so the dropdown would flash in the wrong position for one frame. `useLayoutEffect` runs synchronously before paint, making the flip invisible.
- **Toggle a CSS class, not inline styles** — the project convention (called out in A1 of this review) is that all styles live in SCSS. Setting `element.style.right` directly bypasses that system. The correct approach is to toggle a class and define both positions in SCSS.

```scss
// In _tabbed-panels.scss — add alongside .more-dropdown-menu
.more-dropdown-menu.flip-left {
  right: auto;
  left: 0;
}
```

```js
// In MoreDropdown.jsx
const menuRef = useRef(null);

useLayoutEffect(() => {
  if (isOpen && menuRef.current) {
    const rect = menuRef.current.getBoundingClientRect();
    const overflowsRight = rect.right > (window.innerWidth || document.documentElement.clientWidth);
    menuRef.current.classList.toggle('flip-left', overflowsRight);
  }
}, [isOpen]);
```

---

## Accessibility — Must Fix

### A1 — Hard-coded `px` sizes fail WCAG 1.4.4 Resize Text (AA)

**Files**: `_tabbed-panels.scss`, `MoreDropdown.jsx` fixes proposed in this review

**WCAG criterion**: [1.4.4 Resize Text (Level AA)](https://www.w3.org/WAI/WCAG21/Understanding/resize-text.html) — text must be resizable up to 200% without loss of content or functionality.

All sizes in the current implementation and in the fixes proposed in this review are specified in `px`. When a user increases their browser's base font size (e.g. from 16px to 20px), px values stay fixed — tab labels overflow their containers, hit targets shrink relative to the text, and the layout breaks. This is a systemic issue that affects every size value in `_tabbed-panels.scss`.

**All px values should be converted to `rem`** so they scale with the user's font size preference:

| Current (px) | Fix (rem) | At default 16px | At 200% (32px base) |
|---|---|---|---|
| `height: 41px` | `height: 2.5625rem` | 41px | 82px |
| `gap: 8px` | `gap: 0.5rem` | 8px | 16px |
| `gap: 16px` (proposed Bug 3) | `gap: 1rem` | 16px | 32px |
| `width: 282px` (proposed Bug 3) | `min-width: 17.625rem` | 282px | 352px |
| `padding: 0.5rem 1rem` | ✅ already rem | — | — |
| `font-size: 16px` | `font-size: 1rem` | 16px | 32px |
| `line-height: 24px` | `line-height: 1.5rem` | 24px | 48px |
| `border-bottom: 8px` | `border-bottom: 0.5rem` | 8px | 16px |

Note: the `margin-top: 4px` on `::after` is not included here because Bug 4 removes the `::after` rule entirely — it does not need to be converted.

For the dropdown `width`, prefer `min-width` over a fixed `width` so the container can grow with content at larger font sizes rather than clipping.

---

### A2 — Tab and More button touch targets are below WCAG 2.5.5 recommended size

**Files**: `_tabbed-panels.scss`, `MoreDropdown.jsx`

**WCAG criterion**: [2.5.5 Target Size (Level AAA)](https://www.w3.org/WAI/WCAG21/Understanding/target-size.html) recommends 44×44px. [2.5.8 Target Size Minimum (Level AA, WCAG 2.2)](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html) requires 24×24px with adequate spacing.

- **Tab links** (`nav-link`): 41px tall ✅ meets 2.5.8 minimum, but ❌ misses 2.5.5 recommended by 3px. Since these are inline navigation elements (exempt from 2.5.8 if spacing compensates), this is acceptable at AA but worth noting.
- **More button**: currently **32px tall** due to Bug 2 (missing `border-bottom`). This is an active AA failure. Once Bug 2 is fixed it returns to 41px.
- **Dropdown items**: `padding: 0.5rem 1rem` gives ~40px hit area per item, which is acceptable, but when the `gap: 16px` fix (Bug 3) is applied, ensure the gap is purely visual spacing between text — the clickable `<a>` element itself must still span the full row width. Currently it does (`display: block; width: 100%`) ✅, but verify this is preserved after the fix.

**Recommendation**: Add `min-height: 2.75rem` (44px) to `.nav-link` and `.more-dropdown-button` to meet the AAA recommendation, which is achievable here without layout cost.

---

### A3 — Incorrect ARIA roles on dropdown: overflow items must use `role="tab"`, not `role="menuitem"`

**File**: `components/MoreDropdown.jsx`

This is the most significant accessibility issue in the component. The overflow items in the More dropdown are **tabs** — they activate content panels, which is exactly what `role="tab"` is defined for. Using `role="menuitem"` (application menu) or `role="option"` (listbox selection) announces the wrong semantic to screen readers and gives them a fundamentally incorrect mental model of the UI.

**The DOM structure makes the correct pattern clear.** `MoreDropdown` renders *inside* the `role="tablist"` div (see `TabbedPanels.jsx` line 259). The visible tab items (`TabHeader`) already correctly use:
```jsx
role="tab"
aria-controls={`nav-${id}`}
aria-selected={selected}
```
The overflow items must match that same pattern — they are part of the same tab interface, just presented in an overflow container.

**What is wrong and why:**

| Current | Problem |
|---|---|
| `role="menu"` on container | Puts screen reader in Application mode — expects arrow-key nav, Home/End. None of that is implemented. |
| `role="menuitem"` on items | Wrong semantic: announces "menu item" not "tab". Breaks the tablist mental model entirely. |
| `aria-current="true"` | Wrong attribute for `role="tab"` — the correct attribute is `aria-selected`. |
| `aria-haspopup="true"` | No valid `aria-haspopup` value exists for a tab popup — `true`/`"menu"` both tell the screen reader to expect a menu, not tabs. Should be removed. |
| `tabIndex={0}` on all items | All tabs in focus order at once — correct pattern for `role="tab"` is roving tabindex (only focused/active tab is `tabIndex={0}`). |

**Fix — align with the existing `TabHeader` pattern:**

```jsx
// In MoreDropdown.jsx

// 1. Remove role="menu" from the dropdown container — the items are tabs inside a tablist,
//    not menu items. No role is needed on the container itself.
<div
  id={menuId}
  className="more-dropdown-menu"
  onKeyDown={onMenuKeyDown}
  // role="menu" ← remove this
>
  <ul className="uds-more-dropdown-list">
    {items.map((item, index) => {
      const isActive = item.id === activeTabID;
      return (
        <li key={item.id}>
          <a
            href={`#${item.id}`}
            role="tab"                          // ← matches TabHeader
            aria-controls={`nav-${item.id}`}   // ← matches TabHeader
            aria-selected={isActive}            // ← replaces aria-current
            tabIndex={isActive ? 0 : -1}        // ← roving tabindex (only active is 0)
            // role="menuitem" ← remove
            // aria-current ← remove
            ...
          >
```

```jsx
// 2. On the More button — remove aria-haspopup, keep aria-expanded
<button
  type="button"
  onClick={toggle}
  aria-expanded={isOpen}      // ← keep: communicates open/closed state
  aria-controls={menuId}      // ← keep: links button to the dropdown
  aria-label="More tabs"      // ← keep
  // aria-haspopup ← remove: no valid value for a tab popup
  ...
>
```

Arrow key navigation between overflow items is optional for this pattern (they are `role="tab"` inside a tablist and the Tab key is the standard way to navigate between tab lists), but if implemented should use Up/Down arrows consistent with the existing `leftKeyPressed`/`rightKeyPressed` pattern in `TabHeader`.

---

## Code Quality — Should Fix

### Q1 — Magic number `80` fallback in `calculateOverflow` is unexplained

**File**: `TabbedPanels.jsx` (line 130)

```js
return 80;
```

Why `80`? This value is used as an assumed tab width when `getBoundingClientRect()` cannot be called (i.e. the DOM node hasn't mounted). There is no comment, no design spec reference, and no measured basis for this number. If it's wrong — too large or too small — `calculateOverflow` will miscalculate how many tabs fit, hiding tabs that should be visible or overflowing tabs that shouldn't be.

**This fallback becomes dead code once P1's `useLayoutEffect` fix is applied.** `useLayoutEffect` runs synchronously after all children have mounted, so `getBoundingClientRect()` is always available and no fallback is needed. The correct fix is to pair the P1 change with making the fallback an explicit abort:

```js
const widths = tabIDs.map(id => {
  const domNode = tabRefs.current[id] || headerTabItems.current?.[id];
  if (domNode && typeof domNode.getBoundingClientRect === "function") {
    return Math.round(domNode.getBoundingClientRect().width);
  }
  return null; // node not ready — abort calculation
});

// If any width is unknown, nodes aren't mounted yet — skip this run
if (widths.some(w => w === null)) return;
```

This makes the intent explicit: if a node is missing, do nothing and wait for the next `ResizeObserver` callback to re-trigger the calculation once layout has settled. No silent wrong guesses, no arbitrary constants.

---

## Performance — Must Fix

### P1 — Tab bar flickers on resize (two compounding causes)

**File**: `TabbedPanels.jsx`

#### Cause 1 — Initial render flashes all tabs before measurement

`visibleTabs` is initialized with every tab ID:

```js
const [visibleTabs, setVisibleTabs] = useState(
  childrenArray.map(c => c.props.id)  // ALL tabs visible
);
```

`calculateOverflow()` only runs **after** the first paint (inside `useEffect` + `setTimeout(..., 0)`). The browser paints a frame with all tabs at full width, then immediately repaints with some moved into the More dropdown — causing the flash on every mount.

#### Cause 2 — Every pixel of resize triggers a full re-render

```js
const handleResize = () => {
  calculateOverflow();  // no throttle or debounce
};
window.addEventListener("resize", handleResize);
```

`calculateOverflow` calls `setVisibleTabs` and `setOverflowTabs` on every `resize` event, which fires dozens of times per second while dragging the window. Each call triggers a React re-render that unmounts/remounts visible tab elements. Note: `throttle` and `debounce` are already imported from `@asu/shared` but never used — this looks like the intended fix that wasn't applied.

#### Recommended fix — `useLayoutEffect` + `ResizeObserver`

`useLayoutEffect` is the right tool for "measure the DOM, update state before the browser paints" — which is exactly this use case. `ResizeObserver` is preferred over `window.resize` + throttle for long-term maintainability because:

1. It observes the **container, not the window** — it fires if a sidebar collapses or a parent container resizes, not just when the browser window changes. This matters for CMS-embedded use.
2. The browser batches it internally — no manual timing constants to tune.
3. Fewer moving parts — no imported utility, no global listener, simpler cleanup.

```js
// Replace the current useEffect + setTimeout + window.resize with:

useLayoutEffect(() => {
  calculateOverflow(); // runs before paint — no initial flash
}, [calculateOverflow]);

useEffect(() => {
  const observer = new ResizeObserver(() => {
    calculateOverflow();
  });

  if (headerTabs.current) {
    observer.observe(headerTabs.current); // watches the container, not the window
  }

  return () => observer.disconnect();
}, [calculateOverflow]);
```

The `throttle` and `debounce` imports can then be removed since they are no longer needed anywhere in this component.

---

## What Works Well

- **Overflow detection logic** (`calculateOverflow`) correctly identifies visible vs overflow tabs using measured DOM widths via `getBoundingClientRect()`. Resize handling is properly set up and cleaned up.
- **Keyboard navigation** — Escape closes the dropdown, Tab dismisses it, focus is moved to the first item on open. All correct.
- **Click-outside detection** — `mousedown` listener on `document` is properly added and removed in `useEffect` cleanup.
- **`idToChild` map as prop** — clean design that gives `MoreDropdown` access to tab title and icon without coupling it to the parent's internal state.
- **`GaEventWrapper` usage** — correctly wrapped around the "More" button for analytics tracking.
