module.exports = {
  extends: ["../../.eslintrc.base.js"],
  rules: {
    "no-unused-vars": [
      "warn",
      {
        varsIgnorePattern: "_|tagHeadings|DegreeDataPropResolverServiceType",
        argsIgnorePattern: "^_",
      },
    ],
  },
};
