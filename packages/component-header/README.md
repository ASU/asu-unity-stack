# ASU Footer
ASU Web Standards-based implementation of global footer.

## CLI Commands

``` bash
# add component-footer
yarn add @asu-design-system/component-header

# run storybook
yarn storybook

# build for production with minification
yarn build

# run tests
yarn test

```

## How to install

1. Make sure you are set up to use the private npm registry at registry.web.asu.edu. See instructures in the 'How to use private package registry' here: [README.md](../../README.md)
2. ```yarn add @asu-design-system/component-header@dev```


## Use as a JS module in React app

### Default import
```JAVASCRIPT
    import { ASUHeader } from '@asu-design-system/component-header@dev'
```

### Aliased import
```JAVASCRIPT
  import { ASUHeader as Header } from '@asu-design-system/component-header@dev'
```

### Import for use in HTML page
```HTML
<html>
  <head>
    <!-- Add scripts to include react -->
    <script
      src="https://unpkg.com/react@17/umd/react.production.min.js"
      crossorigin
    ></script>
    <script
      src="https://unpkg.com/react-dom@17/umd/react-dom.production.min.js"
      crossorigin
    ></script>
  </head>
  <body>
    <h1>Header Test</h1>
    <!-- Create target container -->
    <div id="asu-header"></div>

    <script src="./vendor.production.js"></script>
    <script src="./Header.production.js"></script>
    <script>
      // Setup props for footer - TODO
      var props = {};

      AsuFooter.initASUFooter({
        targetSelector: '#asu-header',
        props: props
      });
    </script>
  </body>
</html>

```
