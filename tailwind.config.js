import udsPlugin from "./tailwind-uds-plugin.js";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./packages/*/src/**/*.{js,jsx,ts,tsx}"],
  // No prefix — plugin provides drop-in replacements for Bootstrap class names.
  // Tailwind's preflight is disabled to avoid conflicts during coexistence.
  corePlugins: {
    preflight: false,
  },
  theme: {
    // Override screens to match UDS breakpoints exactly
    screens: {
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1260px",
      xxxl: "1920px",
    },
    // Override container to match UDS grid
    container: {
      center: true,
      padding: "12px", // half of 24px gutter
      screens: {
        sm: "540px",
        md: "768px",
        lg: "992px",
        xl: "1224px",
      },
    },
    extend: {
      colors: {
        // ASU Brand
        gold: "#ffc627",
        maroon: "#8c1d40",
        "dark-gold": "#7f6227",
        "dark-maroon": "#440e22",
        // ASU Accent
        green: "#78be20",
        orange: "#ff7f32",
        blue: "#00a3e0",
        "blue-focus": "#00baff",
        // ASU Grays (1=darkest, 7=lightest per brand guidelines)
        gray: {
          1: "#191919",
          2: "#484848",
          3: "#747474",
          4: "#bfbfbf",
          5: "#d0d0d0",
          6: "#e8e8e8",
          7: "#fafafa",
        },
        // Semantic / Alert
        error: "#cc2f2f",
        warning: "#ff7f32",
        info: "#00a3e0",
        success: "#78be20",
        // Background variants
        "bg-success": "#e9f5db",
        "bg-error": "#f7dddd",
        "bg-warning": "#ffeade",
        "bg-info": "#d6f0fa",
        // Font colors (dark-on-light, light-on-dark)
        "font-dark": "#191919",
        "font-dark-error": "#FF7B7D",
        "font-dark-success": "#446d12",
        "font-light": "#fafafa",
        "font-light-link": "#ffc627",
        "font-light-visited": "#d3a524",
        "font-light-info": "#00b0f3",
        // Dividers
        "divider-darker": "#1e1e1e",
        "divider-lighter": "#393939",
      },
      spacing: {
        // UDS spacing scale (0.5rem increments)
        0: "0rem",
        0.5: "0.25rem", // half
        1: "0.5rem",
        2: "1rem",
        3: "1.5rem",
        4: "2rem",
        5: "2.5rem",
        6: "3rem",
        7: "3.5rem",
        8: "4rem",
        9: "4.5rem",
        10: "5rem",
        12: "6rem",
        14: "7rem",
        16: "8rem",
        32: "16rem",
        64: "32rem",
      },
      fontFamily: {
        sans: [
          "Arial",
          "Helvetica",
          "Nimbus Sans L",
          "Liberation Sans",
          "FreeSans",
          "sans-serif",
        ],
      },
      fontSize: {
        tiny: ["0.75rem", { lineHeight: "1rem" }],
        small: ["0.875rem", { lineHeight: "1.25rem" }],
        medium: ["1rem", { lineHeight: "1.5rem" }],
        large: ["1.25rem", { lineHeight: "1.75rem" }],
        xl: ["1.5rem", { lineHeight: "1.75rem" }],
        xxl: ["2rem", { lineHeight: "2.125rem" }],
        xxxl: ["3rem", { lineHeight: "3.25rem" }],
        // Heading sizes
        h1: ["4rem", { lineHeight: "4.5rem", letterSpacing: "-0.14rem" }],
        "h1-article": [
          "3rem",
          { lineHeight: "3.25rem", letterSpacing: "-0.105rem" },
        ],
        "h1-mobile": [
          "2.25rem",
          { lineHeight: "2.5rem", letterSpacing: "-0.078rem" },
        ],
        h2: ["2.5rem", { lineHeight: "2.75rem", letterSpacing: "-0.0875rem" }],
        "h2-mobile": [
          "2rem",
          { lineHeight: "2.125rem", letterSpacing: "-0.07rem" },
        ],
        h3: ["1.5rem", { lineHeight: "1.75rem", letterSpacing: "-0.0525rem" }],
        h4: [
          "1.25rem",
          { lineHeight: "1.625rem", letterSpacing: "-0.01875rem" },
        ],
        h5: ["1rem", { lineHeight: "1.5rem", letterSpacing: "-0.015rem" }],
      },
      fontWeight: {
        lighter: "100",
        light: "300",
        normal: "400",
        bold: "700",
        bolder: "900",
      },
      borderRadius: {
        pill: "400rem",
      },
      transitionDuration: {
        base: "400ms",
        xl: "1000ms",
      },
      gridTemplateColumns: {
        12: "repeat(12, minmax(0, 1fr))",
      },
      gap: {
        gutter: "24px",
      },
      // Icon sizes
      width: {
        "icon-sm": "1.5rem",
        "icon-base": "2rem",
        "icon-lg": "2.5rem",
        "icon-xl": "3rem",
        "icon-xxl": "5rem",
      },
      height: {
        "icon-sm": "1.5rem",
        "icon-base": "2rem",
        "icon-lg": "2.5rem",
        "icon-xl": "3rem",
        "icon-xxl": "5rem",
      },
    },
  },
  plugins: [udsPlugin],
};
