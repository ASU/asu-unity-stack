# ASU Degree Pages

ASU Web Standards-based implementation of the Degree page component

## Dependencies

1. [React](https://reactjs.org/)
2. [Font Awesome](https://fontawesome.com/)
- - [CDN link](https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.1/js/all.min.js)

In order to use ASU Web Standards 2.0 you must install the
ASU Design System Bootstrap 4 theme
```yarn add @asu-design-system/bootstrap4-theme```
or in some other manner provide the styles required.

## CLI Commands

``` bash
# add app-degree-pages
yarn add @@asu-design-system/app-degree-pages

# run storybook
yarn storybook

# build for production with minification
yarn build

# run tests
yarn test

```

## How to install

1. Make sure you are set up to use the private npm registry at registry.web.asu.edu.
<br/>See instructures in the 'How to use private package registry' here: [README.md](../../README.md)
2. ```yarn add @asu-design-system/app-degree-pages```

## Use as a JS module in React app

TODO...

## Use on static HTML page

TODO...

## DegreePage properties

TODO...

## DegreePage Lifecycle

TODO...

### Examples

The folder [packages/app-degree-pages/examples](/packages/app-degree-pages/examples)
<br/>contains examples to use the component on static HTML page

#### Examples - quick links

- [Degree page](/packages/app-degree-pages/examples/degree-page.html)

#### Examples - run and test

If you want to test the examples files you need to install an application server <br />
and run it into the folder `/packages/app-degree-pages/examples`. <br />
For example, if you want to use the `npm` package `lite-server` follow these steps:

- run `npm -g i lite-server`.
<br/>MAC users may need to use `sudo npm -g i lite-server`
- run `cd packages/app-degree-pages`
- run `lite-server`
- open the broweser to the url `http://localhost:3000/examples/degree-page.html`
  <br />(port number may be different)

# References
- [React](https://reactjs.org/)
- [Add React to a Website](https://reactjs.org/docs/add-react-to-a-website.html)
- [Jest APIs](https://jestjs.io/docs/api
- [Jest Fetch Mock](https://www.npmjs.com/package/jest-fetch-mock)
- [Type Checking JavaScript Files](https://www.typescriptlang.org/docs/handbook/type-checking-javascript-files.html)
