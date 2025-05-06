/**
 * This file houses all non-addon related decorators
 */
import { Decorator } from "@storybook/react";
import React, { forwardRef, ReactNode, StrictMode, useEffect } from "react";

import { getBootstrapHTML } from "../src/components/GaEventWrapper/useBaseSpecificFramework";
import { useChannel } from "@storybook/preview-api";

type ContainerComponent<T, P = HTMLElement> = React.ForwardRefExoticComponent<T & React.RefAttributes<P>>;

declare interface ContainerProps {
  children?: ReactNode;
  dangerouslySetInnerHTML?: {
    __html: string;
  };
}

const Full:ContainerComponent<ContainerProps, any> = forwardRef((props, ref) => {
  return (
  <div ref={ref} className="col uds-full-width" {...props}/>
)});

const UdsContainer:ContainerComponent<ContainerProps, any> = forwardRef((props, ref) => {
  return (
  <div className="container">
    <div className="row">
      <div ref={ref} className="uds-container" {...props}/>
    </div>
  </div>
)});

export const withContainer: Decorator = (
  StoryFn,
  {
    args,
    globals,
    parameters: { layout = "fullscreen" },
    viewMode,
  }
) => {
  let { framework = "react" } = globals;
  // Doc page will only render react framework
  if(viewMode === "docs") {
    framework = "react";
  }
  const isBootstrap = framework === "bootstrap";
  const root = React.useRef(null as any);

  const emit = useChannel({ "HTML/CodeUpdated": () => {} });

  const mount = () => {
    if (root.current) {
      if (isBootstrap) {
        // custom events created by eventSpy.js to allow storybook to dispatch load events after the page is loaded
        document.dispatchEvent(new Event("sb_DOMContentLoaded"));
        window.dispatchEvent(new Event('sb_load'));
      }

      emit("HTML/CodeUpdated", { code: root.current.innerHTML });
    }
  }

  const unmount = () => {
    // console.log("sb unmounting");
    if (isBootstrap) {
      // bootstrap script has functionality initiated with window load event,
      // so we need to reload the page every time we unmount the story.
      // We set the opacity to 0 to avoid flickering.
      document.body.style.opacity = "0";

      // @ts-ignore
      window.unloading = true; // variable to prevent calling mount function before the page is reloaded

      // adding this timeout allows controls time to update
      setTimeout(()=>{window.location.reload()}, 100);
    }
  }

  useEffect(() => {
    // @ts-ignore
    if (!window.unloading) {
      mount()
    }
    return unmount
  }, [StoryFn, args, framework]);

  let Container = Full;
  if (layout === "container") {
    Container = UdsContainer;
  }

  return (
    <StrictMode>
      {
        isBootstrap
        ? <Container ref={root} dangerouslySetInnerHTML={{ __html: getBootstrapHTML(<StoryFn {...args}/>)}}/>
        : <Container ref={root}>
          <StoryFn {...args}/>
        </Container>
      }
    </StrictMode>
  );
};

// ordered from innermost to outermost, be careful with the order!
export const globalDecorators = [
  withContainer
];
