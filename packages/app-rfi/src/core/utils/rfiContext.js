// @ts-check
import { createContext, useContext } from "react";
/** @typedef {import("../types/rfi-types").RFIProps} RFIProps */

/** @type {RFIProps | any} */
const defaultCtx = {};

export const RfiContext = createContext(defaultCtx);

/** @returns {RFIProps} */
export const useRfiContext = () => {
  const ctx = useContext(RfiContext);
  if (typeof ctx === "undefined") {
    console.log(
      "RfiContext is undefined, verify you are calling useRfiContext() as child of a <Rfi> component."
    );
  }
  return /** @returns {RFIProps} */ ctx;
};
