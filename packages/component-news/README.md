# ASU News
ASU Web Standards-based implementation of news component.

This component is the React implementation of the old News component(https://github.com/ASU-CLAS/asu-react-news-list) but reusing a lot of the components already developed in `components-core` and `component-carousel`, taking in cosideration good practises, scalability and performance.

The job of this component is listing all the news fetched to the api url provided by the user. It also display a customizable, optional header with a title and a button.

## Architecture details
This component was thought to share architectural aspects with the `component-events` component, this is why we created a component in `components-core`([FeedAnatomy](../components-core/src/components/FeedAnatomy/FeedContainerContext.js)) that has the role of fetching the data to the provided url, transform it using the provided transformer function and filter it using the provided filtering function. This component also creates a [context](https://reactjs.org/docs/context.html) that provides access to the data in all the child components.
This is achieved using the [BaseComponent](./src/core/components/BaseFeed/index.js), that is a high order component(to read more about [high order components](https://reactjs.org/docs/higher-order-components.html)). With this approach we can pass whaterver body we want to render, with the desire url to fetch and the customs tranformer and filtering functions.
The initialization of this component is the same as all the packages, so it can keep uniqueness between all of them. For this, we use two methods:
 - `createElement`: this is provided by React. It creates a new React element. Click to read more about [createElement](https://reactjs.org/docs/react-api.html#createelement) and [react without jsx](https://reactjs.org/docs/react-without-jsx.html).
 - `render`: this is provided by ReactDOM library. It is used to render the react element in the DOM. Click to read more about [render](https://reactjs.org/docs/react-dom.html).
The way it works is: when the initializer function is called, this creates the element with the props provided and the react component.Then it is rendered on the DOM.

## Component views
The new `News Component` has 3 type of view as the old one:

- Carousel view
- Grid Card view
- List Card view
## Props and settings
The props of the components are being typed with the use of [JSDocs](https://jsdoc.app/about-getting-started.html). With this API we can make use of direferent block tags to define prop types. Read more about [@typedef](https://jsdoc.app/tags-typedef.html) and [@param](https://jsdoc.app/tags-param.html) block tags.
The componet can customize by setting the following props

```JS
/**
 *  @typedef {{
 *    color?: "white" | "dark"
 *    text?: string
 * }} FeedHeader
 *
 *  @typedef {{
 *    color?: "gold" | "maroon" | "gray" | "dark"
 *    text?: string
 *    url?: string
 * }} FeedCtaButton
 *
 *  @typedef {{
 *    color?: "gold" | "maroon" | "gray" | "dark"
 *    text?: string
 *    size?: "default" | "small" | "medium" | "large"
 * }} FeedCardButton
 *
 * @typedef {{
 *  url?: string
 *  filters?: string
 * }} DataSource
 *
 * @typedef {{
 *  header?: FeedHeader
 *  ctaButton: FeedCtaButton
 *  cardButton?: FeedCardButton
 *  dataSource: DataSource
 *  maxItems?: number
 * }} FeedType
 */

```

### Component props documentation

You can find a full list of props into the [docs/README.props.md](docs/README.props.md)

## CLI Commands

``` bash
# add component-footer
yarn add @asu-design-system/component-news

# run storybook
yarn storybook

# build for production with minification
yarn build

# run tests
yarn test

```

## How to install

1. Make sure you are set up to use the private npm registry at registry.web.asu.edu. See instructures in the 'How to use private package registry' here: [README.md](../../README.md)
2. ```yarn add @asu-design-system/component-news```

## Use as a JS module in React app

## Default import
```JAVASCRIPT
    import { News } from '@asu-design-system/component-news'
```

## Import for use in HTML page
You can find an example of how to set `News` props [here](/packages/component-news/examples/card-list-news.html)


## Example

```JS
{
  header: {
    color: "dark",
    text: "News carousel"
},
  ctaButton: {
    color: "gold",
    url: "https://news.asu.edu",
    text: "Click to see more news",
  },
  dataSource: {
    url: "/api/mocks/feeds-json",
    filters: "validFilter,more words filter,filter_with_underscore"
  },
  maxItems: 10,
  }
  ```

The prop `filters` needs a special mention.
It is meant to be a string which contains all desired filters separated by a comma `,`

Fields where the filter will be applied

```JS
const filterFields = ["newsUnits", "interests", "audiences", "eventTypes"];
```

Any one dataSource filter value will be checked against every field in the feed source
which are listed in the file [src/core/constants/filter-fields.js](/packages/component-news/src/core/constants/filter-fields.js) and a value match on any field will result in the news item being included in the output.

## Future improvements
All the requirements for this component were covered, so there is no need of any further enhancements at the moment this is being written.
