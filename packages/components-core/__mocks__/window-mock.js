// @ts-check
Object.defineProperty(window, "matchMedia", {
  value: (matches = true) => ({
    matches,
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
  }),
});
