// @ts-check
import { render, cleanup } from "@testing-library/react";
import React from "react";

import { ASUFooter } from ".";

import { completeState } from "../../__mocks__/data/props-mock";

// styled-components v6 injects its rules as <style> text nodes in non-production
// (Jest sets NODE_ENV=test), so the compiled CSS is readable from the DOM.
const getInjectedCss = () =>
  Array.from(document.querySelectorAll("style"))
    .map(styleEl => styleEl.textContent || "")
    .join("");

describe("footer brand gold custom property", () => {
  afterEach(cleanup);

  it("defines --color-base-gold from --bs-gold with the current hex as fallback", () => {
    render(<ASUFooter {...completeState} />);
    // Tolerate stylis whitespace normalization around the colon and comma.
    expect(getInjectedCss()).toMatch(
      /--color-base-gold\s*:\s*var\(\s*--bs-gold\s*,\s*#ffc627\s*\)/
    );
  });
});
