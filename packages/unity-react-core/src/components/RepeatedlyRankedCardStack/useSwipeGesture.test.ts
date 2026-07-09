// useSwipeGesture.test.ts
import { renderHook } from "@testing-library/react";
import { expect, describe, it, vi } from "vitest";
import { useSwipeGesture } from "./useSwipeGesture";
import React from "react";

describe("useSwipeGesture", () => {
  it("returns event handlers", () => {
    const handlers = { onSwipeLeft: vi.fn(), onSwipeRight: vi.fn() };
    const { result } = renderHook(() => useSwipeGesture(handlers));
    
    expect(result.current.onTouchStart).toBeDefined();
    expect(result.current.onTouchEnd).toBeDefined();
  });

  it("calls onSwipeLeft when swiping left beyond threshold", () => {
    const onSwipeLeft = vi.fn();
    const onSwipeRight = vi.fn();
    const { result } = renderHook(() => useSwipeGesture({ onSwipeLeft, onSwipeRight }));

    // Simulate touch start at x=200
    const touchStart: React.TouchEvent = {
      touches: [{ clientX: 200 }],
    } as unknown as React.TouchEvent;
    result.current.onTouchStart(touchStart);

    // Simulate touch end at x=100 (moved 100px left, exceeds 50px threshold)
    const touchEnd: React.TouchEvent = {
      changedTouches: [{ clientX: 100 }],
    } as unknown as React.TouchEvent;
    result.current.onTouchEnd(touchEnd);

    expect(onSwipeLeft).toHaveBeenCalledTimes(1);
    expect(onSwipeRight).not.toHaveBeenCalled();
  });

  it("calls onSwipeRight when swiping right beyond threshold", () => {
    const onSwipeLeft = vi.fn();
    const onSwipeRight = vi.fn();
    const { result } = renderHook(() => useSwipeGesture({ onSwipeLeft, onSwipeRight }));

    // Simulate touch start at x=100
    const touchStart: React.TouchEvent = {
      touches: [{ clientX: 100 }],
    } as unknown as React.TouchEvent;
    result.current.onTouchStart(touchStart);

    // Simulate touch end at x=200 (moved 100px right)
    const touchEnd: React.TouchEvent = {
      changedTouches: [{ clientX: 200 }],
    } as unknown as React.TouchEvent;
    result.current.onTouchEnd(touchEnd);

    expect(onSwipeRight).toHaveBeenCalledTimes(1);
    expect(onSwipeLeft).not.toHaveBeenCalled();
  });

  it("does not trigger callback when swipe is below threshold", () => {
    const onSwipeLeft = vi.fn();
    const onSwipeRight = vi.fn();
    const { result } = renderHook(() => useSwipeGesture({ onSwipeLeft, onSwipeRight }));

    const touchStart: React.TouchEvent = {
      touches: [{ clientX: 100 }],
    } as unknown as React.TouchEvent;
    result.current.onTouchStart(touchStart);

    // Only 30px movement (threshold is 50px)
    const touchEnd: React.TouchEvent = {
      changedTouches: [{ clientX: 130 }],
    } as unknown as React.TouchEvent;
    result.current.onTouchEnd(touchEnd);

    expect(onSwipeLeft).not.toHaveBeenCalled();
    expect(onSwipeRight).not.toHaveBeenCalled();
  });

  it("handles missing onTouchStart gracefully", () => {
    const onSwipeLeft = vi.fn();
    const { result } = renderHook(() => useSwipeGesture({ onSwipeLeft }));

    // Call onTouchEnd without onTouchStart
    const touchEnd: React.TouchEvent = {
      changedTouches: [{ clientX: 100 }],
    } as unknown as React.TouchEvent;
    
    expect(() => result.current.onTouchEnd(touchEnd)).not.toThrow();
    expect(onSwipeLeft).not.toHaveBeenCalled();
  });
});
