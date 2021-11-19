import babel from "rollup-plugin-babel";
import commonjs from "rollup-plugin-commonjs";
import resolve from "rollup-plugin-node-resolve";
import external from "rollup-plugin-peer-deps-external";
import { terser } from "rollup-plugin-terser";
import { uglify } from "rollup-plugin-uglify";
import { sizeSnapshot } from "rollup-plugin-size-snapshot";
import analyze from "rollup-plugin-analyzer";

import packageJSON from "./package.json";

const input = "./src/index.js";
const minifyExtension = pathToFile => pathToFile.replace(/\.js$/, ".min.js");

export default [
  // CommonJS
  {
    input,
    output: {
      file: packageJSON.main,
      format: "cjs",
    },
    plugins: [
      // analyze(),
      // sizeSnapshot(),
      babel({
        runtimeHelpers: true,
        exclude: "node_modules/**",
      }),
      external(),
      resolve(),
      commonjs(),
    ],
  },
  {
    input,
    output: {
      file: minifyExtension(packageJSON.main),
      format: "cjs",
    },
    plugins: [
      // analyze(),
      sizeSnapshot(),
      babel({
        runtimeHelpers: true,
        exclude: "node_modules/**",
      }),
      external(),
      resolve(),
      commonjs(),
      uglify(),
    ],
  },
  // UMD
  {
    input,
    output: {
      file: packageJSON.browser,
      format: "umd",
      name: "AsuWebCore",
      globals: {
        "react": "React",
        "react-dom": "ReactDom",
        "react-share": "react-share",
        "reactstrap": "reactstrap",
        "styled-components": "styled-components",
      },
    },
    plugins: [
      // analyze(),
      // sizeSnapshot(),
      babel({
        runtimeHelpers: true,
        exclude: "node_modules/**",
      }),
      external(),
      resolve(),
      commonjs(),
    ],
  },
  {
    input,
    output: {
      file: minifyExtension(packageJSON.browser),
      format: "umd",
      name: "AsuWebCore",
      globals: {
        "react": "React",
        "react-dom": "ReactDom",
        "react-share": "react-share",
        "reactstrap": "reactstrap",
        "styled-components": "styled-components",
      },
    },
    plugins: [
      // analyze(),
      sizeSnapshot(),
      babel({
        runtimeHelpers: true,
        exclude: "node_modules/**",
      }),
      external(),
      resolve(),
      commonjs(),
      terser(),
    ],
  },
  // ESM
  {
    input,
    output: {
      file: packageJSON.module,
      format: "es",
      exports: "named",
    },
    plugins: [
      // analyze(),
      // sizeSnapshot(),
      babel({
        runtimeHelpers: true,
        exclude: "node_modules/**",
      }),
      external(),
      resolve(),
      commonjs(),
    ],
  },
  {
    input,
    output: {
      file: minifyExtension(packageJSON.module),
      format: "es",
      exports: "named",
    },
    plugins: [
      // analyze(),
      sizeSnapshot(),
      babel({
        runtimeHelpers: true,
        exclude: "node_modules/**",
      }),
      external(),
      resolve(),
      commonjs(),
      terser(),
    ],
  },
];
