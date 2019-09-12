module.exports = function (api) {
  api.cache(true);

  const presets = [["@babel/env",{"modules": "auto", "targets": {"node": "11"}}], "@babel/preset-react"]

  return {
    presets
  };
}
