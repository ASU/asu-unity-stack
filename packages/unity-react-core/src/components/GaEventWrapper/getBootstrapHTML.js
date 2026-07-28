// Storybook/dev-tooling only: renders a component to static HTML to preview
// its "Bootstrap" (non-React, static markup + vanilla JS) consumption path.
// Deliberately kept out of useBaseSpecificFramework.js, which every
// component imports at runtime for the isBootstrap/isReact hook — importing
// react-dom/server there would bundle server-rendering internals into every
// consuming app's dist output for no benefit.
import { renderToStaticMarkup } from "react-dom/server";

import { identifierPrefix } from "./useBaseSpecificFramework";

export const getBootstrapHTML = jsx =>
  renderToStaticMarkup(jsx, { identifierPrefix });
