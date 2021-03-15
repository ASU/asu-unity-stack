// jest.config.js
module.exports = {
  verbose: true,
  preset: "jest-preset-preact",
  snapshotSerializers: [
    '@emotion/jest/serializer' /* if needed other snapshotSerializers should go here */
  ]
}
