// Mostly sourced from QoP's answer here:
// https://stackoverflow.com/questions/36862334/get-viewport-window-height-in-reactjs
import { useState, useEffect } from "preact/compat";

function getWindowDimensions() {
  const canUseDOM = typeof window !== "undefined";

  const { innerWidth: width, innerHeight: height } = canUseDOM
    ? window
    : { innerWidth: 1920, innerHeight: 1080 };
  return {
    width,
    height,
  };
}

export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
}
