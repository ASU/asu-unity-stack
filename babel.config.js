module.exports = function (api) {
  api.cache(true);

  return {
    presets: [
      [
        "@babel/preset-env",
        {
          targets: {
            browsers: [
              "> 0.25%, not dead",
              "last 2 Chrome versions",
              "last 2 Edge versions",
              "last 2 Firefox versions",
              "last 2 Safari versions",
              "IE 11",
            ],
            node: "10"
          },
          modules: "auto",
          useBuiltIns: "usage",  // really could go "entry" or"usage" here. I thought usage might be easier to work with...
          corejs: {
            version: 3,
            shippedProposals: true,
          },
        },
      ],
      "@babel/preset-react",
    ],
    plugins: [
      // "@babel/plugin-transform-regenerator",
      // "@babel/plugin-transform-runtime",
      // '@babel/plugin-transform-spread',
      // '@babel/plugin-syntax-dynamic-import',
      // [
      //   '@babel/plugin-proposal-class-properties',
      //   {
      //     loose: false,
      //   },
      // ],
    ],
    ignore: ["node_modules"],
    env: {
      test: {
        presets: ["@babel/preset-env", "@babel/preset-react"],
      },
    },
  };
};
