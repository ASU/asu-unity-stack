// useReducedMotion.test.ts
import { renderHook } from "@testing-library/react";
import { expect, describe, it, beforeEach, afterEach, vi } from "vitest";
import { useReducedMotion } from "./useReducedMotion";

describe("useReducedMotion", () => {
  let matchMediaMock: any;
  let listeners: Array<(e: MediaQueryListEvent) => void>;

  beforeEach(() => {
    listeners = [];
    matchMediaMock = {
      matches: false,
      addEventListener: vi.fn((_, handler) => {
        listeners.push(handler);
      }),
      removeEventListener: vi.fn((_, handler) => {
        listeners = listeners.filter((l) => l !== handler);
      }),
    };
    vi.stubGlobal("matchMedia", vi.fn(() => matchMediaMock));
  });

  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it("returns false when prefers-reduced-motion is not set", () => {
    matchMediaMock.matches = false;
    const { result } = renderHook(() => useReducedMotion());
    expect(result.current).toBe(false);
  });

  it("returns true when prefers-reduced-motion is set", () => {
    matchMediaMock.matches = true;
    const { result } = renderHook(() => useReducedMotion());
    expect(result.current).toBe(true);
  });

  it("updates when media query changes", () => {
    matchMediaMock.matches = false;
    const { result, rerender } = renderHook(() => useReducedMotion());
    expect(result.current).toBe(false);

    // Simulate media query change
    matchMediaMock.matches = true;
    listeners.forEach((listener) => {
      listener({ matches: true } as MediaQueryListEvent);
    });
    rerender();

    expect(result.current).toBe(true);
  });

  it("cleans up event listener on unmount", () => {
    const { unmount } = renderHook(() => useReducedMotion());
    expect(matchMediaMock.addEventListener).toHaveBeenCalledTimes(1);

    unmount();

    expect(matchMediaMock.removeEventListener).toHaveBeenCalledTimes(1);
  });
});
