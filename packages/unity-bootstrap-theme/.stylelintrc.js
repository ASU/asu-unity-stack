"use strict";

module.exports = {
  customSyntax: require("postcss-scss"),
  plugins: ["stylelint-scss"],
  rules: {
    "annotation-no-unknown": null,
    "at-rule-no-unknown": null,
    "comment-no-empty": null,
    "function-no-unknown": null,
    "no-invalid-position-at-import-rule": [
      true,
      {
        ignoreAtRules: ["use", "forward"],
      },
    ],
    "scss/at-if-no-null": true,
    "scss/at-import-no-partial-leading-underscore": true,
    "scss/at-import-partial-extension": "never",
    "scss/at-rule-no-unknown": true,
    "scss/declaration-nested-properties-no-divided-groups": true,
    "scss/dollar-variable-no-missing-interpolation": true,
    "scss/dollar-variable-colon-space-after": "at-least-one-space",
    "scss/function-quote-no-quoted-strings-inside": true,
    "scss/function-unquote-no-unquoted-strings-inside": true,
    "scss/no-duplicate-mixins": true,
    "scss/operator-no-newline-before": true,
    "scss/operator-no-unspaced": true,
  },
};
