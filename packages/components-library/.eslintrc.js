module.exports = {
  extends: [
    "eslint:recommended",
    "preact",
  ],
  rules: {
    "no-unused-vars": [
      "warn",
      {
        varsIgnorePattern: "(Fragment|z)",
        ignoreRestSiblings: true,
        vars: "local",
      },
    ],
    "no-console": ["warn", { allow: ["warn", "error"] }],
    "no-undef": "warn",
    "no-useless-escape": "off",
    "no-prototype-builtins": "off",
  },
  settings: {
    react: {
      pragma: "h",
    },
  },
};
