module.exports = {
  config: function config(entry = []) {
    return [...entry, require.resolve('./entry.js')];
  },
  managerEntries: function managerEntries(entry = []) {

    return [...entry, require.resolve('./addon.js')];
  }
};
