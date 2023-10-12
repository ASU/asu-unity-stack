const favicon = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
  <path style="stroke-width:4.5; fill:rgb(140, 29, 64); stroke:rgb(250,250,250)" d="m 14,13.28 c 0,0 2.14,-2.3 2.14,-2.3 0,0 86.4,-6.8 86.4,-6.8 0,0 5.05,3.31 5.05,3.31 0,0 0.95,111.23 0.95,111.23 0,0 -3.26,4 -3.26,4 0,0 -84.56,-3.44 -84.56,-3.44 0,0 -2.72,-3.82 -2.72,-3.82 z"/>
  <path style="fill:rgb(255,198,39)" d="m 84.36,-0.54 c 0,0 0.74,20.18 0.74,20.18 0,0 5.8,-3.82 5.8,-3.82 0,0 5.1,3.08 5.1,3.08 0,0 -0.54,-21.8 -0.54,-21.8 z"/>
  <path style="fill:rgb(250,250,250)" d="m 41.4,34.44 c -2.44,4.78 -5.58,18.26 4.68,28.08 7.66,6.52 15.66,9.82 19.06,14.26 4.26,4 1.2,12.18 -3.92,12.08 -5.14,-0.08 -7.04,-4.6 -6.78,-12.6 C 42.08,76 50.78,76.18 38.08,76.08 c -0.86,10.96 1.74,16.96 6.78,21.58 5.06,4.6 10.96,5.3 17.66,5.48 6.7,0.16 14.08,-4.28 16.34,-6.36 C 81.14,94.7 88.44,82.7 80.78,68.96 71.82,57.14 56.08,54.52 55.82,46.08 c -0.34,-3.82 1.58,-6.68 6.1,-6.42 7.12,-0.1 6.26,9.74 6.26,9.74 0,0 15.56,0.16 15.56,0.16 0,0 1.34,-10.28 -4.78,-16.78 -5.7,-6.04 -10.26,-8.34 -16.78,-8.34 -6.52,0 -18.78,3.08 -20.78,10 z M 213,262"/>
</svg>
`;

module.exports = {
  // webpack: webpack,
  // managerWebpack: webpack,
  config: function config(entry = []) {
    return [...entry, require.resolve('./entry.js')];
  },
  managerEntries: function managerEntries(entry = []) {
    return [...entry, require.resolve('./addon.js')];
  },
  // hide extra viewport toolbar options
  managerHead: (head) => `
    ${head}

    <!-- inject a storybook favicon with asu colors -->
    <link rel='shortcut icon' href='data:image/svg+xml; utf8, ${favicon.replace(/\n/g, "")}'>

    <!-- custom style overrides for Storybook parent frame -->
    <style id="udsStorybookStyles">
      /* Height set to 100% so we do not need to rotate */
      button[title="Rotate viewport"],
      div[title="Viewport height"] {
        display: none;
      }

      /* Adjust iframe height to fit better */
      #storybook-preview-iframe{
        min-height: 30vh;
        height: calc(100% - 20px);
      }
    </style>
  `,
};
