// @ts-check
/** @jsx h */
import { h, Fragment } from "preact";
import { useEffect } from "preact/compat";
import PropTypes from "prop-types";

// Include required and custom styles for @glidejs/glide
import "./styles.scss";
import { SliderItems, NavButtons } from "./components";
import { setupCaroarousel } from "./glide/glide.setup";
import { calcualteViewItems } from "./helper/width-calculator";

// Requirement: We import bs4-theme css from QA site in preview-head.html.
// Initially based on this approach:
// https://stackoverflow.com/questions/61596516/glide-js-with-react

/*
Note: In line with the requirements of the ASUCMS project,
this is a copy of the BaseCarousel found in ../
and modified as required.
*/

/**
 *
 * @param {{
 *            perView?: number | string
 *            width?: string
 *            maxWidth?: string
 *            carouselItems: {id: string | number, item: JSX.Element}[]
 *            cssClass?: string
 *            CustomNavComponent?: JSX.Element
 *            role?: string
 *            ariaLabelledBy?: string
 *            onItemClick?: (index: number) => void
 *            isFullWidth?: boolean
 *          }} props
 * @returns
 */
const BaseCarousel = ({
  perView = "1",
  width,
  maxWidth,
  carouselItems,
  cssClass = "",
  CustomNavComponent,
  role,
  ariaLabelledBy,
  isFullWidth,
  onItemClick = () => null,
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

  // Get glide instance class name.
  // Defaults to glide. If implementing multiple instnaces, you MUST provide
  // an unique instance name for all but one instance.
  let instanceName = `glide-${Math.ceil(Math.random() * 10000)}`;
  const buttonCount = calcualteViewItems(carouselItems.length, +perView);

  useEffect(() => {
    setupCaroarousel({
      instanceName,
      perView,
      buttonCount,
      isFullWidth,
      onItemClick,
    });
  }, [instanceName, perView, buttonCount, isFullWidth, onItemClick]);

  return (
    <div
      role={role}
      aria-labelledby={ariaLabelledBy}
      className={`glide ${cssClass}`}
      id={instanceName}
      style={{ width, maxWidth }}
    >
      <div className="glide__track" data-glide-el="track">
        <SliderItems carouselItems={carouselItems} />
      </div>

      {CustomNavComponent ? (
        // @ts-ignore
        <CustomNavComponent
          buttonCount={buttonCount}
          instanceName={instanceName}
        />
      ) : (
        <>
          <NavButtons />
        </>
      )}
    </div>
  );
};

BaseCarousel.propTypes = {
  perView: PropTypes.string,
  width: PropTypes.string,
  maxWidth: PropTypes.string,
  carouselItems: PropTypes.arrayOf(PropTypes.object).isRequired,
  cssClass: PropTypes.string,
  CustomNavComponent: PropTypes.object,
  role: PropTypes.string,
  ariaLabelledBy: PropTypes.string,
  onItemClick: PropTypes.func,
};

export { BaseCarousel, calcualteViewItems };
