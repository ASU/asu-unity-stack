# ASU Components Core
ASU React Components.

## CLI Commands

``` bash
# add component-carousel
yarn add @asu-design-system/components-core

# run storybook
yarn storybook

# build for production with minification
yarn build

# run tests
yarn test

```

## How to install

1. Make sure you are set up to use the private npm registry at registry.web.asu.edu. See instructures in the 'How to use private package registry' here: [README.md](../../README.md)
2. Make sure to have included [FontAwesome](https://fontawesome.com/) on your project to allow icons to be shown
3. ```yarn add @asu-design-system/components-core@dev```


## Use as a JS module in React app

```JAVASCRIPT
    import { Card } from '@asu-design-system/components-core@dev'

    // Build out the component, providing the options depending on the card you wanna
    // have.
    // Example provided below
    const App = (props) => {
      return (
        <div>
          <Card
            type="default"
            horizontal={false}
            clickable={false}
            image="https://picsum.photos/300 200"
            imageAltText="An example image"
            title="Default title"
            body ="Body copy goes here. Limit to 5 lines max. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua eiusmod tempo."
            buttons= {[
              {
                color: "maroon",
                size: "default",
                label: "CTA button",
              },
              {
                color: "gold",
                size: "small",
                label: "CTA button",
              },
            ]}
            tags={[
              { color: "gray", label: "tag1", href: "/#example-link" },
              { color: "gray", label: "tag2", href: "/#example-link" },
              { color: "gray", label: "tag3", href: "/#example-link" },
            ]}
          />
        </div>
      )
    };

    export default App;

```

## Use on static HTML page

```HTML
<!-- Provide target divs for two carousels. Must have unique ids. -->
<div id="default-card"></div>
<div id="icon-card"></div>

<!-- Include font awesome -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
  integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w=="
  crossorigin="anonymous" referrerpolicy="no-referrer" />
<script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/js/v4-shims.min.js"
  integrity="sha512-1ND726aZWs77iIUxmOoCUGluOmCT9apImcOVOcDCOSVAUxk3ZSJcuGsHoJ+i4wIOhXieZZx6rY9s6i5xEy1RPg=="
  crossorigin="anonymous" referrerpolicy="no-referrer"></script>

<!-- include bundled scripts from Preact packages -->
<script src="/node_modules/@asu-design-system/component-carousel/dist/vendor.production.js"></script>
<script src="/node_modules/@asu-design-system/component-carousel/dist/core.production.js"></script>
<script>
  // Setup and initialize one card.
  AsuWebCore.initCard({
    targetSelector: "#default-card",
    props: {
      type: "default",
      horizontal: false,
      clickable: false,
      image: "https://picsum.photos/300/200",
      imageAltText: "An example image",
      title: "Default title",
      body:
          "Body copy goes here. Limit to 5 lines max. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua eiusmod tempo.",
      buttons: [
        {
          color: "maroon",
          size: "default",
          label: "CTA button",
        },
        {
          color: "gold",
          size: "small",
          label: "CTA button",
        },
      ],
      tags: [
        { color: "gray", label: "tag1", href: "/#example-link" },
        { color: "gray", label: "tag2", href: "/#example-link" },
        { color: "gray", label: "tag3", href: "/#example-link" },
      ],
    },
  });
  // Setup and initialize second card.
  AsuWebCore.initCard({
    targetSelector: "#icon-card",
    props: {
      type: "default",
      horizontal: false,
      clickable: false,
      title: "Default title",
      body:
        "Body copy goes here. Limit to 5 lines max. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua eiusmodtempo.",
      buttons: [
        {
          color: "maroon",
          size: "default",
          label: "Button text",
        },
      ],
      icon: ["fas", "newspaper"],
    },
  });
</script>

```
### Examples

The folder [packages/components-core/examples](/packages/components-core/examples)
<br/>contains examples to use all the core components on static HTML pages

#### Examples - quick links

- [Accordion](/packages/components-core/examples/accordion.html)
- [Anchor Menu](/packages/components-core/examples/anchorMenu.html)
- [Article](/packages/components-core/examples/article.html)
- [Article](/packages/components-core/examples/article.html)
- [Button](/packages/components-core/examples/button.html)
- [Button Icon Only](/packages/components-core/examples/buttonIconOnly.html)
- [Button Tag](/packages/components-core/examples/buttonTag.html)
- [Card](/packages/components-core/examples/carg.html)
- [Hero](/packages/components-core/examples/hero.html)
- [Pagination](/packages/components-core/examples/pagination.html)
- [Testimonial](/packages/components-core/examples/testimonial.html)
- [Video](/packages/components-core/examples/video.html)

#### Examples - run and test

If you want to test the examples files you need to install an application server <br />
and run it into the folder `/packages/components-core/examples`. <br />
For example, if you want to use the `npm` package `lite-server` follow these steps:

- run `npm -g i lite-server` . MAC users may need to use `sudo npm -g i lite-server`
- run `cd packages/components-core`
- run `lite-server`
- open the broweser to the url `http://localhost:3000/examples/card.html`
  (port number may be different)

## Component props documentation

You can find a full list of props into the [docs/README.props.md](docs/README.props.md)
