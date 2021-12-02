import React from 'react';

export interface AccordionCardProps {
  color?: "gold" | "maroon" | "gray" | "dark";
  content?: {
    icon?: string,
    header?: string,
    body?: string
  };
}
export interface AccordionProps {
  openedCard: number
  cards: AccordionCardProps[]
}
export const Accordion: React.FunctionComponent<AccordionProps>

export interface AnchorMenuProps {
  /**
   * Anchor menu items
   */
  items: {
    text: string,
    targetIdName: string,
    icon?: string[]
  }[];
  /**
   * First next sibling element of the anchor menu
   */
  firstElementId: string;
  /**
   * If true it focus the first focusable element into the section
   * If false it focus the next menu item into the nav bar
   */
  focusFirstFocusableElement?: boolean;
}
export const AnchorMenu: React.FunctionComponent<AnchorMenuProps>

export interface ArticleProps {
  /**
    * Type of article
    */
  type?: "event" | "news";
  /**
   * This is the relative or absolute url to the full-page article
   */
  articleUrl: string;
  /**
   * Date for the article
   */
  publicationDate: string;
  /**
   * Title
   */
  title: string;
  /**
   * Body content for the article
   */
  body: string;
  /**
   * Article author email
   */
  authorEmail?: string;
  /**
   * Article author full name
   */
  authorName: string;
  /**
   * Article author phone number
   */
  authorPhone?: string;
  /**
   * Article author title
   */
  authorTitle?: string;
  /**
   * Breadcrumbs array
   */
  breadcrumbs?: {
    title?: string,
    url?: string,
    active?: boolean
  }[];
  /**
   * URL for an "add to calendar" button
   */
  calendarUrl?: string;
  /**
   * Article image
   */
  headerImageUrl?: string;
  /**
   * Event location
   */
  eventLocation?: string;
  /**
   * Event time
   */
  eventTime?: string;
  /**
   * URL for a registation button
   */
  registrationUrl?: string;
  /**
   * URL for a Zoom button
   */
  zoomUrl?: string;
}
export const Article: React.FunctionComponent<ArticleProps>

export interface ButtonProps {
  /**
  * Button label
  */
  label?: string;
  /**
    ARIA label for accessibility
  */
  ariaLabel?: string;
  /**
    Render button as a block-button?
  */
  block?: boolean;
  /**
    Button background color
  */
  color?: "gold" | "maroon" | "gray" | "dark";
  /**
    Disable the button?
  */
  disabled?: boolean;
  /**
    Pass in a Component to override default button element.
    For example: react-router Link
  */
  element?: (...args: unknown[]) => unknown | string | {
    $$typeof?: symbol,
    render?(...args: unknown[]): unknown
  } | ((...args: unknown[]) => unknown) | string | {
    $$typeof?: symbol,
    render?(...args: unknown[]): unknown
  }[];
  /**
    Link target url; will cause button to be rendered as `<a>` link
  */
  href?: string;
  /**
    React Font Awesome icon prefix and name string to be rendered in button label. Ex: ['fab', 'drupal']
  */
  icon?: string[];
  /**
   * ref will only get you a reference to the Button component, use innerRef to
   * get a reference to the DOM element (for things like focus management).
   */
  innerRef?: object | ((...args: unknown[]) => unknown) | string;
  /**
    Event handler function for `<button>`
  */
  onClick?(...args: unknown[]): unknown;
  /**
    Button size
  */
  size?: "default" | "small" | "xsmall";
  /**
    Classes to add to button
  */
  classes?: string[];
  /**
   Link target type
   */
  target?: "_blank" | "_self" | "_top" | "_parent";
}
export const Button: React.FunctionComponent<ButtonProps>

export interface ButtonIconOnlyProps {
  /**
  Color the button based on the background color
*/
  color?: "white" | "gray" | "black";
  /**
    React Font Awesome icon prefix and name string to be rendered in button label. Ex: ['fab', 'drupal']
  */
  icon?: string[];
  /**
   * ref will only get you a reference to the Button component, use innerRef to
   * get a reference to the DOM element (for things like focus management).
   */
  innerRef?: object | ((...args: unknown[]) => unknown) | string;
  /**
    Event handler function for `<button>`
  */
  onClick?(...args: unknown[]): unknown;
  /**
    Button size
  */
  size?: "large" | "small";
}
export const ButtonIconOnly: React.FunctionComponent<ButtonIconOnlyProps>

export interface ButtonTagProps {
  /**
     Button tag label
   */
  label?: string;
  /**
    ARIA label for accessibility
  */
  ariaLabel?: string;
  /**
    Button background color
  */
  color?: "white" | "gray" | "dark";
  /**
    Disable the button?
  */
  disabled?: boolean;
  /**
    Pass in a Component to override default button element.
    For example: react-router Link
  */
  element?: (...args: unknown[]) => unknown | string | {
    $$typeof?: symbol,
    render?(...args: unknown[]): unknown
  } | ((...args: unknown[]) => unknown) | string | {
    $$typeof?: symbol,
    render?(...args: unknown[]): unknown
  }[];
  /**
    Link target url; will cause button to be rendered as `<a>` link
  */
  href?: string;
  /**
   * ref will only get you a reference to the Button component, use innerRef to
   * get a reference to the DOM element (for things like focus management).
   */
  innerRef?: object | ((...args: unknown[]) => unknown) | string;
  /**
    Event handler function for `<button>`
  */
  onClick?(...args: unknown[]): unknown;
}
export const ButtonTag: React.FunctionComponent<ButtonTagProps>

