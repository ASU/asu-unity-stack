/* eslint-disable jest/no-mocks-import */
// @ts-check
import { toMatchImageSnapshot } from "jest-image-snapshot";

import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";

import "./__mocks__/fetch-mock";

expect.extend({ toMatchImageSnapshot });
