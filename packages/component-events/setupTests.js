// @ts-check
import { toMatchImageSnapshot } from "jest-image-snapshot";

import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";

expect.extend({ toMatchImageSnapshot });
