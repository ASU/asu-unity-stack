// RepeatedlyRankedCardStack.tsx
import { sanitizeDangerousMarkup, trackGAEvent } from "@asu/shared";
import classNames from "classnames";
import React, { useRef, useCallback, useEffect } from "react";

import { Button } from "../Button/Button";
import { FannedCard } from "./FannedCard";
import { NavigationArrows } from "./NavigationArrows";
import type { RepeatedlyRankedCardStackProps } from "./types";
import { useCardNavigation } from "./useCardNavigation";
import { useReducedMotion } from "./useReducedMotion";
import { useSwipeGesture } from "./useSwipeGesture";
import styles from "./RepeatedlyRankedCardStack.module.css";

const GA_EVENT = {
  name: "onclick",
  event: "link",
  action: "click",
  type: "internal link",
  region: "main content",
  section: "repeatedly ranked",
};

export const RepeatedlyRankedCardStack: React.FC<RepeatedlyRankedCardStackProps> = ({
  title = "ASU is recognized globally as a leading knowledge enterprise.",
  description,
  ctaText,
  ctaUrl,
  ctaButtonColor = "maroon",
  cards,
  initialActiveIndex,
  className,
}) => {
  const cardRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const reducedMotion = useReducedMotion();

  // Clamp cards to 3–7
  const validCards = cards.slice(0, 7);
  const hasEnoughCards = validCards.length >= 3;

  const {
    activeIndex,
    goTo,
    goNext,
    goPrev,
    canGoNext,
    canGoPrev,
    totalCards,
  } = useCardNavigation(validCards.length, initialActiveIndex);

  // Swipe handlers for mobile
  const swipeHandlers = useSwipeGesture({
    onSwipeLeft: goNext,
    onSwipeRight: goPrev,
  });

  // Focus active card after navigation
  useEffect(() => {
    cardRefs.current[activeIndex]?.focus();
  }, [activeIndex]);

  // Keyboard navigation
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        goPrev();
        trackGAEvent({ ...GA_EVENT, text: "navigate previous" });
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        goNext();
        trackGAEvent({ ...GA_EVENT, text: "navigate next" });
      }
    },
    [goNext, goPrev]
  );

  const handleCardClick = useCallback(
    (index: number, cardTitle: string) => {
      goTo(index);
      trackGAEvent({ ...GA_EVENT, text: `select card: ${cardTitle}` });
    },
    [goTo]
  );

  const handleNavPrev = useCallback(() => {
    goPrev();
    trackGAEvent({ ...GA_EVENT, text: "navigate previous" });
  }, [goPrev]);

  const handleNavNext = useCallback(() => {
    goNext();
    trackGAEvent({ ...GA_EVENT, text: "navigate next" });
  }, [goNext]);

  // Fallback for empty or insufficient cards
  if (!validCards.length) {
    return (
      <section className={classNames(styles.section, styles.sectionEmpty)}>
        <p>No rankings available.</p>
      </section>
    );
  }

  return (
    <section
      className={classNames(styles.section, className)}
      aria-label="ASU Rankings"
    >
      <div className="container">
        {/* Header */}
        <div className="row">
          <div className="col-12 col-lg-8">
            {title && (
              <h2 className={styles.title}>{title}</h2>
            )}
            {description && (
              <p
                className={styles.description}
                dangerouslySetInnerHTML={sanitizeDangerousMarkup(description)}
              />
            )}
            {ctaText && ctaUrl && (
              <div className={styles.cta}>
                <Button
                  label={ctaText}
                  href={ctaUrl}
                  color={ctaButtonColor}
                  size="small"
                />
              </div>
            )}
          </div>
        </div>

        {/* Card Stack */}
        <div
          className={classNames(styles.stack, {
            [styles.stackSingle]: !hasEnoughCards,
          })}
          role="group"
          aria-label={`${totalCards} ranking cards`}
          aria-roledescription="carousel"
          onKeyDown={handleKeyDown}
          {...swipeHandlers}
        >
          <div className={styles.stackTrack}>
            {validCards.map((card, index) => (
              <FannedCard
                key={index}
                ref={(el) => {
                  cardRefs.current[index] = el;
                }}
                card={card}
                index={index}
                totalCards={totalCards}
                activeIndex={activeIndex}
                isActive={index === activeIndex}
                onClick={() => handleCardClick(index, card.title)}
                reducedMotion={reducedMotion}
              />
            ))}
          </div>

          {hasEnoughCards && (
            <NavigationArrows
              onPrev={handleNavPrev}
              onNext={handleNavNext}
              canGoPrev={canGoPrev}
              canGoNext={canGoNext}
            />
          )}
        </div>

        {/* Screen reader live region */}
        <div
          role="status"
          aria-live="polite"
          aria-atomic="true"
          className="visually-hidden"
        >
          {`Showing card ${activeIndex + 1} of ${totalCards}: ${validCards[activeIndex]?.title}`}
        </div>
      </div>
    </section>
  );
};
