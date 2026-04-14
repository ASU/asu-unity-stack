// @ts-check
import PropTypes from "prop-types";
import React, { useEffect, useState, useId, useRef } from "react";

// Include required and custom styles for @glidejs/glide
import "./styles.scss";
import { SliderItems, BulletItems, NavButtons } from "./components";
import { setupCaroarousel } from "./glide/glide.setup";
import { calcualteViewItems } from "./helper/width-calculator";

/**
 * @typedef {import('../../types/base-carousel-types').Props} CarouselItem
 */

const BaseCarousel = ({
  perView = 1,
  width,
  maxWidth,
  carouselItems,
  cssClass = "",
  CustomNavComponent,
  role,
  ariaLabelledBy,
  isFullWidth,
  removeSideBackground = false,
  hasNavButtons = true,
  hasPositionIndicators = true,
  imageAutoSize = true,
  onItemClick = () => null,
  hasPeek = true,
  isDraggable = true,
  hasShadow = true,
}) => {
  // Only prop for the slider configs we expose is perView. Everything else is
  // considered locked down for Web Standards 2.
  // We implement "slider" approach per Web Standards 2:
  // - Dead-end advance when end is reached. No wrap around.
  // - First card is focused.
  // - No advance allowed to create whitespace at the end of slide. Stops with
  //   all visible.
  // - Shadow (at either left or right) should disappear when there is no next
  //   or previous.
  // - Instead of tying the bullets to the number of cards, we do a calculation
  //   tying the bullets to the number of "views" or "panels" so the last bullet
  //   displays the max number of cards with no overhanging card or extra
  //   whitespace. TODO Negative impact on a11y from this?

  // Get glide instance class name.
  // Defaults to glide. If implementing multiple instnaces, you MUST provide
  // an unique instance name for all but one instance.
  const instanceName = useId().replace(/:/g, "-");
  const buttonCount = calcualteViewItems(carouselItems.length, perView);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentPerView, setCurrentPerView] = useState(perView);
  const sliderRef = useRef(null);

  useEffect(() => {
    // Set up carousel and store the slider instance
    const slider = setupCaroarousel({
      instanceName,
      perView,
      buttonCount,
      isFullWidth,
      onItemClick,
      hasPeek,
      isDraggable,
    });
    sliderRef.current = slider;

    // Track current slide index and perView for aria-live announcements
    // Use Glide's event system instead of MutationObserver to avoid timing issues
    const handleSlideChange = () => {
      setCurrentIndex(slider.index);
      // Get actual perView from slider settings (changes with breakpoints)
      setCurrentPerView(slider.settings.perView);
    };

    // Listen to move.after event which fires after slide transition completes
    slider.on("move.after", handleSlideChange);

    // Also listen to resize event to update perView when screen size changes
    slider.on("resize", handleSlideChange);

    // Set initial values
    setCurrentIndex(0);
    setCurrentPerView(slider.settings.perView);

    return () => {
      // Clean up event listener and destroy slider
      if (sliderRef.current) {
        sliderRef.current.destroy();
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      role={role}
      aria-labelledby={ariaLabelledBy}
      className={`glide ${cssClass}`}
      id={instanceName}
      style={{ width, maxWidth }}
      data-remove-side-background={removeSideBackground}
      data-image-auto-size={imageAutoSize}
      data-has-shadow={hasShadow}
    >
      <div className="sr-only" aria-live="polite" aria-atomic="true">
        {currentPerView === 1
          ? `Showing slide ${currentIndex + 1} of ${buttonCount}`
          : `Showing slides ${currentIndex + 1} through ${Math.min(
              currentIndex + currentPerView,
              carouselItems.length
            )} of ${carouselItems.length}`}
      </div>
      <div className="glide__track" data-glide-el="track">
        <SliderItems carouselItems={carouselItems} />
      </div>

      {CustomNavComponent ? (
        // @ts-ignore
        <CustomNavComponent instanceName={instanceName} />
      ) : (
        <>
          {hasPositionIndicators && (
            <BulletItems buttonCount={buttonCount} currentIndex={currentIndex} />
          )}
          {hasNavButtons && <NavButtons />}
        </>
      )}
    </div>
  );
};

BaseCarousel.propTypes = {
  perView: PropTypes.number,
  width: PropTypes.string,
  maxWidth: PropTypes.string,

  carouselItems: PropTypes.arrayOf(PropTypes.object).isRequired,
  cssClass: PropTypes.string,
  CustomNavComponent: PropTypes.func,
  role: PropTypes.string,
  ariaLabelledBy: PropTypes.string,
  onItemClick: PropTypes.func,
  isFullWidth: PropTypes.bool,
  removeSideBackground: PropTypes.bool,
  hasNavButtons: PropTypes.bool,
  hasPositionIndicators: PropTypes.bool,
  imageAutoSize: PropTypes.bool,
  hasPeek: PropTypes.bool,
  isDraggable: PropTypes.bool,
  hasShadow: PropTypes.bool,
};

export { BaseCarousel, calcualteViewItems };
