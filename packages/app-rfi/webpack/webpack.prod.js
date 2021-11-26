const common = require("./webpack.common.js");

const path = require("path");
const PROJECT_DIR = path.resolve(__dirname, "../");

module.exports = {
  ...common,
  mode: "production",
  output: {
    path: path.resolve(PROJECT_DIR, "dist"),
    filename: "[name].min.js",
    library: {
      name: "AsuRfi",
      type: "umd",
      umdNamedDefine: true,
      // export: "default",
    },
    umdNamedDefine: true,
  },
  performance: {
    maxAssetSize: 550000, // Change default to accept images assets up to 550KiB(for resolution purposes)
  },
  externals: {
    "react": "React",
    "react-dom": "ReactDOM",
  },
};
