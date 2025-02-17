module.exports = {
  previewAnnotations: function previewAnnotations(entry = []) {
    return [...entry, require.resolve('./preset/preview.js')];
  },
  managerEntries: function managerEntries(entry = []) {
    return [...entry, require.resolve('./preset/manager.js')];
  }
};
