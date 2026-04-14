# TabbedPanels — PR Fix Guide

This document covers findings from the code review and live browser testing against the design spec in `TABBED_PANELS_REDESIGN_TODO.md`. The More dropdown **never renders in any browser testing scenario** — that is the primary bug. Fix items in the order listed; Bug 1 is the root cause of the broken feature.


---

## Priority Summary

| # | Severity | File | Issue |
|---|----------|------|-------|
| 1 | 🔴 Blocker | `TabbedPanels.jsx` | More button never appears — wrong hook type |
| 2 | 🟡 High | `TabbedPanels.jsx` | `registerTabNode` not memoized — causes ref churn |
| 3 | 🟡 High | `TabbedPanels.jsx` | Tab widths lost from cache after first overflow calculation |
| 4 | 🟡 Medium | `_tabbed-panels.scss` | `border: none` overrides `border-bottom` on More button — CSS property order bug |
| 5 | 🟡 Medium | `_tabbed-panels.scss` | Dropdown `padding` doesn't match spec (0.5rem vs 2rem from TODO) |
| 6 | 🟡 Medium | `_tabbed-panels.scss` | SCSS variables defined but never used — hardcoded values throughout |
| 7 | 🟢 Low | `TabbedPanels.jsx` | Remove leftover REVIEW comments |
| 8 | 🟢 Low | `_tabbed-panels.scss` | Hardcoded `#fafafa` and `#ffffff` should use SCSS variables |

---

## Bug 1 (BLOCKER): More Button Never Appears — Wrong Hook Type

**File**: `TabbedPanels.jsx`
**Lines**: The `useEffect` that calls `calculateOverflow`

### What's happening

The overflow calculation runs inside `useEffect`, which fires **after** the browser has painted. By that point, React's cleanup cycle (especially in Strict Mode, which Storybook uses) has already unmounted and remounted the component once. During that cycle, `clearTimeout` cancels the pending `setTimeout(0)` and ref registrations (`tabRefs.current`) are wiped and repopulated. When `calculateOverflow` finally runs, the refs are empty and every tab falls back to `80px` width. At a 1366px viewport, 12 tabs × 80px = 960px — that still fits, so nothing overflows and no More button is ever shown.

### What to look up

- The difference between `useEffect` and `useLayoutEffect`
- When each one fires relative to DOM paint
- Which one is appropriate when you need to measure DOM element sizes

### Hint

DOM measurement (anything using `getBoundingClientRect`) needs to happen **synchronously after the DOM is committed but before the browser paints**. There is a React hook designed exactly for this. Switching to it also eliminates the need for `setTimeout(0)`. The resize listener can stay in the same effect.

---

## Bug 2 (HIGH): `registerTabNode` Creates a New Function on Every Render

**File**: `TabbedPanels.jsx`

```javascript
// Current code
const registerTabNode = (id) => (node) => {
  setHeaderTabItems(id)(node);
  if (node) {
    tabRefs.current[id] = node;
  } else {
    delete tabRefs.current[id];
  }
};
```

### What's happening

This function is declared inside the component body without memoization. Every time the component re-renders, `registerTabNode` is a brand new function. React detects the ref callback has changed and calls the old ref with `null` (cleanup) then the new ref with the node. This causes unnecessary ref churn on every render, contributes to the timing issue in Bug 1, and causes extra re-renders downstream.

### What to fix

Wrap `registerTabNode` in the correct memoization hook so it is only re-created when its dependencies change. The inner function that captures `id` is returned from it — think about whether the outer vs. inner function needs to be memoized.

---

## Bug 3 (HIGH): Tab Widths Are Lost After First Overflow Calculation

**File**: `TabbedPanels.jsx`, inside `calculateOverflow`

```javascript
// Current code
const widths = tabIDs.map((id) => {
  const domNode = tabRefs.current[id] || headerTabItems.current?.[id];
  ...
});
```

### What's happening

`tabRefs.current` only holds refs for tabs that are **currently in the DOM** (i.e., the visible tabs). After the first calculation puts some tabs into overflow, their `TabHeader` components are no longer rendered, so their refs are removed via:

```javascript
// in registerTabNode
delete tabRefs.current[id];
```

