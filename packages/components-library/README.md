# ASU Unity Design System Preact Components Library

ASU-branded Preact components. Built on the same API as React components with the benefit a much smaller build size.

## Dependencies

1. [Preact](https://preactjs.com/)
2. [emotion](https://emotion.sh/docs/introduction)


## CLI Commands

``` bash

# run storybook
yarn storybook

# build for production with minification
yarn build

# run tests
yarn test

```

## How to install

1. Make sure you are set up to use the private npm registry at registry.web.asu.edu. See instructures in the 'How to use private package registry' here: [README.md](../../README.md)
2. ```yarn add @asu-design-system/components-library@dev```


## Use as a JS module in React app

```
    import { Header } from '@asu-design-system/components-library@dev'


    const App = (props) => {
      return (
        <div>
          <Header {..props}>
      )</div>
    };

    export default App;

```

## Use on static HTML page

```
<!-- Header  will  be initialized in this container. If a different  ID needs to be targeted,  pass as 2nd argument to 'initHeader()' function -->
<div id="headerContainer></div>

<!-- include bundled scripts from Preact packages -->
<script src="/node_modules/@asu-design-system/components-library/dist/vendor.js"></script>
<script src="/node_modules/@asu-design-system/components-library/dist/components-library.js"></script>

<script>

  var props = {
    navTree: NavTree,
    title: "Ira A. Fulton Schools of Engineering",
    baseUrl: "/kitchen-sink"
  };

  componentsLibrary.initHeader(props);
</script>

```


