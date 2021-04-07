module.exports = {
  presets: [
    "@babel/preset-env", //this was here before preact
    "@babel/preset-react", //this was here before preact
  ],
  plugins: [
    [
      "@babel/plugin-transform-react-jsx",
      {
        runtime: "automatic", // defaults to classic (classic == createElement calls)
        importSource: "preact", // NOT preact/jsx-runtime
      },
    ],
  ],
};
