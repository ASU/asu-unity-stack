module.exports = {
  extends: "../../.eslintrc",
  extends: [
    "eslint:recommended",
    // "airbnb-base"
    "preact",
  ],
  settings: {
    react: {
      pragma: "h",
    },
  },
};
