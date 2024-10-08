// @ts-check
import { useState, useEffect } from "react";

/**
 * @param {string} breakpoint // String breakpoint with "px"
 */

const useIsMobile = breakpoint => {
  const isMobileQuery = window?.matchMedia(`(max-width: ${breakpoint})`);
  const [isMobile, setIsMobile] = useState(isMobileQuery?.matches);

  const setMobile = e => {
    setIsMobile(e.matches);
  };

  useEffect(() => {
    isMobileQuery.addEventListener("change", setMobile);
    return () => isMobileQuery.removeEventListener("change", setMobile);
  }, []);

  return isMobile;
};

export { useIsMobile };
