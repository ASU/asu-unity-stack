// useCardNavigation.test.ts
import { renderHook, act } from "@testing-library/react";
import { expect, describe, it } from "vitest";
import { useCardNavigation } from "./useCardNavigation";

describe("useCardNavigation", () => {
  it("initializes with center card active", () => {
    const { result } = renderHook(() => useCardNavigation(5));
    expect(result.current.activeIndex).toBe(2); // floor(5/2) = 2
    expect(result.current.totalCards).toBe(5);
  });

  it("respects initialActiveIndex prop", () => {
    const { result } = renderHook(() => useCardNavigation(5, 1));
    expect(result.current.activeIndex).toBe(1);
  });

  it("clamps initialActiveIndex to valid range", () => {
    const { result } = renderHook(() => useCardNavigation(5, 10));
    expect(result.current.activeIndex).toBe(4); // max index
  });

  it("goTo sets activeIndex", () => {
    const { result } = renderHook(() => useCardNavigation(5));
    act(() => {
      result.current.goTo(3);
    });
    expect(result.current.activeIndex).toBe(3);
  });

  it("goTo clamps to valid range", () => {
    const { result } = renderHook(() => useCardNavigation(5));
    act(() => {
      result.current.goTo(10);
    });
    expect(result.current.activeIndex).toBe(4);

    act(() => {
      result.current.goTo(-5);
    });
    expect(result.current.activeIndex).toBe(0);
  });

  it("goNext increments activeIndex", () => {
    const { result } = renderHook(() => useCardNavigation(5, 2));
    act(() => {
      result.current.goNext();
    });
    expect(result.current.activeIndex).toBe(3);
  });

  it("goNext stops at boundary", () => {
    const { result } = renderHook(() => useCardNavigation(5, 4));
    act(() => {
      result.current.goNext();
    });
    expect(result.current.activeIndex).toBe(4); // stays at 4
  });

  it("goPrev decrements activeIndex", () => {
    const { result } = renderHook(() => useCardNavigation(5, 2));
    act(() => {
      result.current.goPrev();
    });
    expect(result.current.activeIndex).toBe(1);
  });

  it("goPrev stops at boundary", () => {
    const { result } = renderHook(() => useCardNavigation(5, 0));
    act(() => {
      result.current.goPrev();
    });
    expect(result.current.activeIndex).toBe(0); // stays at 0
  });

  it("canGoNext is true when not at end", () => {
    const { result } = renderHook(() => useCardNavigation(5, 2));
    expect(result.current.canGoNext).toBe(true);
  });

  it("canGoNext is false at end", () => {
    const { result } = renderHook(() => useCardNavigation(5, 4));
    expect(result.current.canGoNext).toBe(false);
  });

  it("canGoPrev is true when not at start", () => {
    const { result } = renderHook(() => useCardNavigation(5, 2));
    expect(result.current.canGoPrev).toBe(true);
  });

  it("canGoPrev is false at start", () => {
    const { result } = renderHook(() => useCardNavigation(5, 0));
    expect(result.current.canGoPrev).toBe(false);
  });
});
