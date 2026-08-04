# ASU Header and Footer
ASU Web Standards-based implementation of global header and footer.

## CLI Commands

``` bash
# add component-header-footer
yarn add @asu/component-header-footer
# or if you use npm
npm install @asu/component-header-footer

```

## How to install

1. Either make sure you are part of the ASU github organization and follow the instructions [here](https://github.com/ASU/asu-unity-stack#-how-to-use-the-private-package-registry) or if you already are, you can clone this repo and run `yarn install` and `yarn build` to build the package locally.
<br/>
1. ```yarn add @asu/component-header-footer```

## Use as a JS module in React app

### Default import
```JAVASCRIPT
import { ASUHeader, ASUFooter } from '@asu/component-header-footer'
```

### Aliased import
```JAVASCRIPT
import { ASUHeader as Header, ASUFooter as Footer } from '@asu/component-header-footer'
```

### Import for use in HTML page
You can find an example of how to set `ASUHeader` and `ASUFooter` props for use in a browser [here](/packages/component-header/examples/global-header-footer.html)

## Theming: brand colors

The header and footer read ASU brand colors (maroon, gold) from Bootstrap's CSS
custom properties, with the standard hex as a fallback — for example
`var(--bs-gold, #ffc627)` and `var(--bs-maroon, #8c1d40)`. This includes gradient
usages such as the selected nav-item underline and the animated title underline.

- **Branded sites** render pixel-identically: with no `--bs-*` overrides present,
  the hex fallback applies.
- **Unbranded (KE) sites**: Webspark's unbranded palette rewrites `--bs-*` in the
  compiled `unity-bootstrap-theme` stylesheet, so the header and footer follow the
  site palette natively — no props or API changes required.

Brand colors are centralized: the header's live in `src/header/colors.js`; the
footer's gold flows through the local `--color-base-gold` custom property in
`src/footer/index.styles.js`. Grays and other neutrals remain fixed literals.
