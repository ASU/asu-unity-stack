/* eslint-disable jest/no-mocks-import */
// @ts-check

import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";

import { toMatchImageSnapshot } from "jest-image-snapshot";
import replaceAllInserter from "string.prototype.replaceall";

import "./__mocks__/fetch-mock";
import "./__mocks__/window-mock";

// fix issue with replaceAl()
// @ts-ignore
replaceAllInserter.shim();

expect.extend({ toMatchImageSnapshot });
