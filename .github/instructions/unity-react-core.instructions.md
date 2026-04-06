---
applyTo: "**/unity-react-core/**"
---

# Unity React Core — Copilot Agent Instructions

## Package Overview

All components in this package are part of the `unity-react-core` monorepo package. They are paired with a **Storybook HTML addon** that allows consumers to copy raw HTML markup and use it independently — without React — while achieving identical visual output. This constraint shapes every architectural and styling decision below.

---

## Styling: Always Use `unity-bootstrap-theme` Variables

All styles must source from the `unity-bootstrap-theme` package. Never hardcode color values, spacing, typography, or other design tokens that are defined there, unless you ask the user first. Some components will have to have custom values, but these should be the exception, not the rule.

- **Always prefer SCSS variables from:**
  ```
  unity-bootstrap-theme/src/scss/_custom-asu-variables.scss
  ```
- When adding a color, border, background, shadow, or any token-driven value, check `_custom-asu-variables.scss` first. Use the variable — never the raw hex, `rgb()`, or named color value.
- If a suitable variable does not exist, flag it in a comment rather than hardcoding a value:
  ```scss
  // TODO: No variable found for this value in _custom-asu-variables.scss — confirm with design.
  color: $your-value-here;
  ```
- Variable usage applies to component SCSS files, inline style props, and any CSS-in-JS patterns. Prefer SCSS.

---

## HTML Parity Requirement (Storybook HTML Addon)

Every component must render its **full, correct HTML structure on the first render** — very little exceptions. The Storybook HTML addon captures the static markup so consumers can copy it and use it with only the compiled CSS, completely outside of React.

### Rules

1. **No logic that hides or defers HTML on first render.**
   Conditional rendering that prevents an element from existing in the DOM on load breaks HTML parity. This includes:
   - `{condition && <Element />}` where `condition` starts as `false`
   - Rendering `null` for any visible UI on mount
   - `useEffect`-gated rendering
   - CSS-in-JS visibility toggled before hydration

2. **Prop-based conditional rendering is allowed.**
   It is acceptable to conditionally render an element based on whether a prop was provided. If no prop is passed, the consumer simply would not include that element in their copied HTML — the contract is still intact because the absence is driven by the consumer's own configuration, not internal component state or deferred logic.

   ✅ Correct pattern:
   ```jsx
   // Only renders if the consumer passes a label prop
   {label && <span className="component-label">{label}</span>}
   ```

   This is safe because a consumer who doesn't pass `label` would equally omit that element from their static HTML copy. The rendered output at any given prop configuration remains fully present on first render.

3. **Class-based toggling is allowed and preferred for internal state.**
   If a component has interactive or stateful variants (e.g. open/closed, active/inactive), implement them by adding or removing CSS classes on elements that are always present in the DOM. SCSS handles the visual difference.

   ✅ Correct pattern:
   ```jsx
   // Element always renders; class drives visual state
   <div className={`accordion-panel${isOpen ? " is-open" : ""}`}>
     ...
   </div>
   ```

   ❌ Incorrect pattern:
   ```jsx
   // Element missing from DOM on first render — breaks HTML copy
   {isOpen && <div className="accordion-panel">...</div>}
   ```

4. **Attribute-driven visibility is also acceptable** (e.g. `aria-hidden`, `hidden`, `data-*`) as long as the element exists in the initial HTML output.

5. **Animations and transitions** should be CSS/SCSS-driven. Do not use JS to calculate or apply layout values before the first paint.

### When Reviewing or Writing Components, Ask:
- If a user copied the rendered HTML on page load, would every meaningful UI element be present?
- Could a consumer reproduce the interactive states purely by toggling classes in the copied markup?

---

## Component Authoring Checklist

When creating or modifying a component in `unity-react-core`:

- [ ] All colors and design tokens reference a variable from `_custom-asu-variables.scss`
- [ ] No UI element is conditionally absent from the DOM on first render, except when gated on an optional prop not being passed
- [ ] Interactive/stateful differences are expressed via CSS class changes, not conditional rendering
- [ ] SCSS is co-located with the component and imports from `unity-bootstrap-theme`
- [ ] The Storybook story includes an HTML addon-compatible snapshot (static HTML copy should be visually identical to the React render)
