import plugin from "tailwindcss/plugin.js";

/**
 * UDS Tailwind Plugin
 * Provides custom component classes that replicate the unity-bootstrap-theme
 * extends (buttons, cards, forms, navigation, etc.) as Tailwind components.
 */
export default plugin(function ({ addComponents, addUtilities, theme }) {
  // ─── Buttons ───────────────────────────────────────────────────────────────
  const btnBase = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "700",
    textDecoration: "none",
    whiteSpace: "nowrap",
    width: "max-content",
    borderRadius: theme("borderRadius.pill"),
    padding: `${theme("spacing.2")} ${theme("spacing.4")}`,
    fontSize: theme("fontSize.medium[0]"),
    lineHeight: "1rem",
    transition: `all ${theme("transitionDuration.base")} ease-in-out`,
    cursor: "pointer",
    border: "2px solid transparent",
    "&:first-letter": { textTransform: "uppercase" },
  };

  addComponents({
    ".btn": btnBase,
    ".btn-gold": {
      ...btnBase,
      backgroundColor: theme("colors.gold"),
      color: theme("colors.gray.1"),
      "&:hover": { backgroundColor: "#e5b122" },
    },
    ".btn-maroon": {
      ...btnBase,
      backgroundColor: theme("colors.maroon"),
      color: "#ffffff",
      "&:hover": { backgroundColor: "#6b1631" },
    },
    ".btn-gray": {
      ...btnBase,
      backgroundColor: theme("colors.gray.4"),
      color: theme("colors.gray.1"),
      "&:hover": { backgroundColor: theme("colors.gray.5") },
    },
    ".btn-dark": {
      ...btnBase,
      backgroundColor: theme("colors.gray.1"),
      color: "#ffffff",
      "&:hover": { backgroundColor: theme("colors.gray.2") },
    },
    // Size variants
    ".btn-small": { padding: "0.25rem 0.75rem", fontSize: "0.75rem" },
    ".btn-medium": { padding: "0.5rem 1rem", fontSize: "0.875rem" },
    ".btn-large": { padding: "0.75rem 1.5rem", fontSize: "1rem" },
    // Legacy sizes
    ".btn-md": { padding: "0.5rem 1rem", fontSize: "0.875rem" },
    ".btn-sm": { padding: "0.25rem 0.75rem", fontSize: "0.75rem" },
    // Style variants
    ".btn-outline": {
      backgroundColor: "transparent",
      borderWidth: "2px",
      borderStyle: "solid",
    },
    ".btn-outline-gold": {
      backgroundColor: "transparent",
      borderColor: theme("colors.gold"),
      color: theme("colors.gray.1"),
      "&:hover": { backgroundColor: theme("colors.gold"), color: theme("colors.gray.1") },
    },
    ".btn-outline-maroon": {
      backgroundColor: "transparent",
      borderColor: theme("colors.maroon"),
      color: theme("colors.maroon"),
      "&:hover": { backgroundColor: theme("colors.maroon"), color: "#ffffff" },
    },
    ".btn-outline-dark": {
      backgroundColor: "transparent",
      borderColor: theme("colors.gray.1"),
      color: theme("colors.gray.1"),
      "&:hover": { backgroundColor: theme("colors.gray.1"), color: "#ffffff" },
    },
    ".btn-borderless": {
      backgroundColor: "transparent",
      border: "none",
      padding: "0.5rem 1rem",
    },
    ".btn-tag": {
      fontSize: "0.75rem",
      padding: "0.25rem 0.75rem",
      marginTop: "8px",
      backgroundColor: theme("colors.gray.6"),
      borderRadius: theme("borderRadius.pill"),
    },
    ".btn-circle": {
      padding: "0.25rem",
      width: "2rem !important",
      height: "2rem",
      borderRadius: "50%",
      border: `1px solid ${theme("colors.gray.5")}`,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
    },
    ".btn-block": { width: "100% !important", display: "block" },
    ".btn:disabled, .btn.disabled": { opacity: "0.5", pointerEvents: "none" },
  });

  // ─── Cards ─────────────────────────────────────────────────────────────────
  addComponents({
    ".card": {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      minWidth: "0",
      wordWrap: "break-word",
      backgroundColor: "#ffffff",
      backgroundClip: "border-box",
      border: `1px solid ${theme("colors.gray.5")}`,
      borderRadius: "0",
    },
    ".card-body": { flex: "1 1 auto", padding: theme("spacing.3") },
    ".card-title": { marginBottom: theme("spacing.1"), fontWeight: "700" },
    ".card-header": {
      padding: `${theme("spacing.1")} ${theme("spacing.3")}`,
      backgroundColor: "rgba(255,255,255,0.03)",
      borderBottom: `1px solid ${theme("colors.gray.5")}`,
    },
    ".card-footer": {
      padding: `${theme("spacing.1")} ${theme("spacing.3")}`,
      borderTop: `1px solid ${theme("colors.gray.5")}`,
    },
    ".card-img-top": { width: "100%", borderTopLeftRadius: "0", borderTopRightRadius: "0" },
  });

  // ─── Navigation ────────────────────────────────────────────────────────────
  addComponents({
    ".nav": { display: "flex", flexWrap: "wrap", paddingLeft: "0", marginBottom: "0", listStyle: "none" },
    ".nav-item": { /* marker */ },
    ".nav-link": {
      display: "block",
      padding: "0.5rem 1rem",
      color: theme("colors.gray.1"),
      textDecoration: "none",
      "&:hover": { color: theme("colors.maroon") },
      "&.active": { color: theme("colors.maroon"), borderBottomColor: theme("colors.maroon") },
    },
    ".nav-tabs": {
      borderBottom: `1px solid ${theme("colors.gray.5")}`,
      "& .nav-link": {
        borderBottom: "2px solid transparent",
        borderRadius: "0",
        "&.active": { borderBottomColor: theme("colors.maroon"), color: theme("colors.maroon") },
      },
    },
  });

  // ─── Accordion ─────────────────────────────────────────────────────────────
  addComponents({
    ".accordion": { /* wrapper */ },
    ".accordion-item": { borderBottom: `1px solid ${theme("colors.gray.5")}` },
    ".accordion-header": { marginBottom: "0" },
    ".accordion-button": {
      display: "flex",
      alignItems: "center",
      width: "100%",
      padding: `${theme("spacing.2")} ${theme("spacing.3")}`,
      fontSize: theme("fontSize.medium[0]"),
      fontWeight: "700",
      textAlign: "left",
      backgroundColor: "transparent",
      border: "0",
      cursor: "pointer",
    },
    ".accordion-body": { padding: `${theme("spacing.2")} ${theme("spacing.3")}` },
  });

  // ─── Forms ─────────────────────────────────────────────────────────────────
  addComponents({
    ".form-group": { marginBottom: theme("spacing.2") },
    ".form-control": {
      display: "block",
      width: "100%",
      padding: "0.375rem 0.75rem",
      fontSize: theme("fontSize.medium[0]"),
      lineHeight: "1.5",
      color: theme("colors.gray.1"),
      backgroundColor: "#ffffff",
      border: `1px solid ${theme("colors.gray.4")}`,
      borderRadius: "0",
      transition: "border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out",
      "&:focus": {
        borderColor: theme("colors.blue-focus"),
        outline: "0",
        boxShadow: `0 0 8px ${theme("colors.blue-focus")}`,
      },
    },
    ".form-check": { display: "block", minHeight: "1.5rem", paddingLeft: "1.5em", marginBottom: "0.125rem" },
    ".form-check-input": { width: "1em", height: "1em", marginTop: "0.25em", marginLeft: "-1.5em" },
    ".form-check-label": { cursor: "pointer" },
    ".form-label": { marginBottom: "0.5rem", fontWeight: "700" },
    ".form-select": {
      display: "block",
      width: "100%",
      padding: "0.375rem 2.25rem 0.375rem 0.75rem",
      fontSize: theme("fontSize.medium[0]"),
      color: theme("colors.gray.1"),
      backgroundColor: "#ffffff",
      border: `1px solid ${theme("colors.gray.4")}`,
      borderRadius: "0",
      appearance: "none",
    },
    ".invalid-feedback": { display: "none", width: "100%", marginTop: "0.25rem", fontSize: "0.875rem", color: theme("colors.error") },
    ".valid-feedback": { display: "none", width: "100%", marginTop: "0.25rem", fontSize: "0.875rem", color: theme("colors.success") },
  });

  // ─── Alerts ────────────────────────────────────────────────────────────────
  addComponents({
    ".alert": {
      position: "relative",
      padding: `${theme("spacing.2")} ${theme("spacing.3")}`,
      marginBottom: theme("spacing.2"),
      border: "1px solid transparent",
      borderRadius: "0",
    },
    ".alert-success": { backgroundColor: theme("colors.bg-success"), borderColor: theme("colors.success"), color: theme("colors.font-dark-success") },
    ".alert-danger": { backgroundColor: theme("colors.bg-error"), borderColor: theme("colors.error"), color: theme("colors.error") },
    ".alert-warning": { backgroundColor: theme("colors.bg-warning"), borderColor: theme("colors.warning"), color: theme("colors.gray.1") },
    ".alert-info": { backgroundColor: theme("colors.bg-info"), borderColor: theme("colors.info"), color: theme("colors.gray.1") },
  });

  // ─── Tables ────────────────────────────────────────────────────────────────
  addComponents({
    ".table": {
      width: "100%",
      marginBottom: theme("spacing.2"),
      color: theme("colors.gray.1"),
      borderCollapse: "collapse",
      "& th, & td": { padding: "0.75rem", verticalAlign: "top", borderTop: `1px solid ${theme("colors.gray.5")}` },
      "& thead th": { verticalAlign: "bottom", borderBottom: `2px solid ${theme("colors.gray.5")}`, fontWeight: "700" },
    },
  });

  // ─── Modal ─────────────────────────────────────────────────────────────────
  addComponents({
    ".modal": { position: "fixed", top: "0", left: "0", zIndex: "1055", display: "none", width: "100%", height: "100%", overflow: "hidden auto", outline: "0" },
    ".modal-dialog": { position: "relative", width: "auto", margin: "0.5rem", pointerEvents: "none" },
    ".modal-content": { position: "relative", display: "flex", flexDirection: "column", pointerEvents: "auto", backgroundColor: "#ffffff", border: `1px solid ${theme("colors.gray.5")}`, borderRadius: "0", outline: "0" },
    ".modal-header": { display: "flex", alignItems: "center", justifyContent: "space-between", padding: theme("spacing.3"), borderBottom: `1px solid ${theme("colors.gray.5")}` },
    ".modal-body": { position: "relative", flex: "1 1 auto", padding: theme("spacing.3") },
    ".modal-footer": { display: "flex", alignItems: "center", justifyContent: "flex-end", padding: theme("spacing.3"), borderTop: `1px solid ${theme("colors.gray.5")}`, gap: "0.5rem" },
  });

  // ─── Utilities (UDS-specific) ──────────────────────────────────────────────
  addUtilities({
    ".uds-content-align": { maxWidth: theme("screens.xl"), marginLeft: "auto", marginRight: "auto", paddingLeft: "12px", paddingRight: "12px" },
    ".visually-hidden": { position: "absolute", width: "1px", height: "1px", padding: "0", margin: "-1px", overflow: "hidden", clip: "rect(0,0,0,0)", whiteSpace: "nowrap", borderWidth: "0" },
    ".img-fluid": { maxWidth: "100%", height: "auto" },
    ".stretched-link::after": { position: "absolute", top: "0", right: "0", bottom: "0", left: "0", zIndex: "1", content: '""' },
    ".text-truncate": { overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" },
  });
});
