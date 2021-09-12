/* eslint-disable jest/no-mocks-import */
// @ts-check
import { toMatchImageSnapshot } from "jest-image-snapshot";

import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";

// import "./__mocks__/window-mock";
// import "./__mocks__/fetch-mock";
// import "./__mocks__/fileMock";
// import "./__mocks__/styleMock";

expect.extend({ toMatchImageSnapshot });
