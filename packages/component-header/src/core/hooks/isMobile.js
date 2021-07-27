// @ts-check
import { useState, useEffect } from "react";

/**
 * @param {string} breakpoint // String breakpoint with "px"
 */

const useIsMobile = breakpoint => {
  const [isMobile, setIsMobile] = useState(false);
  const isMobileQuery = window.matchMedia(`(max-width: ${breakpoint})`);

  const setMobile = e => {
    setIsMobile(e.matches);
  };

  useEffect(() => {
    // Set window resize listener
    isMobileQuery.addEventListener("change", e => setMobile(e));
    return () => isMobileQuery.removeEventListener("change", e => setMobile(e));
  }, []);

  useEffect(() => {
    // Set initial isMobile state
    const breakpointVal = parseInt(breakpoint.split("p")[0], 10);
    if (window?.innerWidth <= breakpointVal) setIsMobile(true);
  }, []);

  return isMobile;
};

export { useIsMobile };
