import React, { useEffect, useRef } from "react";

import { initMakeItYours } from "./make-it-yours.js";

export {
  contrastRatio,
  emulateReducedMotion,
  emulateTouchInput,
  forceHover,
  realKeyboard,
  realPointer,
  resizeViewport,
  walkRules,
} from "../reimagine/reimagine-helpers.jsx";
export * from "./make-it-yours-markup.js";

// Renders the markup and runs `initMakeItYours` (unless `manual`, the server-markup state).
export const Harness = ({ html, manual = false }) => {
  const ref = useRef(null);
  useEffect(() => {
    if (manual) return undefined;
    return initMakeItYours(ref.current);
  }, [html, manual]);
  return <div ref={ref} dangerouslySetInnerHTML={{ __html: html }} />;
};
