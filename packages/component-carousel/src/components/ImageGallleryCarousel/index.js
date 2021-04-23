// @ts-check
import { h } from "preact";
import { useState } from "preact/hooks";
import PropTypes from "prop-types";

import { BaseCarousel } from "../../core/components/BaseCarousel";
import {
  ImageBulletItems,
  PrevButton,
  NextButton,
  BaseNavButtonContainer,
} from "../../core/components/BaseCarousel/components";

/**
 * This function creates a html template which render an image
 * @param {{
 *          id: number
 *          imageSource: string
 *          altText:string
 *          content?: string | h.JSX.Element
 *        }} props
 * @returns
 */
const imageTemplate = ({ id, imageSource, altText }) => ({
  id,
  item: (
    <div className="uds-img">
      <img
        src={imageSource}
        className="uds-img figure-img img-fluid"
        alt={altText}
      />
    </div>
  ),
});

/**
 *
 * @param {{
 *  perView: string | number
 *  maxWidth?: string
 *  width?: string
 *  hasContent?: boolean
 *  imageItems: {
 *     id: number,
 *     imageSource: string,
 *     thumbnailSource?: string,
 *     altText:string
 *     content?: any
 *   }[]
 *  }} props
 * @returns { JSX.Element }
 */
const ImageGalleryCarousel = ({
  perView,
  width,
  maxWidth,
  imageItems,
  hasContent = false,
}) => {
  const carouselItems = imageItems.map(imageTemplate);

  /**
   *
   * @param {{ instanceName: string }} props
   * @returns { JSX.Element }
   */
  const CustomNavComponent = ({ instanceName }) => {
    const [content, setContent] = useState(imageItems[0].content);

    const onItemClick = () => {
      const currentSlider = document.querySelector(`#${instanceName}`);
      const currentIndex = currentSlider.getAttribute("data-current-index");
      const item = imageItems[currentIndex];
      setContent(item.content);
    };
    let bulletItems = imageItems.map(item => item.imageSource);
    return (
      <div className="image-gallery-action-area" data-has-content={hasContent}>
        <div className="image-navigator">
          <BaseNavButtonContainer>
            <PrevButton />
            <ImageBulletItems
              imageItems={bulletItems}
              onItemClick={onItemClick}
            />
            <NextButton />
          </BaseNavButtonContainer>
        </div>
        {hasContent ? (
            <figcaption
              id="caption"
              className="figure-caption uds-figure-caption"
            >
              {typeof content === "string" ? (
                <span className="uds-caption-text">{content}</span>
              ) : (
                content
              )}
            </figcaption>
        ) : null}
      </div>
    );
  };

  return (
    <BaseCarousel
      perView={+perView}
      maxWidth={maxWidth}
      width={width}
      carouselItems={carouselItems}
      cssClass="image-gallery"
      role="figure"
      ariaLabelledBy="caption"
      // @ts-ignore
      CustomNavComponent={props => <CustomNavComponent {...props} />}
    />
  );
};

ImageGalleryCarousel.propTypes = {
  perView: PropTypes.string.isRequired,
  imageItems: PropTypes.arrayOf(PropTypes.object).isRequired,
  width: PropTypes.string,
  maxWidth: PropTypes.string,
  hasContent: PropTypes.bool,
};

export { ImageGalleryCarousel };
