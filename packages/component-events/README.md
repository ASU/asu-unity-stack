# ASU Events
ASU Web Standards-based implementation of events component.

This component is the React implementation of the old D8 Events component(https://github.com/ASU-CLAS/asu-react-d8events) but reusing a lot of the components already developed in `components-core` and `component-carousel`, taking in cosideration good practises, scalability and performance.

The job of this component is listing all the events fetched to the api url provided by the user. It also display a customizable, optional header with a title and a button.

## Architecture details
This component was thought to share architectural aspects with the `component-news` component, this is why we created a component in `components-core`([FeedAnatomy](../components-core/src/components/FeedAnatomy/FeedContainerContext.js)) that has the role of fetching the data to the provided url, transform it using the provided transformer function and filter it using the provided filtering function. This component also creates a [context](https://reactjs.org/docs/context.html) that provides access to the data in all the child components.
This is achieved using the [BaseComponent](./src/core/components/BaseFeed/index.js), that is a high order component(to read more about [high order components](https://reactjs.org/docs/higher-order-components.html)). With this approach we can pass whaterver body we want to render, with the desire url to fetch and the customs tranformer and filtering functions.
The initialization of this component is the same as all the packages, so it can keep uniqueness between all of them. For this, we use two methods:
 - `createElement`: this is provided by React. It creates a new React element. Click to read more about [createElement](https://reactjs.org/docs/react-api.html#createelement) and [react without jsx](https://reactjs.org/docs/react-without-jsx.html).
 - `render`: this is provided by ReactDOM library. It is used to render the react element in the DOM. Click to read more about [render](https://reactjs.org/docs/react-dom.html).
The way it works is: when the initializer function is called, this creates the element with the props provided and the react component.Then it is rendered on the DOM.

## Component views
 The new `Events Component` has 2 types of views:

 - Grid Card view
 - List Card view
## Props and settings

 The componet can be customized by setting the following props

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
  * @typedef {{
  *  url?: string
  *  filters?: string
  * }} DataSource
  *
  * @typedef {{
  *  header?: FeedHeader
  *  ctaButton?: FeedCtaButton
  *  dataSource: DataSource
  *  maxItems?: number
  * }} FeedType
  */
 ```

## CLI Commands

``` bash
# add component-footer
yarn add @asu-design-system/component-events

# run storybook
yarn storybook

# build for production with minification
yarn build

# run tests
yarn test

```

## How to install

1. Make sure you are set up to use the private npm registry at registry.web.asu.edu. See instructures in the 'How to use private package registry' here: [README.md](../../README.md)
2. ```yarn add @asu-design-system/component-events```

## Use as a JS module in React app

### Default import
```JAVASCRIPT
    import { Events } from '@asu-design-system/component-events'
```

### Import for use in HTML page
You can find an example of how to set `Events` props [here](/packages/component-events/examples/cardsGridEvents.html)

## Example

```JS
{
   header: { color: "dark", text: "Events list" },
   ctaButton: {
     color: "gold",
     url: "https://news.asu.edu",
     text: "Click to see more events",
   },
   dataSource: {
     url: "/api/mocks/feeds-json",
     filters: "easy_on_the_wallet,alumni_association,staff,sports",
   },
 }
```
The prop `filters` needs a special mention.
It is meant to be a string which contains all desired filters separated by a comma `,`

Fields where the filter will be applied

```JS
const filterFields = ["eventTopics", "eventUnits", "interests", "audiences"];
```

Any one dataSource filter value will be checked against every field in the feed source
which are listed in the file [src/core/constants/filter-fields.js](/packages/component-events/src/core/constants/filter-fields.js) and a value match on any field will result in the events item being included in the output.
If there is the need of adding or removing filter field, this could be easily done in the filters array mentioned above.

## Future improvements
All the requirements for this component were covered, so there is no need of any further enhancements at the moment this is being written.
