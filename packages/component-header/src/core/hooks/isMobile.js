// @ts-check
import { useState, useEffect } from "react";

/**
 * @param {string} breakpoint // String breakpoint with "px"
 */

const useIsMobile = breakpoint => {
  const breakpointVal = parseInt(breakpoint.split("p")[0], 10);
  const [isMobile, setIsMobile] = useState(window?.innerWidth <= breakpointVal);
  const isMobileQuery = window.matchMedia(`(max-width: ${breakpoint})`);

  const setMobile = e => {
    setIsMobile(e.matches);
  };

  useEffect(() => {
    // Set window resize listener
    isMobileQuery.addEventListener("change", setMobile);
    return () => isMobileQuery.removeEventListener("change", setMobile);
  }, []);

  return isMobile;
};

export { useIsMobile };
