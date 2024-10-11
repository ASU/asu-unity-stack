/// <reference types="vite/client" />

// vite browser throws type error if this is not available globally
interface ExpectPollOptions {
  interval?: number;
      timeout?: number;
      message?: string;
}
