import { renderStylesToString } from "@emotion/server";
import { dom } from "@fortawesome/fontawesome-svg-core";
import render from "preact-render-to-string";

import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { NavTreeMega } from "./components/Nav/NavTreeExample";


let HeaderTemplate;
let FullExample;
let FooterTemplate;

// Generates a header template with a 'stub' div which can later be replaced with
// an include directive. This allows the template to be injected with static markup
// which acts a placeholder until Preact can initialize menu functionality.
// See the script located under scripts/prerender-templates.js for how that's done
try {
  HeaderTemplate = `<style type="text/css">${dom.css()}</style>${renderStylesToString(
    render(<Header dangerouslyGenerateStub={true} />)
  )}`;
} catch (error) {
  // handle error
  console.error(error);
} finally {
}

// Full pre-rendered example can be useful for seeing the general markup which
// can be injected into the 'stub' templates
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
  FooterTemplate = `${renderStylesToString(
    render(<Footer />)
  )}`;
} catch (error) {
  // handle error
  console.error(error);
} finally {
}

export { HeaderTemplate, FullExample, FooterTemplate };
