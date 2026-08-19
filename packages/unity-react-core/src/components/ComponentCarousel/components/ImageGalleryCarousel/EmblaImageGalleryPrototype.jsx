//@ts-check
import React, { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import PropTypes from "prop-types";

const EmblaImageGalleryPrototype = ({
  imageItems = [],
  hasContent = false,
  maxWidth = "996px"
}) => {
  //Initializing Embla
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false, align: "start" });

  //React state to track the active slide
  const [selectedIndex, setSelectedIndex] = useState(0);

  //Navigation controls
  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((index) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap()); //save number to react state
  }, [emblaApi]);

  //Use direct react callback to update uI
  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    onSelect(); //Set initial state on load
  }, [emblaApi, onSelect]);

  if (!imageItems || imageItems.length === 0) return null; //prevent website from crashing if empty data

  const currentItem = imageItems[selectedIndex];

  return (
    //600px so it matches storybook wrapper limit (temperory)
    <div className="embla-image-gallery" style={{ maxWidth, margin: "auto", width: "100%", height: "600px", display: "flex", flexDirection: "column" }}>

      <div className="embla__viewport" ref={emblaRef} style={{ flex: "1 1 0px", minHeight: 0, overflow: "hidden" }}> {/* force images to shrink and fit */}

        <div className="embla__container" style={{ display: "flex", height: "100%" }}>
          {imageItems.map((item) => ( //iterate and render every image inside contatiner
            <div
              className="embla__slide"
              key={item.id}
              style={{ flex: "0 0 100%", minWidth: 0, height: "100%" }}
            >
              <img
                src={item.imageSource}
                alt={item.imageAltText || ""}
                loading="lazy"
                decoding="async"
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* prevent nav bar from getting reduced in size */}
      <div className="image-gallery-action-area" style={{ flexShrink: 0, border: "1px solid #d0d0d0", borderTop: 0 }}>

        {/* Arrows */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "1rem" }}>

          <button
             onClick={scrollPrev}
             disabled={!emblaApi?.canScrollPrev()} //disable left side if first image
             className="glide__arrow"
             style={{ width: "40px", height: "40px" }}
          >
            &#8592;
          </button>

          {/* thumbnails in nav bar */}
          <div className="embla-thumbnails" style={{ display: "flex", gap: "16px", overflowX: "auto" }}> {/* allow scrolling images if too many */}
            {/* clickable thumbnail images */}
            {imageItems.map((item, index) => (
              <button
                key={index}
                onClick={() => scrollTo(index)}
                aria-label={`Go to slide ${index + 1}`}
                style={{
                  padding: 0,
                  cursor: "pointer",
                  border: selectedIndex === index ? "4px solid #ffc627" : "2px solid transparent",
                  outline: "none"
                }}
              >
                <img
                  src={item.imageSource}
                  alt=""
                  style={{ width: "88px", height: "48px", objectFit: "cover", display: "block" }}
                />
              </button>
            ))}
          </div>

          <button
             onClick={scrollNext}
             disabled={!emblaApi?.canScrollNext()} //disable button if last image
             className="glide__arrow"
             style={{ width: "40px", height: "40px" }}
          >
             &#8594;
          </button>
        </div>

        {/* Captions */}
        {hasContent && (currentItem.title || currentItem.content) && ( //hide if no text caption
          <figcaption className="figure-caption uds-figure-caption" style={{ padding: "0 1rem 1rem" }}>
            <div className="uds-caption-text">
              {currentItem.title && <h2>{currentItem.title}</h2>}
              <div dangerouslySetInnerHTML={{ __html: currentItem.content }} />
            </div>
          </figcaption>
        )}
      </div>
    </div>
  );
};

EmblaImageGalleryPrototype.propTypes = {
  imageItems: PropTypes.array.isRequired,
  hasContent: PropTypes.bool,
  maxWidth: PropTypes.string,
};

export { EmblaImageGalleryPrototype };

