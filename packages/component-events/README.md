# ASU Footer
ASU Web Standards-based implementation of events component.

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

# Component views
 The new `Events Component` has 2 types of views as the old one:

 - Grid Card view
 - List Card view
 # Props and settings

 The componet can customize by setting the following props

 ```JS
 /**
  *  @typedef {{
  *    color?: string
  *    text?: string
  * }} FeedHeader
  *
  *  @typedef {{
  *    color?: string
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
  *  header: FeedHeader
  *  ctaButton: FeedCtaButton
  *  dataSource: DataSource
  *  maxItems?: number
  * }} FeedType
  */
 ```

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
The prop `filters` need a special mention.
It is meant to be a string which contains all desired filters separated by a comma `,`
