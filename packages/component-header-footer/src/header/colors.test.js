// @ts-check
import { ASU_MAROON, ASU_GOLD, ACCENT_PRIMARY, ACCENT_SECONDARY } from "./colors";

describe("header brand color constants", () => {
  it("reads maroon from the --bs-maroon custom property with the current hex as fallback", () => {
    expect(ASU_MAROON).toBe("var(--bs-maroon, #8c1d40)");
  });

  it("reads gold from the --bs-gold custom property with the current hex as fallback", () => {
    expect(ASU_GOLD).toBe("var(--bs-gold, #ffc627)");
  });

  it("keeps the semantic accent aliases pointed at the brand constants", () => {
    expect(ACCENT_PRIMARY).toBe(ASU_MAROON);
    expect(ACCENT_SECONDARY).toBe(ASU_GOLD);
  });
});
