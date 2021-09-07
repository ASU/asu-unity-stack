// @ts-check

Object.defineProperty(document, "currentScript", {
  value: { src: "local/dummy-folder/dummy.js" },
});

const mediaListener = (_eventType = "change", callBack) => {
  callBack?.({
    matches: false,
  });
};
Object.defineProperty(window, "matchMedia", {
  value: (matches = true) => ({
    matches,
    addEventListener: mediaListener,
    removeEventListener: mediaListener,
  }),
});
