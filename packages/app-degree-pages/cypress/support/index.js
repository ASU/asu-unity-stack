// @ts-check
import "cypress-jest-adapter";

import "./commands";
// this is necessary to set an alias to use beforeAll as we do with `jest`
if (!global.beforeAll) {
  global.beforeAll = global.before;
}
if (!global.afterAll) {
  global.afterAll = global.after;
}
