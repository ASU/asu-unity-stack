// types.ts
export interface CardData {
  /** Primary ranking value (e.g., "#1", "Top 10") */
  value: string;
  /** Card title/heading */
  title: string;
  /** Body content (supports HTML via sanitizeDangerousMarkup) */
  body?: string;
  /** Optional list of ranking categories */
  categories?: CategoryItem[];
  /** Optional link destination */
  href?: string;
}

export interface CategoryItem {
  /** Category name (e.g., "Innovation") */
  name: string;
  /** Category description (e.g., "ASU ahead of MIT and Stanford") */
  description?: string;
  /** Source citation */
  source?: string;
}

export interface RepeatedlyRankedCardStackProps {
  /** Section title displayed above the card stack */
  title?: string;
  /** Section description */
  description?: string;
  /** CTA button text */
  ctaText?: string;
  /** CTA button URL */
  ctaUrl?: string;
  /** CTA button color variant */
  ctaButtonColor?: "dark" | "gold" | "maroon" | "gray";
  /** Array of card data (3–7 cards) */
  cards: CardData[];
  /** Initial active card index (default: center card) */
  initialActiveIndex?: number;
  /** Custom CSS class */
  className?: string;
}

export type NavigationDirection = "prev" | "next";

export interface UseCardNavigationReturn {
  activeIndex: number;
  goTo: (index: number) => void;
  goNext: () => void;
  goPrev: () => void;
  canGoNext: boolean;
  canGoPrev: boolean;
  totalCards: number;
}
