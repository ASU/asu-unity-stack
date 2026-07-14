// NavigationArrows.tsx
import classNames from "classnames";
import React from "react";
import styles from "./RepeatedlyRankedCardStack.module.css";

interface NavigationArrowsProps {
  onPrev: () => void;
  onNext: () => void;
  canGoPrev: boolean;
  canGoNext: boolean;
  ariaLabel?: string;
}

export const NavigationArrows: React.FC<NavigationArrowsProps> = ({
  onPrev,
  onNext,
  canGoPrev,
  canGoNext,
  ariaLabel = "Card navigation",
}) => {
  return (
    <div className={styles.nav} role="group" aria-label={ariaLabel}>
      <button
        type="button"
        className={classNames(styles.navBtn, styles.navBtnPrev)}
        onClick={onPrev}
        disabled={!canGoPrev}
        aria-disabled={!canGoPrev}
        aria-label="Previous card"
      >
        <span className="fas fa-chevron-left" aria-hidden="true" />
      </button>
      <button
        type="button"
        className={classNames(styles.navBtn, styles.navBtnNext)}
        onClick={onNext}
        disabled={!canGoNext}
        aria-disabled={!canGoNext}
        aria-label="Next card"
      >
        <span className="fas fa-chevron-right" aria-hidden="true" />
      </button>
    </div>
  );
};
