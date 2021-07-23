/* eslint-disable no-underscore-dangle */
// @ts-check
const KEY = "AsuDevTools";
const devTools = {
  isDebug: false,
};

function isDebugActive() {
  const settings = JSON.parse(localStorage.getItem(KEY));
  return settings?.isDebug;
}

// @ts-ignore
window.__AsuDevTools = {
  enableDebug(isDebug) {
    const settings = JSON.stringify({
      ...devTools,
      isDebug,
    });
    localStorage.setItem(KEY, settings);
  },
};

export { isDebugActive };