On the next resize event, overflow tabs fall back to `80px` because their refs are gone. This can cause the visible/overflow boundary to shift unpredictably — a tab that was 165px wide suddenly looks like 80px on resize.

### What to fix

You need a way to remember the real measured width of a tab even after it leaves the DOM. The right approach is to capture and cache all tab widths **before** trimming which ones are visible, and **only measure newly seen tabs** on subsequent recalculations. A separate ref (e.g., `tabWidthCache`) can hold a `{ [tabId]: number }` map that is populated the first time a tab is measured and never cleared.

---

## Bug 4 (MEDIUM): CSS Property Order Breaks More Button Border

**File**: `packages/unity-bootstrap-theme/src/scss/extends/_tabbed-panels.scss`

```scss
// Current code
.more-dropdown-button {
  border-bottom: 8px solid transparent;  // ← set first
  background: #fafafa;
  border: none;                          // ← shorthand overrides border-bottom!
  cursor: pointer;
```

### What's happening

`border: none` is a CSS shorthand — it resets **all** border sides including `border-bottom`. Because it comes after `border-bottom` in the declaration order, it silently wipes out the bottom border. As a result, the active state border (8px maroon) may not appear correctly either, since it's built on top of a transparent `border-bottom` baseline that's been zeroed out.

### What to fix

Reorder the properties so the `border` shorthand (for resetting top/left/right) comes **before** `border-bottom`. Or replace the shorthand with explicit `border-top`, `border-left`, `border-right` declarations.

---

## Bug 5 (MEDIUM): Dropdown Padding Doesn't Match Design Spec

**File**: `packages/unity-bootstrap-theme/src/scss/extends/_tabbed-panels.scss`

```scss
// Current code
.more-dropdown-menu {
  padding: 0.5rem 0;   // ← spec says 2rem
```

### What's happening

The TODO spec explicitly states: **"Dropdown padding: 2rem"**. The SCSS variable `$tabbed-panels-dropdown-padding: 2rem` was even defined for exactly this value — but neither the variable nor the correct value is used. The dropdown will appear visually tighter than the design intends.

### What to fix

Use the `$tabbed-panels-dropdown-padding` variable that already exists in `variables/_tabbed-panels.scss` for both the padding value and as a reference. See Bug 6 for the broader pattern.

---

## Bug 6 (MEDIUM): SCSS Variables Defined but Never Used

**File**: `packages/unity-bootstrap-theme/src/scss/extends/_tabbed-panels.scss`
**Variables file**: `packages/unity-bootstrap-theme/src/scss/variables/_tabbed-panels.scss`

The variables file defines several values specifically for this redesign:

```scss
// variables/_tabbed-panels.scss — all of these exist but are NOT used in the extends file
$tabbed-panels-tab-height: 41px;
$tabbed-panels-tab-padding-x: 0.5rem;
$tabbed-panels-tab-padding-top: 0.5rem;
$tabbed-panels-active-border-width: 8px;
$tabbed-panels-tab-gap: 8px;
$tabbed-panels-font-size: 1rem;
$tabbed-panels-dropdown-width: 180px;
$tabbed-panels-dropdown-padding: 2rem;
```

Instead, the extends file uses hardcoded equivalents scattered throughout:

```scss
// Examples of hardcoded values in _tabbed-panels.scss
top: 41px;              // should be $tabbed-panels-tab-height
width: 180px;           // should be $tabbed-panels-dropdown-width
padding: 0.5rem 0;      // should use $tabbed-panels-dropdown-padding
font-size: 16px;        // should be $tabbed-panels-font-size
```

### What to fix

Go through the `.more-dropdown-*` styles and replace each hardcoded value with the matching SCSS variable. This is the project's established convention — the whole point of the variables file is single-source-of-truth for these design tokens.

---

## Bug 7 (LOW): Remove Leftover REVIEW Comments

**File**: `TabbedPanels.jsx`

Around line 172 there are two stale REVIEW comments left over from the initial draft. The engineer already fixed the issues they referenced, but never deleted the comments:

```javascript
// REVIEW: This useEffect is missing its dependency array...
// REVIEW: This will cause an infinite loop...
  // run overflow calculation on mount and on resize
```

