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
    plugins: [
      "@babel/plugin-transform-runtime",
      // [
      //   "@babel/plugin-transform-runtime",
      //   {
      //     corejs: 3,
      //     asyncGenerators: true,
      //     generators: true,
      //     async: true,
      //     helpers: true,
      //   },
      // ],
    ],
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
