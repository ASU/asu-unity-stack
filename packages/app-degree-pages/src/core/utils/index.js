// @ts-check
import { computePages } from "./compute-pages";
import { formatAcceleratedConcurrentLinks } from "./data-formatter-utils";
import { dataPathResolver, urlResolver } from "./data-path-resolver";
import { fetchData } from "./fetch-data";
import { idGenerator } from "./id-generator";
import { toTitleCase } from "./string-utils";

export * from "./html-utils";
export * from "./css-utils";
export {
  dataPathResolver,
  urlResolver,
  idGenerator,
  toTitleCase,
  fetchData,
  computePages,
  formatAcceleratedConcurrentLinks,
};
