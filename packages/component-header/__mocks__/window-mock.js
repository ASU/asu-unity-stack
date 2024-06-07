// @ts-check
Object.defineProperty(window, "matchMedia", {
  value: (matches = true) => ({
    matches,
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
  }),
});

// Default width of JSdom is 1024px so it is not mobile according to the Lg breakpoint
jest.mock("../src/core/hooks/isMobile", () => ({
  useIsMobile: jest.fn(() => false),
}));
