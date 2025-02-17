/**
 * This file houses all non-addon related decorators
 */
import { renderToStaticMarkup } from "react-dom/server";
import { Decorator } from "@storybook/react";
import React, { useLayoutEffect, StrictMode } from "react";

import { getBootstrapHTML } from "../src/components/GaEventWrapper/useBaseSpecificFramework";
import { useChannel } from "@storybook/preview-api";

declare global {
  interface Window {
    initDataLayer: () => void;
  }
}

const Full = ({ children, rootRef }) => (
  <div ref={rootRef} id="html-root" className="col uds-full-width">
    {children}
  </div>
);

const UdsContainer = ({ children, rootRef }) => (
  <div className="container">
    <div className="row">
      <div ref={rootRef} id="html-root" className="uds-container">
        {children}
      </div>
    </div>
  </div>
);

const StaticStory = ({ args, Container, children, rootRef }) => {
  useLayoutEffect(() => {
    /**
     * Storybook only useId() will prefix the id with this identifier allowing
     * us to identify when the output is meant for bootstrap (non react)
     */
    const code = getBootstrapHTML(children);
    rootRef.current.innerHTML = code;

    window.initDataLayer();
  }, [args]);
  return <Container rootRef={rootRef}></Container>;
};

export const withContainer: Decorator = (
  StoryFn,
  {
    args,
    globals: { framework = "react" },
    parameters: { layout = "fullscreen" },
  }
) => {
  const root = React.useRef(null);

  const emit = useChannel({ "HTML/CodeUpdated": () => {} });

  let Container = Full;
  if (layout === "container") {
    Container = UdsContainer;
  }
  let html = "";
  let WrappedStory: React.ReactNode;
  if (framework === "bootstrap") {
    html = getBootstrapHTML(<StoryFn />);
    WrappedStory = (
      <StrictMode>
        <StaticStory args={args} Container={Container} rootRef={root}>
          <StoryFn />
        </StaticStory>
      </StrictMode>
    );
  } else {
    html = renderToStaticMarkup(<StoryFn />);
    WrappedStory = (
      <StrictMode>
        <Container rootRef={root}>
          <StoryFn />
        </Container>
      </StrictMode>
    );
  }
  // emit the html So Addon Panel can update
  emit("HTML/CodeUpdated", { code: html });
  return WrappedStory;
};

// ordered from innermost to outermost, be careful with the order!
export const globalDecorators = [withContainer];
