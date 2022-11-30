const path = require("path");
const { merge } = require("webpack-merge");

const common = require("./webpack.common");

const PROJECT_DIR = path.resolve(__dirname, "../");

const umdConfig = merge(common, {
  mode: "production",
  output: {
    path: path.resolve(PROJECT_DIR, "dist"),
    filename: "[name].umd.js",
    library: {
      name: "AsuRfi",
      type: "umd",
      umdNamedDefine: true,
    },
  },
  performance: {
    maxAssetSize: 550000, // Change default to accept images assets up to 550KiB(for resolution purposes)
  },
  externals: {
    "react": "React",
    "react-dom": "ReactDOM",
  },
});

const cjsConfig = merge(common, {
  mode: "production",
  output: {
    path: path.resolve(PROJECT_DIR, "dist"),
    filename: "[name].cjs.js",
    library: {
      type: "commonjs2",
    },
  },
  performance: {
    maxAssetSize: 550000, // Change default to accept images assets up to 550KiB(for resolution purposes)
  },
  externals: {
    "react": "React",
    "react-dom": "ReactDOM",
  },
});

const esModuleConfig = merge(common, {
  mode: "production",
  output: {
    path: path.resolve(PROJECT_DIR, "dist"),
    filename: "[name].es.js",
    library: {
      type: "module",
    },
    environment: { module: true },
  },
  experiments: {
    outputModule: true,
  },
  externalsType: "module",
  performance: {
    maxAssetSize: 550000, // Change default to accept images assets up to 550KiB(for resolution purposes)
  },
  externals: {
    // these needs to be low-case spelled
    "react": "react",
    "react-dom": "react-dom",
  },
});

module.exports = [umdConfig, cjsConfig, esModuleConfig];
