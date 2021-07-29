import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import fetchMock from "jest-fetch-mock";
import { toMatchImageSnapshot } from "jest-image-snapshot";

fetchMock.enableMocks();

expect.extend({ toMatchImageSnapshot });

Object.defineProperty(document, "currentScript", {
  value: { src: "local/dummy-folder/dummy.js" },
});

const mediaListener = (_eventType = "change", callBack) => {
  callBack?.();
};
Object.defineProperty(window, "matchMedia", {
  value: (matches = true) => ({
    matches,
    addEventListener: mediaListener,
    removeEventListener: mediaListener,
  }),
});
