module.exports = function (api) {
  api.cache(true);

  return {
    presets: [
      ["@babel/preset-env", { targets: { node: "current" } }],
      "@babel/preset-react",
    ],
    plugins: [
      "@babel/plugin-syntax-jsx",
      "@babel/plugin-transform-react-jsx",
      "@babel/plugin-transform-runtime",
    ],
    ignore: ["node_modules"],
    env: {
      test: {
        plugins: [
          "@babel/plugin-syntax-jsx",
          "babel-plugin-dynamic-import-node",
          "@babel/plugin-transform-react-jsx",
        ],
        presets: [
          [
            "@babel/preset-env",
            {
              targets: { node: "current" },
              // loose: true,
              // modules: "commonjs",
            },
          ],
          "@babel/preset-react",
        ],
      },
    },
  };
};
