/*eslint-env node*/
import React from "react";
import ReactDOMServer from "react-dom/server";
import { AsuBrandHeader } from "../index.js";

const renderedHeader = ReactDOMServer.renderToString(<AsuBrandHeader />);

export { renderedHeader };
