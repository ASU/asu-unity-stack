// @ts-check

import { h, Fragment } from "preact";
import { useMemo, useState } from "preact/hooks";
import { BaseCarousel } from "../../core/components/BaseCarousel";
import {
  ImageBulletItems,
  NavButtons,
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
const imageTemplate = ({ id, imageSource, altText, content }) => ({
  id,
  item: (
    <div class="uds-img">
      <img
        src={imageSource}
        class="uds-img figure-img img-fluid"
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
 * @returns
 */
const ImageGalleryCarousel = ({
  perView,
  width,
  maxWidth,
  imageItems,
  hasContent = false,
}) => {
  const carouselItems = imageItems.map(imageTemplate);

  const CustomNavComponent = ({ buttonCount, instanceName }) => {
    const [content, setContent] = useState(imageItems[0].content);

    const onItemClick = () => {
      const currentSlider = document.querySelector(`#${instanceName}`);
      const currentIndex= currentSlider.getAttribute("data-current-index");
      const item = imageItems[currentIndex];
      setContent(item.content);
    };
    let bulletItems = imageItems.map(item => item.imageSource);
    return (
      <>
        <div className="image-navigator">
          <ImageBulletItems
            buttonCount={buttonCount}
            imageItems={bulletItems}
            onItemClick={onItemClick}
          />
          <NavButtons onClick={onItemClick} />
        </div>
        {hasContent ? (
          <figure class="figure uds-figure">
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
          </figure>
        ) : null}
      </>
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
      // onItemClick={onItemClick}
      // @ts-ignore
      CustomNavComponent={props => <CustomNavComponent {...props} />}
    />
  );
};

export { ImageGalleryCarousel };
