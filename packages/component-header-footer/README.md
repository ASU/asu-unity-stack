# ASU Header
ASU Web Standards-based implementation of global header.

## CLI Commands

``` bash
# add component-footer
yarn add @asu/component-header

# run storybook
yarn storybook

# build for production with minification
yarn build

# run tests
yarn test

```

## How to install

1. Either make sure you are part of the ASU github organization and follow the instructions [here,](https://github.com/ASU/asu-unity-stack#-how-to-use-the-private-package-registry)or, if you already are, you can clone this repo and run `yarn install` and `yarn build` to build the package locally.
<br/>
1. ```yarn add @asu/component-header```

## Use as a JS module in React app

### Default import
```JAVASCRIPT
    import { ASUHeader } from '@asu/component-header@dev'
```

### Aliased import
```JAVASCRIPT
  import { ASUHeader as Header } from '@asu/component-header@dev'
```

### Import for use in HTML page
You can find an example of how to set `ASUHeader` props [here](/packages/component-header/examples/global-header.html)
