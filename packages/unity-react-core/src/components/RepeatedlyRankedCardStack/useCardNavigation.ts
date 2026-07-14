// useCardNavigation.ts
import { useState, useCallback, useMemo } from "react";
import type { UseCardNavigationReturn } from "./types";

export function useCardNavigation(
  totalCards: number,
  initialIndex?: number
): UseCardNavigationReturn {
  const defaultIndex = initialIndex ?? Math.floor(totalCards / 2);
  const [activeIndex, setActiveIndex] = useState(
    Math.min(Math.max(0, defaultIndex), totalCards - 1)
  );

  const goTo = useCallback(
    (index: number) => {
      const clamped = Math.min(Math.max(0, index), totalCards - 1);
      setActiveIndex(clamped);
    },
    [totalCards]
  );

  const goNext = useCallback(() => {
    setActiveIndex((prev) => Math.min(prev + 1, totalCards - 1));
  }, [totalCards]);

  const goPrev = useCallback(() => {
    setActiveIndex((prev) => Math.max(prev - 1, 0));
  }, [totalCards]);

  const canGoNext = useMemo(() => activeIndex < totalCards - 1, [activeIndex, totalCards]);
  const canGoPrev = useMemo(() => activeIndex > 0, [activeIndex]);

  return {
    activeIndex,
    goTo,
    goNext,
    goPrev,
    canGoNext,
    canGoPrev,
    totalCards,
  };
}
