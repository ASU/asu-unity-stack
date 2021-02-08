import render from "preact-render-to-string";

import { Header } from "./components/Header";
import { renderStylesToString } from "emotion-server";
import { NavTreeMega } from "./components/Nav/NavTreeExample";
import { dom } from "@fortawesome/fontawesome-svg-core";

/*
import createEmotionServer from 'create-emotion-server'
import createCache from '@emotion/cache'
import { CacheProvider } from '@emotion/core'
const cache = createCache()
const { extractCritical } = createEmotionServer(cache)

let element = (
  <CacheProvider value={cache}>
    <App />
  </CacheProvider>
)

let { html, css, ids } = extractCritical(renderToString(element))*/

let HeaderTemplate;
let FullExample;
let MobileTemplate;

try {
  HeaderTemplate = `<style type="text/css">${dom.css()}</style>${renderStylesToString(
    render(<Header dangerouslyGenerateStub={true} />)
  )}`;
} catch (error) {
  // handle error
  console.error(error);
} finally {
}

try {
  FullExample = `<style type="text/css">${dom.css()}</style>${renderStylesToString(
    render(
      <Header
        navTree={NavTreeMega}
        title={"Ira A. Fulton Schools of Engineering"}
        subtitle={
          "School of Computing, Informatics, and Decisions Systems Engineering"
        }
      />
    )
  )}`;
} catch (error) {
  // handle error
  console.error(error);
} finally {
}

try {
  MobileTemplate = `<style type="text/css">${dom.css()}</style>${renderStylesToString(
    render(<Header />)
  )}`;
} catch (error) {
  // handle error
  console.error(error);
} finally {
}

export { HeaderTemplate, FullExample, MobileTemplate };
