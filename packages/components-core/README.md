# ASU Components Core
ASU React Core Components.

This component is the react implementation of some of the components of the Bootstrap 4 theme package.
All of these components are listed [below](#examples---quick-links).

## Architecture details
As this package is intended to be the react core components package, each of these components are built in isolation, thats mean that, each component, was thougth to be used in different scenarios in the same way.
For each component there is a `.js` file, that contains the code of that component, a `.test.js` file, that has the unit test within that component. For this last file, we use [React testing library](https://testing-library.com/docs/react-testing-library/intro), that is use in combination with [Jest](https://jestjs.io/). This provide us a nice way to test all the components in terms of what that component paints in the DOM and what user sees. There might be another file on some component folder that contains some specific styling for that component(`.styles.js`). As you may noticed, we are using css in js to code the styles. For this, we make use of [styled-components](https://styled-components.com/) that has a great integration and support in the react ecosystem. The last file included, for each component, is the `.stories.js` one, that one, has the configuration for all the stories that are shown in [Storybook](https://storybook.js.org/) page.
The initialization, for plain Javascript, of each component is the same as all the packages, so it can keep uniqueness between all of them. For this, we use two methods:
 - `createElement`: this is provided by React. It creates a new React element. Click to read more about [createElement](https://reactjs.org/docs/react-api.html#createelement) and [react without jsx](https://reactjs.org/docs/react-without-jsx.html).
 - `render`: this is provided by ReactDOM library. It is used to render the react element in the DOM. Click to read more about [render](https://reactjs.org/docs/react-dom.html).
The way it works is: when the initializer function is called, this creates the element with the props provided and the react component.Then it is rendered on the DOM.
We also have configured [Percy](https://percy.io/) to manage all the visual regression tests. The tests included can be found [here](./src/percyTests/testPage.percy.js). These tests runs on a test stage in the CI pipeline and then are pushed to the percy dashboard. More information about this integration can be found [here](../../tests/README.md#visual-regression-testing).

## Component props documentation

You can find a full list of props into the [docs/README.props.md](docs/README.props.md)

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

## Future improvements
All the requirements for this component were covered, so there is no need of any further enhancements at the moment this is being written.
