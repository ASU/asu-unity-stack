# ASU Cookie Consent
ASU Web Standards-based implementation of Cookie Consent.

This is a small react component with the implementation of ASU Cookie Consent.

## Architecture details
This component is a simple react application, that shows the cookie consent banner depending on the `localStorage` value setted. When a user accept or close the banner we set a pair, key/value on the `localStorage` to continue or not showing the banner in the future.
The initialization of this component is the same as all the packages, so it can keep uniqueness between all of them. For this, we use two methods:
 - `createElement`: this is provided by React. It creates a new React element. Click to read more about [createElement](https://reactjs.org/docs/react-api.html#createelement) and [react without jsx](https://reactjs.org/docs/react-without-jsx.html).
 - `render`: this is provided by ReactDOM library. It is used to render the react element in the DOM. Click to read more about [render](https://reactjs.org/docs/react-dom.html).
The way it works is: when the initializer function is called, this creates the element with the props provided and the react component.Then it is rendered on the DOM.

### Component props documentation

You can find a full list of props into the [docs/README.props.md](docs/README.props.md)

## CLI Commands

``` bash
# add component-footer
yarn add @asu-design-system/component-cookie-consent

# run storybook
yarn storybook

# build for production with minification
yarn build

# run tests
yarn test

```

## How to install

1. Make sure you are set up to use the private npm registry at registry.web.asu.edu. See instructures in the 'How to use private package registry' here: [README.md](../../README.md)
2. ```yarn add @asu-design-system/component-cookie-consent@dev```

## Use as a JS module in React app

### Default import
```JAVASCRIPT
    import { CookieConsent } from '@asu-design-system/component-cookie-consent@dev'
```

### Aliased import
```JAVASCRIPT
  import { CookieConsent } from '@asu-design-system/component-cookie-consent@dev'
```

### Import for use in HTML page
You can find an example of how to set `CookieConsent` props [here](/packages/component-cookie-consent/examples/cookie-consent.html)

## Future improvements
All the requirements for this component were covered, so there is no need of any further enhancements at the moment this is being written.

