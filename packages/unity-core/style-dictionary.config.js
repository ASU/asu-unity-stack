/**
 * Style Dictionary configuration for ASU Unity Design System.
 *
 * Reads token JSON files from tokens/ and outputs CSS custom properties
 * to src/global/generated/. Currently a placeholder — run
 * `npx style-dictionary build` once the dependency is installed.
 */
module.exports = {
  source: ['tokens/**/*.json'],
  platforms: {
    css: {
      transformGroup: 'css',
      prefix: 'uds',
      buildPath: 'src/global/generated/',
      files: [
        {
          destination: 'tokens.css',
          format: 'css/variables',
          options: {
            outputReferences: true,
          },
        },
      ],
    },
  },
};
