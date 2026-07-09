// FannedCard.tsx
import { sanitizeDangerousMarkup } from "@asu/shared";
import classNames from "classnames";
import React, { forwardRef } from "react";
import type { CardData } from "./types";
import styles from "./RepeatedlyRankedCardStack.module.css";

interface FannedCardProps {
  card: CardData;
  index: number;
  totalCards: number;
  activeIndex: number;
  isActive: boolean;
  onClick: () => void;
  reducedMotion: boolean;
}

export const FannedCard = forwardRef<HTMLButtonElement, FannedCardProps>(
  ({ card, index, totalCards, activeIndex, isActive, onClick, reducedMotion }, ref) => {
    // Linear offset - cards before active go LEFT, cards after go RIGHT
    const offset = index - activeIndex;

    // Calculate rotation and translation for bidirectional fanning
    const rotation = offset * 8; // negative = left, positive = right
    const translateX = offset * 60; // negative = left, positive = right

    // zIndex: active card on top, then decreasing by distance from active
    const zIndex = totalCards - Math.abs(offset);
    const scale = isActive ? 1 : 0.95 - Math.abs(offset) * 0.02; // slight scale reduction by distance

    const style: React.CSSProperties = {
      transform: `translateX(${translateX}px) rotate(${rotation}deg) scale(${scale})`,
      zIndex,
      transition: reducedMotion ? "none" : "transform 0.3s ease-out",
    };

    return (
      <button
        ref={ref}
        type="button"
        className={classNames(styles.card, {
          [styles.cardActive]: isActive,
        })}
        style={style}
        onClick={onClick}
        aria-label={`${card.title}, ${card.value}. Card ${index + 1} of ${totalCards}`}
        aria-pressed={isActive}
        tabIndex={isActive ? 0 : -1}
      >
        <div className={styles.cardValue}>{card.value}</div>
        <h3 className={styles.cardTitle}>{card.title}</h3>
        {card.body && (
          <div
            className={styles.cardBody}
            dangerouslySetInnerHTML={sanitizeDangerousMarkup(card.body)}
          />
        )}
        {card.categories && card.categories.length > 0 && (
          <ul className={styles.cardCategories}>
            {card.categories.map((cat, i) => (
              <li key={i} className={styles.cardCategory}>
                <span className={styles.cardCategoryName}>
                  {cat.name}
                </span>
                {cat.description && (
                  <span className={styles.cardCategoryDesc}>
                    {cat.description}
                  </span>
                )}
                {cat.source && (
                  <cite className={styles.cardCategorySource}>
                    {cat.source}
                  </cite>
                )}
              </li>
            ))}
          </ul>
        )}
      </button>
    );
  }
);

FannedCard.displayName = "FannedCard";
