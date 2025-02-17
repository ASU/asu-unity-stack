/// <reference types="vite/client" />

// Extend the Window interface to include initDataLayer
interface Window {
  initDataLayer: () => void;
}
