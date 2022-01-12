import { FunctionComponent } from "react";

export interface ButtonProps {
  label?: string;
  ariaLabel?: string;
  href?: string;
  onClick?: () => void;
  size?: "default" | "small" | "xsmall";
  color?: "gold" | "maroon" | "gray" | "dark";
  target?: "_blank" | "_self" | "_top" | "_parent";
}

export interface TagsProps {
  label?: string;
  ariaLabel?: string;
  href?: string;
  onClick?: () => void;
  color:"white" | "gray" | "dark";
}

export interface CardItem {
  id: number;
  title: string;
  imageSource: string;
  imageAltText: string;
  content?: string;
  linkUrl?: string;
  linkLabel?: string;
  eventTime?: string;
  eventLocation?: string;
  buttons?: ButtonProps[];
  tags?: TagsProps[];
}

export interface CardCarouselProps {
  cardItems: CardItem[];
  perView?: number | string;
  width?: string;
  maxWidth?: string;
  imageAutoSize?: boolean;
  cardHorizontal?: boolean;
  cardEventFormat: "stack" | "inline";
  cardType: "default" | "degree" | "event" | "news" | "story";
}

export const CardCarousel: FunctionComponent<CardCarouselProps>;

export interface ImageItem {
  id: number;
  imageSource: string;
  imageAltText: string;
  title?: string;
  content?: string;
}

export interface ImageCarouselProps {
  imageItems: ImageItem[];
  perView?: number | string;
  width?: string;
  maxWidth?: string;
  imageAutoSize?: boolean;
}

export const ImageCarousel: FunctionComponent<ImageCarouselProps>;

export interface ImageGalleryCarouselItem {
  id: number;
  imageSource: string;
  imageAltText: string;
  thumbnailSource?: string;
  title?: string;
  content?: string;
}

export interface ImageGalleryCarouselProps {
  imageItems: ImageGalleryCarouselItem[];
  width?: string;
  maxWidth?: string;
  hasContent?: boolean;
  imageAutoSize?: boolean;
}

export const ImageGalleryCarousel: FunctionComponent<ImageGalleryCarouselProps>;

export interface TestimonialStyle {
  containerCssClass: string[];
  titleCssClass: string[];
  contentCssClass: string[];
}

export interface TestimonialQuote {
  content: string;
  title?: string;
  cite: {
    name: string,
    descriptio?: string,
  };
}

export interface TestimonialItem {
  id: number;
  imageSource?: string;
  imageAltText?: string;
  quote: TestimonialQuote;
}

export interface TestimonialCarouselProps {
  testimonialItems: TestimonialItem[];
  maxWidth: string;
  width?: string;
  itemStyle?: TestimonialStyle;
  hasPositionIndicators?: boolean;
  hasNavButtons?: boolean;
  imageAutoSize?: boolean;
}

export const TestimonialCarousel: FunctionComponent<TestimonialCarouselProps>;
