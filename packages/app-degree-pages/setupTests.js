import fetchMock from "jest-fetch-mock";
import { toMatchImageSnapshot } from "jest-image-snapshot";

fetchMock.enableMocks();

expect.extend({ toMatchImageSnapshot });
