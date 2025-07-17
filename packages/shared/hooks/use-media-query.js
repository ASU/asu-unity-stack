// @ts-check

import { useState, useEffect } from "react";

/**
 *
 * @param {string} query
 * @returns {boolean}
 */
function useMediaQuery(query) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    // when the page first loaded
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    // when the page changed view port
    const listener = () => {
      setMatches(media.matches);
    };

    media.addEventListener("change", listener);

    return () => media.removeEventListener("change", listener);
  }, [matches, query]);

  return matches;
}

export { useMediaQuery };
