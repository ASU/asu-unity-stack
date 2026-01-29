// Server-side utilities for component rendering scripts
import { JSDOM } from "jsdom";
import DOMPurify from "dompurify";

let isInitialized = false;
let serverDOMPurify = null;

/**
 * Initialize JSDOM environment for server-side rendering
 * This function sets up global DOM objects and DOMPurify for SSR
 */
export async function initializeServerEnvironment() {
  if (isInitialized) {
    return serverDOMPurify;
  }

  try {
    const dom = new JSDOM('<!DOCTYPE html><html><head></head><body></body></html>', {
      url: 'http://localhost',
      pretendToBeVisual: true,
      resources: 'usable'
    });

    global.window = dom.window;
    global.document = dom.window.document;
    global.navigator = dom.window.navigator;
    global.HTMLElement = dom.window.HTMLElement;
    global.Element = dom.window.Element;
    global.Node = dom.window.Node;

    serverDOMPurify = DOMPurify(dom.window);

    isInitialized = true;
    console.log('✅ Server environment initialized successfully');

    return serverDOMPurify;
  } catch (error) {
    console.error('❌ Failed to initialize server environment:', error);
    throw error;
  }
}

/**
 * Get the server-side DOMPurify instance
 */
export function getServerDOMPurify() {
  if (!serverDOMPurify) {
    throw new Error('Server environment not initialized. Call initializeServerEnvironment() first.');
  }
  return serverDOMPurify;
}

/**
 * Clean up server environment
 */
export function cleanupServerEnvironment() {
  if (global.window) {
    global.window.close();
    delete global.window;
    delete global.document;
    delete global.navigator;
    delete global.HTMLElement;
    delete global.Element;
    delete global.Node;
  }

  isInitialized = false;
  serverDOMPurify = null;
  console.log('🧹 Server environment cleaned up');
}
