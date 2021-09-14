# ASU Footer
ASU Web Standards-based implementation of news component.

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

### Default import
```JAVASCRIPT
    import { News } from '@asu-design-system/component-news'
```

### Import for use in HTML page
You can find an example of how to set `News` props [here](/packages/component-news/examples/card-list-news.html)

# Component views
The new `News Component` has 3 type of view as the old one:

- Carousel view
- Grid Card view
- List Card view
# Props and settings

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
const filterFields =
["newsUnits", "interests", "audiences"];
```

  Any one dataSource filter value will be checked against every field in the feed source
  which are listed in the file [src/core/constants/filter-fields.js](/packages/component-news/src/core/constants/filter-fields.js) and a value match on any field will result in the news item being included in the output.

