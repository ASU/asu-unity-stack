module.exports = {
  extends: ["../../.eslintrc.base.js"],
  rules: {
    "react/no-unstable-nested-components": "off",
    "import/no-unresolved": [
      "error",
      {
        ignore: ["^@shared.*"],
      },
    ],
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        js: "never",
        jsx: "never",
        ts: "never",
        tsx: "never",
      },
    ]
  },
};
