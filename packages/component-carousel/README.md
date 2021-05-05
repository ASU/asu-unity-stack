# ASU Carousel
ASU Web Standards-based implementation of @glidejs/glide npm library carousel.

## Dependencies

1. [Preact](https://preactjs.com/)
2. [GlideJS](https://glidejs.com/)

In order to use Web Standards 2.0 cards in your Carousel, you must install the
ASU Design System Bootstrap 4 theme
```yarn add @asu-design-system/bootstrap4-theme```
or in some other manner provide the styles required.

## CLI Commands

``` bash
# add component-carousel
yarn add @asu-design-system/component-carousel

# run storybook
yarn storybook

# build for production with minification
yarn build

# run tests
yarn test

```

## How to install

1. Make sure you are set up to use the private npm registry at registry.web.asu.edu. See instructures in the 'How to use private package registry' here: [README.md](../../README.md)
2. ```yarn add @asu-design-system/component-carousel@dev```


## Use as a JS module in React app

```JAVASCRIPT
    import { AsuCarousel } from '@asu-design-system/component-carousel@dev'

    // Define your carousel items. Contents of "item:" should be a Unity
    // Design System Card. Only one example provided below.
    const myCarouselItems = [
        {
          id: 1,
          imageSource: "https://source.unsplash.com/random/500x400?a=-1",
          altText: "Card image cap",
          title: "Card 1",
          content:
            "Body 1 copy goes here. Limit to 5 lines max. Lorem ipsum dolor sit\n      amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt\n      ut labore et dolore magna aliqua eiusmod tempo.",
          buttonLink: {
            url: "#",
            text: "Button link here",
          },
        },
        {
          id: 2,
          imageSource: "https://source.unsplash.com/random/300x400?a=0",
          altText: "Card image cap",
          title: "Card 2",
          content: "Body 2 ....",
          buttonLink: {
            url: "#",
            text: "..",
          },
        },
        {
          id: 3,
          imageSource: "https://source.unsplash.com/random/400x400?a=1",
          altText: "Card image cap",
          title: "Card 3",
          content: "Body 3 ....",
          buttonLink: {
            url: "#",
            text: "..",
          },
        },
        {
          id: 4,
          imageSource: "https://source.unsplash.com/random/200x200?a=2",
          altText: "Card image cap",
          title: "Card 4",
          content: "Body 4 ......",
          buttonLink: {
            url: "#",
            text: "..",
          },
        },
      ];

    // Build out the component, providing your carousel items and setting the
    // perView prop to either 1, 2 or 3 to define number of slides to show at a
    // time.
    const App = (props) => {
      return (
        <div>
          <CardCarousel perView="1" cardItems={myCarouselItems} />
        </div>
      )
    };

    export default App;

```

## Use on static HTML page (illustrating multiple carousels)

```HTML
<!-- Provide target divs for two carousels. Must have unique ids. -->
<div id="carouselContainer"></div>
<div id="anotherCarouselContainer"></div>

<!-- include bundled scripts from Preact packages -->
<script src="/node_modules/@asu-design-system/component-carousel/dist/vendor.production.js"></script>
<script src="/node_modules/@asu-design-system/component-carousel/dist/core.production.js"></script>
<script>
  // Setup and initialize the first carousel.
  var props = {
    targetSelector: "#carouselContainer",
    carouselItems: myCarouselItems, // See myCarouselItems example above.
    perView: 3,
    maxWidth: "100%", // Is not mandatory
  };
  // No need to provide target ID as carouselContainer is the default.
  componentCarousel.initCarousel(props);

  // Setup and initialize the second carousel.
  AsuWebcarousel.initCardCarousel({
    targetSelector: "#anotherCarouselContainer",
    props: {
      cardItems: differentCarouselItems,// To be built by implementer.
      perView: 1,
      maxWidth: "500px", // Is not mandatory
    },
  });

  componentCarousel.initCarousel(props, "anotherCarouselContainer");
</script>

```

## Carousel properties
### Card carousel properties

```JS
/**
 * @typedef {{
 *   id: number | string
 *   imageSource: string
 *   altText:string
 *   title:string
 *   content:string
 *   buttonLink: {
 *    url: string
 *    text: string
 *   }
 *}} CardItem
 */

/**
 * @param {{
 *   perView: string | number
 *   cardItems: CardItem []
 *   maxWidth?: string
 *   width?: string
 *   imageAutoSize?: boolean
 *  }} props
 */
 ```

### Image carousel properties

```JS
/**
 * @typedef {{
 *  id: number
 *  imageSource: string
 *  altText:string
 *  content?: string | h.JSX.Element
 * }} ImageItem
 */

/**
 * @param {{
 *    perView: string | number
 *    imageItems: ImageItem []
 *    maxWidth?: string
 *    width?: string
 *    imageAutoSize?: boolean
 *  }} props
 */
 ```

 ### Image Gallery carousel properties

```JS
/**
 * @typedef {{
 *     id: number,
 *     imageSource: string,
 *     thumbnailSource?: string,
 *     altText:string
 *     content?: any
 * }} ImageCarouselItem
 */

/**
 * @param {{
 *    maxWidth?: string
 *    width?: string
 *    hasContent?: boolean
 *    imageItems: ImageCarouselItem []
 *    imageAutoSize?: boolean
 *  }} props
 */
 ```


 ### Testimonial carousel properties

```JS

  /**
   * @typedef {{
   *  id: number
   *  imageSource?: string
   *  altText?:string
   *  quote: {
   *    title?: string
   *    content: string
   *    cite?: {
   *       name: string
   *       description?: string
   *    }
   *  }
   * }} TestimonialItem
   */

  /**
   * @typedef {{
   *      itemCssClass?: string[]
   *      itemTitleCssClass?: string[]
   *      itemQuoteContentCssClass?: string[]
   * }} ItemCssClass
   */

  /**
   * @param {{
   *    testimonialItems: TestimonialItem[]
   *    maxWidth: string
   *    width?: string
   *    hasPositionIndicators?: boolean
   *    hasNavButtons?: boolean
   *    itemStyle?:ItemCssClass
   *    imageAutoSize?: boolean
   *  }} props
   */
 ```
### All carousel examples

The folder [packages/component-carousel/examples](/packages/component-carousel/examples)
<br/>contains examples to use the carousel on static HTML page

### All carousel examples
- [Card carousel](/packages/component-carousel/examples/card.html)
- [Image Gallery carousel](/packages/component-carousel/examples/image-gallery.html)
- [Image carousel](/packages/component-carousel/examples/image.html)
- [Testimonial carousel](/packages/component-carousel/examples/testimonial.html)
