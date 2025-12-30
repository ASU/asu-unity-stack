/* eslint-disable jest/no-mocks-import */
// @ts-check
import { toMatchImageSnapshot } from "jest-image-snapshot";

import "@testing-library/jest-dom";

import "./__mocks__/window-mock";

if (typeof global.TextEncoder === 'undefined') {
  const util = require('util');
  global.TextEncoder = util.TextEncoder;
}

expect.extend({ toMatchImageSnapshot });
