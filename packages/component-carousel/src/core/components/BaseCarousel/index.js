// @ts-check
import PropTypes from "prop-types";
import React, { useEffect } from "react";

// Include required and custom styles for @glidejs/glide
import "./styles.scss";
import { SliderItems, BulletItems, NavButtons } from "./components";
import { setupCaroarousel } from "./glide/glide.setup";
import { calcualteViewItems } from "./helper/width-calculator";

// Requirement: We import bs4-theme css from QA site in preview-head.html.
// Initially based on this approach:
// https://stackoverflow.com/questions/61596516/glide-js-with-react

/**
 *
 * @typedef {{
 *            id: string | number
 *            item: JSX.Element
 *          }} CarouselItem
 */

/**
 *
 * @param {{
 *            perView?: number
 *            width?: string
 *            maxWidth?: string
 *            carouselItems: CarouselItem[]
 *            cssClass?: string
 *            CustomNavComponent?: JSX.Element
 *            role?: string
 *            ariaLabelledBy?: string
 *            onItemClick?: (index: number) => void
 *            isFullWidth?: boolean
 *            hasNavButtons?: boolean
 *            hasPositionIndicators?: boolean
 *            removeSideBackground?: boolean
 *            imageAutoSize?: boolean
 *            hasPeek?: boolean
 *            isDraggable?: boolean
 *            hasShadow: boolean
 *          }} props
 * @returns
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
  const instanceName = `glide-${Math.ceil(Math.random() * 10000)}`;
  const buttonCount = calcualteViewItems(carouselItems.length, perView);

  useEffect(() => {
    setupCaroarousel({
      instanceName,
      perView,
      buttonCount,
      isFullWidth,
      onItemClick,
      hasPeek,
      isDraggable,
    });
  }, [
    instanceName,
    perView,
    buttonCount,
    isFullWidth,
    onItemClick,
    hasPeek,
    isDraggable,
  ]);

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
      <div className="glide__track" data-glide-el="track">
        <SliderItems carouselItems={carouselItems} />
      </div>

      {CustomNavComponent ? (
        // @ts-ignore
        <CustomNavComponent instanceName={instanceName} />
      ) : (
        <>
          {hasPositionIndicators && <BulletItems buttonCount={buttonCount} />}
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
  // eslint-disable-next-line react/forbid-prop-types
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
