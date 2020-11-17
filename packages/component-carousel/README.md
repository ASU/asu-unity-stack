# ASU Carousel
ASU Web Standards-based implementation of @glidejs/glide npm library carousel.

## Dependencies

1. [Preact](https://preactjs.com/)
2. [GlideJS](https://glidejs.com/)

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

```
    import { AsuCarousel } from '@asu-design-system/component-carousel@dev'

    // Define your carousel items. Contents of "item:" should be a Unity
    // Design System Card. Only one example provided below.
    const myCarouselItems = [
      {
        id: 1,
        item: (
          <div className="card">
            <img
              className="card-img-top"
              src="https://source.unsplash.com/random/800x400?a=1"
              alt="Card image cap"
            ></img>
            <div className="card-header">
              <h3 className="card-title">Card One</h3>
            </div>
            <div className="card-body">
              <p className="card-text">
                Body copy goes here. Limit to 5 lines max. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                ut labore et dolore magna aliqua eiusmod tempo.{" "}
              </p>
            </div>
            <div className="card-button">
              <a href="#" className="btn btn-maroon">
                Button link here
              </a>
            </div>
          </div>
        ),
      },
      {
        id: 2,
        item: (
          <div className="card">
          ... rest of card markup here.
          </div>
        ),
      },
      {
        id: 3,
        item: (
          <div className="card">
          ... rest of card markup here.
          </div>
        ),
      },
      {
        id: 4,
        item: (
          <div className="card">
          ... rest of card markup here.
          </div>
        ),
      },
      {
        id: 5,
        item: (
          <div className="card">
          ... rest of card markup here.
          </div>
        ),
      },
    ];

    // Build out the component, providing your carousel items and setting the
    // perView prop to either 1, 2 or 3 to define number of slides to show at a
    // time.
    const App = (props) => {
      return (
        <div>
          <AsuCarousel perView="3" carouselItems={myCarouselItems}></AsuCarousel>
        </div>
      )
    };

    export default App;

```

## Use on static HTML page (illustrating multiple carousels)

```
<!-- Provide target divs for two carousels. Must have unique ids. -->
<div id="carouselContainer></div>
<div id="anotherCarouselContainer></div>

<!-- include bundled scripts from Preact packages -->
<script src="/node_modules/@asu-design-system/component-carousel/dist/vendor.production.js"></script>
<script src="/node_modules/@asu-design-system/component-carousel/dist/core.production.js"></script>

<script>

  // Setup and initialize the first carousel.
  var props = {
    perView: 3,
    carouselItems: myCarouselItems, // See myCarouselItems example above.
  };
  // No need to provide target ID as carouselContainer is the default.
  componentCarousel.initCarousel(props);

  // Setup and initialize the second carousel.
  var differentProps = {
    perView: 1,
    carouselItems: differentCarouselItems, // To be built by implementer.
  };
  // If deploying to a target id other than the default, you must specify it.
  componentCarousel.initCarousel(props, "anotherCarouselContainer");
</script>

```
