export const cardCarouselItems: any[];
export const imageCarouselItems: {
    id: number;
    imageSource: any;
    imageAltText: string;
}[];
export const imageGalleryCarouselItems: any[];
export namespace cardCarouselProps {
    export let perView: number;
    export { cardCarouselItems as cardItems };
}
export namespace imageCarouselProps {
    let perView_1: number;
    export { perView_1 as perView };
    export { imageCarouselItems as imageItems };
}
export namespace imageGalleryCarouselProps {
    export { imageGalleryCarouselItems as imageItems };
}
export namespace testimonialCarouselProps {
    export let hasNavButtons: boolean;
    export let hasPositionIndicators: boolean;
    export { testimonialWithImage as testimonialItems };
}
import { testimonialWithImage } from "../../src/components/ComponentCarousel/components/TestimonialCarousel/examples";
