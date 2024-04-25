
function config(entry = []) {
  return [...entry, require.resolve("./config.js")];
}

function managerEntries(entry = []) {
  return [...entry, require.resolve("./manager.js")];
}

function previewAnnotations(entry = []) {
  return [...entry, require.resolve("./config.js")];
}

module.exports = {
  managerEntries,
  config,
  previewAnnotations,
};
