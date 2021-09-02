module.exports = function (api) {
  api.cache(true);

  return {
    presets: [
      [
        "@babel/preset-env",
        {
          targets: {
            esmodules: true,
            node: "current",
          },
          // useBuiltIns: false,
          // useBuiltIns: "entry",
          // corejs: 3,
          // modules: false,
          // debug: true,
        },
      ],
      "@babel/preset-react",
    ],
    ignore: ["node_modules"],
    plugins: ["@babel/plugin-transform-runtime"],
    env: {
      test: {
        presets: [
          [
            "@babel/preset-env",
            {
              targets: {
                esmodules: true,
                node: "current",
              },
            },
          ],
          "@babel/preset-react",
        ],
      },
    },
  };
};
