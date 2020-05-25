module.exports = {
  root: true,
  extends: [
    "preact", // Uses the recommended rules from @eslint-plugin-react
    // "plugin:prettier/recommended", // Enables eslint-plugin-prettier and eslint-config-prettier. This will display prettier errors as ESLint errors. Make sure this and related prettier extensions are at the end of the extends array.
    // "prettier/standard",
  ],
  rules: {
    // "react/jsx-uses-react": "error",
    // "react/jsx-uses-vars": "error",
    "no-unused-vars": "warn",
    "no-console": "warn",
    "no-undef": "warn",
    "no-useless-escape": "off",
    // "prettier/prettier": "error",
  },
};
