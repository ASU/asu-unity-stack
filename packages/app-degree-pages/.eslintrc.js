module.exports = {
  extends: ["../../.eslintrc.base.js"],
  rules: {
    "react/no-unstable-nested-components": "off",
    "no-unused-vars": [
      "warn",
      {
        varsIgnorePattern: "_|tagHeadings|DegreeDataPropResolverServiceType",
        argsIgnorePattern: "^_",
      },
    ],
  },
};
