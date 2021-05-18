module.exports = function (api) {
  api.cache(true);

  return {
    presets: [
      // {
      //   "presets": ["@babel/env", "@babel/preset-react"],
      //   "plugins": ["@babel/plugin-transform-react-jsx"]
      // }
      ["@babel/preset-env", { targets: { node: "current" } }],
      "@babel/preset-react",
    ],
    ignore: ["node_modules"],
    env: {
      test: {
        presets: [
          ["@babel/preset-env", { targets: { node: "current" } }],
          "@babel/preset-react",
        ],
      },
    },
  };
};
