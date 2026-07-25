/// <reference types="vite/client" />

// Make JSX namespace globally available for JSDoc @returns {JSX.Element} annotations
// React 19 no longer exposes JSX as a global namespace
import type { JSX } from "react";
export { JSX };
declare global {
  namespace JSX {
    interface Element extends React.JSX.Element {}
    interface IntrinsicElements extends React.JSX.IntrinsicElements {}
  }
}

// vite browser throws type error if this is not available globally
interface ExpectPollOptions {
  interval?: number;
      timeout?: number;
      message?: string;
}

// Google Analytics dataLayer global
declare global {
  interface Window {
    dataLayer: Record<string, unknown>[];
  }
}
