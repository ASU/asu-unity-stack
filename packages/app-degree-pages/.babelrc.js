module.exports = function (api) {
  api.cache(true);

  return {
    presets: [
      ["@babel/preset-env", { targets: { node: "current" } }],
      "@babel/preset-react",
    ],
    plugins: [
      // "@babel/plugin-syntax-jsx",
      "@babel/plugin-transform-react-jsx"],
    ignore: ["node_modules"],
    plugins: ["@babel/plugin-transform-runtime"],
    env: {
      test: {
        plugins: [
          "babel-plugin-dynamic-import-node",
          "@babel/plugin-transform-react-jsx",
        ],
        presets: [
          [
            "@babel/preset-env",
            {
              targets: { node: "current" },
            },
          ],
          "@babel/preset-react",
        ],
      },
    },
  };
};
