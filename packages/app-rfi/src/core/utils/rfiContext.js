// @ts-check
import { createContext, useContext } from "react";
/** @typedef {import("../types/rfi-types").RFIContext} RFIContext */

/** @type {RFIContext} */
const defaultCtx = {};

export const RfiContext = createContext(defaultCtx);

/** @returns {RFIContext} */
export const useRfiContext = () => {
  const ctx = useContext(RfiContext);
  if (typeof ctx === "undefined") {
    // eslint-disable-next-line no-console
    console.log(
      "RfiContext is undefined, verify you are calling useRfiContext() as child of a <Rfi> component."
    );
  }
  return /** @returns {RFIContext} */ ctx;
};
