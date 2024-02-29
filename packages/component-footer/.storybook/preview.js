import "@asu/unity-bootstrap-theme/src/scss/unity-bootstrap-theme.bundle.scss";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  percy: {
    include: [
      "ASU Footer: Default\$",
    ],
  },
};
