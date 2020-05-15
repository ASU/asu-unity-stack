module.exports = function (api) {
  api.cache(true);

  const presets = [
    ["@babel/env", { modules: "auto", targets: { node: "10" } }],
    "@babel/preset-react",
  ];
  // const plugins = [ ... ];

  return {
    presets,
    // plugins
  };
}
