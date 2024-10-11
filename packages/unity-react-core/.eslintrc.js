module.exports = {
  extends: ["../../.eslintrc.base.js"],
  rules: {
    "import/no-unresolved": [
      "error",
      {
        ignore: ["^@shared.*"],
      },
    ],
  },
};
