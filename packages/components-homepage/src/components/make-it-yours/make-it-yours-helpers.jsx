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
// Defined once, in the rankings-cards helpers; the vitest command lives in vitest.config.js.
export { emulateForcedColors } from "../rankings-cards/rankings-cards-helpers.jsx";
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