export interface CardProps {
  /**
    * Type of card
    */
  type?: "default" | "degree" | "event" | "news" | "story";
  /**
   * Width of card
   */
  width?: "25%" | "50%" | "75%" | "100%";
  /**
   * Enable horizontal mode
   */
  horizontal?: boolean;
  /**
   * Enable clickable card
   */
  clickable?: boolean;
  /**
   * Card target if clickable
   */
  clickHref?: string;
  /**
   * Card title
   */
  title: string;
  /**
    React Font Awesome icon prefix and name string to be rendered in button label. Ex: ['fab', 'drupal']
  */
  icon?: string[];
  /**
   * Card body content
   */
  body?: string;
  /**
   * Event info format
   */
  eventFormat?: "stack" | "inline";
  /**
   * Location
   */
  eventLocation?: string;
  /**
   * Event start time
   */
  eventTime?: string;
  /**
   * Card header image
   */
  image?: string;
  /**
   * Card header image alt text
   */
  imageAltText?: string;
  /**
   * Buttons
   */
  buttons?: {
    ariaLabel?: string,
    color?: "gold" | "maroon" | "gray" | "dark",
    icon?: string[],
    href?: string,
    label?: string,
    onClick?(...args: unknown[]): unknown,
    size?: "default" | "small" | "xsmall",
    target?: "_blank" | "_self" | "_top" | "_parent"
  }[];
  linkLabel?: string;
  linkUrl?: string;
  /**
   * Tags
   */
  tags?: {
    ariaLabel?: string,
    color?: "white" | "gray" | "dark",
    href?: string,
    label?: string,
    onClick?(...args: unknown[]): unknown
  }[];
}
export const Card: React.FunctionComponent<CardProps>

export interface FeedHeaderProps {
  defaultProps?: {
    header?: unknown,
    ctaButton?: unknown,
    dataSource?: unknown,
    maxItems?: number
  };
  header?: {
    color?: "white" | "dark",
    text?: string
  };
  ctaButton?: {
    color?: "gold" | "maroon" | "gray" | "dark",
    text?: string
  };
}
export const FeedHeader: React.FunctionComponent<FeedHeaderProps>

export interface FeedContainerProviderProps {
  renderHeader?: React.ReactElement;
  renderBody?: React.ReactElement;
  maxItems?: number;
  dataTransformer?(...args: unknown[]): unknown;
  dataFilter?(...args: unknown[]): unknown;
  noFeedText?: string;
}
export const FeedContainerProvider: React.FunctionComponent<FeedContainerProviderProps>

export const FeedContext: React.Context<{
  value: {
    feeds: any[]
  }
}>

export const FeedBody: React.FunctionComponent<{
  children?: React.ReactElement;
}>

export interface HeroProps {
  type?: "heading-hero" | "story-hero";
  image?: ImageProps;
  title?: ContentProps;
  subTitle?: ContentProps;
  contents?: ContentProps[];
  contentsColor?: string;
}
export const Hero: React.FunctionComponent<HeroProps>

export interface PaginationProps {
  /**
   * Type of pagination
   */
  type: "default" | "bordered";
  /**
   * Background of pagination
   */
  background: "white" | "gray1" | "gray2" | "gray7";
  /**
   * Current page
   */
  currentPage?: number;
  /**
   * Total number of pages
   */
  totalPages?: number;
  /**
   * Show first page button
   */
  showFirstButton?: boolean;
  /**
   * Show last page button
   */
  showLastButton?: boolean;
  /**
   * Total number of pages to show. Should be an odd number to center the current page un the middle
   */
  totalNumbers?: number;
  /**
   * Callback fired when the page is changed.
   */
  onChange(...args: unknown[]): unknown;
}
export const Pagination: React.FunctionComponent<PaginationProps>

export interface TabbedPanelsProps {
  panels?: {
    text?: string,
    id?: string,
    title?: string,
    content?: React.ReactElement
  }[];
  bgColor?: string;
}
export const TabbedPanels: React.FunctionComponent<TabbedPanelsProps>

export interface TestimonialProps {
  quote: {
    title?: string,
    content?: string,
    cite?: {
      name?: string,
      description?: string
    }
  };
  imageSource?: string;
  imageAltText?: string;
  itemStyle?: {
    containerCssClass?: string[],
    titleCssClass?: string[],
    contentCssClass?: string[]
  };
}
export const Testimonial: React.FunctionComponent<TestimonialProps>

export interface VideoProps {
  type?: "video" | "youtube";
  url?: string;
  vttUrl?: string;
  title?: string;
  className?: string;
  caption?: string;
}
export const Video: React.FunctionComponent<VideoProps>

export interface ContentProps {
  text?: string;
  maxWidth?: string;
  cssClass?: string[];
  highlightColor?: "gold" | "black";
}

export interface ImageProps {
  url?: string;
  altText?: string;
  cssClass?: string[];
  size?: "small" | "medium" | "large";
}

export interface FetchResponse<E> {
  data: E
  loading: boolean
  error: object
}
export function useFetch<T>(): [FetchResponse<T>, (url: string) => void];
