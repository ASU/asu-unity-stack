import render from "preact-render-to-string";

import { h } from "preact";
import { Header } from "./components/Header";
import { renderStylesToString } from "emotion-server";
import { NavTreeMega } from "./components/Nav/NavTreeExample";

/* TODO: see if we can generate completelys static example
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
  HeaderTemplate = renderStylesToString(
    render(<Header dangerouslyGenerateStub={true} />)
  );
} catch (error) {
  // handle error
  console.error(error);
} finally {
}

try {
  FullExample = renderStylesToString(
    render(
      <Header
        navTree={NavTreeMega}
        title={"Ira A. Fulton Schools of Engineering"}
        subtitle={
          "School of Computing, Informatics, and Decisions Systems Engineering"
        }
      />
    )
  );
} catch (error) {
  // handle error
  console.error(error);
} finally {
}

try {
  MobileTemplate = renderStylesToString(render(<Header />));
} catch (error) {
  // handle error
  console.error(error);
} finally {
}

export { HeaderTemplate, FullExample, MobileTemplate };
