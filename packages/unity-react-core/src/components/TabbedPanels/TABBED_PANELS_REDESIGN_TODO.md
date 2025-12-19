# Tabbed Panels V3 Redesign - Implementation TODO

## Overview
This document outlines the tasks needed to update the TabbedPanels component to match the new Figma design specifications. The redesign introduces a "More" dropdown for overflow tabs, updated styling, and improved responsive behavior.

**Figma Link**: https://www.figma.com/design/fCGmbJDE7gn87tqezmv815/241121-Tabbed-panel-updates?node-id=11-884&p=f&m=dev

**Related Ticket**: UDS-1664

---

## Key Design Changes

### 1. Tab Display and Overflow Management
- **OLD**: Horizontal scrolling with arrow navigation buttons
- **NEW**: Tabs display inline until they overflow, then remaining tabs move into a "More" dropdown

### 2. Visual Specifications
- **Tab height**: 41px (including 8px bottom border for active tab)
- **Tab padding**: 0.5rem horizontal, 0.5rem top
- **Active tab border**: 8px solid maroon (#8c1d40) on bottom
- **Tab spacing**: 8px gap between tabs
- **Max width**: 690px (7 columns) for content area
- **Min width**: 282px (3 columns) for mobile

### 3. More Dropdown Behavior
- Appears as the last tab when tabs overflow available horizontal space
- Label: "More" with chevron-down icon
- On click/active: Chevron rotates 180° (pointing up)
- Dropdown opens below with white background and gray border
- Lists remaining tabs that don't fit in horizontal space
- Dropdown width: 180px (2 columns)
- Dropdown padding: 2rem
- Tab limit: Maximum 9 tabs recommended

---

## Implementation Tasks

### Phase 1: Component Architecture Updates

#### TODO 1.1: Add Overflow Detection Logic
**File**: `TabbedPanels.jsx`

- [ ] Add a new state variable `overflowTabs` to track which tabs don't fit
- [ ] Add a new state variable `visibleTabs` to track which tabs are displayed inline
- [ ] Create a `useEffect` hook that runs on mount and window resize
- [ ] In this effect, measure the available width of the tab container
- [ ] Calculate the cumulative width of each tab as you iterate through them
- [ ] When cumulative width + "More" button width exceeds container width, mark remaining tabs as overflow
- [ ] Update both `visibleTabs` and `overflowTabs` state arrays

**Hint**: Use `getBoundingClientRect()` to measure element widths. Remember to account for the "More" dropdown width (approximately 83px) in your calculations.

#### TODO 1.2: Create More Dropdown Component
**File**: Create new file `components/MoreDropdown.jsx`

- [ ] Create a new component called `MoreDropdown`
- [ ] Add props: `overflowTabs` (array), `activeTabID` (string), `selectTab` (function), `gaData` (object)
- [ ] Add local state `isOpen` (boolean) to track dropdown open/closed state
- [ ] Render a button with:
  - Text: "More"
  - Icon: FontAwesome chevron-down (use className `fas fa-chevron-down`)
  - Rotate icon 180° when `isOpen` is true
  - Add onClick handler to toggle `isOpen`
- [ ] When `isOpen` is true, render a dropdown menu positioned absolutely below the button
- [ ] The dropdown should contain a list of the tabs from `overflowTabs` array
- [ ] Each dropdown item should be clickable and call `selectTab` when clicked
- [ ] Wrap in `GaEventWrapper` for analytics tracking
- [ ] Add click-outside detection to close dropdown (use `useEffect` with document click listener)

**Styling Notes**:
- Button should have 0.5rem padding top, 0.25rem padding horizontal
- Active state should show 8px maroon border on bottom
- Dropdown should have white background, gray border (#d0d0d0)
- Dropdown should be 180px wide with 2rem padding
- Position dropdown using `position: absolute; top: 41px; right: 0;`

#### TODO 1.3: Update TabHeader Export
**File**: `components/index.js`

- [ ] Export the new `MoreDropdown` component
- [ ] Ensure all existing exports remain unchanged

---

### Phase 2: Update Main TabbedPanels Component

#### TODO 2.1: Integrate Overflow Detection
**File**: `TabbedPanels.jsx`

- [ ] Import the new `MoreDropdown` component
- [ ] Add ref for measuring tab widths: `const tabRefs = useRef({})`
- [ ] Create a function `calculateOverflow()` that determines which tabs overflow
- [ ] Call `calculateOverflow()` in a `useEffect` that depends on `children` and window resize
- [ ] Store results in state variables created in TODO 1.1

#### TODO 2.2: Update Tab Rendering Logic
**File**: `TabbedPanels.jsx` (in the return statement)

- [ ] Filter `childrenArray` to only map over `visibleTabs` for inline display
- [ ] After the map of visible tabs, conditionally render the `MoreDropdown` component
- [ ] Only render `MoreDropdown` if `overflowTabs.length > 0`
- [ ] Pass the necessary props to `MoreDropdown` (overflowTabs, activeTabID, selectTab function, gaData)

#### TODO 2.3: Remove/Update NavControls
**File**: `TabbedPanels.jsx`

- [ ] Remove the `<NavControls>` component from the render (no longer needed with dropdown approach)
- [ ] Remove related state variables: `scrollLeft`, `scrollableWidth`
- [ ] Remove the `slideNav` function (no longer needed)
- [ ] Remove scroll-related event listeners and useEffect hooks
- [ ] Keep the horizontal scrolling capability on the tab container for mobile/smaller screens

**Note**: Some scroll behavior may still be useful for very narrow viewports where even a few tabs don't fit. Consider keeping the smooth scroll on the container but removing the arrow buttons.

---

### Phase 3: Update Styles

#### TODO 3.1: Update SCSS Variables
**File**: `packages/unity-bootstrap-theme/src/scss/variables/_tabbed-panels.scss`

- [ ] Verify the following variables exist (add if missing):
  - Tab height: 41px
  - Tab padding: 0.5rem horizontal, 0.5rem top
  - Active border width: 8px
  - Tab gap/spacing: 8px
  - Font size: 16px (should use body text variable)
  - Dropdown width: 180px
  - Dropdown padding: 2rem

#### TODO 3.2: Update Main Tabbed Panels Styles
**File**: `packages/unity-bootstrap-theme/src/scss/extends/_tabbed-panels.scss`

- [ ] Update `.nav-link` styles:
  - Height should be 41px total (including padding and border)
  - Padding: 0.5rem top, 0.5rem left/right, 0 bottom
  - Margin: 0 0.5rem 0 0 (0.5rem right margin for gap)
  - Font-size: 16px
  - Font-weight: 400 (regular, not bold)
  - Line-height: 24px
- [ ] Update `.nav-link.active` styles:
  - Border-bottom: 8px solid maroon
  - Padding adjustment to account for 8px border
- [ ] Remove styles related to scroll controls (`.scroll-control-prev`, `.scroll-control-next`)
- [ ] Remove gradient backgrounds used for scroll buttons

#### TODO 3.3: Add More Dropdown Styles
**File**: `packages/unity-bootstrap-theme/src/scss/extends/_tabbed-panels.scss`

- [ ] Add new class `.more-dropdown-button`:
  - Padding: 0.5rem top, 0.25rem left/right
  - Display: flex
  - Align-items: center
  - Gap: 8px (for spacing between text and icon)
  - Border-bottom: 8px solid transparent (for inactive state)
  - Background: #fafafa (gray-7)
- [ ] Add class `.more-dropdown-button.active`:
  - Border-bottom: 8px solid maroon (same as active tab)
- [ ] Add class `.more-dropdown-icon`:
  - Transition: transform 0.3s ease
- [ ] Add class `.more-dropdown-icon.open`:
  - Transform: rotate(180deg)
- [ ] Add class `.more-dropdown-menu`:
  - Position: absolute
  - Top: 41px
  - Right: 0
  - Width: 180px
  - Background: white
  - Border: 1px solid #d0d0d0
  - Padding: 2rem
  - Display: flex
  - Flex-direction: column
  - Gap: 16px
  - Z-index: 1000
  - Box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15) (optional for depth)
- [ ] Add class `.more-dropdown-item`:
  - Font-size: 16px
  - Line-height: 24px
  - Color: #191919
  - Text-decoration: none
  - Cursor: pointer
  - Padding: 0 (items should not have extra padding)
- [ ] Add hover state `.more-dropdown-item:hover`:
  - Color: maroon
  - Text-decoration: underline

#### TODO 3.4: Update Dark Theme Styles
**File**: `packages/unity-bootstrap-theme/src/scss/extends/_tabbed-panels.scss`

- [ ] Update `.uds-tabbed-panels-dark` section to match new specifications
- [ ] Active tabs should use gold (#ffc627) instead of maroon for border
- [ ] Ensure More dropdown works on dark backgrounds (may need different dropdown background)

---

### Phase 4: Component Props and PropTypes

#### TODO 4.1: Update PropTypes
**File**: `TabbedPanels.jsx`

- [ ] Review and ensure all PropTypes are accurate
- [ ] Add PropTypes for any new state variables if passed as props
- [ ] Update documentation comments if needed

#### TODO 4.2: Update Storybook Stories
**File**: `TabbedPanels.stories.jsx`

- [ ] Create a new story called "With Overflow Tabs" that includes 10+ tabs to demonstrate the More dropdown
- [ ] Create a story showing responsive behavior at different widths
- [ ] Update existing stories to ensure they still work correctly
- [ ] Add story demonstrating dark background variant with overflow

---

### Phase 5: Accessibility

#### TODO 5.1: Add Keyboard Navigation for Dropdown
**File**: `components/MoreDropdown.jsx`

- [ ] Add keyboard handler to open dropdown with Enter or Space key
- [ ] Add Escape key handler to close dropdown
- [ ] Add Tab key handling to navigate through dropdown items
- [ ] Ensure focus management works correctly (focus should move to dropdown when opened)

#### TODO 5.2: Add ARIA Attributes
**File**: `components/MoreDropdown.jsx`

- [ ] Add `aria-expanded` attribute to More button (true when open, false when closed)
- [ ] Add `aria-haspopup="true"` to More button
- [ ] Add `aria-label` to More button: "More tabs"
- [ ] Add `role="menu"` to dropdown container
- [ ] Add `role="menuitem"` to each dropdown item
- [ ] Add `aria-controls` linking button to dropdown menu ID

#### TODO 5.3: Update Existing Tab ARIA
**File**: `components/TabHeader.jsx`

- [ ] Verify `aria-selected` is still correctly applied
- [ ] Verify `role="tab"` is present
- [ ] Ensure keyboard navigation (left/right arrows) still works for visible tabs
- [ ] Test that tab order makes sense with new More dropdown

---

### Phase 6: Testing and Edge Cases

#### TODO 6.1: Manual Testing Checklist

- [ ] Test with 3 tabs (should all be visible, no More dropdown)
- [ ] Test with 9 tabs (some should be in dropdown)
- [ ] Test with 15+ tabs (ensure dropdown scrolls if needed)
- [ ] Test responsive behavior from 282px to 1200px width
- [ ] Test tab switching when active tab is in dropdown (should still work)
- [ ] Test dark background variant
- [ ] Test keyboard navigation (Tab, Enter, Escape, Arrow keys)
- [ ] Test with screen reader (test aria attributes work correctly)
- [ ] Test that clicking outside dropdown closes it
- [ ] Test that clicking a tab in dropdown closes dropdown and switches tabs

#### TODO 6.2: Browser Testing

- [ ] Test in Chrome
- [ ] Test in Firefox
- [ ] Test in Safari
- [ ] Test in Edge
- [ ] Test on mobile devices (iOS Safari, Android Chrome)

#### TODO 6.3: Update Unit Tests
**File**: `TabbedPanels.test.jsx`

- [ ] Add test for overflow detection logic
- [ ] Add test that More dropdown appears when tabs overflow
- [ ] Add test that clicking More dropdown opens/closes it
- [ ] Add test that selecting tab from dropdown works correctly
- [ ] Add test for keyboard navigation in dropdown
- [ ] Update any existing tests that may be affected by changes
- [ ] Ensure all existing tests still pass

---

### Phase 7: Documentation

#### TODO 7.1: Update Component Documentation
**File**: `TabbedPanels.jsx` (JSDoc comments)

- [ ] Update main component description to mention More dropdown behavior
- [ ] Document the maximum recommended tabs (9)
- [ ] Add notes about responsive behavior
- [ ] Document any new props

#### TODO 7.2: Update README (if exists)
**File**: Look for `README.md` in TabbedPanels folder

- [ ] Update usage examples
- [ ] Add screenshots or animated GIFs showing the More dropdown
- [ ] Document the new behavior
- [ ] Add troubleshooting section if needed

---

## Implementation Tips

### For Overflow Detection
```javascript
// Example approach for measuring tab widths
const calculateOverflow = () => {
  const container = headerTabs.current;
  if (!container) return;

  const containerWidth = container.offsetWidth;
  const moreButtonWidth = 83; // Approximate width of More button
  let currentWidth = 0;
  const visible = [];
  const overflow = [];

  childrenArray.forEach((child, index) => {
    const tabElement = headerTabItems.current[child.props.id];
    if (tabElement) {
      const tabWidth = tabElement.offsetWidth + 8; // 8px for margin
      if (currentWidth + tabWidth + moreButtonWidth < containerWidth) {
        visible.push(child);
        currentWidth += tabWidth;
      } else {
        overflow.push(child);
      }
    }
  });

  setVisibleTabs(visible);
  setOverflowTabs(overflow);
};
```

### For Click Outside Detection
```javascript
// In MoreDropdown component
useEffect(() => {
  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  if (isOpen) {
    document.addEventListener('mousedown', handleClickOutside);
  }

  return () => {
    document.removeEventListener('mousedown', handleClickOutside);
  };
}, [isOpen]);
```

### For Icon Rotation
```scss
// In your SCSS file
.more-dropdown-icon {
  transition: transform 0.3s ease;

  &.open {
    transform: rotate(180deg);
  }
}
```

---

## Questions or Blockers?

If you encounter any of the following, reach out to your tech lead:
1. Difficulty measuring tab widths accurately
2. Issues with positioning the dropdown correctly across different screen sizes
3. Complex accessibility requirements that aren't clear
4. Breaking changes to existing functionality that weren't anticipated
5. Performance issues with the overflow calculation on resize

---

## Definition of Done

- [ ] All TODO items marked as complete
- [ ] Component matches Figma design pixel-perfect (within reason)
- [ ] All tests passing
- [ ] Accessibility audit passed (keyboard nav, screen reader, ARIA)
- [ ] Documentation updated
- [ ] Code reviewed and approved
- [ ] No console errors or warnings
- [ ] Tested in all required browsers
- [ ] Storybook stories updated and working

---

## Related Files

### Files to Modify:
- `packages/unity-react-core/src/components/TabbedPanels/TabbedPanels.jsx`
- `packages/unity-react-core/src/components/TabbedPanels/components/TabHeader.jsx`
- `packages/unity-react-core/src/components/TabbedPanels/components/index.js`
- `packages/unity-bootstrap-theme/src/scss/extends/_tabbed-panels.scss`
- `packages/unity-bootstrap-theme/src/scss/variables/_tabbed-panels.scss`
- `packages/unity-react-core/src/components/TabbedPanels/TabbedPanels.stories.jsx`
- `packages/unity-react-core/src/components/TabbedPanels/TabbedPanels.test.jsx`

### Files to Create:
- `packages/unity-react-core/src/components/TabbedPanels/components/MoreDropdown.jsx`

### Files to Remove/Deprecate:
- `packages/unity-react-core/src/components/TabbedPanels/components/NavControls.jsx` (may be deprecated)
- `packages/unity-react-core/src/components/TabbedPanels/components/NavControls.styles.js` (may be deprecated)