The current code above these lines does have a dependency array. These comments are misleading and should be deleted.

---

## Bug 8 (LOW): Hardcoded Color Values in SCSS

**File**: `packages/unity-bootstrap-theme/src/scss/extends/_tabbed-panels.scss`

```scss
background: #fafafa;   // .more-dropdown-button
background: #ffffff;   // .more-dropdown-menu
border: 1px solid #d0d0d0;
```

The project uses SCSS variables for grays (check `_custom-asu-variables.scss` or `_unity-bootstrap-theme-variables.scss` for the right variable names). Replace these hardcoded hex values with the appropriate variables to stay consistent with the rest of the theme.

---

## Design Spec Compliance Checklist

Cross-referenced from `TABBED_PANELS_REDESIGN_TODO.md`. These should be verified once the bugs above are fixed:

| Spec | Required | Current State |
|------|----------|---------------|
| Tab height | 41px | ✅ `.nav-link { height: 41px }` |
| Tab padding | 0.5rem top, 0.5rem horizontal | ✅ |
| Active border | 8px solid maroon | ⚠️ May not render — see Bug 5 |
| Tab gap/spacing | 8px | ✅ `margin: 0 0.5rem 0 0` on `.nav-link` |
| Dropdown width | 180px | ⚠️ Hardcoded, not using `$tabbed-panels-dropdown-width` |
| Dropdown padding | 2rem | ❌ Currently `0.5rem 0` |
| Dropdown position | `top: 41px; right: 0` | ✅ but uses hardcoded `41px` |
| Chevron rotation | 180° on open | ✅ `.more-dropdown-icon.open { transform: rotate(180deg) }` |
| Dropdown shadow | `0 2px 8px rgba(0,0,0,0.15)` | ✅ |
| Active item highlight | Maroon color | ✅ `[aria-current="true"]` rule |
| Dark mode active border | Gold (#ffc627) | ✅ `$uds-color-brand-gold` |

---

## Verify in Storybook

After fixing, confirm each story in Storybook:

1. **ResponsiveBehavior** — fixed 320px container with 8 tabs. Should show visible tabs + More button at all times.
2. **WithOverflowTabs** — 12 tabs at 1366px viewport. The manual calculation confirms tabs 7–12 should overflow. More button must appear.
3. **ManyOverflowTabs** — 15 tabs at 320px. Nearly all tabs should be in the dropdown.
4. **DarkBackgroundOverflow** — verify gold active border on dark background, dropdown background is dark.
5. **Default** — 6 normal tabs at full width. No More button should appear.

For each story that shows the More button: click it, verify dropdown opens, select a tab from dropdown, verify content switches and dropdown closes.


```scss
.more-dropdown-button {
  background: #fafafa;  // ← hardcoded hex
```

The project has SCSS variables for grays (e.g., `$asu-gray-1`, `$asu-gray-2`). Replace the hardcoded hex with the appropriate variable. Check `_custom-asu-variables.scss` or `_unity-bootstrap-theme-variables.scss` to find the right match.

---

## Summary: Priority Order

| # | File | Fix |
|---|------|-----|
| 1 | `TabbedPanels.jsx` | Replace `useEffect` with the synchronous DOM measurement hook for `calculateOverflow` |
| 2 | `TabbedPanels.jsx` | Memoize `registerTabNode` |
| 3 | `TabbedPanels.jsx` | Cache tab widths so overflow tabs don't lose their measurements |
| 4 | `_tabbed-panels.scss` | Fix CSS property order in `.more-dropdown-button` (`border` shorthand before `border-bottom`) |
| 5 | `_tabbed-panels.scss` | Fix dropdown padding to match spec (`$tabbed-panels-dropdown-padding`) |
| 6 | `_tabbed-panels.scss` | Replace all hardcoded values with the SCSS variables you defined |
| 7 | `TabbedPanels.jsx` | Remove the stale REVIEW comments |
| 8 | `_tabbed-panels.scss` | Replace `#fafafa` and `#ffffff` with SCSS variables |

Fix them in order — Bug 1 alone should make the More button appear in the browser. Verify in Storybook using the **ResponsiveBehavior** and **WithOverflowTabs** stories before considering this done.
