import "@asu/unity-bootstrap-theme/src/scss/unity-bootstrap-theme.bundle.scss";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  percy: {
    include: [
      "Accordion: Default\$",
      "AnchorMenu",
      "Article",
      "Card: Default\$",
      "Card: Event\$",
      "Pagination: Default\$",
      "TabbedPanels: Default\$",
    ],
  },
  backgrounds: {
    values: [
      {
        name: "Gray 2",
        value: "#e8e8e8",
      },
      {
        name: "Gray 3",
        value: "#d0d0d0",
      },
    ],
  },
};
