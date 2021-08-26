// @ts-check
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";

import { BaseCarousel } from "../../core/components/BaseCarousel";
import {
  ImageBulletItems,
  PrevButton,
  NextButton,
  BaseNavButtonContainer,
} from "../../core/components/BaseCarousel/components";

const calculateHeightNeeded = (content, width) => {
  // Make height consistent across all slides.
  // Assumes about 6 horizontal and 20 vertical px per character.
  if (!content) {
    return 0;
  }
  const brCount = (content.match(/<br/g) || []).length;
  const charactersPerLine = width / 6;

  const linesNeeded =
    parseInt(String(content.length / charactersPerLine), 10) + brCount;

  return linesNeeded * 20;
};
/**
 * @typedef {import('../../core/components/BaseCarousel').CarouselItem} CarouselItem
 */

/**
 * @typedef {{
 *     id: number,
 *     imageSource: string,
 *     thumbnailSource?: string,
 *     imageAltText:string
 *     title?: string
 *     content?: string
 * }} ImageCarouselItem
 */

const sharedProps = {
  imageItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      imageSource: PropTypes.string,
      thumbnailSource: PropTypes.string,
      imageAltText: PropTypes.string,
      content: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    })
  ),
  hasContent: PropTypes.bool,
};

/**
 * This function creates a html template which render an image
 * @param {ImageCarouselItem} props
 * @returns {CarouselItem}
 */
const htmlTemplate = ({ id, imageSource, imageAltText }) => ({
  id,
  item: (
    <div className="uds-img">
      <img
        src={imageSource}
        className="uds-img figure-img img-fluid"
        alt={imageAltText}
      />
    </div>
  ),
});

/**
 *
 * @param {{
 * instanceName: string
 * imageItems: ImageCarouselItem []
 * hasContent: boolean
 * maxWidth?: string
 * }} props
 * @returns { JSX.Element }
 */
// eslint-disable-next-line react/prop-types
const CustomNavComponent = ({ instanceName, imageItems, hasContent }) => {
  const ATTR_INDEX = "data-current-index";
  const [title, setTitle] = useState(imageItems[0].title);

  const [content, setContent] = useState(imageItems[0].content);

  const onItemClick = currentIndex => {
    const item = imageItems[currentIndex];
    setTitle(item.title);
    setContent(item.content);
  };

  useEffect(() => {
    const textArea = document.querySelector(
      `.image-gallery figcaption .uds-caption-text div`
    );
    if (textArea) {
      const contentWidth = parseInt(
        window
          .getComputedStyle(textArea, null)
          .getPropertyValue("width")
          .split("px")[0],
        10
      );
      const tallestContent = imageItems.reduce((acc, val) => {
        const heightNeeded = calculateHeightNeeded(val.content, contentWidth);
        return heightNeeded > acc ? heightNeeded : acc;
      }, 0);
      textArea.style.height = `${tallestContent}px`;
    }

    const currentSlider = document.querySelector(`#${instanceName}`);

    function onDataCurrentIndexChange(mutations) {
      // eslint-disable-next-line no-restricted-syntax
      for (const mutation of mutations) {
        if (mutation && mutation.attributeName === ATTR_INDEX) {
          return onItemClick(+currentSlider.getAttribute(ATTR_INDEX));
        }
      }
      return null;
    }

    const observer = new MutationObserver(onDataCurrentIndexChange);
    observer.observe(currentSlider, {
      attributes: true,
    });
  }, [instanceName]);

  const bulletItems = imageItems.map(item => item.imageSource);
  return (
    <div className="image-gallery-action-area" data-has-content={hasContent}>
      <div className="image-navigator">
        <BaseNavButtonContainer>
          <PrevButton />
          <div className="image-navigator-images">
            <div className="navigation-slider">
              <ImageBulletItems
                imageItems={bulletItems}
                onItemClick={index => onItemClick(index)}
              />
            </div>
          </div>
          <NextButton />
        </BaseNavButtonContainer>
      </div>
      {hasContent && (title || content) ? (
        <figcaption id="caption" className="figure-caption uds-figure-caption">
          <div className="uds-caption-text">
            {title ? <h3>{title}</h3> : null}
            {/* eslint-disable-next-line react/no-danger */}
            <div dangerouslySetInnerHTML={{ __html: content }} />
          </div>
        </figcaption>
      ) : null}
    </div>
  );
};

CustomNavComponent.propTypes = {
  imageItems: sharedProps.imageItems,
  hasContent: sharedProps.hasContent,
};

/**
 *
 * @param {{
 *    maxWidth?: string
 *    width?: string
 *    hasContent?: boolean
 *    imageItems: ImageCarouselItem []
 *    imageAutoSize?: boolean
 *  }} props
 * @returns { JSX.Element }
 */
const ImageGalleryCarousel = ({
  width,
  maxWidth,
  imageItems,
  hasContent = false,
  imageAutoSize = true,
}) => {
  const carouselItems = imageItems.map(htmlTemplate);
  const activateGlideActions = imageItems.length > 1;

  return (
    <BaseCarousel
      perView={1}
      maxWidth={maxWidth}
      width={width}
      carouselItems={carouselItems}
      cssClass="image-gallery"
      role="figure"
      ariaLabelledBy={hasContent ? "caption" : null}
      isFullWidth
      imageAutoSize={imageAutoSize}
      hasPeek={false}
      // @ts-ignore
      CustomNavComponent={({ instanceName }) => (
        <CustomNavComponent
          instanceName={instanceName}
          hasContent={hasContent}
          imageItems={imageItems}
          maxWidth={maxWidth}
        />
      )}
      removeSideBackground={imageItems.length <= 1}
      hasPositionIndicators={activateGlideActions}
      hasNavButtons={activateGlideActions}
      isDraggable={activateGlideActions}
    />
  );
};

ImageGalleryCarousel.propTypes = {
  imageItems: sharedProps.imageItems.isRequired,
  hasContent: sharedProps.hasContent,
  width: PropTypes.string,
  maxWidth: PropTypes.string,
  imageAutoSize: PropTypes.bool,
};

export { ImageGalleryCarousel };
